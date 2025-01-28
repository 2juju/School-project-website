<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,container-queries"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="calendar.css">
    <link rel="stylesheet" href="maincss.css">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');

        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 50px;
        }

        h2 {
            font-family: 'DM Serif Display', serif;
            font-size: 35px;
        }

        h3 {
            font-family: 'DM Serif Display', serif;
            font-size: 25px;

        }

        h4 {
            font-family: 'DM Serif Display', serif;
            font-size: 22px;

        }

        h5 {
            font-family: 'DM Serif Display', serif;
            font-size: 20px;
        }

        h6 {
            font-family: 'DM Serif Display', serif;
            font-size: 18px;
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        wedding: {
                            navy: "#292f36",
                            boothill: "#1f2329",
                            sage: "#C5D1C4",
                            churin: "#E3E9E2",
                        }
                    },
                    fontFamily: {
                        DM: ['DM Serif Display', 'serif'],
                        Jost: ['Jost', 'sans-serif']
                    },

                }
            }
        }
    </script>


    <title>School proj wedding.php</title>

</head>

<body class="text-wedding-navy font-Jost">


    <div id="toast-container" class="fixed z-[1] grid justify-center w-full top-20 toast-container gap-y-3"></div>
    <header id="main-header" class="sticky top-0 z-50 py-2 bg-white shadow-sm">
        <div id="header-container" class="flex items-center justify-between w-full px-8 pb-2 mx-auto">
            <!-- logo -->
            <a href="#home-page" class="inline-flex items-center gap-2.5">
                <h1 class="logo hover:text-transparent bg-clip-text" style="background-image: url('textbg.gif'); background-size: cover">
                    Wedding Booking Web
                </h1>
            </a>

            <!-- navigation -->
            <nav class="hidden [&_a]:text-h6 w-full pr-20 justify-end [&_a]:transition [&_a]:duration-100 gap-28 lg:flex 2xl:ml-16">
                <a href="#home-page" class="flex gap-2 hover:drop-shadow-wedding-sage drop-shadow-lg hover:text-wedding-sage header-toggle place-items-center"><span>Home</span></a>
                <a href="#venue_results" class="flex gap-2 header-toggle hover:text-wedding-sage place-items-center"><span>View Venues</span></a>
                <a href="#information-page" class="flex gap-2 header-toggle hover:text-wedding-sage place-items-center"><span>Information</span></a>
            </nav>
            <div class="flex gap-4">
                <div class="hidden gap-x-10 lg:flex">
                    <a class="flex items-center gap-2 hover:text-wedding-sage" href="#wishlist-pricereq">
                        <i id="wishlist-icon" class="text-3xl ph-fill ph-heart"></i>
                        <!-- <span class="">Wishlist</span> -->
                    </a>

                </div>

                <div class="grid items-center justify-between w-48 grid-cols-3 gap-2 text-2xl lg:hidden">
                    <a href="#home-page" class="align-center"><i class="hover:text-wedding-sage ph-fill ph-house"></i></a>
                    <a href="#venue_results" class="items-center"><i class="hover:text-wedding-sage ph-fill ph-calendar-heart"></i></a>
                    <button id="menu-button" data-dropdown-toggle="menu-content" type="button" class="items-center hover:text-wedding-sage">
                        <i class=" ph-bold ph-list-heart"></i>
                    </button>
                </div>
                <div id="menu-content" class="relative right-0 hidden shadow-sm bg-wedding-navy w-44">
                    <ul class="absolute block w-full py-2 text-sm divide-y divide-gray-200 bg-wedding-navy">
                        <li>
                            <a class="block w-full px-4 py-2 text-wedding-sage hover:bg-gray-100" href="#wishlist-pricereq">
                                <i class="ph-bold ph-heart"></i>
                                <span class="">Wishlist</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
<!--homepage-->
    <section id="home-page" class="b-12 page max-w-screen-3xl fade-in-slide-up">
        <div class="flex flex-row-reverse items-center px-8 pt-6 mx-auto">

            <div class="w-1/2 pl-16 mb-0 ">
                <video class=" rounded-br-[80px] rounded-tl-[120px]" autoplay muted loop>
                    <source src="homepgbg.mp4" type="video/mp4">
                    Your browser does not support the video tag.(mp4)
                </video>
            </div>
            <div class="w-1/2 text-left ">
                <h1 class="mb-4 font-bold leading-tight text-7xl">
                    <span class="text-wedding-sage">Plan Your Dream Wedding</span><br />
                    With Us Today
                </h1>
                <p class="py-4 mb-2 leading-relaxed ">
                    Discover the perfect venue and services for your special day.
                </p>
                <ul class="flex flex-col items-start mb-6 space-y-4">
                    <li class="flex items-end">
                        <i class="mr-2 text-wedding-sage ph-bold ph-check"></i>

                        <span>Explore our stunning venue options.</span>
                    </li>
                    <li class="flex items-end">
                        <i class="mr-2 text-wedding-sage ph-bold ph-check"></i>
                        <span>Learn about our customisable packages...</span>
                    </li>
                    <li class="flex items-end">
                        <i class="mr-2 text-wedding-sage ph-bold ph-check"></i>
                        <span>Instantly receive a price for your desired venue</span>
                    </li>
                    <li class="flex items-end">
                        <i class="mr-2 text-wedding-sage ph-bold ph-check"></i>
                        <span>We offer a diverse, unique selection</span>
                    </li>
                    <li class="flex items-end">
                        <i class="mr-2 text-wedding-sage ph-bold ph-check"></i>
                        <span>Book your wedding date today!</span>
                    </li>
                </ul>

                <div class="flex flex-col space-y-16">
                    <form id="search-form" action="#">
                        <div class="relative inline-grid w-full">
                            <input autocomplete=" off" placeholder="Search..." type="search" class="w-full px-6 py-2 text-base transition border-2 border-gray-900 rounded-lg shadow-md search-input focus:border-wedding-sage focus:ring-0 text-ellipsis focus:shadow-wedding-sage">
                            <div data-preload="content" data-loaded="false" id="suggestions-wrapper-list" class="">
                                <ul id="suggestions" class="absolute left-0 z-10 hidden w-full h-48 mt-1 suggestions top-full">
                                </ul>
                            </div>
                            <div data-preload="skeleton">
                                <ul id="skeleton-suggestions" class="absolute left-0 z-10 hidden w-full h-48 mt-1 suggestions top-full">
                                </ul>
                            </div>
                        </div>
                    </form>
                    <!-- <span class="float-right">or</span> -->
                    <a href="#venue_results" class="inline-grid w-full" id="view-all-form">
                        <button class="px-6 py-2 text-base text-white transition bg-gray-900 border-0 rounded-lg shadow-lg shadow-gray-300 hover:bg-wedding-sage hover:text-wedding-boothill hover:shadow-wedding-sage">
                            View All
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div id="scroll-to-top-container" class="fixed bottom-0 right-0 z-50 p-6 transition duration-300 ease-in-out animate-bounce">
        <div class="relative flex mt-12 space-x-2 w-max group">
            <button id="scroll-to-top" class="hidden w-20 h-20 border-4 rounded-full hover:shadow-lg border-wedding-churin hover:border-wedding-sage hover:text-wedding-boothill">
                <i class="text-3xl ph-bold ph-arrow-up"></i>
            </button>
            <span class=" absolute shadow-lg hidden group-hover:block bg-wedding-sage text-sm right-0 left-0 mx-auto w-max -top-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-wedding-sage before:absolute before:z-[-1] before:-bottom-1 before:left-0 before:right-0 before:mx-auto">Scroll to top</span>
        </div>
    </div>
<!--    results page-->
    <section id="venue_results" class="h-full page fade-in-slide-up">

        <div id="wishlist-pricereq" class="fixed bg-white bottom-0 w-[25rem]">
            <h1 class="h-10 content-center text-xl font-semibold text-center bg-wedding-sage/[0.2]">Wishlist and Price Requests</h1>
            <div id="wl-pr-container" class="mb-3 border">
                <div id="wl-pr-header" class="sticky top-0 flex w-full h-12">
                    <h4 id="wl-header" data-active="true" class="content-center w-full h-full text-center text-white transition border-0 shadow-lg cursor-pointer headers hover:text-wedding-navy bg-wedding-navy hover:bg-wedding-sage/50 hover:shadow-wedding-sage/50 data-[active=true]:text-wedding-navy data-[active=true]:bg-wedding-sage/50 data-[active=true]:shadow-wedding-sage/50">Wishlist</h4>
                    <h4 id="pr-header" data-active="false" class="content-center w-full h-full text-center text-white transition border-0 shadow-lg cursor-pointer headers hover:text-wedding-navy bg-wedding-navy hover:bg-wedding-sage/50 hover:shadow-wedding-sage/50 data-[active=true]:text-wedding-navy data-[active=true]:bg-wedding-sage/50 data-[active=true]:shadow-wedding-sage/50">Price Requests</h4>
                </div>
            </div>
            <div id="layout" class="flex w-full ">
                <div id="wl-pr-body" class="w-full h-64 overflow-y-scroll bg-white">
                    <div id="wl-content" class="w-full content">
                        <div class="sticky top-0 w-full bg-white border-b border-wedding-churin">
                            <div class="flex justify-between w-1/2 mt-3 ">
                                <span class="text-sm ">Wishlist</span>
                                <button data-reset-target="wl-wrapper" name="wishlist" type="reset" class="text-sm clear-all hover:text-wedding-sage">Clear all</button>
                            </div>
                        </div>
                        <div data-preload="content" data-loaded="false" id="wl-wrapper" class="flex flex-col p-5 divide-y divide-gray-200"></div>
                        <div data-preload="skeleton" id="skeleton-wl-wrapper" class="flex flex-col p-5 divide-y divide-gray-200"></div>
                    </div>
                    <div id="pr-content" class="hidden w-full content">
                        <div class="sticky top-0 w-full bg-white border-b border-wedding-churin">
                            <div class="flex justify-between w-1/2 mt-3">
                                <span class="text-sm ">Price Requests</span>
                                <button id="price-clear" data-reset-target="price-wrapper" name="price requests" type="reset" class="text-sm clear-all hover:text-wedding-sage">Clear all</button>
                            </div>
                        </div>
                        <div id="price-wrapper" data-preload="content" data-loaded="false" class="flex flex-col divide-y divide-gray-200"></div>
                        <div id="skeleton-price-wrapper" data-preload="skeleton" class="flex flex-col divide-y divide-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-8 mx-auto max-w-7xl">
            <div class="border-b border-gray-200">
                <div class="flex items-baseline justify-between pt-24">
                    <h1 data-preload="content" data-loaded="false" id="venue-main-title" class="hidden text-4xl font-semibold tracking-tight">All Venues</h1>
                    <div data-preload="skeleton" id="skeleton-title-wrapper"></div>
                    <div class="flex items-center">
                        <div class="relative inline-block text-left">
                            <div>
                                <button data-target="sort-contents" type="button" class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-wedding-boothill" id="sort-button">
                                    Sort
                                    <svg class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 group-hover:text-wedding-boothill" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div data-entering id="sort-contents" class="absolute right-0 z-10 hidden w-40 mt-2 origin-top-right transform scale-95 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="sort-button" tabindex="-1">
                                <select id="sort-options" class="py-1 cursor-pointer" role="none">
                                    <option role="menuitem" tabindex="-1" value="menu-item-0">Relevance</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-1">Most Popular</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-2">Best Rating</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-3">Licensed</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-4">Price: Low to High</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-5">Price: High to Low</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-6">Capacity: Low to High</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-7">Capacity: High to Low</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-8">Sort A-Z</option>
                                    <option role="menuitem" tabindex="-1" value="menu-item-9">Sort Z-A</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <p id="sort-description" class="italic font-light text-wedding-navy/[0.7]">Most Relevant Venues</p>
            </div>
            <div aria-labelledby="venues-heading" class="pt-6 pb-10">
                <h2 id="venues-heading" class="sr-only">Venues</h2>
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    <!-- Filters -->
                    <div>
                        <form class="form-filter">
                            <h3 class="sr-only">Categories</h3>
                            <ul role="list" class="pb-6 space-y-4 border-b border-gray-200 text-md">
                                <li>
                                    <a href="#" data-type="Hotel" class="vtype">Hotel</a>
                                </li>
                                <li>
                                    <a href="#" data-type="Castle" class="vtype">Castle</a>
                                </li>
                                <li>
                                    <a href="#" data-type="Tavern" class="vtype">Tavern</a>
                                </li>
                                <li class="pb-5">
                                    <a href="#" data-type="Residential" class="vtype">Residential</a>
                                </li>
                                <li>
                                    <a href="#" data-type="Show all" class="vtype">Show all</a>
                                </li>
                            </ul>
                        </form>
                        <form class="form-filter">
                            <div class="py-6 border-b border-gray-200">
                                <div class="flex justify-between w-full -my-3">
                                    <span>
                                        <h3 class="font-medium ">Amenities</h3>
                                    </span>
                                    <span><input type="reset" value="Clear all" class="text-sm font-light"></span>

                                    <span>
                                        <button data-collapse data-target="filter-section-0" type="button" class="flex items-center justify-between w-full text-sm hover:text-wedding-boothill" aria-controls="filter-section-0" aria-expanded="false">
                                            <div class="flex items-center ml-6">
                                                <svg class="hidden w-5 h-5 plus" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>
                                                <svg class="w-5 h-5 minus" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </button>
                                    </span>
                                </div>
                                <div class="pt-6" id="filter-section-0">
                                    <div class="space-y-4">
                                        <div class="flex items-center">
                                            <input id="filter-amenities-0" name="amenities[]" value="1" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-0" class="ml-3 text-sm ">Licensed</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-1" name="amenities[]" value="fast wifi" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-1" class="ml-3 text-sm ">WIFI</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-2" name="amenities[]" value="free parking" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-2" class="ml-3 text-sm ">Free Parking</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-3" name="amenities[]" value="disabled parking" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-3" class="ml-3 text-sm ">Disabled Parking</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-4" name="amenities[]" value="non-smoking" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-4" class="ml-3 text-sm ">Non-smoking</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-5" name="amenities[]" value="pets allowed" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-5" class="ml-3 text-sm ">Pets Allowed</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-6" name="amenities[]" value="restaurant" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-6" class="ml-3 text-sm ">Restaurant</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-7" name="amenities[]" value="bar" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-7" class="ml-3 text-sm ">Bar</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-8" name="amenities[]" value="night club" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-8" class="ml-3 text-sm ">Night club</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-9" name="amenities[]" value="balcony" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-9" class="ml-3 text-sm ">Balcony</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-10" name="amenities[]" value="bridal suite" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-10" class="ml-3 text-sm ">Bridal Suite</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-amenities-11" name="amenities[]" value="pets not allowed" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-amenities-11" class="ml-3 text-sm ">Pets not allowed</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form class="form-filter">
                            <div class="py-6 border-b border-gray-200">
                                <div class="flex justify-between w-full -my-3">
                                    <span>
                                        <h3 class="font-medium">Location</h3>
                                    </span>
                                    <span><input type="reset" value="Clear all" class="text-sm font-light"></span>

                                    <span>
                                        <button data-collapse data-target="filter-section-1" type="button" class="flex items-center justify-between w-full text-sm hover:text-wedding-boothill" aria-controls="filter-section-1" aria-expanded="false">
                                            <div class="flex items-center ml-6">
                                                <svg class="hidden w-5 h-5 plus" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>
                                                <svg class="w-5 h-5 minus" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </button>
                                    </span>
                                </div>
                                <div class="pt-6" id="filter-section-1">
                                    <div class="space-y-4">
                                        <div class="flex items-center">
                                            <input id="filter-location-0" name="location[]" value="shopping area" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-0" class="ml-3 text-sm ">Shopping area</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-location-1" name="location[]" value="city view" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-1" class="ml-3 text-sm ">City view</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-location-2" name="location[]" value="mountain view" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-2" class="ml-3 text-sm ">Mountain view</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-location-3" name="location[]" value="ocean view" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-3" class="ml-3 text-sm ">Ocean view</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-location-4" name="location[]" value="garden" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-4" class="ml-3 text-sm ">Garden</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-location-5" name="location[]" value="landmark" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-5" class="ml-3 text-sm ">Landmark</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-location-6" name="location[]" value="beach" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-wedding-sage focus:ring-0">
                                            <label for="filter-location-6" class="ml-3 text-sm ">Beach</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-span-3">
<!--                    <div class="col-span-2 lg:col-span-3">-->
                        <div data-preload="content" data-loaded="false" id="venue-wrapper" class=""></div>
<!--                        <div data-preload="content" data-loaded="false" id="venue-wrapper" class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"></div>-->
                        <div data-preload="skeleton" id="venue-skeleton-wrapper"></div>
<!--                        <div data-preload="skeleton" id="venue-skeleton-wrapper" class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"></div>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="information-page" class="page fade-in-slide-up">

        <div class="py-6">
            <div class="flex mx-auto space-x-32 w-max">
                <p id="license-info-indicator" data-selected="true" class="license-info hover:underline hover:text-wedding-sage data-[selected=true]:text-wedding-sage data-[selected=true]:underline cursor-pointer" onclick="showLicenseInfo()">Licensing Information</p>
                <p id="wedding-packages-indicator" data-selected="false" class="wedding-packages hover:underline hover:text-wedding-sage data-[selected=true]:text-wedding-sage data-[selected=true]:underline cursor-pointer" onclick="showWeddingPackages()">Wedding Packages</p>
            </div>
            <div data-selected="true" id="license-info" class="license-info max-w-4xl data-[selected=false]:hidden p-6 mx-auto bg-white rounded-lg shadow-lg">
                <h1 class="mb-4 text-4xl font-semibold text-center text-wedding-boothill">Wedding Licensing</h1>
                <p class="mb-4 text-lg">When planning a wedding, it's important to understand the difference between licensed and unlicensed venues. Here’s a breakdown of what each type entails:</p>

                <h2 class="mt-6 mb-2 text-2xl font-semibold text-wedding-sage">Licensed Venues</h2>
                <p class="mb-2 text-lg"><strong>Definition:</strong> Licensed venues are authorised by local government or relevant authorities to conduct legal wedding ceremonies on their premises.</p>

                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Advantages:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Convenience: You can hold both the ceremony and reception at the same location, simplifying logistics for you and your guests.</li>
                        <li>Legal Recognition: The ceremony conducted at a licensed venue is legally binding, meaning you won’t need to arrange a separate legal ceremony at a courthouse.</li>
                        <li>Professionalism: Licensed venues often have experienced staff familiar with wedding protocols, ensuring a smoother event.</li>
                    </ul>
                </div>

                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Considerations:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Availability: Licensed venues might have limited availability, especially during peak wedding seasons.</li>
                        <li>Cost: They can sometimes be more expensive due to the added convenience and legal standing.</li>
                    </ul>
                </div>

                <h2 class="mt-6 mb-2 text-2xl font-semibold text-wedding-sage">Unlicensed Venues</h2>
                <p class="mb-2 text-lg"><strong>Definition:</strong> Unlicensed venues are not authorised to conduct legal wedding ceremonies. These venues can host wedding receptions or other celebrations but not the official ceremony.</p>

                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Advantages:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Flexibility: You have a wider range of venue options, including unique locations like private estates, beaches, or parks.</li>
                        <li>Cost: Unlicensed venues can sometimes be more affordable compared to licensed venues.</li>
                        <li>Customisation: These venues may offer more flexibility in terms of decoration and event setup.</li>
                    </ul>
                </div>

                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Considerations:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Legal Ceremony: You will need to arrange a separate legal ceremony at a courthouse or other licensed location.</li>
                        <li>Logistics: Holding the ceremony and reception in different locations can complicate transportation and scheduling.</li>
                        <li>Permits: Depending on the venue, you may need to obtain special permits or insurance, especially for non-traditional locations.</li>
                    </ul>
                </div>

                <h2 class="mt-6 mb-2 text-2xl font-semibold text-wedding-sage">Choosing the Right Venue for You</h2>
                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Budget:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Consider your overall budget and how much you are willing to allocate for the venue.</li>
                    </ul>
                </div>

                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Guest Convenience:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Think about the ease of access for your guests, including travel and accommodation options.</li>
                    </ul>
                </div>

                <div class="mb-4 ml-4">
                    <h3 class="mb-1 text-xl font-semibold text-wedding-churin">Personal Preference:</h3>
                    <ul class="ml-6 text-lg list-disc">
                        <li>Reflect on the type of wedding you envision – whether it’s a traditional ceremony in a licensed venue or a unique celebration in an unlicensed location.</li>
                    </ul>
                </div>

                <p class="text-lg">By understanding the distinctions and considerations associated with licensed and unlicensed venues, you can make an informed decision that best suits your needs and preferences for your special day.</p>
            </div>
            <div data-selected="false" id="wedding-packages" class="wedding-packages  data-[selected=false]:hidden max-w-4xl  py-6 mx-auto rounded-lg shadow-lg">
                <h1 class="py-2 text-4xl font-semibold text-center">Wedding Packages</h1>
                <div class="overflow-x-auto border border-gray-200">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr class="bg-wedding-navy text-wedding-sage">
                                <th class="px-4 py-2 border-b border-gray-200">
                                    <h1>Service</h1>
                                </th>
                                <th class="px-4 py-2 border-b border-gray-200">
                                    <h1>Grade 5 - Platinum Package</h1>
                                </th>
                                <th class="px-4 py-2 border-b border-gray-200">
                                    <h1>Grade 4 - Gold Package</h1>
                                </th>
                                <th class="px-4 py-2 border-b border-gray-200">
                                    <h1>Grade 3 - Silver Package</h1>
                                </th>
                                <th class="px-4 py-2 border-b border-gray-200">
                                    <h1>Grade 2 - Bronze Package</h1>
                                </th>
                                <th class="px-4 py-2 border-b border-gray-200">
                                    <h1>Grade 1 - Budget Package</h1>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Planning and Coordination</td>
                                <td class="px-4 py-2 border-b border-gray-200">Comprehensive wedding planning and day-of coordination services</td>
                                <td class="px-4 py-2 border-b border-gray-200">Partial wedding planning assistance and day-of coordination</td>
                                <td class="px-4 py-2 border-b border-gray-200">Basic wedding planning guidance and day-of coordination</td>
                                <td class="px-4 py-2 border-b border-gray-200">Day-of coordination only</td>
                                <td class="px-4 py-2 border-b border-gray-200">DIY planning with coordination on the day</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Venue</td>
                                <td class="px-4 py-2 border-b border-gray-200">Exclusive use of a premium venue for both ceremony and reception</td>
                                <td class="px-4 py-2 border-b border-gray-200">Use of a high-end venue for both ceremony and reception</td>
                                <td class="px-4 py-2 border-b border-gray-200">Rental of a stylish venue for ceremony and reception</td>
                                <td class="px-4 py-2 border-b border-gray-200">Rental of a charming venue for ceremony and reception</td>
                                <td class="px-4 py-2 border-b border-gray-200">Affordable venue for ceremony and reception</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Catering</td>
                                <td class="px-4 py-2 border-b border-gray-200">Gourmet multi-course meal with premium beverage package, including an open bar</td>
                                <td class="px-4 py-2 border-b border-gray-200">Three-course meal with standard beverage package, including a selection of wines and beers</td>
                                <td class="px-4 py-2 border-b border-gray-200">Buffet or plated meal with a basic beverage package</td>
                                <td class="px-4 py-2 border-b border-gray-200">Buffet meal with non-alcoholic beverages and a limited selection of wines and beers</td>
                                <td class="px-4 py-2 border-b border-gray-200">Light refreshments or family-style meal, with non-alcoholic beverages</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Decorations</td>
                                <td class="px-4 py-2 border-b border-gray-200">Luxurious floral arrangements, customised lighting, premium linens, and elaborate table settings</td>
                                <td class="px-4 py-2 border-b border-gray-200">Elegant floral arrangements, upgraded lighting, and quality linens</td>
                                <td class="px-4 py-2 border-b border-gray-200">Standard floral arrangements and basic table settings</td>
                                <td class="px-4 py-2 border-b border-gray-200">Basic floral arrangements and simple table settings</td>
                                <td class="px-4 py-2 border-b border-gray-200">Minimal floral arrangements and basic table settings</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Entertainment</td>
                                <td class="px-4 py-2 border-b border-gray-200">Live band or top DJ, photobooth, and additional entertainment options (e.g., fireworks, performers)</td>
                                <td class="px-4 py-2 border-b border-gray-200">Professional DJ and basic photobooth</td>
                                <td class="px-4 py-2 border-b border-gray-200">Experienced DJ</td>
                                <td class="px-4 py-2 border-b border-gray-200">DJ for the reception</td>
                                <td class="px-4 py-2 border-b border-gray-200">Playlist with sound system or amateur DJ</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Photography and Videography</td>
                                <td class="px-4 py-2 border-b border-gray-200">Full-day coverage by a professional photographer and videographer, including a wedding album and edited video</td>
                                <td class="px-4 py-2 border-b border-gray-200">Coverage of the main events by a professional photographer and videographer</td>
                                <td class="px-4 py-2 border-b border-gray-200">Professional photographer for key moments</td>
                                <td class="px-4 py-2 border-b border-gray-200">Professional photographer for the ceremony and part of the reception</td>
                                <td class="px-4 py-2 border-b border-gray-200">Basic coverage by a freelance photographer</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Transportation</td>
                                <td class="px-4 py-2 border-b border-gray-200">Luxury transportation for the couple and wedding party, including a limousine or classic car</td>
                                <td class="px-4 py-2 border-b border-gray-200">Premium transportation for the couple, such as a town car or luxury SUV</td>
                                <td class="px-4 py-2 border-b border-gray-200">Standard transportation for the couple</td>
                                <td class="px-4 py-2 border-b border-gray-200">Standard transportation for the couple</td>
                                <td class="px-4 py-2 border-b border-gray-200">Self-arranged transportation</td>
                            </tr>
                            <tr class="bg-white even:bg-gray-50">
                                <td class="px-4 py-2 border-b border-gray-200">Extras</td>
                                <td class="px-4 py-2 border-b border-gray-200">Personalised wedding favors, a wedding cake by a renowned baker, and a post-wedding brunch</td>
                                <td class="px-4 py-2 border-b border-gray-200">Customised wedding favors and a wedding cake</td>
                                <td class="px-4 py-2 border-b border-gray-200">Standard wedding favors and a simple wedding cake</td>
                                <td class="px-4 py-2 border-b border-gray-200">Simple wedding favors and a basic wedding cake</td>
                                <td class="px-4 py-2 border-b border-gray-200">No additional extras; couple may arrange their own favors and cake</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>Some venues may not provide amenities such as clubs and DJs. Please book with caution</p>
            </div>
        </div>
    </section>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

    <script src="venue.js"></script>
    <script>
        const licenseInfo = document.querySelectorAll(".license-info");
        const weddingPackages = document.querySelectorAll(".wedding-packages");


        function showLicenseInfo() {
            licenseInfo.forEach((item) => {
                item.setAttribute("data-selected", "true");
            });
            weddingPackages.forEach((item) => {
                item.setAttribute("data-selected", "false");
            });

        }

        function showWeddingPackages() {
            licenseInfo.forEach((item) => {
                item.setAttribute("data-selected", "false");
            });
            weddingPackages.forEach((item) => {
                item.setAttribute("data-selected", "true");
            });

        }



        const venueSkeletonWrapper = document.getElementById("venue-skeleton-wrapper")
        const venueSkeleton = document.createElement("div");
        venueSkeleton.setAttribute("id", "venue-skeleton");
        const numberOfSkeletons = 10;
        venueSkeleton.innerHTML = ` <div class="z-50 w-full h-full mb-10 transition duration-300 ease-in-out bg-white border border-gray-200 rounded-lg animate-pulse">
                <div class="flex flex-row items-center w-full h-full ">
                    <div class="w-[686px] h-[500px] bg-gray-200"></div>
                    <div class="flex flex-col w-full px-4 leading-normal">
                        <span class="flex items-center justify-between w-full">
                            <div class="w-1/2 h-6 mb-2 bg-gray-200 rounded"></div>
                            <div class="w-10 h-10 bg-gray-200 rounded"></div>
                        </span>
                        <span class="flex items-center w-full pb-6">
                            <div class="w-4 h-4 bg-gray-200 rounded"></div>
                            <div class="w-10 h-4 px-2 bg-gray-200 rounded"></div>
                            <div class="text-sm bg-gray-200 rounded w-14"></div>
                        </span>
                        <div class="w-1/3 h-6 mb-2 bg-gray-200 rounded"></div>
                        <div class="w-full p-6 space-y-2">
                            <div class="flex items-center justify-between w-full gap-3 pt-2 pb-5 border-b border-gray-200 animate-pulse">
                                <div class="w-full h-4 bg-gray-200 rounded"></div>
                            </div>
                            <div class="flex items-center justify-start w-full pt-2 pb-5 border-b border-gray-200 animate-pulse">
                                <div class="w-full h-4 bg-gray-200 rounded"></div>
                            </div>
                            <div class="flex items-center justify-between w-full gap-3 pt-2 pb-5 border-b border-gray-200 animate-pulse">
                                <div class="w-full h-4 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap justify-between px-6 font-light gap-y-5">
                            <div class="w-1/4 h-4 bg-gray-200 rounded"></div>
                            <div class="w-1/4 h-4 bg-gray-200 rounded"></div>
                            <div class="w-1/4 h-4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>`;
        for (let i = 0; i < numberOfSkeletons; i++) {
            venueSkeletonWrapper.appendChild(venueSkeleton.cloneNode(true));
        }
        const venueMainSkeletonTitle = document.getElementById("skeleton-title-wrapper");
        const skeletonTitle = document.createElement("div");
        skeletonTitle.setAttribute("id", "skeleton-title");
        skeletonTitle.innerHTML = `<div class="h-16 bg-gray-200 animate-pulse w-96"></div>`
        venueMainSkeletonTitle.appendChild(skeletonTitle);

        const skeletonPriceWrapper = document.getElementById("skeleton-price-wrapper");
        const priceSkeleton = document.createElement("div");
        priceSkeleton.setAttribute("id", "skeleton-price-item");

        priceSkeleton.innerHTML = `<div class="flex items-center px-6 py-4">
                    <div class="w-16 h-16 bg-gray-300 rounded animate-pulse"></div>
                    <div class="flex-1 ml-3">
                    <div class="w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>
                    <div class="w-1/2 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
                    <div class="w-1/3 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
                    <div class="w-1/4 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
                    <div class="w-1/4 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                    <div class="w-10 h-10 px-4 py-2 ml-auto bg-gray-300 rounded animate-pulse"></div>
                </div>`;
        for (let i = 0; i < 3; i++) {
            skeletonPriceWrapper.appendChild(priceSkeleton.cloneNode(true));
        }

        const skeletonWishlistWrapper = document.getElementById("skeleton-wl-wrapper");
        const wishlistSkeleton = document.createElement("div");
        wishlistSkeleton.setAttribute("id", "skeleton-wishlist-item");
        wishlistSkeleton.innerHTML = `<div class="flex items-center px-6 py-4">
        <div class="w-16 h-16 bg-gray-300 rounded animate-pulse"></div>
        <div class="flex-1 ml-3">
            <div class="w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>
            <div class="w-1/2 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
            <div class="w-1/4 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div class="w-10 h-10 px-4 py-2 ml-auto bg-gray-300 rounded animate-pulse"></div>
        </div>`;
        for (let i = 0; i < 3; i++) {
            skeletonWishlistWrapper.appendChild(wishlistSkeleton.cloneNode(true));
        }
    </script>



</body>

</html>