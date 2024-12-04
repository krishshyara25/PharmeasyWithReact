import './Pharmeasy.css'

function App() {
  

  return (
    <>
  <div className="navbar1">
        <div className="logo-img"><img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" className="logo"></img></div>
       
        <div className="delivery">
            <div className="delivery1">
                <div><img src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" alt=""></img></div>
                <div className="nav_text">Express delivery to</div>
            </div>
            <div className="delivery2">
                <div className="nav_text2">Select Pincode</div>
                <div><img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" alt="" className="icon"></img></div>
            </div>
        </div>
        <div className="download">
            <div><img src="https://cdn-icons-png.flaticon.com/128/1551/1551230.png" alt="" className="phone"></img></div>
            <div className="downloadtext">Download App</div>
        </div>
        <div className="app">
            <div><img src="https://cdn-icons-png.flaticon.com/128/15494/15494722.png" alt="" className="icon1"></img></div>
            <div className="nav1_text">Hello,Log in</div>
        </div>
        <div className="app">
            <div><img src="https://cdn-icons-png.flaticon.com/128/879/879757.png" alt="" className="icon2"></img></div>
            <div className="nav1_text">Offers</div>
        </div>
        <div className="app">
            <div><img src="https://cdn-icons-png.flaticon.com/128/711/711897.png" alt="" className="icon1"></img></div>
            <div className="nav1_text">Cart</div>
        </div>
    </div>

    <div className="navbar2">
        <div className="nav_text3">Medicine</div>
        <div className="nav_text3">Lab Tests</div>
        <div className="healthcare">
            <div className="nav_text3">Healthcare</div> 
            <div><img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" alt="" className="d_arrow"></img></div>
        </div>
        <div className="nav_text3">Health Blogs</div>
        <div className="nav_text3">PLUS</div>
        <div className="nav_text3">Offers</div>
        <div className="nav_text3">Value Store</div>
    </div>

    <div className="search">
        <div className="searchmenu">
            <h2 className="que">What are you looking for?</h2>
            <div className="upload">
                <div><img src="https://cdn-icons-png.flaticon.com/128/1250/1250680.png" alt="" className="icon3"></img></div>
                <div className="upload_text">Order with prescription.</div>
                <div className="text1">UPLOAD NOW</div>
                <div><img src="https://img.icons8.com/?size=100&id=60671&format=png&color=000000" alt="" className="d_arrow"></img></div>
            </div>
        </div>
        <div className="searchbar">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/5868/5868370.png" alt="" className="search_icon"></img>
            </div>
            <div className="search_text">search for medicine</div>
            <div className="search_button">Search</div>
        </div>
    </div>

    <div className="products">
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" alt="" className="product_img"></img></div>
            <div className="name">Medicine</div>
            <div className="offer">FLAT 24% OFF</div>
        </div>
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="" className="product_img"></img></div>
            <div  className="name">Lab Tests</div>
            <div className="offer">UPTO 70% OFF</div>
        </div>
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" alt="" className="product_img"></img></div>
            <div className="name">HealthCare</div>
            <div className="offer">UPTO 60% OFF</div>
        </div>
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" alt="" className="product_img"></img></div>
            <div className="name">Health Blogs</div>
            <div></div>
        </div>
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" alt="" className="product_img"></img></div>
            <div className="name">PLUS</div>
            <div className="offer">SAVE 5% EXTRA</div>
        </div>
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" alt="" className="product_img"></img></div>
            <div className="name">Offers</div>
            <div></div>
        </div>
        <div className="product">
            <div className="p-img"><img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0" alt="" className="product_img"></img></div>
            <div className="name">Value Store</div>
            <div className="offer">UPTO 50% OFF</div>
        </div>
    </div>

    <div className="thumbnail">
        <div className="poster"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/eff22f4909d-24POCKET.jpg" alt="" className="thumbnail-img"></img></div>
        <div className="poster"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/a368de0150c-HP_Banner.jpg" alt="" className="thumbnail-img"></img></div>
        <div className="poster"><img src="https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg" alt="" className="poster3"></img>
        </div>
    </div>
    <div className="right-slider">
        <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" className="right-slide-arrow"></img>
    </div>
    

    <div className="slider-line">
        <div className="main-line">
            <div className="subline"></div>
        </div>
    </div>

    <div className="labtest">
        <div className="labtest-head">Lab Tests by Health Concern</div>
        <div className="lab-brand">
            <div className="labtest-text">Powered by
            </div>
            <div><img src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0" alt="" className="lab-brand-img"></img></div>
        </div>
        <div className="content">
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0" alt="" className="content_img"></img></div>
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0" alt="" className="content_img"></img></div>
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0" alt="" className="content_img"></img></div>
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0" alt="" className="content_img"></img></div>
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/cd9606a9173-efr.png?dim=256x0" alt="" className="content_img"></img></div>
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0" alt="" className="content_img"></img></div>
            <div><img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0" alt="" className="content_img"></img></div>
        </div>
    </div>

    <div className="right-slider2">
        <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" className="right-slide-arrow"></img>
    </div>
    
    <div className="popup">
        <div><img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="" className="pop-img"></img></div>
        <div className="popup-text">ORDER ON WHATSAPP</div>
    </div>

    <div className="prescription">
        <div className="order">
            <div><img src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0" alt="" className="prisc-img"></img></div>
            <div>
                <div className="order-text">Order with Prescription</div>
                <div className="order-text2">Upload prescription and we will deliver your medicines</div>
                <div className="upload-button">
                    <div><img src="https://cdn-icons-png.flaticon.com/128/526/526894.png" className="upload-img"></img></div>
                    <div className="upload-text">Upload</div>
            </div>
            </div>
        </div>
        <div className="work">
            <div className="work1">
                <div className="work-head-text">How does this work?</div>
                <div className="step1">
                    <div className="number">1</div>
                    <div className="process">Upload a photo of your prescription</div>
                </div>
                <div className="step1">
                    <div className="number">2</div>
                    <div className="process">Add delivery address and place the order</div>
                </div>
            </div>
            <div className="work2">
                <div className="step1">
                    <div className="number3">3</div>
                    <div className="process">We will call you to confirm the medicines</div>
                </div>
                <div className="step2">
                    <div className="number4">4</div>
                    <div className="process">Now, sit back! your medicines will get delivered at your doorstep</div>
                </div>
            </div>
        </div>
    </div>

    <div className="catagories">
        <h1 className="catagory">Shop by catagory</h1>
        <div className="items">
            <div>
                <div className="catagory_product"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Must haves</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a368dd6d66833c4187d1dceaed1440b4.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Sports nutrition</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d2c31b9f3ad13d5aa181796350117659.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Homeopathy care</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Elderly care</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e4ca54bc1d1d3ed18253afcb2ca77870.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Personal care</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Healthcare devices</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7459ca90bd0b3877b61c782254355bf2.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Health food and drinks</div>
            </div>
            <div>
                <div className="product2"><img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/81fa3c44e0503863b3778895d5ed0bec.png?f=png?dim=256x0" alt="" className="categoryImages"></img></div>
            <div className="text">Skin care</div>
            </div>
            
        </div>
        <div className="right-slider3">
            <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" className="right-slide-arrow"></img>
        </div>
    </div>

    <div className="new_launches">
        <div className="launches-head">New Launches</div>
        <div className="new-launches-text">New wellness range just for you!</div>
        <div className="new_products">
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/D09631/otrivin-advance-new-menthol-freshness-100-measured-sparys-6.1-1730117069.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Otrivin Advance New Menthol Freshness...</div>
                    <div className="MRP1">MRP ₹240.00</div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/N09544/pharmeasy-mens-diabetic-orthopedic-slippers-classic-tan-size-uk-9-6.01-1732012888.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Pharmeasy Men'S Diabetic & Orthopedic...</div>
                    <div className="MRP">MRP ₹1049.00</div>
                    <div className="final_price">
                        <div className="price">₹545.48</div>
                        <div className="discount">(48%)</div>
                    </div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/V34831/golite-osp-oral-sun-protection-strip-of-10-capsules-1-1705578175.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Golite Osp Oral Sun Protection Strip Of 10...</div>
                    <div className="MRP">MRP ₹450.00</div>
                    <div className="final_price">
                        <div className="price">₹405.00</div>
                        <div className="discount">(48%)</div>
                    </div>
                    
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/E02688/centrum-adult-50supports-overall-healthworlds-no1-multivitamin-30-tablets-2-1671745318.jpg?dim=1440x0" alt="" className="new_images2" style={{width:'70%'}}></img></div>
                    <div className="product_name">Centrum Adult 50+|Supports Overall...</div>
                    <div className="MRP">MRP ₹520.00</div>
                    <div className="final_price">
                        <div className="price">₹494.00</div>
                        <div className="discount">(48%)</div>
                    </div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/M79885/ova-news-ovulation-detection-kit-ovulation-kit-12-tests-pack-of-2-2-1686549737.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Ova News Ovulation Detection Kit Ovulati...</div>
                    <div className="MRP">MRP ₹1000.00</div>
                    <div className="final_price">
                        <div className="price">₹790.00</div>
                        <div className="discount">(48%)</div>
                    </div>
                    
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/H93792/himalaya-koflet-cough-syrup-100ml-6-koflet-lozenges-free-for-wet-dry-cough-6.01-1725362874.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Himalaya Koflet Cough Syrup 100ml + 6 Kofle...</div>
                    <div className="MRP">MRP ₹115.00</div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/P61565/venusia-max-intensive-moisturizing-cream-for-dry-skin-to-very-dry-skin-150-g-x-pack-of-2-2-1722337081.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Venusia Max Intensive Moisturizing Creat...</div>
                    <div className="MRP">MRP ₹1342.00</div>
                    <div className="final_price">
                        <div className="price">₹939.40 </div>
                        <div className="discount">(48%)</div>
                    </div>
                    
                </div>
        </div>
        <div className="right-slider4">
            <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" className="right-slide-arrow"></img>
        </div>
    </div>

    <div className="new_launches">
        <div className="launches-head">Trending Near You</div>
        <div className="new-launches-text">Popular in your city</div>
        <div className="new_products">
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Shelcal 500mg Strip Of 15 Tablets</div>
                    <div className="MRP">MRP ₹144.30</div>
                    <div className="final_price">
                        <div className="price">₹129.87</div>
                        <div className="discount">(10%)</div>
                    </div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/Q84402/abzorb-total-skin-relief-dusting-powder-20-extra-bottle-of-120gm-6.1-1718197859.jpg?dim=1440x0" alt="" className="new_images3"></img></div>
                    <div className="product_name">Abzorb Total Skin Relief Dusting Powder...</div>
                    <div className="MRP">MRP ₹160.00</div>
                    <div className="final_price">
                        <div className="price">₹152.00</div>
                        <div className="discount">(5%)</div>
                    </div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-6.01-1732857646.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Evion 400mg Strip Of 20 Capsule</div>
                    <div className="MRP">MRP ₹86.87</div>
                    <div className="final_price">
                        <div className="price">₹79.92</div>
                        <div className="discount">(8%)</div>
                    </div>
                    
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-6.1-1728900382.jpg?dim=1440x0" alt="" className="new_images4" style={{width: '70%'}}></img></div>
                    <div className="product_name">Dr. Morepen Gluco One Bg 03 Glucometer Te...</div>
                    <div className="MRP">MRP ₹849.00</div>
                    <div className="final_price">
                        <div className="price">₹611.28</div>
                        <div className="discount">(28%)</div>
                    </div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/281751/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-60-capsules-6.1-1729854506.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Revital H Men Multivitamin With...</div>
                    <div className="MRP">MRP ₹600.00</div>
                    <div className="final_price">
                        <div className="price">₹498.00</div>
                        <div className="discount">(17%)</div>
                    </div>
                    
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-with-essential-zinc-vitamins-for-immunity-energy-strip-of-15-tablets-6.01-1725866556.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Supradyn Daily Multivitamin With...</div>
                    <div className="MRP">MRP ₹66.35</div>
                </div>
                <div>
                    <div className="new_product"><img src="https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1723875556.jpg?dim=1440x0" alt="" className="new_images"></img></div>
                    <div className="product_name">Everherb Karela Jamun Juice - Helps...</div>
                    <div className="MRP">MRP ₹399.00</div>
                    <div className="final_price">
                        <div className="price">₹215.46 </div>
                        <div className="discount">(46%)</div>
                    </div>
                    
                </div>
        </div>
        <div className="right-slider5">
            <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" className="right-slide-arrow"></img>
        </div>
    </div>

    <div className="plus_member">
        <div>
            <div className="membership_text">Become a <img src="https://cdn-icons-png.flaticon.com/128/13989/13989168.png" alt="" className="plus_icon"></img><div className="plus_text">Plus</div>member</div>
            <div className="membership_text2">and enjoy every bachat on every order</div>
        </div>
        <div>
            <div className="benefits">Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership Know more </div>
            <div className="explore_button">Explore Now <img src="https://cdn-icons-png.flaticon.com/128/14026/14026760.png" alt="" className="Explore_icon"></img></div>
        </div>
        <div>
            <img src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0" alt="" className="family_pic"></img>
        </div>
    </div>

    
    </>
  )
}

export default App
