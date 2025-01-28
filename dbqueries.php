<?php
include "dbconfig.php";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// First query
$sql1 = "
    SELECT 
        vrs.venue_id, 
        v.name AS 'venue_name', 
        v.capacity, 
        v.weekday_price AS 'weekday_price', 
        v.weekend_price AS 'weekend_price', 
        v.licensed, 
        v.latitude, 
        v.longitude, 
        SUM(vrs.score) AS 'total_score', 
        COUNT(vrs.score) AS 'review_count',
        ROUND(AVG(vrs.score), 1) AS 'average_score'
    FROM 
        venue_review_score AS vrs 
    JOIN 
        venue AS v 
    ON 
        vrs.venue_id = v.venue_id 
    GROUP BY 
        vrs.venue_id, v.name 
    ORDER BY 
        v.venue_id ASC;
";

$result1 = mysqli_query($conn, $sql1);

$venues = array();
while ($row = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {
    $venues[$row['venue_id']] = $row;
}

// Second query
$sql2 = "
    SELECT 
        venue_id, 
         MAX(CASE WHEN grade = 1 THEN cost END) AS 'grade_1_cost_per_person', 
         MAX(CASE WHEN grade = 2 THEN cost END) AS 'grade_2_cost_per_person', 
         MAX(CASE WHEN grade = 3 THEN cost END) AS 'grade_3_cost_per_person', 
         MAX(CASE WHEN grade = 4 THEN cost END) AS 'grade_4_cost_per_person', 
         MAX(CASE WHEN grade = 5 THEN cost END) AS 'grade_5_cost_per_person' 
    FROM 
        catering 
    GROUP BY 
        venue_id 
    ORDER BY 
        venue_id;
";

$result2 = mysqli_query($conn, $sql2);

while ($row = mysqli_fetch_array($result2, MYSQLI_ASSOC)) {
    if (isset($venues[$row['venue_id']])) {
        $venues[$row['venue_id']] = array_merge($venues[$row['venue_id']], $row);
    }
}

// Third query
$sql3 = "
    SELECT 
        venue_booking.venue_id, 
        GROUP_CONCAT(booking_date ORDER BY booking_date) AS booking_dates 
    FROM 
        venue_booking 
    GROUP BY 
        venue_booking.venue_id;
";

$result3 = mysqli_query($conn, $sql3);

while ($row = mysqli_fetch_array($result3, MYSQLI_ASSOC)) {
    if (isset($venues[$row['venue_id']])) {
        $venues[$row['venue_id']]['booking_dates'] = $row['booking_dates'];
    }
}

echo json_encode(array_values($venues));

mysqli_close($conn);
