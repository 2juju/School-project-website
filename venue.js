let sortType = "menu-item-0"; // Default sort type is "Relevance"
let venues = [];
document.addEventListener("DOMContentLoaded", function () {
  const skeletons = document.querySelectorAll('[data-preload="skeleton"]');
  const contents = document.querySelectorAll('[data-preload="content"]');
  // const skeletonTitleWrapper = document.getElementById("skeleton-title-wrapper");
  const headerAnimation = document.getElementById("main-header");
  const logo = document.querySelector(".logo");
  const headerToggle = document.querySelectorAll(".header-toggle");
  const menuButton = document.getElementById("menu-button");
  const menuContent = document.getElementById("menu-content");
  const searchInputs = document.querySelectorAll(".search-input");
  const searchForm = document.getElementById("search-form");
  const searchInput = searchForm.querySelector("input");
  const suggestionsContainers = document.querySelectorAll(".suggestions");
  const resultPage = document.getElementById("venue_results");
  const wishlistPrice = document.getElementById("wishlist-pricereq");
  const home = document.getElementById("home-page");
  const infoPage = document.getElementById("information-page");

  const venueWrapper = document.getElementById("venue-wrapper");
  const amenitiesCheckbox = document.querySelectorAll('input[name="amenities[]"]');
  const locationCheckbox = document.querySelectorAll('input[name="location[]"]');
  let selectedVenueType = "Show all";
  const toastContainer = document.getElementById("toast-container");
  const sortButton = document.getElementById("sort-button");
  const targetElement = document.getElementById(sortButton.getAttribute("data-target"));
  const filterTitle = document.getElementById("venue-main-title");
  const sortDescription = document.getElementById("sort-description");
  sortDescription.classList.add("invisible");

  const additionalData = {
    1: {
      venue_type: "Hotel",
      description:
        "Nestled in the city's heart, our hotel is a shimmering oasis of modern luxury, offering breathtaking city views that will leave you in awe. With fast wifi, a pet-friendly policy, and an inviting bar and restaurant, we ensure every guest enjoys the ultimate comfort and convenience. Imagine exchanging your vows against a backdrop of twinkling city lights, surrounded by your loved ones, and celebrating the start of your new journey in our stylish and elegant venue. Whether you envision an intimate affair or a grand celebration, our hotel provides the perfect setting to make your dream wedding a reality.",
      amenities: ["fast wifi", "pets allowed", "bar", "restaurant", "non-smoking"],
      location: ["shopping area", "city view"],
      photos: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/19173453.jpg?k=17288610cfbbc226c6cdb5517a044a0ed333fa418c90a6aade1844bcdbc43004&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/249084904.jpg?k=d7fec3fbc55a16e2ea1c8d613de5fe50e4b1f37ea15020496b39d275b7b2e3f6&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113629975.jpg?k=0f42956c31e468df31fbf196e7e3285c3c07e1f1affa6c63df77804385a52b4c&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217389456.jpg?k=6492cd23c39b8ad4c9fdd160129aadfc22dd72d582223dc315c1966081d22fc1&o=&hp=1",
        "https://www.zuerich.com/sites/default/files/imagegallery/web_zuerich_hotel_central_plaza_16954.jpg",
      ],
    },
    2: {
      venue_type: "Hotel",
      description:
        "Discover a seaside paradise at our hotel, where panoramic ocean views and luxurious amenities create an unforgettable wedding experience filled with joy and romance. From our spacious and inviting bridal suites to the relaxing poolside atmosphere, every detail is designed to exceed your expectations and make your special day exceptional. Whether you prefer a beachfront ceremony or a sunset reception on the balcony, our venue promises elegance, charm, and the perfect backdrop to celebrate your love. Embrace the enchanting coastal vibes and let the sound of the waves be the soundtrack to your happily ever after.",
      amenities: ["free parking", "pool", "fast wifi", "non-smoking", "bridal suite", "balcony"],
      location: ["mountain view", "beach", "ocean view"],
      photos: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538287249.jpg?k=92a4e219116bc5c0afd30a0ed9793e563877d3123c8fe95fd6e6cb80ce67794d&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/543669968.jpg?k=b9a8426551e026080e0f1fa46fcf6a036b4115f588f14582e01a3e569016dc4f&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538287264.jpg?k=b3fa9ed2642ac790b7088196e29ac89c52f6539c6f589f4e8d5fc676fa3b0b88&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538287340.jpg?k=db97c33380d4e5286003f66f1cd0af231319b8ba54da64bc4233083af2988ac8&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538287471.jpg?k=f68157037cc448ec85d88b3a7d51dfa5f0b7ec18f18db56b618943dc156cf2b2&o=&hp=1",
      ],
    },
    3: {
      venue_type: "Hotel",
      description:
        "Step into a world of urban sophistication at our hotel, where a vibrant nightclub and stunning city views come together to create an unforgettable experience. Our venue blends contemporary design with top-notch amenities like a relaxing pool, fast wifi, and exclusive bridal suites, ensuring that every moment of your celebration is filled with joy and excitement. Get ready to dance the night away and create memories that will last a lifetime in this stylish and lively setting.",
      amenities: [
        "free parking",
        "pool",
        "fast wifi",
        "non-smoking",
        "bridal suite",
        "balcony",
        "night club",
      ],
      location: ["city view"],
      photos: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/14/9c/exterior.jpg?w=1100&h=-1&s=1",
        "https://media-cdn.tripadvisor.com/media/photo-p/12/6d/b3/b5/marriage-function-of.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/14/b0/dinning.jpg?w=1100&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/14/ad/room-interior.jpg?w=1100&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/14/af/dinning.jpg?w=1100&h=-1&s=1",
      ],
    },
    4: {
      venue_type: "Tavern",
      description:
        "Nestled along a picturesque beachfront, our cosy tavern offers a warm and inviting setting for your blissful beach wedding. With free parking and a laid-back, friendly bar atmosphere, your guests will feel right at home as they celebrate your special day with you. Imagine saying 'I do' with the soothing sound of waves in the background and sharing joyful moments with your loved ones on our sun-drenched patio. Whether planning an intimate gathering or a lively beach party, our tavern provides the perfect blend of charm and relaxation to make your dream wedding a reality.",
      amenities: ["free parking", "pets not allowed", "bar"],
      location: ["beach"],
      photos: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/49/4a/81/seaview-tavern-front.jpg?w=2000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/15/ef/5e/photo2jpg.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/14/87/e6/seaview-tavern.jpg?w=2000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ad/9e/5b/20160703-124537-largejpg.jpg?w=1600&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/27/b5/5d/caption.jpg?w=1400&h=-1&s=1",
      ],
    },
    5: {
      venue_type: "Castle",
      description:
        "Experience the magic and enchantment of a fairytale wedding at our historic castle, surrounded by the beauty of our enchanting gardens and rich history. With amenities like free parking, disabled access, and pet-friendly policies, our venue caters to the needs of every guest, ensuring a seamless and memorable celebration. Picture yourself walking down the aisle amidst the blooming flowers and ancient stone walls, followed by a reception filled with joy, laughter, and elegance. Whether you choose our scenic gardens or the iconic landmark views, our castle promises a timeless and unforgettable backdrop for your love story.",
      amenities: ["free parking", "disabled parking", "non-smoking", "pets allowed"],
      location: ["garden", "shopping area", "landmark"],
      photos: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/62/aa/ashby-de-la-zouch-castle.jpg?w=1400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/30/a6/d9/rainbow-over-ashby-de.jpg?w=2200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/58/09/4b/ashby-de-la-zouch-castle.jpg?w=1100&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e9/ad/ff/caption.jpg?w=1100&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/93/54/d1/view.jpg?w=1400&h=-1&s=1",
      ],
    },
    6: {
      venue_type: "Hotel",
      description:
        "Immerse yourself in the tranquillity and serenity of our hotel, featuring lush garden views and luxurious amenities that will make your stay truly exceptional. Surround yourself with the beauty of nature and let the peaceful ambience soothe your senses, creating the perfect setting for your special occasion. Rejoice in the enchanting atmosphere of our venue, crafted for relaxation and celebration! Whether you envision a romantic garden ceremony or an elegant indoor reception, our hotel offers versatile spaces to bring your wedding dreams to life. With fast, reliable WiFi and complimentary parking, we'll ensure your special day is as seamless as stunning. Bask in the joy and happiness that fills the air as we cater to your every need, making your celebration an unforgettable experience. Let our dedicated team transform your vision into a reality where every moment is infused with warmth, love, and the promise of a lifetime of happiness. Embrace the magic and let our venue be the canvas for your most cherished memories.",
      amenities: [
        "free parking",
        "pool",
        "fast wifi",
        "non-smoking",
        "balcony",
        "restaurant",
        "bar",
      ],
      location: ["garden"],
      photos: [
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/431636210.jpg?k=3f614acb5645f6ef4420bfbb1df0b41a048f3e7f8fd1eff7e311445e38a32298&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/152713740.jpg?k=9ca8da373b28ce744de734119ea05b4bc8dedec9fda35bf193f7974203e24582&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/514396081.jpg?k=3e06a31f114f8e821baa2218b0bd16ec13568d083b9f65ed1986537ff0879315&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/163263068.jpg?k=39897307eb5993f287048520536f159c5d2e4ada4511ac3c96fccd1e528fc17b&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/281899751.jpg?k=c3d27211165b041ea0d06ce9e86834e72bc2d6d368d8f2567e2109dba236cfa7&o=&hp=1",
      ],
    },
    7: {
      venue_type: "Residential",
      description:
        "Escape to our residential venue's serene and rejuvenating embrace of the mountains! Offering panoramic vistas and unparalleled tranquillity, our retreat is a true oasis of peace. Indulge in the refreshing pool, soak in the sun on our spacious balconies, and feel the world's weight melt away. Imagine exchanging heartfelt vows surrounded by majestic peaks and celebrating your love under the twinkling starlit sky. Whether you prefer an outdoor ceremony overlooking the awe-inspiring landscape or a cosy indoor reception, our venue promises a magical mountain wedding experience that will fill your heart with joy and lasting memories.",
      amenities: ["free parking", "pool", "fast wifi", "non-smoking", "balcony", "pets allowed"],
      location: ["mountain view"],
      photos: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513444988.jpg?k=990a1a97c0ff3b013bbb81a3b360999b28d13b6db783f10bb35e66edfef6abec&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513444911.jpg?k=33e4a5ffa3fe841a89902f2f35e910fe4182eabb83ad64b71273028ffef6fc97&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513444886.jpg?k=96f70d06875f27e469362b0acdfd6575458d91224c2db775f3254d3dabe906b8&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513444957.jpg?k=4e01ba12565a4fa3a463c1c0dd3eab73a9a97230a715200ca4e97d7c09f5a623&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513444857.jpg?k=71e0a810f17fa96531c0bfb207468cfc81f82d518aeab917c8c5180c489e957a&o=&hp=1",
      ],
    },
    8: {
      venue_type: "Hotel",
      description:
        "Elevate your wedding celebration to new heights at our city hotel, where modern elegance meets panoramic views. Bask in the convenience of free parking and fast Wi-Fi, and indulge in the culinary delights of our gourmet restaurant. Every detail has been crafted with your happiness in mind, from our chic event spaces to stylish accommodations. Whether planning an intimate gathering or a lavish affair, our hotel offers the perfect blend of sophistication and charm, ensuring your special day is unforgettable.",
      amenities: ["free parking", "fast wifi", "non-smoking", "pets not allowed", "restaurant"],
      location: ["city view"],
      photos: [
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/173571453.jpg?k=89cd8fec4eb75c501b522209933657d7ec72965c7f6ecc40088c870aebf52b1b&o=&s=1024x",
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/173571844.jpg?k=23116f461b10026577a88f75dc4c5682fa8cf2629e4093908440d2d1ae2c06ac&o=&s=1024x",
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/173571755.jpg?k=190f4e3f0f4762fc575d4bcbd01043a3b727b87bccfb738e2b913fd7ceb4d2c3&o=&s=1024x",
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/173134829.jpg?k=9d6f0b2b45f356f4bfebb96cfab65291a4df3bbe6fb00247da3a60687bef95a1&o=&s=1024x",
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/173134851.jpg?k=fe1e95ef51a11337ba21ab289c6b281b6f1194e4e0c8beb64378b55e269a81f6&o=&s=1024x",
      ],
    },
    9: {
      venue_type: "Tavern",
      description:
        "Discover the rustic charm and scenic beauty that await you at our mountain tavern, nestled in a picturesque setting. Cosy interiors, a welcoming bar, and pet-friendly accommodations create a warm and inviting atmosphere, perfect for your wedding festivities. Immerse yourself in the natural splendour surrounding you and let the world's stress melt away. Celebrate your love in this charming and picturesque setting, where the beauty of the mountains and the warmth of the tavern will create a truly unforgettable experience.",
      amenities: ["free parking", "fast wifi", "non-smoking", "pets allowed", "restaurant", "bar"],
      location: ["mountain view"],
      photos: [
        "https://lh3.googleusercontent.com/p/AF1QipNOwlB39cGajFZRP28jnHS_FVTAibegxENbEs1i=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMkZAz6IW5Tdzm7QyeJA5n5VfrcvVIq8ePnUeiC=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNQo3hOn-ozywZIY4yAySIBX3B5rO9NtW988kWO=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNN_syHvm-h_8tlHBBL2AInrKU1-u2HqqkTKTuu=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNcr7Ndgsbe_XJ2L64wBXtZuwWsS1lBpENrQKA=s1360-w1360-h1020",
      ],
    },
    10: {
      venue_type: "Residential",
      description:
        "Step back in time at our historic residential venue, located near a prominent landmark. With amenities like free parking and a delightful restaurant, our venue offers timeless elegance and unmatched hospitality. Picture exchanging vows in our beautifully preserved surroundings, followed by a reception filled with laughter and joy. Whether you prefer an intimate gathering or a grand celebration, our residential venue provides a classic backdrop for creating cherished memories.",
      amenities: ["free parking", "restaurant"],
      location: ["landmark"],
      photos: [
        "https://www.thegrandsouthampton.co.uk/wp-content/uploads/2023/04/TheGrand2-71-scaled.jpg",
        "https://www.thegrandsouthampton.co.uk/wp-content/uploads/2023/04/TheGrand2-2-scaled.jpg",
        "https://www.thegrandsouthampton.co.uk/wp-content/uploads/2023/04/TheGrand2-66-scaled.jpg",
        "https://www.thegrandsouthampton.co.uk/wp-content/uploads/2023/04/TheGrand2-3-scaled.jpg",
        "https://www.thegrandsouthampton.co.uk/wp-content/uploads/2024/01/0H6A7862_1.webp",
      ],
    },
  };
  logo.addEventListener("mouseenter", () => {
    headerAnimation.classList.remove("text-wedding-boothill", "bg-white");
    headerAnimation.classList.add(
      "bg-wedding-boothill",
      "text-white",
      "ease-in-out",
      "duration-200"
    );
  });

  logo.addEventListener("mouseleave", () => {
    headerAnimation.classList.add("text-wedding-boothill", "bg-white");
    headerAnimation.classList.remove("bg-wedding-boothill", "text-white");
  });

  headerToggle.forEach((toggle) => {
    toggle.addEventListener("mouseenter", () => {
      headerAnimation.classList.add("underline-animation");
      headerAnimation.classList.add("underline-animation-active");
    });

    toggle.addEventListener("mouseleave", () => {
      headerAnimation.classList.remove("underline-animation-active");
    });
  });

  menuButton.addEventListener("click", () => {
    menuContent.classList.toggle("hidden");
  });
  window.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
      menuContent.classList.add("hidden");
    }
  });

  fetch("/dbqueries.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(async (fetchedVenues) => {
      venues = await Promise.all(
        fetchedVenues.map(async (venue) => {
          let additionalInfo = additionalData[venue.venue_id];
          if (additionalInfo) {
            venue = { ...venue, ...additionalInfo };
            // console.log("Venue with additional info:", venue);
          }
          const locationInfo = await reverseGeocode(venue.latitude, venue.longitude, [
            "city",
            "name",
          ]);
          venue.distance = calculateDistance(
            venue.latitude,
            venue.longitude,
            locationInfo.latitude,
            locationInfo.longitude
          );
          venue.locationInfo = locationInfo;
          return venue;
        })
      );
      sortVenues(sortType);
      displayVenues();
      filterTitle.classList.remove("hidden");
      contents.forEach((content) => {
        content.setAttribute("data-loaded", "true");
      });
      let allLoaded = true;

      contents.forEach((content) => {
        if (content.getAttribute("data-loaded") === "false") {
          allLoaded = false;
        }
      });

      if (allLoaded) {
        skeletons.forEach((skeleton) => skeleton.classList.add("hidden"));
      } else {
        skeletons.forEach((skeleton) => skeleton.classList.remove("hidden"));
      }
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  function sortVenues(sortType) {
    switch (sortType) {
      case "menu-item-0":
        sortDescription.textContent = "Most Relevant Venues";
        console.log("Sorting by: Relevance");
        // showAlert("Sorting by: Relevance", "[#acb6e5]");
        venues.sort((a, b) => a.venue_id - b.venue_id);
        break;
      case "menu-item-1":
        sortDescription.textContent = "Most Popular Venues";
        console.log("Sorting by: Most Popular");
        showAlert("Sorting by: Most Popular", "[#acb6e5]");
        venues.sort((a, b) => b.review_count - a.review_count);
        break;

      case "menu-item-2":
        sortDescription.textContent = "Best Rated Venues";
        console.log("Sorting by: Best Rating");
        showAlert("Sorting by: Best Rating ", "[#acb6e5]");
        venues.sort((a, b) => b.average_score - a.average_score);
        break;

      case "menu-item-3":
        sortDescription.textContent = "Licensed Venues";
        console.log("Sorting by: Licensed");
        showAlert("Sorting by: Licensed", "[#acb6e5]");
        venues.sort((a, b) => (b.licensed === 1) - (a.licensed === 1));
        break;

      case "menu-item-4":
        sortDescription.textContent = "Most Affordable Venues";
        console.log("Sorting by: Price: Low to High");
        showAlert("Sorting by: Price: Low to High", "[#acb6e5]");
        venues.sort((a, b) => a.weekday_price - b.weekday_price);
        break;

      case "menu-item-5":
        sortDescription.textContent = "Most Expensive Venues";
        console.log("Sorting by: Price: High to Low");
        showAlert("Sorting by: Price: High to Low", "[#acb6e5]");
        venues.sort((a, b) => b.weekday_price - a.weekday_price);
        break;

      case "menu-item-6":
        sortDescription.textContent = "High Capacity Venues";
        console.log("Sorting by: Capacity: Low to High");
        showAlert("Sorting by: Capacity: Low to High", "[#acb6e5]");
        venues.sort((a, b) => a.capacity - b.capacity);
        break;

      case "menu-item-7":
        sortDescription.textContent = "Low Capacity Venues";
        console.log("Sorting by: Capacity: High to Low");
        showAlert("Sorting by: Capacity: High to Low", "[#acb6e5]");
        venues.sort((a, b) => b.capacity - a.capacity);
        break;

      case "menu-item-8":
        console.log("Sorting by: A-Z");
        showAlert("Sorting by: A-Z", "[#acb6e5]");
        venues.sort((a, b) => a.venue_name.localeCompare(b.venue_name));
        break;

      case "menu-item-9":
        console.log("Sorting by: Z-A");
        showAlert("Sorting by: Z-A", "[#acb6e5]");
        venues.sort((a, b) => b.venue_name.localeCompare(a.venue_name));
        break;

      default:
        console.log("Unknown sort option");
        break;
    }
    // displayVenues();
  }
  function searchFunction(query) {
    console.log("Search term:", query);
    const suggestion = venues.find((venue) =>
      venue.venue_name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(venues.venue_name);
    if (suggestion) {
      console.log(`You searched for: ${suggestion.venue_name}`);
    } else {
      console.error(`Element with name ${query} not found.`);
    }
  }

  searchInputs.forEach((searchInput, index) => {
    const suggestions = suggestionsContainers[0];
    const skeleSuggest = suggestionsContainers[1];
    for (let i = 0; i < 3; i++) {
      const skeletonSuggestionWrapper = document.createElement("li");
      const skeletonSuggestion = document.createElement("a");
      skeletonSuggestion.innerHTML = `<div class="flex w-full h-full p-3">
  <div class="w-40 h-24 bg-gray-300 animate-pulse"></div>
  <div class="px-3 py-2 w-full">
    <div class="h-4 bg-gray-300 animate-pulse mb-4 w-3/4"></div>
    <div class="flex items-center justify-start">
      <div class="relative flex items-center justify-center w-14 h-14">
        <div class="w-full h-full bg-gray-300 rounded-full animate-pulse"></div>
      </div>
      <div class="ml-3 w-1/4">
        <div class="h-4 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  </div>
</div>`;
      skeletonSuggestion.classList.add("block", "p-2", "pointer-events-none");
      skeletonSuggestionWrapper.appendChild(skeletonSuggestion);
      skeletonSuggestionWrapper.classList.add(
        "p-2",
        "bg-white",
        "border",
        "border-gray-200",
        "rounded-lg"
      );
      skeleSuggest.appendChild(skeletonSuggestionWrapper);
    }

    const displaySuggestions = (query) => {
      suggestions.innerHTML = "";

      if (query.length > 0) {
        const filteredSuggestions = venues.filter((venue) =>
          venue.venue_name.toLowerCase().includes(query.toLowerCase())
        );

        filteredSuggestions.forEach((suggestion) => {
          const suggestionItem = document.createElement("li");
          const suggestionLink = document.createElement("a");
          suggestionLink.innerHTML = `<div class="flex w-full h-full p-3">
            <img class="w-40 h-full" src="${suggestion.photos[0]}" alt="">
            <div class="px-3 py-2">
                <p class="pb-4">${suggestion.venue_name}</p>
                <div class="flex items-center justify-start">
          <div class="relative flex items-center justify-center w-14 h-14">
              <div class="absolute top-0 left-0 w-full h-full rounded-full bg-wedding-sage bg-opacity-30 animate-pulse animate-scaleChange"></div>
              <div class="relative flex items-center justify-center w-8 h-8 rounded-full bg-wedding-sage">
                  <i class="text-xl ph ph-map-pin"></i>
              </div>
          </div>
               <span class="ml-3">${suggestion.locationInfo.city}</span>
              </div>
            </div>
          </div>`;
          suggestionLink.href = "#";
          suggestionLink.className = "block p-2 cursor-pointer hover:bg-gray-200";

          suggestionItem.appendChild(suggestionLink);
          suggestionItem.className =
            "p-2 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200";

          suggestionLink.addEventListener("click", (e) => {
            e.preventDefault();
            searchInput.value = suggestion.venue_name;
            suggestions.innerHTML = "";
            suggestions.classList.add("hidden");

            handleSearch(suggestion.venue_name);
          });

          suggestions.appendChild(suggestionItem);
        });

        if (filteredSuggestions.length > 0) {
          suggestions.classList.remove("hidden");
        } else {
          suggestions.classList.add("hidden");
        }
      } else {
        suggestions.classList.add("hidden");
      }
    };
    searchInput.addEventListener("input", (e) => {
      displaySuggestions(e.target.value);
    });
    searchInput.addEventListener("focus", () => {
      skeleSuggest.classList.remove("hidden");
      if (searchInput.value.length > 0) {
        displaySuggestions(searchInput.value);
        suggestions.classList.remove("hidden");
      }
    });

    searchInput.addEventListener("blur", () => {
      setTimeout(() => {
        suggestions.classList.add("hidden");
      }, 100); // Delay to allow click event on suggestions to register
    });

    window.addEventListener("click", (event) => {
      if (!suggestions.contains(event.target) && event.target !== searchInput) {
        suggestions.classList.add("hidden");
      }
      if (!skeleSuggest.contains(event.target) && event.target !== searchInput) {
        skeleSuggest.classList.add("hidden");
      }
    });
  });

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the search term
    const searchTerm = searchInput.value.trim().toLowerCase();
    handleSearch(searchTerm);
  });

  function handleSearch(query) {
    const suggestion = venues.find((venue) =>
      venue.venue_name.toLowerCase().includes(query.toLowerCase())
    );

    if (suggestion) {
      console.log(`You searched for: ${suggestion.venue_name}`);
      window.location.hash = suggestion.venue_id;
    } else {
      // Otherwise, display suggestions
      searchFunction(query);
    }
  }

  function displayVenues() {
    // console.log(`${venue}`)
    clearVenueWrapper();
    if (!venues || venues.length === 0) {
      console.error("No venues to display");
      return;
    }
    venues.forEach((venue) => {
      let venueElement = createVenueElement(venue);
      venueWrapper.appendChild(venueElement);
      const availableDates = venue.booking_dates || [];
      const allDates = getAllDatesForYear(new Date().getFullYear());
      const unavailableDates = allDates.filter((date) => !availableDates.includes(date));

      flatpickr(`#datepicker-${venue.venue_id}`, {
        dateFormat: "Y-m-d",
        minDate: "today",
        enable: unavailableDates,
      });
    });
    loadStoredData();
    clearWishlistOnly();
    const storedWishlistItems = loadFromLocalStorage("wishlistItems");
    console.log("Loaded wishlist items from localStorage:", storedWishlistItems);
    storedWishlistItems.forEach((wishlistItem) => {
      if (isItemInWishlist(wishlistItem)) {
        addWishlistItem(wishlistItem);
        updateWishlistIcon(wishlistItem, true);
      }
    });
  }

  const clearButton = document.querySelector("#price-clear"); //
  clearButton.addEventListener("click", clearStoredData);

  document.getElementById("sort-options").addEventListener("change", function (event) {
    sortType = event.target.value;
    // event.target.setAttribute("data-active", "true");
    if (sortType !== "menu-item-8" && sortType !== "menu-item-9") {
      sortDescription.classList.remove("invisible");
    } else {
      sortDescription.classList.add("invisible");
    }

    if (venues && venues.length > 0) {
      sortVenues(sortType);
      displayVenues();
    } else {
      console.error("No venues to display");
    }
  });

  function clearVenueWrapper() {
    venueWrapper.innerHTML = "";
  }

  const venueCategory = {
    1: {
      name: "Central Plaza",
      ratings: {
        staff: 75,
        comfort: 78,
        freeWifi: 80,
        facilities: 70,
        valueForMoney: 77,
        cleanliness: 74,
        location: 76,
      },
    },
    2: {
      name: "Pacific Towers Hotel",
      ratings: {
        staff: 50,
        comfort: 53,
        freeWifi: 55,
        facilities: 48,
        valueForMoney: 52,
        cleanliness: 49,
        location: 51,
      },
    },
    3: {
      name: "Sky Center Complex",
      ratings: {
        staff: 69,
        comfort: 72,
        freeWifi: 71,
        facilities: 68,
        valueForMoney: 70,
        cleanliness: 73,
        location: 69,
      },
    },
    4: {
      name: "Sea View Tavern",
      ratings: {
        staff: 64,
        comfort: 67,
        freeWifi: 66,
        facilities: 63,
        valueForMoney: 65,
        cleanliness: 68,
        location: 64,
      },
    },
    5: {
      name: "Ashby Castle",
      ratings: {
        staff: 90,
        comfort: 93,
        freeWifi: 92,
        facilities: 89,
        valueForMoney: 91,
        cleanliness: 94,
        location: 90,
      },
    },
    6: {
      name: "Fawlty Towers",
      ratings: {
        staff: 59,
        comfort: 62,
        freeWifi: 61,
        facilities: 58,
        valueForMoney: 60,
        cleanliness: 63,
        location: 59,
      },
    },
    7: {
      name: "Hilltop Mansion",
      ratings: {
        staff: 47,
        comfort: 50,
        freeWifi: 49,
        facilities: 46,
        valueForMoney: 48,
        cleanliness: 51,
        location: 47,
      },
    },
    8: {
      name: "Haslegrave Hotel",
      ratings: {
        staff: 87,
        comfort: 90,
        freeWifi: 89,
        facilities: 86,
        valueForMoney: 88,
        cleanliness: 91,
        location: 87,
      },
    },
    9: {
      name: "Forest Inn",
      ratings: {
        staff: 74,
        comfort: 77,
        freeWifi: 76,
        facilities: 73,
        valueForMoney: 75,
        cleanliness: 78,
        location: 74,
      },
    },
    10: {
      name: "Southwestern Estate",
      ratings: {
        staff: 84,
        comfort: 87,
        freeWifi: 86,
        facilities: 83,
        valueForMoney: 85,
        cleanliness: 88,
        location: 84,
      },
    },
  };
  function createVenueElement(venue) {
    const venueElement = document.createElement("div");
    venueElement.setAttribute("id", venue.venue_id);
    venueElement.classList.add("venue");
    let amenitiesHTML = "";
    let locationHTML = "";
    const catergory = venueCategory[venue.venue_id];

    venueElement.dataset.venueAmenities = (
      Array.isArray(venue.amenities) ? [...venue.amenities, venue.licensed] : [venue.licensed]
    ).join(", ");

    const amenities = venue.amenities;
    amenities.forEach((amenities) => {
      amenitiesHTML += `<li><span><i class="mr-2 text-wedding-sage ph-bold ph-check"></i></span><span>${amenities}</li></span>`;
    });

    venueElement.dataset.venueLocation = Array.isArray(venue.location)
      ? venue.location.join(", ")
      : "";

    if (Array.isArray(venue.location)) {
      venue.location.forEach((locationItem) => {
        locationHTML += `<li><span><i class="mr-2 text-wedding-sage ph-bold ph-check"></i></span><span>${locationItem}</span></li>`;
      });
    }

    const type = venue.venue_type;
    venueElement.dataset.venueType = type;

    venueThumbnail =
      Array.isArray(venue.photos) && venue.photos.length > 0 ? venue.photos[0] : undefined;
    gallery0 = venueThumbnail; // Since gallery0 is the same as venueThumbnail
    gallery1 = Array.isArray(venue.photos) && venue.photos.length > 1 ? venue.photos[1] : undefined;
    gallery2 = Array.isArray(venue.photos) && venue.photos.length > 2 ? venue.photos[2] : undefined;
    gallery3 = Array.isArray(venue.photos) && venue.photos.length > 3 ? venue.photos[3] : undefined;
    gallery4 = Array.isArray(venue.photos) && venue.photos.length > 4 ? venue.photos[4] : undefined;

    function createIcon(icon, statusMessage, hidden = false) {
      const hiddenClass = hidden ? "hidden" : "";
      return `<div class="h-full flex items-center justify-center gap-x-2 ${hiddenClass}"><span class="relative flex items-center justify-center w-6 h-6 bg-wedding-churin/50 rounded-full"><i class="absolute ${icon} text-wedding-sage"></i></span>${statusMessage}</div>`;
    }
    const costStatus =
      venue.weekday_price == 7000
        ? createIcon("ph-bold ph-currency-gbp", "Most Expensive")
        : venue.weekday_price >= 2000
        ? createIcon("ph-bold ph-currency-gbp", "Expensive")
        : venue.weekday_price >= 1500
        ? createIcon("ph-bold ph-currency-gbp", "Moderate")
        : createIcon("ph-bold ph-currency-gbp", "Affordable");

    const ratingStatus =
      venue.average_score > 9
        ? "- Best Rating"
        : venue.average_score >= 7.5
        ? "- Excellent"
        : venue.average_score >= 5
        ? "- Average"
        : "- Not recommended";

    const capacityStatus =
      venue.capacity >= 900
        ? createIcon("fa-solid fa-people-group fa-bounce ", "Highest Capacity")
        : venue.capacity >= 500
        ? createIcon("fa-solid fa-person", "High Capacity")
        : venue.capacity >= 300
        ? createIcon("fa-solid fa-person", "Medium Capacity")
        : venue.capacity >= 150
        ? createIcon("fa-solid fa-person", "Regular Capacity")
        : createIcon("fa-solid fa-person", "Low Capacity");

    const licenseStatus =
      venue.licensed == 1
        ? createIcon("ph-fill ph-identification-badge", "Licensed")
        : createIcon("", "", true);

    const radioGroupName = `grade_${venue.venue_id}`;
    const grade1Cost = venue.grade_1_cost_per_person;
    const grade2Cost = venue.grade_2_cost_per_person;
    const grade3Cost = venue.grade_3_cost_per_person;
    const grade4Cost = venue.grade_4_cost_per_person;
    const grade5Cost = venue.grade_5_cost_per_person;
    let grade;

    venueElement.innerHTML = `<div class="hover:scale-105 z-50 hover:shadow-lg transition duration-300 ease-in-out h-full mb-10 bg-white border-gray-200 rounded-lg border w-full" data-view="row">
      <div class=" flex items-center h-full w-full flex-row">
          <img id="venue-thumbnail" class="object-cover w-96 h-[500px]" src="${venueThumbnail}" alt="${
      venue.venue_name
    }" />
          <div class="flex flex-col w-full px-4 leading-normal">
              <span class="flex items-center justify-between w-full">
                  <h5 class="mb-2 font-bold tracking-tight text-2xl">
                      ${venue.venue_name}
                  </h5>
                  <button id="wishlistButton" class="bg-none border-none" data-item-score="${
                    venue.average_score
                  }" data-item-price="${venue.weekday_price}" data-item-name="${
      venue.venue_name
    }" data-item-image-url="${venueThumbnail}" data-item-id="${venue.venue_id}">
                  
      <div class="heart-bg relative bg-[#ffc0c8]/0 rounded-full h-[100px] w-[100px] flex items-center justify-center transition-all duration-100 ease-out cursor-auto">
      <div class="heart-outline absolute top-0 left-0 w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xml:space="preserve" class="w-full h-full"><path fill="none" stroke="#E2264D" stroke-width="3" d="M46.145 37.61a168 168 0 0 0 4.744 3.26c6.824-4.81 9.145-4.919 12.832-.662 3.001 3.464 2.177 7.241.658 10.834-1.121 2.65-2.563 5.346-4.494 7.436-7.511 8.134-10.373 8.347-17.575.11-3.695-4.225-7.449-9.129-5.31-15.62 1.4-4.253 4.202-6.449 9.145-5.358z"class="hover:fill-[#E2264D]"/></svg>
      </div>
      <div class="heart-icon w-full h-full bg-[url('heart.png')] bg-left absolute hidden"></div>
  </div>

                  </button>
              </span>

              <span id="rating-main" class="flex items-center w-full pb-6">
                  <i class="text-yellow-400 ph-fill ph-star"></i>
                  <p class="px-2">${venue.average_score}</p>
                  <p class="text-sm">(${venue.review_count})</p>
              </span>
              <h5 class="mb-2 text-end font-bold tracking-tight hover:text-wedding-sage text-2xl">From £${
                venue.weekday_price
              }</h5>
          <div class="w-full p-6">
  <div class="space-y-2 accordion">

    <button class="flex items-center justify-between w-full gap-3 pt-2 pb-5 border-b border-gray-200 accordion-button hover:bg-gray-100" data-tab="info">
      ${venue.venue_type}
      <i class="w-3 h-3 accordion-button-icon shrink-0 ph-bold ph-caret-down transition-all duration-300 ease-in-out rotate-0"></i>
    </button>
    <button class="flex group items-center justify-start w-full pt-2 pb-5 border-b border-gray-200 accordion-button hover:bg-gray-100" data-tab="map">
    <span id="locationAccordionText-${venue.venue_id}"></span>
      <i class="w-3 h-3 accordion-button-icon shrink-0 ph-bold ph-caret-down ml-auto transition-all duration-300 ease-in-out rotate-0"></i>
    </button>
    <button class="flex items-center justify-between w-full gap-3 pt-2 pb-5 border-b border-gray-200 accordion-button hover:bg-gray-100" data-tab="photos">
      Photos
      <i class="w-3 h-3 accordion-button-icon shrink-0 ph-bold ph-caret-down transition-all duration-300 ease-in-out rotate-0"></i>
    </button>
                <button data-tab="price" class="accordion-button text-sm text-wedding-sage ms-auto hover:underline">Jump to Price Requests</button>

  </div>
</div>
                  <div class="flex flex-wrap px-6 gap-y-5 font-light justify-between">
                  ${costStatus}
                  ${capacityStatus}
                  ${licenseStatus}
                </div>
              </div>
          </div>
      </div>
      
      <div id="dropdown-tabs" class="hover:scale-105 h-0 overflow-hidden rounded-lg hover:shadow-lg transition-height duration-300 ease-in-out bg-white px-4 mx-auto mb-4">
    <div class="relative">
        <div class="flex border-b relative justify-between space-x-4 tabs">
            <button id="tab-info" class="inline-block w-full p-4 tab-btn hover:text-wedding-boothill" data-tab="info">
                Info
            </button>
            <button id="tab-map" class="inline-block w-full p-4 tab-btn hover:text-wedding-boothill" data-tab="map">
                Map
            </button>
            <button id="tab-photos" class="inline-block w-full p-4 tab-btn hover:text-wedding-boothill" data-tab="photos">
                Photos
            </button>
            <button id="tab-reviews" class="inline-block w-full p-4 tab-btn hover:text-wedding-boothill" data-tab="reviews">
                Reviews
            </button>
            <button id="tab-price" class="inline-block w-full p-4 tab-btn hover:text-wedding-boothill" data-tab="price">
                Price
            </button>
        </div>
        <div id="tab-indicator" class="absolute bottom-0 left-0 h-[1px] bg-wedding-boothill transition-all duration-300 ease-in-out"></div>
    </div>
    <div id="tab-content" class="h-auto">
              <div id="content-info" class="hidden tab-content">
            <div class="py-5 border-b border-gray-200 ">
                <h3 class="text-xl font-semibold">About ${venue.venue_name}</h3>
                <br>
                <p class="text-sm font-light">${venue.description}</p>
                <br>


                <h3 class="text-lg">Most popular facilities</h3>
                <div id="filter-info" class=" text-sm font-light ">
                    <div id="extras" class="p-1 capitalize flex space-x-10">
                        <ul>${amenitiesHTML}</ul>
                        <ul>${locationHTML}</ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="content-map" class="hidden h-full tab-content">
            <h3 class="pb-2 text-xl hover:text-wedding-sage font-bold">${
              venue.venue_name
            } - Location</h3>
            <div id="map-${venue.venue_id}" class="" style="height: 400px;" ></div>
        </div>

             <div id="content-photos" class="hidden h-full tab-content">
                  <h3 class="pb-2 text-xl hover:text-wedding-sage font-bold">${
                    venue.venue_name
                  } Gallery.
                  </h3>

                  
<div class="flex items-center justify-center">

        <div id="controls-carousel" class="relative rounded-lg w-full carousel-container" data-carousel="slide">
            <div class="pb-4 h-96 carousel-track">
                <div class="carousel-item" data-carousel-item>
                    <img src="${gallery0}" alt="thumbnail">
                </div>
                <div class="carousel-item" data-carousel-item>
                    <img src="${gallery1}" alt="1">
                </div>
                <div class="carousel-item" data-carousel-item>
                    <img src="${gallery2}" alt="2">
                </div>
                <div class="carousel-item" data-carousel-item>
                    <img src="${gallery3}" alt="3">
                </div>
                <div class="carousel-item" data-carousel-item>
                    <img src="${gallery4}" alt="4">
                </div>
            </div>
            <div class="carousel-pagination [&_button]:bg-white [&_button.active]:bg-wedding-sage absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full pagination-button"></button>
            <button type="button" class="w-3 h-3 rounded-full pagination-button"></button>
            <button type="button" class="w-3 h-3 rounded-full pagination-button"></button>
            <button type="button" class="w-3 h-3 rounded-full pagination-button"></button>
            <button type="button" class="w-3 h-3 rounded-full pagination-button"></button>
        </div>
            <button type="button" class="carousel-button prev rounded-full bg-wedding-navy hover:bg-wedding-boothill text-wedding-churin hover:text-wedding-sage" data-carousel-prev>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button type="button" class="carousel-button next rounded-full bg-wedding-navy hover:bg-wedding-boothill text-wedding-churin hover:text-wedding-sage" data-carousel-next>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>


              </div>
              <div id="content-reviews" class="hidden content-center h-full tab-content">
                  <div class="flex items-center mb-5 top-0">
                      <p class="bg-wedding-sage  text-sm font-semibold inline-flex items-center p-1.5 rounded">${
                        venue.average_score
                      }</p>
                      <p class=" ms-2 ">${ratingStatus}</p>

                      <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full "></span>
                      <p class="text-sm">${venue.review_count} reviews</p>
                      <a href="#" class="text-sm  text-wedding-sage ms-auto hover:underline ">Read
                          all reviews</a>
                  </div>

                  <div class="gap-8 grid grid-cols-2">
                      <div>
                          <dl>
                              <dt class="text-sm ">Staff</dt>
                              <dd class="flex items-center mb-3">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded" style="width:${
                                        catergory.ratings.staff
                                      }%;">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.staff}%</span>
                              </dd>
                          </dl>
                          <dl>
                              <dt class="text-sm ">Comfort</dt>
                              <dd class="flex items-center mb-3">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded " style="width:${
                                        catergory.ratings.comfort
                                      }%;">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.comfort}%</span>
                              </dd>
                          </dl>
                          <dl>
                              <dt class="text-sm ">Free WiFi</dt>
                              <dd class="flex items-center mb-3">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded " style="width:${
                                        catergory.ratings.freeWifi
                                      }%;">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.freeWifi}%</span>
                              </dd>
                          </dl>
                          <dl>
                              <dt class="text-sm ">Facilities</dt>
                              <dd class="flex items-center">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded " style="width:${
                                        catergory.ratings.facilities
                                      }%;">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.facilities}%</span>
                              </dd>
                          </dl>
                      </div>
                      <div>
                          <dl>
                              <dt class="text-sm ">Value for money</dt>
                              <dd class="flex items-center mb-3">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded " style="width:${
                                        catergory.ratings.valueForMoney
                                      }%;">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.valueForMoney}%</span>
                              </dd>
                          </dl>
                          <dl>
                              <dt class="text-sm ">Cleanliness</dt>
                              <dd class="flex items-center mb-3">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded " style="width:${
                                        catergory.ratings.cleanliness
                                      }%;">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.cleanliness}%</span>
                              </dd>
                          </dl>
                          <dl>
                              <dt class="text-sm ">Location</dt>
                              <dd class="flex items-center">
                                  <div class="w-full bg-gray-200 rounded h-2.5  me-2">
                                      <div class="bg-wedding-sage h-2.5 rounded "style="width:${
                                        catergory.ratings.location
                                      }%">
                                      </div>
                                  </div>
                                  <span class="text-sm">${catergory.ratings.location}%</span>
                              </dd>
                          </dl>
                      </div>
                  </div>

              </div>
              <div id="content-price" class="hidden h-full tab-content">
                  <form data-url="${venueThumbnail}" data-name="${
      venue.venue_name
    }" data-weekday-price="${venue.weekday_price}" data-weekend-price="${
      venue.weekend_price
    }" data-grade-1-cost-per-person="${
      venue.grade_1_cost_per_person
    }"data-grade-2-cost-per-person="${
      venue.grade_2_cost_per_person
    }"data-grade-3-cost-per-person="${
      venue.grade_3_cost_per_person
    }"data-grade-4-cost-per-person="${
      venue.grade_4_cost_per_person
    }"data-grade-5-cost-per-person="${venue.grade_5_cost_per_person}" id="myForm" data-venue-id="${
      venue.venue_id
    }"  novalidate>
                  <div class="grid grid-cols-2 h-full justify-between w-full">
                 
                      <div id="date-selection" class="inline">
                          <p>Pick an available date</p>
                          <div id="date-select" class="py-5">
                              <div class="relative max-w-sm">
                                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                      </svg>
                                  </div>
                                  <input id="datepicker-${venue.venue_id}" name="date${
      venue.venue_id
    }" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-2 focus:ring-wedding-churin focus:border-none block w-full ps-10 p-2.5" placeholder="Select date" required />
                                  
                              </div>

                              <div id="date-invalid" class="hidden text-sm text-rose-600">Please select a valid date.</div>
                          </div>
                      </div>



                      <div id="capacity-selection" class="capacity-selection justify-self-center inline" >
                          <p>Select guest capacity</p>
                          <div class="py-5 justify-items-end">
                              <div class="relative flex items-center max-w-[11rem]">
                                  <button type="button" id="decrement-button" data-input-counter-decrement="guest-input"class="decrement-button p-3 bg-gray-100 border border-r-0 border-gray-300 hover:bg-gray-200 rounded-s-lg h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                      </svg>
                                  </button>
                                  <input type="text" name="guest${
                                    venue.venue_id
                                  }" id="guest-input" data-input-counter-min="1" data-input-counter-max="${
      venue.capacity
    }" class="guest-input block w-full pb-6 text-sm  text-center out-of-range:text-rose-600 invalid:text-rose-600 out-of-range:border-rose-600 border border-gray-300 bg-gray-50 border-x-1 h-11 focus:ring-0 focus:border-gray-300" value="0" placeholder="Max is ${
      venue.capacity
    }" required />

                                  <div class="absolute flex items-center space-x-1 text-xs text-gray-400 -translate-x-1/2 bottom-1 start-1/2">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round">
                                          <circle cx="12" cy="8" r="5" />
                                          <path d="M20 21a8 8 0 0 0-16 0" />
                                      </svg>
                                      <span>Guests</span>
                                  </div>
                                  <button  type="button" id="increment-button" data-input-counter-increment="guest-input" class="increment-button p-3 bg-gray-100 border border-l-0 border-gray-300 hover:bg-gray-200 rounded-e-lg h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                      <svg class="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                      </svg>
                                  </button>
                              </div>
                              <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500">
                                  Min Guest: 0 Max Guest: ${venue.capacity}
                              </p>
                              <div id="guest-invalid" class="hidden text-sm text-rose-600">Input needs to be between 1 and ${
                                venue.capacity
                              }.</div>
                          </div>
                      </div>

                      <div id="grade-selection" class="inline col-span-2 w-full">
                      <div class="relative flex space-x-2 mt-12 w-max group">
        <p>Select desired venue grade</p><span>ⓘ</span>
        <span class="absolute shadow-lg hidden group-hover:block bg-black text-white text-sm right-0 left-0 mx-auto w-max -top-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-black before:absolute before:z-[-1] before:-bottom-1 before:left-0 before:right-0 before:mx-auto">
            <ul class="list-inside px-2 ">
                <li>　ー　Disabled grades are not provided with this venue</li>
                <li>　ー　Grade level affects the price of each guest</li>
            </ul>
        </span>
    </div>                <div id="grade-select" class=" ">
                              <div class="flex justify-between flex-nowrap gap-4  [&_label]:flex [&_label]:cursor-pointer [&_label]:items-center [&_label]:justify-between [&_label]:gap-4 [&_label]:rounded-lg [&_label]:border [&_label]:border-gray-100 [&_label]:bg-white [&_label]:p-4 [&_label]:text-sm [&_label]: [&_label]:shadow-sm" id="grade-styler">
                              <div class="flex items-center">
                                      <input value="1" type="radio" name="${radioGroupName}" class="hidden peer" id="grade_${
      venue.venue_id
    }_1" ${grade1Cost === null ? "disabled" : ""}  required />
                                      <label for="grade_${
                                        venue.venue_id
                                      }_1" class="peer-checked:border-gray-900 peer-checked:bg-wedding-churin peer-disabled:bg-gray-200 peer-disabled:text-gray-500 peer-disabled:border-gray-200 peer-disabled:shadow-none peer-disabled:pointer-events-none peer-checked:text-wedding-boothill hover:text-wedding-boothill hover:bg-gray-100">
                                          <p class="w-full text-md">Grade 1</p>
                                      </label>
                                  </div>
                                  <div class="flex items-center gap-4">
                                      <input value="2" type="radio" name="${radioGroupName}" class="hidden peer" id="grade_${
      venue.venue_id
    }_2" ${grade2Cost === null ? "disabled" : ""} />
                                      <label for="grade_${
                                        venue.venue_id
                                      }_2" class="peer-checked:border-gray-900 peer-checked:bg-wedding-churin peer-disabled:bg-gray-200 peer-disabled:text-gray-500 peer-disabled:border-gray-200 peer-disabled:shadow-none peer-disabled:pointer-events-none peer-checked:text-wedding-boothill hover:text-wedding-boothill hover:bg-gray-100">
                                          <p class="w-full text-md">Grade 2</p>
                                      </label>
                                  </div>
                                  <div class="flex items-center gap-4">
                                      <input value="3" type="radio" name="${radioGroupName}" class="hidden peer" id="grade_${
      venue.venue_id
    }_3"${grade3Cost === null ? "disabled" : ""}  />
                                      <label for="grade_${
                                        venue.venue_id
                                      }_3" class="peer-checked:border-gray-900 peer-checked:bg-wedding-churin peer-disabled:bg-gray-200 peer-disabled:text-gray-500 peer-disabled:border-gray-200 peer-disabled:shadow-none peer-disabled:pointer-events-none peer-checked:text-wedding-boothill hover:text-wedding-boothill hover:bg-gray-100">
                                          <p class="w-full text-md">Grade 3</p>
                                      </label>
                                  </div>
                                  <div class="flex items-center gap-4">
                                      <input value="4" type="radio" name="${radioGroupName}" class="hidden peer" id="grade_${
      venue.venue_id
    }_4" ${grade4Cost === null ? "disabled" : ""} />
                                      <label for="grade_${
                                        venue.venue_id
                                      }_4" class="peer-checked:border-gray-900 peer-checked:bg-wedding-churin peer-disabled:bg-gray-200 peer-disabled:text-gray-500 peer-disabled:border-gray-200 peer-disabled:shadow-none peer-disabled:pointer-events-none peer-checked:text-wedding-boothill hover:text-wedding-boothill hover:bg-gray-100">
                                          <p class="w-full text-md">Grade 4</p>
                                      </label>
                                  </div>
                                  <div class="flex items-center gap-4">
                                      <input value="5" type="radio" name="${radioGroupName}" class="hidden peer" id="grade_${
      venue.venue_id
    }_5"${grade5Cost === null ? "disabled" : ""}  />
                                      <label for="grade_${
                                        venue.venue_id
                                      }_5" class="peer-checked:border-gray-900 peer-checked:bg-wedding-churin peer-disabled:bg-gray-200 peer-disabled:text-gray-500 peer-disabled:border-gray-200 peer-disabled:shadow-none peer-disabled:pointer-events-none peer-checked:text-wedding-boothill hover:text-wedding-boothill hover:bg-gray-100">
                                          <p class="w-full text-md">Grade 5</p>
                                      </label>
                                  </div>
                              </div>
                              
                              
                              <div id="grade-invalid" class="invisible text-sm text-rose-600">
                                  Please select a venue grade.
                              </div>
                          </div>
                      </div>
                      </div>
                     <div class="py-2">
                       <button type="submit" class="text-white bg-wedding-sage self-center h-10 hover:bg-wedding-navy focus:ring-wedding-navy focus:ring-2 focus:outline-none  rounded-lg text-sm  w-full px-5 py-2.5 text-center">
                           Request Price
                       </button>
                     </div>
                  </form>
              </div>
          </div>
      </div>
  </div>`;

    venueElement.querySelector("#wishlistButton").addEventListener("click", handleWishlistClick);

    const form = venueElement.querySelector("#myForm");

    const datepicker = form.querySelector(`#datepicker-${venue.venue_id}`);
    const dateInvalid = form.querySelector("#date-invalid");

    datepicker.addEventListener("change", function () {
      if (!datepicker.value) {
        dateInvalid.classList.remove("hidden");
        datepicker.classList.add("border-rose-600", "text-rose-600", "placeholder:text-rose-600");
      } else {
        dateInvalid.classList.add("hidden");
        datepicker.classList.remove(
          "border-rose-600",
          "text-rose-600",
          "placeholder:text-rose-600"
        );
      }
    });

    const decrementButton = form.querySelector(".decrement-button");
    const incrementButton = form.querySelector(".increment-button");
    const guestInput = form.querySelector("#guest-input");
    const guestInvalid = form.querySelector("#guest-invalid");
    const helperText = form.querySelector("#helper-text-explanation");
    const minValue = parseInt(guestInput.dataset.inputCounterMin, 10);
    const maxValue = parseFloat(guestInput.dataset.inputCounterMax, 10);
    let currentValue = parseInt(guestInput.value, 10);

    const updateInputValue = (newValue) => {
      if (newValue >= minValue) {
        currentValue = newValue;
        guestInput.value = currentValue;
      } else if (newValue > maxValue || newValue < minValue) {
        guestInvalid.classList.remove("hidden");
        helperText.classList.add("hidden");
        console.log("Input needs to be between:", minValue, "and", maxValue);
      }
    };

    decrementButton.addEventListener("click", () => {
      updateInputValue(currentValue - 1);
      validateGuestInput();
    });

    incrementButton.addEventListener("click", () => {
      updateInputValue(currentValue + 1);
      validateGuestInput();
    });

    guestInput.addEventListener("input", () => {
      let newValue = parseInt(guestInput.value, 10);
      updateInputValue(newValue);
      validateGuestInput();
    });
    function validateGuestInput() {
      let currentValue = parseInt(guestInput.value, 10);
      if (isNaN(currentValue) || currentValue < minValue || currentValue > maxValue) {
        guestInput.classList.add("border-rose-600", "text-rose-600");
        guestInvalid.classList.remove("hidden");
        helperText.classList.add("hidden");
      } else {
        guestInput.classList.remove("border-rose-600", "text-rose-600");
        guestInvalid.classList.add("hidden");
        helperText.classList.remove("hidden");
      }
    }

    const gradeRadios = form.querySelectorAll('input[type="radio"]');
    const gradeInvalid = form.querySelector("#grade-invalid");
    const gradeStyler = form.querySelector("#grade-styler");

    gradeRadios.forEach((radio) => {
      radio.addEventListener("change", function () {
        if (!radio.checked) {
          gradeInvalid.classList.remove("invisible");
          gradeStyler.classList.remove("[&_label]:bg-white", "[&_label]:border-gray-100");
          gradeStyler.classList.add(
            "[&_label]:border-rose-600",
            "text-rose-600",
            "[&_label]:bg-rose-200"
          );
        } else {
          gradeInvalid.classList.add("invisible");
          gradeStyler.classList.add("[&_label]:bg-white", "[&_label]:border-gray-100");
          gradeStyler.classList.remove(
            "[&_label]:border-rose-600",
            "text-rose-600",
            "[&_label]:bg-rose-200"
          );
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;
      if (!datepicker.value) {
        dateInvalid.classList.remove("hidden");
        datepicker.classList.add("border-rose-600", "text-rose-600", "placeholder:text-rose-600");
        //   event.preventDefault();
        isValid = false;
      }

      if (
        isNaN(parseInt(guestInput.value, 10)) ||
        parseInt(guestInput.value, 10) < minValue ||
        parseInt(guestInput.value, 10) > maxValue
      ) {
        guestInput.classList.add("border-rose-600", "text-rose-600");
        guestInvalid.classList.remove("hidden");
        helperText.classList.add("hidden");

        //   event.preventDefault();
        isValid = false;
      }

      let gradeSelected = false;
      gradeRadios.forEach((radio) => {
        if (radio.checked) {
          gradeSelected = true;
          selectedGrade = Number(radio.value);
          console.log(selectedGrade);
          if (typeof selectedGrade === "number" && !isNaN(selectedGrade)) {
          } else {
            console.error("Invalid grade cost:", selectedGrade);
          }
        }
      });
      if (!gradeSelected) {
        gradeInvalid.classList.remove("invisible");
        gradeStyler.classList.remove("[&_label]:bg-white", "[&_label]:border-gray-100");
        gradeStyler.classList.add(
          "[&_label]:border-rose-600",
          "text-rose-600",
          "[&_label]:bg-rose-200"
        );
        isValid = false;
      }

      if (isValid) {
        handleFormSubmit(form, venue, selectedGrade, datepicker, guestInput);
      }
    });

    const accordion = venueElement.querySelector(".accordion");
    const tabButtons = venueElement.querySelectorAll(".tab-btn");
    const indicator = venueElement.querySelector("#tab-indicator");
    const dropdown = venueElement.querySelector("#dropdown-tabs");
    const tabs = ["info", "map", "photos", "reviews", "price"];
    let activeTab = null;
    let isDropdownOpen = false;
    accordion.addEventListener("click", function (event) {
      const target = event.target.closest(".accordion-button");

      if (target) {
        const tab = target.dataset.tab;

        if (activeTab === tab && isDropdownOpen) {
          closeDropdown();
          activeTab = null;
          isDropdownOpen = false;
        } else if (activeTab === null) {
          activateTab(tab);
          openDropdown();
          isDropdownOpen = true;
        } else {
          activateTab(tab);
          dropdownHeight();
          isDropdownOpen = true;
        }
        dropdown.classList.toggle("border", isDropdownOpen);
        dropdown.classList.toggle("border-gray-200", isDropdownOpen);
        updateIndicator(venueElement.querySelector(`.tab-btn[data-tab="${tab}"]`));
        updateIcons();
      }
    });

    function updateIcons() {
      const buttons = venueElement.querySelectorAll(".accordion-button, .tab-btn");
      buttons.forEach((button) => {
        const tab = button.dataset.tab;
        const icon = button.querySelector(".accordion-button-icon");
        if (icon) {
          icon.classList.toggle("rotate-180", activeTab === tab);
        }
      });
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tab = this.dataset.tab;
        activateTab(tab);
        dropdownHeight();
        updateIndicator(this);
        updateIcons();
        isDropdownOpen = true;
      });
    });

    function dropdownHeight() {
      dropdown.style.height = "auto";
      const height = dropdown.scrollHeight + "px";
      dropdown.style.height = height;
    }
    function openDropdown() {
      dropdown.style.height = "auto";
      const height = dropdown.scrollHeight + "px";
      dropdown.style.height = "0";

      setTimeout(() => {
        dropdown.style.height = height;
      }, 10);

      dropdown.classList.add("h-full");
      dropdown.classList.remove("h-0");
    }

    function closeDropdown() {
      dropdown.style.height = "0";
      dropdown.classList.remove("h-full");
      dropdown.classList.add("h-0");
    }

    function activateTab(tab) {
      activeTab = tab;
      tabs.forEach((t) => {
        const contentElement = venueElement.querySelector(`#content-${t}`);
        if (contentElement) {
          contentElement.classList.toggle("hidden", t !== tab);
          contentElement.classList.add("tab-content");
        }
      });
    }

    function updateIndicator(element) {
      indicator.style.width = `${element.offsetWidth}px`;
      indicator.style.transform = `translateX(${element.offsetLeft}px)`;
    }

    if (tabButtons.length > 0) {
      updateIndicator(tabButtons[0]);
    }

    function getRandomHue() {
      const hues = [120, 0];
      return hues[Math.floor(Math.random() * hues.length)];
    }

    let map;

    setTimeout(() => {
      const venueMap = venueElement.querySelector(`#map-${venue.venue_id}`);
      if (venueMap) {
        map = L.map(`map-${venue.venue_id}`).setView([venue.latitude, venue.longitude], 20);
        map.invalidateSize();
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const resizeObserver = new ResizeObserver(() => {
          map.invalidateSize();
        });
        resizeObserver.observe(venueMap);
        map.whenReady(() => {
          map.invalidateSize();
          map.setView([venue.latitude, venue.longitude], 20);
        });

        const randomHue = getRandomHue();
        const marker = L.marker([venue.latitude, venue.longitude]).addTo(map);
        marker._icon.style.filter = `hue-rotate(${randomHue}deg)`;

        marker._icon.style.filter = `hue-rotate(${randomHue}deg)`;

        const locationAccordion = venueElement.querySelector(
          `#locationAccordionText-${venue.venue_id}`
        );
        if (locationAccordion) {
          locationAccordion.innerHTML = `${venue.locationInfo.city}, ${venue.distance.toFixed(
            2
          )} miles to city center`;
        } else {
          showAlert(`Map for ${venue.venue_name} not found.`, "[#f27a8a]");
          console.error(
            `Location accordion with ID locationAccordionText-${venue.venue_id} not found.`
          );
        }

        marker.bindPopup(
          `<div class="flex items-center justify-start">
          <div class="relative flex items-center justify-center w-14 h-14">
              <div class="absolute top-0 left-0 w-full h-full rounded-full bg-wedding-churin bg-opacity-30 animate-pulse animate-scaleChange"></div>
              <div class="relative flex items-center justify-center w-8 h-8 rounded-full bg-wedding-churin">
                  <i class="text-xl ph ph-map-pin"></i>
              </div>
          </div>
          <div class="ml-3">
              <b>${venue.venue_name}</b>
              <div class="flex items-center justify-start">
                  <span>${venue.locationInfo.name}</span>
              </div>
          </div>
      </div>`,
          { maxWidth: 500 }
        );

        let popupTimeout;

        marker.on("mouseover", () => {
          if (popupTimeout) {
            clearTimeout(popupTimeout);
            popupTimeout = null;
          }
          marker.openPopup();
        });

        marker.on("mouseout", () => {
          popupTimeout = setTimeout(() => {
            marker.closePopup();
          }, 10000);
        });

        map.on("load", () => {
          marker.openPopup();
          marker.closePopup();
        });

        if (map.loaded) {
          map.fire("load");
        }
      } else {
        console.error("Map container not found");
      }
    }, 0);

    const carousels = venueElement.querySelector('[data-carousel="slide"]');
    const track = carousels.querySelector(".carousel-track");
    const items = Array.from(carousels.querySelectorAll("[data-carousel-item]"));
    const prevButton = carousels.querySelector("[data-carousel-prev]");
    const nextButton = carousels.querySelector("[data-carousel-next]");
    const pagination = carousels.querySelector(".carousel-pagination");
    const totalItems = items.length;
    const animation = 500;
    let currentIndex = 0;
    let tot = totalItems;
    const mod = (a, b) => ((a % b) + b) % b;

    track.prepend(items[totalItems - 1].cloneNode(true));
    track.append(items[0].cloneNode(true));

    track.style.transform = `translateX(-100%)`;
    const buttons = Array.from(pagination.children);
    buttons.forEach((button, index) => {
      if (index === currentIndex) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        currentIndex = index;
        anim(animation);
      });
    });
    prevButton.addEventListener("click", () => {
      currentIndex--;
      anim(animation);
    });

    nextButton.addEventListener("click", () => {
      currentIndex++;
      anim(animation);
    });

    function updateCarousel() {
      const offset = -(currentIndex + 1) * 100;
      track.style.transform = `translateX(${offset}%)`;
      updatePagination();
    }
    function updatePagination() {
      const buttons = Array.from(pagination.children);
      buttons.forEach((button, index) => {
        if (index === mod(currentIndex, totalItems)) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    track.addEventListener("transitionend", () => {
      track.style.transitionDuration = `0ms`;

      if (currentIndex === -1) {
        currentIndex = totalItems - 1;
        updateCarousel(); // Move instantly to the last slide
      } else if (currentIndex === totalItems) {
        currentIndex = 0;
        updateCarousel(); // Move instantly to the first slide
      }

      setTimeout(() => {
        track.style.transitionDuration = `${animation}ms`;
      }, 50);
    });

    const anim = (ms = animation) => {
      const cMod = mod(currentIndex, tot);
      // console.log(`Animating to slide ${cMod} with duration ${ms}ms`);
      track.style.transitionDuration = `${ms}ms`;
      updateCarousel();
    };

    anim(0);

    return venueElement;
  }
  function getAllDatesForYear(year) {
    const allDates = [];
    for (let month = 0; month < 12; month++) {
      const numDays = new Date(year, month + 1, 0).getDate();
      for (let day = 1; day <= numDays; day++) {
        const date = new Date(year, month, day);
        allDates.push(date.toISOString().split("T")[0]);
      }
    }
    return allDates;
  }
  function showAlert(message, primaryColour) {
    const bgColourClass = "bg-white";
    const textColourClass = "text-gray-500";
    const primaryColourClass = primaryColour;

    const alertBox = document.createElement("div");
    alertBox.className = `overflow-hidden w-96 p-4 ${textColourClass} ${bgColourClass} shadow-md text-center text-nowrap opacity-0 translate-y-4 transition-opacity duration-500 ease-in-out`;
    alertBox.innerHTML = `<div class="flex items-center px-5 space-x-2">
      <i class="ph-fill text-2xl text-${primaryColourClass} ph-heart"></i>
        <div class="flex-1 text-sm font-normal text-center whitespace-nowrap">${message}</div>
        <div id="progress-bar" class="absolute bottom-0 left-0 w-full h-1 bg-${primaryColourClass}"></div>
      </div>`;

    toastContainer.appendChild(alertBox);

    setTimeout(() => {
      alertBox.classList.remove("opacity-0", "translate-y-4");
      alertBox.classList.add("opacity-100", "translate-y-0");
    }, 10);

    const progressBar = alertBox.querySelector("#progress-bar");
    let progress = 0;
    const interval = 10;
    const duration = 2000;
    const increment = 100 / (duration / interval);

    const progressInterval = setInterval(() => {
      progress += increment;
      progressBar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          alertBox.classList.remove("opacity-100", "translate-y-0");
          alertBox.classList.add("opacity-0", "translate-y-4");
          setTimeout(() => {
            if (alertBox.parentNode) {
              alertBox.parentNode.removeChild(alertBox);
            }
          }, 500);
        }, 500);
      }
    }, interval);
  }
  function handleFormSubmit(form, venue, selectedGrade, datepicker, guestInput) {
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    formObject[`date${venue.venue_id}`] = datepicker.value;
    formObject[`guest${venue.venue_id}`] = guestInput.value;
    formObject[`grade_${venue.venue_id}`] = selectedGrade;
    console.log("Form data:", formObject);

    function isWeekend(dateString) {
      const date = new Date(dateString);
      const day = date.getDay();
      return day === 0 || day === 6;
    }

    const basePrice = Number(
      isWeekend(datepicker.value) ? venue.weekend_price : venue.weekday_price
    );
    const guestCount = guestInput.value;
    const gradeCost = venue[`grade_${selectedGrade}_cost_per_person`];
    const thumbnail = form.getAttribute("data-url");
    const totalCost = basePrice + guestCount * gradeCost;

    console.log("Total cost before formatting:", totalCost);

    formObject.basePrice = basePrice;
    formObject.guestCount = guestCount;
    formObject.gradeCost = gradeCost;
    formObject.totalCost = totalCost;
    formObject.venueThumbnail = thumbnail;
    formObject.venue_name = venue.venue_name;

    const storedData = localStorage.getItem("forms");
    let formsArray = storedData ? JSON.parse(storedData) : [];

    formsArray.push(formObject);
    localStorage.setItem("forms", JSON.stringify(formsArray));
    showAlert(`Price enquiry for ${formObject.venue_name} successfully submitted.`, "[#9f7cbf]");
    console.log("Form data stored:", formsArray);
    loadStoredData(venue);
  }

  function loadStoredData() {
    const wrapper = document.getElementById("price-wrapper");
    wrapper.innerHTML = "";

    const storedData = localStorage.getItem("forms");

    if (storedData) {
      const formsArray = JSON.parse(storedData);

      formsArray.forEach((formObject) => {
        const formContainer = document.createElement("div");
        formContainer.classList.add("flex", "items-center", "px-6", "py-4");

        formContainer.innerHTML = `
                <img class="object-cover w-32 h-32 rounded" src="${formObject.venueThumbnail}" alt="${formObject.venue_name}">
                <div class="ml-3">
                    <h3 class="text-xl font-semibold text-gray-900">${formObject.venue_name}</h3>
                    <p class="mt-1">Final Cost: ${formObject.totalCost}</p>
                    <p class="mt-1 italic font-light">Base price: ${formObject.basePrice}</p>
                    <p class="mt-1 italic font-light">Catering size: ${formObject.guestCount}</p>
                    <p class="mt-1 italic font-light">Venue Grade Cost: ${formObject.gradeCost}</p>
                </div>
                <button class="px-4 py-2 ml-auto remove-button">
                    <i class="ph ph-x hover:text-wedding-sage"></i>
                </button>
                `;
        formContainer.querySelector(".remove-button").addEventListener("click", function () {
          formContainer.remove();
          formsArray.splice(formsArray.indexOf(formObject), 1);
          updateLocalStorage("forms", formsArray);
          showAlert(`Removed price enquiry for ${formObject.venue_name}.`, "[#a8cde8]");
        });

        // const wrapper = document.getElementById("price-wrapper");
        wrapper.appendChild(formContainer);
      });

      console.log("Form data loaded:", formsArray);
    }
  }

  function clearStoredData() {
    localStorage.removeItem("forms");
    showAlert("Removed all from Price Requests.", "[#acb6e5]");
    console.log("Stored form data cleared.");
  }
  function loadFromLocalStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error loading data from local storage:", error);
      return [];
    }
  }

  function updateLocalStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      console.log(`Updated ${key} in localStorage:`, loadFromLocalStorage(key));
    } catch (error) {
      console.error(`Error updating ${key} in localStorage:`, error);
    }
  }

  function handleWishlistClick(event) {
    const wishlistButton = event.target.closest("#wishlistButton");
    const itemId = wishlistButton.getAttribute("data-item-id");
    const itemName = wishlistButton.getAttribute("data-item-name");
    const itemImageUrl = wishlistButton.getAttribute("data-item-image-url");
    const itemPrice = wishlistButton.getAttribute("data-item-price");
    const itemScore = wishlistButton.getAttribute("data-item-score");
    const wishlistItem = {
      venue_id: itemId,
      venue_name: itemName,
      thumbnail: itemImageUrl,
      venue_price: itemPrice,
      venue_score: itemScore,
    };

    if (isItemInWishlist(wishlistItem)) {
      removeFromWishlist(wishlistItem);
      // updateWishlistIcon(wishlistItem, false);
    } else {
      addWishlistItem(wishlistItem);
      // updateWishlistIcon(wishlistItem, true);
      showAlert(`Successfully added ${wishlistItem.venue_name} to wishlist.`, "[#9f7cbf]");
    }
  }

  function updateWishlistIcon(wishlistItem, isAdded) {
    const wishlistButtons = document.querySelectorAll(
      `#wishlistButton[data-item-id="${wishlistItem.venue_id}"]`
    );
    wishlistButtons.forEach((wishlistButton) => {
      const icon = wishlistButton.querySelector(".heart-bg");
      const heartIcon = wishlistButton.querySelector(".heart-icon");
      const heartOutline = wishlistButton.querySelector(".heart-outline");
      if (isAdded) {
        icon.classList.add("like-animation");
        heartIcon.classList.remove("hidden");
        heartOutline.classList.add("hidden");
      } else {
        icon.classList.remove("like-animation");
        heartIcon.classList.add("hidden");
        heartOutline.classList.remove("hidden");
      }
    });
  }

  function isItemInWishlist(wishlistItem) {
    const wishlistItems = loadFromLocalStorage("wishlistItems");
    return wishlistItems.some((item) => item.venue_id === wishlistItem.venue_id);
    // return false;
  }

  function addWishlistItem(wishlistItem) {
    const wishlistWrapper = document.getElementById("wl-wrapper");
    const wishlistElement = document.createElement("div");
    wishlistElement.classList.add("wishlist-item");
    wishlistElement.setAttribute("id", `wl-item-${wishlistItem.venue_id}`);
    wishlistElement.innerHTML = `<div class="flex items-center px-6 py-4">
        <img class="object-cover w-16 h-16 rounded" src="${wishlistItem.thumbnail}" alt="${wishlistItem.venue_name}">
        <div class="ml-3">
          <h3 class="font-semibold text-gray-900">${wishlistItem.venue_name}</h3>
          <p class="mt-1 italic font-light">£${wishlistItem.venue_price}</p>
          <p class="mt-1 italic font-light">${wishlistItem.venue_score}</p>
        </div>
        <button class="px-4 py-2 ml-auto remove-button">
          <i class="ph ph-x hover:text-wedding-sage"></i>
        </button>
      </div>`;
    wishlistWrapper.appendChild(wishlistElement);
    saveWishlistToLocalStorage(wishlistItem, true);
    updateWishlistIcon(wishlistItem, true);

    const removeButton = wishlistElement.querySelector(".remove-button");
    removeButton.addEventListener("click", function () {
      removeFromWishlist(wishlistItem);
    });
  }

  function removeFromWishlist(wishlistItem) {
    const wishlistElement = document.getElementById(`wl-item-${wishlistItem.venue_id}`);
    if (wishlistElement) {
      wishlistElement.remove();
      showAlert(`Removed ${wishlistItem.venue_name} from wishlist.`, "[#da8ca3]");
      console.log("Removed from wishlist:", wishlistItem);
      saveWishlistToLocalStorage(wishlistItem, false);
      updateWishlistIcon(wishlistItem, false);
    }
  }

  function saveWishlistToLocalStorage(wishlistItem, add = true) {
    let wishlistItems = loadFromLocalStorage("wishlistItems");
    if (add) {
      const existingItem = wishlistItems.find((item) => item.venue_id === wishlistItem.venue_id);
      if (!existingItem) {
        wishlistItems.push(wishlistItem);
      }
      updateWishlistIcon(wishlistItem, true);
    } else {
      wishlistItems = wishlistItems.filter((item) => item.venue_id !== wishlistItem.venue_id);
    }
    updateLocalStorage("wishlistItems", wishlistItems);
  }

  const resetButtons = document.querySelectorAll('button[type="reset"]');
  resetButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const contentName = button.getAttribute("name");
      const targetId = button.getAttribute("data-reset-target");
      clearContents(targetId);
      showAlert(`Removed all from ${contentName}.`, "[#acb6e5]");
    });
  });

  function clearContents(targetId, wishlistItems = []) {
    const target = document.getElementById(targetId);
    if (target) {
      target.innerHTML = "";
      updateLocalStorage("wishlistItems", wishlistItems);
      // updateLocalStorage("priceItems", priceItems);
    }
  }
  function clearWishlistOnly() {
    const wishlistItems = loadFromLocalStorage("wishlistItems");
    clearContents("wl-wrapper", wishlistItems);
  }

  async function reverseGeocode(latitude, longitude, types = ["city", "name"]) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      const locationInfo = {};

      if (data.address) {
        if (types.includes("city")) {
          locationInfo.city =
            data.address.city || data.address.town || data.address.village || "Unknown city";
        }
        if (types.includes("name")) {
          locationInfo.name = data.display_name || "Unknown location";
        }

        locationInfo.latitude = parseFloat(data.lat);
        locationInfo.longitude = parseFloat(data.lon);
      } else {
        locationInfo.error = "Unknown location";
      }

      return locationInfo;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: "Unknown location" };
    }
  }
  function calculateDistance(lat1, lon1, lat2, lon2, unit = "mi") {
    const R = unit === "km" ? 6371 : 3958.8;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
  function filterVenues() {
    checkedAmenities = Array.from(amenitiesCheckbox)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    // console.log("Checked Amenities:", checkedAmenities);

    checkedLocation = Array.from(locationCheckbox)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    // console.log("Checked Locations:", checkedLocation);
    console.log("Checked Amenities:", checkedAmenities);
    console.log("Checked Locations:", checkedLocation);

    const allVenues = document.querySelectorAll(".venue");
    allVenues.forEach((venue) => {
      const venueAmenities = venue.dataset.venueAmenities.split(", ");
      const venueLocation = venue.dataset.venueLocation.split(", ");
      const venueType = venue.dataset.venueType;
      // const view = venue.dataset.view;

      const amenityMatch =
        checkedAmenities.length === 0 ||
        checkedAmenities.every((amenities) => venueAmenities.includes(amenities));
      const locationMatch =
        checkedLocation.length === 0 ||
        checkedLocation.every((location) => venueLocation.includes(location));
      const typeMatch = selectedVenueType === "Show all" || venueType === selectedVenueType;

      const showVenue = amenityMatch && locationMatch && typeMatch;

      venue.style.display = showVenue ? "block" : "none";
    });
  }
  document.querySelectorAll(".form-filter").forEach((form) => {
    form.addEventListener("reset", () => {
      setTimeout(filterVenues, 0);
      console.log("Form reset");
    });
  });
  amenitiesCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", filterVenues);
  });
  locationCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", filterVenues);
  });
  document.querySelectorAll(".vtype").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      selectedVenueType = this.dataset.type;
      document
        .querySelectorAll(".vtype")
        .forEach((link) => link.classList.remove("active", "text-black"));
      this.classList.add("active", "text-black");
      if (selectedVenueType === "Show all") {
        filterTitle.textContent = `All Venues`;
      } else if (selectedVenueType === "Hotel" || selectedVenueType === "Castle") {
        filterTitle.textContent = `All Venues - ${selectedVenueType}s`;
      } else {
        filterTitle.textContent = `All Venues - ${selectedVenueType}`;
      }
      filterVenues();
    });
  });

  sortButton.addEventListener("click", function () {
    targetElement.classList.toggle("hidden");
  });
  window.addEventListener("click", function (event) {
    if (!sortButton.contains(event.target) && !targetElement.contains(event.target)) {
      targetElement.classList.add("hidden");
    }
  });

  const collapse = document.querySelectorAll("[data-collapse]");
  collapse.forEach((collapse) => {
    collapse.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      const targetContentHidden = document.getElementById(target).classList.toggle("hidden");
      collapse.querySelector(".plus").classList.toggle("hidden", !targetContentHidden);
      collapse.querySelector(".minus").classList.toggle("hidden", targetContentHidden);
    });
  });

  const wishlistHeader = document.getElementById("wl-header");
  const wishlistContent = document.getElementById("wl-content");
  const priceRequestsHeader = document.getElementById("pr-header");
  const priceRequestsContent = document.getElementById("pr-content");

  wishlistHeader.addEventListener("click", function () {
    wishlistHeader.setAttribute("data-active", "true");
    priceRequestsHeader.setAttribute("data-active", "false");
    priceRequestsContent.classList.add("hidden");
    wishlistContent.classList.remove("hidden");
  });

  priceRequestsHeader.addEventListener("click", function () {
    priceRequestsHeader.setAttribute("data-active", "true");
    wishlistHeader.setAttribute("data-active", "false");
    priceRequestsContent.classList.remove("hidden");

    wishlistContent.classList.add("hidden");
  });

  const scrollToTopButton = document.getElementById("scroll-to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    scrollToTopButton.classList.toggle(
      "hidden",
      document.body.scrollTop < 200 && document.documentElement.scrollTop < 200
    );
  }
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  function updateResultPageVisibility() {
    const fragmentIdentifier = window.location.hash.substring(1);
    console.log("Hash changed to:", fragmentIdentifier);

    if (fragmentIdentifier === "") {
      resultPage.style.display = "none";
      infoPage.style.display = "none";
      home.style.display = "block";
    } else if (wishlistPrice.id === fragmentIdentifier) {
      resultPage.style.display = "block";
      home.style.display = "none";
      infoPage.style.display = "none";
      wishlistPrice.scrollIntoView({ behavior: "smooth" });
    } else if (home.id === fragmentIdentifier) {
      resultPage.style.display = "none";
      infoPage.style.display = "none";
      home.style.display = "block";
    } else if (resultPage.id === fragmentIdentifier) {
      resultPage.style.display = "block";
      home.style.display = "none";
      infoPage.style.display = "none";
    } else if (infoPage.id === fragmentIdentifier) {
      infoPage.style.display = "block";
      home.style.display = "none";
      resultPage.style.display = "none";
    } else {
      const matchingSuggestion = venues.find((venue) => venue.venue_id === fragmentIdentifier);
      if (matchingSuggestion) {
        resultPage.style.display = "block";
        home.style.display = "none";
        const suggestionElement = document.getElementById(fragmentIdentifier);
        if (suggestionElement) {
          const yOffset = -200;
          const y = suggestionElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  }

  updateResultPageVisibility();
  window.addEventListener("hashchange", updateResultPageVisibility);
});
