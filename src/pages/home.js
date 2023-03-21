import React from 'react';
import Footer from './footer';
import Header from './header';



class Home extends React.Component{
    render(){
        return(

            <div>
  
    <Header/>

  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Welcome to <span>Impact</span></h2>
          <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started">Get Started</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img src="assets/img/hero-img.svg" className="img-fluid" alt data-aos="zoom-out" data-aos-delay={100} />
        </div>
      </div>
    </div>
    <div className="icon-boxes position-relative">
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-easel" /></div>
              <h4 className="title"><a href className="stretched-link">Lorem Ipsum</a></h4>
            </div>
          </div>{/*End Icon Box */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-gem" /></div>
              <h4 className="title"><a href className="stretched-link">Sed ut perspiciatis</a></h4>
            </div>
          </div>{/*End Icon Box */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-geo-alt" /></div>
              <h4 className="title"><a href className="stretched-link">Magni Dolores</a></h4>
            </div>
          </div>{/*End Icon Box */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-command" /></div>
              <h4 className="title"><a href className="stretched-link">Nemo Enim</a></h4>
            </div>
          </div>{/*End Icon Box */}
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <img src="assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt />
            <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
            <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check-circle-fill" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
              <div className="position-relative mt-4">
                <img src="assets/img/about-2.jpg" className="img-fluid rounded-4" alt />
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= Clients Section ======= */}
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt /></div>
          </div>
        </div>
      </div>
    </section>{/* End Clients Section */}
    {/* ======= Stats Counter Section ======= */}
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <img src="assets/img/stats-img.svg" alt className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Happy Clients</strong> consequuntur quae diredo para mesta</p>
            </div>{/* End Stats Item */}
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>{/* End Stats Item */}
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start={0} data-purecounter-end={453} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>{/* End Stats Item */}
          </div>
        </div>
      </div>
    </section>{/* End Stats Counter Section */}
    {/* ======= Call To Action Section ======= */}
    <section id="call-to-action" className="call-to-action">
      <div className="container text-center" data-aos="zoom-out">
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
        <h3>Call To Action</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a className="cta-btn" href="#">Call To Action</a>
      </div>
    </section>{/* End Call To Action Section */}
   
   
   
   
   
   
      

   
           
       {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>
        <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img flex-shrink-0" alt />
                    <div>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img flex-shrink-0" alt />
                    <div>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt />
                    <div>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt />
                    <div>
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt />
                    <div>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>{/* End Testimonials Section */}
    {/* ======= Portfolio Section ======= */}
    <section id="portfolio" className="portfolio sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
        </div>
        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay={100}>
          <div>
            <ul className="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Product</li>
              <li data-filter=".filter-branding">Branding</li>
              <li data-filter=".filter-books">Books</li>
            </ul>{/* End Portfolio Filters */}
          </div>
          <div className="row gy-4 portfolio-container">
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">App 1</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Product 1</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Branding 1</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-books">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Books 1</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">App 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Product 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Branding 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-books">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Books 2</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">App 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Product 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Branding 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
            <div className="col-xl-4 col-md-6 portfolio-item filter-books">
              <div className="portfolio-wrap">
                <a href="assets/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt /></a>
                <div className="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">Books 3</a></h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
          </div>{/* End Portfolio Container */}
        </div>
      </div>
    </section>{/* End Portfolio Section */}
    {/* ======= Our Team Section ======= */}
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
            <div className="member">
              <img src="assets/img/team/team-1.jpg" className="img-fluid" alt />
              <h4>Walter White</h4>
              <span>Web Development</span>
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
            <div className="member">
              <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />
              <h4>Sarah Jhinson</h4>
              <span>Marketing</span>
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
            <div className="member">
              <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />
              <h4>William Anderson</h4>
              <span>Content</span>
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
            <div className="member">
              <img src="assets/img/team/team-4.jpg" className="img-fluid" alt />
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div className="social">
                <a href><i className="bi bi-twitter" /></a>
                <a href><i className="bi bi-facebook" /></a>
                <a href><i className="bi bi-instagram" /></a>
                <a href><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>{/* End Team Member */}
        </div>
      </div>
    </section>{/* End Our Team Section */}
    {/* ======= Pricing Section ======= */}
    <section id="pricing" className="pricing sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Pricing</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
        <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay={100}>
          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <div className="icon">
                <i className="bi bi-box" />
              </div>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>{/* End Pricing Item */}
          <div className="col-lg-4">
            <div className="pricing-item featured">
              <h3>Business Plan</h3>
              <div className="icon">
                <i className="bi bi-airplane" />
              </div>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                <li><i className="bi bi-check" /> Pharetra massa massa ultricies</li>
                <li><i className="bi bi-check" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>{/* End Pricing Item */}
          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <div className="icon">
                <i className="bi bi-send" />
              </div>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check" /> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check" /> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check" /> Nulla at volutpat diam uteera</li>
                <li><i className="bi bi-check" /> Pharetra massa massa ultricies</li>
                <li><i className="bi bi-check" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>{/* End Pricing Item */}
        </div>
      </div>
    </section>{/* End Pricing Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay={100}>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span className="num">1.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h3>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </div>
                </div>
              </div>{/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span className="num">2.</span>
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                  </button>
                </h3>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>{/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span className="num">3.</span>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                  </button>
                </h3>
                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </div>
                </div>
              </div>{/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    <span className="num">4.</span>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </button>
                </h3>
                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>{/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    <span className="num">5.</span>
                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                  </button>
                </h3>
                <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </div>
                </div>
              </div>{/* # Faq item*/}
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Frequently Asked Questions Section */}
    {/* ======= Recent Blog Posts Section ======= */}
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Recent Blog Posts</h2>
          <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
        </div>
        <div className="row gy-4">
          <div className="col-xl-4 col-md-6">
            <article>
              <div className="post-img">
                <img src="assets/img/blog/blog-1.jpg" alt className="img-fluid" />
              </div>
              <p className="post-category">Politics</p>
              <h2 className="title">
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>
              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author.jpg" alt className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                  <p className="post-author">Maria Doe</p>
                  <p className="post-date">
                    <time dateTime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>{/* End post list item */}
          <div className="col-xl-4 col-md-6">
            <article>
              <div className="post-img">
                <img src="assets/img/blog/blog-2.jpg" alt className="img-fluid" />
              </div>
              <p className="post-category">Sports</p>
              <h2 className="title">
                <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>
              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-2.jpg" alt className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                  <p className="post-author">Allisa Mayer</p>
                  <p className="post-date">
                    <time dateTime="2022-01-01">Jun 5, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>{/* End post list item */}
          <div className="col-xl-4 col-md-6">
            <article>
              <div className="post-img">
                <img src="assets/img/blog/blog-3.jpg" alt className="img-fluid" />
              </div>
              <p className="post-category">Entertainment</p>
              <h2 className="title">
                <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>
              <div className="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-3.jpg" alt className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                  <p className="post-author">Mark Dower</p>
                  <p className="post-date">
                    <time dateTime="2022-01-01">Jun 22, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>{/* End post list item */}
        </div>{/* End recent posts list */}
      </div>
    </section>{/* End Recent Blog Posts Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>{/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>{/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0" />
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>{/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0" />
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>{/* End Info Item */}
            </div>
          </div>
          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={7} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>{/* End Contact Form */}
        </div>
      </div>
    </section>{/* End Contact Section */}
  </main>{/* End #main */}
 
  {/* End Footer */}
  {/* <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  <div id="preloader" /> */}
  {/* Vendor JS Files */}
  {/* Template Main JS File */}

<footer/>


</div>




        );
        }
    }

export default Home;
