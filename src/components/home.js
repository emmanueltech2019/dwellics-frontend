import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div>
      <div class="content" id="maincontent">
        <noscript>
          <div class="noscript">
            <span>
              Niche requires Javascript to work correctly. Please
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.enable-javascript.com/"
              >
                turn it on
              </a>
              if you&apos;re experiencing issues.
            </span>
          </div>
        </noscript>
        <main class="home-overview-wrap">
          <section class="home-hero">
            <picture class="home-hero__photo home-hero__photo-v2">
              <source
                srcset="
                      https://d33a4decm84gsn.cloudfront.net/static/home/hero-lg.webp
                    "
                type="image/webp"
              />
              <source
                srcset="
                      https://d33a4decm84gsn.cloudfront.net/static/home/hero.webp
                    "
                type="image/webp"
              />
              <source
                srcset="
                      https://d33a4decm84gsn.cloudfront.net/static/home/hero-lg.jpg
                    "
                type="image/jpeg"
              />
              <source
                srcset="
                      https://d33a4decm84gsn.cloudfront.net/static/home/hero.jpg
                    "
                type="image/jpeg"
              />
              <Image
                src="https://d33a4decm84gsn.cloudfront.net/static/home/hero.jpg"
                alt="Student wearing backpack"
              />
            </picture>
            <div class="home-hero__content-container">
              <h1 class="home-hero__header">
                <div class="type--weight-600 home-hero__header__kicker">
                  Find the School
                </div>
                <div class="type--weight-700 home-hero__header__title">
                  That Fits You Best
                </div>
              </h1>
              <div class="home-squiggle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186 17"
                  fill="none"
                >
                  <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                </svg>
              </div>
              <div class="type--weight-400 home-body home-body--hero">
                Finding the right school shouldn&apos;t be hard. From K‑12 to
                college to grad school, we make it easy to discover and connect
                with the best ones for you.
              </div>
              <div class="home-hero__cta-wrap">
                <div class="type--weight-600 home-hero__cta-title">
                  Start Your Search
                </div>
                <ul class="home-hero__ctas">
                  <li class="home-hero__cta">
                    <a
                      href="https://www.niche.com/k12/search/best-schools/?geoip=true"
                      class="button home-button--green home-hero__cta-link"
                      tabindex="0"
                    >
                      K-12 Schools
                    </a>
                  </li>
                  <li class="home-hero__cta">
                    <a
                      href="https://www.niche.com/colleges/search/best-colleges/"
                      class="button home-button--green home-hero__cta-link"
                      tabindex="0"
                    >
                      Colleges
                    </a>
                  </li>
                  <li class="home-hero__cta">
                    <a
                      href="https://www.niche.com/graduate-schools/search/best-graduate-schools/"
                      class="button home-button--green home-hero__cta-link"
                      tabindex="0"
                    >
                      Grad Schools
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="home-hero__stamp">
              <Image
                loading="lazy"
                src="https://d33a4decm84gsn.cloudfront.net/static/home/stamp-fit.svg"
                alt=""
              />
            </div>
          </section>
          <section class="home-why-niche">
            <div class="home-wavy-edge">
              <div class="home-wavy-edge__inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                  <path
                    d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
                    transform="translate(0 -5)"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="home-header home-header--why">
              <div class="type--weight-600 home-header__kicker">Why Niche?</div>
            </h2>
            <p class="type--weight-700 home-header home-header--why home-header__title">
              Your search is unique.
              <br />
              Just&nbsp;like&nbsp;you.
            </p>
            <div class="home-squiggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 186 17"
                fill="none"
              >
                <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
              </svg>
            </div>
            <div class="type--weight-400 home-body home-body--why">
              We give you all of the data, reviews, and insights in one place to
              make your search as easy as possible.
            </div>
            <ul class="home-why-reasons">
              <li class="home-why-reason">
                <figure class="home-why-reason__illustration">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/why-icon-1.svg"
                    alt="12"
                  />
                </figure>
                <h3 class="type--weight-800 home-why-reason__title">
                  No Heavy Lifting
                </h3>
                <div class="type--weight-400 home-body home-why-reason__body">
                  We analyze the data so you don&apos;t have to.
                </div>
              </li>
              <li class="home-why-reason">
                <figure class="home-why-reason__illustration">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/why-icon-2.svg"
                    alt="hidw"
                  />
                </figure>
                <h3 class="type--weight-800 home-why-reason__title">
                  The Good, The Bad, &amp;&nbsp;The&nbsp;Honest
                </h3>
                <div class="type--weight-400 home-body home-why-reason__body">
                  Our user reviews let you hear directly from families and
                  students to give you an honest and holistic view.
                </div>
              </li>
              <li class="home-why-reason">
                <figure class="home-why-reason__illustration">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/why-icon-3.svg"
                    alt=""
                  />
                </figure>
                <h3 class="type--weight-800 home-why-reason__title">
                  Like A Glove
                </h3>
                <div class="type--weight-400 home-body home-why-reason__body">
                  We personalize your search based on what&apos;s most important
                  to you.
                </div>
              </li>
            </ul>
          </section>
          <section id="testimonialCarousel" class="home-testimonial">
            <div class="home-background-squiggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1512 3578.12"
              >
                <path d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"></path>
              </svg>
            </div>
            <h2 class="home-header home-header--testimonial">
              <div class="home-testimonial__kicker">Real Niche Stories</div>
            </h2>
            <p class="home-testimonial__title">
              Niche has helped millions of students and families find
              their&nbsp;fit.
            </p>
            <div class="home-testimonial__carousel home-testimonial__carousel--animatable home-testimonial__carousel--make-slides">
              <div aria-hidden="false" class="carousel-dots">
                <button
                  class="carousel-dot carousel-dot--active"
                  aria-label="Go to slide 1"
                  aria-current="true"
                ></button>
                <button
                  class="carousel-dot"
                  aria-label="Go to slide 2"
                  aria-current="false"
                ></button>
                <button
                  class="carousel-dot"
                  aria-label="Go to slide 3"
                  aria-current="false"
                ></button>
              </div>
              <ul class="home-testimonial__slides" id="carouselSlides">
                <li
                  class="home-testimonial__slide home-testimonial__slide--debut"
                  aria-hidden="false"
                >
                  <div class="home-testimonial__canvas">
                    <div
                      class="home-testimonial__pic-1"
                      id="testimonialAnimation"
                    >
                      <picture>
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/abby-1.webp
                              "
                          type="image/webp"
                        />
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/abby-1.jpg
                              "
                          type="image/jpeg"
                        />
                        <Image
                          loading="lazy"
                          src="https://d33a4decm84gsn.cloudfront.net/static/home/abby-1.jpg"
                          alt="Abby smiling at the camera"
                        />
                      </picture>
                    </div>
                    <div class="home-testimonial__pic-2">
                      <picture>
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/abby-2.webp
                              "
                          type="image/webp"
                        />
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/abby-2.jpg
                              "
                          type="image/jpeg"
                        />
                        <Image
                          loading="lazy"
                          src="https://d33a4decm84gsn.cloudfront.net/static/home/abby-2.jpg"
                          alt="Abby standing under an outdoor arch and smiling at the camera"
                        />
                      </picture>
                    </div>
                    <div
                      aria-hidden="true"
                      class="home-testimonial__swoosh--abby"
                    ></div>
                    <div aria-hidden="true" class="home-testimonial__stamp">
                      <Image
                        loading="lazy"
                        src="https://d33a4decm84gsn.cloudfront.net/static/home/stamp-found.svg"
                        alt="I Found My Niche"
                      />
                    </div>
                  </div>
                  <div class="home-testimonial__quote home-testimonial__quote--abby home-testimonial__quote--debut">
                    During my college search, I was having a difficult time
                    narrowing down what I wanted in a school, so I used Niche to
                    help. I especially liked looking at the rankings for
                    different aspects of the college experience, like the
                    campus, academics, and much more!
                  </div>
                  <div class="home-testimonial__quoter home-testimonial__quoter--debut">
                    Abby D.
                  </div>
                </li>
                <li class="home-testimonial__slide" aria-hidden="true">
                  <div class="home-testimonial__canvas">
                    <div
                      class="home-testimonial__pic-1"
                      id="testimonialAnimation"
                    >
                      <picture>
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/dayna-1.webp
                              "
                          type="image/webp"
                        />
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/dayna-1.jpg
                              "
                          type="image/jpeg"
                        />
                        <Image
                          loading="lazy"
                          src="https://d33a4decm84gsn.cloudfront.net/static/home/dayna-1.jpg"
                          alt="Dayna reading a book with her child"
                        />
                      </picture>
                    </div>
                    <div class="home-testimonial__pic-2">
                      <picture>
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/dayna-2.webp
                              "
                          type="image/webp"
                        />
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/dayna-2.jpg
                              "
                          type="image/jpeg"
                        />
                        <Image
                          loading="lazy"
                          src="https://d33a4decm84gsn.cloudfront.net/static/home/dayna-2.jpg"
                          alt="Dayna’s son posing in a green elementary graduation outfit"
                        />
                      </picture>
                    </div>
                    <div
                      aria-hidden="true"
                      class="home-testimonial__swoosh--dayna"
                    ></div>
                    <div
                      aria-hidden="true"
                      class="home-testimonial__stamp home-testimonial__stamp--dayna"
                    >
                      <Image
                        loading="lazy"
                        src="https://d33a4decm84gsn.cloudfront.net/static/home/stamp-dayna.svg"
                        alt="I Found Our Best-Fit School On Niche"
                      />
                    </div>
                  </div>
                  <div class="home-testimonial__quote home-testimonial__quote--dayna">
                    I am so grateful for Niche and their resources. Schooling
                    children at home has truly had its challenges. But having
                    resources has made it so much easier. Finding the right
                    programs for my little ones has been invaluable.
                  </div>
                  <div class="home-testimonial__quoter">Dayna M.</div>
                </li>
                <li class="home-testimonial__slide" aria-hidden="true">
                  <div class="home-testimonial__canvas">
                    <div
                      class="home-testimonial__pic-1"
                      id="testimonialAnimation"
                    >
                      <picture>
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/clay-1.webp
                              "
                          type="image/webp"
                        />
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/clay-1.jpg
                              "
                          type="image/jpeg"
                        />
                        <Image
                          loading="lazy"
                          src="https://d33a4decm84gsn.cloudfront.net/static/home/clay-1.jpg"
                          alt="Clay smiling at the camera while leaning on a bridge railing"
                        />
                      </picture>
                    </div>
                    <div class="home-testimonial__pic-2">
                      <picture>
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/clay-2.webp
                              "
                          type="image/webp"
                        />
                        <source
                          srcset="
                                https://d33a4decm84gsn.cloudfront.net/static/home/clay-2.jpg
                              "
                          type="image/jpeg"
                        />
                        <Image
                          loading="lazy"
                          src="https://d33a4decm84gsn.cloudfront.net/static/home/clay-2.jpg"
                          alt="Clay sitting and enjoying the sunlight on a campus lawn"
                        />
                      </picture>
                    </div>
                    <div
                      aria-hidden="true"
                      class="home-testimonial__swoosh--clay"
                    ></div>
                    <div aria-hidden="true" class="home-testimonial__stamp">
                      <Image
                        loading="lazy"
                        src="https://d33a4decm84gsn.cloudfront.net/static/home/stamp-clay.svg"
                        alt="I Found My Best-Fit School On Niche"
                      />
                    </div>
                  </div>
                  <div class="home-testimonial__quote home-testimonial__quote--clay">
                    When I was applying to college, I had no idea what I was
                    looking for. Niche helped me explore different schools and
                    see breakdowns on many aspects of their programs! Thanks to
                    Niche, I found a school that was a perfect fit!
                  </div>
                  <div class="home-testimonial__quoter">Clay N.</div>
                </li>
              </ul>
            </div>
          </section>
          <section class="home-features">
            <div class="home-background-squiggle home-background-squiggle--green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1512 3578.12"
              >
                <path d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"></path>
              </svg>
            </div>
            <div class="home-features__copy-container">
              <h2 class="home-header home-header--features">
                <div class="type--weight-600 home-header__kicker">
                  Stay On Track
                </div>
              </h2>
              <p class="type--weight-700 home-header home-header--features home-header__title">
                Tools to organize&nbsp;your school&nbsp;search.
              </p>
              <div class="home-squiggle home-squiggle--features">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186 17"
                  fill="none"
                >
                  <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                </svg>
              </div>
              <div class="type--weight-400 home-body home-body--features">
                We&apos;ll help you build your list, track your progress and get
                new recommendations as your search narrows.
              </div>
              <div class="home-features__cta-wrap">
                <a
                  href="https://www.niche.com/colleges/search/best-colleges/"
                  class="type--weight-600 home-features__cta"
                  tabindex="0"
                >
                  Start Exploring
                </a>
              </div>
            </div>
            <div aria-hidden="true" class="home-features__animation-wrap">
              <div
                class="home-features__animation"
                id="featuresAnimation"
                role="button"
                aria-label="Animation, Search and manage schools; Click to pause"
                tabindex="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1080 1080"
                  width="1080"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_3">
                      <rect width="1080" height="1080" x="0" y="0"></rect>
                    </clipPath>
                    <clipPath id="__lottie_element_12">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_23">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_34">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_61">
                      <path d="M0,0 L300,0 L300,300 L0,300z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_107">
                      <path d="M0,0 L300,0 L300,300 L0,300z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_114">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_125">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_149">
                      <path d="M0,0 L300,0 L300,300 L0,300z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_171">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_182">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_193">
                      <path d="M0,0 L100,0 L100,100 L0,100z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_204">
                      <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_210">
                      <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_218">
                      <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_228">
                      <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#__lottie_element_3)">
                    <g
                      transform="matrix(0,0,0,0,830.3590087890625,793.4409790039062)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,792.2689819335938,740.7009887695312)"
                      >
                        <path
                          fill="rgb(109,189,163)"
                          fill-opacity="1"
                          d=" M135.8769989013672,42.58399963378906 C135.8769989013672,42.58399963378906 -135.8769989013672,42.58399963378906 -135.8769989013672,42.58399963378906 C-142.29100036621094,42.58399963378906 -147.49000549316406,37.3849983215332 -147.49000549316406,30.97100067138672 C-147.49000549316406,30.97100067138672 -147.49000549316406,-30.97100067138672 -147.49000549316406,-30.97100067138672 C-147.49000549316406,-37.3849983215332 -142.29100036621094,-42.58399963378906 -135.8769989013672,-42.58399963378906 C-135.8769989013672,-42.58399963378906 135.8769989013672,-42.58399963378906 135.8769989013672,-42.58399963378906 C142.29100036621094,-42.58399963378906 147.49000549316406,-37.3849983215332 147.49000549316406,-30.97100067138672 C147.49000549316406,-30.97100067138672 147.49000549316406,30.97100067138672 147.49000549316406,30.97100067138672 C147.49000549316406,37.3849983215332 142.29100036621094,42.58399963378906 135.8769989013672,42.58399963378906z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(16,47,37)"
                      font-size="35.1407203674316"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Start Searching"
                      transform="matrix(0,0,0,0,830.3590087890625,793.4409790039062)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M9.7,0.42 C14.93,0.42 18.05,-2.73 18.05,-6.48 C18.05,-9.84 16.14,-11.57 13.38,-12.74 C13.38,-12.74 10.26,-14.01 10.26,-14.01 C8.35,-14.83 6.62,-15.47 6.62,-17.23 C6.62,-18.9 8,-19.89 10.16,-19.89 C11.93,-19.89 13.63,-19.18 15.08,-17.94 C15.08,-17.94 17.34,-20.7 17.34,-20.7 C15.54,-22.44 12.95,-23.57 10.16,-23.57 C5.63,-23.57 2.37,-20.7 2.37,-16.99 C2.37,-13.63 4.74,-11.82 7.04,-10.86 C7.04,-10.86 10.19,-9.48 10.19,-9.48 C12.28,-8.6 13.77,-8 13.77,-6.16 C13.77,-4.39 12.35,-3.22 9.8,-3.22 C7.57,-3.22 5.27,-4.14 3.61,-5.73 C3.61,-5.73 1.34,-2.97 1.34,-2.97 C3.54,-0.74 6.51,0.42 9.7,0.42z M27.37,0.42 C28.78,0.42 30.06,0.11 30.98,-0.32 C30.98,-0.32 30.23,-3.26 30.23,-3.26 C29.63,-3.01 29.03,-2.9 28.43,-2.9 C26.8,-2.9 25.99,-3.89 25.99,-5.91 C25.99,-5.91 25.99,-14.09 25.99,-14.09 C25.99,-14.09 30.41,-14.09 30.41,-14.09 C30.41,-14.09 30.41,-17.41 30.41,-17.41 C30.41,-17.41 25.99,-17.41 25.99,-17.41 C25.99,-17.41 25.99,-22.83 25.99,-22.83 C25.99,-22.83 22.52,-22.83 22.52,-22.83 C22.52,-22.83 22.02,-17.41 22.02,-17.41 C22.02,-17.41 19.33,-17.2 19.33,-17.2 C19.33,-17.2 19.33,-14.09 19.33,-14.09 C19.33,-14.09 21.81,-14.09 21.81,-14.09 C21.81,-14.09 21.81,-5.91 21.81,-5.91 C21.81,-2.12 23.3,0.42 27.37,0.42z M37.47,0.42 C39.53,0.42 41.22,-0.57 42.78,-1.91 C42.78,-1.91 42.92,-1.91 42.92,-1.91 C42.92,-1.91 43.28,0 43.28,0 C43.28,0 46.67,0 46.67,0 C46.67,0 46.67,-10.3 46.67,-10.3 C46.67,-15.15 44.48,-17.84 40.16,-17.84 C37.4,-17.84 34.92,-16.77 33.01,-15.57 C33.01,-15.57 34.5,-12.81 34.5,-12.81 C36.06,-13.73 37.68,-14.44 39.38,-14.44 C41.72,-14.44 42.43,-12.95 42.5,-11.18 C35.35,-10.4 32.31,-8.49 32.31,-4.67 C32.31,-1.63 34.43,0.42 37.47,0.42z M38.75,-2.9 C37.33,-2.9 36.34,-3.47 36.34,-4.95 C36.34,-6.72 37.76,-7.79 42.5,-8.35 C42.5,-8.35 42.5,-4.67 42.5,-4.67 C41.22,-3.47 40.16,-2.9 38.75,-2.9z M51.36,0 C51.36,0 55.57,0 55.57,0 C55.57,0 55.57,-10.55 55.57,-10.55 C56.6,-13.2 58.26,-14.12 59.64,-14.12 C60.35,-14.12 60.77,-14.05 61.3,-13.91 C61.3,-13.91 62.15,-17.48 62.15,-17.48 C61.62,-17.69 61.06,-17.84 60.17,-17.84 C58.33,-17.84 56.49,-16.56 55.22,-14.3 C55.22,-14.3 55.11,-14.3 55.11,-14.3 C55.11,-14.3 54.79,-17.41 54.79,-17.41 C54.79,-17.41 51.36,-17.41 51.36,-17.41 C51.36,-17.41 51.36,0 51.36,0z M70.76,0.42 C72.18,0.42 73.45,0.11 74.37,-0.32 C74.37,-0.32 73.63,-3.26 73.63,-3.26 C73.03,-3.01 72.43,-2.9 71.83,-2.9 C70.2,-2.9 69.38,-3.89 69.38,-5.91 C69.38,-5.91 69.38,-14.09 69.38,-14.09 C69.38,-14.09 73.81,-14.09 73.81,-14.09 C73.81,-14.09 73.81,-17.41 73.81,-17.41 C73.81,-17.41 69.38,-17.41 69.38,-17.41 C69.38,-17.41 69.38,-22.83 69.38,-22.83 C69.38,-22.83 65.92,-22.83 65.92,-22.83 C65.92,-22.83 65.42,-17.41 65.42,-17.41 C65.42,-17.41 62.73,-17.2 62.73,-17.2 C62.73,-17.2 62.73,-14.09 62.73,-14.09 C62.73,-14.09 65.21,-14.09 65.21,-14.09 C65.21,-14.09 65.21,-5.91 65.21,-5.91 C65.21,-2.12 66.69,0.42 70.76,0.42z M90.8,0.42 C96.04,0.42 99.15,-2.73 99.15,-6.48 C99.15,-9.84 97.24,-11.57 94.48,-12.74 C94.48,-12.74 91.37,-14.01 91.37,-14.01 C89.46,-14.83 87.72,-15.47 87.72,-17.23 C87.72,-18.9 89.1,-19.89 91.26,-19.89 C93.03,-19.89 94.73,-19.18 96.18,-17.94 C96.18,-17.94 98.45,-20.7 98.45,-20.7 C96.64,-22.44 94.06,-23.57 91.26,-23.57 C86.73,-23.57 83.48,-20.7 83.48,-16.99 C83.48,-13.63 85.85,-11.82 88.15,-10.86 C88.15,-10.86 91.3,-9.48 91.3,-9.48 C93.39,-8.6 94.87,-8 94.87,-6.16 C94.87,-4.39 93.46,-3.22 90.91,-3.22 C88.68,-3.22 86.38,-4.14 84.71,-5.73 C84.71,-5.73 82.45,-2.97 82.45,-2.97 C84.64,-0.74 87.62,0.42 90.8,0.42z M109.71,0.42 C111.97,0.42 114.1,-0.21 115.73,-1.42 C115.73,-1.42 114.31,-4.03 114.31,-4.03 C113.11,-3.26 111.76,-2.83 110.28,-2.83 C107.52,-2.83 105.67,-4.53 105.25,-7.43 C105.25,-7.43 116.22,-7.43 116.22,-7.43 C116.36,-8.07 116.43,-8.71 116.43,-9.56 C116.43,-14.44 113.89,-17.84 109.18,-17.84 C105.11,-17.84 101.14,-14.37 101.14,-8.71 C101.14,-2.9 104.9,0.42 109.71,0.42z M105.25,-10.55 C105.6,-13.16 107.3,-14.58 109.28,-14.58 C111.55,-14.58 112.75,-13.09 112.75,-10.55 C112.75,-10.55 105.25,-10.55 105.25,-10.55z M124.38,0.42 C126.43,0.42 128.13,-0.57 129.68,-1.91 C129.68,-1.91 129.83,-1.91 129.83,-1.91 C129.83,-1.91 130.18,0 130.18,0 C130.18,0 133.58,0 133.58,0 C133.58,0 133.58,-10.3 133.58,-10.3 C133.58,-15.15 131.38,-17.84 127.07,-17.84 C124.31,-17.84 121.83,-16.77 119.92,-15.57 C119.92,-15.57 121.4,-12.81 121.4,-12.81 C122.96,-13.73 124.59,-14.44 126.29,-14.44 C128.62,-14.44 129.33,-12.95 129.4,-11.18 C122.25,-10.4 119.21,-8.49 119.21,-4.67 C119.21,-1.63 121.33,0.42 124.38,0.42z M125.65,-2.9 C124.23,-2.9 123.24,-3.47 123.24,-4.95 C123.24,-6.72 124.66,-7.79 129.4,-8.35 C129.4,-8.35 129.4,-4.67 129.4,-4.67 C128.13,-3.47 127.06,-2.9 125.65,-2.9z M138.26,0 C138.26,0 142.47,0 142.47,0 C142.47,0 142.47,-10.55 142.47,-10.55 C143.5,-13.2 145.16,-14.12 146.54,-14.12 C147.25,-14.12 147.68,-14.05 148.21,-13.91 C148.21,-13.91 149.06,-17.48 149.06,-17.48 C148.52,-17.69 147.96,-17.84 147.07,-17.84 C145.23,-17.84 143.39,-16.56 142.12,-14.3 C142.12,-14.3 142.01,-14.3 142.01,-14.3 C142.01,-14.3 141.69,-17.41 141.69,-17.41 C141.69,-17.41 138.26,-17.41 138.26,-17.41 C138.26,-17.41 138.26,0 138.26,0z M158.76,0.42 C160.75,0.42 162.8,-0.25 164.46,-1.7 C164.46,-1.7 162.76,-4.35 162.76,-4.35 C161.77,-3.54 160.57,-2.97 159.19,-2.97 C156.54,-2.97 154.66,-5.24 154.66,-8.67 C154.66,-12.14 156.57,-14.4 159.33,-14.4 C160.43,-14.4 161.31,-14.05 162.2,-13.27 C162.2,-13.27 164.21,-15.89 164.21,-15.89 C162.94,-17.02 161.31,-17.84 159.12,-17.84 C154.45,-17.84 150.34,-14.47 150.34,-8.67 C150.34,-2.9 154.02,0.42 158.76,0.42z M166.83,0 C166.83,0 171.04,0 171.04,0 C171.04,0 171.04,-12.1 171.04,-12.1 C172.42,-13.52 173.41,-14.23 174.94,-14.23 C176.78,-14.23 177.59,-13.2 177.59,-10.37 C177.59,-10.37 177.59,0 177.59,0 C177.59,0 181.77,0 181.77,0 C181.77,0 181.77,-10.9 181.77,-10.9 C181.77,-15.29 180.14,-17.84 176.39,-17.84 C174.02,-17.84 172.28,-16.56 170.87,-15.22 C170.87,-15.22 171.04,-18.54 171.04,-18.54 C171.04,-18.54 171.04,-24.99 171.04,-24.99 C171.04,-24.99 166.83,-24.99 166.83,-24.99 C166.83,-24.99 166.83,0 166.83,0z M186.47,0 C186.47,0 190.69,0 190.69,0 C190.69,0 190.69,-17.41 190.69,-17.41 C190.69,-17.41 186.47,-17.41 186.47,-17.41 C186.47,-17.41 186.47,0 186.47,0z M188.6,-20.38 C190.08,-20.38 191.11,-21.34 191.11,-22.76 C191.11,-24.17 190.08,-25.13 188.6,-25.13 C187.11,-25.13 186.09,-24.17 186.09,-22.76 C186.09,-21.34 187.11,-20.38 188.6,-20.38z M195.72,0 C195.72,0 199.93,0 199.93,0 C199.93,0 199.93,-12.1 199.93,-12.1 C201.31,-13.52 202.3,-14.23 203.82,-14.23 C205.66,-14.23 206.47,-13.2 206.47,-10.37 C206.47,-10.37 206.47,0 206.47,0 C206.47,0 210.65,0 210.65,0 C210.65,0 210.65,-10.9 210.65,-10.9 C210.65,-15.29 209.02,-17.84 205.27,-17.84 C202.9,-17.84 201.13,-16.56 199.57,-15.08 C199.57,-15.08 199.47,-15.08 199.47,-15.08 C199.47,-15.08 199.15,-17.41 199.15,-17.41 C199.15,-17.41 195.72,-17.41 195.72,-17.41 C195.72,-17.41 195.72,0 195.72,0z M221.52,7.68 C227.22,7.68 230.82,4.95 230.82,1.52 C230.82,-1.49 228.6,-2.8 224.46,-2.8 C224.46,-2.8 221.38,-2.8 221.38,-2.8 C219.29,-2.8 218.58,-3.36 218.58,-4.32 C218.58,-5.1 218.9,-5.52 219.39,-5.95 C220.17,-5.66 220.99,-5.52 221.73,-5.52 C225.41,-5.52 228.38,-7.57 228.38,-11.43 C228.38,-12.6 227.96,-13.66 227.43,-14.3 C227.43,-14.3 230.54,-14.3 230.54,-14.3 C230.54,-14.3 230.54,-17.41 230.54,-17.41 C230.54,-17.41 224.31,-17.41 224.31,-17.41 C223.61,-17.66 222.69,-17.84 221.73,-17.84 C218.08,-17.84 214.83,-15.57 214.83,-11.57 C214.83,-9.52 215.93,-7.86 217.13,-6.97 C217.13,-6.97 217.13,-6.83 217.13,-6.83 C216.1,-6.12 215.18,-4.95 215.18,-3.61 C215.18,-2.19 215.89,-1.27 216.78,-0.71 C216.78,-0.71 216.78,-0.57 216.78,-0.57 C215.18,0.42 214.26,1.66 214.26,3.15 C214.26,6.19 217.38,7.68 221.52,7.68z M221.73,-8.14 C220.1,-8.14 218.76,-9.38 218.76,-11.57 C218.76,-13.73 220.07,-14.93 221.73,-14.93 C223.39,-14.93 224.67,-13.73 224.67,-11.57 C224.67,-9.38 223.36,-8.14 221.73,-8.14z M222.15,4.95 C219.46,4.95 217.77,4.07 217.77,2.51 C217.77,1.7 218.16,0.96 219.08,0.25 C219.75,0.42 220.49,0.5 221.45,0.5 C221.45,0.5 223.78,0.5 223.78,0.5 C225.73,0.5 226.79,0.88 226.79,2.19 C226.79,3.68 224.91,4.95 222.15,4.95z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,628.054443359375,519.5496215820312)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fill-opacity="1"
                          d=" M301.9259948730469,91.25199890136719 C301.9259948730469,91.25199890136719 -301.9259948730469,91.25199890136719 -301.9259948730469,91.25199890136719 C-308.82598876953125,91.25199890136719 -314.41900634765625,85.66000366210938 -314.41900634765625,78.76000213623047 C-314.41900634765625,78.76000213623047 -314.41900634765625,-78.76000213623047 -314.41900634765625,-78.76000213623047 C-314.41900634765625,-85.66000366210938 -308.82598876953125,-91.25199890136719 -301.9259948730469,-91.25199890136719 C-301.9259948730469,-91.25199890136719 301.9259948730469,-91.25199890136719 301.9259948730469,-91.25199890136719 C308.82598876953125,-91.25199890136719 314.41900634765625,-85.66000366210938 314.41900634765625,-78.76000213623047 C314.41900634765625,-78.76000213623047 314.41900634765625,78.76000213623047 314.41900634765625,78.76000213623047 C314.41900634765625,85.66000366210938 308.82598876953125,91.25199890136719 301.9259948730469,91.25199890136719z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(78,78,78)"
                      font-size="28.8410091400146"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="SCHOOL COST (NET PRICE) "
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,372.5196533203125,478.1486511230469)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M7.96,0.35 C12.26,0.35 14.81,-2.24 14.81,-5.32 C14.81,-8.07 13.24,-9.5 10.98,-10.46 C10.98,-10.46 8.42,-11.5 8.42,-11.5 C6.85,-12.17 5.43,-12.69 5.43,-14.15 C5.43,-15.51 6.56,-16.32 8.34,-16.32 C9.79,-16.32 11.18,-15.74 12.37,-14.73 C12.37,-14.73 14.23,-16.99 14.23,-16.99 C12.75,-18.41 10.63,-19.34 8.34,-19.34 C4.62,-19.34 1.95,-16.99 1.95,-13.94 C1.95,-11.18 3.89,-9.7 5.78,-8.92 C5.78,-8.92 8.37,-7.78 8.37,-7.78 C10.08,-7.06 11.3,-6.56 11.3,-5.05 C11.3,-3.6 10.14,-2.64 8.05,-2.64 C6.22,-2.64 4.33,-3.4 2.96,-4.71 C2.96,-4.71 1.1,-2.44 1.1,-2.44 C2.9,-0.61 5.34,0.35 7.96,0.35z M25.28,0.35 C27.72,0.35 29.69,-0.58 31.29,-2.41 C31.29,-2.41 29.43,-4.47 29.43,-4.47 C28.39,-3.31 27.08,-2.64 25.42,-2.64 C22.26,-2.64 20.25,-5.26 20.25,-9.53 C20.25,-13.77 22.46,-16.32 25.48,-16.32 C26.96,-16.32 28.09,-15.77 29.08,-14.81 C29.08,-14.81 30.91,-16.93 30.91,-16.93 C29.72,-18.24 27.8,-19.34 25.42,-19.34 C20.6,-19.34 16.71,-15.66 16.71,-9.44 C16.71,-3.14 20.51,0.35 25.28,0.35z M33.39,0 C33.39,0 36.84,0 36.84,0 C36.84,0 36.84,-8.37 36.84,-8.37 C36.84,-8.37 44.39,-8.37 44.39,-8.37 C44.39,-8.37 44.39,0 44.39,0 C44.39,0 47.85,0 47.85,0 C47.85,0 47.85,-19 47.85,-19 C47.85,-19 44.39,-19 44.39,-19 C44.39,-19 44.39,-11.39 44.39,-11.39 C44.39,-11.39 36.84,-11.39 36.84,-11.39 C36.84,-11.39 36.84,-19 36.84,-19 C36.84,-19 33.39,-19 33.39,-19 C33.39,-19 33.39,0 33.39,0z M59.94,0.35 C64.91,0.35 68.34,-3.43 68.34,-9.59 C68.34,-15.71 64.91,-19.34 59.94,-19.34 C54.98,-19.34 51.55,-15.71 51.55,-9.59 C51.55,-3.43 54.98,0.35 59.94,0.35z M59.94,-2.64 C56.98,-2.64 55.09,-5.34 55.09,-9.59 C55.09,-13.8 56.98,-16.32 59.94,-16.32 C62.88,-16.32 64.79,-13.8 64.79,-9.59 C64.79,-5.34 62.88,-2.64 59.94,-2.64z M79.41,0.35 C84.38,0.35 87.8,-3.43 87.8,-9.59 C87.8,-15.71 84.38,-19.34 79.41,-19.34 C74.44,-19.34 71.02,-15.71 71.02,-9.59 C71.02,-3.43 74.44,0.35 79.41,0.35z M79.41,-2.64 C76.45,-2.64 74.56,-5.34 74.56,-9.59 C74.56,-13.8 76.45,-16.32 79.41,-16.32 C82.34,-16.32 84.26,-13.8 84.26,-9.59 C84.26,-5.34 82.34,-2.64 79.41,-2.64z M91.47,0 C91.47,0 102.77,0 102.77,0 C102.77,0 102.77,-2.9 102.77,-2.9 C102.77,-2.9 94.93,-2.9 94.93,-2.9 C94.93,-2.9 94.93,-19 94.93,-19 C94.93,-19 91.47,-19 91.47,-19 C91.47,-19 91.47,0 91.47,0z M119.33,0.35 C121.77,0.35 123.74,-0.58 125.34,-2.41 C125.34,-2.41 123.48,-4.47 123.48,-4.47 C122.44,-3.31 121.13,-2.64 119.47,-2.64 C116.31,-2.64 114.3,-5.26 114.3,-9.53 C114.3,-13.77 116.51,-16.32 119.53,-16.32 C121.01,-16.32 122.15,-15.77 123.13,-14.81 C123.13,-14.81 124.96,-16.93 124.96,-16.93 C123.77,-18.24 121.85,-19.34 119.47,-19.34 C114.65,-19.34 110.76,-15.66 110.76,-9.44 C110.76,-3.14 114.56,0.35 119.33,0.35z M134.84,0.35 C139.81,0.35 143.24,-3.43 143.24,-9.59 C143.24,-15.71 139.81,-19.34 134.84,-19.34 C129.88,-19.34 126.45,-15.71 126.45,-9.59 C126.45,-3.43 129.88,0.35 134.84,0.35z M134.84,-2.64 C131.88,-2.64 129.99,-5.34 129.99,-9.59 C129.99,-13.8 131.88,-16.32 134.84,-16.32 C137.78,-16.32 139.69,-13.8 139.69,-9.59 C139.69,-5.34 137.78,-2.64 134.84,-2.64z M152.45,0.35 C156.75,0.35 159.31,-2.24 159.31,-5.32 C159.31,-8.07 157.74,-9.5 155.47,-10.46 C155.47,-10.46 152.92,-11.5 152.92,-11.5 C151.35,-12.17 149.92,-12.69 149.92,-14.15 C149.92,-15.51 151.06,-16.32 152.83,-16.32 C154.28,-16.32 155.68,-15.74 156.87,-14.73 C156.87,-14.73 158.73,-16.99 158.73,-16.99 C157.24,-18.41 155.12,-19.34 152.83,-19.34 C149.11,-19.34 146.44,-16.99 146.44,-13.94 C146.44,-11.18 148.39,-9.7 150.27,-8.92 C150.27,-8.92 152.86,-7.78 152.86,-7.78 C154.57,-7.06 155.79,-6.56 155.79,-5.05 C155.79,-3.6 154.63,-2.64 152.54,-2.64 C150.71,-2.64 148.82,-3.4 147.46,-4.71 C147.46,-4.71 145.6,-2.44 145.6,-2.44 C147.4,-0.61 149.84,0.35 152.45,0.35z M166,0 C166,0 169.45,0 169.45,0 C169.45,0 169.45,-16.09 169.45,-16.09 C169.45,-16.09 174.91,-16.09 174.91,-16.09 C174.91,-16.09 174.91,-19 174.91,-19 C174.91,-19 160.53,-19 160.53,-19 C160.53,-19 160.53,-16.09 160.53,-16.09 C160.53,-16.09 166,-16.09 166,-16.09 C166,-16.09 166,0 166,0z M187.36,5.17 C187.36,5.17 189.51,4.24 189.51,4.24 C187.34,0.49 186.35,-3.83 186.35,-8.07 C186.35,-12.32 187.34,-16.64 189.51,-20.39 C189.51,-20.39 187.36,-21.32 187.36,-21.32 C184.95,-17.37 183.53,-13.19 183.53,-8.07 C183.53,-2.96 184.95,1.22 187.36,5.17z M193.14,0 C193.14,0 196.36,0 196.36,0 C196.36,0 196.36,-8.31 196.36,-8.31 C196.36,-10.43 196.13,-12.78 195.92,-14.76 C195.92,-14.76 196.04,-14.76 196.04,-14.76 C196.65,-13.24 197.29,-11.73 197.99,-10.46 C197.99,-10.46 203.68,0 203.68,0 C203.68,0 207.37,0 207.37,0 C207.37,0 207.37,-19 207.37,-19 C207.37,-19 204.14,-19 204.14,-19 C204.14,-19 204.14,-10.69 204.14,-10.69 C204.14,-8.6 204.38,-6.27 204.58,-4.24 C204.58,-4.24 204.46,-4.24 204.46,-4.24 C203.85,-5.75 203.21,-7.26 202.52,-8.54 C202.52,-8.54 196.83,-19 196.83,-19 C196.83,-19 193.14,-19 193.14,-19 C193.14,-19 193.14,0 193.14,0z M212.06,0 C212.06,0 223.82,0 223.82,0 C223.82,0 223.82,-2.9 223.82,-2.9 C223.82,-2.9 215.51,-2.9 215.51,-2.9 C215.51,-2.9 215.51,-8.42 215.51,-8.42 C215.51,-8.42 222.31,-8.42 222.31,-8.42 C222.31,-8.42 222.31,-11.33 222.31,-11.33 C222.31,-11.33 215.51,-11.33 215.51,-11.33 C215.51,-11.33 215.51,-16.09 215.51,-16.09 C215.51,-16.09 223.53,-16.09 223.53,-16.09 C223.53,-16.09 223.53,-19 223.53,-19 C223.53,-19 212.06,-19 212.06,-19 C212.06,-19 212.06,0 212.06,0z M231.41,0 C231.41,0 234.86,0 234.86,0 C234.86,0 234.86,-16.09 234.86,-16.09 C234.86,-16.09 240.32,-16.09 240.32,-16.09 C240.32,-16.09 240.32,-19 240.32,-19 C240.32,-19 225.95,-19 225.95,-19 C225.95,-19 225.95,-16.09 225.95,-16.09 C225.95,-16.09 231.41,-16.09 231.41,-16.09 C231.41,-16.09 231.41,0 231.41,0z M249.15,0 C249.15,0 252.6,0 252.6,0 C252.6,0 252.6,-6.94 252.6,-6.94 C252.6,-6.94 255.27,-6.94 255.27,-6.94 C259.37,-6.94 262.54,-8.86 262.54,-13.1 C262.54,-17.51 259.37,-19 255.16,-19 C255.16,-19 249.15,-19 249.15,-19 C249.15,-19 249.15,0 249.15,0z M252.6,-9.7 C252.6,-9.7 252.6,-16.24 252.6,-16.24 C252.6,-16.24 254.9,-16.24 254.9,-16.24 C257.66,-16.24 259.11,-15.42 259.11,-13.1 C259.11,-10.8 257.8,-9.7 255.01,-9.7 C255.01,-9.7 252.6,-9.7 252.6,-9.7z M265.96,0 C265.96,0 269.42,0 269.42,0 C269.42,0 269.42,-7.38 269.42,-7.38 C269.42,-7.38 272.23,-7.38 272.23,-7.38 C272.23,-7.38 276.3,0 276.3,0 C276.3,0 280.16,0 280.16,0 C280.16,0 275.66,-7.9 275.66,-7.9 C277.93,-8.68 279.41,-10.46 279.41,-13.33 C279.41,-17.6 276.36,-19 272.38,-19 C272.38,-19 265.96,-19 265.96,-19 C265.96,-19 265.96,0 265.96,0z M269.42,-10.14 C269.42,-10.14 269.42,-16.24 269.42,-16.24 C269.42,-16.24 272.03,-16.24 272.03,-16.24 C274.62,-16.24 276.01,-15.48 276.01,-13.33 C276.01,-11.21 274.62,-10.14 272.03,-10.14 C272.03,-10.14 269.42,-10.14 269.42,-10.14z M283.09,0 C283.09,0 286.55,0 286.55,0 C286.55,0 286.55,-19 286.55,-19 C286.55,-19 283.09,-19 283.09,-19 C283.09,-19 283.09,0 283.09,0z M298.86,0.35 C301.3,0.35 303.28,-0.58 304.88,-2.41 C304.88,-2.41 303.02,-4.47 303.02,-4.47 C301.97,-3.31 300.66,-2.64 299.01,-2.64 C295.84,-2.64 293.84,-5.26 293.84,-9.53 C293.84,-13.77 296.05,-16.32 299.07,-16.32 C300.55,-16.32 301.68,-15.77 302.67,-14.81 C302.67,-14.81 304.5,-16.93 304.5,-16.93 C303.31,-18.24 301.39,-19.34 299.01,-19.34 C294.19,-19.34 290.29,-15.66 290.29,-9.44 C290.29,-3.14 294.1,0.35 298.86,0.35z M306.97,0 C306.97,0 318.74,0 318.74,0 C318.74,0 318.74,-2.9 318.74,-2.9 C318.74,-2.9 310.43,-2.9 310.43,-2.9 C310.43,-2.9 310.43,-8.42 310.43,-8.42 C310.43,-8.42 317.22,-8.42 317.22,-8.42 C317.22,-8.42 317.22,-11.33 317.22,-11.33 C317.22,-11.33 310.43,-11.33 310.43,-11.33 C310.43,-11.33 310.43,-16.09 310.43,-16.09 C310.43,-16.09 318.44,-16.09 318.44,-16.09 C318.44,-16.09 318.44,-19 318.44,-19 C318.44,-19 306.97,-19 306.97,-19 C306.97,-19 306.97,0 306.97,0z M323.53,5.17 C325.94,1.22 327.37,-2.96 327.37,-8.07 C327.37,-13.19 325.94,-17.37 323.53,-21.32 C323.53,-21.32 321.38,-20.39 321.38,-20.39 C323.56,-16.64 324.55,-12.32 324.55,-8.07 C324.55,-3.83 323.56,0.49 321.38,4.24 C321.38,4.24 323.53,5.17 323.53,5.17z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,631.861083984375,557.0404663085938)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(109,189,163)"
                          fill-opacity="1"
                          d=" M258.3970031738281,11.187999725341797 C258.3970031738281,11.187999725341797 -258.3970031738281,11.187999725341797 -258.3970031738281,11.187999725341797 C-264.57598876953125,11.187999725341797 -269.5849914550781,6.178999900817871 -269.5849914550781,0 C-269.5849914550781,0 -269.5849914550781,0 -269.5849914550781,0 C-269.5849914550781,-6.178999900817871 -264.57598876953125,-11.187999725341797 -258.3970031738281,-11.187999725341797 C-258.3970031738281,-11.187999725341797 258.3970031738281,-11.187999725341797 258.3970031738281,-11.187999725341797 C264.57598876953125,-11.187999725341797 269.5849914550781,-6.178999900817871 269.5849914550781,0 C269.5849914550781,0 269.5849914550781,0 269.5849914550781,0 C269.5849914550781,6.178999900817871 264.57598876953125,11.187999725341797 258.3970031738281,11.187999725341797z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,527.4190673828125,557.0404663085938)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1.0024199485778809,0,0,1.0270800590515137,0,0)"
                      >
                        <path
                          fill="rgb(64,128,82)"
                          fill-opacity="1"
                          d=" M-148.1790008544922,-11.70300006866455 C-148.1790008544922,-11.70300006866455 -148.45799255371094,-11.187999725341797 -148.45799255371094,-11.187999725341797 C-154.63699340820312,-11.187999725341797 -159.64599609375,-6.178999900817871 -159.64599609375,0 C-159.64599609375,6.178999900817871 -154.63699340820312,11.187999725341797 -148.45799255371094,11.187999725341797 C-148.45799255371094,11.187999725341797 -147.70399475097656,11.28600025177002 -147.70399475097656,11.28600025177002 C-147.70399475097656,11.28600025177002 -148.1790008544922,-11.70300006866455 -148.1790008544922,-11.70300006866455z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,-257.6685485839844,33.87452697753906)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,679.0540161132812,550.7009887695312)"
                      >
                        <path
                          fill="rgb(239,239,239)"
                          fill-opacity="1"
                          d=" M21.52400016784668,0 C21.52400016784668,11.88700008392334 11.88700008392334,21.52400016784668 0,21.52400016784668 C-11.88700008392334,21.52400016784668 -21.52400016784668,11.88700008392334 -21.52400016784668,0 C-21.52400016784668,-11.88700008392334 -11.88700008392334,-21.52400016784668 0,-21.52400016784668 C11.88700008392334,-21.52400016784668 21.52400016784668,-11.88700008392334 21.52400016784668,0z"
                        ></path>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(255,255,255)"
                          stroke-opacity="1"
                          stroke-width="1.923"
                          d=" M21.52400016784668,0 C21.52400016784668,11.88700008392334 11.88700008392334,21.52400016784668 0,21.52400016784668 C-11.88700008392334,21.52400016784668 -21.52400016784668,11.88700008392334 -21.52400016784668,0 C-21.52400016784668,-11.88700008392334 -11.88700008392334,-21.52400016784668 0,-21.52400016784668 C11.88700008392334,-21.52400016784668 21.52400016784668,-11.88700008392334 21.52400016784668,0z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,679.0540161132812,550.7009887695312)"
                      >
                        <path
                          fill="rgb(48,52,128)"
                          fill-opacity="1"
                          d=" M10.76200008392334,0 C10.76200008392334,5.943999767303467 5.943999767303467,10.76200008392334 0,10.76200008392334 C-5.943999767303467,10.76200008392334 -10.76200008392334,5.943999767303467 -10.76200008392334,0 C-10.76200008392334,-5.943999767303467 -5.943999767303467,-10.76200008392334 0,-10.76200008392334 C5.943999767303467,-10.76200008392334 10.76200008392334,-5.943999767303467 10.76200008392334,0z"
                        ></path>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(255,255,255)"
                          stroke-opacity="1"
                          stroke-width="1.923"
                          d=" M10.76200008392334,0 C10.76200008392334,5.943999767303467 5.943999767303467,10.76200008392334 0,10.76200008392334 C-5.943999767303467,10.76200008392334 -10.76200008392334,5.943999767303467 -10.76200008392334,0 C-10.76200008392334,-5.943999767303467 -5.943999767303467,-10.76200008392334 0,-10.76200008392334 C5.943999767303467,-10.76200008392334 10.76200008392334,-5.943999767303467 10.76200008392334,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(16,47,37)"
                      font-size="32.3680305480957"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="0 - $20,000"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,376.55621337890625,519.2019653320312)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.38,0.39 C12.71,0.39 15.45,-3.46 15.45,-10.46 C15.45,-17.44 12.71,-21.12 8.38,-21.12 C4.07,-21.12 1.3,-17.47 1.3,-10.46 C1.3,-3.46 4.07,0.39 8.38,0.39z M8.38,-2.64 C6.42,-2.64 4.99,-4.6 4.99,-10.46 C4.99,-16.3 6.42,-18.12 8.38,-18.12 C10.37,-18.12 11.77,-16.3 11.77,-10.46 C11.77,-4.6 10.37,-2.64 8.38,-2.64z M24.48,-6.81 C24.48,-6.81 32.27,-6.81 32.27,-6.81 C32.27,-6.81 32.27,-9.62 32.27,-9.62 C32.27,-9.62 24.48,-9.62 24.48,-9.62 C24.48,-9.62 24.48,-6.81 24.48,-6.81z M47.15,3.59 C47.15,3.59 49.79,3.59 49.79,3.59 C49.79,3.59 49.79,0.23 49.79,0.23 C53.01,-0.39 54.84,-2.71 54.84,-5.87 C54.84,-11.96 46,-11.93 46,-15.42 C46,-17.05 47.05,-17.99 48.74,-17.99 C50.31,-17.99 51.48,-17.41 52.56,-16.33 C52.56,-16.33 54.54,-18.42 54.54,-18.42 C53.34,-19.82 51.84,-20.8 49.79,-21.06 C49.79,-21.06 49.79,-24.32 49.79,-24.32 C49.79,-24.32 47.15,-24.32 47.15,-24.32 C47.15,-24.32 47.15,-20.99 47.15,-20.99 C44.18,-20.47 42.29,-18.32 42.29,-15.26 C42.29,-9.49 51.12,-9.39 51.12,-5.57 C51.12,-3.81 50.14,-2.74 48.03,-2.74 C46.3,-2.74 44.77,-3.36 43.27,-4.66 C43.27,-4.66 41.51,-2.28 41.51,-2.28 C42.97,-0.72 45.03,0.16 47.15,0.36 C47.15,0.36 47.15,3.59 47.15,3.59z M57.92,0 C57.92,0 71.96,0 71.96,0 C71.96,0 71.96,-3.26 71.96,-3.26 C71.96,-3.26 66.65,-3.26 66.65,-3.26 C65.64,-3.26 64.27,-3.16 63.16,-3.06 C67.47,-7.37 70.99,-10.92 70.99,-14.8 C70.99,-18.61 68.38,-21.12 64.4,-21.12 C61.6,-21.12 59.68,-19.92 57.82,-17.83 C57.82,-17.83 59.87,-15.81 59.87,-15.81 C60.98,-17.02 62.28,-18.06 63.88,-18.06 C66.06,-18.06 67.27,-16.72 67.27,-14.54 C67.27,-11.44 63.59,-7.66 57.92,-2.38 C57.92,-2.38 57.92,0 57.92,0z M81.69,0.39 C86.03,0.39 88.76,-3.46 88.76,-10.46 C88.76,-17.44 86.03,-21.12 81.69,-21.12 C77.39,-21.12 74.62,-17.47 74.62,-10.46 C74.62,-3.46 77.39,0.39 81.69,0.39z M81.69,-2.64 C79.74,-2.64 78.3,-4.6 78.3,-10.46 C78.3,-16.3 79.74,-18.12 81.69,-18.12 C83.68,-18.12 85.08,-16.3 85.08,-10.46 C85.08,-4.6 83.68,-2.64 81.69,-2.64z M92.3,6 C95.59,4.86 97.45,2.38 97.45,-0.85 C97.45,-3.32 96.44,-4.79 94.61,-4.79 C93.21,-4.79 92.07,-3.88 92.07,-2.44 C92.07,-0.91 93.21,-0.1 94.51,-0.1 C94.61,-0.1 94.71,-0.1 94.81,-0.1 C94.84,1.56 93.63,3.03 91.48,3.88 C91.48,3.88 92.3,6 92.3,6z M107.33,0.39 C111.66,0.39 114.4,-3.46 114.4,-10.46 C114.4,-17.44 111.66,-21.12 107.33,-21.12 C103.02,-21.12 100.25,-17.47 100.25,-10.46 C100.25,-3.46 103.02,0.39 107.33,0.39z M107.33,-2.64 C105.37,-2.64 103.94,-4.6 103.94,-10.46 C103.94,-16.3 105.37,-18.12 107.33,-18.12 C109.31,-18.12 110.72,-16.3 110.72,-10.46 C110.72,-4.6 109.31,-2.64 107.33,-2.64z M123.96,0.39 C128.3,0.39 131.04,-3.46 131.04,-10.46 C131.04,-17.44 128.3,-21.12 123.96,-21.12 C119.66,-21.12 116.89,-17.47 116.89,-10.46 C116.89,-3.46 119.66,0.39 123.96,0.39z M123.96,-2.64 C122.01,-2.64 120.57,-4.6 120.57,-10.46 C120.57,-16.3 122.01,-18.12 123.96,-18.12 C125.95,-18.12 127.35,-16.3 127.35,-10.46 C127.35,-4.6 125.95,-2.64 123.96,-2.64z M140.6,0.39 C144.94,0.39 147.67,-3.46 147.67,-10.46 C147.67,-17.44 144.94,-21.12 140.6,-21.12 C136.3,-21.12 133.53,-17.47 133.53,-10.46 C133.53,-3.46 136.3,0.39 140.6,0.39z M140.6,-2.64 C138.65,-2.64 137.21,-4.6 137.21,-10.46 C137.21,-16.3 138.65,-18.12 140.6,-18.12 C142.59,-18.12 143.99,-16.3 143.99,-10.46 C143.99,-4.6 142.59,-2.64 140.6,-2.64z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,369.8988037109375,263.39764404296875)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fill-opacity="1"
                          d=" M249.90899658203125,92.18800354003906 C249.90899658203125,92.18800354003906 -249.90899658203125,92.18800354003906 -249.90899658203125,92.18800354003906 C-256.23199462890625,92.18800354003906 -261.3580017089844,87.06300354003906 -261.3580017089844,80.73999786376953 C-261.3580017089844,80.73999786376953 -261.3580017089844,-80.73999786376953 -261.3580017089844,-80.73999786376953 C-261.3580017089844,-87.06300354003906 -256.23199462890625,-92.18800354003906 -249.90899658203125,-92.18800354003906 C-249.90899658203125,-92.18800354003906 249.90899658203125,-92.18800354003906 249.90899658203125,-92.18800354003906 C256.23199462890625,-92.18800354003906 261.3580017089844,-87.06300354003906 261.3580017089844,-80.73999786376953 C261.3580017089844,-80.73999786376953 261.3580017089844,80.73999786376953 261.3580017089844,80.73999786376953 C261.3580017089844,87.06300354003906 256.23199462890625,92.18800354003906 249.90899658203125,92.18800354003906z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,366.7713928222656,278.9462890625)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(239,239,239)"
                          stroke-opacity="1"
                          stroke-width="2.16"
                          d=" M218.66099548339844,31.604999542236328 C218.66099548339844,31.604999542236328 -218.66099548339844,31.604999542236328 -218.66099548339844,31.604999542236328 C-222.64599609375,31.604999542236328 -225.8769989013672,28.374000549316406 -225.8769989013672,24.388999938964844 C-225.8769989013672,24.388999938964844 -225.8769989013672,-24.388999938964844 -225.8769989013672,-24.388999938964844 C-225.8769989013672,-28.374000549316406 -222.64599609375,-31.604999542236328 -218.66099548339844,-31.604999542236328 C-218.66099548339844,-31.604999542236328 218.66099548339844,-31.604999542236328 218.66099548339844,-31.604999542236328 C222.64599609375,-31.604999542236328 225.8769989013672,-28.374000549316406 225.8769989013672,-24.388999938964844 C225.8769989013672,-24.388999938964844 225.8769989013672,24.388999938964844 225.8769989013672,24.388999938964844 C225.8769989013672,28.374000549316406 222.64599609375,31.604999542236328 218.66099548339844,31.604999542236328z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,530.0783081054688,519.9422607421875)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,130,72)"
                          fill-opacity="1"
                          d=" M27.30900001525879,-243.53900146484375 C21.417999267578125,-243.53900146484375 16.631999969482422,-248.3249969482422 16.631999969482422,-254.21600341796875 C16.631999969482422,-260.10699462890625 21.417999267578125,-264.89300537109375 27.30900001525879,-264.89300537109375 C33.20000076293945,-264.89300537109375 37.98500061035156,-260.10699462890625 37.98500061035156,-254.21600341796875 C37.98500061035156,-248.3249969482422 33.20000076293945,-243.53900146484375 27.30900001525879,-243.53900146484375z M27.30900001525879,-270.0469970703125 C18.656999588012695,-270.0469970703125 11.661999702453613,-263.052001953125 11.661999702453613,-254.39999389648438 C11.661999702453613,-251.08700561523438 12.581999778747559,-248.14100646972656 14.42300033569336,-245.56399536132812 C14.42300033569336,-245.56399536132812 7.427999973297119,-238.7530059814453 7.427999973297119,-238.7530059814453 C6.323999881744385,-237.6490020751953 5.4029998779296875,-235.62399291992188 6.875999927520752,-234.1510009765625 C8.532999992370605,-232.49400329589844 10.37399959564209,-233.41400146484375 11.477999687194824,-234.7030029296875 C11.477999687194824,-234.7030029296875 18.288999557495117,-241.51400756835938 18.288999557495117,-241.51400756835938 C20.865999221801758,-239.85699462890625 23.812000274658203,-238.7530059814453 27.125,-238.7530059814453 C35.777000427246094,-238.7530059814453 42.770999908447266,-245.7480010986328 42.770999908447266,-254.39999389648438 C42.95500183105469,-263.052001953125 35.96099853515625,-270.0469970703125 27.30900001525879,-270.0469970703125z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(78,78,78)"
                      font-size="28.8410091400146"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="LOCATION "
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,152.1873016357422,223.36654663085938)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.41,0 C2.41,0 13.71,0 13.71,0 C13.71,0 13.71,-2.9 13.71,-2.9 C13.71,-2.9 5.87,-2.9 5.87,-2.9 C5.87,-2.9 5.87,-19 5.87,-19 C5.87,-19 2.41,-19 2.41,-19 C2.41,-19 2.41,0 2.41,0z M24.32,0.35 C29.29,0.35 32.72,-3.43 32.72,-9.59 C32.72,-15.71 29.29,-19.34 24.32,-19.34 C19.36,-19.34 15.93,-15.71 15.93,-9.59 C15.93,-3.43 19.36,0.35 24.32,0.35z M24.32,-2.64 C21.36,-2.64 19.47,-5.34 19.47,-9.59 C19.47,-13.8 21.36,-16.32 24.32,-16.32 C27.26,-16.32 29.17,-13.8 29.17,-9.59 C29.17,-5.34 27.26,-2.64 24.32,-2.64z M43.97,0.35 C46.41,0.35 48.38,-0.58 49.98,-2.41 C49.98,-2.41 48.12,-4.47 48.12,-4.47 C47.07,-3.31 45.77,-2.64 44.11,-2.64 C40.95,-2.64 38.94,-5.26 38.94,-9.53 C38.94,-13.77 41.15,-16.32 44.17,-16.32 C45.65,-16.32 46.78,-15.77 47.77,-14.81 C47.77,-14.81 49.6,-16.93 49.6,-16.93 C48.41,-18.24 46.49,-19.34 44.11,-19.34 C39.29,-19.34 35.4,-15.66 35.4,-9.44 C35.4,-3.14 39.2,0.35 43.97,0.35z M56,-10.05 C56.61,-12.05 57.16,-14.2 57.65,-16.29 C57.65,-16.29 57.77,-16.29 57.77,-16.29 C58.32,-14.23 58.87,-12.05 59.48,-10.05 C59.48,-10.05 60.12,-7.78 60.12,-7.78 C60.12,-7.78 55.36,-7.78 55.36,-7.78 C55.36,-7.78 56,-10.05 56,-10.05z M49.61,0 C49.61,0 53.12,0 53.12,0 C53.12,0 54.57,-5.08 54.57,-5.08 C54.57,-5.08 60.88,-5.08 60.88,-5.08 C60.88,-5.08 62.33,0 62.33,0 C62.33,0 65.99,0 65.99,0 C65.99,0 59.83,-19 59.83,-19 C59.83,-19 55.76,-19 55.76,-19 C55.76,-19 49.61,0 49.61,0z M71.92,0 C71.92,0 75.37,0 75.37,0 C75.37,0 75.37,-16.09 75.37,-16.09 C75.37,-16.09 80.83,-16.09 80.83,-16.09 C80.83,-16.09 80.83,-19 80.83,-19 C80.83,-19 66.45,-19 66.45,-19 C66.45,-19 66.45,-16.09 66.45,-16.09 C66.45,-16.09 71.92,-16.09 71.92,-16.09 C71.92,-16.09 71.92,0 71.92,0z M83.89,0 C83.89,0 87.34,0 87.34,0 C87.34,0 87.34,-19 87.34,-19 C87.34,-19 83.89,-19 83.89,-19 C83.89,-19 83.89,0 83.89,0z M99.48,0.35 C104.45,0.35 107.88,-3.43 107.88,-9.59 C107.88,-15.71 104.45,-19.34 99.48,-19.34 C94.52,-19.34 91.09,-15.71 91.09,-9.59 C91.09,-3.43 94.52,0.35 99.48,0.35z M99.48,-2.64 C96.52,-2.64 94.63,-5.34 94.63,-9.59 C94.63,-13.8 96.52,-16.32 99.48,-16.32 C102.42,-16.32 104.33,-13.8 104.33,-9.59 C104.33,-5.34 102.42,-2.64 99.48,-2.64z M111.55,0 C111.55,0 114.77,0 114.77,0 C114.77,0 114.77,-8.31 114.77,-8.31 C114.77,-10.43 114.54,-12.78 114.33,-14.76 C114.33,-14.76 114.45,-14.76 114.45,-14.76 C115.06,-13.24 115.7,-11.73 116.4,-10.46 C116.4,-10.46 122.09,0 122.09,0 C122.09,0 125.78,0 125.78,0 C125.78,0 125.78,-19 125.78,-19 C125.78,-19 122.55,-19 122.55,-19 C122.55,-19 122.55,-10.69 122.55,-10.69 C122.55,-8.6 122.79,-6.27 122.99,-4.24 C122.99,-4.24 122.87,-4.24 122.87,-4.24 C122.26,-5.75 121.62,-7.26 120.93,-8.54 C120.93,-8.54 115.23,-19 115.23,-19 C115.23,-19 111.55,-19 111.55,-19 C111.55,-19 111.55,0 111.55,0z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      fill="rgb(16,47,37)"
                      font-size="32.3680305480957"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="New York"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,173.47586059570312,288.58026123046875)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.71,0 C2.71,0 6.32,0 6.32,0 C6.32,0 6.32,-9.32 6.32,-9.32 C6.32,-11.7 6.06,-14.34 5.83,-16.56 C5.83,-16.56 5.97,-16.56 5.97,-16.56 C6.65,-14.86 7.37,-13.17 8.15,-11.74 C8.15,-11.74 14.54,0 14.54,0 C14.54,0 18.68,0 18.68,0 C18.68,0 18.68,-21.32 18.68,-21.32 C18.68,-21.32 15.06,-21.32 15.06,-21.32 C15.06,-21.32 15.06,-12 15.06,-12 C15.06,-9.65 15.32,-7.04 15.55,-4.76 C15.55,-4.76 15.42,-4.76 15.42,-4.76 C14.73,-6.45 14.02,-8.15 13.23,-9.58 C13.23,-9.58 6.85,-21.32 6.85,-21.32 C6.85,-21.32 2.71,-21.32 2.71,-21.32 C2.71,-21.32 2.71,0 2.71,0z"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M9.19,0.39 C11.28,0.39 13.23,-0.2 14.73,-1.3 C14.73,-1.3 13.43,-3.72 13.43,-3.72 C12.32,-3 11.08,-2.61 9.71,-2.61 C7.17,-2.61 5.48,-4.17 5.09,-6.85 C5.09,-6.85 15.19,-6.85 15.19,-6.85 C15.32,-7.43 15.39,-8.02 15.39,-8.8 C15.39,-13.3 13.04,-16.43 8.7,-16.43 C4.95,-16.43 1.3,-13.23 1.3,-8.02 C1.3,-2.67 4.76,0.39 9.19,0.39z M5.09,-9.71 C5.41,-12.13 6.98,-13.43 8.8,-13.43 C10.89,-13.43 12,-12.06 12,-9.71 C12,-9.71 5.09,-9.71 5.09,-9.71z"
                        transform="matrix(1,0,0,1,21.233428955078125,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.02,0 C5.02,0 9.65,0 9.65,0 C9.65,0 11.28,-7.43 11.28,-7.43 C11.6,-8.87 11.87,-10.17 12.09,-12.26 C12.09,-12.26 12.22,-12.26 12.22,-12.26 C12.52,-10.17 12.78,-8.87 13.1,-7.43 C13.1,-7.43 14.73,0 14.73,0 C14.73,0 19.53,0 19.53,0 C19.53,0 23.6,-16.01 23.6,-16.01 C23.6,-16.01 20.01,-16.01 20.01,-16.01 C20.01,-16.01 18.12,-7.69 18.12,-7.69 C17.8,-6.26 17.6,-4.82 17.31,-2.93 C17.31,-2.93 17.18,-2.93 17.18,-2.93 C16.89,-4.82 16.59,-6.26 16.23,-7.69 C16.23,-7.69 14.21,-16.01 14.21,-16.01 C14.21,-16.01 10.3,-16.01 10.3,-16.01 C10.3,-16.01 8.34,-7.69 8.34,-7.69 C8.02,-6.26 7.76,-4.82 7.46,-2.93 C7.46,-2.93 7.33,-2.93 7.33,-2.93 C7.11,-4.82 6.85,-6.26 6.52,-7.69 C6.52,-7.69 4.63,-16.01 4.63,-16.01 C4.63,-16.01 0.78,-16.01 0.78,-16.01 C0.78,-16.01 5.02,0 5.02,0z"
                        transform="matrix(1,0,0,1,37.676387786865234,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=""
                        transform="matrix(1,0,0,1,61.887672424316406,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M6.26,0 C6.26,0 10.14,0 10.14,0 C10.14,0 10.14,-7.89 10.14,-7.89 C10.14,-7.89 16.56,-21.32 16.56,-21.32 C16.56,-21.32 12.52,-21.32 12.52,-21.32 C12.52,-21.32 10.24,-15.91 10.24,-15.91 C9.62,-14.34 8.96,-12.84 8.28,-11.21 C8.28,-11.21 8.15,-11.21 8.15,-11.21 C7.5,-12.84 6.88,-14.34 6.26,-15.91 C6.26,-15.91 3.98,-21.32 3.98,-21.32 C3.98,-21.32 -0.16,-21.32 -0.16,-21.32 C-0.16,-21.32 6.26,-7.89 6.26,-7.89 C6.26,-7.89 6.26,0 6.26,0z"
                        transform="matrix(1,0,0,1,68.36128234863281,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.96,0.39 C12.94,0.39 16.59,-2.67 16.59,-7.99 C16.59,-13.33 12.94,-16.43 8.96,-16.43 C4.95,-16.43 1.3,-13.33 1.3,-7.99 C1.3,-2.67 4.95,0.39 8.96,0.39z M8.96,-2.74 C6.65,-2.74 5.28,-4.82 5.28,-7.99 C5.28,-11.18 6.65,-13.27 8.96,-13.27 C11.28,-13.27 12.65,-11.18 12.65,-7.99 C12.65,-4.82 11.28,-2.74 8.96,-2.74z"
                        transform="matrix(1,0,0,1,84.64240264892578,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.35,0 C2.35,0 6.23,0 6.23,0 C6.23,0 6.23,-9.71 6.23,-9.71 C7.17,-12.16 8.7,-13.01 9.97,-13.01 C10.63,-13.01 11.02,-12.94 11.51,-12.81 C11.51,-12.81 12.29,-16.1 12.29,-16.1 C11.8,-16.3 11.28,-16.43 10.46,-16.43 C8.77,-16.43 7.07,-15.26 5.9,-13.17 C5.9,-13.17 5.8,-13.17 5.8,-13.17 C5.8,-13.17 5.51,-16.04 5.51,-16.04 C5.51,-16.04 2.35,-16.04 2.35,-16.04 C2.35,-16.04 2.35,0 2.35,0z"
                        transform="matrix(1,0,0,1,102.41244506835938,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.35,0 C2.35,0 6.16,0 6.16,0 C6.16,0 6.16,-4.11 6.16,-4.11 C6.16,-4.11 8.61,-6.88 8.61,-6.88 C8.61,-6.88 12.68,0 12.68,0 C12.68,0 16.85,0 16.85,0 C16.85,0 10.85,-9.45 10.85,-9.45 C10.85,-9.45 16.3,-16.04 16.3,-16.04 C16.3,-16.04 12.06,-16.04 12.06,-16.04 C12.06,-16.04 6.29,-8.8 6.29,-8.8 C6.29,-8.8 6.16,-8.8 6.16,-8.8 C6.16,-8.8 6.16,-23.01 6.16,-23.01 C6.16,-23.01 2.35,-23.01 2.35,-23.01 C2.35,-23.01 2.35,0 2.35,0z"
                        transform="matrix(1,0,0,1,114.58282470703125,0)"
                        opacity="0"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,369.24896240234375,785.8890991210938)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fill-opacity="1"
                          d=" M214.5229949951172,104.9209976196289 C214.5229949951172,104.9209976196289 -214.5229949951172,104.9209976196289 -214.5229949951172,104.9209976196289 C-220.79400634765625,104.9209976196289 -225.8769989013672,99.83799743652344 -225.8769989013672,93.56700134277344 C-225.8769989013672,93.56700134277344 -225.8769989013672,-93.56700134277344 -225.8769989013672,-93.56700134277344 C-225.8769989013672,-99.83799743652344 -220.79400634765625,-104.9209976196289 -214.5229949951172,-104.9209976196289 C-214.5229949951172,-104.9209976196289 214.5229949951172,-104.9209976196289 214.5229949951172,-104.9209976196289 C220.79400634765625,-104.9209976196289 225.8769989013672,-99.83799743652344 225.8769989013672,-93.56700134277344 C225.8769989013672,-93.56700134277344 225.8769989013672,93.56700134277344 225.8769989013672,93.56700134277344 C225.8769989013672,99.83799743652344 220.79400634765625,104.9209976196289 214.5229949951172,104.9209976196289z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(78,78,78)"
                      font-size="28.8410091400146"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="SCHOOL SIZE "
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,181.376953125,741.6248168945312)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M7.96,0.35 C12.26,0.35 14.81,-2.24 14.81,-5.32 C14.81,-8.07 13.24,-9.5 10.98,-10.46 C10.98,-10.46 8.42,-11.5 8.42,-11.5 C6.85,-12.17 5.43,-12.69 5.43,-14.15 C5.43,-15.51 6.56,-16.32 8.34,-16.32 C9.79,-16.32 11.18,-15.74 12.37,-14.73 C12.37,-14.73 14.23,-16.99 14.23,-16.99 C12.75,-18.41 10.63,-19.34 8.34,-19.34 C4.62,-19.34 1.95,-16.99 1.95,-13.94 C1.95,-11.18 3.89,-9.7 5.78,-8.92 C5.78,-8.92 8.37,-7.78 8.37,-7.78 C10.08,-7.06 11.3,-6.56 11.3,-5.05 C11.3,-3.6 10.14,-2.64 8.05,-2.64 C6.22,-2.64 4.33,-3.4 2.96,-4.71 C2.96,-4.71 1.1,-2.44 1.1,-2.44 C2.9,-0.61 5.34,0.35 7.96,0.35z M25.28,0.35 C27.72,0.35 29.69,-0.58 31.29,-2.41 C31.29,-2.41 29.43,-4.47 29.43,-4.47 C28.39,-3.31 27.08,-2.64 25.42,-2.64 C22.26,-2.64 20.25,-5.26 20.25,-9.53 C20.25,-13.77 22.46,-16.32 25.48,-16.32 C26.96,-16.32 28.09,-15.77 29.08,-14.81 C29.08,-14.81 30.91,-16.93 30.91,-16.93 C29.72,-18.24 27.8,-19.34 25.42,-19.34 C20.6,-19.34 16.71,-15.66 16.71,-9.44 C16.71,-3.14 20.51,0.35 25.28,0.35z M33.39,0 C33.39,0 36.84,0 36.84,0 C36.84,0 36.84,-8.37 36.84,-8.37 C36.84,-8.37 44.39,-8.37 44.39,-8.37 C44.39,-8.37 44.39,0 44.39,0 C44.39,0 47.85,0 47.85,0 C47.85,0 47.85,-19 47.85,-19 C47.85,-19 44.39,-19 44.39,-19 C44.39,-19 44.39,-11.39 44.39,-11.39 C44.39,-11.39 36.84,-11.39 36.84,-11.39 C36.84,-11.39 36.84,-19 36.84,-19 C36.84,-19 33.39,-19 33.39,-19 C33.39,-19 33.39,0 33.39,0z M59.94,0.35 C64.91,0.35 68.34,-3.43 68.34,-9.59 C68.34,-15.71 64.91,-19.34 59.94,-19.34 C54.98,-19.34 51.55,-15.71 51.55,-9.59 C51.55,-3.43 54.98,0.35 59.94,0.35z M59.94,-2.64 C56.98,-2.64 55.09,-5.34 55.09,-9.59 C55.09,-13.8 56.98,-16.32 59.94,-16.32 C62.88,-16.32 64.79,-13.8 64.79,-9.59 C64.79,-5.34 62.88,-2.64 59.94,-2.64z M79.41,0.35 C84.38,0.35 87.8,-3.43 87.8,-9.59 C87.8,-15.71 84.38,-19.34 79.41,-19.34 C74.44,-19.34 71.02,-15.71 71.02,-9.59 C71.02,-3.43 74.44,0.35 79.41,0.35z M79.41,-2.64 C76.45,-2.64 74.56,-5.34 74.56,-9.59 C74.56,-13.8 76.45,-16.32 79.41,-16.32 C82.34,-16.32 84.26,-13.8 84.26,-9.59 C84.26,-5.34 82.34,-2.64 79.41,-2.64z M91.47,0 C91.47,0 102.77,0 102.77,0 C102.77,0 102.77,-2.9 102.77,-2.9 C102.77,-2.9 94.93,-2.9 94.93,-2.9 C94.93,-2.9 94.93,-19 94.93,-19 C94.93,-19 91.47,-19 91.47,-19 C91.47,-19 91.47,0 91.47,0z M117.29,0.35 C121.59,0.35 124.15,-2.24 124.15,-5.32 C124.15,-8.07 122.58,-9.5 120.32,-10.46 C120.32,-10.46 117.76,-11.5 117.76,-11.5 C116.19,-12.17 114.77,-12.69 114.77,-14.15 C114.77,-15.51 115.9,-16.32 117.67,-16.32 C119.12,-16.32 120.52,-15.74 121.71,-14.73 C121.71,-14.73 123.57,-16.99 123.57,-16.99 C122.09,-18.41 119.97,-19.34 117.67,-19.34 C113.95,-19.34 111.28,-16.99 111.28,-13.94 C111.28,-11.18 113.23,-9.7 115.12,-8.92 C115.12,-8.92 117.7,-7.78 117.7,-7.78 C119.42,-7.06 120.63,-6.56 120.63,-5.05 C120.63,-3.6 119.47,-2.64 117.38,-2.64 C115.55,-2.64 113.66,-3.4 112.3,-4.71 C112.3,-4.71 110.44,-2.44 110.44,-2.44 C112.24,-0.61 114.68,0.35 117.29,0.35z M127.03,0 C127.03,0 130.49,0 130.49,0 C130.49,0 130.49,-19 130.49,-19 C130.49,-19 127.03,-19 127.03,-19 C127.03,-19 127.03,0 127.03,0z M133.97,0 C133.97,0 147.42,0 147.42,0 C147.42,0 147.42,-2.9 147.42,-2.9 C147.42,-2.9 138.22,-2.9 138.22,-2.9 C138.22,-2.9 147.34,-16.9 147.34,-16.9 C147.34,-16.9 147.34,-19 147.34,-19 C147.34,-19 134.82,-19 134.82,-19 C134.82,-19 134.82,-16.09 134.82,-16.09 C134.82,-16.09 143.07,-16.09 143.07,-16.09 C143.07,-16.09 133.97,-2.06 133.97,-2.06 C133.97,-2.06 133.97,0 133.97,0z M150.39,0 C150.39,0 162.16,0 162.16,0 C162.16,0 162.16,-2.9 162.16,-2.9 C162.16,-2.9 153.85,-2.9 153.85,-2.9 C153.85,-2.9 153.85,-8.42 153.85,-8.42 C153.85,-8.42 160.65,-8.42 160.65,-8.42 C160.65,-8.42 160.65,-11.33 160.65,-11.33 C160.65,-11.33 153.85,-11.33 153.85,-11.33 C153.85,-11.33 153.85,-16.09 153.85,-16.09 C153.85,-16.09 161.87,-16.09 161.87,-16.09 C161.87,-16.09 161.87,-19 161.87,-19 C161.87,-19 150.39,-19 150.39,-19 C150.39,-19 150.39,0 150.39,0z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,19.555864334106445,81.762451171875)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,227.6929931640625,764.802978515625)"
                      >
                        <path
                          fill="rgb(148,193,225)"
                          fill-opacity="1"
                          d=" M48.79899978637695,46.93299865722656 C48.79899978637695,46.93299865722656 -48.79899978637695,46.93299865722656 -48.79899978637695,46.93299865722656 C-57.22800064086914,46.93299865722656 -64.06199645996094,40.0989990234375 -64.06199645996094,31.670000076293945 C-64.06199645996094,31.670000076293945 -64.06199645996094,-31.670000076293945 -64.06199645996094,-31.670000076293945 C-64.06199645996094,-40.0989990234375 -57.22800064086914,-46.93299865722656 -48.79899978637695,-46.93299865722656 C-48.79899978637695,-46.93299865722656 48.79899978637695,-46.93299865722656 48.79899978637695,-46.93299865722656 C57.22800064086914,-46.93299865722656 64.06199645996094,-40.0989990234375 64.06199645996094,-31.670000076293945 C64.06199645996094,-31.670000076293945 64.06199645996094,31.670000076293945 64.06199645996094,31.670000076293945 C64.06199645996094,40.0989990234375 57.22800064086914,46.93299865722656 48.79899978637695,46.93299865722656z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(48,52,128)"
                      font-size="21.1533298492432"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Small"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,211.28866577148438,813.7706909179688)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.84,0.26 C8.99,0.26 10.86,-1.64 10.86,-3.9 C10.86,-5.92 9.71,-6.97 8.05,-7.67 C8.05,-7.67 6.18,-8.44 6.18,-8.44 C5.03,-8.93 3.98,-9.31 3.98,-10.37 C3.98,-11.38 4.81,-11.97 6.11,-11.97 C7.18,-11.97 8.2,-11.55 9.08,-10.8 C9.08,-10.8 10.44,-12.46 10.44,-12.46 C9.35,-13.51 7.8,-14.19 6.11,-14.19 C3.39,-14.19 1.43,-12.46 1.43,-10.23 C1.43,-8.2 2.85,-7.12 4.24,-6.54 C4.24,-6.54 6.14,-5.71 6.14,-5.71 C7.39,-5.18 8.29,-4.81 8.29,-3.71 C8.29,-2.64 7.43,-1.94 5.9,-1.94 C4.56,-1.94 3.17,-2.49 2.17,-3.45 C2.17,-3.45 0.81,-1.79 0.81,-1.79 C2.13,-0.45 3.92,0.26 5.84,0.26z M12.75,0 C12.75,0 15.28,0 15.28,0 C15.28,0 15.28,-7.29 15.28,-7.29 C16.07,-8.16 16.79,-8.56 17.43,-8.56 C18.5,-8.56 19.01,-7.95 19.01,-6.24 C19.01,-6.24 19.01,0 19.01,0 C19.01,0 21.52,0 21.52,0 C21.52,0 21.52,-7.29 21.52,-7.29 C22.31,-8.16 23.03,-8.56 23.67,-8.56 C24.76,-8.56 25.25,-7.95 25.25,-6.24 C25.25,-6.24 25.25,0 25.25,0 C25.25,0 27.79,0 27.79,0 C27.79,0 27.79,-6.56 27.79,-6.56 C27.79,-9.2 26.76,-10.74 24.55,-10.74 C23.2,-10.74 22.18,-9.93 21.18,-8.86 C20.69,-10.03 19.82,-10.74 18.28,-10.74 C16.96,-10.74 15.96,-9.97 15.07,-9.05 C15.07,-9.05 15,-9.05 15,-9.05 C15,-9.05 14.81,-10.48 14.81,-10.48 C14.81,-10.48 12.75,-10.48 12.75,-10.48 C12.75,-10.48 12.75,0 12.75,0z M33.18,0.26 C34.41,0.26 35.43,-0.34 36.37,-1.15 C36.37,-1.15 36.46,-1.15 36.46,-1.15 C36.46,-1.15 36.67,0 36.67,0 C36.67,0 38.71,0 38.71,0 C38.71,0 38.71,-6.2 38.71,-6.2 C38.71,-9.12 37.39,-10.74 34.8,-10.74 C33.13,-10.74 31.64,-10.1 30.49,-9.37 C30.49,-9.37 31.39,-7.71 31.39,-7.71 C32.32,-8.27 33.3,-8.69 34.33,-8.69 C35.73,-8.69 36.16,-7.8 36.2,-6.73 C31.9,-6.26 30.07,-5.11 30.07,-2.81 C30.07,-0.98 31.34,0.26 33.18,0.26z M33.94,-1.75 C33.09,-1.75 32.49,-2.09 32.49,-2.98 C32.49,-4.05 33.35,-4.69 36.2,-5.03 C36.2,-5.03 36.2,-2.81 36.2,-2.81 C35.43,-2.09 34.79,-1.75 33.94,-1.75z M43.96,0.26 C44.56,0.26 44.99,0.17 45.28,0.02 C45.28,0.02 44.99,-1.83 44.99,-1.83 C44.82,-1.79 44.73,-1.79 44.6,-1.79 C44.35,-1.79 44.07,-2 44.07,-2.62 C44.07,-2.62 44.07,-15.04 44.07,-15.04 C44.07,-15.04 41.53,-15.04 41.53,-15.04 C41.53,-15.04 41.53,-2.75 41.53,-2.75 C41.53,-0.89 42.2,0.26 43.96,0.26z M49.72,0.26 C50.31,0.26 50.74,0.17 51.04,0.02 C51.04,0.02 50.74,-1.83 50.74,-1.83 C50.57,-1.79 50.48,-1.79 50.36,-1.79 C50.1,-1.79 49.82,-2 49.82,-2.62 C49.82,-2.62 49.82,-15.04 49.82,-15.04 C49.82,-15.04 47.29,-15.04 47.29,-15.04 C47.29,-15.04 47.29,-2.75 47.29,-2.75 C47.29,-0.89 47.95,0.26 49.72,0.26z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,19.556821823120117,81.762451171875)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,368.09698486328125,764.802978515625)"
                      >
                        <path
                          fill="rgb(139,184,216)"
                          fill-opacity="1"
                          d=" M48.79899978637695,46.93299865722656 C48.79899978637695,46.93299865722656 -48.79899978637695,46.93299865722656 -48.79899978637695,46.93299865722656 C-57.22800064086914,46.93299865722656 -64.06199645996094,40.0989990234375 -64.06199645996094,31.670000076293945 C-64.06199645996094,31.670000076293945 -64.06199645996094,-31.670000076293945 -64.06199645996094,-31.670000076293945 C-64.06199645996094,-40.0989990234375 -57.22800064086914,-46.93299865722656 -48.79899978637695,-46.93299865722656 C-48.79899978637695,-46.93299865722656 48.79899978637695,-46.93299865722656 48.79899978637695,-46.93299865722656 C57.22800064086914,-46.93299865722656 64.06199645996094,-40.0989990234375 64.06199645996094,-31.670000076293945 C64.06199645996094,-31.670000076293945 64.06199645996094,31.670000076293945 64.06199645996094,31.670000076293945 C64.06199645996094,40.0989990234375 57.22800064086914,46.93299865722656 48.79899978637695,46.93299865722656z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(48,52,128)"
                      font-size="21.1533298492432"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Medium"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,334.3146057128906,813.7716064453125)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.75,0 C1.75,0 4.05,0 4.05,0 C4.05,0 4.05,-6.35 4.05,-6.35 C4.05,-7.67 3.83,-9.59 3.66,-10.86 C3.66,-10.86 3.75,-10.86 3.75,-10.86 C3.75,-10.86 4.86,-7.5 4.86,-7.5 C4.86,-7.5 7.07,-1.28 7.07,-1.28 C7.07,-1.28 8.73,-1.28 8.73,-1.28 C8.73,-1.28 10.99,-7.5 10.99,-7.5 C10.99,-7.5 12.1,-10.86 12.1,-10.86 C12.1,-10.86 12.19,-10.86 12.19,-10.86 C12.01,-9.59 11.8,-7.67 11.8,-6.35 C11.8,-6.35 11.8,0 11.8,0 C11.8,0 14.15,0 14.15,0 C14.15,0 14.15,-13.93 14.15,-13.93 C14.15,-13.93 11.16,-13.93 11.16,-13.93 C11.16,-13.93 8.78,-7.12 8.78,-7.12 C8.48,-6.22 8.27,-5.41 8.01,-4.39 C8.01,-4.39 7.92,-4.39 7.92,-4.39 C7.67,-5.41 7.41,-6.22 7.12,-7.12 C7.12,-7.12 4.73,-13.93 4.73,-13.93 C4.73,-13.93 1.75,-13.93 1.75,-13.93 C1.75,-13.93 1.75,0 1.75,0z M21.79,0.26 C23.15,0.26 24.43,-0.13 25.41,-0.85 C25.41,-0.85 24.56,-2.43 24.56,-2.43 C23.83,-1.96 23.02,-1.7 22.13,-1.7 C20.47,-1.7 19.36,-2.73 19.1,-4.47 C19.1,-4.47 25.71,-4.47 25.71,-4.47 C25.79,-4.86 25.84,-5.24 25.84,-5.75 C25.84,-8.69 24.3,-10.74 21.47,-10.74 C19.02,-10.74 16.63,-8.65 16.63,-5.24 C16.63,-1.75 18.89,0.26 21.79,0.26z M19.1,-6.35 C19.32,-7.92 20.34,-8.78 21.53,-8.78 C22.9,-8.78 23.62,-7.88 23.62,-6.35 C23.62,-6.35 19.1,-6.35 19.1,-6.35z M31.75,0.26 C32.85,0.26 33.92,-0.36 34.69,-1.13 C34.69,-1.13 34.77,-1.13 34.77,-1.13 C34.77,-1.13 34.96,0 34.96,0 C34.96,0 37.01,0 37.01,0 C37.01,0 37.01,-15.04 37.01,-15.04 C37.01,-15.04 34.49,-15.04 34.49,-15.04 C34.49,-15.04 34.49,-11.27 34.49,-11.27 C34.49,-11.27 34.6,-9.59 34.6,-9.59 C33.79,-10.29 33.05,-10.74 31.87,-10.74 C29.57,-10.74 27.44,-8.65 27.44,-5.22 C27.44,-1.77 29.13,0.26 31.75,0.26z M32.36,-1.83 C30.87,-1.83 30.02,-3 30.02,-5.26 C30.02,-7.41 31.11,-8.65 32.41,-8.65 C33.11,-8.65 33.79,-8.44 34.49,-7.8 C34.49,-7.8 34.49,-2.98 34.49,-2.98 C33.83,-2.17 33.15,-1.83 32.36,-1.83z M40.01,0 C40.01,0 42.55,0 42.55,0 C42.55,0 42.55,-10.48 42.55,-10.48 C42.55,-10.48 40.01,-10.48 40.01,-10.48 C40.01,-10.48 40.01,0 40.01,0z M41.29,-12.27 C42.18,-12.27 42.8,-12.85 42.8,-13.7 C42.8,-14.55 42.18,-15.13 41.29,-15.13 C40.4,-15.13 39.78,-14.55 39.78,-13.7 C39.78,-12.85 40.4,-12.27 41.29,-12.27z M48.69,0.26 C50.13,0.26 51.14,-0.45 52.05,-1.53 C52.05,-1.53 52.12,-1.53 52.12,-1.53 C52.12,-1.53 52.31,0 52.31,0 C52.31,0 54.37,0 54.37,0 C54.37,0 54.37,-10.48 54.37,-10.48 C54.37,-10.48 51.86,-10.48 51.86,-10.48 C51.86,-10.48 51.86,-3.32 51.86,-3.32 C51.09,-2.32 50.5,-1.9 49.58,-1.9 C48.47,-1.9 47.98,-2.54 47.98,-4.24 C47.98,-4.24 47.98,-10.48 47.98,-10.48 C47.98,-10.48 45.47,-10.48 45.47,-10.48 C45.47,-10.48 45.47,-3.92 45.47,-3.92 C45.47,-1.28 46.45,0.26 48.69,0.26z M57.38,0 C57.38,0 59.91,0 59.91,0 C59.91,0 59.91,-7.29 59.91,-7.29 C60.7,-8.16 61.43,-8.56 62.07,-8.56 C63.13,-8.56 63.64,-7.95 63.64,-6.24 C63.64,-6.24 63.64,0 63.64,0 C63.64,0 66.16,0 66.16,0 C66.16,0 66.16,-7.29 66.16,-7.29 C66.94,-8.16 67.67,-8.56 68.31,-8.56 C69.39,-8.56 69.88,-7.95 69.88,-6.24 C69.88,-6.24 69.88,0 69.88,0 C69.88,0 72.42,0 72.42,0 C72.42,0 72.42,-6.56 72.42,-6.56 C72.42,-9.2 71.4,-10.74 69.18,-10.74 C67.84,-10.74 66.82,-9.93 65.81,-8.86 C65.32,-10.03 64.45,-10.74 62.92,-10.74 C61.6,-10.74 60.6,-9.97 59.7,-9.05 C59.7,-9.05 59.64,-9.05 59.64,-9.05 C59.64,-9.05 59.45,-10.48 59.45,-10.48 C59.45,-10.48 57.38,-10.48 57.38,-10.48 C57.38,-10.48 57.38,0 57.38,0z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,502.6336975097656,808.3252563476562)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(148,193,225)"
                          fill-opacity="1"
                          d=" M48.79899978637695,46.93299865722656 C48.79899978637695,46.93299865722656 -48.79899978637695,46.93299865722656 -48.79899978637695,46.93299865722656 C-57.22800064086914,46.93299865722656 -64.06199645996094,40.0989990234375 -64.06199645996094,31.670000076293945 C-64.06199645996094,31.670000076293945 -64.06199645996094,-31.670000076293945 -64.06199645996094,-31.670000076293945 C-64.06199645996094,-40.0989990234375 -57.22800064086914,-46.93299865722656 -48.79899978637695,-46.93299865722656 C-48.79899978637695,-46.93299865722656 48.79899978637695,-46.93299865722656 48.79899978637695,-46.93299865722656 C57.22800064086914,-46.93299865722656 64.06199645996094,-40.0989990234375 64.06199645996094,-31.670000076293945 C64.06199645996094,-31.670000076293945 64.06199645996094,31.670000076293945 64.06199645996094,31.670000076293945 C64.06199645996094,40.0989990234375 57.22800064086914,46.93299865722656 48.79899978637695,46.93299865722656z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(48,52,128)"
                      font-size="21.1533298492432"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Large"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,478.5996398925781,813.7725219726562)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.77,0 C1.77,0 10.06,0 10.06,0 C10.06,0 10.06,-2.13 10.06,-2.13 C10.06,-2.13 4.3,-2.13 4.3,-2.13 C4.3,-2.13 4.3,-13.93 4.3,-13.93 C4.3,-13.93 1.77,-13.93 1.77,-13.93 C1.77,-13.93 1.77,0 1.77,0z M14.73,0.26 C15.97,0.26 16.99,-0.34 17.93,-1.15 C17.93,-1.15 18.01,-1.15 18.01,-1.15 C18.01,-1.15 18.22,0 18.22,0 C18.22,0 20.27,0 20.27,0 C20.27,0 20.27,-6.2 20.27,-6.2 C20.27,-9.12 18.95,-10.74 16.35,-10.74 C14.69,-10.74 13.2,-10.1 12.05,-9.37 C12.05,-9.37 12.94,-7.71 12.94,-7.71 C13.88,-8.27 14.86,-8.69 15.88,-8.69 C17.29,-8.69 17.71,-7.8 17.76,-6.73 C13.45,-6.26 11.62,-5.11 11.62,-2.81 C11.62,-0.98 12.9,0.26 14.73,0.26z M15.5,-1.75 C14.65,-1.75 14.05,-2.09 14.05,-2.98 C14.05,-4.05 14.9,-4.69 17.76,-5.03 C17.76,-5.03 17.76,-2.81 17.76,-2.81 C16.99,-2.09 16.35,-1.75 15.5,-1.75z M23.09,0 C23.09,0 25.62,0 25.62,0 C25.62,0 25.62,-6.35 25.62,-6.35 C26.24,-7.95 27.24,-8.5 28.07,-8.5 C28.5,-8.5 28.76,-8.46 29.08,-8.37 C29.08,-8.37 29.59,-10.52 29.59,-10.52 C29.27,-10.65 28.93,-10.74 28.39,-10.74 C27.29,-10.74 26.18,-9.97 25.41,-8.61 C25.41,-8.61 25.35,-8.61 25.35,-8.61 C25.35,-8.61 25.16,-10.48 25.16,-10.48 C25.16,-10.48 23.09,-10.48 23.09,-10.48 C23.09,-10.48 23.09,0 23.09,0z M34.71,4.62 C38.14,4.62 40.31,2.98 40.31,0.92 C40.31,-0.89 38.97,-1.68 36.48,-1.68 C36.48,-1.68 34.62,-1.68 34.62,-1.68 C33.36,-1.68 32.94,-2.02 32.94,-2.6 C32.94,-3.07 33.13,-3.32 33.43,-3.58 C33.9,-3.41 34.39,-3.32 34.83,-3.32 C37.05,-3.32 38.84,-4.56 38.84,-6.88 C38.84,-7.58 38.58,-8.22 38.26,-8.61 C38.26,-8.61 40.14,-8.61 40.14,-8.61 C40.14,-8.61 40.14,-10.48 40.14,-10.48 C40.14,-10.48 36.39,-10.48 36.39,-10.48 C35.96,-10.63 35.41,-10.74 34.83,-10.74 C32.64,-10.74 30.68,-9.37 30.68,-6.97 C30.68,-5.73 31.34,-4.73 32.07,-4.2 C32.07,-4.2 32.07,-4.11 32.07,-4.11 C31.45,-3.69 30.89,-2.98 30.89,-2.17 C30.89,-1.32 31.32,-0.77 31.85,-0.43 C31.85,-0.43 31.85,-0.34 31.85,-0.34 C30.89,0.26 30.34,1 30.34,1.9 C30.34,3.73 32.21,4.62 34.71,4.62z M34.83,-4.9 C33.85,-4.9 33.05,-5.65 33.05,-6.97 C33.05,-8.27 33.83,-8.99 34.83,-8.99 C35.84,-8.99 36.6,-8.27 36.6,-6.97 C36.6,-5.65 35.81,-4.9 34.83,-4.9z M35.09,2.98 C33.47,2.98 32.45,2.45 32.45,1.51 C32.45,1.02 32.68,0.58 33.24,0.15 C33.64,0.26 34.09,0.3 34.66,0.3 C34.66,0.3 36.07,0.3 36.07,0.3 C37.24,0.3 37.88,0.53 37.88,1.32 C37.88,2.22 36.75,2.98 35.09,2.98z M46.54,0.26 C47.9,0.26 49.18,-0.13 50.16,-0.85 C50.16,-0.85 49.31,-2.43 49.31,-2.43 C48.58,-1.96 47.77,-1.7 46.88,-1.7 C45.22,-1.7 44.11,-2.73 43.85,-4.47 C43.85,-4.47 50.46,-4.47 50.46,-4.47 C50.54,-4.86 50.58,-5.24 50.58,-5.75 C50.58,-8.69 49.05,-10.74 46.22,-10.74 C43.77,-10.74 41.38,-8.65 41.38,-5.24 C41.38,-1.75 43.64,0.26 46.54,0.26z M43.85,-6.35 C44.07,-7.92 45.09,-8.78 46.28,-8.78 C47.64,-8.78 48.37,-7.88 48.37,-6.35 C48.37,-6.35 43.85,-6.35 43.85,-6.35z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(148,193,225)"
                      font-size="21.1533298492432"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Medium"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,334.3146057128906,813.7716064453125)"
                      opacity="0"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M1.75,0 C1.75,0 4.05,0 4.05,0 C4.05,0 4.05,-6.35 4.05,-6.35 C4.05,-7.67 3.83,-9.59 3.66,-10.86 C3.66,-10.86 3.75,-10.86 3.75,-10.86 C3.75,-10.86 4.86,-7.5 4.86,-7.5 C4.86,-7.5 7.07,-1.28 7.07,-1.28 C7.07,-1.28 8.73,-1.28 8.73,-1.28 C8.73,-1.28 10.99,-7.5 10.99,-7.5 C10.99,-7.5 12.1,-10.86 12.1,-10.86 C12.1,-10.86 12.19,-10.86 12.19,-10.86 C12.01,-9.59 11.8,-7.67 11.8,-6.35 C11.8,-6.35 11.8,0 11.8,0 C11.8,0 14.15,0 14.15,0 C14.15,0 14.15,-13.93 14.15,-13.93 C14.15,-13.93 11.16,-13.93 11.16,-13.93 C11.16,-13.93 8.78,-7.12 8.78,-7.12 C8.48,-6.22 8.27,-5.41 8.01,-4.39 C8.01,-4.39 7.92,-4.39 7.92,-4.39 C7.67,-5.41 7.41,-6.22 7.12,-7.12 C7.12,-7.12 4.73,-13.93 4.73,-13.93 C4.73,-13.93 1.75,-13.93 1.75,-13.93 C1.75,-13.93 1.75,0 1.75,0z M21.79,0.26 C23.15,0.26 24.43,-0.13 25.41,-0.85 C25.41,-0.85 24.56,-2.43 24.56,-2.43 C23.83,-1.96 23.02,-1.7 22.13,-1.7 C20.47,-1.7 19.36,-2.73 19.1,-4.47 C19.1,-4.47 25.71,-4.47 25.71,-4.47 C25.79,-4.86 25.84,-5.24 25.84,-5.75 C25.84,-8.69 24.3,-10.74 21.47,-10.74 C19.02,-10.74 16.63,-8.65 16.63,-5.24 C16.63,-1.75 18.89,0.26 21.79,0.26z M19.1,-6.35 C19.32,-7.92 20.34,-8.78 21.53,-8.78 C22.9,-8.78 23.62,-7.88 23.62,-6.35 C23.62,-6.35 19.1,-6.35 19.1,-6.35z M31.75,0.26 C32.85,0.26 33.92,-0.36 34.69,-1.13 C34.69,-1.13 34.77,-1.13 34.77,-1.13 C34.77,-1.13 34.96,0 34.96,0 C34.96,0 37.01,0 37.01,0 C37.01,0 37.01,-15.04 37.01,-15.04 C37.01,-15.04 34.49,-15.04 34.49,-15.04 C34.49,-15.04 34.49,-11.27 34.49,-11.27 C34.49,-11.27 34.6,-9.59 34.6,-9.59 C33.79,-10.29 33.05,-10.74 31.87,-10.74 C29.57,-10.74 27.44,-8.65 27.44,-5.22 C27.44,-1.77 29.13,0.26 31.75,0.26z M32.36,-1.83 C30.87,-1.83 30.02,-3 30.02,-5.26 C30.02,-7.41 31.11,-8.65 32.41,-8.65 C33.11,-8.65 33.79,-8.44 34.49,-7.8 C34.49,-7.8 34.49,-2.98 34.49,-2.98 C33.83,-2.17 33.15,-1.83 32.36,-1.83z M40.01,0 C40.01,0 42.55,0 42.55,0 C42.55,0 42.55,-10.48 42.55,-10.48 C42.55,-10.48 40.01,-10.48 40.01,-10.48 C40.01,-10.48 40.01,0 40.01,0z M41.29,-12.27 C42.18,-12.27 42.8,-12.85 42.8,-13.7 C42.8,-14.55 42.18,-15.13 41.29,-15.13 C40.4,-15.13 39.78,-14.55 39.78,-13.7 C39.78,-12.85 40.4,-12.27 41.29,-12.27z M48.69,0.26 C50.13,0.26 51.14,-0.45 52.05,-1.53 C52.05,-1.53 52.12,-1.53 52.12,-1.53 C52.12,-1.53 52.31,0 52.31,0 C52.31,0 54.37,0 54.37,0 C54.37,0 54.37,-10.48 54.37,-10.48 C54.37,-10.48 51.86,-10.48 51.86,-10.48 C51.86,-10.48 51.86,-3.32 51.86,-3.32 C51.09,-2.32 50.5,-1.9 49.58,-1.9 C48.47,-1.9 47.98,-2.54 47.98,-4.24 C47.98,-4.24 47.98,-10.48 47.98,-10.48 C47.98,-10.48 45.47,-10.48 45.47,-10.48 C45.47,-10.48 45.47,-3.92 45.47,-3.92 C45.47,-1.28 46.45,0.26 48.69,0.26z M57.38,0 C57.38,0 59.91,0 59.91,0 C59.91,0 59.91,-7.29 59.91,-7.29 C60.7,-8.16 61.43,-8.56 62.07,-8.56 C63.13,-8.56 63.64,-7.95 63.64,-6.24 C63.64,-6.24 63.64,0 63.64,0 C63.64,0 66.16,0 66.16,0 C66.16,0 66.16,-7.29 66.16,-7.29 C66.94,-8.16 67.67,-8.56 68.31,-8.56 C69.39,-8.56 69.88,-7.95 69.88,-6.24 C69.88,-6.24 69.88,0 69.88,0 C69.88,0 72.42,0 72.42,0 C72.42,0 72.42,-6.56 72.42,-6.56 C72.42,-9.2 71.4,-10.74 69.18,-10.74 C67.84,-10.74 66.82,-9.93 65.81,-8.86 C65.32,-10.03 64.45,-10.74 62.92,-10.74 C61.6,-10.74 60.6,-9.97 59.7,-9.05 C59.7,-9.05 59.64,-9.05 59.64,-9.05 C59.64,-9.05 59.45,-10.48 59.45,-10.48 C59.45,-10.48 57.38,-10.48 57.38,-10.48 C57.38,-10.48 57.38,0 57.38,0z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_228)"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,19.800004959106445,81.20001220703125)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        transform="matrix(1,0,0,1,2324,0)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1955.490966796875,742.0139770507812)"
                        >
                          <path
                            fill="rgb(226,242,237)"
                            fill-opacity="1"
                            d=" M214.76300048828125,105.03900146484375 C214.76300048828125,105.03900146484375 -214.76300048828125,105.03900146484375 -214.76300048828125,105.03900146484375 C-221.04100036621094,105.03900146484375 -226.1300048828125,99.94999694824219 -226.1300048828125,93.6719970703125 C-226.1300048828125,93.6719970703125 -226.1300048828125,-93.6719970703125 -226.1300048828125,-93.6719970703125 C-226.1300048828125,-99.94999694824219 -221.04100036621094,-105.03900146484375 -214.76300048828125,-105.03900146484375 C-214.76300048828125,-105.03900146484375 214.76300048828125,-105.03900146484375 214.76300048828125,-105.03900146484375 C221.04100036621094,-105.03900146484375 226.1300048828125,-99.94999694824219 226.1300048828125,-93.6719970703125 C226.1300048828125,-93.6719970703125 226.1300048828125,93.6719970703125 226.1300048828125,93.6719970703125 C226.1300048828125,99.94999694824219 221.04100036621094,105.03900146484375 214.76300048828125,105.03900146484375z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-2096.052978515625,765.656982421875)"
                        >
                          <path
                            fill="rgb(138,202,181)"
                            fill-opacity="1"
                            d=" M48.854000091552734,46.98500061035156 C48.854000091552734,46.98500061035156 -48.854000091552734,46.98500061035156 -48.854000091552734,46.98500061035156 C-57.292999267578125,46.98500061035156 -64.13300323486328,40.14500045776367 -64.13300323486328,31.70599937438965 C-64.13300323486328,31.70599937438965 -64.13300323486328,-31.70599937438965 -64.13300323486328,-31.70599937438965 C-64.13300323486328,-40.14500045776367 -57.292999267578125,-46.98500061035156 -48.854000091552734,-46.98500061035156 C-48.854000091552734,-46.98500061035156 48.854000091552734,-46.98500061035156 48.854000091552734,-46.98500061035156 C57.292999267578125,-46.98500061035156 64.13300323486328,-40.14500045776367 64.13300323486328,-31.70599937438965 C64.13300323486328,-31.70599937438965 64.13300323486328,31.70599937438965 64.13300323486328,31.70599937438965 C64.13300323486328,40.14500045776367 57.292999267578125,46.98500061035156 48.854000091552734,46.98500061035156z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1955.490966796875,765.656982421875)"
                        >
                          <path
                            fill="rgb(138,202,181)"
                            fill-opacity="1"
                            d=" M48.854000091552734,46.98500061035156 C48.854000091552734,46.98500061035156 -48.854000091552734,46.98500061035156 -48.854000091552734,46.98500061035156 C-57.292999267578125,46.98500061035156 -64.13300323486328,40.14500045776367 -64.13300323486328,31.70599937438965 C-64.13300323486328,31.70599937438965 -64.13300323486328,-31.70599937438965 -64.13300323486328,-31.70599937438965 C-64.13300323486328,-40.14500045776367 -57.292999267578125,-46.98500061035156 -48.854000091552734,-46.98500061035156 C-48.854000091552734,-46.98500061035156 48.854000091552734,-46.98500061035156 48.854000091552734,-46.98500061035156 C57.292999267578125,-46.98500061035156 64.13300323486328,-40.14500045776367 64.13300323486328,-31.70599937438965 C64.13300323486328,-31.70599937438965 64.13300323486328,31.70599937438965 64.13300323486328,31.70599937438965 C64.13300323486328,40.14500045776367 57.292999267578125,46.98500061035156 48.854000091552734,46.98500061035156z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1814.9300537109375,765.656982421875)"
                        >
                          <path
                            fill="rgb(138,202,181)"
                            fill-opacity="1"
                            d=" M48.854000091552734,46.98500061035156 C48.854000091552734,46.98500061035156 -48.854000091552734,46.98500061035156 -48.854000091552734,46.98500061035156 C-57.292999267578125,46.98500061035156 -64.13300323486328,40.14500045776367 -64.13300323486328,31.70599937438965 C-64.13300323486328,31.70599937438965 -64.13300323486328,-31.70599937438965 -64.13300323486328,-31.70599937438965 C-64.13300323486328,-40.14500045776367 -57.292999267578125,-46.98500061035156 -48.854000091552734,-46.98500061035156 C-48.854000091552734,-46.98500061035156 48.854000091552734,-46.98500061035156 48.854000091552734,-46.98500061035156 C57.292999267578125,-46.98500061035156 64.13300323486328,-40.14500045776367 64.13300323486328,-31.70599937438965 C64.13300323486328,-31.70599937438965 64.13300323486328,31.70599937438965 64.13300323486328,31.70599937438965 C64.13300323486328,40.14500045776367 57.292999267578125,46.98500061035156 48.854000091552734,46.98500061035156z"
                          ></path>
                        </g>
                      </g>
                      <g
                        fill="rgb(82,142,122)"
                        font-size="21.1769790649414"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="Large"
                        transform="matrix(1,0,0,1,483.7430419921875,771.39599609375)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M1.77,0 C1.77,0 10.07,0 10.07,0 C10.07,0 10.07,-2.13 10.07,-2.13 C10.07,-2.13 4.31,-2.13 4.31,-2.13 C4.31,-2.13 4.31,-13.95 4.31,-13.95 C4.31,-13.95 1.77,-13.95 1.77,-13.95 C1.77,-13.95 1.77,0 1.77,0z M14.75,0.26 C15.98,0.26 17.01,-0.34 17.95,-1.15 C17.95,-1.15 18.03,-1.15 18.03,-1.15 C18.03,-1.15 18.24,0 18.24,0 C18.24,0 20.29,0 20.29,0 C20.29,0 20.29,-6.21 20.29,-6.21 C20.29,-9.13 18.97,-10.75 16.37,-10.75 C14.7,-10.75 13.21,-10.11 12.06,-9.38 C12.06,-9.38 12.96,-7.72 12.96,-7.72 C13.89,-8.27 14.87,-8.7 15.9,-8.7 C17.31,-8.7 17.73,-7.81 17.78,-6.74 C13.47,-6.27 11.63,-5.12 11.63,-2.82 C11.63,-0.98 12.91,0.26 14.75,0.26z M15.51,-1.75 C14.66,-1.75 14.06,-2.09 14.06,-2.99 C14.06,-4.05 14.92,-4.69 17.78,-5.03 C17.78,-5.03 17.78,-2.82 17.78,-2.82 C17.01,-2.09 16.37,-1.75 15.51,-1.75z M23.11,0 C23.11,0 25.65,0 25.65,0 C25.65,0 25.65,-6.36 25.65,-6.36 C26.27,-7.95 27.27,-8.51 28.11,-8.51 C28.53,-8.51 28.79,-8.47 29.11,-8.38 C29.11,-8.38 29.62,-10.54 29.62,-10.54 C29.3,-10.66 28.96,-10.75 28.43,-10.75 C27.32,-10.75 26.21,-9.98 25.44,-8.62 C25.44,-8.62 25.38,-8.62 25.38,-8.62 C25.38,-8.62 25.18,-10.49 25.18,-10.49 C25.18,-10.49 23.11,-10.49 23.11,-10.49 C23.11,-10.49 23.11,0 23.11,0z M34.75,4.63 C38.18,4.63 40.35,2.99 40.35,0.92 C40.35,-0.9 39.01,-1.68 36.52,-1.68 C36.52,-1.68 34.66,-1.68 34.66,-1.68 C33.4,-1.68 32.98,-2.03 32.98,-2.6 C32.98,-3.07 33.17,-3.33 33.47,-3.58 C33.94,-3.41 34.43,-3.33 34.87,-3.33 C37.09,-3.33 38.88,-4.56 38.88,-6.89 C38.88,-7.59 38.63,-8.23 38.31,-8.62 C38.31,-8.62 40.18,-8.62 40.18,-8.62 C40.18,-8.62 40.18,-10.49 40.18,-10.49 C40.18,-10.49 36.43,-10.49 36.43,-10.49 C36,-10.64 35.45,-10.75 34.87,-10.75 C32.68,-10.75 30.71,-9.38 30.71,-6.97 C30.71,-5.74 31.38,-4.73 32.1,-4.2 C32.1,-4.2 32.1,-4.12 32.1,-4.12 C31.48,-3.69 30.93,-2.99 30.93,-2.18 C30.93,-1.32 31.35,-0.77 31.89,-0.43 C31.89,-0.43 31.89,-0.34 31.89,-0.34 C30.93,0.26 30.37,1 30.37,1.9 C30.37,3.73 32.25,4.63 34.75,4.63z M34.87,-4.91 C33.89,-4.91 33.08,-5.65 33.08,-6.97 C33.08,-8.27 33.87,-9 34.87,-9 C35.88,-9 36.64,-8.27 36.64,-6.97 C36.64,-5.65 35.85,-4.91 34.87,-4.91z M35.13,2.99 C33.51,2.99 32.49,2.45 32.49,1.51 C32.49,1.02 32.72,0.58 33.27,0.15 C33.68,0.26 34.13,0.3 34.7,0.3 C34.7,0.3 36.11,0.3 36.11,0.3 C37.28,0.3 37.92,0.53 37.92,1.32 C37.92,2.22 36.79,2.99 35.13,2.99z M46.59,0.26 C47.95,0.26 49.23,-0.13 50.21,-0.85 C50.21,-0.85 49.36,-2.43 49.36,-2.43 C48.64,-1.96 47.83,-1.71 46.93,-1.71 C45.27,-1.71 44.16,-2.73 43.9,-4.48 C43.9,-4.48 50.51,-4.48 50.51,-4.48 C50.6,-4.86 50.64,-5.25 50.64,-5.76 C50.64,-8.7 49.11,-10.75 46.27,-10.75 C43.82,-10.75 41.43,-8.66 41.43,-5.25 C41.43,-1.75 43.69,0.26 46.59,0.26z M43.9,-6.36 C44.12,-7.93 45.14,-8.79 46.33,-8.79 C47.7,-8.79 48.42,-7.89 48.42,-6.36 C48.42,-6.36 43.9,-6.36 43.9,-6.36z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                      <g
                        fill="rgb(82,142,122)"
                        font-size="21.1769790649414"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="Medium"
                        transform="matrix(1,0,0,1,331.6939697265625,771.39599609375)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M1.75,0 C1.75,0 4.05,0 4.05,0 C4.05,0 4.05,-6.36 4.05,-6.36 C4.05,-7.68 3.84,-9.6 3.67,-10.88 C3.67,-10.88 3.75,-10.88 3.75,-10.88 C3.75,-10.88 4.86,-7.51 4.86,-7.51 C4.86,-7.51 7.08,-1.28 7.08,-1.28 C7.08,-1.28 8.74,-1.28 8.74,-1.28 C8.74,-1.28 11,-7.51 11,-7.51 C11,-7.51 12.11,-10.88 12.11,-10.88 C12.11,-10.88 12.2,-10.88 12.2,-10.88 C12.03,-9.6 11.82,-7.68 11.82,-6.36 C11.82,-6.36 11.82,0 11.82,0 C11.82,0 14.16,0 14.16,0 C14.16,0 14.16,-13.95 14.16,-13.95 C14.16,-13.95 11.18,-13.95 11.18,-13.95 C11.18,-13.95 8.79,-7.12 8.79,-7.12 C8.49,-6.23 8.27,-5.42 8.02,-4.39 C8.02,-4.39 7.93,-4.39 7.93,-4.39 C7.68,-5.42 7.42,-6.23 7.12,-7.12 C7.12,-7.12 4.73,-13.95 4.73,-13.95 C4.73,-13.95 1.75,-13.95 1.75,-13.95 C1.75,-13.95 1.75,0 1.75,0z M21.81,0.26 C23.18,0.26 24.46,-0.13 25.44,-0.85 C25.44,-0.85 24.58,-2.43 24.58,-2.43 C23.86,-1.96 23.05,-1.71 22.15,-1.71 C20.49,-1.71 19.38,-2.73 19.12,-4.48 C19.12,-4.48 25.74,-4.48 25.74,-4.48 C25.82,-4.86 25.86,-5.25 25.86,-5.76 C25.86,-8.7 24.33,-10.75 21.49,-10.75 C19.04,-10.75 16.65,-8.66 16.65,-5.25 C16.65,-1.75 18.91,0.26 21.81,0.26z M19.12,-6.36 C19.34,-7.93 20.36,-8.79 21.56,-8.79 C22.92,-8.79 23.65,-7.89 23.65,-6.36 C23.65,-6.36 19.12,-6.36 19.12,-6.36z M31.78,0.26 C32.89,0.26 33.96,-0.36 34.72,-1.13 C34.72,-1.13 34.81,-1.13 34.81,-1.13 C34.81,-1.13 35,0 35,0 C35,0 37.05,0 37.05,0 C37.05,0 37.05,-15.06 37.05,-15.06 C37.05,-15.06 34.53,-15.06 34.53,-15.06 C34.53,-15.06 34.53,-11.28 34.53,-11.28 C34.53,-11.28 34.64,-9.6 34.64,-9.6 C33.83,-10.3 33.08,-10.75 31.91,-10.75 C29.61,-10.75 27.47,-8.66 27.47,-5.22 C27.47,-1.77 29.16,0.26 31.78,0.26z M32.4,-1.83 C30.91,-1.83 30.05,-3.01 30.05,-5.27 C30.05,-7.42 31.14,-8.66 32.44,-8.66 C33.15,-8.66 33.83,-8.45 34.53,-7.81 C34.53,-7.81 34.53,-2.99 34.53,-2.99 C33.87,-2.18 33.19,-1.83 32.4,-1.83z M40.06,0 C40.06,0 42.59,0 42.59,0 C42.59,0 42.59,-10.49 42.59,-10.49 C42.59,-10.49 40.06,-10.49 40.06,-10.49 C40.06,-10.49 40.06,0 40.06,0z M41.34,-12.28 C42.23,-12.28 42.85,-12.86 42.85,-13.71 C42.85,-14.57 42.23,-15.14 41.34,-15.14 C40.44,-15.14 39.82,-14.57 39.82,-13.71 C39.82,-12.86 40.44,-12.28 41.34,-12.28z M48.74,0.26 C50.19,0.26 51.19,-0.45 52.11,-1.54 C52.11,-1.54 52.17,-1.54 52.17,-1.54 C52.17,-1.54 52.37,0 52.37,0 C52.37,0 54.43,0 54.43,0 C54.43,0 54.43,-10.49 54.43,-10.49 C54.43,-10.49 51.92,-10.49 51.92,-10.49 C51.92,-10.49 51.92,-3.33 51.92,-3.33 C51.15,-2.32 50.55,-1.9 49.64,-1.9 C48.53,-1.9 48.04,-2.54 48.04,-4.24 C48.04,-4.24 48.04,-10.49 48.04,-10.49 C48.04,-10.49 45.52,-10.49 45.52,-10.49 C45.52,-10.49 45.52,-3.92 45.52,-3.92 C45.52,-1.28 46.5,0.26 48.74,0.26z M57.44,0 C57.44,0 59.98,0 59.98,0 C59.98,0 59.98,-7.29 59.98,-7.29 C60.77,-8.17 61.49,-8.57 62.13,-8.57 C63.2,-8.57 63.71,-7.95 63.71,-6.25 C63.71,-6.25 63.71,0 63.71,0 C63.71,0 66.23,0 66.23,0 C66.23,0 66.23,-7.29 66.23,-7.29 C67.02,-8.17 67.74,-8.57 68.38,-8.57 C69.47,-8.57 69.96,-7.95 69.96,-6.25 C69.96,-6.25 69.96,0 69.96,0 C69.96,0 72.5,0 72.5,0 C72.5,0 72.5,-6.57 72.5,-6.57 C72.5,-9.21 71.48,-10.75 69.26,-10.75 C67.91,-10.75 66.89,-9.94 65.89,-8.87 C65.4,-10.05 64.52,-10.75 62.99,-10.75 C61.67,-10.75 60.66,-9.98 59.77,-9.06 C59.77,-9.06 59.7,-9.06 59.7,-9.06 C59.7,-9.06 59.51,-10.49 59.51,-10.49 C59.51,-10.49 57.44,-10.49 57.44,-10.49 C57.44,-10.49 57.44,0 57.44,0z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                      <g
                        fill="rgb(82,142,122)"
                        font-size="21.1769790649414"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="Small"
                        transform="matrix(1,0,0,1,202.0478515625,771.39599609375)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M5.84,0.26 C9,0.26 10.88,-1.64 10.88,-3.9 C10.88,-5.93 9.73,-6.97 8.06,-7.68 C8.06,-7.68 6.18,-8.45 6.18,-8.45 C5.03,-8.94 3.99,-9.32 3.99,-10.39 C3.99,-11.39 4.82,-11.99 6.12,-11.99 C7.19,-11.99 8.21,-11.56 9.09,-10.81 C9.09,-10.81 10.45,-12.48 10.45,-12.48 C9.36,-13.52 7.81,-14.2 6.12,-14.2 C3.39,-14.2 1.43,-12.48 1.43,-10.24 C1.43,-8.21 2.86,-7.12 4.24,-6.55 C4.24,-6.55 6.14,-5.72 6.14,-5.72 C7.4,-5.18 8.3,-4.82 8.3,-3.71 C8.3,-2.64 7.44,-1.94 5.91,-1.94 C4.56,-1.94 3.18,-2.5 2.18,-3.46 C2.18,-3.46 0.81,-1.79 0.81,-1.79 C2.13,-0.45 3.92,0.26 5.84,0.26z M12.76,0 C12.76,0 15.3,0 15.3,0 C15.3,0 15.3,-7.29 15.3,-7.29 C16.09,-8.17 16.81,-8.57 17.45,-8.57 C18.52,-8.57 19.03,-7.95 19.03,-6.25 C19.03,-6.25 19.03,0 19.03,0 C19.03,0 21.55,0 21.55,0 C21.55,0 21.55,-7.29 21.55,-7.29 C22.34,-8.17 23.06,-8.57 23.7,-8.57 C24.79,-8.57 25.28,-7.95 25.28,-6.25 C25.28,-6.25 25.28,0 25.28,0 C25.28,0 27.82,0 27.82,0 C27.82,0 27.82,-6.57 27.82,-6.57 C27.82,-9.21 26.79,-10.75 24.57,-10.75 C23.23,-10.75 22.21,-9.94 21.2,-8.87 C20.71,-10.05 19.84,-10.75 18.3,-10.75 C16.98,-10.75 15.98,-9.98 15.08,-9.06 C15.08,-9.06 15.02,-9.06 15.02,-9.06 C15.02,-9.06 14.83,-10.49 14.83,-10.49 C14.83,-10.49 12.76,-10.49 12.76,-10.49 C12.76,-10.49 12.76,0 12.76,0z M33.21,0.26 C34.45,0.26 35.47,-0.34 36.41,-1.15 C36.41,-1.15 36.5,-1.15 36.5,-1.15 C36.5,-1.15 36.71,0 36.71,0 C36.71,0 38.76,0 38.76,0 C38.76,0 38.76,-6.21 38.76,-6.21 C38.76,-9.13 37.44,-10.75 34.83,-10.75 C33.17,-10.75 31.68,-10.11 30.53,-9.38 C30.53,-9.38 31.42,-7.72 31.42,-7.72 C32.36,-8.27 33.34,-8.7 34.36,-8.7 C35.77,-8.7 36.2,-7.81 36.24,-6.74 C31.93,-6.27 30.1,-5.12 30.1,-2.82 C30.1,-0.98 31.38,0.26 33.21,0.26z M33.98,-1.75 C33.13,-1.75 32.53,-2.09 32.53,-2.99 C32.53,-4.05 33.38,-4.69 36.24,-5.03 C36.24,-5.03 36.24,-2.82 36.24,-2.82 C35.47,-2.09 34.83,-1.75 33.98,-1.75z M44.01,0.26 C44.61,0.26 45.04,0.17 45.33,0.02 C45.33,0.02 45.04,-1.83 45.04,-1.83 C44.87,-1.79 44.78,-1.79 44.65,-1.79 C44.4,-1.79 44.12,-2 44.12,-2.62 C44.12,-2.62 44.12,-15.06 44.12,-15.06 C44.12,-15.06 41.58,-15.06 41.58,-15.06 C41.58,-15.06 41.58,-2.75 41.58,-2.75 C41.58,-0.9 42.24,0.26 44.01,0.26z M49.77,0.26 C50.37,0.26 50.8,0.17 51.09,0.02 C51.09,0.02 50.8,-1.83 50.8,-1.83 C50.63,-1.79 50.54,-1.79 50.41,-1.79 C50.16,-1.79 49.88,-2 49.88,-2.62 C49.88,-2.62 49.88,-15.06 49.88,-15.06 C49.88,-15.06 47.34,-15.06 47.34,-15.06 C47.34,-15.06 47.34,-2.75 47.34,-2.75 C47.34,-0.9 48,0.26 49.77,0.26z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                      <g
                        fill="rgb(55,95,82)"
                        font-size="28.8732490539551"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="SCHOOL SIZE "
                        transform="matrix(1,0,0,1,170.528076171875,695.3660278320312)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M7.97,0.35 C12.27,0.35 14.83,-2.24 14.83,-5.32 C14.83,-8.08 13.26,-9.51 10.99,-10.47 C10.99,-10.47 8.43,-11.51 8.43,-11.51 C6.86,-12.18 5.44,-12.71 5.44,-14.16 C5.44,-15.53 6.57,-16.34 8.35,-16.34 C9.8,-16.34 11.2,-15.76 12.39,-14.74 C12.39,-14.74 14.25,-17.01 14.25,-17.01 C12.77,-18.44 10.64,-19.37 8.35,-19.37 C4.62,-19.37 1.95,-17.01 1.95,-13.96 C1.95,-11.2 3.9,-9.71 5.79,-8.93 C5.79,-8.93 8.37,-7.79 8.37,-7.79 C10.09,-7.07 11.31,-6.57 11.31,-5.06 C11.31,-3.61 10.15,-2.65 8.05,-2.65 C6.22,-2.65 4.33,-3.4 2.97,-4.71 C2.97,-4.71 1.1,-2.44 1.1,-2.44 C2.91,-0.61 5.35,0.35 7.97,0.35z M25.31,0.35 C27.75,0.35 29.73,-0.58 31.32,-2.41 C31.32,-2.41 29.46,-4.48 29.46,-4.48 C28.42,-3.31 27.11,-2.65 25.45,-2.65 C22.28,-2.65 20.28,-5.26 20.28,-9.54 C20.28,-13.78 22.49,-16.34 25.51,-16.34 C26.99,-16.34 28.13,-15.79 29.11,-14.83 C29.11,-14.83 30.95,-16.95 30.95,-16.95 C29.75,-18.26 27.84,-19.37 25.45,-19.37 C20.62,-19.37 16.73,-15.67 16.73,-9.45 C16.73,-3.14 20.54,0.35 25.31,0.35z M33.42,0 C33.42,0 36.88,0 36.88,0 C36.88,0 36.88,-8.37 36.88,-8.37 C36.88,-8.37 44.44,-8.37 44.44,-8.37 C44.44,-8.37 44.44,0 44.44,0 C44.44,0 47.9,0 47.9,0 C47.9,0 47.9,-19.02 47.9,-19.02 C47.9,-19.02 44.44,-19.02 44.44,-19.02 C44.44,-19.02 44.44,-11.4 44.44,-11.4 C44.44,-11.4 36.88,-11.4 36.88,-11.4 C36.88,-11.4 36.88,-19.02 36.88,-19.02 C36.88,-19.02 33.42,-19.02 33.42,-19.02 C33.42,-19.02 33.42,0 33.42,0z M60.01,0.35 C64.98,0.35 68.41,-3.43 68.41,-9.6 C68.41,-15.73 64.98,-19.37 60.01,-19.37 C55.04,-19.37 51.61,-15.73 51.61,-9.6 C51.61,-3.43 55.04,0.35 60.01,0.35z M60.01,-2.65 C57.04,-2.65 55.15,-5.35 55.15,-9.6 C55.15,-13.81 57.04,-16.34 60.01,-16.34 C62.95,-16.34 64.87,-13.81 64.87,-9.6 C64.87,-5.35 62.95,-2.65 60.01,-2.65z M79.5,0.35 C84.47,0.35 87.9,-3.43 87.9,-9.6 C87.9,-15.73 84.47,-19.37 79.5,-19.37 C74.53,-19.37 71.1,-15.73 71.1,-9.6 C71.1,-3.43 74.53,0.35 79.5,0.35z M79.5,-2.65 C76.53,-2.65 74.64,-5.35 74.64,-9.6 C74.64,-13.81 76.53,-16.34 79.5,-16.34 C82.44,-16.34 84.36,-13.81 84.36,-9.6 C84.36,-5.35 82.44,-2.65 79.5,-2.65z M91.57,0 C91.57,0 102.89,0 102.89,0 C102.89,0 102.89,-2.91 102.89,-2.91 C102.89,-2.91 95.03,-2.91 95.03,-2.91 C95.03,-2.91 95.03,-19.02 95.03,-19.02 C95.03,-19.02 91.57,-19.02 91.57,-19.02 C91.57,-19.02 91.57,0 91.57,0z M117.43,0.35 C121.73,0.35 124.29,-2.24 124.29,-5.32 C124.29,-8.08 122.72,-9.51 120.45,-10.47 C120.45,-10.47 117.89,-11.51 117.89,-11.51 C116.32,-12.18 114.9,-12.71 114.9,-14.16 C114.9,-15.53 116.03,-16.34 117.8,-16.34 C119.26,-16.34 120.65,-15.76 121.85,-14.74 C121.85,-14.74 123.71,-17.01 123.71,-17.01 C122.22,-18.44 120.1,-19.37 117.8,-19.37 C114.08,-19.37 111.41,-17.01 111.41,-13.96 C111.41,-11.2 113.35,-9.71 115.24,-8.93 C115.24,-8.93 117.83,-7.79 117.83,-7.79 C119.55,-7.07 120.77,-6.57 120.77,-5.06 C120.77,-3.61 119.61,-2.65 117.51,-2.65 C115.68,-2.65 113.79,-3.4 112.42,-4.71 C112.42,-4.71 110.56,-2.44 110.56,-2.44 C112.37,-0.61 114.81,0.35 117.43,0.35z M127.17,0 C127.17,0 130.63,0 130.63,0 C130.63,0 130.63,-19.02 130.63,-19.02 C130.63,-19.02 127.17,-19.02 127.17,-19.02 C127.17,-19.02 127.17,0 127.17,0z M134.12,0 C134.12,0 147.59,0 147.59,0 C147.59,0 147.59,-2.91 147.59,-2.91 C147.59,-2.91 138.37,-2.91 138.37,-2.91 C138.37,-2.91 147.5,-16.92 147.5,-16.92 C147.5,-16.92 147.5,-19.02 147.5,-19.02 C147.5,-19.02 134.97,-19.02 134.97,-19.02 C134.97,-19.02 134.97,-16.11 134.97,-16.11 C134.97,-16.11 143.23,-16.11 143.23,-16.11 C143.23,-16.11 134.12,-2.06 134.12,-2.06 C134.12,-2.06 134.12,0 134.12,0z M150.56,0 C150.56,0 162.34,0 162.34,0 C162.34,0 162.34,-2.91 162.34,-2.91 C162.34,-2.91 154.02,-2.91 154.02,-2.91 C154.02,-2.91 154.02,-8.43 154.02,-8.43 C154.02,-8.43 160.83,-8.43 160.83,-8.43 C160.83,-8.43 160.83,-11.34 160.83,-11.34 C160.83,-11.34 154.02,-11.34 154.02,-11.34 C154.02,-11.34 154.02,-16.11 154.02,-16.11 C154.02,-16.11 162.05,-16.11 162.05,-16.11 C162.05,-16.11 162.05,-19.02 162.05,-19.02 C162.05,-19.02 150.56,-19.02 150.56,-19.02 C150.56,-19.02 150.56,0 150.56,0z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_218)"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,33.80000686645508,33.20000457763672)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        transform="matrix(1,0,0,1,2324,0)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,-1697.9610595703125,511.8089904785156)"
                          >
                            <path
                              fill="rgb(226,242,237)"
                              fill-opacity="1"
                              d=" M302.26300048828125,91.35399627685547 C302.26300048828125,91.35399627685547 -302.26300048828125,91.35399627685547 -302.26300048828125,91.35399627685547 C-309.1700134277344,91.35399627685547 -314.7699890136719,85.75499725341797 -314.7699890136719,78.8479995727539 C-314.7699890136719,78.8479995727539 -314.7699890136719,-78.8479995727539 -314.7699890136719,-78.8479995727539 C-314.7699890136719,-85.75499725341797 -309.1700134277344,-91.35399627685547 -302.26300048828125,-91.35399627685547 C-302.26300048828125,-91.35399627685547 302.26300048828125,-91.35399627685547 302.26300048828125,-91.35399627685547 C309.1700134277344,-91.35399627685547 314.7699890136719,-85.75499725341797 314.7699890136719,-78.8479995727539 C314.7699890136719,-78.8479995727539 314.7699890136719,78.8479995727539 314.7699890136719,78.8479995727539 C314.7699890136719,85.75499725341797 309.1700134277344,91.35399627685547 302.26300048828125,91.35399627685547z"
                            ></path>
                          </g>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1693.949951171875,551.3170166015625)"
                        >
                          <path
                            fill="rgb(138,202,181)"
                            fill-opacity="1"
                            d=" M258.6860046386719,11.201000213623047 C258.6860046386719,11.201000213623047 -258.6860046386719,11.201000213623047 -258.6860046386719,11.201000213623047 C-264.87200927734375,11.201000213623047 -269.885986328125,6.185999870300293 -269.885986328125,0 C-269.885986328125,0 -269.885986328125,0 -269.885986328125,0 C-269.885986328125,-6.185999870300293 -264.87200927734375,-11.201000213623047 -258.6860046386719,-11.201000213623047 C-258.6860046386719,-11.201000213623047 258.6860046386719,-11.201000213623047 258.6860046386719,-11.201000213623047 C264.87200927734375,-11.201000213623047 269.885986328125,-6.185999870300293 269.885986328125,0 C269.885986328125,0 269.885986328125,0 269.885986328125,0 C269.885986328125,6.185999870300293 264.87200927734375,11.201000213623047 258.6860046386719,11.201000213623047z"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,-1952.1949462890625,551.3170166015625)"
                          >
                            <path
                              fill="rgb(255,255,255)"
                              fill-opacity="1"
                              d=" M21.54800033569336,0 C21.54800033569336,11.901000022888184 11.901000022888184,21.54800033569336 0,21.54800033569336 C-11.901000022888184,21.54800033569336 -21.54800033569336,11.901000022888184 -21.54800033569336,0 C-21.54800033569336,-11.901000022888184 -11.901000022888184,-21.54800033569336 0,-21.54800033569336 C11.901000022888184,-21.54800033569336 21.54800033569336,-11.901000022888184 21.54800033569336,0z"
                            ></path>
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="10"
                              stroke="rgb(197,229,218)"
                              stroke-opacity="1"
                              stroke-width="1.925"
                              d=" M21.54800033569336,0 C21.54800033569336,11.901000022888184 11.901000022888184,21.54800033569336 0,21.54800033569336 C-11.901000022888184,21.54800033569336 -21.54800033569336,11.901000022888184 -21.54800033569336,0 C-21.54800033569336,-11.901000022888184 -11.901000022888184,-21.54800033569336 0,-21.54800033569336 C11.901000022888184,-21.54800033569336 21.54800033569336,-11.901000022888184 21.54800033569336,0z"
                            ></path>
                          </g>
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,-1952.1949462890625,551.3170166015625)"
                          >
                            <path
                              fill="rgb(55,95,82)"
                              fill-opacity="1"
                              d=" M10.77400016784668,0 C10.77400016784668,5.949999809265137 5.949999809265137,10.77400016784668 0,10.77400016784668 C-5.949999809265137,10.77400016784668 -10.77400016784668,5.949999809265137 -10.77400016784668,0 C-10.77400016784668,-5.949999809265137 -5.949999809265137,-10.77400016784668 0,-10.77400016784668 C5.949999809265137,-10.77400016784668 10.77400016784668,-5.949999809265137 10.77400016784668,0z"
                            ></path>
                            <path
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              fill-opacity="0"
                              stroke-miterlimit="10"
                              stroke="rgb(255,255,255)"
                              stroke-opacity="1"
                              stroke-width="1.925"
                              d=" M10.77400016784668,0 C10.77400016784668,5.949999809265137 5.949999809265137,10.77400016784668 0,10.77400016784668 C-5.949999809265137,10.77400016784668 -10.77400016784668,5.949999809265137 -10.77400016784668,0 C-10.77400016784668,-5.949999809265137 -5.949999809265137,-10.77400016784668 0,-10.77400016784668 C5.949999809265137,-10.77400016784668 10.77400016784668,-5.949999809265137 10.77400016784668,0z"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        fill="rgb(55,95,82)"
                        font-size="32.4042091369629"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="0 - $$"
                        transform="matrix(1,0,0,1,361.0059814453125,511.4419860839844)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M8.39,0.39 C12.73,0.39 15.47,-3.46 15.47,-10.48 C15.47,-17.46 12.73,-21.15 8.39,-21.15 C4.08,-21.15 1.31,-17.49 1.31,-10.48 C1.31,-3.46 4.08,0.39 8.39,0.39z M8.39,-2.64 C6.43,-2.64 4.99,-4.6 4.99,-10.48 C4.99,-16.32 6.43,-18.14 8.39,-18.14 C10.38,-18.14 11.78,-16.32 11.78,-10.48 C11.78,-4.6 10.38,-2.64 8.39,-2.64z M24.51,-6.82 C24.51,-6.82 32.31,-6.82 32.31,-6.82 C32.31,-6.82 32.31,-9.63 32.31,-9.63 C32.31,-9.63 24.51,-9.63 24.51,-9.63 C24.51,-9.63 24.51,-6.82 24.51,-6.82z M47.2,3.59 C47.2,3.59 49.84,3.59 49.84,3.59 C49.84,3.59 49.84,0.23 49.84,0.23 C53.07,-0.39 54.9,-2.71 54.9,-5.87 C54.9,-11.98 46.06,-11.94 46.06,-15.44 C46.06,-17.07 47.1,-18.01 48.8,-18.01 C50.36,-18.01 51.54,-17.43 52.62,-16.35 C52.62,-16.35 54.61,-18.44 54.61,-18.44 C53.4,-19.84 51.9,-20.82 49.84,-21.08 C49.84,-21.08 49.84,-24.34 49.84,-24.34 C49.84,-24.34 47.2,-24.34 47.2,-24.34 C47.2,-24.34 47.2,-21.02 47.2,-21.02 C44.23,-20.49 42.34,-18.34 42.34,-15.27 C42.34,-9.5 51.18,-9.4 51.18,-5.58 C51.18,-3.82 50.2,-2.74 48.08,-2.74 C46.35,-2.74 44.82,-3.36 43.31,-4.67 C43.31,-4.67 41.55,-2.28 41.55,-2.28 C43.02,-0.72 45.08,0.16 47.2,0.36 C47.2,0.36 47.2,3.59 47.2,3.59z M63.85,3.59 C63.85,3.59 66.5,3.59 66.5,3.59 C66.5,3.59 66.5,0.23 66.5,0.23 C69.73,-0.39 71.56,-2.71 71.56,-5.87 C71.56,-11.98 62.71,-11.94 62.71,-15.44 C62.71,-17.07 63.76,-18.01 65.45,-18.01 C67.02,-18.01 68.19,-17.43 69.27,-16.35 C69.27,-16.35 71.26,-18.44 71.26,-18.44 C70.05,-19.84 68.55,-20.82 66.5,-21.08 C66.5,-21.08 66.5,-24.34 66.5,-24.34 C66.5,-24.34 63.85,-24.34 63.85,-24.34 C63.85,-24.34 63.85,-21.02 63.85,-21.02 C60.88,-20.49 58.99,-18.34 58.99,-15.27 C58.99,-9.5 67.84,-9.4 67.84,-5.58 C67.84,-3.82 66.86,-2.74 64.73,-2.74 C63.01,-2.74 61.47,-3.36 59.97,-4.67 C59.97,-4.67 58.21,-2.28 58.21,-2.28 C59.68,-0.72 61.73,0.16 63.85,0.36 C63.85,0.36 63.85,3.59 63.85,3.59z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                      <g
                        fill="rgb(109,189,163)"
                        font-size="28.8732490539551"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="SCHOOL COST (NET PRICE) "
                        transform="matrix(1,0,0,1,356.7509765625,468.1789855957031)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M7.97,0.35 C12.27,0.35 14.83,-2.24 14.83,-5.32 C14.83,-8.08 13.26,-9.51 10.99,-10.47 C10.99,-10.47 8.43,-11.51 8.43,-11.51 C6.86,-12.18 5.44,-12.71 5.44,-14.16 C5.44,-15.53 6.57,-16.34 8.35,-16.34 C9.8,-16.34 11.2,-15.76 12.39,-14.74 C12.39,-14.74 14.25,-17.01 14.25,-17.01 C12.77,-18.44 10.64,-19.37 8.35,-19.37 C4.62,-19.37 1.95,-17.01 1.95,-13.96 C1.95,-11.2 3.9,-9.71 5.79,-8.93 C5.79,-8.93 8.37,-7.79 8.37,-7.79 C10.09,-7.07 11.31,-6.57 11.31,-5.06 C11.31,-3.61 10.15,-2.65 8.05,-2.65 C6.22,-2.65 4.33,-3.4 2.97,-4.71 C2.97,-4.71 1.1,-2.44 1.1,-2.44 C2.91,-0.61 5.35,0.35 7.97,0.35z M25.31,0.35 C27.75,0.35 29.73,-0.58 31.32,-2.41 C31.32,-2.41 29.46,-4.48 29.46,-4.48 C28.42,-3.31 27.11,-2.65 25.45,-2.65 C22.28,-2.65 20.28,-5.26 20.28,-9.54 C20.28,-13.78 22.49,-16.34 25.51,-16.34 C26.99,-16.34 28.13,-15.79 29.11,-14.83 C29.11,-14.83 30.95,-16.95 30.95,-16.95 C29.75,-18.26 27.84,-19.37 25.45,-19.37 C20.62,-19.37 16.73,-15.67 16.73,-9.45 C16.73,-3.14 20.54,0.35 25.31,0.35z M33.42,0 C33.42,0 36.88,0 36.88,0 C36.88,0 36.88,-8.37 36.88,-8.37 C36.88,-8.37 44.44,-8.37 44.44,-8.37 C44.44,-8.37 44.44,0 44.44,0 C44.44,0 47.9,0 47.9,0 C47.9,0 47.9,-19.02 47.9,-19.02 C47.9,-19.02 44.44,-19.02 44.44,-19.02 C44.44,-19.02 44.44,-11.4 44.44,-11.4 C44.44,-11.4 36.88,-11.4 36.88,-11.4 C36.88,-11.4 36.88,-19.02 36.88,-19.02 C36.88,-19.02 33.42,-19.02 33.42,-19.02 C33.42,-19.02 33.42,0 33.42,0z M60.01,0.35 C64.98,0.35 68.41,-3.43 68.41,-9.6 C68.41,-15.73 64.98,-19.37 60.01,-19.37 C55.04,-19.37 51.61,-15.73 51.61,-9.6 C51.61,-3.43 55.04,0.35 60.01,0.35z M60.01,-2.65 C57.04,-2.65 55.15,-5.35 55.15,-9.6 C55.15,-13.81 57.04,-16.34 60.01,-16.34 C62.95,-16.34 64.87,-13.81 64.87,-9.6 C64.87,-5.35 62.95,-2.65 60.01,-2.65z M79.5,0.35 C84.47,0.35 87.9,-3.43 87.9,-9.6 C87.9,-15.73 84.47,-19.37 79.5,-19.37 C74.53,-19.37 71.1,-15.73 71.1,-9.6 C71.1,-3.43 74.53,0.35 79.5,0.35z M79.5,-2.65 C76.53,-2.65 74.64,-5.35 74.64,-9.6 C74.64,-13.81 76.53,-16.34 79.5,-16.34 C82.44,-16.34 84.36,-13.81 84.36,-9.6 C84.36,-5.35 82.44,-2.65 79.5,-2.65z M91.57,0 C91.57,0 102.89,0 102.89,0 C102.89,0 102.89,-2.91 102.89,-2.91 C102.89,-2.91 95.03,-2.91 95.03,-2.91 C95.03,-2.91 95.03,-19.02 95.03,-19.02 C95.03,-19.02 91.57,-19.02 91.57,-19.02 C91.57,-19.02 91.57,0 91.57,0z M119.46,0.35 C121.9,0.35 123.88,-0.58 125.48,-2.41 C125.48,-2.41 123.62,-4.48 123.62,-4.48 C122.57,-3.31 121.26,-2.65 119.61,-2.65 C116.44,-2.65 114.43,-5.26 114.43,-9.54 C114.43,-13.78 116.64,-16.34 119.66,-16.34 C121.15,-16.34 122.28,-15.79 123.27,-14.83 C123.27,-14.83 125.1,-16.95 125.1,-16.95 C123.91,-18.26 121.99,-19.37 119.61,-19.37 C114.78,-19.37 110.88,-15.67 110.88,-9.45 C110.88,-3.14 114.69,0.35 119.46,0.35z M134.99,0.35 C139.97,0.35 143.4,-3.43 143.4,-9.6 C143.4,-15.73 139.97,-19.37 134.99,-19.37 C130.02,-19.37 126.59,-15.73 126.59,-9.6 C126.59,-3.43 130.02,0.35 134.99,0.35z M134.99,-2.65 C132.03,-2.65 130.14,-5.35 130.14,-9.6 C130.14,-13.81 132.03,-16.34 134.99,-16.34 C137.93,-16.34 139.85,-13.81 139.85,-9.6 C139.85,-5.35 137.93,-2.65 134.99,-2.65z M152.62,0.35 C156.93,0.35 159.48,-2.24 159.48,-5.32 C159.48,-8.08 157.91,-9.51 155.65,-10.47 C155.65,-10.47 153.09,-11.51 153.09,-11.51 C151.52,-12.18 150.09,-12.71 150.09,-14.16 C150.09,-15.53 151.23,-16.34 153,-16.34 C154.45,-16.34 155.85,-15.76 157.04,-14.74 C157.04,-14.74 158.9,-17.01 158.9,-17.01 C157.42,-18.44 155.3,-19.37 153,-19.37 C149.28,-19.37 146.6,-17.01 146.6,-13.96 C146.6,-11.2 148.55,-9.71 150.44,-8.93 C150.44,-8.93 153.03,-7.79 153.03,-7.79 C154.75,-7.07 155.97,-6.57 155.97,-5.06 C155.97,-3.61 154.8,-2.65 152.71,-2.65 C150.88,-2.65 148.99,-3.4 147.62,-4.71 C147.62,-4.71 145.76,-2.44 145.76,-2.44 C147.56,-0.61 150.01,0.35 152.62,0.35z M166.18,0 C166.18,0 169.64,0 169.64,0 C169.64,0 169.64,-16.11 169.64,-16.11 C169.64,-16.11 175.11,-16.11 175.11,-16.11 C175.11,-16.11 175.11,-19.02 175.11,-19.02 C175.11,-19.02 160.71,-19.02 160.71,-19.02 C160.71,-19.02 160.71,-16.11 160.71,-16.11 C160.71,-16.11 166.18,-16.11 166.18,-16.11 C166.18,-16.11 166.18,0 166.18,0z M187.57,5.18 C187.57,5.18 189.73,4.25 189.73,4.25 C187.55,0.49 186.56,-3.84 186.56,-8.08 C186.56,-12.33 187.55,-16.66 189.73,-20.41 C189.73,-20.41 187.57,-21.34 187.57,-21.34 C185.16,-17.39 183.74,-13.2 183.74,-8.08 C183.74,-2.97 185.16,1.22 187.57,5.18z M193.35,0 C193.35,0 196.58,0 196.58,0 C196.58,0 196.58,-8.32 196.58,-8.32 C196.58,-10.44 196.35,-12.79 196.14,-14.77 C196.14,-14.77 196.26,-14.77 196.26,-14.77 C196.87,-13.26 197.51,-11.75 198.21,-10.47 C198.21,-10.47 203.91,0 203.91,0 C203.91,0 207.6,0 207.6,0 C207.6,0 207.6,-19.02 207.6,-19.02 C207.6,-19.02 204.37,-19.02 204.37,-19.02 C204.37,-19.02 204.37,-10.7 204.37,-10.7 C204.37,-8.61 204.61,-6.28 204.81,-4.25 C204.81,-4.25 204.69,-4.25 204.69,-4.25 C204.08,-5.76 203.44,-7.27 202.74,-8.55 C202.74,-8.55 197.05,-19.02 197.05,-19.02 C197.05,-19.02 193.35,-19.02 193.35,-19.02 C193.35,-19.02 193.35,0 193.35,0z M212.29,0 C212.29,0 224.07,0 224.07,0 C224.07,0 224.07,-2.91 224.07,-2.91 C224.07,-2.91 215.75,-2.91 215.75,-2.91 C215.75,-2.91 215.75,-8.43 215.75,-8.43 C215.75,-8.43 222.56,-8.43 222.56,-8.43 C222.56,-8.43 222.56,-11.34 222.56,-11.34 C222.56,-11.34 215.75,-11.34 215.75,-11.34 C215.75,-11.34 215.75,-16.11 215.75,-16.11 C215.75,-16.11 223.78,-16.11 223.78,-16.11 C223.78,-16.11 223.78,-19.02 223.78,-19.02 C223.78,-19.02 212.29,-19.02 212.29,-19.02 C212.29,-19.02 212.29,0 212.29,0z M231.67,0 C231.67,0 235.13,0 235.13,0 C235.13,0 235.13,-16.11 235.13,-16.11 C235.13,-16.11 240.59,-16.11 240.59,-16.11 C240.59,-16.11 240.59,-19.02 240.59,-19.02 C240.59,-19.02 226.2,-19.02 226.2,-19.02 C226.2,-19.02 226.2,-16.11 226.2,-16.11 C226.2,-16.11 231.67,-16.11 231.67,-16.11 C231.67,-16.11 231.67,0 231.67,0z M249.42,0 C249.42,0 252.88,0 252.88,0 C252.88,0 252.88,-6.95 252.88,-6.95 C252.88,-6.95 255.56,-6.95 255.56,-6.95 C259.66,-6.95 262.83,-8.87 262.83,-13.11 C262.83,-17.53 259.66,-19.02 255.44,-19.02 C255.44,-19.02 249.42,-19.02 249.42,-19.02 C249.42,-19.02 249.42,0 249.42,0z M252.88,-9.71 C252.88,-9.71 252.88,-16.25 252.88,-16.25 C252.88,-16.25 255.18,-16.25 255.18,-16.25 C257.94,-16.25 259.4,-15.44 259.4,-13.11 C259.4,-10.82 258.09,-9.71 255.3,-9.71 C255.3,-9.71 252.88,-9.71 252.88,-9.71z M266.26,0 C266.26,0 269.72,0 269.72,0 C269.72,0 269.72,-7.39 269.72,-7.39 C269.72,-7.39 272.54,-7.39 272.54,-7.39 C272.54,-7.39 276.61,0 276.61,0 C276.61,0 280.48,0 280.48,0 C280.48,0 275.97,-7.91 275.97,-7.91 C278.24,-8.69 279.72,-10.47 279.72,-13.35 C279.72,-17.62 276.67,-19.02 272.68,-19.02 C272.68,-19.02 266.26,-19.02 266.26,-19.02 C266.26,-19.02 266.26,0 266.26,0z M269.72,-10.15 C269.72,-10.15 269.72,-16.25 269.72,-16.25 C269.72,-16.25 272.33,-16.25 272.33,-16.25 C274.92,-16.25 276.32,-15.5 276.32,-13.35 C276.32,-11.22 274.92,-10.15 272.33,-10.15 C272.33,-10.15 269.72,-10.15 269.72,-10.15z M283.41,0 C283.41,0 286.87,0 286.87,0 C286.87,0 286.87,-19.02 286.87,-19.02 C286.87,-19.02 283.41,-19.02 283.41,-19.02 C283.41,-19.02 283.41,0 283.41,0z M299.2,0.35 C301.64,0.35 303.62,-0.58 305.22,-2.41 C305.22,-2.41 303.36,-4.48 303.36,-4.48 C302.31,-3.31 301,-2.65 299.34,-2.65 C296.17,-2.65 294.17,-5.26 294.17,-9.54 C294.17,-13.78 296.38,-16.34 299.4,-16.34 C300.88,-16.34 302.02,-15.79 303.01,-14.83 C303.01,-14.83 304.84,-16.95 304.84,-16.95 C303.65,-18.26 301.73,-19.37 299.34,-19.37 C294.52,-19.37 290.62,-15.67 290.62,-9.45 C290.62,-3.14 294.43,0.35 299.2,0.35z M307.32,0 C307.32,0 319.09,0 319.09,0 C319.09,0 319.09,-2.91 319.09,-2.91 C319.09,-2.91 310.78,-2.91 310.78,-2.91 C310.78,-2.91 310.78,-8.43 310.78,-8.43 C310.78,-8.43 317.58,-8.43 317.58,-8.43 C317.58,-8.43 317.58,-11.34 317.58,-11.34 C317.58,-11.34 310.78,-11.34 310.78,-11.34 C310.78,-11.34 310.78,-16.11 310.78,-16.11 C310.78,-16.11 318.8,-16.11 318.8,-16.11 C318.8,-16.11 318.8,-19.02 318.8,-19.02 C318.8,-19.02 307.32,-19.02 307.32,-19.02 C307.32,-19.02 307.32,0 307.32,0z M323.9,5.18 C326.31,1.22 327.73,-2.97 327.73,-8.08 C327.73,-13.2 326.31,-17.39 323.9,-21.34 C323.9,-21.34 321.74,-20.41 321.74,-20.41 C323.92,-16.66 324.91,-12.33 324.91,-8.08 C324.91,-3.84 323.92,0.49 321.74,4.25 C321.74,4.25 323.9,5.18 323.9,5.18z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_210)"
                      transform="matrix(0.949999988079071,0,0,0.949999988079071,20.20000457763672,7.100003242492676)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        transform="matrix(1,0,0,1,2324,0)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1952.1949462890625,270.2550048828125)"
                        >
                          <path
                            fill="rgb(226,242,237)"
                            fill-opacity="1"
                            d=" M250.18899536132812,92.29100036621094 C250.18899536132812,92.29100036621094 -250.18899536132812,92.29100036621094 -250.18899536132812,92.29100036621094 C-256.5190124511719,92.29100036621094 -261.6499938964844,87.16000366210938 -261.6499938964844,80.83000183105469 C-261.6499938964844,80.83000183105469 -261.6499938964844,-80.83000183105469 -261.6499938964844,-80.83000183105469 C-261.6499938964844,-87.16000366210938 -256.5190124511719,-92.29100036621094 -250.18899536132812,-92.29100036621094 C-250.18899536132812,-92.29100036621094 250.18899536132812,-92.29100036621094 250.18899536132812,-92.29100036621094 C256.5190124511719,-92.29100036621094 261.6499938964844,-87.16000366210938 261.6499938964844,-80.83000183105469 C261.6499938964844,-80.83000183105469 261.6499938964844,80.83000183105469 261.6499938964844,80.83000183105469 C261.6499938964844,87.16000366210938 256.5190124511719,92.29100036621094 250.18899536132812,92.29100036621094z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1955.490966796875,286.6409912109375)"
                        >
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                            stroke="rgb(197,229,218)"
                            stroke-opacity="1"
                            stroke-width="2.162"
                            d=" M218.906005859375,31.639999389648438 C218.906005859375,31.639999389648438 -218.906005859375,31.639999389648438 -218.906005859375,31.639999389648438 C-222.89599609375,31.639999389648438 -226.1300048828125,28.4060001373291 -226.1300048828125,24.416000366210938 C-226.1300048828125,24.416000366210938 -226.1300048828125,-24.416000366210938 -226.1300048828125,-24.416000366210938 C-226.1300048828125,-28.4060001373291 -222.89599609375,-31.639999389648438 -218.906005859375,-31.639999389648438 C-218.906005859375,-31.639999389648438 218.906005859375,-31.639999389648438 218.906005859375,-31.639999389648438 C222.89599609375,-31.639999389648438 226.1300048828125,-28.4060001373291 226.1300048828125,-24.416000366210938 C226.1300048828125,-24.416000366210938 226.1300048828125,24.416000366210938 226.1300048828125,24.416000366210938 C226.1300048828125,28.4060001373291 222.89599609375,31.639999389648438 218.906005859375,31.639999389648438z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,-1758.926025390625,288.6700134277344)"
                        >
                          <path
                            fill="rgb(109,189,163)"
                            fill-opacity="1"
                            d=" M2.868000030517578,8.121999740600586 C-3.0290000438690186,8.121999740600586 -7.820000171661377,3.3299999237060547 -7.820000171661377,-2.566999912261963 C-7.820000171661377,-8.46399974822998 -3.0290000438690186,-13.255000114440918 2.868000030517578,-13.255000114440918 C8.765000343322754,-13.255000114440918 13.557000160217285,-8.46399974822998 13.557000160217285,-2.566999912261963 C13.557000160217285,3.3299999237060547 8.765000343322754,8.121999740600586 2.868000030517578,8.121999740600586z M2.868000030517578,-18.415000915527344 C-5.793000221252441,-18.415000915527344 -12.795999526977539,-11.411999702453613 -12.795999526977539,-2.750999927520752 C-12.795999526977539,0.5659999847412109 -11.875,3.515000104904175 -10.031999588012695,6.09499979019165 C-10.031999588012695,6.09499979019165 -17.03499984741211,12.913999557495117 -17.03499984741211,12.913999557495117 C-18.141000747680664,14.020000457763672 -19.06100082397461,16.047000885009766 -17.586999893188477,17.520999908447266 C-15.928000450134277,19.18000030517578 -14.086000442504883,18.257999420166016 -12.979999542236328,16.968000411987305 C-12.979999542236328,16.968000411987305 -6.1620001792907715,10.14900016784668 -6.1620001792907715,10.14900016784668 C-3.5820000171661377,11.807999610900879 -0.6330000162124634,12.913999557495117 2.684000015258789,12.913999557495117 C11.345000267028809,12.913999557495117 18.349000930786133,5.909999847412109 18.349000930786133,-2.750999927520752 C18.533000946044922,-11.411999702453613 11.529000282287598,-18.415000915527344 2.868000030517578,-18.415000915527344z"
                          ></path>
                        </g>
                      </g>
                      <g
                        fill="rgb(82,142,122)"
                        font-size="28.8732490539551"
                        font-family="Source Sans Pro"
                        font-style="normal"
                        font-weight="normal"
                        aria-label="LOCATION "
                        transform="matrix(1,0,0,1,142.379150390625,228.0679931640625)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="round"
                          stroke-miterlimit="4"
                          d=" M2.41,0 C2.41,0 13.72,0 13.72,0 C13.72,0 13.72,-2.91 13.72,-2.91 C13.72,-2.91 5.87,-2.91 5.87,-2.91 C5.87,-2.91 5.87,-19.02 5.87,-19.02 C5.87,-19.02 2.41,-19.02 2.41,-19.02 C2.41,-19.02 2.41,0 2.41,0z M24.35,0.35 C29.32,0.35 32.75,-3.43 32.75,-9.6 C32.75,-15.73 29.32,-19.37 24.35,-19.37 C19.38,-19.37 15.95,-15.73 15.95,-9.6 C15.95,-3.43 19.38,0.35 24.35,0.35z M24.35,-2.65 C21.39,-2.65 19.5,-5.35 19.5,-9.6 C19.5,-13.81 21.39,-16.34 24.35,-16.34 C27.29,-16.34 29.21,-13.81 29.21,-9.6 C29.21,-5.35 27.29,-2.65 24.35,-2.65z M44.02,0.35 C46.46,0.35 48.44,-0.58 50.03,-2.41 C50.03,-2.41 48.17,-4.48 48.17,-4.48 C47.13,-3.31 45.82,-2.65 44.16,-2.65 C40.99,-2.65 38.98,-5.26 38.98,-9.54 C38.98,-13.78 41.19,-16.34 44.22,-16.34 C45.7,-16.34 46.84,-15.79 47.82,-14.83 C47.82,-14.83 49.66,-16.95 49.66,-16.95 C48.46,-18.26 46.55,-19.37 44.16,-19.37 C39.33,-19.37 35.44,-15.67 35.44,-9.45 C35.44,-3.14 39.25,0.35 44.02,0.35z M56.06,-10.06 C56.67,-12.07 57.22,-14.22 57.72,-16.31 C57.72,-16.31 57.83,-16.31 57.83,-16.31 C58.38,-14.25 58.94,-12.07 59.55,-10.06 C59.55,-10.06 60.19,-7.79 60.19,-7.79 C60.19,-7.79 55.42,-7.79 55.42,-7.79 C55.42,-7.79 56.06,-10.06 56.06,-10.06z M49.66,0 C49.66,0 53.18,0 53.18,0 C53.18,0 54.63,-5.09 54.63,-5.09 C54.63,-5.09 60.94,-5.09 60.94,-5.09 C60.94,-5.09 62.4,0 62.4,0 C62.4,0 66.06,0 66.06,0 C66.06,0 59.9,-19.02 59.9,-19.02 C59.9,-19.02 55.83,-19.02 55.83,-19.02 C55.83,-19.02 49.66,0 49.66,0z M72,0 C72,0 75.46,0 75.46,0 C75.46,0 75.46,-16.11 75.46,-16.11 C75.46,-16.11 80.92,-16.11 80.92,-16.11 C80.92,-16.11 80.92,-19.02 80.92,-19.02 C80.92,-19.02 66.53,-19.02 66.53,-19.02 C66.53,-19.02 66.53,-16.11 66.53,-16.11 C66.53,-16.11 72,-16.11 72,-16.11 C72,-16.11 72,0 72,0z M83.98,0 C83.98,0 87.44,0 87.44,0 C87.44,0 87.44,-19.02 87.44,-19.02 C87.44,-19.02 83.98,-19.02 83.98,-19.02 C83.98,-19.02 83.98,0 83.98,0z M99.6,0.35 C104.57,0.35 108,-3.43 108,-9.6 C108,-15.73 104.57,-19.37 99.6,-19.37 C94.62,-19.37 91.19,-15.73 91.19,-9.6 C91.19,-3.43 94.62,0.35 99.6,0.35z M99.6,-2.65 C96.63,-2.65 94.74,-5.35 94.74,-9.6 C94.74,-13.81 96.63,-16.34 99.6,-16.34 C102.53,-16.34 104.45,-13.81 104.45,-9.6 C104.45,-5.35 102.53,-2.65 99.6,-2.65z M111.67,0 C111.67,0 114.9,0 114.9,0 C114.9,0 114.9,-8.32 114.9,-8.32 C114.9,-10.44 114.66,-12.79 114.46,-14.77 C114.46,-14.77 114.58,-14.77 114.58,-14.77 C115.19,-13.26 115.83,-11.75 116.53,-10.47 C116.53,-10.47 122.23,0 122.23,0 C122.23,0 125.92,0 125.92,0 C125.92,0 125.92,-19.02 125.92,-19.02 C125.92,-19.02 122.69,-19.02 122.69,-19.02 C122.69,-19.02 122.69,-10.7 122.69,-10.7 C122.69,-8.61 122.92,-6.28 123.13,-4.25 C123.13,-4.25 123.01,-4.25 123.01,-4.25 C122.4,-5.76 121.76,-7.27 121.06,-8.55 C121.06,-8.55 115.36,-19.02 115.36,-19.02 C115.36,-19.02 111.67,-19.02 111.67,-19.02 C111.67,-19.02 111.67,0 111.67,0z"
                          style={{ display: "inherit" }}
                        ></path>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_204)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_193)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_182)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_171)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="33"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Pace University"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.76,0 C2.76,0 6.71,0 6.71,0 C6.71,0 6.71,-7.94 6.71,-7.94 C6.71,-7.94 9.77,-7.94 9.77,-7.94 C14.46,-7.94 18.08,-10.14 18.08,-14.99 C18.08,-20.04 14.46,-21.73 9.64,-21.73 C9.64,-21.73 2.76,-21.73 2.76,-21.73 C2.76,-21.73 2.76,0 2.76,0z M6.71,-11.1 C6.71,-11.1 6.71,-18.58 6.71,-18.58 C6.71,-18.58 9.34,-18.58 9.34,-18.58 C12.5,-18.58 14.16,-17.65 14.16,-14.99 C14.16,-12.36 12.66,-11.1 9.47,-11.1 C9.47,-11.1 6.71,-11.1 6.71,-11.1z M25.62,0.4 C27.55,0.4 29.14,-0.53 30.6,-1.79 C30.6,-1.79 30.74,-1.79 30.74,-1.79 C30.74,-1.79 31.07,0 31.07,0 C31.07,0 34.26,0 34.26,0 C34.26,0 34.26,-9.67 34.26,-9.67 C34.26,-14.22 32.2,-16.75 28.15,-16.75 C25.55,-16.75 23.23,-15.75 21.43,-14.62 C21.43,-14.62 22.83,-12.03 22.83,-12.03 C24.29,-12.89 25.82,-13.56 27.41,-13.56 C29.61,-13.56 30.27,-12.16 30.34,-10.5 C23.63,-9.77 20.77,-7.98 20.77,-4.39 C20.77,-1.53 22.76,0.4 25.62,0.4z M26.82,-2.73 C25.49,-2.73 24.56,-3.26 24.56,-4.65 C24.56,-6.31 25.89,-7.31 30.34,-7.84 C30.34,-7.84 30.34,-4.39 30.34,-4.39 C29.14,-3.26 28.15,-2.73 26.82,-2.73z M45.51,0.4 C47.37,0.4 49.29,-0.23 50.86,-1.6 C50.86,-1.6 49.26,-4.09 49.26,-4.09 C48.33,-3.32 47.2,-2.79 45.9,-2.79 C43.41,-2.79 41.65,-4.92 41.65,-8.14 C41.65,-11.4 43.45,-13.53 46.04,-13.53 C47.07,-13.53 47.9,-13.19 48.73,-12.46 C48.73,-12.46 50.62,-14.92 50.62,-14.92 C49.43,-15.99 47.9,-16.75 45.84,-16.75 C41.45,-16.75 37.6,-13.59 37.6,-8.14 C37.6,-2.73 41.05,0.4 45.51,0.4z M60.06,0.4 C62.19,0.4 64.18,-0.2 65.71,-1.33 C65.71,-1.33 64.38,-3.79 64.38,-3.79 C63.25,-3.06 61.99,-2.66 60.59,-2.66 C58,-2.66 56.27,-4.25 55.87,-6.98 C55.87,-6.98 66.17,-6.98 66.17,-6.98 C66.31,-7.58 66.37,-8.18 66.37,-8.97 C66.37,-13.56 63.98,-16.75 59.56,-16.75 C55.74,-16.75 52.02,-13.49 52.02,-8.18 C52.02,-2.73 55.54,0.4 60.06,0.4z M55.87,-9.9 C56.2,-12.36 57.8,-13.69 59.66,-13.69 C61.79,-13.69 62.92,-12.3 62.92,-9.9 C62.92,-9.9 55.87,-9.9 55.87,-9.9z M84.99,0.4 C90.07,0.4 93.23,-2.43 93.23,-9.57 C93.23,-9.57 93.23,-21.73 93.23,-21.73 C93.23,-21.73 89.41,-21.73 89.41,-21.73 C89.41,-21.73 89.41,-9.27 89.41,-9.27 C89.41,-4.59 87.61,-3.02 84.99,-3.02 C82.36,-3.02 80.63,-4.59 80.63,-9.27 C80.63,-9.27 80.63,-21.73 80.63,-21.73 C80.63,-21.73 76.68,-21.73 76.68,-21.73 C76.68,-21.73 76.68,-9.57 76.68,-9.57 C76.68,-2.43 79.9,0.4 84.99,0.4z M98.09,0 C98.09,0 102.05,0 102.05,0 C102.05,0 102.05,-11.37 102.05,-11.37 C103.34,-12.7 104.27,-13.36 105.7,-13.36 C107.43,-13.36 108.2,-12.4 108.2,-9.74 C108.2,-9.74 108.2,0 108.2,0 C108.2,0 112.12,0 112.12,0 C112.12,0 112.12,-10.24 112.12,-10.24 C112.12,-14.36 110.59,-16.75 107.07,-16.75 C104.84,-16.75 103.18,-15.55 101.72,-14.16 C101.72,-14.16 101.62,-14.16 101.62,-14.16 C101.62,-14.16 101.32,-16.35 101.32,-16.35 C101.32,-16.35 98.09,-16.35 98.09,-16.35 C98.09,-16.35 98.09,0 98.09,0z M116.61,0 C116.61,0 120.56,0 120.56,0 C120.56,0 120.56,-16.35 120.56,-16.35 C120.56,-16.35 116.61,-16.35 116.61,-16.35 C116.61,-16.35 116.61,0 116.61,0z M118.6,-19.14 C120,-19.14 120.96,-20.04 120.96,-21.37 C120.96,-22.7 120,-23.6 118.6,-23.6 C117.2,-23.6 116.24,-22.7 116.24,-21.37 C116.24,-20.04 117.2,-19.14 118.6,-19.14z M128.97,0 C128.97,0 133.49,0 133.49,0 C133.49,0 139.04,-16.35 139.04,-16.35 C139.04,-16.35 135.25,-16.35 135.25,-16.35 C135.25,-16.35 132.7,-7.94 132.7,-7.94 C132.26,-6.31 131.77,-4.65 131.33,-2.99 C131.33,-2.99 131.2,-2.99 131.2,-2.99 C130.74,-4.65 130.27,-6.31 129.8,-7.94 C129.8,-7.94 127.28,-16.35 127.28,-16.35 C127.28,-16.35 123.29,-16.35 123.29,-16.35 C123.29,-16.35 128.97,0 128.97,0z M148.7,0.4 C150.82,0.4 152.82,-0.2 154.35,-1.33 C154.35,-1.33 153.02,-3.79 153.02,-3.79 C151.89,-3.06 150.63,-2.66 149.23,-2.66 C146.64,-2.66 144.91,-4.25 144.51,-6.98 C144.51,-6.98 154.81,-6.98 154.81,-6.98 C154.95,-7.58 155.01,-8.18 155.01,-8.97 C155.01,-13.56 152.62,-16.75 148.2,-16.75 C144.38,-16.75 140.66,-13.49 140.66,-8.18 C140.66,-2.73 144.18,0.4 148.7,0.4z M144.51,-9.9 C144.84,-12.36 146.44,-13.69 148.3,-13.69 C150.43,-13.69 151.56,-12.3 151.56,-9.9 C151.56,-9.9 144.51,-9.9 144.51,-9.9z M158.48,0 C158.48,0 162.44,0 162.44,0 C162.44,0 162.44,-9.9 162.44,-9.9 C163.4,-12.4 164.96,-13.26 166.26,-13.26 C166.92,-13.26 167.32,-13.19 167.82,-13.06 C167.82,-13.06 168.62,-16.42 168.62,-16.42 C168.12,-16.62 167.59,-16.75 166.76,-16.75 C165.03,-16.75 163.3,-15.55 162.11,-13.43 C162.11,-13.43 162.01,-13.43 162.01,-13.43 C162.01,-13.43 161.71,-16.35 161.71,-16.35 C161.71,-16.35 158.48,-16.35 158.48,-16.35 C158.48,-16.35 158.48,0 158.48,0z M175.48,0.4 C179.63,0.4 181.89,-1.86 181.89,-4.69 C181.89,-7.51 179.66,-8.81 177.14,-9.67 C175.08,-10.37 173.91,-10.83 173.91,-12.03 C173.91,-12.99 174.65,-13.79 176.27,-13.79 C177.57,-13.79 178.77,-13.39 179.93,-12.53 C179.93,-12.53 181.63,-14.76 181.63,-14.76 C180.3,-15.92 178.4,-16.75 176.18,-16.75 C172.52,-16.75 170.19,-14.69 170.19,-11.83 C170.19,-9.24 172.39,-7.88 174.75,-7.01 C176.57,-6.35 178.17,-5.82 178.17,-4.45 C178.17,-3.36 177.34,-2.56 175.61,-2.56 C173.95,-2.56 172.45,-3.06 171.02,-4.22 C171.02,-4.22 169.3,-1.99 169.3,-1.99 C170.89,-0.46 173.22,0.4 175.48,0.4z M185.15,0 C185.15,0 189.1,0 189.1,0 C189.1,0 189.1,-16.35 189.1,-16.35 C189.1,-16.35 185.15,-16.35 185.15,-16.35 C185.15,-16.35 185.15,0 185.15,0z M187.14,-19.14 C188.54,-19.14 189.5,-20.04 189.5,-21.37 C189.5,-22.7 188.54,-23.6 187.14,-23.6 C185.74,-23.6 184.78,-22.7 184.78,-21.37 C184.78,-20.04 185.74,-19.14 187.14,-19.14z M199.64,0.4 C200.97,0.4 202.17,0.1 203.03,-0.3 C203.03,-0.3 202.33,-3.06 202.33,-3.06 C201.77,-2.82 201.2,-2.73 200.64,-2.73 C199.11,-2.73 198.35,-3.66 198.35,-5.55 C198.35,-5.55 198.35,-13.23 198.35,-13.23 C198.35,-13.23 202.5,-13.23 202.5,-13.23 C202.5,-13.23 202.5,-16.35 202.5,-16.35 C202.5,-16.35 198.35,-16.35 198.35,-16.35 C198.35,-16.35 198.35,-21.44 198.35,-21.44 C198.35,-21.44 195.09,-21.44 195.09,-21.44 C195.09,-21.44 194.62,-16.35 194.62,-16.35 C194.62,-16.35 192.1,-16.15 192.1,-16.15 C192.1,-16.15 192.1,-13.23 192.1,-13.23 C192.1,-13.23 194.42,-13.23 194.42,-13.23 C194.42,-13.23 194.42,-5.55 194.42,-5.55 C194.42,-1.99 195.82,0.4 199.64,0.4z M206.31,6.68 C209.9,6.68 211.63,4.42 212.99,0.7 C212.99,0.7 218.87,-16.35 218.87,-16.35 C218.87,-16.35 215.08,-16.35 215.08,-16.35 C215.08,-16.35 212.69,-8.41 212.69,-8.41 C212.29,-6.91 211.86,-5.32 211.46,-3.79 C211.46,-3.79 211.33,-3.79 211.33,-3.79 C210.86,-5.35 210.4,-6.98 209.9,-8.41 C209.9,-8.41 207.14,-16.35 207.14,-16.35 C207.14,-16.35 203.15,-16.35 203.15,-16.35 C203.15,-16.35 209.56,-0.23 209.56,-0.23 C209.56,-0.23 209.27,0.8 209.27,0.8 C208.73,2.39 207.74,3.52 206.04,3.52 C205.68,3.52 205.38,3.49 204.91,3.36 C204.91,3.36 204.15,6.31 204.15,6.31 C204.78,6.55 205.41,6.68 206.31,6.68z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="33"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Stony Brook University"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M9.11,0.4 C14.02,0.4 16.95,-2.56 16.95,-6.08 C16.95,-9.24 15.15,-10.87 12.56,-11.96 C12.56,-11.96 9.64,-13.16 9.64,-13.16 C7.84,-13.92 6.21,-14.52 6.21,-16.18 C6.21,-17.75 7.51,-18.68 9.54,-18.68 C11.2,-18.68 12.8,-18.01 14.16,-16.85 C14.16,-16.85 16.28,-19.44 16.28,-19.44 C14.59,-21.07 12.16,-22.13 9.54,-22.13 C5.28,-22.13 2.23,-19.44 2.23,-15.95 C2.23,-12.8 4.45,-11.1 6.61,-10.2 C6.61,-10.2 9.57,-8.91 9.57,-8.91 C11.53,-8.08 12.93,-7.51 12.93,-5.78 C12.93,-4.12 11.6,-3.02 9.21,-3.02 C7.11,-3.02 4.95,-3.89 3.39,-5.38 C3.39,-5.38 1.26,-2.79 1.26,-2.79 C3.32,-0.7 6.11,0.4 9.11,0.4z M25.7,0.4 C27.03,0.4 28.22,0.1 29.09,-0.3 C29.09,-0.3 28.39,-3.06 28.39,-3.06 C27.83,-2.82 27.26,-2.73 26.7,-2.73 C25.17,-2.73 24.4,-3.66 24.4,-5.55 C24.4,-5.55 24.4,-13.23 24.4,-13.23 C24.4,-13.23 28.56,-13.23 28.56,-13.23 C28.56,-13.23 28.56,-16.35 28.56,-16.35 C28.56,-16.35 24.4,-16.35 24.4,-16.35 C24.4,-16.35 24.4,-21.44 24.4,-21.44 C24.4,-21.44 21.15,-21.44 21.15,-21.44 C21.15,-21.44 20.68,-16.35 20.68,-16.35 C20.68,-16.35 18.15,-16.15 18.15,-16.15 C18.15,-16.15 18.15,-13.23 18.15,-13.23 C18.15,-13.23 20.48,-13.23 20.48,-13.23 C20.48,-13.23 20.48,-5.55 20.48,-5.55 C20.48,-1.99 21.88,0.4 25.7,0.4z M37.95,0.4 C42,0.4 45.72,-2.73 45.72,-8.14 C45.72,-13.59 42,-16.75 37.95,-16.75 C33.86,-16.75 30.14,-13.59 30.14,-8.14 C30.14,-2.73 33.86,0.4 37.95,0.4z M37.95,-2.79 C35.59,-2.79 34.19,-4.92 34.19,-8.14 C34.19,-11.4 35.59,-13.53 37.95,-13.53 C40.31,-13.53 41.7,-11.4 41.7,-8.14 C41.7,-4.92 40.31,-2.79 37.95,-2.79z M49.32,0 C49.32,0 53.27,0 53.27,0 C53.27,0 53.27,-11.37 53.27,-11.37 C54.57,-12.7 55.5,-13.36 56.93,-13.36 C58.66,-13.36 59.42,-12.4 59.42,-9.74 C59.42,-9.74 59.42,0 59.42,0 C59.42,0 63.34,0 63.34,0 C63.34,0 63.34,-10.24 63.34,-10.24 C63.34,-14.36 61.81,-16.75 58.29,-16.75 C56.07,-16.75 54.4,-15.55 52.94,-14.16 C52.94,-14.16 52.84,-14.16 52.84,-14.16 C52.84,-14.16 52.54,-16.35 52.54,-16.35 C52.54,-16.35 49.32,-16.35 49.32,-16.35 C49.32,-16.35 49.32,0 49.32,0z M69,6.68 C72.58,6.68 74.31,4.42 75.67,0.7 C75.67,0.7 81.56,-16.35 81.56,-16.35 C81.56,-16.35 77.77,-16.35 77.77,-16.35 C77.77,-16.35 75.38,-8.41 75.38,-8.41 C74.98,-6.91 74.54,-5.32 74.15,-3.79 C74.15,-3.79 74.01,-3.79 74.01,-3.79 C73.55,-5.35 73.08,-6.98 72.58,-8.41 C72.58,-8.41 69.83,-16.35 69.83,-16.35 C69.83,-16.35 65.84,-16.35 65.84,-16.35 C65.84,-16.35 72.25,-0.23 72.25,-0.23 C72.25,-0.23 71.95,0.8 71.95,0.8 C71.42,2.39 70.42,3.52 68.73,3.52 C68.36,3.52 68.06,3.49 67.6,3.36 C67.6,3.36 66.83,6.31 66.83,6.31 C67.47,6.55 68.1,6.68 69,6.68z M91.2,0 C91.2,0 98.74,0 98.74,0 C103.53,0 107.12,-2.03 107.12,-6.38 C107.12,-9.31 105.36,-11 102.96,-11.53 C102.96,-11.53 102.96,-11.67 102.96,-11.67 C104.82,-12.33 105.95,-14.32 105.95,-16.38 C105.95,-20.37 102.66,-21.73 98.18,-21.73 C98.18,-21.73 91.2,-21.73 91.2,-21.73 C91.2,-21.73 91.2,0 91.2,0z M95.15,-12.8 C95.15,-12.8 95.15,-18.64 95.15,-18.64 C95.15,-18.64 97.91,-18.64 97.91,-18.64 C100.7,-18.64 102.1,-17.88 102.1,-15.82 C102.1,-13.96 100.8,-12.8 97.85,-12.8 C97.85,-12.8 95.15,-12.8 95.15,-12.8z M95.15,-3.09 C95.15,-3.09 95.15,-9.84 95.15,-9.84 C95.15,-9.84 98.34,-9.84 98.34,-9.84 C101.53,-9.84 103.23,-8.84 103.23,-6.61 C103.23,-4.19 101.5,-3.09 98.34,-3.09 C98.34,-3.09 95.15,-3.09 95.15,-3.09z M110.57,0 C110.57,0 114.52,0 114.52,0 C114.52,0 114.52,-9.9 114.52,-9.9 C115.49,-12.4 117.05,-13.26 118.34,-13.26 C119.01,-13.26 119.41,-13.19 119.91,-13.06 C119.91,-13.06 120.7,-16.42 120.7,-16.42 C120.2,-16.62 119.67,-16.75 118.84,-16.75 C117.11,-16.75 115.39,-15.55 114.19,-13.43 C114.19,-13.43 114.09,-13.43 114.09,-13.43 C114.09,-13.43 113.79,-16.35 113.79,-16.35 C113.79,-16.35 110.57,-16.35 110.57,-16.35 C110.57,-16.35 110.57,0 110.57,0z M129.72,0.4 C133.78,0.4 137.5,-2.73 137.5,-8.14 C137.5,-13.59 133.78,-16.75 129.72,-16.75 C125.63,-16.75 121.91,-13.59 121.91,-8.14 C121.91,-2.73 125.63,0.4 129.72,0.4z M129.72,-2.79 C127.36,-2.79 125.97,-4.92 125.97,-8.14 C125.97,-11.4 127.36,-13.53 129.72,-13.53 C132.08,-13.53 133.48,-11.4 133.48,-8.14 C133.48,-4.92 132.08,-2.79 129.72,-2.79z M147.84,0.4 C151.89,0.4 155.61,-2.73 155.61,-8.14 C155.61,-13.59 151.89,-16.75 147.84,-16.75 C143.75,-16.75 140.03,-13.59 140.03,-8.14 C140.03,-2.73 143.75,0.4 147.84,0.4z M147.84,-2.79 C145.48,-2.79 144.08,-4.92 144.08,-8.14 C144.08,-11.4 145.48,-13.53 147.84,-13.53 C150.2,-13.53 151.59,-11.4 151.59,-8.14 C151.59,-4.92 150.2,-2.79 147.84,-2.79z M159.21,0 C159.21,0 163.1,0 163.1,0 C163.1,0 163.1,-4.19 163.1,-4.19 C163.1,-4.19 165.59,-7.01 165.59,-7.01 C165.59,-7.01 169.74,0 169.74,0 C169.74,0 174,0 174,0 C174,0 167.88,-9.64 167.88,-9.64 C167.88,-9.64 173.43,-16.35 173.43,-16.35 C173.43,-16.35 169.11,-16.35 169.11,-16.35 C169.11,-16.35 163.23,-8.97 163.23,-8.97 C163.23,-8.97 163.1,-8.97 163.1,-8.97 C163.1,-8.97 163.1,-23.46 163.1,-23.46 C163.1,-23.46 159.21,-23.46 159.21,-23.46 C159.21,-23.46 159.21,0 159.21,0z M191.64,0.4 C196.73,0.4 199.88,-2.43 199.88,-9.57 C199.88,-9.57 199.88,-21.73 199.88,-21.73 C199.88,-21.73 196.06,-21.73 196.06,-21.73 C196.06,-21.73 196.06,-9.27 196.06,-9.27 C196.06,-4.59 194.27,-3.02 191.64,-3.02 C189.02,-3.02 187.29,-4.59 187.29,-9.27 C187.29,-9.27 187.29,-21.73 187.29,-21.73 C187.29,-21.73 183.33,-21.73 183.33,-21.73 C183.33,-21.73 183.33,-9.57 183.33,-9.57 C183.33,-2.43 186.56,0.4 191.64,0.4z M204.75,0 C204.75,0 208.7,0 208.7,0 C208.7,0 208.7,-11.37 208.7,-11.37 C210,-12.7 210.93,-13.36 212.36,-13.36 C214.09,-13.36 214.85,-12.4 214.85,-9.74 C214.85,-9.74 214.85,0 214.85,0 C214.85,0 218.77,0 218.77,0 C218.77,0 218.77,-10.24 218.77,-10.24 C218.77,-14.36 217.24,-16.75 213.72,-16.75 C211.5,-16.75 209.83,-15.55 208.37,-14.16 C208.37,-14.16 208.27,-14.16 208.27,-14.16 C208.27,-14.16 207.97,-16.35 207.97,-16.35 C207.97,-16.35 204.75,-16.35 204.75,-16.35 C204.75,-16.35 204.75,0 204.75,0z M223.26,0 C223.26,0 227.22,0 227.22,0 C227.22,0 227.22,-16.35 227.22,-16.35 C227.22,-16.35 223.26,-16.35 223.26,-16.35 C223.26,-16.35 223.26,0 223.26,0z M225.26,-19.14 C226.65,-19.14 227.62,-20.04 227.62,-21.37 C227.62,-22.7 226.65,-23.6 225.26,-23.6 C223.86,-23.6 222.9,-22.7 222.9,-21.37 C222.9,-20.04 223.86,-19.14 225.26,-19.14z M235.63,0 C235.63,0 240.15,0 240.15,0 C240.15,0 245.7,-16.35 245.7,-16.35 C245.7,-16.35 241.91,-16.35 241.91,-16.35 C241.91,-16.35 239.35,-7.94 239.35,-7.94 C238.92,-6.31 238.42,-4.65 237.99,-2.99 C237.99,-2.99 237.86,-2.99 237.86,-2.99 C237.39,-4.65 236.93,-6.31 236.46,-7.94 C236.46,-7.94 233.93,-16.35 233.93,-16.35 C233.93,-16.35 229.95,-16.35 229.95,-16.35 C229.95,-16.35 235.63,0 235.63,0z M255.35,0.4 C257.48,0.4 259.47,-0.2 261,-1.33 C261,-1.33 259.67,-3.79 259.67,-3.79 C258.54,-3.06 257.28,-2.66 255.89,-2.66 C253.29,-2.66 251.56,-4.25 251.17,-6.98 C251.17,-6.98 261.47,-6.98 261.47,-6.98 C261.6,-7.58 261.67,-8.18 261.67,-8.97 C261.67,-13.56 259.28,-16.75 254.86,-16.75 C251.03,-16.75 247.31,-13.49 247.31,-8.18 C247.31,-2.73 250.83,0.4 255.35,0.4z M251.17,-9.9 C251.5,-12.36 253.09,-13.69 254.96,-13.69 C257.08,-13.69 258.21,-12.3 258.21,-9.9 C258.21,-9.9 251.17,-9.9 251.17,-9.9z M265.14,0 C265.14,0 269.09,0 269.09,0 C269.09,0 269.09,-9.9 269.09,-9.9 C270.06,-12.4 271.62,-13.26 272.92,-13.26 C273.58,-13.26 273.98,-13.19 274.48,-13.06 C274.48,-13.06 275.28,-16.42 275.28,-16.42 C274.78,-16.62 274.24,-16.75 273.41,-16.75 C271.69,-16.75 269.96,-15.55 268.76,-13.43 C268.76,-13.43 268.66,-13.43 268.66,-13.43 C268.66,-13.43 268.36,-16.35 268.36,-16.35 C268.36,-16.35 265.14,-16.35 265.14,-16.35 C265.14,-16.35 265.14,0 265.14,0z M282.13,0.4 C286.29,0.4 288.55,-1.86 288.55,-4.69 C288.55,-7.51 286.32,-8.81 283.79,-9.67 C281.73,-10.37 280.57,-10.83 280.57,-12.03 C280.57,-12.99 281.3,-13.79 282.93,-13.79 C284.23,-13.79 285.42,-13.39 286.59,-12.53 C286.59,-12.53 288.28,-14.76 288.28,-14.76 C286.95,-15.92 285.06,-16.75 282.83,-16.75 C279.18,-16.75 276.85,-14.69 276.85,-11.83 C276.85,-9.24 279.04,-7.88 281.4,-7.01 C283.23,-6.35 284.82,-5.82 284.82,-4.45 C284.82,-3.36 283.99,-2.56 282.27,-2.56 C280.6,-2.56 279.11,-3.06 277.68,-4.22 C277.68,-4.22 275.95,-1.99 275.95,-1.99 C277.55,-0.46 279.87,0.4 282.13,0.4z M291.8,0 C291.8,0 295.76,0 295.76,0 C295.76,0 295.76,-16.35 295.76,-16.35 C295.76,-16.35 291.8,-16.35 291.8,-16.35 C291.8,-16.35 291.8,0 291.8,0z M293.8,-19.14 C295.19,-19.14 296.16,-20.04 296.16,-21.37 C296.16,-22.7 295.19,-23.6 293.8,-23.6 C292.4,-23.6 291.44,-22.7 291.44,-21.37 C291.44,-20.04 292.4,-19.14 293.8,-19.14z M306.3,0.4 C307.63,0.4 308.82,0.1 309.69,-0.3 C309.69,-0.3 308.99,-3.06 308.99,-3.06 C308.42,-2.82 307.86,-2.73 307.29,-2.73 C305.77,-2.73 305,-3.66 305,-5.55 C305,-5.55 305,-13.23 305,-13.23 C305,-13.23 309.16,-13.23 309.16,-13.23 C309.16,-13.23 309.16,-16.35 309.16,-16.35 C309.16,-16.35 305,-16.35 305,-16.35 C305,-16.35 305,-21.44 305,-21.44 C305,-21.44 301.74,-21.44 301.74,-21.44 C301.74,-21.44 301.28,-16.35 301.28,-16.35 C301.28,-16.35 298.75,-16.15 298.75,-16.15 C298.75,-16.15 298.75,-13.23 298.75,-13.23 C298.75,-13.23 301.08,-13.23 301.08,-13.23 C301.08,-13.23 301.08,-5.55 301.08,-5.55 C301.08,-1.99 302.48,0.4 306.3,0.4z M312.96,6.68 C316.55,6.68 318.28,4.42 319.64,0.7 C319.64,0.7 325.53,-16.35 325.53,-16.35 C325.53,-16.35 321.74,-16.35 321.74,-16.35 C321.74,-16.35 319.34,-8.41 319.34,-8.41 C318.95,-6.91 318.51,-5.32 318.12,-3.79 C318.12,-3.79 317.98,-3.79 317.98,-3.79 C317.52,-5.35 317.05,-6.98 316.55,-8.41 C316.55,-8.41 313.79,-16.35 313.79,-16.35 C313.79,-16.35 309.81,-16.35 309.81,-16.35 C309.81,-16.35 316.22,-0.23 316.22,-0.23 C316.22,-0.23 315.92,0.8 315.92,0.8 C315.39,2.39 314.39,3.52 312.7,3.52 C312.33,3.52 312.03,3.49 311.57,3.36 C311.57,3.36 310.8,6.31 310.8,6.31 C311.44,6.55 312.07,6.68 312.96,6.68z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_149)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="33"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Adelphi University"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M7.24,-11.5 C7.94,-13.79 8.57,-16.25 9.14,-18.64 C9.14,-18.64 9.27,-18.64 9.27,-18.64 C9.9,-16.28 10.53,-13.79 11.23,-11.5 C11.23,-11.5 11.96,-8.91 11.96,-8.91 C11.96,-8.91 6.51,-8.91 6.51,-8.91 C6.51,-8.91 7.24,-11.5 7.24,-11.5z M-0.07,0 C-0.07,0 3.95,0 3.95,0 C3.95,0 5.62,-5.82 5.62,-5.82 C5.62,-5.82 12.83,-5.82 12.83,-5.82 C12.83,-5.82 14.49,0 14.49,0 C14.49,0 18.68,0 18.68,0 C18.68,0 11.63,-21.73 11.63,-21.73 C11.63,-21.73 6.98,-21.73 6.98,-21.73 C6.98,-21.73 -0.07,0 -0.07,0z M26.49,0.4 C28.22,0.4 29.88,-0.57 31.08,-1.76 C31.08,-1.76 31.21,-1.76 31.21,-1.76 C31.21,-1.76 31.51,0 31.51,0 C31.51,0 34.7,0 34.7,0 C34.7,0 34.7,-23.46 34.7,-23.46 C34.7,-23.46 30.78,-23.46 30.78,-23.46 C30.78,-23.46 30.78,-17.58 30.78,-17.58 C30.78,-17.58 30.94,-14.96 30.94,-14.96 C29.68,-16.05 28.52,-16.75 26.69,-16.75 C23.1,-16.75 19.78,-13.49 19.78,-8.14 C19.78,-2.76 22.4,0.4 26.49,0.4z M27.45,-2.86 C25.13,-2.86 23.8,-4.69 23.8,-8.21 C23.8,-11.57 25.49,-13.49 27.52,-13.49 C28.62,-13.49 29.68,-13.16 30.78,-12.16 C30.78,-12.16 30.78,-4.65 30.78,-4.65 C29.75,-3.39 28.68,-2.86 27.45,-2.86z M46.37,0.4 C48.49,0.4 50.49,-0.2 52.01,-1.33 C52.01,-1.33 50.69,-3.79 50.69,-3.79 C49.56,-3.06 48.29,-2.66 46.9,-2.66 C44.3,-2.66 42.58,-4.25 42.18,-6.98 C42.18,-6.98 52.48,-6.98 52.48,-6.98 C52.61,-7.58 52.68,-8.18 52.68,-8.97 C52.68,-13.56 50.29,-16.75 45.87,-16.75 C42.04,-16.75 38.32,-13.49 38.32,-8.18 C38.32,-2.73 41.85,0.4 46.37,0.4z M42.18,-9.9 C42.51,-12.36 44.1,-13.69 45.97,-13.69 C48.09,-13.69 49.22,-12.3 49.22,-9.9 C49.22,-9.9 42.18,-9.9 42.18,-9.9z M59.94,0.4 C60.87,0.4 61.53,0.27 62,0.03 C62,0.03 61.53,-2.86 61.53,-2.86 C61.27,-2.79 61.13,-2.79 60.94,-2.79 C60.54,-2.79 60.1,-3.12 60.1,-4.09 C60.1,-4.09 60.1,-23.46 60.1,-23.46 C60.1,-23.46 56.15,-23.46 56.15,-23.46 C56.15,-23.46 56.15,-4.29 56.15,-4.29 C56.15,-1.4 57.18,0.4 59.94,0.4z M65.13,6.41 C65.13,6.41 69.08,6.41 69.08,6.41 C69.08,6.41 69.08,1.33 69.08,1.33 C69.08,1.33 68.95,-1.4 68.95,-1.4 C70.24,-0.27 71.67,0.4 73.14,0.4 C76.76,0.4 80.08,-2.82 80.08,-8.41 C80.08,-13.46 77.72,-16.75 73.67,-16.75 C71.87,-16.75 70.14,-15.79 68.75,-14.62 C68.75,-14.62 68.65,-14.62 68.65,-14.62 C68.65,-14.62 68.35,-16.35 68.35,-16.35 C68.35,-16.35 65.13,-16.35 65.13,-16.35 C65.13,-16.35 65.13,6.41 65.13,6.41z M72.27,-2.86 C71.34,-2.86 70.21,-3.19 69.08,-4.15 C69.08,-4.15 69.08,-11.7 69.08,-11.7 C70.31,-12.93 71.41,-13.49 72.57,-13.49 C75,-13.49 76.06,-11.6 76.06,-8.37 C76.06,-4.72 74.4,-2.86 72.27,-2.86z M83.77,0 C83.77,0 87.73,0 87.73,0 C87.73,0 87.73,-11.37 87.73,-11.37 C89.02,-12.7 89.95,-13.36 91.38,-13.36 C93.11,-13.36 93.87,-12.4 93.87,-9.74 C93.87,-9.74 93.87,0 93.87,0 C93.87,0 97.8,0 97.8,0 C97.8,0 97.8,-10.24 97.8,-10.24 C97.8,-14.36 96.27,-16.75 92.74,-16.75 C90.52,-16.75 88.89,-15.55 87.56,-14.29 C87.56,-14.29 87.73,-17.41 87.73,-17.41 C87.73,-17.41 87.73,-23.46 87.73,-23.46 C87.73,-23.46 83.77,-23.46 83.77,-23.46 C83.77,-23.46 83.77,0 83.77,0z M102.22,0 C102.22,0 106.17,0 106.17,0 C106.17,0 106.17,-16.35 106.17,-16.35 C106.17,-16.35 102.22,-16.35 102.22,-16.35 C102.22,-16.35 102.22,0 102.22,0z M104.21,-19.14 C105.61,-19.14 106.57,-20.04 106.57,-21.37 C106.57,-22.7 105.61,-23.6 104.21,-23.6 C102.82,-23.6 101.85,-22.7 101.85,-21.37 C101.85,-20.04 102.82,-19.14 104.21,-19.14z M126.04,0.4 C131.12,0.4 134.28,-2.43 134.28,-9.57 C134.28,-9.57 134.28,-21.73 134.28,-21.73 C134.28,-21.73 130.46,-21.73 130.46,-21.73 C130.46,-21.73 130.46,-9.27 130.46,-9.27 C130.46,-4.59 128.66,-3.02 126.04,-3.02 C123.41,-3.02 121.68,-4.59 121.68,-9.27 C121.68,-9.27 121.68,-21.73 121.68,-21.73 C121.68,-21.73 117.73,-21.73 117.73,-21.73 C117.73,-21.73 117.73,-9.57 117.73,-9.57 C117.73,-2.43 120.95,0.4 126.04,0.4z M139.14,0 C139.14,0 143.1,0 143.1,0 C143.1,0 143.1,-11.37 143.1,-11.37 C144.4,-12.7 145.33,-13.36 146.76,-13.36 C148.48,-13.36 149.25,-12.4 149.25,-9.74 C149.25,-9.74 149.25,0 149.25,0 C149.25,0 153.17,0 153.17,0 C153.17,0 153.17,-10.24 153.17,-10.24 C153.17,-14.36 151.64,-16.75 148.12,-16.75 C145.89,-16.75 144.23,-15.55 142.77,-14.16 C142.77,-14.16 142.67,-14.16 142.67,-14.16 C142.67,-14.16 142.37,-16.35 142.37,-16.35 C142.37,-16.35 139.14,-16.35 139.14,-16.35 C139.14,-16.35 139.14,0 139.14,0z M157.66,0 C157.66,0 161.61,0 161.61,0 C161.61,0 161.61,-16.35 161.61,-16.35 C161.61,-16.35 157.66,-16.35 157.66,-16.35 C157.66,-16.35 157.66,0 157.66,0z M159.65,-19.14 C161.05,-19.14 162.01,-20.04 162.01,-21.37 C162.01,-22.7 161.05,-23.6 159.65,-23.6 C158.26,-23.6 157.29,-22.7 157.29,-21.37 C157.29,-20.04 158.26,-19.14 159.65,-19.14z M170.03,0 C170.03,0 174.55,0 174.55,0 C174.55,0 180.1,-16.35 180.1,-16.35 C180.1,-16.35 176.31,-16.35 176.31,-16.35 C176.31,-16.35 173.75,-7.94 173.75,-7.94 C173.32,-6.31 172.82,-4.65 172.39,-2.99 C172.39,-2.99 172.25,-2.99 172.25,-2.99 C171.79,-4.65 171.32,-6.31 170.86,-7.94 C170.86,-7.94 168.33,-16.35 168.33,-16.35 C168.33,-16.35 164.34,-16.35 164.34,-16.35 C164.34,-16.35 170.03,0 170.03,0z M189.75,0.4 C191.88,0.4 193.87,-0.2 195.4,-1.33 C195.4,-1.33 194.07,-3.79 194.07,-3.79 C192.94,-3.06 191.68,-2.66 190.28,-2.66 C187.69,-2.66 185.96,-4.25 185.56,-6.98 C185.56,-6.98 195.86,-6.98 195.86,-6.98 C196,-7.58 196.06,-8.18 196.06,-8.97 C196.06,-13.56 193.67,-16.75 189.25,-16.75 C185.43,-16.75 181.71,-13.49 181.71,-8.18 C181.71,-2.73 185.23,0.4 189.75,0.4z M185.56,-9.9 C185.89,-12.36 187.49,-13.69 189.35,-13.69 C191.48,-13.69 192.61,-12.3 192.61,-9.9 C192.61,-9.9 185.56,-9.9 185.56,-9.9z M199.53,0 C199.53,0 203.49,0 203.49,0 C203.49,0 203.49,-9.9 203.49,-9.9 C204.45,-12.4 206.02,-13.26 207.31,-13.26 C207.98,-13.26 208.37,-13.19 208.87,-13.06 C208.87,-13.06 209.67,-16.42 209.67,-16.42 C209.17,-16.62 208.64,-16.75 207.81,-16.75 C206.08,-16.75 204.35,-15.55 203.16,-13.43 C203.16,-13.43 203.06,-13.43 203.06,-13.43 C203.06,-13.43 202.76,-16.35 202.76,-16.35 C202.76,-16.35 199.53,-16.35 199.53,-16.35 C199.53,-16.35 199.53,0 199.53,0z M216.53,0.4 C220.68,0.4 222.94,-1.86 222.94,-4.69 C222.94,-7.51 220.72,-8.81 218.19,-9.67 C216.13,-10.37 214.97,-10.83 214.97,-12.03 C214.97,-12.99 215.7,-13.79 217.33,-13.79 C218.62,-13.79 219.82,-13.39 220.98,-12.53 C220.98,-12.53 222.68,-14.76 222.68,-14.76 C221.35,-15.92 219.45,-16.75 217.23,-16.75 C213.57,-16.75 211.24,-14.69 211.24,-11.83 C211.24,-9.24 213.44,-7.88 215.8,-7.01 C217.63,-6.35 219.22,-5.82 219.22,-4.45 C219.22,-3.36 218.39,-2.56 216.66,-2.56 C215,-2.56 213.5,-3.06 212.08,-4.22 C212.08,-4.22 210.35,-1.99 210.35,-1.99 C211.94,-0.46 214.27,0.4 216.53,0.4z M226.2,0 C226.2,0 230.15,0 230.15,0 C230.15,0 230.15,-16.35 230.15,-16.35 C230.15,-16.35 226.2,-16.35 226.2,-16.35 C226.2,-16.35 226.2,0 226.2,0z M228.19,-19.14 C229.59,-19.14 230.55,-20.04 230.55,-21.37 C230.55,-22.7 229.59,-23.6 228.19,-23.6 C226.8,-23.6 225.83,-22.7 225.83,-21.37 C225.83,-20.04 226.8,-19.14 228.19,-19.14z M240.69,0.4 C242.02,0.4 243.22,0.1 244.08,-0.3 C244.08,-0.3 243.39,-3.06 243.39,-3.06 C242.82,-2.82 242.26,-2.73 241.69,-2.73 C240.16,-2.73 239.4,-3.66 239.4,-5.55 C239.4,-5.55 239.4,-13.23 239.4,-13.23 C239.4,-13.23 243.55,-13.23 243.55,-13.23 C243.55,-13.23 243.55,-16.35 243.55,-16.35 C243.55,-16.35 239.4,-16.35 239.4,-16.35 C239.4,-16.35 239.4,-21.44 239.4,-21.44 C239.4,-21.44 236.14,-21.44 236.14,-21.44 C236.14,-21.44 235.68,-16.35 235.68,-16.35 C235.68,-16.35 233.15,-16.15 233.15,-16.15 C233.15,-16.15 233.15,-13.23 233.15,-13.23 C233.15,-13.23 235.48,-13.23 235.48,-13.23 C235.48,-13.23 235.48,-5.55 235.48,-5.55 C235.48,-1.99 236.87,0.4 240.69,0.4z M247.36,6.68 C250.95,6.68 252.68,4.42 254.04,0.7 C254.04,0.7 259.92,-16.35 259.92,-16.35 C259.92,-16.35 256.13,-16.35 256.13,-16.35 C256.13,-16.35 253.74,-8.41 253.74,-8.41 C253.34,-6.91 252.91,-5.32 252.51,-3.79 C252.51,-3.79 252.38,-3.79 252.38,-3.79 C251.91,-5.35 251.45,-6.98 250.95,-8.41 C250.95,-8.41 248.19,-16.35 248.19,-16.35 C248.19,-16.35 244.2,-16.35 244.2,-16.35 C244.2,-16.35 250.62,-0.23 250.62,-0.23 C250.62,-0.23 250.32,0.8 250.32,0.8 C249.79,2.39 248.79,3.52 247.09,3.52 C246.73,3.52 246.43,3.49 245.96,3.36 C245.96,3.36 245.2,6.31 245.2,6.31 C245.83,6.55 246.46,6.68 247.36,6.68z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(16,47,37)"
                      font-size="43.31787109375"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Search Results"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M11.95,0.52 C18.41,0.52 22.25,-3.36 22.25,-7.98 C22.25,-12.13 19.89,-14.27 16.49,-15.7 C16.49,-15.7 12.65,-17.28 12.65,-17.28 C10.3,-18.28 8.16,-19.06 8.16,-21.25 C8.16,-23.3 9.86,-24.52 12.52,-24.52 C14.7,-24.52 16.8,-23.64 18.58,-22.12 C18.58,-22.12 21.38,-25.52 21.38,-25.52 C19.15,-27.66 15.97,-29.05 12.52,-29.05 C6.94,-29.05 2.92,-25.52 2.92,-20.94 C2.92,-16.8 5.85,-14.57 8.68,-13.39 C8.68,-13.39 12.56,-11.69 12.56,-11.69 C15.14,-10.6 16.97,-9.86 16.97,-7.59 C16.97,-5.41 15.22,-3.97 12.08,-3.97 C9.34,-3.97 6.5,-5.1 4.45,-7.07 C4.45,-7.07 1.66,-3.66 1.66,-3.66 C4.36,-0.92 8.03,0.52 11.95,0.52z M35.26,0.52 C38.05,0.52 40.67,-0.26 42.68,-1.74 C42.68,-1.74 40.93,-4.97 40.93,-4.97 C39.45,-4.01 37.79,-3.49 35.96,-3.49 C32.56,-3.49 30.29,-5.58 29.76,-9.16 C29.76,-9.16 43.29,-9.16 43.29,-9.16 C43.46,-9.95 43.55,-10.73 43.55,-11.78 C43.55,-17.8 40.41,-21.99 34.61,-21.99 C29.59,-21.99 24.7,-17.71 24.7,-10.73 C24.7,-3.58 29.33,0.52 35.26,0.52z M29.76,-13 C30.2,-16.23 32.29,-17.97 34.74,-17.97 C37.53,-17.97 39.01,-16.14 39.01,-13 C39.01,-13 29.76,-13 29.76,-13z M53.34,0.52 C55.87,0.52 57.96,-0.7 59.88,-2.36 C59.88,-2.36 60.06,-2.36 60.06,-2.36 C60.06,-2.36 60.49,0 60.49,0 C60.49,0 64.68,0 64.68,0 C64.68,0 64.68,-12.69 64.68,-12.69 C64.68,-18.67 61.98,-21.99 56.66,-21.99 C53.25,-21.99 50.2,-20.68 47.84,-19.2 C47.84,-19.2 49.68,-15.79 49.68,-15.79 C51.59,-16.93 53.6,-17.8 55.7,-17.8 C58.57,-17.8 59.45,-15.97 59.53,-13.79 C50.72,-12.83 46.97,-10.47 46.97,-5.76 C46.97,-2.01 49.59,0.52 53.34,0.52z M54.91,-3.58 C53.17,-3.58 51.94,-4.28 51.94,-6.11 C51.94,-8.29 53.69,-9.6 59.53,-10.3 C59.53,-10.3 59.53,-5.76 59.53,-5.76 C57.96,-4.28 56.66,-3.58 54.91,-3.58z M70.46,0 C70.46,0 75.65,0 75.65,0 C75.65,0 75.65,-13 75.65,-13 C76.91,-16.27 78.96,-17.41 80.67,-17.41 C81.54,-17.41 82.06,-17.32 82.72,-17.14 C82.72,-17.14 83.76,-21.55 83.76,-21.55 C83.11,-21.81 82.41,-21.99 81.32,-21.99 C79.05,-21.99 76.78,-20.42 75.21,-17.62 C75.21,-17.62 75.08,-17.62 75.08,-17.62 C75.08,-17.62 74.69,-21.46 74.69,-21.46 C74.69,-21.46 70.46,-21.46 70.46,-21.46 C70.46,-21.46 70.46,0 70.46,0z M95.73,0.52 C98.17,0.52 100.7,-0.31 102.75,-2.09 C102.75,-2.09 100.66,-5.37 100.66,-5.37 C99.44,-4.36 97.96,-3.66 96.25,-3.66 C92.98,-3.66 90.67,-6.46 90.67,-10.69 C90.67,-14.96 93.03,-17.76 96.43,-17.76 C97.78,-17.76 98.87,-17.32 99.96,-16.36 C99.96,-16.36 102.45,-19.59 102.45,-19.59 C100.88,-20.98 98.87,-21.99 96.17,-21.99 C90.41,-21.99 85.35,-17.84 85.35,-10.69 C85.35,-3.58 89.89,0.52 95.73,0.52z M105.67,0 C105.67,0 110.87,0 110.87,0 C110.87,0 110.87,-14.92 110.87,-14.92 C112.57,-16.66 113.79,-17.54 115.66,-17.54 C117.93,-17.54 118.94,-16.27 118.94,-12.78 C118.94,-12.78 118.94,0 118.94,0 C118.94,0 124.08,0 124.08,0 C124.08,0 124.08,-13.44 124.08,-13.44 C124.08,-18.85 122.08,-21.99 117.45,-21.99 C114.53,-21.99 112.39,-20.42 110.65,-18.76 C110.65,-18.76 110.87,-22.86 110.87,-22.86 C110.87,-22.86 110.87,-30.8 110.87,-30.8 C110.87,-30.8 105.67,-30.8 105.67,-30.8 C105.67,-30.8 105.67,0 105.67,0z M139.03,0 C139.03,0 144.22,0 144.22,0 C144.22,0 144.22,-11.08 144.22,-11.08 C144.22,-11.08 148.46,-11.08 148.46,-11.08 C148.46,-11.08 154.56,0 154.56,0 C154.56,0 160.36,0 160.36,0 C160.36,0 153.6,-11.87 153.6,-11.87 C157.01,-13.04 159.23,-15.7 159.23,-20.02 C159.23,-26.44 154.65,-28.53 148.67,-28.53 C148.67,-28.53 139.03,-28.53 139.03,-28.53 C139.03,-28.53 139.03,0 139.03,0z M144.22,-15.22 C144.22,-15.22 144.22,-24.39 144.22,-24.39 C144.22,-24.39 148.15,-24.39 148.15,-24.39 C152.03,-24.39 154.13,-23.25 154.13,-20.02 C154.13,-16.84 152.03,-15.22 148.15,-15.22 C148.15,-15.22 144.22,-15.22 144.22,-15.22z M173.44,0.52 C176.24,0.52 178.85,-0.26 180.86,-1.74 C180.86,-1.74 179.12,-4.97 179.12,-4.97 C177.63,-4.01 175.97,-3.49 174.14,-3.49 C170.74,-3.49 168.47,-5.58 167.95,-9.16 C167.95,-9.16 181.47,-9.16 181.47,-9.16 C181.65,-9.95 181.73,-10.73 181.73,-11.78 C181.73,-17.8 178.59,-21.99 172.79,-21.99 C167.77,-21.99 162.89,-17.71 162.89,-10.73 C162.89,-3.58 167.51,0.52 173.44,0.52z M167.95,-13 C168.38,-16.23 170.48,-17.97 172.92,-17.97 C175.71,-17.97 177.2,-16.14 177.2,-13 C177.2,-13 167.95,-13 167.95,-13z M192.31,0.52 C197.76,0.52 200.73,-2.44 200.73,-6.15 C200.73,-9.86 197.81,-11.56 194.49,-12.69 C191.79,-13.61 190.26,-14.22 190.26,-15.79 C190.26,-17.06 191.22,-18.1 193.36,-18.1 C195.06,-18.1 196.63,-17.58 198.16,-16.45 C198.16,-16.45 200.38,-19.37 200.38,-19.37 C198.63,-20.9 196.15,-21.99 193.23,-21.99 C188.43,-21.99 185.37,-19.28 185.37,-15.53 C185.37,-12.13 188.25,-10.34 191.35,-9.2 C193.75,-8.33 195.84,-7.63 195.84,-5.85 C195.84,-4.41 194.75,-3.36 192.48,-3.36 C190.3,-3.36 188.34,-4.01 186.46,-5.54 C186.46,-5.54 184.19,-2.62 184.19,-2.62 C186.29,-0.61 189.34,0.52 192.31,0.52z M211.37,0.52 C214.34,0.52 216.39,-0.92 218.26,-3.14 C218.26,-3.14 218.39,-3.14 218.39,-3.14 C218.39,-3.14 218.79,0 218.79,0 C218.79,0 223.02,0 223.02,0 C223.02,0 223.02,-21.46 223.02,-21.46 C223.02,-21.46 217.87,-21.46 217.87,-21.46 C217.87,-21.46 217.87,-6.81 217.87,-6.81 C216.3,-4.76 215.08,-3.88 213.2,-3.88 C210.94,-3.88 209.93,-5.19 209.93,-8.68 C209.93,-8.68 209.93,-21.46 209.93,-21.46 C209.93,-21.46 204.78,-21.46 204.78,-21.46 C204.78,-21.46 204.78,-8.03 204.78,-8.03 C204.78,-2.62 206.79,0.52 211.37,0.52z M234.15,0.52 C235.37,0.52 236.24,0.35 236.85,0.04 C236.85,0.04 236.24,-3.75 236.24,-3.75 C235.89,-3.66 235.72,-3.66 235.46,-3.66 C234.93,-3.66 234.36,-4.1 234.36,-5.37 C234.36,-5.37 234.36,-30.8 234.36,-30.8 C234.36,-30.8 229.17,-30.8 229.17,-30.8 C229.17,-30.8 229.17,-5.63 229.17,-5.63 C229.17,-1.83 230.53,0.52 234.15,0.52z M248.59,0.52 C250.34,0.52 251.91,0.13 253.04,-0.39 C253.04,-0.39 252.12,-4.01 252.12,-4.01 C251.38,-3.71 250.64,-3.58 249.9,-3.58 C247.89,-3.58 246.89,-4.8 246.89,-7.29 C246.89,-7.29 246.89,-17.36 246.89,-17.36 C246.89,-17.36 252.34,-17.36 252.34,-17.36 C252.34,-17.36 252.34,-21.46 252.34,-21.46 C252.34,-21.46 246.89,-21.46 246.89,-21.46 C246.89,-21.46 246.89,-28.14 246.89,-28.14 C246.89,-28.14 242.61,-28.14 242.61,-28.14 C242.61,-28.14 242,-21.46 242,-21.46 C242,-21.46 238.69,-21.2 238.69,-21.2 C238.69,-21.2 238.69,-17.36 238.69,-17.36 C238.69,-17.36 241.74,-17.36 241.74,-17.36 C241.74,-17.36 241.74,-7.29 241.74,-7.29 C241.74,-2.62 243.57,0.52 248.59,0.52z M261.83,0.52 C267.29,0.52 270.25,-2.44 270.25,-6.15 C270.25,-9.86 267.33,-11.56 264.02,-12.69 C261.31,-13.61 259.78,-14.22 259.78,-15.79 C259.78,-17.06 260.74,-18.1 262.88,-18.1 C264.58,-18.1 266.15,-17.58 267.68,-16.45 C267.68,-16.45 269.9,-19.37 269.9,-19.37 C268.16,-20.9 265.67,-21.99 262.75,-21.99 C257.95,-21.99 254.9,-19.28 254.9,-15.53 C254.9,-12.13 257.78,-10.34 260.87,-9.2 C263.27,-8.33 265.37,-7.63 265.37,-5.85 C265.37,-4.41 264.28,-3.36 262.01,-3.36 C259.83,-3.36 257.86,-4.01 255.99,-5.54 C255.99,-5.54 253.72,-2.62 253.72,-2.62 C255.81,-0.61 258.87,0.52 261.83,0.52z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_125)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_114)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="25.1816005706787"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Add Status"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.53,-8.77 C6.06,-10.52 6.54,-12.4 6.97,-14.23 C6.97,-14.23 7.08,-14.23 7.08,-14.23 C7.56,-12.43 8.04,-10.52 8.57,-8.77 C8.57,-8.77 9.13,-6.8 9.13,-6.8 C9.13,-6.8 4.97,-6.8 4.97,-6.8 C4.97,-6.8 5.53,-8.77 5.53,-8.77z M-0.05,0 C-0.05,0 3.02,0 3.02,0 C3.02,0 4.29,-4.44 4.29,-4.44 C4.29,-4.44 9.79,-4.44 9.79,-4.44 C9.79,-4.44 11.06,0 11.06,0 C11.06,0 14.25,0 14.25,0 C14.25,0 8.88,-16.59 8.88,-16.59 C8.88,-16.59 5.33,-16.59 5.33,-16.59 C5.33,-16.59 -0.05,0 -0.05,0z M20.21,0.3 C21.53,0.3 22.8,-0.43 23.71,-1.34 C23.71,-1.34 23.82,-1.34 23.82,-1.34 C23.82,-1.34 24.04,0 24.04,0 C24.04,0 26.48,0 26.48,0 C26.48,0 26.48,-17.9 26.48,-17.9 C26.48,-17.9 23.49,-17.9 23.49,-17.9 C23.49,-17.9 23.49,-13.42 23.49,-13.42 C23.49,-13.42 23.61,-11.41 23.61,-11.41 C22.65,-12.25 21.76,-12.78 20.37,-12.78 C17.63,-12.78 15.09,-10.3 15.09,-6.21 C15.09,-2.1 17.09,0.3 20.21,0.3z M20.95,-2.18 C19.17,-2.18 18.16,-3.58 18.16,-6.26 C18.16,-8.83 19.45,-10.3 21,-10.3 C21.84,-10.3 22.65,-10.04 23.49,-9.28 C23.49,-9.28 23.49,-3.55 23.49,-3.55 C22.7,-2.59 21.89,-2.18 20.95,-2.18z M34.44,0.3 C35.76,0.3 37.03,-0.43 37.94,-1.34 C37.94,-1.34 38.04,-1.34 38.04,-1.34 C38.04,-1.34 38.27,0 38.27,0 C38.27,0 40.71,0 40.71,0 C40.71,0 40.71,-17.9 40.71,-17.9 C40.71,-17.9 37.71,-17.9 37.71,-17.9 C37.71,-17.9 37.71,-13.42 37.71,-13.42 C37.71,-13.42 37.84,-11.41 37.84,-11.41 C36.88,-12.25 35.99,-12.78 34.59,-12.78 C31.86,-12.78 29.32,-10.3 29.32,-6.21 C29.32,-2.1 31.32,0.3 34.44,0.3z M35.18,-2.18 C33.4,-2.18 32.39,-3.58 32.39,-6.26 C32.39,-8.83 33.68,-10.3 35.23,-10.3 C36.06,-10.3 36.88,-10.04 37.71,-9.28 C37.71,-9.28 37.71,-3.55 37.71,-3.55 C36.93,-2.59 36.12,-2.18 35.18,-2.18z M54.44,0.3 C58.19,0.3 60.43,-1.95 60.43,-4.64 C60.43,-7.05 59.06,-8.29 57.08,-9.13 C57.08,-9.13 54.85,-10.04 54.85,-10.04 C53.48,-10.63 52.23,-11.08 52.23,-12.35 C52.23,-13.54 53.22,-14.25 54.77,-14.25 C56.04,-14.25 57.26,-13.75 58.3,-12.86 C58.3,-12.86 59.92,-14.84 59.92,-14.84 C58.63,-16.08 56.77,-16.89 54.77,-16.89 C51.52,-16.89 49.19,-14.84 49.19,-12.17 C49.19,-9.76 50.89,-8.47 52.54,-7.79 C52.54,-7.79 54.8,-6.8 54.8,-6.8 C56.29,-6.16 57.36,-5.73 57.36,-4.41 C57.36,-3.14 56.34,-2.31 54.52,-2.31 C52.92,-2.31 51.27,-2.97 50.08,-4.11 C50.08,-4.11 48.46,-2.13 48.46,-2.13 C50.03,-0.53 52.16,0.3 54.44,0.3z M67.1,0.3 C68.12,0.3 69.03,0.08 69.69,-0.23 C69.69,-0.23 69.16,-2.33 69.16,-2.33 C68.73,-2.16 68.29,-2.08 67.86,-2.08 C66.7,-2.08 66.11,-2.79 66.11,-4.24 C66.11,-4.24 66.11,-10.09 66.11,-10.09 C66.11,-10.09 69.28,-10.09 69.28,-10.09 C69.28,-10.09 69.28,-12.48 69.28,-12.48 C69.28,-12.48 66.11,-12.48 66.11,-12.48 C66.11,-12.48 66.11,-16.36 66.11,-16.36 C66.11,-16.36 63.63,-16.36 63.63,-16.36 C63.63,-16.36 63.27,-12.48 63.27,-12.48 C63.27,-12.48 61.35,-12.32 61.35,-12.32 C61.35,-12.32 61.35,-10.09 61.35,-10.09 C61.35,-10.09 63.12,-10.09 63.12,-10.09 C63.12,-10.09 63.12,-4.24 63.12,-4.24 C63.12,-1.52 64.19,0.3 67.1,0.3z M74.35,0.3 C75.82,0.3 77.03,-0.41 78.15,-1.37 C78.15,-1.37 78.25,-1.37 78.25,-1.37 C78.25,-1.37 78.5,0 78.5,0 C78.5,0 80.94,0 80.94,0 C80.94,0 80.94,-7.38 80.94,-7.38 C80.94,-10.85 79.37,-12.78 76.27,-12.78 C74.29,-12.78 72.52,-12.02 71.15,-11.16 C71.15,-11.16 72.21,-9.18 72.21,-9.18 C73.33,-9.84 74.5,-10.35 75.71,-10.35 C77.39,-10.35 77.9,-9.28 77.95,-8.01 C72.82,-7.46 70.64,-6.09 70.64,-3.35 C70.64,-1.17 72.16,0.3 74.35,0.3z M75.26,-2.08 C74.24,-2.08 73.53,-2.49 73.53,-3.55 C73.53,-4.82 74.55,-5.58 77.95,-5.98 C77.95,-5.98 77.95,-3.35 77.95,-3.35 C77.03,-2.49 76.27,-2.08 75.26,-2.08z M88.73,0.3 C89.75,0.3 90.66,0.08 91.32,-0.23 C91.32,-0.23 90.79,-2.33 90.79,-2.33 C90.36,-2.16 89.93,-2.08 89.49,-2.08 C88.33,-2.08 87.74,-2.79 87.74,-4.24 C87.74,-4.24 87.74,-10.09 87.74,-10.09 C87.74,-10.09 90.91,-10.09 90.91,-10.09 C90.91,-10.09 90.91,-12.48 90.91,-12.48 C90.91,-12.48 87.74,-12.48 87.74,-12.48 C87.74,-12.48 87.74,-16.36 87.74,-16.36 C87.74,-16.36 85.26,-16.36 85.26,-16.36 C85.26,-16.36 84.9,-12.48 84.9,-12.48 C84.9,-12.48 82.98,-12.32 82.98,-12.32 C82.98,-12.32 82.98,-10.09 82.98,-10.09 C82.98,-10.09 84.75,-10.09 84.75,-10.09 C84.75,-10.09 84.75,-4.24 84.75,-4.24 C84.75,-1.52 85.82,0.3 88.73,0.3z M96.64,0.3 C98.36,0.3 99.55,-0.53 100.64,-1.83 C100.64,-1.83 100.72,-1.83 100.72,-1.83 C100.72,-1.83 100.95,0 100.95,0 C100.95,0 103.41,0 103.41,0 C103.41,0 103.41,-12.48 103.41,-12.48 C103.41,-12.48 100.41,-12.48 100.41,-12.48 C100.41,-12.48 100.41,-3.96 100.41,-3.96 C99.5,-2.76 98.79,-2.26 97.7,-2.26 C96.38,-2.26 95.8,-3.02 95.8,-5.05 C95.8,-5.05 95.8,-12.48 95.8,-12.48 C95.8,-12.48 92.81,-12.48 92.81,-12.48 C92.81,-12.48 92.81,-4.67 92.81,-4.67 C92.81,-1.52 93.97,0.3 96.64,0.3z M110.48,0.3 C113.65,0.3 115.38,-1.42 115.38,-3.58 C115.38,-5.73 113.68,-6.72 111.75,-7.38 C110.18,-7.91 109.29,-8.27 109.29,-9.18 C109.29,-9.92 109.85,-10.52 111.09,-10.52 C112.08,-10.52 112.99,-10.22 113.88,-9.56 C113.88,-9.56 115.18,-11.26 115.18,-11.26 C114.16,-12.15 112.72,-12.78 111.02,-12.78 C108.23,-12.78 106.45,-11.21 106.45,-9.03 C106.45,-7.05 108.13,-6.01 109.93,-5.35 C111.32,-4.84 112.54,-4.44 112.54,-3.4 C112.54,-2.56 111.9,-1.95 110.59,-1.95 C109.32,-1.95 108.18,-2.33 107.09,-3.22 C107.09,-3.22 105.77,-1.52 105.77,-1.52 C106.98,-0.35 108.76,0.3 110.48,0.3z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_107)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(16,47,37)"
                      font-size="29.5969905853271"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Your List"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.72,0 C5.72,0 9.27,0 9.27,0 C9.27,0 9.27,-7.21 9.27,-7.21 C9.27,-7.21 15.14,-19.49 15.14,-19.49 C15.14,-19.49 11.45,-19.49 11.45,-19.49 C11.45,-19.49 9.36,-14.55 9.36,-14.55 C8.79,-13.12 8.2,-11.74 7.57,-10.25 C7.57,-10.25 7.45,-10.25 7.45,-10.25 C6.86,-11.74 6.29,-13.12 5.72,-14.55 C5.72,-14.55 3.64,-19.49 3.64,-19.49 C3.64,-19.49 -0.15,-19.49 -0.15,-19.49 C-0.15,-19.49 5.72,-7.21 5.72,-7.21 C5.72,-7.21 5.72,0 5.72,0z M23.08,0.36 C26.72,0.36 30.06,-2.44 30.06,-7.3 C30.06,-12.19 26.72,-15.02 23.08,-15.02 C19.42,-15.02 16.08,-12.19 16.08,-7.3 C16.08,-2.44 19.42,0.36 23.08,0.36z M23.08,-2.5 C20.97,-2.5 19.72,-4.41 19.72,-7.3 C19.72,-10.22 20.97,-12.13 23.08,-12.13 C25.2,-12.13 26.45,-10.22 26.45,-7.3 C26.45,-4.41 25.2,-2.5 23.08,-2.5z M37.63,0.36 C39.66,0.36 41.06,-0.63 42.34,-2.15 C42.34,-2.15 42.43,-2.15 42.43,-2.15 C42.43,-2.15 42.7,0 42.7,0 C42.7,0 45.59,0 45.59,0 C45.59,0 45.59,-14.66 45.59,-14.66 C45.59,-14.66 42.08,-14.66 42.08,-14.66 C42.08,-14.66 42.08,-4.65 42.08,-4.65 C41,-3.25 40.17,-2.65 38.89,-2.65 C37.34,-2.65 36.65,-3.55 36.65,-5.93 C36.65,-5.93 36.65,-14.66 36.65,-14.66 C36.65,-14.66 33.13,-14.66 33.13,-14.66 C33.13,-14.66 33.13,-5.48 33.13,-5.48 C33.13,-1.79 34.5,0.36 37.63,0.36z M49.8,0 C49.8,0 53.34,0 53.34,0 C53.34,0 53.34,-8.88 53.34,-8.88 C54.21,-11.12 55.61,-11.89 56.77,-11.89 C57.37,-11.89 57.73,-11.83 58.17,-11.71 C58.17,-11.71 58.89,-14.72 58.89,-14.72 C58.44,-14.9 57.96,-15.02 57.22,-15.02 C55.67,-15.02 54.12,-13.95 53.05,-12.04 C53.05,-12.04 52.96,-12.04 52.96,-12.04 C52.96,-12.04 52.69,-14.66 52.69,-14.66 C52.69,-14.66 49.8,-14.66 49.8,-14.66 C49.8,-14.66 49.8,0 49.8,0z M67.17,0 C67.17,0 78.77,0 78.77,0 C78.77,0 78.77,-2.98 78.77,-2.98 C78.77,-2.98 70.72,-2.98 70.72,-2.98 C70.72,-2.98 70.72,-19.49 70.72,-19.49 C70.72,-19.49 67.17,-19.49 67.17,-19.49 C67.17,-19.49 67.17,0 67.17,0z M81.73,0 C81.73,0 85.28,0 85.28,0 C85.28,0 85.28,-14.66 85.28,-14.66 C85.28,-14.66 81.73,-14.66 81.73,-14.66 C81.73,-14.66 81.73,0 81.73,0z M83.52,-17.17 C84.77,-17.17 85.64,-17.97 85.64,-19.17 C85.64,-20.36 84.77,-21.16 83.52,-21.16 C82.27,-21.16 81.4,-20.36 81.4,-19.17 C81.4,-17.97 82.27,-17.17 83.52,-17.17z M93.63,0.36 C97.36,0.36 99.38,-1.67 99.38,-4.2 C99.38,-6.74 97.39,-7.9 95.12,-8.67 C93.27,-9.3 92.23,-9.72 92.23,-10.79 C92.23,-11.65 92.88,-12.37 94.35,-12.37 C95.51,-12.37 96.58,-12.01 97.62,-11.24 C97.62,-11.24 99.14,-13.23 99.14,-13.23 C97.95,-14.28 96.25,-15.02 94.26,-15.02 C90.98,-15.02 88.89,-13.17 88.89,-10.61 C88.89,-8.29 90.86,-7.06 92.97,-6.29 C94.61,-5.69 96.04,-5.22 96.04,-3.99 C96.04,-3.01 95.3,-2.3 93.75,-2.3 C92.26,-2.3 90.92,-2.74 89.64,-3.79 C89.64,-3.79 88.09,-1.79 88.09,-1.79 C89.52,-0.42 91.6,0.36 93.63,0.36z M107.52,0.36 C108.71,0.36 109.78,0.09 110.56,-0.27 C110.56,-0.27 109.93,-2.74 109.93,-2.74 C109.43,-2.53 108.92,-2.44 108.41,-2.44 C107.04,-2.44 106.36,-3.28 106.36,-4.98 C106.36,-4.98 106.36,-11.86 106.36,-11.86 C106.36,-11.86 110.08,-11.86 110.08,-11.86 C110.08,-11.86 110.08,-14.66 110.08,-14.66 C110.08,-14.66 106.36,-14.66 106.36,-14.66 C106.36,-14.66 106.36,-19.23 106.36,-19.23 C106.36,-19.23 103.43,-19.23 103.43,-19.23 C103.43,-19.23 103.02,-14.66 103.02,-14.66 C103.02,-14.66 100.75,-14.49 100.75,-14.49 C100.75,-14.49 100.75,-11.86 100.75,-11.86 C100.75,-11.86 102.84,-11.86 102.84,-11.86 C102.84,-11.86 102.84,-4.98 102.84,-4.98 C102.84,-1.79 104.09,0.36 107.52,0.36z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="30.041130065918"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Researching"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.51,0 C2.51,0 6.11,0 6.11,0 C6.11,0 6.11,-7.68 6.11,-7.68 C6.11,-7.68 9.05,-7.68 9.05,-7.68 C9.05,-7.68 13.28,0 13.28,0 C13.28,0 17.31,0 17.31,0 C17.31,0 12.62,-8.23 12.62,-8.23 C14.98,-9.05 16.52,-10.89 16.52,-13.89 C16.52,-18.33 13.34,-19.79 9.2,-19.79 C9.2,-19.79 2.51,-19.79 2.51,-19.79 C2.51,-19.79 2.51,0 2.51,0z M6.11,-10.56 C6.11,-10.56 6.11,-16.91 6.11,-16.91 C6.11,-16.91 8.83,-16.91 8.83,-16.91 C11.53,-16.91 12.98,-16.13 12.98,-13.89 C12.98,-11.68 11.53,-10.56 8.83,-10.56 C8.83,-10.56 6.11,-10.56 6.11,-10.56z M26.38,0.36 C28.31,0.36 30.13,-0.18 31.52,-1.21 C31.52,-1.21 30.31,-3.45 30.31,-3.45 C29.28,-2.78 28.13,-2.42 26.86,-2.42 C24.5,-2.42 22.93,-3.87 22.56,-6.35 C22.56,-6.35 31.94,-6.35 31.94,-6.35 C32.06,-6.9 32.12,-7.44 32.12,-8.17 C32.12,-12.34 29.95,-15.25 25.92,-15.25 C22.44,-15.25 19.05,-12.28 19.05,-7.44 C19.05,-2.48 22.26,0.36 26.38,0.36z M22.56,-9.02 C22.87,-11.25 24.32,-12.46 26.01,-12.46 C27.95,-12.46 28.98,-11.19 28.98,-9.02 C28.98,-9.02 22.56,-9.02 22.56,-9.02z M39.46,0.36 C43.24,0.36 45.3,-1.69 45.3,-4.27 C45.3,-6.84 43.27,-8.02 40.97,-8.8 C39.1,-9.44 38.04,-9.86 38.04,-10.95 C38.04,-11.83 38.7,-12.56 40.18,-12.56 C41.36,-12.56 42.45,-12.19 43.51,-11.41 C43.51,-11.41 45.06,-13.43 45.06,-13.43 C43.85,-14.49 42.12,-15.25 40.09,-15.25 C36.77,-15.25 34.65,-13.37 34.65,-10.77 C34.65,-8.41 36.65,-7.17 38.79,-6.38 C40.46,-5.78 41.91,-5.29 41.91,-4.05 C41.91,-3.06 41.15,-2.33 39.58,-2.33 C38.07,-2.33 36.71,-2.78 35.4,-3.84 C35.4,-3.84 33.83,-1.82 33.83,-1.82 C35.28,-0.42 37.4,0.36 39.46,0.36z M54.61,0.36 C56.55,0.36 58.37,-0.18 59.76,-1.21 C59.76,-1.21 58.55,-3.45 58.55,-3.45 C57.52,-2.78 56.37,-2.42 55.1,-2.42 C52.74,-2.42 51.17,-3.87 50.8,-6.35 C50.8,-6.35 60.18,-6.35 60.18,-6.35 C60.3,-6.9 60.36,-7.44 60.36,-8.17 C60.36,-12.34 58.18,-15.25 54.16,-15.25 C50.68,-15.25 47.29,-12.28 47.29,-7.44 C47.29,-2.48 50.5,0.36 54.61,0.36z M50.8,-9.02 C51.11,-11.25 52.56,-12.46 54.25,-12.46 C56.19,-12.46 57.22,-11.19 57.22,-9.02 C57.22,-9.02 50.8,-9.02 50.8,-9.02z M67.15,0.36 C68.91,0.36 70.36,-0.48 71.69,-1.63 C71.69,-1.63 71.81,-1.63 71.81,-1.63 C71.81,-1.63 72.11,0 72.11,0 C72.11,0 75.02,0 75.02,0 C75.02,0 75.02,-8.8 75.02,-8.8 C75.02,-12.95 73.14,-15.25 69.45,-15.25 C67.09,-15.25 64.97,-14.34 63.34,-13.31 C63.34,-13.31 64.61,-10.95 64.61,-10.95 C65.94,-11.74 67.33,-12.34 68.79,-12.34 C70.78,-12.34 71.39,-11.07 71.45,-9.56 C65.34,-8.89 62.74,-7.26 62.74,-3.99 C62.74,-1.39 64.55,0.36 67.15,0.36z M68.24,-2.48 C67.03,-2.48 66.18,-2.96 66.18,-4.24 C66.18,-5.75 67.39,-6.66 71.45,-7.14 C71.45,-7.14 71.45,-3.99 71.45,-3.99 C70.36,-2.96 69.45,-2.48 68.24,-2.48z M79.02,0 C79.02,0 82.62,0 82.62,0 C82.62,0 82.62,-9.02 82.62,-9.02 C83.5,-11.28 84.92,-12.07 86.1,-12.07 C86.71,-12.07 87.07,-12.01 87.52,-11.89 C87.52,-11.89 88.25,-14.95 88.25,-14.95 C87.8,-15.13 87.31,-15.25 86.56,-15.25 C84.98,-15.25 83.41,-14.16 82.32,-12.22 C82.32,-12.22 82.23,-12.22 82.23,-12.22 C82.23,-12.22 81.96,-14.88 81.96,-14.88 C81.96,-14.88 79.02,-14.88 79.02,-14.88 C79.02,-14.88 79.02,0 79.02,0z M96.55,0.36 C98.25,0.36 100,-0.21 101.42,-1.45 C101.42,-1.45 99.97,-3.72 99.97,-3.72 C99.12,-3.03 98.09,-2.54 96.91,-2.54 C94.65,-2.54 93.04,-4.48 93.04,-7.41 C93.04,-10.38 94.68,-12.31 97.04,-12.31 C97.97,-12.31 98.73,-12.01 99.49,-11.35 C99.49,-11.35 101.21,-13.58 101.21,-13.58 C100.12,-14.55 98.73,-15.25 96.85,-15.25 C92.86,-15.25 89.35,-12.37 89.35,-7.41 C89.35,-2.48 92.5,0.36 96.55,0.36z M103.45,0 C103.45,0 107.05,0 107.05,0 C107.05,0 107.05,-10.35 107.05,-10.35 C108.23,-11.56 109.07,-12.16 110.38,-12.16 C111.95,-12.16 112.64,-11.28 112.64,-8.86 C112.64,-8.86 112.64,0 112.64,0 C112.64,0 116.21,0 116.21,0 C116.21,0 116.21,-9.32 116.21,-9.32 C116.21,-13.07 114.82,-15.25 111.62,-15.25 C109.59,-15.25 108.11,-14.16 106.9,-13.01 C106.9,-13.01 107.05,-15.85 107.05,-15.85 C107.05,-15.85 107.05,-21.36 107.05,-21.36 C107.05,-21.36 103.45,-21.36 103.45,-21.36 C103.45,-21.36 103.45,0 103.45,0z M120.24,0 C120.24,0 123.84,0 123.84,0 C123.84,0 123.84,-14.88 123.84,-14.88 C123.84,-14.88 120.24,-14.88 120.24,-14.88 C120.24,-14.88 120.24,0 120.24,0z M122.06,-17.43 C123.33,-17.43 124.2,-18.24 124.2,-19.45 C124.2,-20.66 123.33,-21.48 122.06,-21.48 C120.78,-21.48 119.91,-20.66 119.91,-19.45 C119.91,-18.24 120.78,-17.43 122.06,-17.43z M128.14,0 C128.14,0 131.74,0 131.74,0 C131.74,0 131.74,-10.35 131.74,-10.35 C132.92,-11.56 133.77,-12.16 135.07,-12.16 C136.64,-12.16 137.34,-11.28 137.34,-8.86 C137.34,-8.86 137.34,0 137.34,0 C137.34,0 140.91,0 140.91,0 C140.91,0 140.91,-9.32 140.91,-9.32 C140.91,-13.07 139.52,-15.25 136.31,-15.25 C134.28,-15.25 132.77,-14.16 131.44,-12.89 C131.44,-12.89 131.35,-12.89 131.35,-12.89 C131.35,-12.89 131.08,-14.88 131.08,-14.88 C131.08,-14.88 128.14,-14.88 128.14,-14.88 C128.14,-14.88 128.14,0 128.14,0z M150.2,6.57 C155.07,6.57 158.15,4.24 158.15,1.3 C158.15,-1.27 156.25,-2.39 152.71,-2.39 C152.71,-2.39 150.08,-2.39 150.08,-2.39 C148.29,-2.39 147.69,-2.87 147.69,-3.69 C147.69,-4.36 147.96,-4.72 148.38,-5.08 C149.05,-4.84 149.74,-4.72 150.38,-4.72 C153.53,-4.72 156.07,-6.47 156.07,-9.77 C156.07,-10.77 155.7,-11.68 155.25,-12.22 C155.25,-12.22 157.91,-12.22 157.91,-12.22 C157.91,-12.22 157.91,-14.88 157.91,-14.88 C157.91,-14.88 152.59,-14.88 152.59,-14.88 C151.98,-15.1 151.2,-15.25 150.38,-15.25 C147.26,-15.25 144.48,-13.31 144.48,-9.89 C144.48,-8.14 145.42,-6.72 146.45,-5.96 C146.45,-5.96 146.45,-5.84 146.45,-5.84 C145.57,-5.23 144.78,-4.24 144.78,-3.09 C144.78,-1.88 145.39,-1.09 146.14,-0.61 C146.14,-0.61 146.14,-0.48 146.14,-0.48 C144.78,0.36 144,1.42 144,2.69 C144,5.29 146.66,6.57 150.2,6.57z M150.38,-6.96 C148.99,-6.96 147.84,-8.02 147.84,-9.89 C147.84,-11.74 148.96,-12.77 150.38,-12.77 C151.8,-12.77 152.89,-11.74 152.89,-9.89 C152.89,-8.02 151.77,-6.96 150.38,-6.96z M150.74,4.24 C148.44,4.24 146.99,3.48 146.99,2.15 C146.99,1.45 147.32,0.82 148.11,0.21 C148.68,0.36 149.32,0.42 150.14,0.42 C150.14,0.42 152.13,0.42 152.13,0.42 C153.8,0.42 154.71,0.76 154.71,1.88 C154.71,3.15 153.1,4.24 150.74,4.24z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="30.041130065918"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Scheduled Tour"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.29,0.36 C12.77,0.36 15.43,-2.33 15.43,-5.54 C15.43,-8.41 13.8,-9.89 11.44,-10.89 C11.44,-10.89 8.77,-11.98 8.77,-11.98 C7.14,-12.68 5.66,-13.22 5.66,-14.73 C5.66,-16.16 6.84,-17 8.68,-17 C10.2,-17 11.65,-16.4 12.89,-15.34 C12.89,-15.34 14.82,-17.7 14.82,-17.7 C13.28,-19.18 11.07,-20.15 8.68,-20.15 C4.81,-20.15 2.03,-17.7 2.03,-14.52 C2.03,-11.65 4.05,-10.1 6.02,-9.29 C6.02,-9.29 8.71,-8.11 8.71,-8.11 C10.5,-7.35 11.77,-6.84 11.77,-5.26 C11.77,-3.75 10.56,-2.75 8.38,-2.75 C6.47,-2.75 4.51,-3.54 3.09,-4.9 C3.09,-4.9 1.15,-2.54 1.15,-2.54 C3.03,-0.64 5.57,0.36 8.29,0.36z M24.33,0.36 C26.03,0.36 27.78,-0.21 29.2,-1.45 C29.2,-1.45 27.75,-3.72 27.75,-3.72 C26.9,-3.03 25.88,-2.54 24.7,-2.54 C22.43,-2.54 20.82,-4.48 20.82,-7.41 C20.82,-10.38 22.46,-12.31 24.82,-12.31 C25.75,-12.31 26.51,-12.01 27.27,-11.35 C27.27,-11.35 28.99,-13.58 28.99,-13.58 C27.9,-14.55 26.51,-15.25 24.63,-15.25 C20.64,-15.25 17.13,-12.37 17.13,-7.41 C17.13,-2.48 20.28,0.36 24.33,0.36z M31.23,0 C31.23,0 34.83,0 34.83,0 C34.83,0 34.83,-10.35 34.83,-10.35 C36.01,-11.56 36.86,-12.16 38.16,-12.16 C39.73,-12.16 40.43,-11.28 40.43,-8.86 C40.43,-8.86 40.43,0 40.43,0 C40.43,0 44,0 44,0 C44,0 44,-9.32 44,-9.32 C44,-13.07 42.6,-15.25 39.4,-15.25 C37.37,-15.25 35.89,-14.16 34.68,-13.01 C34.68,-13.01 34.83,-15.85 34.83,-15.85 C34.83,-15.85 34.83,-21.36 34.83,-21.36 C34.83,-21.36 31.23,-21.36 31.23,-21.36 C31.23,-21.36 31.23,0 31.23,0z M54.37,0.36 C56.31,0.36 58.13,-0.18 59.52,-1.21 C59.52,-1.21 58.31,-3.45 58.31,-3.45 C57.28,-2.78 56.13,-2.42 54.86,-2.42 C52.5,-2.42 50.93,-3.87 50.56,-6.35 C50.56,-6.35 59.94,-6.35 59.94,-6.35 C60.06,-6.9 60.12,-7.44 60.12,-8.17 C60.12,-12.34 57.94,-15.25 53.92,-15.25 C50.44,-15.25 47.05,-12.28 47.05,-7.44 C47.05,-2.48 50.26,0.36 54.37,0.36z M50.56,-9.02 C50.86,-11.25 52.32,-12.46 54.01,-12.46 C55.95,-12.46 56.98,-11.19 56.98,-9.02 C56.98,-9.02 50.56,-9.02 50.56,-9.02z M68.52,0.36 C70.09,0.36 71.6,-0.51 72.69,-1.6 C72.69,-1.6 72.81,-1.6 72.81,-1.6 C72.81,-1.6 73.08,0 73.08,0 C73.08,0 75.99,0 75.99,0 C75.99,0 75.99,-21.36 75.99,-21.36 C75.99,-21.36 72.42,-21.36 72.42,-21.36 C72.42,-21.36 72.42,-16 72.42,-16 C72.42,-16 72.57,-13.61 72.57,-13.61 C71.42,-14.61 70.36,-15.25 68.7,-15.25 C65.43,-15.25 62.4,-12.28 62.4,-7.41 C62.4,-2.51 64.79,0.36 68.52,0.36z M69.39,-2.6 C67.28,-2.6 66.07,-4.27 66.07,-7.47 C66.07,-10.53 67.61,-12.28 69.45,-12.28 C70.45,-12.28 71.42,-11.98 72.42,-11.07 C72.42,-11.07 72.42,-4.24 72.42,-4.24 C71.48,-3.09 70.51,-2.6 69.39,-2.6z M84.67,0.36 C86.73,0.36 88.15,-0.64 89.45,-2.18 C89.45,-2.18 89.54,-2.18 89.54,-2.18 C89.54,-2.18 89.82,0 89.82,0 C89.82,0 92.75,0 92.75,0 C92.75,0 92.75,-14.88 92.75,-14.88 C92.75,-14.88 89.18,-14.88 89.18,-14.88 C89.18,-14.88 89.18,-4.72 89.18,-4.72 C88.09,-3.3 87.24,-2.69 85.94,-2.69 C84.37,-2.69 83.67,-3.6 83.67,-6.02 C83.67,-6.02 83.67,-14.88 83.67,-14.88 C83.67,-14.88 80.1,-14.88 80.1,-14.88 C80.1,-14.88 80.1,-5.57 80.1,-5.57 C80.1,-1.82 81.5,0.36 84.67,0.36z M100.47,0.36 C101.31,0.36 101.92,0.24 102.34,0.03 C102.34,0.03 101.92,-2.6 101.92,-2.6 C101.68,-2.54 101.56,-2.54 101.37,-2.54 C101.01,-2.54 100.62,-2.84 100.62,-3.72 C100.62,-3.72 100.62,-21.36 100.62,-21.36 C100.62,-21.36 97.02,-21.36 97.02,-21.36 C97.02,-21.36 97.02,-3.9 97.02,-3.9 C97.02,-1.27 97.96,0.36 100.47,0.36z M111.54,0.36 C113.48,0.36 115.29,-0.18 116.69,-1.21 C116.69,-1.21 115.48,-3.45 115.48,-3.45 C114.45,-2.78 113.3,-2.42 112.03,-2.42 C109.67,-2.42 108.09,-3.87 107.73,-6.35 C107.73,-6.35 117.11,-6.35 117.11,-6.35 C117.23,-6.9 117.29,-7.44 117.29,-8.17 C117.29,-12.34 115.11,-15.25 111.09,-15.25 C107.61,-15.25 104.22,-12.28 104.22,-7.44 C104.22,-2.48 107.43,0.36 111.54,0.36z M107.73,-9.02 C108.03,-11.25 109.49,-12.46 111.18,-12.46 C113.12,-12.46 114.14,-11.19 114.14,-9.02 C114.14,-9.02 107.73,-9.02 107.73,-9.02z M125.68,0.36 C127.26,0.36 128.77,-0.51 129.86,-1.6 C129.86,-1.6 129.98,-1.6 129.98,-1.6 C129.98,-1.6 130.25,0 130.25,0 C130.25,0 133.16,0 133.16,0 C133.16,0 133.16,-21.36 133.16,-21.36 C133.16,-21.36 129.59,-21.36 129.59,-21.36 C129.59,-21.36 129.59,-16 129.59,-16 C129.59,-16 129.74,-13.61 129.74,-13.61 C128.59,-14.61 127.53,-15.25 125.87,-15.25 C122.6,-15.25 119.57,-12.28 119.57,-7.41 C119.57,-2.51 121.96,0.36 125.68,0.36z M126.56,-2.6 C124.44,-2.6 123.23,-4.27 123.23,-7.47 C123.23,-10.53 124.78,-12.28 126.62,-12.28 C127.62,-12.28 128.59,-11.98 129.59,-11.07 C129.59,-11.07 129.59,-4.24 129.59,-4.24 C128.65,-3.09 127.68,-2.6 126.56,-2.6z M147.73,0 C147.73,0 151.33,0 151.33,0 C151.33,0 151.33,-16.76 151.33,-16.76 C151.33,-16.76 157.02,-16.76 157.02,-16.76 C157.02,-16.76 157.02,-19.79 157.02,-19.79 C157.02,-19.79 142.04,-19.79 142.04,-19.79 C142.04,-19.79 142.04,-16.76 142.04,-16.76 C142.04,-16.76 147.73,-16.76 147.73,-16.76 C147.73,-16.76 147.73,0 147.73,0z M166.01,0.36 C169.7,0.36 173.08,-2.48 173.08,-7.41 C173.08,-12.37 169.7,-15.25 166.01,-15.25 C162.28,-15.25 158.9,-12.37 158.9,-7.41 C158.9,-2.48 162.28,0.36 166.01,0.36z M166.01,-2.54 C163.86,-2.54 162.59,-4.48 162.59,-7.41 C162.59,-10.38 163.86,-12.31 166.01,-12.31 C168.15,-12.31 169.42,-10.38 169.42,-7.41 C169.42,-4.48 168.15,-2.54 166.01,-2.54z M180.77,0.36 C182.83,0.36 184.25,-0.64 185.55,-2.18 C185.55,-2.18 185.64,-2.18 185.64,-2.18 C185.64,-2.18 185.92,0 185.92,0 C185.92,0 188.85,0 188.85,0 C188.85,0 188.85,-14.88 188.85,-14.88 C188.85,-14.88 185.28,-14.88 185.28,-14.88 C185.28,-14.88 185.28,-4.72 185.28,-4.72 C184.19,-3.3 183.35,-2.69 182.04,-2.69 C180.47,-2.69 179.78,-3.6 179.78,-6.02 C179.78,-6.02 179.78,-14.88 179.78,-14.88 C179.78,-14.88 176.21,-14.88 176.21,-14.88 C176.21,-14.88 176.21,-5.57 176.21,-5.57 C176.21,-1.82 177.6,0.36 180.77,0.36z M193.12,0 C193.12,0 196.72,0 196.72,0 C196.72,0 196.72,-9.02 196.72,-9.02 C197.6,-11.28 199.02,-12.07 200.2,-12.07 C200.8,-12.07 201.17,-12.01 201.62,-11.89 C201.62,-11.89 202.35,-14.95 202.35,-14.95 C201.89,-15.13 201.41,-15.25 200.65,-15.25 C199.08,-15.25 197.51,-14.16 196.42,-12.22 C196.42,-12.22 196.33,-12.22 196.33,-12.22 C196.33,-12.22 196.05,-14.88 196.05,-14.88 C196.05,-14.88 193.12,-14.88 193.12,-14.88 C193.12,-14.88 193.12,0 193.12,0z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="30.041130065918"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Started Application"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M8.29,0.36 C12.77,0.36 15.43,-2.33 15.43,-5.54 C15.43,-8.41 13.8,-9.89 11.44,-10.89 C11.44,-10.89 8.77,-11.98 8.77,-11.98 C7.14,-12.68 5.66,-13.22 5.66,-14.73 C5.66,-16.16 6.84,-17 8.68,-17 C10.2,-17 11.65,-16.4 12.89,-15.34 C12.89,-15.34 14.82,-17.7 14.82,-17.7 C13.28,-19.18 11.07,-20.15 8.68,-20.15 C4.81,-20.15 2.03,-17.7 2.03,-14.52 C2.03,-11.65 4.05,-10.1 6.02,-9.29 C6.02,-9.29 8.71,-8.11 8.71,-8.11 C10.5,-7.35 11.77,-6.84 11.77,-5.26 C11.77,-3.75 10.56,-2.75 8.38,-2.75 C6.47,-2.75 4.51,-3.54 3.09,-4.9 C3.09,-4.9 1.15,-2.54 1.15,-2.54 C3.03,-0.64 5.57,0.36 8.29,0.36z M23.39,0.36 C24.6,0.36 25.69,0.09 26.48,-0.27 C26.48,-0.27 25.84,-2.78 25.84,-2.78 C25.33,-2.57 24.82,-2.48 24.3,-2.48 C22.91,-2.48 22.21,-3.33 22.21,-5.05 C22.21,-5.05 22.21,-12.04 22.21,-12.04 C22.21,-12.04 26,-12.04 26,-12.04 C26,-12.04 26,-14.88 26,-14.88 C26,-14.88 22.21,-14.88 22.21,-14.88 C22.21,-14.88 22.21,-19.51 22.21,-19.51 C22.21,-19.51 19.25,-19.51 19.25,-19.51 C19.25,-19.51 18.83,-14.88 18.83,-14.88 C18.83,-14.88 16.53,-14.7 16.53,-14.7 C16.53,-14.7 16.53,-12.04 16.53,-12.04 C16.53,-12.04 18.64,-12.04 18.64,-12.04 C18.64,-12.04 18.64,-5.05 18.64,-5.05 C18.64,-1.82 19.92,0.36 23.39,0.36z M32.03,0.36 C33.79,0.36 35.24,-0.48 36.57,-1.63 C36.57,-1.63 36.69,-1.63 36.69,-1.63 C36.69,-1.63 37,0 37,0 C37,0 39.9,0 39.9,0 C39.9,0 39.9,-8.8 39.9,-8.8 C39.9,-12.95 38.02,-15.25 34.33,-15.25 C31.97,-15.25 29.86,-14.34 28.22,-13.31 C28.22,-13.31 29.49,-10.95 29.49,-10.95 C30.82,-11.74 32.22,-12.34 33.67,-12.34 C35.67,-12.34 36.27,-11.07 36.33,-9.56 C30.22,-8.89 27.62,-7.26 27.62,-3.99 C27.62,-1.39 29.43,0.36 32.03,0.36z M33.12,-2.48 C31.91,-2.48 31.07,-2.96 31.07,-4.24 C31.07,-5.75 32.28,-6.66 36.33,-7.14 C36.33,-7.14 36.33,-3.99 36.33,-3.99 C35.24,-2.96 34.33,-2.48 33.12,-2.48z M43.91,0 C43.91,0 47.51,0 47.51,0 C47.51,0 47.51,-9.02 47.51,-9.02 C48.38,-11.28 49.8,-12.07 50.98,-12.07 C51.59,-12.07 51.95,-12.01 52.41,-11.89 C52.41,-11.89 53.13,-14.95 53.13,-14.95 C52.68,-15.13 52.19,-15.25 51.44,-15.25 C49.87,-15.25 48.29,-14.16 47.2,-12.22 C47.2,-12.22 47.11,-12.22 47.11,-12.22 C47.11,-12.22 46.84,-14.88 46.84,-14.88 C46.84,-14.88 43.91,-14.88 43.91,-14.88 C43.91,-14.88 43.91,0 43.91,0z M60.5,0.36 C61.71,0.36 62.79,0.09 63.58,-0.27 C63.58,-0.27 62.95,-2.78 62.95,-2.78 C62.43,-2.57 61.92,-2.48 61.4,-2.48 C60.01,-2.48 59.32,-3.33 59.32,-5.05 C59.32,-5.05 59.32,-12.04 59.32,-12.04 C59.32,-12.04 63.1,-12.04 63.1,-12.04 C63.1,-12.04 63.1,-14.88 63.1,-14.88 C63.1,-14.88 59.32,-14.88 59.32,-14.88 C59.32,-14.88 59.32,-19.51 59.32,-19.51 C59.32,-19.51 56.35,-19.51 56.35,-19.51 C56.35,-19.51 55.93,-14.88 55.93,-14.88 C55.93,-14.88 53.63,-14.7 53.63,-14.7 C53.63,-14.7 53.63,-12.04 53.63,-12.04 C53.63,-12.04 55.75,-12.04 55.75,-12.04 C55.75,-12.04 55.75,-5.05 55.75,-5.05 C55.75,-1.82 57.02,0.36 60.5,0.36z M71.86,0.36 C73.79,0.36 75.61,-0.18 77,-1.21 C77,-1.21 75.79,-3.45 75.79,-3.45 C74.76,-2.78 73.61,-2.42 72.34,-2.42 C69.98,-2.42 68.41,-3.87 68.05,-6.35 C68.05,-6.35 77.43,-6.35 77.43,-6.35 C77.55,-6.9 77.61,-7.44 77.61,-8.17 C77.61,-12.34 75.43,-15.25 71.4,-15.25 C67.93,-15.25 64.54,-12.28 64.54,-7.44 C64.54,-2.48 67.74,0.36 71.86,0.36z M68.05,-9.02 C68.35,-11.25 69.8,-12.46 71.5,-12.46 C73.43,-12.46 74.46,-11.19 74.46,-9.02 C74.46,-9.02 68.05,-9.02 68.05,-9.02z M86,0.36 C87.57,0.36 89.09,-0.51 90.17,-1.6 C90.17,-1.6 90.3,-1.6 90.3,-1.6 C90.3,-1.6 90.57,0 90.57,0 C90.57,0 93.47,0 93.47,0 C93.47,0 93.47,-21.36 93.47,-21.36 C93.47,-21.36 89.9,-21.36 89.9,-21.36 C89.9,-21.36 89.9,-16 89.9,-16 C89.9,-16 90.05,-13.61 90.05,-13.61 C88.9,-14.61 87.85,-15.25 86.18,-15.25 C82.91,-15.25 79.89,-12.28 79.89,-7.41 C79.89,-2.51 82.28,0.36 86,0.36z M86.88,-2.6 C84.76,-2.6 83.55,-4.27 83.55,-7.47 C83.55,-10.53 85.09,-12.28 86.94,-12.28 C87.94,-12.28 88.9,-11.98 89.9,-11.07 C89.9,-11.07 89.9,-4.24 89.9,-4.24 C88.96,-3.09 88,-2.6 86.88,-2.6z M108.16,-10.47 C108.8,-12.56 109.37,-14.79 109.89,-16.97 C109.89,-16.97 110.01,-16.97 110.01,-16.97 C110.58,-14.82 111.16,-12.56 111.79,-10.47 C111.79,-10.47 112.46,-8.11 112.46,-8.11 C112.46,-8.11 107.5,-8.11 107.5,-8.11 C107.5,-8.11 108.16,-10.47 108.16,-10.47z M101.51,0 C101.51,0 105.17,0 105.17,0 C105.17,0 106.68,-5.29 106.68,-5.29 C106.68,-5.29 113.25,-5.29 113.25,-5.29 C113.25,-5.29 114.76,0 114.76,0 C114.76,0 118.57,0 118.57,0 C118.57,0 112.16,-19.79 112.16,-19.79 C112.16,-19.79 107.92,-19.79 107.92,-19.79 C107.92,-19.79 101.51,0 101.51,0z M120.45,5.84 C120.45,5.84 124.05,5.84 124.05,5.84 C124.05,5.84 124.05,1.21 124.05,1.21 C124.05,1.21 123.93,-1.27 123.93,-1.27 C125.11,-0.24 126.41,0.36 127.74,0.36 C131.04,0.36 134.06,-2.57 134.06,-7.65 C134.06,-12.25 131.92,-15.25 128.23,-15.25 C126.59,-15.25 125.02,-14.37 123.75,-13.31 C123.75,-13.31 123.66,-13.31 123.66,-13.31 C123.66,-13.31 123.38,-14.88 123.38,-14.88 C123.38,-14.88 120.45,-14.88 120.45,-14.88 C120.45,-14.88 120.45,5.84 120.45,5.84z M126.95,-2.6 C126.11,-2.6 125.08,-2.9 124.05,-3.78 C124.05,-3.78 124.05,-10.65 124.05,-10.65 C125.17,-11.77 126.17,-12.28 127.23,-12.28 C129.44,-12.28 130.4,-10.56 130.4,-7.62 C130.4,-4.3 128.89,-2.6 126.95,-2.6z M137.42,5.84 C137.42,5.84 141.02,5.84 141.02,5.84 C141.02,5.84 141.02,1.21 141.02,1.21 C141.02,1.21 140.9,-1.27 140.9,-1.27 C142.08,-0.24 143.38,0.36 144.71,0.36 C148.01,0.36 151.04,-2.57 151.04,-7.65 C151.04,-12.25 148.89,-15.25 145.2,-15.25 C143.57,-15.25 141.99,-14.37 140.72,-13.31 C140.72,-13.31 140.63,-13.31 140.63,-13.31 C140.63,-13.31 140.36,-14.88 140.36,-14.88 C140.36,-14.88 137.42,-14.88 137.42,-14.88 C137.42,-14.88 137.42,5.84 137.42,5.84z M143.93,-2.6 C143.08,-2.6 142.05,-2.9 141.02,-3.78 C141.02,-3.78 141.02,-10.65 141.02,-10.65 C142.14,-11.77 143.14,-12.28 144.2,-12.28 C146.41,-12.28 147.38,-10.56 147.38,-7.62 C147.38,-4.3 145.86,-2.6 143.93,-2.6z M157.85,0.36 C158.69,0.36 159.3,0.24 159.72,0.03 C159.72,0.03 159.3,-2.6 159.3,-2.6 C159.06,-2.54 158.93,-2.54 158.75,-2.54 C158.39,-2.54 158,-2.84 158,-3.72 C158,-3.72 158,-21.36 158,-21.36 C158,-21.36 154.4,-21.36 154.4,-21.36 C154.4,-21.36 154.4,-3.9 154.4,-3.9 C154.4,-1.27 155.33,0.36 157.85,0.36z M162.57,0 C162.57,0 166.17,0 166.17,0 C166.17,0 166.17,-14.88 166.17,-14.88 C166.17,-14.88 162.57,-14.88 162.57,-14.88 C162.57,-14.88 162.57,0 162.57,0z M164.38,-17.43 C165.65,-17.43 166.53,-18.24 166.53,-19.45 C166.53,-20.66 165.65,-21.48 164.38,-21.48 C163.11,-21.48 162.24,-20.66 162.24,-19.45 C162.24,-18.24 163.11,-17.43 164.38,-17.43z M176.7,0.36 C178.4,0.36 180.15,-0.21 181.57,-1.45 C181.57,-1.45 180.12,-3.72 180.12,-3.72 C179.27,-3.03 178.24,-2.54 177.06,-2.54 C174.79,-2.54 173.19,-4.48 173.19,-7.41 C173.19,-10.38 174.83,-12.31 177.18,-12.31 C178.12,-12.31 178.88,-12.01 179.64,-11.35 C179.64,-11.35 181.36,-13.58 181.36,-13.58 C180.27,-14.55 178.88,-15.25 177,-15.25 C173.01,-15.25 169.5,-12.37 169.5,-7.41 C169.5,-2.48 172.65,0.36 176.7,0.36z M187.23,0.36 C188.98,0.36 190.43,-0.48 191.77,-1.63 C191.77,-1.63 191.89,-1.63 191.89,-1.63 C191.89,-1.63 192.19,0 192.19,0 C192.19,0 195.09,0 195.09,0 C195.09,0 195.09,-8.8 195.09,-8.8 C195.09,-12.95 193.22,-15.25 189.53,-15.25 C187.17,-15.25 185.05,-14.34 183.42,-13.31 C183.42,-13.31 184.69,-10.95 184.69,-10.95 C186.02,-11.74 187.41,-12.34 188.86,-12.34 C190.86,-12.34 191.46,-11.07 191.52,-9.56 C185.41,-8.89 182.81,-7.26 182.81,-3.99 C182.81,-1.39 184.63,0.36 187.23,0.36z M188.32,-2.48 C187.11,-2.48 186.26,-2.96 186.26,-4.24 C186.26,-5.75 187.47,-6.66 191.52,-7.14 C191.52,-7.14 191.52,-3.99 191.52,-3.99 C190.43,-2.96 189.53,-2.48 188.32,-2.48z M204.39,0.36 C205.6,0.36 206.69,0.09 207.48,-0.27 C207.48,-0.27 206.84,-2.78 206.84,-2.78 C206.33,-2.57 205.81,-2.48 205.3,-2.48 C203.91,-2.48 203.21,-3.33 203.21,-5.05 C203.21,-5.05 203.21,-12.04 203.21,-12.04 C203.21,-12.04 206.99,-12.04 206.99,-12.04 C206.99,-12.04 206.99,-14.88 206.99,-14.88 C206.99,-14.88 203.21,-14.88 203.21,-14.88 C203.21,-14.88 203.21,-19.51 203.21,-19.51 C203.21,-19.51 200.25,-19.51 200.25,-19.51 C200.25,-19.51 199.82,-14.88 199.82,-14.88 C199.82,-14.88 197.52,-14.7 197.52,-14.7 C197.52,-14.7 197.52,-12.04 197.52,-12.04 C197.52,-12.04 199.64,-12.04 199.64,-12.04 C199.64,-12.04 199.64,-5.05 199.64,-5.05 C199.64,-1.82 200.91,0.36 204.39,0.36z M209.4,0 C209.4,0 213,0 213,0 C213,0 213,-14.88 213,-14.88 C213,-14.88 209.4,-14.88 209.4,-14.88 C209.4,-14.88 209.4,0 209.4,0z M211.22,-17.43 C212.49,-17.43 213.37,-18.24 213.37,-19.45 C213.37,-20.66 212.49,-21.48 211.22,-21.48 C209.95,-21.48 209.07,-20.66 209.07,-19.45 C209.07,-18.24 209.95,-17.43 211.22,-17.43z M223.44,0.36 C227.14,0.36 230.52,-2.48 230.52,-7.41 C230.52,-12.37 227.14,-15.25 223.44,-15.25 C219.72,-15.25 216.33,-12.37 216.33,-7.41 C216.33,-2.48 219.72,0.36 223.44,0.36z M223.44,-2.54 C221.3,-2.54 220.03,-4.48 220.03,-7.41 C220.03,-10.38 221.3,-12.31 223.44,-12.31 C225.59,-12.31 226.86,-10.38 226.86,-7.41 C226.86,-4.48 225.59,-2.54 223.44,-2.54z M233.8,0 C233.8,0 237.4,0 237.4,0 C237.4,0 237.4,-10.35 237.4,-10.35 C238.58,-11.56 239.42,-12.16 240.72,-12.16 C242.3,-12.16 242.99,-11.28 242.99,-8.86 C242.99,-8.86 242.99,0 242.99,0 C242.99,0 246.56,0 246.56,0 C246.56,0 246.56,-9.32 246.56,-9.32 C246.56,-13.07 245.17,-15.25 241.96,-15.25 C239.94,-15.25 238.42,-14.16 237.09,-12.89 C237.09,-12.89 237,-12.89 237,-12.89 C237,-12.89 236.73,-14.88 236.73,-14.88 C236.73,-14.88 233.8,-14.88 233.8,-14.88 C233.8,-14.88 233.8,0 233.8,0z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="30.041130065918"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Applied"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M6.6,-10.47 C7.23,-12.56 7.81,-14.79 8.32,-16.97 C8.32,-16.97 8.44,-16.97 8.44,-16.97 C9.02,-14.82 9.59,-12.56 10.23,-10.47 C10.23,-10.47 10.89,-8.11 10.89,-8.11 C10.89,-8.11 5.93,-8.11 5.93,-8.11 C5.93,-8.11 6.6,-10.47 6.6,-10.47z M-0.06,0 C-0.06,0 3.6,0 3.6,0 C3.6,0 5.11,-5.29 5.11,-5.29 C5.11,-5.29 11.68,-5.29 11.68,-5.29 C11.68,-5.29 13.19,0 13.19,0 C13.19,0 17,0 17,0 C17,0 10.59,-19.79 10.59,-19.79 C10.59,-19.79 6.35,-19.79 6.35,-19.79 C6.35,-19.79 -0.06,0 -0.06,0z M18.88,5.84 C18.88,5.84 22.48,5.84 22.48,5.84 C22.48,5.84 22.48,1.21 22.48,1.21 C22.48,1.21 22.36,-1.27 22.36,-1.27 C23.54,-0.24 24.84,0.36 26.17,0.36 C29.47,0.36 32.5,-2.57 32.5,-7.65 C32.5,-12.25 30.35,-15.25 26.66,-15.25 C25.02,-15.25 23.45,-14.37 22.18,-13.31 C22.18,-13.31 22.09,-13.31 22.09,-13.31 C22.09,-13.31 21.82,-14.88 21.82,-14.88 C21.82,-14.88 18.88,-14.88 18.88,-14.88 C18.88,-14.88 18.88,5.84 18.88,5.84z M25.39,-2.6 C24.54,-2.6 23.51,-2.9 22.48,-3.78 C22.48,-3.78 22.48,-10.65 22.48,-10.65 C23.6,-11.77 24.6,-12.28 25.66,-12.28 C27.87,-12.28 28.83,-10.56 28.83,-7.62 C28.83,-4.3 27.32,-2.6 25.39,-2.6z M35.85,5.84 C35.85,5.84 39.45,5.84 39.45,5.84 C39.45,5.84 39.45,1.21 39.45,1.21 C39.45,1.21 39.33,-1.27 39.33,-1.27 C40.51,-0.24 41.81,0.36 43.15,0.36 C46.44,0.36 49.47,-2.57 49.47,-7.65 C49.47,-12.25 47.32,-15.25 43.63,-15.25 C42,-15.25 40.42,-14.37 39.15,-13.31 C39.15,-13.31 39.06,-13.31 39.06,-13.31 C39.06,-13.31 38.79,-14.88 38.79,-14.88 C38.79,-14.88 35.85,-14.88 35.85,-14.88 C35.85,-14.88 35.85,5.84 35.85,5.84z M42.36,-2.6 C41.51,-2.6 40.48,-2.9 39.45,-3.78 C39.45,-3.78 39.45,-10.65 39.45,-10.65 C40.57,-11.77 41.57,-12.28 42.63,-12.28 C44.84,-12.28 45.81,-10.56 45.81,-7.62 C45.81,-4.3 44.3,-2.6 42.36,-2.6z M56.28,0.36 C57.12,0.36 57.73,0.24 58.15,0.03 C58.15,0.03 57.73,-2.6 57.73,-2.6 C57.49,-2.54 57.37,-2.54 57.18,-2.54 C56.82,-2.54 56.43,-2.84 56.43,-3.72 C56.43,-3.72 56.43,-21.36 56.43,-21.36 C56.43,-21.36 52.83,-21.36 52.83,-21.36 C52.83,-21.36 52.83,-3.9 52.83,-3.9 C52.83,-1.27 53.77,0.36 56.28,0.36z M61,0 C61,0 64.6,0 64.6,0 C64.6,0 64.6,-14.88 64.6,-14.88 C64.6,-14.88 61,-14.88 61,-14.88 C61,-14.88 61,0 61,0z M62.81,-17.43 C64.08,-17.43 64.96,-18.24 64.96,-19.45 C64.96,-20.66 64.08,-21.48 62.81,-21.48 C61.54,-21.48 60.67,-20.66 60.67,-19.45 C60.67,-18.24 61.54,-17.43 62.81,-17.43z M75.25,0.36 C77.19,0.36 79,-0.18 80.4,-1.21 C80.4,-1.21 79.19,-3.45 79.19,-3.45 C78.16,-2.78 77.01,-2.42 75.74,-2.42 C73.38,-2.42 71.8,-3.87 71.44,-6.35 C71.44,-6.35 80.82,-6.35 80.82,-6.35 C80.94,-6.9 81,-7.44 81,-8.17 C81,-12.34 78.82,-15.25 74.8,-15.25 C71.32,-15.25 67.93,-12.28 67.93,-7.44 C67.93,-2.48 71.14,0.36 75.25,0.36z M71.44,-9.02 C71.74,-11.25 73.2,-12.46 74.89,-12.46 C76.83,-12.46 77.85,-11.19 77.85,-9.02 C77.85,-9.02 71.44,-9.02 71.44,-9.02z M89.39,0.36 C90.97,0.36 92.48,-0.51 93.57,-1.6 C93.57,-1.6 93.69,-1.6 93.69,-1.6 C93.69,-1.6 93.96,0 93.96,0 C93.96,0 96.87,0 96.87,0 C96.87,0 96.87,-21.36 96.87,-21.36 C96.87,-21.36 93.3,-21.36 93.3,-21.36 C93.3,-21.36 93.3,-16 93.3,-16 C93.3,-16 93.45,-13.61 93.45,-13.61 C92.3,-14.61 91.24,-15.25 89.58,-15.25 C86.31,-15.25 83.28,-12.28 83.28,-7.41 C83.28,-2.51 85.67,0.36 89.39,0.36z M90.27,-2.6 C88.15,-2.6 86.94,-4.27 86.94,-7.47 C86.94,-10.53 88.49,-12.28 90.33,-12.28 C91.33,-12.28 92.3,-11.98 93.3,-11.07 C93.3,-11.07 93.3,-4.24 93.3,-4.24 C92.36,-3.09 91.39,-2.6 90.27,-2.6z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="30.041130065918"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Accepted"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M6.6,-10.47 C7.23,-12.56 7.81,-14.79 8.32,-16.97 C8.32,-16.97 8.44,-16.97 8.44,-16.97 C9.02,-14.82 9.59,-12.56 10.23,-10.47 C10.23,-10.47 10.89,-8.11 10.89,-8.11 C10.89,-8.11 5.93,-8.11 5.93,-8.11 C5.93,-8.11 6.6,-10.47 6.6,-10.47z M-0.06,0 C-0.06,0 3.6,0 3.6,0 C3.6,0 5.11,-5.29 5.11,-5.29 C5.11,-5.29 11.68,-5.29 11.68,-5.29 C11.68,-5.29 13.19,0 13.19,0 C13.19,0 17,0 17,0 C17,0 10.59,-19.79 10.59,-19.79 C10.59,-19.79 6.35,-19.79 6.35,-19.79 C6.35,-19.79 -0.06,0 -0.06,0z M25.11,0.36 C26.81,0.36 28.56,-0.21 29.98,-1.45 C29.98,-1.45 28.53,-3.72 28.53,-3.72 C27.69,-3.03 26.66,-2.54 25.48,-2.54 C23.21,-2.54 21.6,-4.48 21.6,-7.41 C21.6,-10.38 23.24,-12.31 25.6,-12.31 C26.54,-12.31 27.29,-12.01 28.05,-11.35 C28.05,-11.35 29.77,-13.58 29.77,-13.58 C28.68,-14.55 27.29,-15.25 25.42,-15.25 C21.42,-15.25 17.91,-12.37 17.91,-7.41 C17.91,-2.48 21.06,0.36 25.11,0.36z M38.24,0.36 C39.94,0.36 41.69,-0.21 43.11,-1.45 C43.11,-1.45 41.66,-3.72 41.66,-3.72 C40.81,-3.03 39.78,-2.54 38.6,-2.54 C36.34,-2.54 34.73,-4.48 34.73,-7.41 C34.73,-10.38 36.37,-12.31 38.73,-12.31 C39.66,-12.31 40.42,-12.01 41.18,-11.35 C41.18,-11.35 42.9,-13.58 42.9,-13.58 C41.81,-14.55 40.42,-15.25 38.54,-15.25 C34.55,-15.25 31.04,-12.37 31.04,-7.41 C31.04,-2.48 34.19,0.36 38.24,0.36z M51.49,0.36 C53.43,0.36 55.24,-0.18 56.63,-1.21 C56.63,-1.21 55.42,-3.45 55.42,-3.45 C54.39,-2.78 53.25,-2.42 51.97,-2.42 C49.61,-2.42 48.04,-3.87 47.68,-6.35 C47.68,-6.35 57.06,-6.35 57.06,-6.35 C57.18,-6.9 57.24,-7.44 57.24,-8.17 C57.24,-12.34 55.06,-15.25 51.04,-15.25 C47.56,-15.25 44.17,-12.28 44.17,-7.44 C44.17,-2.48 47.38,0.36 51.49,0.36z M47.68,-9.02 C47.98,-11.25 49.43,-12.46 51.13,-12.46 C53.06,-12.46 54.09,-11.19 54.09,-9.02 C54.09,-9.02 47.68,-9.02 47.68,-9.02z M60.4,5.84 C60.4,5.84 64,5.84 64,5.84 C64,5.84 64,1.21 64,1.21 C64,1.21 63.88,-1.27 63.88,-1.27 C65.06,-0.24 66.36,0.36 67.69,0.36 C70.99,0.36 74.01,-2.57 74.01,-7.65 C74.01,-12.25 71.86,-15.25 68.17,-15.25 C66.54,-15.25 64.97,-14.37 63.7,-13.31 C63.7,-13.31 63.6,-13.31 63.6,-13.31 C63.6,-13.31 63.33,-14.88 63.33,-14.88 C63.33,-14.88 60.4,-14.88 60.4,-14.88 C60.4,-14.88 60.4,5.84 60.4,5.84z M66.9,-2.6 C66.06,-2.6 65.03,-2.9 64,-3.78 C64,-3.78 64,-10.65 64,-10.65 C65.12,-11.77 66.12,-12.28 67.17,-12.28 C69.38,-12.28 70.35,-10.56 70.35,-7.62 C70.35,-4.3 68.84,-2.6 66.9,-2.6z M82.67,0.36 C83.88,0.36 84.97,0.09 85.75,-0.27 C85.75,-0.27 85.12,-2.78 85.12,-2.78 C84.6,-2.57 84.09,-2.48 83.57,-2.48 C82.18,-2.48 81.49,-3.33 81.49,-5.05 C81.49,-5.05 81.49,-12.04 81.49,-12.04 C81.49,-12.04 85.27,-12.04 85.27,-12.04 C85.27,-12.04 85.27,-14.88 85.27,-14.88 C85.27,-14.88 81.49,-14.88 81.49,-14.88 C81.49,-14.88 81.49,-19.51 81.49,-19.51 C81.49,-19.51 78.52,-19.51 78.52,-19.51 C78.52,-19.51 78.1,-14.88 78.1,-14.88 C78.1,-14.88 75.8,-14.7 75.8,-14.7 C75.8,-14.7 75.8,-12.04 75.8,-12.04 C75.8,-12.04 77.92,-12.04 77.92,-12.04 C77.92,-12.04 77.92,-5.05 77.92,-5.05 C77.92,-1.82 79.19,0.36 82.67,0.36z M94.03,0.36 C95.96,0.36 97.78,-0.18 99.17,-1.21 C99.17,-1.21 97.96,-3.45 97.96,-3.45 C96.93,-2.78 95.78,-2.42 94.51,-2.42 C92.15,-2.42 90.58,-3.87 90.22,-6.35 C90.22,-6.35 99.6,-6.35 99.6,-6.35 C99.72,-6.9 99.78,-7.44 99.78,-8.17 C99.78,-12.34 97.6,-15.25 93.57,-15.25 C90.1,-15.25 86.71,-12.28 86.71,-7.44 C86.71,-2.48 89.91,0.36 94.03,0.36z M90.22,-9.02 C90.52,-11.25 91.97,-12.46 93.67,-12.46 C95.6,-12.46 96.63,-11.19 96.63,-9.02 C96.63,-9.02 90.22,-9.02 90.22,-9.02z M108.17,0.36 C109.74,0.36 111.26,-0.51 112.35,-1.6 C112.35,-1.6 112.47,-1.6 112.47,-1.6 C112.47,-1.6 112.74,0 112.74,0 C112.74,0 115.64,0 115.64,0 C115.64,0 115.64,-21.36 115.64,-21.36 C115.64,-21.36 112.07,-21.36 112.07,-21.36 C112.07,-21.36 112.07,-16 112.07,-16 C112.07,-16 112.22,-13.61 112.22,-13.61 C111.07,-14.61 110.02,-15.25 108.35,-15.25 C105.08,-15.25 102.06,-12.28 102.06,-7.41 C102.06,-2.51 104.45,0.36 108.17,0.36z M109.05,-2.6 C106.93,-2.6 105.72,-4.27 105.72,-7.47 C105.72,-10.53 107.26,-12.28 109.11,-12.28 C110.11,-12.28 111.07,-11.98 112.07,-11.07 C112.07,-11.07 112.07,-4.24 112.07,-4.24 C111.14,-3.09 110.17,-2.6 109.05,-2.6z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="30.041130065918"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Clear Status"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M10.41,0.36 C12.95,0.36 15.01,-0.61 16.67,-2.51 C16.67,-2.51 14.73,-4.66 14.73,-4.66 C13.64,-3.45 12.28,-2.75 10.56,-2.75 C7.26,-2.75 5.17,-5.48 5.17,-9.92 C5.17,-14.34 7.47,-17 10.62,-17 C12.16,-17 13.34,-16.43 14.37,-15.43 C14.37,-15.43 16.28,-17.64 16.28,-17.64 C15.04,-19 13.04,-20.15 10.56,-20.15 C5.54,-20.15 1.48,-16.31 1.48,-9.83 C1.48,-3.27 5.45,0.36 10.41,0.36z M21.97,0.36 C22.82,0.36 23.42,0.24 23.85,0.03 C23.85,0.03 23.42,-2.6 23.42,-2.6 C23.18,-2.54 23.06,-2.54 22.88,-2.54 C22.51,-2.54 22.12,-2.84 22.12,-3.72 C22.12,-3.72 22.12,-21.36 22.12,-21.36 C22.12,-21.36 18.52,-21.36 18.52,-21.36 C18.52,-21.36 18.52,-3.9 18.52,-3.9 C18.52,-1.27 19.46,0.36 21.97,0.36z M33.05,0.36 C34.98,0.36 36.8,-0.18 38.19,-1.21 C38.19,-1.21 36.98,-3.45 36.98,-3.45 C35.95,-2.78 34.8,-2.42 33.53,-2.42 C31.17,-2.42 29.6,-3.87 29.23,-6.35 C29.23,-6.35 38.61,-6.35 38.61,-6.35 C38.73,-6.9 38.79,-7.44 38.79,-8.17 C38.79,-12.34 36.62,-15.25 32.59,-15.25 C29.11,-15.25 25.72,-12.28 25.72,-7.44 C25.72,-2.48 28.93,0.36 33.05,0.36z M29.23,-9.02 C29.54,-11.25 30.99,-12.46 32.68,-12.46 C34.62,-12.46 35.65,-11.19 35.65,-9.02 C35.65,-9.02 29.23,-9.02 29.23,-9.02z M45.58,0.36 C47.34,0.36 48.79,-0.48 50.12,-1.63 C50.12,-1.63 50.24,-1.63 50.24,-1.63 C50.24,-1.63 50.54,0 50.54,0 C50.54,0 53.45,0 53.45,0 C53.45,0 53.45,-8.8 53.45,-8.8 C53.45,-12.95 51.57,-15.25 47.88,-15.25 C45.52,-15.25 43.4,-14.34 41.77,-13.31 C41.77,-13.31 43.04,-10.95 43.04,-10.95 C44.37,-11.74 45.76,-12.34 47.22,-12.34 C49.21,-12.34 49.82,-11.07 49.88,-9.56 C43.77,-8.89 41.17,-7.26 41.17,-3.99 C41.17,-1.39 42.98,0.36 45.58,0.36z M46.67,-2.48 C45.46,-2.48 44.61,-2.96 44.61,-4.24 C44.61,-5.75 45.83,-6.66 49.88,-7.14 C49.88,-7.14 49.88,-3.99 49.88,-3.99 C48.79,-2.96 47.88,-2.48 46.67,-2.48z M57.45,0 C57.45,0 61.05,0 61.05,0 C61.05,0 61.05,-9.02 61.05,-9.02 C61.93,-11.28 63.35,-12.07 64.53,-12.07 C65.14,-12.07 65.5,-12.01 65.96,-11.89 C65.96,-11.89 66.68,-14.95 66.68,-14.95 C66.23,-15.13 65.74,-15.25 64.99,-15.25 C63.41,-15.25 61.84,-14.16 60.75,-12.22 C60.75,-12.22 60.66,-12.22 60.66,-12.22 C60.66,-12.22 60.39,-14.88 60.39,-14.88 C60.39,-14.88 57.45,-14.88 57.45,-14.88 C57.45,-14.88 57.45,0 57.45,0z M80.87,0.36 C85.35,0.36 88.01,-2.33 88.01,-5.54 C88.01,-8.41 86.38,-9.89 84.02,-10.89 C84.02,-10.89 81.35,-11.98 81.35,-11.98 C79.72,-12.68 78.24,-13.22 78.24,-14.73 C78.24,-16.16 79.42,-17 81.26,-17 C82.77,-17 84.23,-16.4 85.47,-15.34 C85.47,-15.34 87.4,-17.7 87.4,-17.7 C85.86,-19.18 83.65,-20.15 81.26,-20.15 C77.39,-20.15 74.61,-17.7 74.61,-14.52 C74.61,-11.65 76.63,-10.1 78.6,-9.29 C78.6,-9.29 81.29,-8.11 81.29,-8.11 C83.08,-7.35 84.35,-6.84 84.35,-5.26 C84.35,-3.75 83.14,-2.75 80.96,-2.75 C79.05,-2.75 77.09,-3.54 75.67,-4.9 C75.67,-4.9 73.73,-2.54 73.73,-2.54 C75.6,-0.64 78.15,0.36 80.87,0.36z M95.97,0.36 C97.18,0.36 98.27,0.09 99.06,-0.27 C99.06,-0.27 98.42,-2.78 98.42,-2.78 C97.91,-2.57 97.4,-2.48 96.88,-2.48 C95.49,-2.48 94.79,-3.33 94.79,-5.05 C94.79,-5.05 94.79,-12.04 94.79,-12.04 C94.79,-12.04 98.58,-12.04 98.58,-12.04 C98.58,-12.04 98.58,-14.88 98.58,-14.88 C98.58,-14.88 94.79,-14.88 94.79,-14.88 C94.79,-14.88 94.79,-19.51 94.79,-19.51 C94.79,-19.51 91.83,-19.51 91.83,-19.51 C91.83,-19.51 91.41,-14.88 91.41,-14.88 C91.41,-14.88 89.11,-14.7 89.11,-14.7 C89.11,-14.7 89.11,-12.04 89.11,-12.04 C89.11,-12.04 91.22,-12.04 91.22,-12.04 C91.22,-12.04 91.22,-5.05 91.22,-5.05 C91.22,-1.82 92.49,0.36 95.97,0.36z M104.61,0.36 C106.37,0.36 107.82,-0.48 109.15,-1.63 C109.15,-1.63 109.27,-1.63 109.27,-1.63 C109.27,-1.63 109.58,0 109.58,0 C109.58,0 112.48,0 112.48,0 C112.48,0 112.48,-8.8 112.48,-8.8 C112.48,-12.95 110.6,-15.25 106.91,-15.25 C104.55,-15.25 102.44,-14.34 100.8,-13.31 C100.8,-13.31 102.07,-10.95 102.07,-10.95 C103.4,-11.74 104.8,-12.34 106.25,-12.34 C108.24,-12.34 108.85,-11.07 108.91,-9.56 C102.8,-8.89 100.2,-7.26 100.2,-3.99 C100.2,-1.39 102.01,0.36 104.61,0.36z M105.7,-2.48 C104.49,-2.48 103.65,-2.96 103.65,-4.24 C103.65,-5.75 104.86,-6.66 108.91,-7.14 C108.91,-7.14 108.91,-3.99 108.91,-3.99 C107.82,-2.96 106.91,-2.48 105.7,-2.48z M121.78,0.36 C122.99,0.36 124.08,0.09 124.87,-0.27 C124.87,-0.27 124.23,-2.78 124.23,-2.78 C123.72,-2.57 123.2,-2.48 122.69,-2.48 C121.29,-2.48 120.6,-3.33 120.6,-5.05 C120.6,-5.05 120.6,-12.04 120.6,-12.04 C120.6,-12.04 124.38,-12.04 124.38,-12.04 C124.38,-12.04 124.38,-14.88 124.38,-14.88 C124.38,-14.88 120.6,-14.88 120.6,-14.88 C120.6,-14.88 120.6,-19.51 120.6,-19.51 C120.6,-19.51 117.63,-19.51 117.63,-19.51 C117.63,-19.51 117.21,-14.88 117.21,-14.88 C117.21,-14.88 114.91,-14.7 114.91,-14.7 C114.91,-14.7 114.91,-12.04 114.91,-12.04 C114.91,-12.04 117.03,-12.04 117.03,-12.04 C117.03,-12.04 117.03,-5.05 117.03,-5.05 C117.03,-1.82 118.3,0.36 121.78,0.36z M131.21,0.36 C133.26,0.36 134.69,-0.64 135.99,-2.18 C135.99,-2.18 136.08,-2.18 136.08,-2.18 C136.08,-2.18 136.35,0 136.35,0 C136.35,0 139.28,0 139.28,0 C139.28,0 139.28,-14.88 139.28,-14.88 C139.28,-14.88 135.71,-14.88 135.71,-14.88 C135.71,-14.88 135.71,-4.72 135.71,-4.72 C134.62,-3.3 133.78,-2.69 132.48,-2.69 C130.9,-2.69 130.21,-3.6 130.21,-6.02 C130.21,-6.02 130.21,-14.88 130.21,-14.88 C130.21,-14.88 126.64,-14.88 126.64,-14.88 C126.64,-14.88 126.64,-5.57 126.64,-5.57 C126.64,-1.82 128.03,0.36 131.21,0.36z M147.73,0.36 C151.51,0.36 153.57,-1.69 153.57,-4.27 C153.57,-6.84 151.54,-8.02 149.24,-8.8 C147.36,-9.44 146.3,-9.86 146.3,-10.95 C146.3,-11.83 146.97,-12.56 148.45,-12.56 C149.63,-12.56 150.72,-12.19 151.78,-11.41 C151.78,-11.41 153.32,-13.43 153.32,-13.43 C152.11,-14.49 150.39,-15.25 148.36,-15.25 C145.03,-15.25 142.92,-13.37 142.92,-10.77 C142.92,-8.41 144.91,-7.17 147.06,-6.38 C148.73,-5.78 150.18,-5.29 150.18,-4.05 C150.18,-3.06 149.42,-2.33 147.85,-2.33 C146.34,-2.33 144.97,-2.78 143.67,-3.84 C143.67,-3.84 142.1,-1.82 142.1,-1.82 C143.55,-0.42 145.67,0.36 147.73,0.36z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_61)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <g>
                            <path></path>
                          </g>
                          <g>
                            <path></path>
                          </g>
                          <g>
                            <path></path>
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="35.0145683288574"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Pace University"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.93,0 C2.93,0 7.12,0 7.12,0 C7.12,0 7.12,-8.43 7.12,-8.43 C7.12,-8.43 10.37,-8.43 10.37,-8.43 C15.34,-8.43 19.18,-10.76 19.18,-15.9 C19.18,-21.26 15.34,-23.06 10.23,-23.06 C10.23,-23.06 2.93,-23.06 2.93,-23.06 C2.93,-23.06 2.93,0 2.93,0z M7.12,-11.78 C7.12,-11.78 7.12,-19.71 7.12,-19.71 C7.12,-19.71 9.91,-19.71 9.91,-19.71 C13.26,-19.71 15.02,-18.72 15.02,-15.9 C15.02,-13.12 13.44,-11.78 10.05,-11.78 C10.05,-11.78 7.12,-11.78 7.12,-11.78z M27.18,0.42 C29.23,0.42 30.92,-0.56 32.47,-1.9 C32.47,-1.9 32.61,-1.9 32.61,-1.9 C32.61,-1.9 32.97,0 32.97,0 C32.97,0 36.35,0 36.35,0 C36.35,0 36.35,-10.26 36.35,-10.26 C36.35,-15.09 34.17,-17.77 29.86,-17.77 C27.11,-17.77 24.65,-16.71 22.74,-15.52 C22.74,-15.52 24.22,-12.76 24.22,-12.76 C25.77,-13.68 27.4,-14.39 29.09,-14.39 C31.42,-14.39 32.12,-12.91 32.19,-11.14 C25.07,-10.37 22.04,-8.46 22.04,-4.65 C22.04,-1.62 24.15,0.42 27.18,0.42z M28.45,-2.89 C27.04,-2.89 26.06,-3.46 26.06,-4.94 C26.06,-6.7 27.47,-7.76 32.19,-8.32 C32.19,-8.32 32.19,-4.65 32.19,-4.65 C30.92,-3.46 29.86,-2.89 28.45,-2.89z M48.28,0.42 C50.26,0.42 52.3,-0.25 53.96,-1.69 C53.96,-1.69 52.27,-4.34 52.27,-4.34 C51.28,-3.53 50.08,-2.96 48.71,-2.96 C46.06,-2.96 44.19,-5.22 44.19,-8.64 C44.19,-12.09 46.1,-14.35 48.85,-14.35 C49.94,-14.35 50.82,-14 51.7,-13.22 C51.7,-13.22 53.71,-15.83 53.71,-15.83 C52.45,-16.96 50.82,-17.77 48.64,-17.77 C43.98,-17.77 39.89,-14.42 39.89,-8.64 C39.89,-2.89 43.56,0.42 48.28,0.42z M63.73,0.42 C65.98,0.42 68.1,-0.21 69.72,-1.41 C69.72,-1.41 68.31,-4.02 68.31,-4.02 C67.11,-3.24 65.77,-2.82 64.29,-2.82 C61.54,-2.82 59.71,-4.51 59.28,-7.41 C59.28,-7.41 70.21,-7.41 70.21,-7.41 C70.36,-8.04 70.43,-8.67 70.43,-9.52 C70.43,-14.39 67.89,-17.77 63.2,-17.77 C59.14,-17.77 55.19,-14.32 55.19,-8.67 C55.19,-2.89 58.93,0.42 63.73,0.42z M59.28,-10.51 C59.64,-13.12 61.33,-14.53 63.3,-14.53 C65.56,-14.53 66.76,-13.05 66.76,-10.51 C66.76,-10.51 59.28,-10.51 59.28,-10.51z M90.17,0.42 C95.57,0.42 98.92,-2.57 98.92,-10.16 C98.92,-10.16 98.92,-23.06 98.92,-23.06 C98.92,-23.06 94.86,-23.06 94.86,-23.06 C94.86,-23.06 94.86,-9.84 94.86,-9.84 C94.86,-4.87 92.96,-3.21 90.17,-3.21 C87.39,-3.21 85.55,-4.87 85.55,-9.84 C85.55,-9.84 85.55,-23.06 85.55,-23.06 C85.55,-23.06 81.36,-23.06 81.36,-23.06 C81.36,-23.06 81.36,-10.16 81.36,-10.16 C81.36,-2.57 84.78,0.42 90.17,0.42z M104.08,0 C104.08,0 108.28,0 108.28,0 C108.28,0 108.28,-12.06 108.28,-12.06 C109.65,-13.47 110.64,-14.18 112.16,-14.18 C113.99,-14.18 114.8,-13.15 114.8,-10.33 C114.8,-10.33 114.8,0 114.8,0 C114.8,0 118.96,0 118.96,0 C118.96,0 118.96,-10.86 118.96,-10.86 C118.96,-15.23 117.34,-17.77 113.6,-17.77 C111.24,-17.77 109.48,-16.5 107.92,-15.02 C107.92,-15.02 107.82,-15.02 107.82,-15.02 C107.82,-15.02 107.5,-17.35 107.5,-17.35 C107.5,-17.35 104.08,-17.35 104.08,-17.35 C104.08,-17.35 104.08,0 104.08,0z M123.72,0 C123.72,0 127.92,0 127.92,0 C127.92,0 127.92,-17.35 127.92,-17.35 C127.92,-17.35 123.72,-17.35 123.72,-17.35 C123.72,-17.35 123.72,0 123.72,0z M125.84,-20.31 C127.32,-20.31 128.34,-21.26 128.34,-22.67 C128.34,-24.08 127.32,-25.04 125.84,-25.04 C124.36,-25.04 123.34,-24.08 123.34,-22.67 C123.34,-21.26 124.36,-20.31 125.84,-20.31z M136.85,0 C136.85,0 141.64,0 141.64,0 C141.64,0 147.53,-17.35 147.53,-17.35 C147.53,-17.35 143.51,-17.35 143.51,-17.35 C143.51,-17.35 140.8,-8.43 140.8,-8.43 C140.34,-6.7 139.81,-4.94 139.35,-3.17 C139.35,-3.17 139.21,-3.17 139.21,-3.17 C138.72,-4.94 138.22,-6.7 137.73,-8.43 C137.73,-8.43 135.05,-17.35 135.05,-17.35 C135.05,-17.35 130.82,-17.35 130.82,-17.35 C130.82,-17.35 136.85,0 136.85,0z M157.78,0.42 C160.03,0.42 162.15,-0.21 163.77,-1.41 C163.77,-1.41 162.36,-4.02 162.36,-4.02 C161.16,-3.24 159.82,-2.82 158.34,-2.82 C155.59,-2.82 153.76,-4.51 153.33,-7.41 C153.33,-7.41 164.26,-7.41 164.26,-7.41 C164.4,-8.04 164.48,-8.67 164.48,-9.52 C164.48,-14.39 161.94,-17.77 157.25,-17.77 C153.19,-17.77 149.24,-14.32 149.24,-8.67 C149.24,-2.89 152.98,0.42 157.78,0.42z M153.33,-10.51 C153.68,-13.12 155.38,-14.53 157.35,-14.53 C159.61,-14.53 160.81,-13.05 160.81,-10.51 C160.81,-10.51 153.33,-10.51 153.33,-10.51z M168.16,0 C168.16,0 172.35,0 172.35,0 C172.35,0 172.35,-10.51 172.35,-10.51 C173.38,-13.15 175.03,-14.07 176.41,-14.07 C177.11,-14.07 177.54,-14 178.07,-13.86 C178.07,-13.86 178.91,-17.42 178.91,-17.42 C178.38,-17.63 177.82,-17.77 176.94,-17.77 C175.1,-17.77 173.27,-16.5 172,-14.25 C172,-14.25 171.9,-14.25 171.9,-14.25 C171.9,-14.25 171.58,-17.35 171.58,-17.35 C171.58,-17.35 168.16,-17.35 168.16,-17.35 C168.16,-17.35 168.16,0 168.16,0z M186.19,0.42 C190.6,0.42 193,-1.97 193,-4.97 C193,-7.97 190.63,-9.34 187.95,-10.26 C185.77,-11 184.53,-11.5 184.53,-12.76 C184.53,-13.79 185.31,-14.63 187.04,-14.63 C188.41,-14.63 189.68,-14.21 190.91,-13.29 C190.91,-13.29 192.71,-15.66 192.71,-15.66 C191.3,-16.89 189.29,-17.77 186.93,-17.77 C183.05,-17.77 180.58,-15.59 180.58,-12.55 C180.58,-9.8 182.91,-8.36 185.41,-7.44 C187.35,-6.74 189.05,-6.17 189.05,-4.73 C189.05,-3.56 188.16,-2.72 186.33,-2.72 C184.57,-2.72 182.98,-3.24 181.46,-4.48 C181.46,-4.48 179.63,-2.12 179.63,-2.12 C181.32,-0.49 183.79,0.42 186.19,0.42z M196.45,0 C196.45,0 200.65,0 200.65,0 C200.65,0 200.65,-17.35 200.65,-17.35 C200.65,-17.35 196.45,-17.35 196.45,-17.35 C196.45,-17.35 196.45,0 196.45,0z M198.57,-20.31 C200.05,-20.31 201.07,-21.26 201.07,-22.67 C201.07,-24.08 200.05,-25.04 198.57,-25.04 C197.08,-25.04 196.06,-24.08 196.06,-22.67 C196.06,-21.26 197.08,-20.31 198.57,-20.31z M211.83,0.42 C213.24,0.42 214.51,0.11 215.43,-0.32 C215.43,-0.32 214.69,-3.24 214.69,-3.24 C214.09,-3 213.49,-2.89 212.89,-2.89 C211.26,-2.89 210.45,-3.88 210.45,-5.89 C210.45,-5.89 210.45,-14.03 210.45,-14.03 C210.45,-14.03 214.86,-14.03 214.86,-14.03 C214.86,-14.03 214.86,-17.35 214.86,-17.35 C214.86,-17.35 210.45,-17.35 210.45,-17.35 C210.45,-17.35 210.45,-22.74 210.45,-22.74 C210.45,-22.74 207,-22.74 207,-22.74 C207,-22.74 206.5,-17.35 206.5,-17.35 C206.5,-17.35 203.82,-17.14 203.82,-17.14 C203.82,-17.14 203.82,-14.03 203.82,-14.03 C203.82,-14.03 206.29,-14.03 206.29,-14.03 C206.29,-14.03 206.29,-5.89 206.29,-5.89 C206.29,-2.12 207.77,0.42 211.83,0.42z M218.9,7.09 C222.71,7.09 224.54,4.69 225.99,0.74 C225.99,0.74 232.23,-17.35 232.23,-17.35 C232.23,-17.35 228.21,-17.35 228.21,-17.35 C228.21,-17.35 225.67,-8.92 225.67,-8.92 C225.25,-7.33 224.79,-5.64 224.37,-4.02 C224.37,-4.02 224.23,-4.02 224.23,-4.02 C223.73,-5.68 223.24,-7.41 222.71,-8.92 C222.71,-8.92 219.78,-17.35 219.78,-17.35 C219.78,-17.35 215.55,-17.35 215.55,-17.35 C215.55,-17.35 222.36,-0.25 222.36,-0.25 C222.36,-0.25 222.04,0.85 222.04,0.85 C221.48,2.54 220.42,3.74 218.62,3.74 C218.23,3.74 217.92,3.7 217.42,3.56 C217.42,3.56 216.61,6.7 216.61,6.7 C217.28,6.95 217.95,7.09 218.9,7.09z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="25.1816005706787"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Researching"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M2.1,0 C2.1,0 5.12,0 5.12,0 C5.12,0 5.12,-6.44 5.12,-6.44 C5.12,-6.44 7.58,-6.44 7.58,-6.44 C7.58,-6.44 11.13,0 11.13,0 C11.13,0 14.51,0 14.51,0 C14.51,0 10.58,-6.9 10.58,-6.9 C12.55,-7.58 13.85,-9.13 13.85,-11.64 C13.85,-15.37 11.18,-16.59 7.71,-16.59 C7.71,-16.59 2.1,-16.59 2.1,-16.59 C2.1,-16.59 2.1,0 2.1,0z M5.12,-8.85 C5.12,-8.85 5.12,-14.18 5.12,-14.18 C5.12,-14.18 7.41,-14.18 7.41,-14.18 C9.66,-14.18 10.88,-13.52 10.88,-11.64 C10.88,-9.79 9.66,-8.85 7.41,-8.85 C7.41,-8.85 5.12,-8.85 5.12,-8.85z M22.11,0.3 C23.73,0.3 25.25,-0.15 26.42,-1.01 C26.42,-1.01 25.41,-2.89 25.41,-2.89 C24.54,-2.33 23.58,-2.03 22.52,-2.03 C20.54,-2.03 19.22,-3.25 18.91,-5.33 C18.91,-5.33 26.78,-5.33 26.78,-5.33 C26.88,-5.78 26.93,-6.24 26.93,-6.85 C26.93,-10.35 25.1,-12.78 21.73,-12.78 C18.81,-12.78 15.97,-10.3 15.97,-6.24 C15.97,-2.08 18.66,0.3 22.11,0.3z M18.91,-7.56 C19.17,-9.43 20.38,-10.45 21.8,-10.45 C23.43,-10.45 24.29,-9.38 24.29,-7.56 C24.29,-7.56 18.91,-7.56 18.91,-7.56z M33.08,0.3 C36.25,0.3 37.97,-1.42 37.97,-3.58 C37.97,-5.73 36.27,-6.72 34.34,-7.38 C32.77,-7.91 31.88,-8.27 31.88,-9.18 C31.88,-9.92 32.44,-10.52 33.68,-10.52 C34.67,-10.52 35.59,-10.22 36.47,-9.56 C36.47,-9.56 37.77,-11.26 37.77,-11.26 C36.75,-12.15 35.31,-12.78 33.61,-12.78 C30.82,-12.78 29.04,-11.21 29.04,-9.03 C29.04,-7.05 30.72,-6.01 32.52,-5.35 C33.91,-4.84 35.13,-4.44 35.13,-3.4 C35.13,-2.56 34.5,-1.95 33.18,-1.95 C31.91,-1.95 30.77,-2.33 29.68,-3.22 C29.68,-3.22 28.36,-1.52 28.36,-1.52 C29.58,-0.35 31.35,0.3 33.08,0.3z M45.78,0.3 C47.4,0.3 48.92,-0.15 50.09,-1.01 C50.09,-1.01 49.08,-2.89 49.08,-2.89 C48.21,-2.33 47.25,-2.03 46.19,-2.03 C44.21,-2.03 42.89,-3.25 42.58,-5.33 C42.58,-5.33 50.45,-5.33 50.45,-5.33 C50.55,-5.78 50.6,-6.24 50.6,-6.85 C50.6,-10.35 48.77,-12.78 45.4,-12.78 C42.48,-12.78 39.64,-10.3 39.64,-6.24 C39.64,-2.08 42.33,0.3 45.78,0.3z M42.58,-7.56 C42.84,-9.43 44.06,-10.45 45.48,-10.45 C47.1,-10.45 47.96,-9.38 47.96,-7.56 C47.96,-7.56 42.58,-7.56 42.58,-7.56z M56.29,0.3 C57.76,0.3 58.98,-0.41 60.09,-1.37 C60.09,-1.37 60.2,-1.37 60.2,-1.37 C60.2,-1.37 60.45,0 60.45,0 C60.45,0 62.88,0 62.88,0 C62.88,0 62.88,-7.38 62.88,-7.38 C62.88,-10.85 61.31,-12.78 58.22,-12.78 C56.24,-12.78 54.46,-12.02 53.09,-11.16 C53.09,-11.16 54.16,-9.18 54.16,-9.18 C55.28,-9.84 56.44,-10.35 57.66,-10.35 C59.33,-10.35 59.84,-9.28 59.89,-8.01 C54.77,-7.46 52.59,-6.09 52.59,-3.35 C52.59,-1.17 54.11,0.3 56.29,0.3z M57.2,-2.08 C56.19,-2.08 55.48,-2.49 55.48,-3.55 C55.48,-4.82 56.49,-5.58 59.89,-5.98 C59.89,-5.98 59.89,-3.35 59.89,-3.35 C58.98,-2.49 58.22,-2.08 57.2,-2.08z M66.24,0 C66.24,0 69.26,0 69.26,0 C69.26,0 69.26,-7.56 69.26,-7.56 C69.99,-9.46 71.19,-10.12 72.17,-10.12 C72.68,-10.12 72.99,-10.07 73.37,-9.97 C73.37,-9.97 73.98,-12.53 73.98,-12.53 C73.59,-12.68 73.19,-12.78 72.55,-12.78 C71.24,-12.78 69.92,-11.87 69,-10.25 C69,-10.25 68.93,-10.25 68.93,-10.25 C68.93,-10.25 68.7,-12.48 68.7,-12.48 C68.7,-12.48 66.24,-12.48 66.24,-12.48 C66.24,-12.48 66.24,0 66.24,0z M80.93,0.3 C82.35,0.3 83.82,-0.18 85.02,-1.22 C85.02,-1.22 83.8,-3.12 83.8,-3.12 C83.09,-2.54 82.23,-2.13 81.24,-2.13 C79.34,-2.13 77.99,-3.75 77.99,-6.21 C77.99,-8.7 79.36,-10.32 81.34,-10.32 C82.12,-10.32 82.76,-10.07 83.39,-9.51 C83.39,-9.51 84.84,-11.39 84.84,-11.39 C83.93,-12.2 82.76,-12.78 81.19,-12.78 C77.84,-12.78 74.9,-10.37 74.9,-6.21 C74.9,-2.08 77.53,0.3 80.93,0.3z M86.71,0 C86.71,0 89.73,0 89.73,0 C89.73,0 89.73,-8.67 89.73,-8.67 C90.72,-9.69 91.43,-10.19 92.52,-10.19 C93.84,-10.19 94.42,-9.46 94.42,-7.43 C94.42,-7.43 94.42,0 94.42,0 C94.42,0 97.42,0 97.42,0 C97.42,0 97.42,-7.81 97.42,-7.81 C97.42,-10.96 96.25,-12.78 93.56,-12.78 C91.86,-12.78 90.62,-11.87 89.6,-10.9 C89.6,-10.9 89.73,-13.29 89.73,-13.29 C89.73,-13.29 89.73,-17.9 89.73,-17.9 C89.73,-17.9 86.71,-17.9 86.71,-17.9 C86.71,-17.9 86.71,0 86.71,0z M100.79,0 C100.79,0 103.81,0 103.81,0 C103.81,0 103.81,-12.48 103.81,-12.48 C103.81,-12.48 100.79,-12.48 100.79,-12.48 C100.79,-12.48 100.79,0 100.79,0z M102.31,-14.61 C103.38,-14.61 104.11,-15.29 104.11,-16.31 C104.11,-17.32 103.38,-18.01 102.31,-18.01 C101.25,-18.01 100.51,-17.32 100.51,-16.31 C100.51,-15.29 101.25,-14.61 102.31,-14.61z M107.41,0 C107.41,0 110.43,0 110.43,0 C110.43,0 110.43,-8.67 110.43,-8.67 C111.42,-9.69 112.13,-10.19 113.22,-10.19 C114.54,-10.19 115.12,-9.46 115.12,-7.43 C115.12,-7.43 115.12,0 115.12,0 C115.12,0 118.11,0 118.11,0 C118.11,0 118.11,-7.81 118.11,-7.81 C118.11,-10.96 116.95,-12.78 114.26,-12.78 C112.56,-12.78 111.29,-11.87 110.18,-10.8 C110.18,-10.8 110.1,-10.8 110.1,-10.8 C110.1,-10.8 109.87,-12.48 109.87,-12.48 C109.87,-12.48 107.41,-12.48 107.41,-12.48 C107.41,-12.48 107.41,0 107.41,0z M125.9,5.5 C129.98,5.5 132.57,3.55 132.57,1.09 C132.57,-1.07 130.97,-2 128.01,-2 C128.01,-2 125.8,-2 125.8,-2 C124.3,-2 123.8,-2.41 123.8,-3.09 C123.8,-3.65 124.02,-3.96 124.38,-4.26 C124.94,-4.06 125.52,-3.96 126.05,-3.96 C128.69,-3.96 130.82,-5.43 130.82,-8.19 C130.82,-9.03 130.52,-9.79 130.14,-10.25 C130.14,-10.25 132.37,-10.25 132.37,-10.25 C132.37,-10.25 132.37,-12.48 132.37,-12.48 C132.37,-12.48 127.9,-12.48 127.9,-12.48 C127.4,-12.65 126.74,-12.78 126.05,-12.78 C123.44,-12.78 121.11,-11.16 121.11,-8.29 C121.11,-6.82 121.89,-5.63 122.76,-5 C122.76,-5 122.76,-4.89 122.76,-4.89 C122.02,-4.39 121.36,-3.55 121.36,-2.59 C121.36,-1.57 121.87,-0.91 122.5,-0.51 C122.5,-0.51 122.5,-0.41 122.5,-0.41 C121.36,0.3 120.7,1.19 120.7,2.26 C120.7,4.44 122.93,5.5 125.9,5.5z M126.05,-5.83 C124.89,-5.83 123.92,-6.72 123.92,-8.29 C123.92,-9.84 124.86,-10.7 126.05,-10.7 C127.25,-10.7 128.16,-9.84 128.16,-8.29 C128.16,-6.72 127.22,-5.83 126.05,-5.83z M126.36,3.55 C124.43,3.55 123.21,2.92 123.21,1.8 C123.21,1.22 123.49,0.68 124.15,0.18 C124.63,0.3 125.17,0.36 125.85,0.36 C125.85,0.36 127.52,0.36 127.52,0.36 C128.92,0.36 129.68,0.63 129.68,1.57 C129.68,2.64 128.34,3.55 126.36,3.55z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <g>
                            <path></path>
                          </g>
                          <g>
                            <path></path>
                          </g>
                          <g>
                            <path></path>
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="35.0145683288574"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Adelphi University"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M7.69,-12.2 C8.43,-14.63 9.1,-17.24 9.7,-19.78 C9.7,-19.78 9.84,-19.78 9.84,-19.78 C10.51,-17.28 11.18,-14.63 11.92,-12.2 C11.92,-12.2 12.69,-9.45 12.69,-9.45 C12.69,-9.45 6.91,-9.45 6.91,-9.45 C6.91,-9.45 7.69,-12.2 7.69,-12.2z M-0.07,0 C-0.07,0 4.2,0 4.2,0 C4.2,0 5.96,-6.17 5.96,-6.17 C5.96,-6.17 13.61,-6.17 13.61,-6.17 C13.61,-6.17 15.37,0 15.37,0 C15.37,0 19.82,0 19.82,0 C19.82,0 12.34,-23.06 12.34,-23.06 C12.34,-23.06 7.41,-23.06 7.41,-23.06 C7.41,-23.06 -0.07,0 -0.07,0z M28.11,0.42 C29.94,0.42 31.7,-0.6 32.97,-1.87 C32.97,-1.87 33.11,-1.87 33.11,-1.87 C33.11,-1.87 33.43,0 33.43,0 C33.43,0 36.82,0 36.82,0 C36.82,0 36.82,-24.9 36.82,-24.9 C36.82,-24.9 32.66,-24.9 32.66,-24.9 C32.66,-24.9 32.66,-18.65 32.66,-18.65 C32.66,-18.65 32.83,-15.87 32.83,-15.87 C31.49,-17.03 30.26,-17.77 28.32,-17.77 C24.51,-17.77 20.98,-14.32 20.98,-8.64 C20.98,-2.93 23.77,0.42 28.11,0.42z M29.13,-3.03 C26.66,-3.03 25.25,-4.97 25.25,-8.71 C25.25,-12.27 27.05,-14.32 29.2,-14.32 C30.36,-14.32 31.49,-13.96 32.66,-12.91 C32.66,-12.91 32.66,-4.94 32.66,-4.94 C31.56,-3.6 30.43,-3.03 29.13,-3.03z M49.2,0.42 C51.45,0.42 53.57,-0.21 55.19,-1.41 C55.19,-1.41 53.78,-4.02 53.78,-4.02 C52.58,-3.24 51.24,-2.82 49.76,-2.82 C47.01,-2.82 45.18,-4.51 44.75,-7.41 C44.75,-7.41 55.68,-7.41 55.68,-7.41 C55.82,-8.04 55.9,-8.67 55.9,-9.52 C55.9,-14.39 53.36,-17.77 48.67,-17.77 C44.61,-17.77 40.66,-14.32 40.66,-8.67 C40.66,-2.89 44.4,0.42 49.2,0.42z M44.75,-10.51 C45.1,-13.12 46.8,-14.53 48.77,-14.53 C51.03,-14.53 52.23,-13.05 52.23,-10.51 C52.23,-10.51 44.75,-10.51 44.75,-10.51z M63.6,0.42 C64.59,0.42 65.29,0.28 65.78,0.04 C65.78,0.04 65.29,-3.03 65.29,-3.03 C65.01,-2.96 64.87,-2.96 64.66,-2.96 C64.23,-2.96 63.77,-3.31 63.77,-4.34 C63.77,-4.34 63.77,-24.9 63.77,-24.9 C63.77,-24.9 59.58,-24.9 59.58,-24.9 C59.58,-24.9 59.58,-4.55 59.58,-4.55 C59.58,-1.48 60.67,0.42 63.6,0.42z M69.1,6.81 C69.1,6.81 73.3,6.81 73.3,6.81 C73.3,6.81 73.3,1.41 73.3,1.41 C73.3,1.41 73.16,-1.48 73.16,-1.48 C74.53,-0.28 76.05,0.42 77.6,0.42 C81.44,0.42 84.97,-3 84.97,-8.92 C84.97,-14.28 82.47,-17.77 78.16,-17.77 C76.26,-17.77 74.43,-16.75 72.95,-15.52 C72.95,-15.52 72.84,-15.52 72.84,-15.52 C72.84,-15.52 72.52,-17.35 72.52,-17.35 C72.52,-17.35 69.1,-17.35 69.1,-17.35 C69.1,-17.35 69.1,6.81 69.1,6.81z M76.68,-3.03 C75.7,-3.03 74.5,-3.39 73.3,-4.41 C73.3,-4.41 73.3,-12.41 73.3,-12.41 C74.6,-13.72 75.77,-14.32 77,-14.32 C79.57,-14.32 80.7,-12.31 80.7,-8.89 C80.7,-5.01 78.94,-3.03 76.68,-3.03z M88.88,0 C88.88,0 93.08,0 93.08,0 C93.08,0 93.08,-12.06 93.08,-12.06 C94.46,-13.47 95.44,-14.18 96.96,-14.18 C98.79,-14.18 99.6,-13.15 99.6,-10.33 C99.6,-10.33 99.6,0 99.6,0 C99.6,0 103.77,0 103.77,0 C103.77,0 103.77,-10.86 103.77,-10.86 C103.77,-15.23 102.14,-17.77 98.41,-17.77 C96.04,-17.77 94.32,-16.5 92.9,-15.16 C92.9,-15.16 93.08,-18.48 93.08,-18.48 C93.08,-18.48 93.08,-24.9 93.08,-24.9 C93.08,-24.9 88.88,-24.9 88.88,-24.9 C88.88,-24.9 88.88,0 88.88,0z M108.46,0 C108.46,0 112.65,0 112.65,0 C112.65,0 112.65,-17.35 112.65,-17.35 C112.65,-17.35 108.46,-17.35 108.46,-17.35 C108.46,-17.35 108.46,0 108.46,0z M110.57,-20.31 C112.05,-20.31 113.08,-21.26 113.08,-22.67 C113.08,-24.08 112.05,-25.04 110.57,-25.04 C109.09,-25.04 108.07,-24.08 108.07,-22.67 C108.07,-21.26 109.09,-20.31 110.57,-20.31z M133.73,0.42 C139.13,0.42 142.48,-2.57 142.48,-10.16 C142.48,-10.16 142.48,-23.06 142.48,-23.06 C142.48,-23.06 138.42,-23.06 138.42,-23.06 C138.42,-23.06 138.42,-9.84 138.42,-9.84 C138.42,-4.87 136.52,-3.21 133.73,-3.21 C130.95,-3.21 129.11,-4.87 129.11,-9.84 C129.11,-9.84 129.11,-23.06 129.11,-23.06 C129.11,-23.06 124.92,-23.06 124.92,-23.06 C124.92,-23.06 124.92,-10.16 124.92,-10.16 C124.92,-2.57 128.34,0.42 133.73,0.42z M147.64,0 C147.64,0 151.84,0 151.84,0 C151.84,0 151.84,-12.06 151.84,-12.06 C153.21,-13.47 154.2,-14.18 155.71,-14.18 C157.55,-14.18 158.36,-13.15 158.36,-10.33 C158.36,-10.33 158.36,0 158.36,0 C158.36,0 162.52,0 162.52,0 C162.52,0 162.52,-10.86 162.52,-10.86 C162.52,-15.23 160.9,-17.77 157.16,-17.77 C154.8,-17.77 153.03,-16.5 151.48,-15.02 C151.48,-15.02 151.38,-15.02 151.38,-15.02 C151.38,-15.02 151.06,-17.35 151.06,-17.35 C151.06,-17.35 147.64,-17.35 147.64,-17.35 C147.64,-17.35 147.64,0 147.64,0z M167.28,0 C167.28,0 171.48,0 171.48,0 C171.48,0 171.48,-17.35 171.48,-17.35 C171.48,-17.35 167.28,-17.35 167.28,-17.35 C167.28,-17.35 167.28,0 167.28,0z M169.4,-20.31 C170.88,-20.31 171.9,-21.26 171.9,-22.67 C171.9,-24.08 170.88,-25.04 169.4,-25.04 C167.92,-25.04 166.89,-24.08 166.89,-22.67 C166.89,-21.26 167.92,-20.31 169.4,-20.31z M180.41,0 C180.41,0 185.2,0 185.2,0 C185.2,0 191.09,-17.35 191.09,-17.35 C191.09,-17.35 187.07,-17.35 187.07,-17.35 C187.07,-17.35 184.35,-8.43 184.35,-8.43 C183.9,-6.7 183.37,-4.94 182.91,-3.17 C182.91,-3.17 182.77,-3.17 182.77,-3.17 C182.27,-4.94 181.78,-6.7 181.29,-8.43 C181.29,-8.43 178.61,-17.35 178.61,-17.35 C178.61,-17.35 174.38,-17.35 174.38,-17.35 C174.38,-17.35 180.41,0 180.41,0z M201.33,0.42 C203.59,0.42 205.71,-0.21 207.33,-1.41 C207.33,-1.41 205.92,-4.02 205.92,-4.02 C204.72,-3.24 203.38,-2.82 201.9,-2.82 C199.15,-2.82 197.31,-4.51 196.89,-7.41 C196.89,-7.41 207.82,-7.41 207.82,-7.41 C207.96,-8.04 208.03,-8.67 208.03,-9.52 C208.03,-14.39 205.49,-17.77 200.8,-17.77 C196.75,-17.77 192.8,-14.32 192.8,-8.67 C192.8,-2.89 196.54,0.42 201.33,0.42z M196.89,-10.51 C197.24,-13.12 198.94,-14.53 200.91,-14.53 C203.17,-14.53 204.37,-13.05 204.37,-10.51 C204.37,-10.51 196.89,-10.51 196.89,-10.51z M211.72,0 C211.72,0 215.91,0 215.91,0 C215.91,0 215.91,-10.51 215.91,-10.51 C216.93,-13.15 218.59,-14.07 219.97,-14.07 C220.67,-14.07 221.1,-14 221.62,-13.86 C221.62,-13.86 222.47,-17.42 222.47,-17.42 C221.94,-17.63 221.38,-17.77 220.5,-17.77 C218.66,-17.77 216.83,-16.5 215.56,-14.25 C215.56,-14.25 215.45,-14.25 215.45,-14.25 C215.45,-14.25 215.14,-17.35 215.14,-17.35 C215.14,-17.35 211.72,-17.35 211.72,-17.35 C211.72,-17.35 211.72,0 211.72,0z M229.75,0.42 C234.16,0.42 236.55,-1.97 236.55,-4.97 C236.55,-7.97 234.19,-9.34 231.51,-10.26 C229.32,-11 228.09,-11.5 228.09,-12.76 C228.09,-13.79 228.87,-14.63 230.59,-14.63 C231.97,-14.63 233.24,-14.21 234.47,-13.29 C234.47,-13.29 236.27,-15.66 236.27,-15.66 C234.86,-16.89 232.85,-17.77 230.49,-17.77 C226.61,-17.77 224.14,-15.59 224.14,-12.55 C224.14,-9.8 226.47,-8.36 228.97,-7.44 C230.91,-6.74 232.6,-6.17 232.6,-4.73 C232.6,-3.56 231.72,-2.72 229.89,-2.72 C228.13,-2.72 226.54,-3.24 225.02,-4.48 C225.02,-4.48 223.19,-2.12 223.19,-2.12 C224.88,-0.49 227.35,0.42 229.75,0.42z M240.01,0 C240.01,0 244.2,0 244.2,0 C244.2,0 244.2,-17.35 244.2,-17.35 C244.2,-17.35 240.01,-17.35 240.01,-17.35 C240.01,-17.35 240.01,0 240.01,0z M242.12,-20.31 C243.6,-20.31 244.63,-21.26 244.63,-22.67 C244.63,-24.08 243.6,-25.04 242.12,-25.04 C240.64,-25.04 239.62,-24.08 239.62,-22.67 C239.62,-21.26 240.64,-20.31 242.12,-20.31z M255.39,0.42 C256.8,0.42 258.07,0.11 258.98,-0.32 C258.98,-0.32 258.24,-3.24 258.24,-3.24 C257.64,-3 257.04,-2.89 256.45,-2.89 C254.82,-2.89 254.01,-3.88 254.01,-5.89 C254.01,-5.89 254.01,-14.03 254.01,-14.03 C254.01,-14.03 258.42,-14.03 258.42,-14.03 C258.42,-14.03 258.42,-17.35 258.42,-17.35 C258.42,-17.35 254.01,-17.35 254.01,-17.35 C254.01,-17.35 254.01,-22.74 254.01,-22.74 C254.01,-22.74 250.56,-22.74 250.56,-22.74 C250.56,-22.74 250.06,-17.35 250.06,-17.35 C250.06,-17.35 247.38,-17.14 247.38,-17.14 C247.38,-17.14 247.38,-14.03 247.38,-14.03 C247.38,-14.03 249.85,-14.03 249.85,-14.03 C249.85,-14.03 249.85,-5.89 249.85,-5.89 C249.85,-2.12 251.33,0.42 255.39,0.42z M262.46,7.09 C266.27,7.09 268.1,4.69 269.55,0.74 C269.55,0.74 275.79,-17.35 275.79,-17.35 C275.79,-17.35 271.77,-17.35 271.77,-17.35 C271.77,-17.35 269.23,-8.92 269.23,-8.92 C268.81,-7.33 268.35,-5.64 267.93,-4.02 C267.93,-4.02 267.79,-4.02 267.79,-4.02 C267.29,-5.68 266.8,-7.41 266.27,-8.92 C266.27,-8.92 263.34,-17.35 263.34,-17.35 C263.34,-17.35 259.11,-17.35 259.11,-17.35 C259.11,-17.35 265.92,-0.25 265.92,-0.25 C265.92,-0.25 265.6,0.85 265.6,0.85 C265.04,2.54 263.98,3.74 262.18,3.74 C261.79,3.74 261.47,3.7 260.98,3.56 C260.98,3.56 260.17,6.7 260.17,6.7 C260.84,6.95 261.51,7.09 262.46,7.09z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="25.1816005706787"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Touring"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.43,0 C5.43,0 8.44,0 8.44,0 C8.44,0 8.44,-14.05 8.44,-14.05 C8.44,-14.05 13.21,-14.05 13.21,-14.05 C13.21,-14.05 13.21,-16.59 13.21,-16.59 C13.21,-16.59 0.66,-16.59 0.66,-16.59 C0.66,-16.59 0.66,-14.05 0.66,-14.05 C0.66,-14.05 5.43,-14.05 5.43,-14.05 C5.43,-14.05 5.43,0 5.43,0z M20.75,0.3 C23.84,0.3 26.68,-2.08 26.68,-6.21 C26.68,-10.37 23.84,-12.78 20.75,-12.78 C17.63,-12.78 14.79,-10.37 14.79,-6.21 C14.79,-2.08 17.63,0.3 20.75,0.3z M20.75,-2.13 C18.95,-2.13 17.88,-3.75 17.88,-6.21 C17.88,-8.7 18.95,-10.32 20.75,-10.32 C22.55,-10.32 23.61,-8.7 23.61,-6.21 C23.61,-3.75 22.55,-2.13 20.75,-2.13z M33.13,0.3 C34.85,0.3 36.04,-0.53 37.13,-1.83 C37.13,-1.83 37.21,-1.83 37.21,-1.83 C37.21,-1.83 37.44,0 37.44,0 C37.44,0 39.9,0 39.9,0 C39.9,0 39.9,-12.48 39.9,-12.48 C39.9,-12.48 36.91,-12.48 36.91,-12.48 C36.91,-12.48 36.91,-3.96 36.91,-3.96 C35.99,-2.76 35.28,-2.26 34.19,-2.26 C32.87,-2.26 32.29,-3.02 32.29,-5.05 C32.29,-5.05 32.29,-12.48 32.29,-12.48 C32.29,-12.48 29.3,-12.48 29.3,-12.48 C29.3,-12.48 29.3,-4.67 29.3,-4.67 C29.3,-1.52 30.46,0.3 33.13,0.3z M43.48,0 C43.48,0 46.49,0 46.49,0 C46.49,0 46.49,-7.56 46.49,-7.56 C47.23,-9.46 48.42,-10.12 49.41,-10.12 C49.92,-10.12 50.22,-10.07 50.6,-9.97 C50.6,-9.97 51.21,-12.53 51.21,-12.53 C50.83,-12.68 50.42,-12.78 49.79,-12.78 C48.47,-12.78 47.15,-11.87 46.24,-10.25 C46.24,-10.25 46.16,-10.25 46.16,-10.25 C46.16,-10.25 45.94,-12.48 45.94,-12.48 C45.94,-12.48 43.48,-12.48 43.48,-12.48 C43.48,-12.48 43.48,0 43.48,0z M52.94,0 C52.94,0 55.96,0 55.96,0 C55.96,0 55.96,-12.48 55.96,-12.48 C55.96,-12.48 52.94,-12.48 52.94,-12.48 C52.94,-12.48 52.94,0 52.94,0z M54.47,-14.61 C55.53,-14.61 56.27,-15.29 56.27,-16.31 C56.27,-17.32 55.53,-18.01 54.47,-18.01 C53.4,-18.01 52.67,-17.32 52.67,-16.31 C52.67,-15.29 53.4,-14.61 54.47,-14.61z M59.57,0 C59.57,0 62.59,0 62.59,0 C62.59,0 62.59,-8.67 62.59,-8.67 C63.57,-9.69 64.28,-10.19 65.37,-10.19 C66.69,-10.19 67.28,-9.46 67.28,-7.43 C67.28,-7.43 67.28,0 67.28,0 C67.28,0 70.27,0 70.27,0 C70.27,0 70.27,-7.81 70.27,-7.81 C70.27,-10.96 69.1,-12.78 66.41,-12.78 C64.72,-12.78 63.45,-11.87 62.33,-10.8 C62.33,-10.8 62.26,-10.8 62.26,-10.8 C62.26,-10.8 62.03,-12.48 62.03,-12.48 C62.03,-12.48 59.57,-12.48 59.57,-12.48 C59.57,-12.48 59.57,0 59.57,0z M78.06,5.5 C82.14,5.5 84.73,3.55 84.73,1.09 C84.73,-1.07 83.13,-2 80.16,-2 C80.16,-2 77.95,-2 77.95,-2 C76.46,-2 75.95,-2.41 75.95,-3.09 C75.95,-3.65 76.18,-3.96 76.53,-4.26 C77.09,-4.06 77.68,-3.96 78.21,-3.96 C80.85,-3.96 82.98,-5.43 82.98,-8.19 C82.98,-9.03 82.67,-9.79 82.29,-10.25 C82.29,-10.25 84.52,-10.25 84.52,-10.25 C84.52,-10.25 84.52,-12.48 84.52,-12.48 C84.52,-12.48 80.06,-12.48 80.06,-12.48 C79.55,-12.65 78.89,-12.78 78.21,-12.78 C75.6,-12.78 73.26,-11.16 73.26,-8.29 C73.26,-6.82 74.05,-5.63 74.91,-5 C74.91,-5 74.91,-4.89 74.91,-4.89 C74.18,-4.39 73.52,-3.55 73.52,-2.59 C73.52,-1.57 74.02,-0.91 74.66,-0.51 C74.66,-0.51 74.66,-0.41 74.66,-0.41 C73.52,0.3 72.86,1.19 72.86,2.26 C72.86,4.44 75.09,5.5 78.06,5.5z M78.21,-5.83 C77.04,-5.83 76.08,-6.72 76.08,-8.29 C76.08,-9.84 77.02,-10.7 78.21,-10.7 C79.4,-10.7 80.31,-9.84 80.31,-8.29 C80.31,-6.72 79.37,-5.83 78.21,-5.83z M78.51,3.55 C76.59,3.55 75.37,2.92 75.37,1.8 C75.37,1.22 75.65,0.68 76.31,0.18 C76.79,0.3 77.32,0.36 78.01,0.36 C78.01,0.36 79.68,0.36 79.68,0.36 C81.07,0.36 81.83,0.63 81.83,1.57 C81.83,2.64 80.49,3.55 78.51,3.55z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_34)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_23)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_12)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g style={{ display: "none" }}>
                      <g>
                        <path></path>
                      </g>
                    </g>
                    <g
                      fill="rgb(0,0,0)"
                      font-size="25.1816005706787"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Applied"
                      style={{ display: "none" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.53,-8.77 C6.06,-10.52 6.54,-12.4 6.97,-14.23 C6.97,-14.23 7.08,-14.23 7.08,-14.23 C7.56,-12.43 8.04,-10.52 8.57,-8.77 C8.57,-8.77 9.13,-6.8 9.13,-6.8 C9.13,-6.8 4.97,-6.8 4.97,-6.8 C4.97,-6.8 5.53,-8.77 5.53,-8.77z M-0.05,0 C-0.05,0 3.02,0 3.02,0 C3.02,0 4.29,-4.44 4.29,-4.44 C4.29,-4.44 9.79,-4.44 9.79,-4.44 C9.79,-4.44 11.06,0 11.06,0 C11.06,0 14.25,0 14.25,0 C14.25,0 8.88,-16.59 8.88,-16.59 C8.88,-16.59 5.33,-16.59 5.33,-16.59 C5.33,-16.59 -0.05,0 -0.05,0z M15.83,4.89 C15.83,4.89 18.84,4.89 18.84,4.89 C18.84,4.89 18.84,1.01 18.84,1.01 C18.84,1.01 18.74,-1.07 18.74,-1.07 C19.73,-0.2 20.82,0.3 21.94,0.3 C24.7,0.3 27.24,-2.16 27.24,-6.42 C27.24,-10.27 25.44,-12.78 22.34,-12.78 C20.98,-12.78 19.66,-12.05 18.59,-11.16 C18.59,-11.16 18.52,-11.16 18.52,-11.16 C18.52,-11.16 18.29,-12.48 18.29,-12.48 C18.29,-12.48 15.83,-12.48 15.83,-12.48 C15.83,-12.48 15.83,4.89 15.83,4.89z M21.28,-2.18 C20.57,-2.18 19.71,-2.43 18.84,-3.17 C18.84,-3.17 18.84,-8.93 18.84,-8.93 C19.78,-9.86 20.62,-10.3 21.51,-10.3 C23.36,-10.3 24.17,-8.85 24.17,-6.39 C24.17,-3.6 22.9,-2.18 21.28,-2.18z M30.05,4.89 C30.05,4.89 33.07,4.89 33.07,4.89 C33.07,4.89 33.07,1.01 33.07,1.01 C33.07,1.01 32.97,-1.07 32.97,-1.07 C33.96,-0.2 35.05,0.3 36.17,0.3 C38.93,0.3 41.47,-2.16 41.47,-6.42 C41.47,-10.27 39.67,-12.78 36.57,-12.78 C35.2,-12.78 33.88,-12.05 32.82,-11.16 C32.82,-11.16 32.74,-11.16 32.74,-11.16 C32.74,-11.16 32.51,-12.48 32.51,-12.48 C32.51,-12.48 30.05,-12.48 30.05,-12.48 C30.05,-12.48 30.05,4.89 30.05,4.89z M35.51,-2.18 C34.8,-2.18 33.93,-2.43 33.07,-3.17 C33.07,-3.17 33.07,-8.93 33.07,-8.93 C34.01,-9.86 34.85,-10.3 35.74,-10.3 C37.59,-10.3 38.4,-8.85 38.4,-6.39 C38.4,-3.6 37.13,-2.18 35.51,-2.18z M47.17,0.3 C47.88,0.3 48.39,0.2 48.75,0.03 C48.75,0.03 48.39,-2.18 48.39,-2.18 C48.19,-2.13 48.09,-2.13 47.93,-2.13 C47.63,-2.13 47.3,-2.38 47.3,-3.12 C47.3,-3.12 47.3,-17.9 47.3,-17.9 C47.3,-17.9 44.28,-17.9 44.28,-17.9 C44.28,-17.9 44.28,-3.27 44.28,-3.27 C44.28,-1.06 45.07,0.3 47.17,0.3z M51.13,0 C51.13,0 54.15,0 54.15,0 C54.15,0 54.15,-12.48 54.15,-12.48 C54.15,-12.48 51.13,-12.48 51.13,-12.48 C51.13,-12.48 51.13,0 51.13,0z M52.65,-14.61 C53.72,-14.61 54.45,-15.29 54.45,-16.31 C54.45,-17.32 53.72,-18.01 52.65,-18.01 C51.59,-18.01 50.85,-17.32 50.85,-16.31 C50.85,-15.29 51.59,-14.61 52.65,-14.61z M63.08,0.3 C64.7,0.3 66.22,-0.15 67.39,-1.01 C67.39,-1.01 66.38,-2.89 66.38,-2.89 C65.51,-2.33 64.55,-2.03 63.49,-2.03 C61.51,-2.03 60.19,-3.25 59.88,-5.33 C59.88,-5.33 67.75,-5.33 67.75,-5.33 C67.85,-5.78 67.9,-6.24 67.9,-6.85 C67.9,-10.35 66.07,-12.78 62.7,-12.78 C59.78,-12.78 56.94,-10.3 56.94,-6.24 C56.94,-2.08 59.63,0.3 63.08,0.3z M59.88,-7.56 C60.14,-9.43 61.36,-10.45 62.78,-10.45 C64.4,-10.45 65.26,-9.38 65.26,-7.56 C65.26,-7.56 59.88,-7.56 59.88,-7.56z M74.93,0.3 C76.25,0.3 77.52,-0.43 78.43,-1.34 C78.43,-1.34 78.53,-1.34 78.53,-1.34 C78.53,-1.34 78.76,0 78.76,0 C78.76,0 81.2,0 81.2,0 C81.2,0 81.2,-17.9 81.2,-17.9 C81.2,-17.9 78.21,-17.9 78.21,-17.9 C78.21,-17.9 78.21,-13.42 78.21,-13.42 C78.21,-13.42 78.33,-11.41 78.33,-11.41 C77.37,-12.25 76.48,-12.78 75.09,-12.78 C72.35,-12.78 69.81,-10.3 69.81,-6.21 C69.81,-2.1 71.81,0.3 74.93,0.3z M75.67,-2.18 C73.89,-2.18 72.88,-3.58 72.88,-6.26 C72.88,-8.83 74.17,-10.3 75.72,-10.3 C76.56,-10.3 77.37,-10.04 78.21,-9.28 C78.21,-9.28 78.21,-3.55 78.21,-3.55 C77.42,-2.59 76.61,-2.18 75.67,-2.18z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </section>
          <section class="home-compare">
            <div class="home-compare__stamp">
              <Image
                loading="lazy"
                src="https://d33a4decm84gsn.cloudfront.net/static/home/stamp-everything.svg"
                alt=""
              />
            </div>
            <div class="home-compare__copy-container">
              <h2 class="home-header home-header--compare">
                <div class="type--weight-600 home-header__kicker">
                  Choose Your School
                </div>
              </h2>
              <p class="type--weight-700 home-header home-header--compare home-header__title">
                Everything you need to make your&nbsp;decision.
              </p>
              <div class="home-squiggle home-squiggle--compare">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186 17"
                  fill="none"
                >
                  <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                </svg>
              </div>
              <div class="type--weight-400 home-body home-body--compare">
                With the information you care about on every school in America,
                we make it easy for you to compare schools and colleges to make
                your decision.
              </div>
              <ul class="home-compare__links">
                <li class="home-compare__link">
                  <a href="https://www.niche.com/k12/compare/" tabindex="0">
                    Compare K-12 Schools
                  </a>
                </li>
                <li class="home-compare__link">
                  <a
                    href="https://www.niche.com/colleges/compare/"
                    tabindex="0"
                  >
                    Compare Colleges
                  </a>
                </li>
              </ul>
            </div>
            <div aria-hidden="true" class="home-compare__animation-wrap">
              <div
                class="home-compare__animation"
                id="compareAnimation"
                role="button"
                aria-label="Animation, Compare schools easily; Click to pause"
                tabindex="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1080 1080"
                  width="1080"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_286">
                      <rect width="1080" height="1080" x="0" y="0"></rect>
                    </clipPath>
                    <clipPath id="__lottie_element_340">
                      <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
                    </clipPath>
                    <clipPath id="__lottie_element_351">
                      <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#__lottie_element_286)">
                    <g
                      transform="matrix(1,0,0,1,346.22601318359375,549.6019897460938)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(148,193,225)"
                          fill-opacity="1"
                          d=" M131.44200134277344,353.0979919433594 C131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 C-143.0959930419922,353.0979919433594 -152.54400634765625,343.6499938964844 -152.54400634765625,331.9960021972656 C-152.54400634765625,331.9960021972656 -152.54400634765625,-331.9960021972656 -152.54400634765625,-331.9960021972656 C-152.54400634765625,-343.6499938964844 -143.0959930419922,-353.0979919433594 -131.44200134277344,-353.0979919433594 C-131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 C143.0959930419922,-353.0979919433594 152.54400634765625,-343.6499938964844 152.54400634765625,-331.9960021972656 C152.54400634765625,-331.9960021972656 152.54400634765625,331.9960021972656 152.54400634765625,331.9960021972656 C152.54400634765625,343.6499938964844 143.0959930419922,353.0979919433594 131.44200134277344,353.0979919433594z"
                        ></path>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke-dasharray=" 16.251"
                          stroke-dashoffset="0"
                          stroke="rgb(48,52,128)"
                          stroke-opacity="1"
                          stroke-width="4.063"
                          d=" M131.44200134277344,353.0979919433594 C131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 C-143.0959930419922,353.0979919433594 -152.54400634765625,343.6499938964844 -152.54400634765625,331.9960021972656 C-152.54400634765625,331.9960021972656 -152.54400634765625,-331.9960021972656 -152.54400634765625,-331.9960021972656 C-152.54400634765625,-343.6499938964844 -143.0959930419922,-353.0979919433594 -131.44200134277344,-353.0979919433594 C-131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 C143.0959930419922,-353.0979919433594 152.54400634765625,-343.6499938964844 152.54400634765625,-331.9960021972656 C152.54400634765625,-331.9960021972656 152.54400634765625,331.9960021972656 152.54400634765625,331.9960021972656 C152.54400634765625,343.6499938964844 143.0959930419922,353.0979919433594 131.44200134277344,353.0979919433594z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0.4530029296875,-4.92901611328125)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,345.77301025390625,545.531005859375)"
                        >
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                            stroke="rgb(48,52,128)"
                            stroke-opacity="1"
                            stroke-width="2.864"
                            d=" M26.66699981689453,0 C26.66699981689453,14.727999687194824 14.727999687194824,26.66699981689453 0,26.66699981689453 C-14.727999687194824,26.66699981689453 -26.66699981689453,14.727999687194824 -26.66699981689453,0 C-26.66699981689453,-14.727999687194824 -14.727999687194824,-26.66699981689453 0,-26.66699981689453 C14.727999687194824,-26.66699981689453 26.66699981689453,-14.727999687194824 26.66699981689453,0z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,345.77301025390625,545.531005859375)"
                        >
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(48,52,128)"
                              fill-opacity="1"
                              d=" M-1.5099999904632568,1.440000057220459 C-1.5099999904632568,1.440000057220459 -7.697999954223633,1.440000057220459 -7.697999954223633,1.440000057220459 C-7.697999954223633,1.440000057220459 -7.697999954223633,-1.440000057220459 -7.697999954223633,-1.440000057220459 C-7.697999954223633,-1.440000057220459 -1.5099999904632568,-1.440000057220459 -1.5099999904632568,-1.440000057220459 C-1.5099999904632568,-1.440000057220459 -1.5099999904632568,-8.001999855041504 -1.5099999904632568,-8.001999855041504 C-1.5099999904632568,-8.001999855041504 1.5099999904632568,-8.001999855041504 1.5099999904632568,-8.001999855041504 C1.5099999904632568,-8.001999855041504 1.5099999904632568,-1.440000057220459 1.5099999904632568,-1.440000057220459 C1.5099999904632568,-1.440000057220459 7.697999954223633,-1.440000057220459 7.697999954223633,-1.440000057220459 C7.697999954223633,-1.440000057220459 7.697999954223633,1.440000057220459 7.697999954223633,1.440000057220459 C7.697999954223633,1.440000057220459 1.5099999904632568,1.440000057220459 1.5099999904632568,1.440000057220459 C1.5099999904632568,1.440000057220459 1.5099999904632568,8.001999855041504 1.5099999904632568,8.001999855041504 C1.5099999904632568,8.001999855041504 -1.5099999904632568,8.001999855041504 -1.5099999904632568,8.001999855041504 C-1.5099999904632568,8.001999855041504 -1.5099999904632568,1.440000057220459 -1.5099999904632568,1.440000057220459z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_351)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      fill="rgb(48,52,128)"
                      font-size="24.7057514190674"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Add a School"
                      transform="matrix(1,0,0,1,277.94000244140625,609.2269897460938)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.42,-8.61 C5.95,-10.33 6.42,-12.17 6.84,-13.96 C6.84,-13.96 6.94,-13.96 6.94,-13.96 C7.41,-12.19 7.89,-10.33 8.41,-8.61 C8.41,-8.61 8.96,-6.67 8.96,-6.67 C8.96,-6.67 4.88,-6.67 4.88,-6.67 C4.88,-6.67 5.42,-8.61 5.42,-8.61z M-0.05,0 C-0.05,0 2.96,0 2.96,0 C2.96,0 4.2,-4.35 4.2,-4.35 C4.2,-4.35 9.6,-4.35 9.6,-4.35 C9.6,-4.35 10.85,0 10.85,0 C10.85,0 13.98,0 13.98,0 C13.98,0 8.71,-16.27 8.71,-16.27 C8.71,-16.27 5.23,-16.27 5.23,-16.27 C5.23,-16.27 -0.05,0 -0.05,0z M19.83,0.3 C21.13,0.3 22.37,-0.42 23.27,-1.32 C23.27,-1.32 23.37,-1.32 23.37,-1.32 C23.37,-1.32 23.59,0 23.59,0 C23.59,0 25.98,0 25.98,0 C25.98,0 25.98,-17.57 25.98,-17.57 C25.98,-17.57 23.04,-17.57 23.04,-17.57 C23.04,-17.57 23.04,-13.16 23.04,-13.16 C23.04,-13.16 23.17,-11.2 23.17,-11.2 C22.22,-12.02 21.35,-12.54 19.98,-12.54 C17.29,-12.54 14.81,-10.1 14.81,-6.1 C14.81,-2.06 16.77,0.3 19.83,0.3z M20.55,-2.14 C18.81,-2.14 17.82,-3.51 17.82,-6.15 C17.82,-8.66 19.09,-10.1 20.6,-10.1 C21.42,-10.1 22.22,-9.85 23.04,-9.11 C23.04,-9.11 23.04,-3.48 23.04,-3.48 C22.27,-2.54 21.47,-2.14 20.55,-2.14z M33.79,0.3 C35.08,0.3 36.33,-0.42 37.22,-1.32 C37.22,-1.32 37.32,-1.32 37.32,-1.32 C37.32,-1.32 37.55,0 37.55,0 C37.55,0 39.94,0 39.94,0 C39.94,0 39.94,-17.57 39.94,-17.57 C39.94,-17.57 37,-17.57 37,-17.57 C37,-17.57 37,-13.16 37,-13.16 C37,-13.16 37.12,-11.2 37.12,-11.2 C36.18,-12.02 35.31,-12.54 33.94,-12.54 C31.25,-12.54 28.76,-10.1 28.76,-6.1 C28.76,-2.06 30.73,0.3 33.79,0.3z M34.51,-2.14 C32.77,-2.14 31.78,-3.51 31.78,-6.15 C31.78,-8.66 33.04,-10.1 34.56,-10.1 C35.38,-10.1 36.18,-9.85 37,-9.11 C37,-9.11 37,-3.48 37,-3.48 C36.23,-2.54 35.43,-2.14 34.51,-2.14z M51.37,0.3 C52.82,0.3 54.01,-0.4 55.1,-1.34 C55.1,-1.34 55.2,-1.34 55.2,-1.34 C55.2,-1.34 55.45,0 55.45,0 C55.45,0 57.84,0 57.84,0 C57.84,0 57.84,-7.24 57.84,-7.24 C57.84,-10.65 56.3,-12.54 53.26,-12.54 C51.32,-12.54 49.58,-11.79 48.24,-10.95 C48.24,-10.95 49.28,-9.01 49.28,-9.01 C50.38,-9.65 51.52,-10.15 52.72,-10.15 C54.36,-10.15 54.86,-9.11 54.91,-7.86 C49.88,-7.31 47.74,-5.97 47.74,-3.28 C47.74,-1.14 49.23,0.3 51.37,0.3z M52.27,-2.04 C51.27,-2.04 50.58,-2.44 50.58,-3.48 C50.58,-4.73 51.57,-5.47 54.91,-5.87 C54.91,-5.87 54.91,-3.28 54.91,-3.28 C54.01,-2.44 53.26,-2.04 52.27,-2.04z M71.1,0.3 C74.78,0.3 76.97,-1.92 76.97,-4.55 C76.97,-6.92 75.63,-8.14 73.69,-8.96 C73.69,-8.96 71.5,-9.85 71.5,-9.85 C70.16,-10.42 68.94,-10.87 68.94,-12.12 C68.94,-13.29 69.91,-13.98 71.43,-13.98 C72.67,-13.98 73.86,-13.49 74.88,-12.61 C74.88,-12.61 76.48,-14.56 76.48,-14.56 C75.21,-15.77 73.39,-16.57 71.43,-16.57 C68.24,-16.57 65.95,-14.56 65.95,-11.94 C65.95,-9.58 67.62,-8.31 69.24,-7.64 C69.24,-7.64 71.45,-6.67 71.45,-6.67 C72.92,-6.05 73.96,-5.62 73.96,-4.33 C73.96,-3.09 72.97,-2.26 71.18,-2.26 C69.61,-2.26 67.99,-2.91 66.82,-4.03 C66.82,-4.03 65.23,-2.09 65.23,-2.09 C66.77,-0.52 68.86,0.3 71.1,0.3z M84.3,0.3 C85.69,0.3 87.13,-0.17 88.3,-1.19 C88.3,-1.19 87.11,-3.06 87.11,-3.06 C86.41,-2.49 85.56,-2.09 84.59,-2.09 C82.73,-2.09 81.41,-3.68 81.41,-6.1 C81.41,-8.53 82.75,-10.13 84.69,-10.13 C85.46,-10.13 86.09,-9.88 86.71,-9.33 C86.71,-9.33 88.13,-11.17 88.13,-11.17 C87.23,-11.97 86.09,-12.54 84.54,-12.54 C81.26,-12.54 78.37,-10.18 78.37,-6.1 C78.37,-2.04 80.96,0.3 84.3,0.3z M89.97,0 C89.97,0 92.93,0 92.93,0 C92.93,0 92.93,-8.51 92.93,-8.51 C93.9,-9.5 94.59,-10 95.66,-10 C96.96,-10 97.53,-9.28 97.53,-7.29 C97.53,-7.29 97.53,0 97.53,0 C97.53,0 100.47,0 100.47,0 C100.47,0 100.47,-7.66 100.47,-7.66 C100.47,-10.75 99.32,-12.54 96.68,-12.54 C95.02,-12.54 93.8,-11.64 92.8,-10.7 C92.8,-10.7 92.93,-13.04 92.93,-13.04 C92.93,-13.04 92.93,-17.57 92.93,-17.57 C92.93,-17.57 89.97,-17.57 89.97,-17.57 C89.97,-17.57 89.97,0 89.97,0z M108.83,0.3 C111.86,0.3 114.65,-2.04 114.65,-6.1 C114.65,-10.18 111.86,-12.54 108.83,-12.54 C105.77,-12.54 102.98,-10.18 102.98,-6.1 C102.98,-2.04 105.77,0.3 108.83,0.3z M108.83,-2.09 C107.06,-2.09 106.02,-3.68 106.02,-6.1 C106.02,-8.53 107.06,-10.13 108.83,-10.13 C110.59,-10.13 111.64,-8.53 111.64,-6.1 C111.64,-3.68 110.59,-2.09 108.83,-2.09z M122.39,0.3 C125.43,0.3 128.21,-2.04 128.21,-6.1 C128.21,-10.18 125.43,-12.54 122.39,-12.54 C119.33,-12.54 116.54,-10.18 116.54,-6.1 C116.54,-2.04 119.33,0.3 122.39,0.3z M122.39,-2.09 C120.62,-2.09 119.58,-3.68 119.58,-6.1 C119.58,-8.53 120.62,-10.13 122.39,-10.13 C124.16,-10.13 125.2,-8.53 125.2,-6.1 C125.2,-3.68 124.16,-2.09 122.39,-2.09z M133.74,0.3 C134.44,0.3 134.93,0.2 135.28,0.02 C135.28,0.02 134.93,-2.14 134.93,-2.14 C134.74,-2.09 134.64,-2.09 134.49,-2.09 C134.19,-2.09 133.86,-2.34 133.86,-3.06 C133.86,-3.06 133.86,-17.57 133.86,-17.57 C133.86,-17.57 130.9,-17.57 130.9,-17.57 C130.9,-17.57 130.9,-3.21 130.9,-3.21 C130.9,-1.04 131.67,0.3 133.74,0.3z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,736.6279907226562,548.3660278320312)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(148,193,225)"
                          fill-opacity="1"
                          d=" M131.44200134277344,353.0979919433594 C131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 C-143.0959930419922,353.0979919433594 -152.54400634765625,343.6499938964844 -152.54400634765625,331.9960021972656 C-152.54400634765625,331.9960021972656 -152.54400634765625,-331.9960021972656 -152.54400634765625,-331.9960021972656 C-152.54400634765625,-343.6499938964844 -143.0959930419922,-353.0979919433594 -131.44200134277344,-353.0979919433594 C-131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 C143.0959930419922,-353.0979919433594 152.54400634765625,-343.6499938964844 152.54400634765625,-331.9960021972656 C152.54400634765625,-331.9960021972656 152.54400634765625,331.9960021972656 152.54400634765625,331.9960021972656 C152.54400634765625,343.6499938964844 143.0959930419922,353.0979919433594 131.44200134277344,353.0979919433594z"
                        ></path>
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke-dasharray=" 16.251"
                          stroke-dashoffset="0"
                          stroke="rgb(48,52,128)"
                          stroke-opacity="1"
                          stroke-width="4.063"
                          d=" M131.44200134277344,353.0979919433594 C131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 -131.44200134277344,353.0979919433594 C-143.0959930419922,353.0979919433594 -152.54400634765625,343.6499938964844 -152.54400634765625,331.9960021972656 C-152.54400634765625,331.9960021972656 -152.54400634765625,-331.9960021972656 -152.54400634765625,-331.9960021972656 C-152.54400634765625,-343.6499938964844 -143.0959930419922,-353.0979919433594 -131.44200134277344,-353.0979919433594 C-131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 131.44200134277344,-353.0979919433594 C143.0959930419922,-353.0979919433594 152.54400634765625,-343.6499938964844 152.54400634765625,-331.9960021972656 C152.54400634765625,-331.9960021972656 152.54400634765625,331.9960021972656 152.54400634765625,331.9960021972656 C152.54400634765625,343.6499938964844 143.0959930419922,353.0979919433594 131.44200134277344,353.0979919433594z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0.4530029296875,-4.927978515625)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,736.1749877929688,544.2949829101562)"
                        >
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="10"
                            stroke="rgb(48,52,128)"
                            stroke-opacity="1"
                            stroke-width="2.864"
                            d=" M26.66699981689453,0 C26.66699981689453,14.727999687194824 14.727999687194824,26.66699981689453 0,26.66699981689453 C-14.727999687194824,26.66699981689453 -26.66699981689453,14.727999687194824 -26.66699981689453,0 C-26.66699981689453,-14.727999687194824 -14.727999687194824,-26.66699981689453 0,-26.66699981689453 C14.727999687194824,-26.66699981689453 26.66699981689453,-14.727999687194824 26.66699981689453,0z"
                          ></path>
                        </g>
                        <g
                          opacity="1"
                          transform="matrix(1,0,0,1,736.1749877929688,544.2949829101562)"
                        >
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(48,52,128)"
                              fill-opacity="1"
                              d=" M-1.5099999904632568,1.440000057220459 C-1.5099999904632568,1.440000057220459 -7.697999954223633,1.440000057220459 -7.697999954223633,1.440000057220459 C-7.697999954223633,1.440000057220459 -7.697999954223633,-1.440000057220459 -7.697999954223633,-1.440000057220459 C-7.697999954223633,-1.440000057220459 -1.5099999904632568,-1.440000057220459 -1.5099999904632568,-1.440000057220459 C-1.5099999904632568,-1.440000057220459 -1.5099999904632568,-8.001999855041504 -1.5099999904632568,-8.001999855041504 C-1.5099999904632568,-8.001999855041504 1.5099999904632568,-8.001999855041504 1.5099999904632568,-8.001999855041504 C1.5099999904632568,-8.001999855041504 1.5099999904632568,-1.440000057220459 1.5099999904632568,-1.440000057220459 C1.5099999904632568,-1.440000057220459 7.697999954223633,-1.440000057220459 7.697999954223633,-1.440000057220459 C7.697999954223633,-1.440000057220459 7.697999954223633,1.440000057220459 7.697999954223633,1.440000057220459 C7.697999954223633,1.440000057220459 1.5099999904632568,1.440000057220459 1.5099999904632568,1.440000057220459 C1.5099999904632568,1.440000057220459 1.5099999904632568,8.001999855041504 1.5099999904632568,8.001999855041504 C1.5099999904632568,8.001999855041504 -1.5099999904632568,8.001999855041504 -1.5099999904632568,8.001999855041504 C-1.5099999904632568,8.001999855041504 -1.5099999904632568,1.440000057220459 -1.5099999904632568,1.440000057220459z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      clip-path="url(#__lottie_element_340)"
                      style={{ display: "none" }}
                    >
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      fill="rgb(48,52,128)"
                      font-size="24.7057514190674"
                      font-family="Source Sans Pro"
                      font-style="normal"
                      font-weight="normal"
                      aria-label="Add a School"
                      transform="matrix(1,0,0,1,668.3419799804688,607.990966796875)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                        stroke-miterlimit="4"
                        d=" M5.42,-8.61 C5.95,-10.33 6.42,-12.17 6.84,-13.96 C6.84,-13.96 6.94,-13.96 6.94,-13.96 C7.41,-12.19 7.89,-10.33 8.41,-8.61 C8.41,-8.61 8.96,-6.67 8.96,-6.67 C8.96,-6.67 4.88,-6.67 4.88,-6.67 C4.88,-6.67 5.42,-8.61 5.42,-8.61z M-0.05,0 C-0.05,0 2.96,0 2.96,0 C2.96,0 4.2,-4.35 4.2,-4.35 C4.2,-4.35 9.6,-4.35 9.6,-4.35 C9.6,-4.35 10.85,0 10.85,0 C10.85,0 13.98,0 13.98,0 C13.98,0 8.71,-16.27 8.71,-16.27 C8.71,-16.27 5.23,-16.27 5.23,-16.27 C5.23,-16.27 -0.05,0 -0.05,0z M19.83,0.3 C21.13,0.3 22.37,-0.42 23.27,-1.32 C23.27,-1.32 23.37,-1.32 23.37,-1.32 C23.37,-1.32 23.59,0 23.59,0 C23.59,0 25.98,0 25.98,0 C25.98,0 25.98,-17.57 25.98,-17.57 C25.98,-17.57 23.04,-17.57 23.04,-17.57 C23.04,-17.57 23.04,-13.16 23.04,-13.16 C23.04,-13.16 23.17,-11.2 23.17,-11.2 C22.22,-12.02 21.35,-12.54 19.98,-12.54 C17.29,-12.54 14.81,-10.1 14.81,-6.1 C14.81,-2.06 16.77,0.3 19.83,0.3z M20.55,-2.14 C18.81,-2.14 17.82,-3.51 17.82,-6.15 C17.82,-8.66 19.09,-10.1 20.6,-10.1 C21.42,-10.1 22.22,-9.85 23.04,-9.11 C23.04,-9.11 23.04,-3.48 23.04,-3.48 C22.27,-2.54 21.47,-2.14 20.55,-2.14z M33.79,0.3 C35.08,0.3 36.33,-0.42 37.22,-1.32 C37.22,-1.32 37.32,-1.32 37.32,-1.32 C37.32,-1.32 37.55,0 37.55,0 C37.55,0 39.94,0 39.94,0 C39.94,0 39.94,-17.57 39.94,-17.57 C39.94,-17.57 37,-17.57 37,-17.57 C37,-17.57 37,-13.16 37,-13.16 C37,-13.16 37.12,-11.2 37.12,-11.2 C36.18,-12.02 35.31,-12.54 33.94,-12.54 C31.25,-12.54 28.76,-10.1 28.76,-6.1 C28.76,-2.06 30.73,0.3 33.79,0.3z M34.51,-2.14 C32.77,-2.14 31.78,-3.51 31.78,-6.15 C31.78,-8.66 33.04,-10.1 34.56,-10.1 C35.38,-10.1 36.18,-9.85 37,-9.11 C37,-9.11 37,-3.48 37,-3.48 C36.23,-2.54 35.43,-2.14 34.51,-2.14z M51.37,0.3 C52.82,0.3 54.01,-0.4 55.1,-1.34 C55.1,-1.34 55.2,-1.34 55.2,-1.34 C55.2,-1.34 55.45,0 55.45,0 C55.45,0 57.84,0 57.84,0 C57.84,0 57.84,-7.24 57.84,-7.24 C57.84,-10.65 56.3,-12.54 53.26,-12.54 C51.32,-12.54 49.58,-11.79 48.24,-10.95 C48.24,-10.95 49.28,-9.01 49.28,-9.01 C50.38,-9.65 51.52,-10.15 52.72,-10.15 C54.36,-10.15 54.86,-9.11 54.91,-7.86 C49.88,-7.31 47.74,-5.97 47.74,-3.28 C47.74,-1.14 49.23,0.3 51.37,0.3z M52.27,-2.04 C51.27,-2.04 50.58,-2.44 50.58,-3.48 C50.58,-4.73 51.57,-5.47 54.91,-5.87 C54.91,-5.87 54.91,-3.28 54.91,-3.28 C54.01,-2.44 53.26,-2.04 52.27,-2.04z M71.1,0.3 C74.78,0.3 76.97,-1.92 76.97,-4.55 C76.97,-6.92 75.63,-8.14 73.69,-8.96 C73.69,-8.96 71.5,-9.85 71.5,-9.85 C70.16,-10.42 68.94,-10.87 68.94,-12.12 C68.94,-13.29 69.91,-13.98 71.43,-13.98 C72.67,-13.98 73.86,-13.49 74.88,-12.61 C74.88,-12.61 76.48,-14.56 76.48,-14.56 C75.21,-15.77 73.39,-16.57 71.43,-16.57 C68.24,-16.57 65.95,-14.56 65.95,-11.94 C65.95,-9.58 67.62,-8.31 69.24,-7.64 C69.24,-7.64 71.45,-6.67 71.45,-6.67 C72.92,-6.05 73.96,-5.62 73.96,-4.33 C73.96,-3.09 72.97,-2.26 71.18,-2.26 C69.61,-2.26 67.99,-2.91 66.82,-4.03 C66.82,-4.03 65.23,-2.09 65.23,-2.09 C66.77,-0.52 68.86,0.3 71.1,0.3z M84.3,0.3 C85.69,0.3 87.13,-0.17 88.3,-1.19 C88.3,-1.19 87.11,-3.06 87.11,-3.06 C86.41,-2.49 85.56,-2.09 84.59,-2.09 C82.73,-2.09 81.41,-3.68 81.41,-6.1 C81.41,-8.53 82.75,-10.13 84.69,-10.13 C85.46,-10.13 86.09,-9.88 86.71,-9.33 C86.71,-9.33 88.13,-11.17 88.13,-11.17 C87.23,-11.97 86.09,-12.54 84.54,-12.54 C81.26,-12.54 78.37,-10.18 78.37,-6.1 C78.37,-2.04 80.96,0.3 84.3,0.3z M89.97,0 C89.97,0 92.93,0 92.93,0 C92.93,0 92.93,-8.51 92.93,-8.51 C93.9,-9.5 94.59,-10 95.66,-10 C96.96,-10 97.53,-9.28 97.53,-7.29 C97.53,-7.29 97.53,0 97.53,0 C97.53,0 100.47,0 100.47,0 C100.47,0 100.47,-7.66 100.47,-7.66 C100.47,-10.75 99.32,-12.54 96.68,-12.54 C95.02,-12.54 93.8,-11.64 92.8,-10.7 C92.8,-10.7 92.93,-13.04 92.93,-13.04 C92.93,-13.04 92.93,-17.57 92.93,-17.57 C92.93,-17.57 89.97,-17.57 89.97,-17.57 C89.97,-17.57 89.97,0 89.97,0z M108.83,0.3 C111.86,0.3 114.65,-2.04 114.65,-6.1 C114.65,-10.18 111.86,-12.54 108.83,-12.54 C105.77,-12.54 102.98,-10.18 102.98,-6.1 C102.98,-2.04 105.77,0.3 108.83,0.3z M108.83,-2.09 C107.06,-2.09 106.02,-3.68 106.02,-6.1 C106.02,-8.53 107.06,-10.13 108.83,-10.13 C110.59,-10.13 111.64,-8.53 111.64,-6.1 C111.64,-3.68 110.59,-2.09 108.83,-2.09z M122.39,0.3 C125.43,0.3 128.21,-2.04 128.21,-6.1 C128.21,-10.18 125.43,-12.54 122.39,-12.54 C119.33,-12.54 116.54,-10.18 116.54,-6.1 C116.54,-2.04 119.33,0.3 122.39,0.3z M122.39,-2.09 C120.62,-2.09 119.58,-3.68 119.58,-6.1 C119.58,-8.53 120.62,-10.13 122.39,-10.13 C124.16,-10.13 125.2,-8.53 125.2,-6.1 C125.2,-3.68 124.16,-2.09 122.39,-2.09z M133.74,0.3 C134.44,0.3 134.93,0.2 135.28,0.02 C135.28,0.02 134.93,-2.14 134.93,-2.14 C134.74,-2.09 134.64,-2.09 134.49,-2.09 C134.19,-2.09 133.86,-2.34 133.86,-3.06 C133.86,-3.06 133.86,-17.57 133.86,-17.57 C133.86,-17.57 130.9,-17.57 130.9,-17.57 C130.9,-17.57 130.9,-3.21 130.9,-3.21 C130.9,-1.04 131.67,0.3 133.74,0.3z"
                        style={{ display: "inherit" }}
                      ></path>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fill-opacity="1"
                          d=" M134.9980010986328,359.5570068359375 C134.9980010986328,359.5570068359375 -134.9980010986328,359.5570068359375 -134.9980010986328,359.5570068359375 C-146.91299438476562,359.5570068359375 -156.5709991455078,349.89898681640625 -156.5709991455078,337.9840087890625 C-156.5709991455078,337.9840087890625 -156.5709991455078,-337.9840087890625 -156.5709991455078,-337.9840087890625 C-156.5709991455078,-349.89898681640625 -146.91299438476562,-359.5570068359375 -134.9980010986328,-359.5570068359375 C-134.9980010986328,-359.5570068359375 134.9980010986328,-359.5570068359375 134.9980010986328,-359.5570068359375 C146.91299438476562,-359.5570068359375 156.5709991455078,-349.89898681640625 156.5709991455078,-337.9840087890625 C156.5709991455078,-337.9840087890625 156.5709991455078,337.9840087890625 156.5709991455078,337.9840087890625 C156.5709991455078,349.89898681640625 146.91299438476562,359.5570068359375 134.9980010986328,359.5570068359375z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(35,124,58)"
                          fill-opacity="1"
                          d=" M30.56399917602539,0 C30.56399917602539,16.8799991607666 16.8799991607666,30.56399917602539 0,30.56399917602539 C-16.8799991607666,30.56399917602539 -30.56399917602539,16.8799991607666 -30.56399917602539,0 C-30.56399917602539,-16.8799991607666 -16.8799991607666,-30.56399917602539 0,-30.56399917602539 C16.8799991607666,-30.56399917602539 30.56399917602539,-16.8799991607666 30.56399917602539,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,230.29200744628906,491.1919860839844)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-10.895999908447266,1.5049999952316284 C-10.895999908447266,1.5049999952316284 -10.895999908447266,-14.654000282287598 -10.895999908447266,-14.654000282287598 C-10.895999908447266,-14.654000282287598 -5.790999889373779,-14.654000282287598 -5.790999889373779,-14.654000282287598 C-5.790999889373779,-14.654000282287598 -5.790999889373779,1.8930000066757202 -5.790999889373779,1.8930000066757202 C-5.790999889373779,8.159000396728516 -3.450000047683716,10.218000411987305 0.03500000014901161,10.218000411987305 C3.555999994277954,10.218000411987305 5.985000133514404,8.159000396728516 5.985000133514404,1.8930000066757202 C5.985000133514404,1.8930000066757202 5.985000133514404,-14.654000282287598 5.985000133514404,-14.654000282287598 C5.985000133514404,-14.654000282287598 10.895999908447266,-14.654000282287598 10.895999908447266,-14.654000282287598 C10.895999908447266,-14.654000282287598 10.895999908447266,1.5049999952316284 10.895999908447266,1.5049999952316284 C10.895999908447266,10.956999778747559 6.705999851226807,14.654000282287598 0.03500000014901161,14.654000282287598 C-6.636000156402588,14.654000282287598 -10.895999908447266,10.956999778747559 -10.895999908447266,1.5049999952316284z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,257.86199951171875,490.9280090332031)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-11.019000053405762,0.09700000286102295 C-11.019000053405762,-9.321000099182129 -5.123000144958496,-14.918000221252441 2.1649999618530273,-14.918000221252441 C5.7729997634887695,-14.918000221252441 8.642999649047852,-13.192999839782715 10.456000328063965,-11.27400016784668 C10.456000328063965,-11.27400016784668 7.7270002365112305,-7.982999801635742 7.7270002365112305,-7.982999801635742 C6.248000144958496,-9.461999893188477 4.52400016784668,-10.482000350952148 2.2709999084472656,-10.482000350952148 C-2.4110000133514404,-10.482000350952148 -5.77400016784668,-6.521999835968018 -5.77400016784668,-0.06199999898672104 C-5.77400016784668,6.504000186920166 -2.674999952316284,10.482000350952148 2.1480000019073486,10.482000350952148 C4.699999809265137,10.482000350952148 6.671000003814697,9.303000450134277 8.291000366210938,7.525000095367432 C8.291000366210938,7.525000095367432 11.019000053405762,10.729000091552734 11.019000053405762,10.729000091552734 C8.685999870300293,13.4399995803833 5.685999870300293,14.918000221252441 1.9539999961853027,14.918000221252441 C-5.281000137329102,14.918000221252441 -11.019000053405762,9.619000434875488 -11.019000053405762,0.09700000286102295z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,282.22900390625,490.9280090332031)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-8.529000282287598,-14.390000343322754 C-8.529000282287598,-14.390000343322754 -3.4240000247955322,-14.390000343322754 -3.4240000247955322,-14.390000343322754 C-3.4240000247955322,-14.390000343322754 -3.4240000247955322,10.095000267028809 -3.4240000247955322,10.095000267028809 C-3.4240000247955322,10.095000267028809 8.529000282287598,10.095000267028809 8.529000282287598,10.095000267028809 C8.529000282287598,10.095000267028809 8.529000282287598,14.390000343322754 8.529000282287598,14.390000343322754 C8.529000282287598,14.390000343322754 -8.529000282287598,14.390000343322754 -8.529000282287598,14.390000343322754 C-8.529000282287598,14.390000343322754 -8.529000282287598,-14.390000343322754 -8.529000282287598,-14.390000343322754z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,304.32501220703125,490.9280090332031)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-2.993000030517578,-14.390000343322754 C-2.993000030517578,-14.390000343322754 2.992000102996826,-14.390000343322754 2.992000102996826,-14.390000343322754 C2.992000102996826,-14.390000343322754 12.375,14.390000343322754 12.375,14.390000343322754 C12.375,14.390000343322754 6.9710001945495605,14.390000343322754 6.9710001945495605,14.390000343322754 C6.9710001945495605,14.390000343322754 2.5869998931884766,-0.9240000247955322 2.5869998931884766,-0.9240000247955322 C1.6720000505447388,-3.9690001010894775 0.8270000219345093,-7.252999782562256 -0.017999999225139618,-10.411999702453613 C-0.017999999225139618,-10.411999702453613 -0.1940000057220459,-10.411999702453613 -0.1940000057220459,-10.411999702453613 C-0.9860000014305115,-7.22599983215332 -1.8300000429153442,-3.9690001010894775 -2.746000051498413,-0.9240000247955322 C-2.746000051498413,-0.9240000247955322 -7.164000034332275,14.390000343322754 -7.164000034332275,14.390000343322754 C-7.164000034332275,14.390000343322754 -12.375,14.390000343322754 -12.375,14.390000343322754 C-12.375,14.390000343322754 -2.993000030517578,-14.390000343322754 -2.993000030517578,-14.390000343322754z M-6.829999923706055,2.5869998931884766 C-6.829999923706055,2.5869998931884766 6.723999977111816,2.5869998931884766 6.723999977111816,2.5869998931884766 C6.723999977111816,2.5869998931884766 6.723999977111816,6.5920000076293945 6.723999977111816,6.5920000076293945 C6.723999977111816,6.5920000076293945 -6.829999923706055,6.5920000076293945 -6.829999923706055,6.5920000076293945 C-6.829999923706055,6.5920000076293945 -6.829999923706055,2.5869998931884766 -6.829999923706055,2.5869998931884766z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(109,189,163)"
                          fill-opacity="1"
                          d=" M156.5709991455078,87.91999816894531 C156.5709991455078,87.91999816894531 -156.5709991455078,87.91999816894531 -156.5709991455078,87.91999816894531 C-156.5709991455078,87.91999816894531 -156.5709991455078,-63.85300064086914 -156.5709991455078,-63.85300064086914 C-156.5709991455078,-77.1449966430664 -145.79600524902344,-87.91999816894531 -132.50399780273438,-87.91999816894531 C-132.50399780273438,-87.91999816894531 132.50399780273438,-87.91999816894531 132.50399780273438,-87.91999816894531 C145.79600524902344,-87.91999816894531 156.5709991455078,-77.1449966430664 156.5709991455078,-63.85300064086914 C156.5709991455078,-63.85300064086914 156.5709991455078,87.91999816894531 156.5709991455078,87.91999816894531z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,293.7919921875,307.68701171875)"
                      >
                        <path
                          fill="rgb(35,124,58)"
                          fill-opacity="1"
                          d=" M96.427001953125,-18.113000869750977 C94.71099853515625,-21.152999877929688 83.29100036621094,-41.38800048828125 68.9540023803711,-40.95399856567383 C55.71500015258789,-40.553001403808594 37.766998291015625,-21.472000122070312 37.766998291015625,-21.472000122070312 C37.766998291015625,-21.472000122070312 12.40999984741211,-41.095001220703125 -0.8450000286102295,-38.266998291015625 C-14.317000389099121,-35.393001556396484 -26.833999633789062,-8.708000183105469 -26.833999633789062,-8.708000183105469 C-26.833999633789062,-8.708000183105469 -47.74300003051758,-23.332000732421875 -61.733001708984375,-20.799999237060547 C-75.85900115966797,-18.243999481201172 -90.69200134277344,5.400000095367432 -90.69200134277344,5.400000095367432 C-90.69200134277344,5.400000095367432 -97.45800018310547,2.878000020980835 -105.68099975585938,1.406999945640564 C-105.68099975585938,1.406999945640564 -105.68099975585938,40.96099853515625 -105.68099975585938,40.96099853515625 C-105.68099975585938,40.96099853515625 103.13899993896484,40.96099853515625 103.13899993896484,40.96099853515625 C108.19300079345703,20.320999145507812 105.58799743652344,-1.8819999694824219 96.427001953125,-18.113000869750977z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,400.2799987792969,270.34698486328125)"
                      >
                        <path
                          fill="rgb(242,170,212)"
                          fill-opacity="1"
                          d=" M-63.69599914550781,37.57400131225586 C-63.69599914550781,37.57400131225586 -65.84600067138672,-31.98200035095215 -63.69599914550781,-47.391998291015625 C-52.9010009765625,-51.159000396728516 47.4379997253418,-46.4109992980957 58.38100051879883,-43.9739990234375 C61.49300003051758,-31.42799949645996 66.0479965209961,35.917999267578125 64.23999786376953,47.34000015258789 C63.24700164794922,53.61000061035156 -63.69599914550781,37.57400131225586 -63.69599914550781,37.57400131225586z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,394.4070129394531,284.6910095214844)"
                      >
                        <path
                          fill="rgb(231,113,51)"
                          fill-opacity="1"
                          d=" M-16.562000274658203,23.96299934387207 C-16.562000274658203,23.96299934387207 -19.492000579833984,-20.31999969482422 -16.562000274658203,-21.983999252319336 C-13.631999969482422,-23.648000717163086 17.86400032043457,-25.447999954223633 17.86400032043457,-21.983999252319336 C17.86400032043457,-18.520000457763672 17.86400032043457,21.32900047302246 17.86400032043457,21.32900047302246 C17.86400032043457,21.32900047302246 -16.562000274658203,23.96299934387207 -16.562000274658203,23.96299934387207z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,241.55099487304688,219.18899536132812)"
                      >
                        <path
                          fill="rgb(231,113,51)"
                          fill-opacity="1"
                          d=" M22.18600082397461,0 C22.18600082397461,12.253000259399414 12.253000259399414,22.18600082397461 0,22.18600082397461 C-12.253000259399414,22.18600082397461 -22.18600082397461,12.253000259399414 -22.18600082397461,0 C-22.18600082397461,-12.253000259399414 -12.253000259399414,-22.18600082397461 0,-22.18600082397461 C12.253000259399414,-22.18600082397461 22.18600082397461,-12.253000259399414 22.18600082397461,0z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,344.6820068359375,324.46099853515625)"
                      >
                        <path
                          fill="rgb(16,47,37)"
                          fill-opacity="1"
                          d=" M156.5709991455078,-14.678000450134277 C76.68800354003906,-37.66600036621094 -156.5709991455078,-11.75100040435791 -156.5709991455078,-11.75100040435791 C-156.5709991455078,-11.75100040435791 -156.5709991455078,24.187999725341797 -156.5709991455078,24.187999725341797 C-156.5709991455078,24.187999725341797 156.5709991455078,24.187999725341797 156.5709991455078,24.187999725341797 C156.5709991455078,24.187999725341797 156.5709991455078,-14.678000450134277 156.5709991455078,-14.678000450134277z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,226.9600067138672,593.2130126953125)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,249.90899658203125,592.9429931640625)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.628999710083008,11.293999671936035 C-1.7990000247955322,4.005000114440918 3.2850000858306885,-1.215000033378601 3.2850000858306885,-5.489999771118164 C3.2850000858306885,-8.505000114440918 1.6200000047683716,-10.348999977111816 -1.3949999809265137,-10.348999977111816 C-3.5999999046325684,-10.348999977111816 -5.400000095367432,-8.90999984741211 -6.929999828338623,-7.244999885559082 C-6.929999828338623,-7.244999885559082 -9.765000343322754,-10.03499984741211 -9.765000343322754,-10.03499984741211 C-7.199999809265137,-12.914999961853027 -4.545000076293945,-14.579999923706055 -0.675000011920929,-14.579999923706055 C4.815000057220459,-14.579999923706055 8.414999961853027,-11.114999771118164 8.414999961853027,-5.848999977111816 C8.414999961853027,-0.4950000047683716 3.555000066757202,4.409999847412109 -2.384999990463257,10.350000381469727 C-0.8550000190734863,10.21399974822998 1.034999966621399,10.079999923706055 2.430000066757202,10.079999923706055 C2.430000066757202,10.079999923706055 9.765000343322754,10.079999923706055 9.765000343322754,10.079999923706055 C9.765000343322754,10.079999923706055 9.765000343322754,14.579999923706055 9.765000343322754,14.579999923706055 C9.765000343322754,14.579999923706055 -9.628999710083008,14.579999923706055 -9.628999710083008,14.579999923706055 C-9.628999710083008,14.579999923706055 -9.628999710083008,11.293999671936035 -9.628999710083008,11.293999671936035z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,281.1159973144531,592.8090209960938)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-17.617000579833984,-5.985000133514404 C-17.617000579833984,-11.880000114440918 -14.737000465393066,-15.253999710083008 -10.597000122070312,-15.253999710083008 C-6.456999778747559,-15.253999710083008 -3.5320000648498535,-11.880000114440918 -3.5320000648498535,-5.985000133514404 C-3.5320000648498535,-0.04600000008940697 -6.456999778747559,3.375 -10.597000122070312,3.375 C-14.737000465393066,3.375 -17.617000579833984,-0.04600000008940697 -17.617000579833984,-5.985000133514404z M-7.35699987411499,-5.985000133514404 C-7.35699987411499,-10.395000457763672 -8.751999855041504,-12.194999694824219 -10.597000122070312,-12.194999694824219 C-12.442000389099121,-12.194999694824219 -13.836999893188477,-10.395000457763672 -13.836999893188477,-5.985000133514404 C-13.836999893188477,-1.5750000476837158 -12.442000389099121,0.3149999976158142 -10.597000122070312,0.3149999976158142 C-8.751999855041504,0.3149999976158142 -7.35699987411499,-1.5750000476837158 -7.35699987411499,-5.985000133514404z M6.367000102996826,-15.253999710083008 C6.367000102996826,-15.253999710083008 9.607000350952148,-15.253999710083008 9.607000350952148,-15.253999710083008 C9.607000350952148,-15.253999710083008 -6.4120001792907715,15.253999710083008 -6.4120001792907715,15.253999710083008 C-6.4120001792907715,15.253999710083008 -9.652000427246094,15.253999710083008 -9.652000427246094,15.253999710083008 C-9.652000427246094,15.253999710083008 6.367000102996826,-15.253999710083008 6.367000102996826,-15.253999710083008z M3.5320000648498535,5.894999980926514 C3.5320000648498535,-0.0010000000474974513 6.4120001792907715,-3.375 10.552000045776367,-3.375 C14.692000389099121,-3.375 17.617000579833984,-0.0010000000474974513 17.617000579833984,5.894999980926514 C17.617000579833984,11.833999633789062 14.692000389099121,15.253999710083008 10.552000045776367,15.253999710083008 C6.4120001792907715,15.253999710083008 3.5320000648498535,11.833999633789062 3.5320000648498535,5.894999980926514z M13.791999816894531,5.894999980926514 C13.791999816894531,1.4850000143051147 12.397000312805176,-0.3149999976158142 10.552000045776367,-0.3149999976158142 C8.706999778747559,-0.3149999976158142 7.311999797821045,1.4850000143051147 7.311999797821045,5.894999980926514 C7.311999797821045,10.303999900817871 8.706999778747559,12.194999694824219 10.552000045776367,12.194999694824219 C12.397000312805176,12.194999694824219 13.791999816894531,10.303999900817871 13.791999816894531,5.894999980926514z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,226.45799255371094,551.125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.6990000009536743,-8.17300033569336 C-1.6990000009536743,-8.17300033569336 1.6990000009536743,-8.17300033569336 1.6990000009536743,-8.17300033569336 C1.6990000009536743,-8.17300033569336 7.0279998779296875,8.17300033569336 7.0279998779296875,8.17300033569336 C7.0279998779296875,8.17300033569336 3.9590001106262207,8.17300033569336 3.9590001106262207,8.17300033569336 C3.9590001106262207,8.17300033569336 1.4700000286102295,-0.5249999761581421 1.4700000286102295,-0.5249999761581421 C0.949999988079071,-2.253999948501587 0.4690000116825104,-4.11899995803833 -0.009999999776482582,-5.914000034332275 C-0.009999999776482582,-5.914000034332275 -0.10999999940395355,-5.914000034332275 -0.10999999940395355,-5.914000034332275 C-0.5590000152587891,-4.104000091552734 -1.0399999618530273,-2.253999948501587 -1.559999942779541,-0.5249999761581421 C-1.559999942779541,-0.5249999761581421 -4.068999767303467,8.17300033569336 -4.068999767303467,8.17300033569336 C-4.068999767303467,8.17300033569336 -7.0279998779296875,8.17300033569336 -7.0279998779296875,8.17300033569336 C-7.0279998779296875,8.17300033569336 -1.6990000009536743,-8.17300033569336 -1.6990000009536743,-8.17300033569336z M-3.878999948501587,1.4700000286102295 C-3.878999948501587,1.4700000286102295 3.819000005722046,1.4700000286102295 3.819000005722046,1.4700000286102295 C3.819000005722046,1.4700000286102295 3.819000005722046,3.74399995803833 3.819000005722046,3.74399995803833 C3.819000005722046,3.74399995803833 -3.878999948501587,3.74399995803833 -3.878999948501587,3.74399995803833 C-3.878999948501587,3.74399995803833 -3.878999948501587,1.4700000286102295 -3.878999948501587,1.4700000286102295z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,239.41299438476562,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.075000047683716,-6.438000202178955 1.1950000524520874,-6.438000202178955 C2.755000114440918,-6.438000202178955 3.8940000534057617,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384999990463257,-3.188999891281128 3.384999990463257,-3.188999891281128 C2.734999895095825,-3.757999897003174 2.115999937057495,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.003999948501587,-2.4489998817443848 -2.003999948501587,0.009999999776482582 C-2.003999948501587,2.4700000286102295 -0.6539999842643738,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2149999141693115,4.089000225067139 3.0950000286102295,3.61899995803833 3.7950000762939453,3.0290000438690186 C3.7950000762939453,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.815000057220459,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3940000534057617,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,250.36399841308594,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.075000047683716,-6.438000202178955 1.194000005722046,-6.438000202178955 C2.753999948501587,-6.438000202178955 3.8929998874664307,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384000062942505,-3.188999891281128 3.384000062942505,-3.188999891281128 C2.734999895095825,-3.757999897003174 2.115000009536743,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.005000114440918,-2.4489998817443848 -2.005000114440918,0.009999999776482582 C-2.005000114440918,2.4700000286102295 -0.6549999713897705,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2139999866485596,4.089000225067139 3.0940001010894775,3.61899995803833 3.7939999103546143,3.0290000438690186 C3.7939999103546143,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.813999891281128,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3949999809265137,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,261.7139892578125,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5950000286102295,-6.438000202178955 0.2939999997615814,-6.438000202178955 C3.61299991607666,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.302999973297119,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.315000057220459,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7049999237060547,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,275.4280090332031,555.4390258789062)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.593999862670898,-8.418000221252441 C-5.593999862670898,-8.418000221252441 -3.2339999675750732,-8.418000221252441 -3.2339999675750732,-8.418000221252441 C-3.2339999675750732,-8.418000221252441 -3.015000104904175,-7.107999801635742 -3.015000104904175,-7.107999801635742 C-3.015000104904175,-7.107999801635742 -2.934999942779541,-7.107999801635742 -2.934999942779541,-7.107999801635742 C-1.899999976158142,-7.998000144958496 -0.5849999785423279,-8.718000411987305 0.7649999856948853,-8.718000411987305 C3.8340001106262207,-8.718000411987305 5.593999862670898,-6.257999897003174 5.593999862670898,-2.4690001010894775 C5.593999862670898,1.7289999723434448 3.0840001106262207,4.158999919891357 0.35499998927116394,4.158999919891357 C-0.7350000143051147,4.158999919891357 -1.8049999475479126,3.6689999103546143 -2.805000066757202,2.809999942779541 C-2.805000066757202,2.809999942779541 -2.7139999866485596,4.849999904632568 -2.7139999866485596,4.849999904632568 C-2.7139999866485596,4.849999904632568 -2.7139999866485596,8.718000411987305 -2.7139999866485596,8.718000411987305 C-2.7139999866485596,8.718000411987305 -5.593999862670898,8.718000411987305 -5.593999862670898,8.718000411987305 C-5.593999862670898,8.718000411987305 -5.593999862670898,-8.418000221252441 -5.593999862670898,-8.418000221252441z M2.634999990463257,-2.438999891281128 C2.634999990463257,-4.888000011444092 1.8350000381469727,-6.3379998207092285 -0.03500000014901161,-6.3379998207092285 C-0.925000011920929,-6.3379998207092285 -1.7649999856948853,-5.888999938964844 -2.7139999866485596,-4.958000183105469 C-2.7139999866485596,-4.958000183105469 -2.7139999866485596,0.7599999904632568 -2.7139999866485596,0.7599999904632568 C-1.8339999914169312,1.5099999904632568 -0.9649999737739563,1.7799999713897705 -0.2549999952316284,1.7799999713897705 C1.3849999904632568,1.7799999713897705 2.634999990463257,0.3400000035762787 2.634999990463257,-2.438999891281128z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,286.1340026855469,551.635009765625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-2.319000005722046,3.5239999294281006 C-2.319000005722046,3.5239999294281006 -2.319000005722046,-2.3239998817443848 -2.319000005722046,-2.3239998817443848 C-2.319000005722046,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 C-4.068999767303467,-2.3239998817443848 -4.068999767303467,-4.484000205993652 -4.068999767303467,-4.484000205993652 C-4.068999767303467,-4.484000205993652 -2.1700000762939453,-4.613999843597412 -2.1700000762939453,-4.613999843597412 C-2.1700000762939453,-4.613999843597412 -1.8289999961853027,-7.9629998207092285 -1.8289999961853027,-7.9629998207092285 C-1.8289999961853027,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 C0.5600000023841858,-7.9629998207092285 0.5600000023841858,-4.613999843597412 0.5600000023841858,-4.613999843597412 C0.5600000023841858,-4.613999843597412 3.688999891281128,-4.613999843597412 3.688999891281128,-4.613999843597412 C3.688999891281128,-4.613999843597412 3.688999891281128,-2.3239998817443848 3.688999891281128,-2.3239998817443848 C3.688999891281128,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 C0.5600000023841858,-2.3239998817443848 0.5600000023841858,3.5199999809265137 0.5600000023841858,3.5199999809265137 C0.5600000023841858,4.964000225067139 1.1200000047683716,5.673999786376953 2.299999952316284,5.673999786376953 C2.7200000286102295,5.673999786376953 3.2200000286102295,5.533999919891357 3.5789999961853027,5.394000053405762 C3.5789999961853027,5.394000053405762 4.068999767303467,7.513000011444092 4.068999767303467,7.513000011444092 C3.3989999294281006,7.734000205993652 2.5439999103546143,7.9629998207092285 1.559999942779541,7.9629998207092285 C-1.2690000534057617,7.9629998207092285 -2.319000005722046,6.172999858856201 -2.319000005722046,3.5239999294281006z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,296.27398681640625,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.048999786376953,2.8399999141693115 C-5.048999786376953,0.20999999344348907 -2.86899995803833,-1.159000039100647 2.1689999103546143,-1.6990000009536743 C2.130000114440918,-3.0190000534057617 1.5989999771118164,-4.11899995803833 -0.05999999865889549,-4.11899995803833 C-1.2799999713897705,-4.11899995803833 -2.430000066757202,-3.569000005722046 -3.509000062942505,-2.9089999198913574 C-3.509000062942505,-2.9089999198913574 -4.568999767303467,-4.828999996185303 -4.568999767303467,-4.828999996185303 C-3.2190001010894775,-5.678999900817871 -1.4789999723434448,-6.438000202178955 0.4699999988079071,-6.438000202178955 C3.5390000343322754,-6.438000202178955 5.048999786376953,-4.548999786376953 5.048999786376953,-1.1299999952316284 C5.048999786376953,-1.1299999952316284 5.048999786376953,6.138999938964844 5.048999786376953,6.138999938964844 C5.048999786376953,6.138999938964844 2.688999891281128,6.138999938964844 2.688999891281128,6.138999938964844 C2.688999891281128,6.138999938964844 2.4700000286102295,4.7789998054504395 2.4700000286102295,4.7789998054504395 C2.4700000286102295,4.7789998054504395 2.390000104904175,4.7789998054504395 2.390000104904175,4.7789998054504395 C1.2899999618530273,5.7179999351501465 0.029999999329447746,6.438000202178955 -1.4199999570846558,6.438000202178955 C-3.569000005722046,6.438000202178955 -5.048999786376953,4.979000091552734 -5.048999786376953,2.8399999141693115z M2.1689999103546143,2.8499999046325684 C2.1689999103546143,2.8499999046325684 2.1689999103546143,0.09000000357627869 2.1689999103546143,0.09000000357627869 C-1.159999966621399,0.5099999904632568 -2.2699999809265137,1.3799999952316284 -2.2699999809265137,2.61899995803833 C-2.2699999809265137,3.7039999961853027 -1.5290000438690186,4.178999900817871 -0.5,4.178999900817871 C0.5,4.178999900817871 1.2599999904632568,3.690000057220459 2.1689999103546143,2.8499999046325684z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,310.01800537109375,553.010009765625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.232999801635742,-5.988999843597412 C-5.232999801635742,-5.988999843597412 -2.874000072479248,-5.988999843597412 -2.874000072479248,-5.988999843597412 C-2.874000072479248,-5.988999843597412 -2.6540000438690186,-4.328999996185303 -2.6540000438690186,-4.328999996185303 C-2.6540000438690186,-4.328999996185303 -2.5739998817443848,-4.328999996185303 -2.5739998817443848,-4.328999996185303 C-1.4739999771118164,-5.39900016784668 -0.22499999403953552,-6.289000034332275 1.4550000429153442,-6.289000034332275 C4.084000110626221,-6.289000034332275 5.232999801635742,-4.508999824523926 5.232999801635742,-1.409999966621399 C5.232999801635742,-1.409999966621399 5.232999801635742,6.289000034332275 5.232999801635742,6.289000034332275 C5.232999801635742,6.289000034332275 2.3540000915527344,6.289000034332275 2.3540000915527344,6.289000034332275 C2.3540000915527344,6.289000034332275 2.3540000915527344,-1.0399999618530273 2.3540000915527344,-1.0399999618530273 C2.3540000915527344,-3.059999942779541 1.7740000486373901,-3.819000005722046 0.4449999928474426,-3.819000005722046 C-0.6349999904632568,-3.819000005722046 -1.343999981880188,-3.2899999618530273 -2.3540000915527344,-2.2899999618530273 C-2.3540000915527344,-2.2899999618530273 -2.3540000915527344,6.289000034332275 -2.3540000915527344,6.289000034332275 C-2.3540000915527344,6.289000034332275 -5.232999801635742,6.289000034332275 -5.232999801635742,6.289000034332275 C-5.232999801635742,6.289000034332275 -5.232999801635742,-5.988999843597412 -5.232999801635742,-5.988999843597412z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,322.93798828125,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.075000047683716,-6.438000202178955 1.1950000524520874,-6.438000202178955 C2.755000114440918,-6.438000202178955 3.8940000534057617,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384999990463257,-3.188999891281128 3.384999990463257,-3.188999891281128 C2.734999895095825,-3.757999897003174 2.115999937057495,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.003999948501587,-2.4489998817443848 -2.003999948501587,0.009999999776482582 C-2.003999948501587,2.4700000286102295 -0.6539999842643738,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2149999141693115,4.089000225067139 3.0950000286102295,3.61899995803833 3.7950000762939453,3.0290000438690186 C3.7950000762939453,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.815000057220459,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3940000534057617,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,334.2879943847656,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5950000286102295,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9149999618530273,3.319000005722046 C3.9149999618530273,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5829999446868896,-1.1699999570846558 C-2.5829999446868896,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,353.7430114746094,551.125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-6.083000183105469,-8.17300033569336 C-6.083000183105469,-8.17300033569336 -0.574999988079071,-8.17300033569336 -0.574999988079071,-8.17300033569336 C2.822999954223633,-8.17300033569336 5.442999839782715,-6.9730000495910645 5.442999839782715,-3.3239998817443848 C5.442999839782715,0.1899999976158142 2.822999954223633,1.784000039100647 -0.574999988079071,1.784000039100647 C-0.574999988079071,1.784000039100647 -3.184000015258789,1.784000039100647 -3.184000015258789,1.784000039100647 C-3.184000015258789,1.784000039100647 -3.184000015258789,8.17300033569336 -3.184000015258789,8.17300033569336 C-3.184000015258789,8.17300033569336 -6.083000183105469,8.17300033569336 -6.083000183105469,8.17300033569336 C-6.083000183105469,8.17300033569336 -6.083000183105469,-8.17300033569336 -6.083000183105469,-8.17300033569336z M-0.875,-0.5350000262260437 C1.3650000095367432,-0.5350000262260437 2.5840001106262207,-1.465000033378601 2.5840001106262207,-3.3239998817443848 C2.5840001106262207,-5.203999996185303 1.3650000095367432,-5.854000091552734 -0.875,-5.854000091552734 C-0.875,-5.854000091552734 -3.184000015258789,-5.854000091552734 -3.184000015258789,-5.854000091552734 C-3.184000015258789,-5.854000091552734 -3.184000015258789,-0.5350000262260437 -3.184000015258789,-0.5350000262260437 C-3.184000015258789,-0.5350000262260437 -0.875,-0.5350000262260437 -0.875,-0.5350000262260437z M-1.1200000047683716,1.0099999904632568 C-1.1200000047683716,1.0099999904632568 0.9789999723434448,-0.7200000286102295 0.9789999723434448,-0.7200000286102295 C0.9789999723434448,-0.7200000286102295 6.083000183105469,8.17300033569336 6.083000183105469,8.17300033569336 C6.083000183105469,8.17300033569336 2.8239998817443848,8.17300033569336 2.8239998817443848,8.17300033569336 C2.8239998817443848,8.17300033569336 -1.1200000047683716,1.0099999904632568 -1.1200000047683716,1.0099999904632568z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,366.447998046875,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.047999858856201,2.8399999141693115 C-5.047999858856201,0.20999999344348907 -2.869999885559082,-1.159000039100647 2.1689999103546143,-1.6990000009536743 C2.128999948501587,-3.0190000534057617 1.5989999771118164,-4.11899995803833 -0.05999999865889549,-4.11899995803833 C-1.2799999713897705,-4.11899995803833 -2.428999900817871,-3.569000005722046 -3.509000062942505,-2.9089999198913574 C-3.509000062942505,-2.9089999198913574 -4.568999767303467,-4.828999996185303 -4.568999767303467,-4.828999996185303 C-3.2190001010894775,-5.678999900817871 -1.4800000190734863,-6.438000202178955 0.4699999988079071,-6.438000202178955 C3.5390000343322754,-6.438000202178955 5.047999858856201,-4.548999786376953 5.047999858856201,-1.1299999952316284 C5.047999858856201,-1.1299999952316284 5.047999858856201,6.138999938964844 5.047999858856201,6.138999938964844 C5.047999858856201,6.138999938964844 2.688999891281128,6.138999938964844 2.688999891281128,6.138999938964844 C2.688999891281128,6.138999938964844 2.4690001010894775,4.7789998054504395 2.4690001010894775,4.7789998054504395 C2.4690001010894775,4.7789998054504395 2.3889999389648438,4.7789998054504395 2.3889999389648438,4.7789998054504395 C1.2890000343322754,5.7179999351501465 0.029999999329447746,6.438000202178955 -1.4190000295639038,6.438000202178955 C-3.568000078201294,6.438000202178955 -5.047999858856201,4.979000091552734 -5.047999858856201,2.8399999141693115z M2.1689999103546143,2.8499999046325684 C2.1689999103546143,2.8499999046325684 2.1689999103546143,0.09000000357627869 2.1689999103546143,0.09000000357627869 C-1.159999966621399,0.5099999904632568 -2.2690000534057617,1.3799999952316284 -2.2690000534057617,2.61899995803833 C-2.2690000534057617,3.7039999961853027 -1.5299999713897705,4.178999900817871 -0.5,4.178999900817871 C0.49900001287460327,4.178999900817871 1.2589999437332153,3.690000057220459 2.1689999103546143,2.8499999046325684z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,377.3080139160156,551.635009765625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-2.319999933242798,3.5239999294281006 C-2.319999933242798,3.5239999294281006 -2.319999933242798,-2.3239998817443848 -2.319999933242798,-2.3239998817443848 C-2.319999933242798,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 C-4.068999767303467,-2.3239998817443848 -4.068999767303467,-4.484000205993652 -4.068999767303467,-4.484000205993652 C-4.068999767303467,-4.484000205993652 -2.1689999103546143,-4.613999843597412 -2.1689999103546143,-4.613999843597412 C-2.1689999103546143,-4.613999843597412 -1.8300000429153442,-7.9629998207092285 -1.8300000429153442,-7.9629998207092285 C-1.8300000429153442,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 C0.5600000023841858,-7.9629998207092285 0.5600000023841858,-4.613999843597412 0.5600000023841858,-4.613999843597412 C0.5600000023841858,-4.613999843597412 3.688999891281128,-4.613999843597412 3.688999891281128,-4.613999843597412 C3.688999891281128,-4.613999843597412 3.688999891281128,-2.3239998817443848 3.688999891281128,-2.3239998817443848 C3.688999891281128,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 C0.5600000023841858,-2.3239998817443848 0.5600000023841858,3.5199999809265137 0.5600000023841858,3.5199999809265137 C0.5600000023841858,4.964000225067139 1.11899995803833,5.673999786376953 2.2990000247955322,5.673999786376953 C2.7190001010894775,5.673999786376953 3.2200000286102295,5.533999919891357 3.5799999237060547,5.394000053405762 C3.5799999237060547,5.394000053405762 4.068999767303467,7.513000011444092 4.068999767303467,7.513000011444092 C3.3989999294281006,7.734000205993652 2.5439999103546143,7.9629998207092285 1.559999942779541,7.9629998207092285 C-1.2699999809265137,7.9629998207092285 -2.319999933242798,6.172999858856201 -2.319999933242798,3.5239999294281006z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,387.7380065917969,553.1599731445312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5950000286102295,-6.438000202178955 0.2939999997615814,-6.438000202178955 C3.61299991607666,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.302999973297119,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.315000057220459,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7049999237060547,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,228.46200561523438,706.9619750976562)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-1.4170000553131104,14.803999900817871 C-4.3420000076293945,14.532999992370605 -7.177000045776367,13.319000244140625 -9.20199966430664,11.15999984741211 C-9.20199966430664,11.15999984741211 -6.771999835968018,7.875 -6.771999835968018,7.875 C-4.702000141143799,9.675000190734863 -2.5880000591278076,10.529000282287598 -0.2029999941587448,10.529000282287598 C2.7219998836517334,10.529000282287598 4.072000026702881,9.045000076293945 4.072000026702881,6.614999771118164 C4.072000026702881,1.3489999771118164 -8.121999740600586,1.215000033378601 -8.121999740600586,-6.75 C-8.121999740600586,-10.979000091552734 -5.51200008392334,-13.949000358581543 -1.4170000553131104,-14.668999671936035 C-1.4170000553131104,-14.668999671936035 -1.4170000553131104,-19.259000778198242 -1.4170000553131104,-19.259000778198242 C-1.4170000553131104,-19.259000778198242 2.2279999256134033,-19.259000778198242 2.2279999256134033,-19.259000778198242 C2.2279999256134033,-19.259000778198242 2.2279999256134033,-14.758999824523926 2.2279999256134033,-14.758999824523926 C5.063000202178955,-14.399999618530273 7.131999969482422,-13.050000190734863 8.79699993133545,-11.114999771118164 C8.79699993133545,-11.114999771118164 6.052000045776367,-8.234999656677246 6.052000045776367,-8.234999656677246 C4.566999912261963,-9.720000267028809 2.947999954223633,-10.529999732971191 0.7879999876022339,-10.529999732971191 C-1.5520000457763672,-10.529999732971191 -2.992000102996826,-9.225000381469727 -2.992000102996826,-6.974999904632568 C-2.992000102996826,-2.1610000133514404 9.20199966430664,-2.2060000896453857 9.20199966430664,6.209000110626221 C9.20199966430664,10.574000358581543 6.683000087738037,13.770000457763672 2.2279999256134033,14.625 C2.2279999256134033,14.625 2.2279999256134033,19.259000778198242 2.2279999256134033,19.259000778198242 C2.2279999256134033,19.259000778198242 -1.4170000553131104,19.259000778198242 -1.4170000553131104,19.259000778198242 C-1.4170000553131104,19.259000778198242 -1.4170000553131104,14.803999900817871 -1.4170000553131104,14.803999900817871z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,252.78399658203125,706.9609985351562)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,275.41900634765625,707.2310180664062)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.944999694824219,10.619999885559082 C-9.944999694824219,10.619999885559082 -7.514999866485596,7.199999809265137 -7.514999866485596,7.199999809265137 C-5.804999828338623,8.819999694824219 -3.690000057220459,10.258999824523926 -0.8550000190734863,10.258999824523926 C2.3399999141693115,10.258999824523926 4.590000152587891,8.234999656677246 4.590000152587891,4.860000133514404 C4.590000152587891,1.4850000143051147 2.5199999809265137,-0.4050000011920929 -0.5849999785423279,-0.4050000011920929 C-2.384999990463257,-0.4050000011920929 -3.4200000762939453,0.04500000178813934 -5.130000114440918,1.1699999570846558 C-5.130000114440918,1.1699999570846558 -7.650000095367432,-0.44999998807907104 -7.650000095367432,-0.44999998807907104 C-7.650000095367432,-0.44999998807907104 -6.795000076293945,-14.579999923706055 -6.795000076293945,-14.579999923706055 C-6.795000076293945,-14.579999923706055 8.593999862670898,-14.579999923706055 8.593999862670898,-14.579999923706055 C8.593999862670898,-14.579999923706055 8.593999862670898,-10.079999923706055 8.593999862670898,-10.079999923706055 C8.593999862670898,-10.079999923706055 -2.1600000858306885,-10.079999923706055 -2.1600000858306885,-10.079999923706055 C-2.1600000858306885,-10.079999923706055 -2.7899999618530273,-3.3299999237060547 -2.7899999618530273,-3.3299999237060547 C-1.5750000476837158,-3.9149999618530273 -0.4950000047683716,-4.230000019073486 0.9449999928474426,-4.230000019073486 C5.849999904632568,-4.230000019073486 9.944999694824219,-1.440000057220459 9.944999694824219,4.724999904632568 C9.944999694824219,10.979999542236328 5.130000114440918,14.579999923706055 -0.18000000715255737,14.579999923706055 C-4.815000057220459,14.579999923706055 -7.829999923706055,12.734999656677246 -9.944999694824219,10.619999885559082z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,294.20599365234375,722.10302734375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-4.117000102996826,4.521999835968018 C-1.1469999551773071,3.3519999980926514 0.5170000195503235,1.3279999494552612 0.47200000286102295,-0.9670000076293945 C0.3370000123977661,-0.9670000076293945 0.2029999941587448,-0.9670000076293945 0.06800000369548798,-0.9670000076293945 C-1.7319999933242798,-0.9670000076293945 -3.306999921798706,-2.0929999351501465 -3.306999921798706,-4.208000183105469 C-3.306999921798706,-6.186999797821045 -1.7330000400543213,-7.447000026702881 0.20200000703334808,-7.447000026702881 C2.7219998836517334,-7.447000026702881 4.117000102996826,-5.421999931335449 4.117000102996826,-2.002000093460083 C4.117000102996826,2.453000068664551 1.5529999732971191,5.873000144958496 -2.992000102996826,7.447000026702881 C-2.992000102996826,7.447000026702881 -4.117000102996826,4.521999835968018 -4.117000102996826,4.521999835968018z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,312.5429992675781,706.9609985351562)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M3.869999885559082,-9.8100004196167 C3.869999885559082,-9.8100004196167 -9.630000114440918,-9.8100004196167 -9.630000114440918,-9.8100004196167 C-9.630000114440918,-9.8100004196167 -9.630000114440918,-14.3100004196167 -9.630000114440918,-14.3100004196167 C-9.630000114440918,-14.3100004196167 9.630000114440918,-14.3100004196167 9.630000114440918,-14.3100004196167 C9.630000114440918,-14.3100004196167 9.630000114440918,-11.069000244140625 9.630000114440918,-11.069000244140625 C2.7899999618530273,-2.6540000438690186 1.440000057220459,3.1510000228881836 0.9449999928474426,14.3100004196167 C0.9449999928474426,14.3100004196167 -4.454999923706055,14.3100004196167 -4.454999923706055,14.3100004196167 C-3.9149999618530273,4.230999946594238 -1.8450000286102295,-2.069999933242798 3.869999885559082,-9.8100004196167z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,336.4840087890625,706.9609985351562)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,359.6579895019531,706.9609985351562)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.720000267028809,6.974999904632568 C-9.720000267028809,3.4200000762939453 -7.289999961853027,1.0800000429153442 -4.590000152587891,-0.35899999737739563 C-4.590000152587891,-0.35899999737739563 -4.590000152587891,-0.5400000214576721 -4.590000152587891,-0.5400000214576721 C-6.75,-2.115000009536743 -8.503999710083008,-4.184000015258789 -8.503999710083008,-7.198999881744385 C-8.503999710083008,-11.878999710083008 -4.815000057220459,-14.850000381469727 0.18000000715255737,-14.850000381469727 C5.309999942779541,-14.850000381469727 8.640000343322754,-11.744000434875488 8.640000343322754,-7.109000205993652 C8.640000343322754,-4.27400016784668 6.659999847412109,-1.8899999856948853 4.769999980926514,-0.5849999785423279 C4.769999980926514,-0.5849999785423279 4.769999980926514,-0.4050000011920929 4.769999980926514,-0.4050000011920929 C7.425000190734863,1.125 9.720000267028809,3.240000009536743 9.720000267028809,7.064000129699707 C9.720000267028809,11.473999977111816 5.849999904632568,14.850000381469727 0,14.850000381469727 C-5.579999923706055,14.850000381469727 -9.720000267028809,11.609999656677246 -9.720000267028809,6.974999904632568z M4.769999980926514,6.885000228881836 C4.769999980926514,3.825000047683716 1.7999999523162842,2.700000047683716 -2.069999933242798,1.125 C-3.7799999713897705,2.430000066757202 -5.039999961853027,4.276000022888184 -5.039999961853027,6.434999942779541 C-5.039999961853027,9.225000381469727 -2.7899999618530273,11.069000244140625 0.13500000536441803,11.069000244140625 C2.8350000381469727,11.069000244140625 4.769999980926514,9.494999885559082 4.769999980926514,6.885000228881836z M4.230000019073486,-6.795000076293945 C4.230000019073486,-9.270000457763672 2.700000047683716,-11.069000244140625 0.09000000357627869,-11.069000244140625 C-2.069999933242798,-11.069000244140625 -3.7799999713897705,-9.675000190734863 -3.7799999713897705,-7.198999881744385 C-3.7799999713897705,-4.409999847412109 -1.2599999904632568,-3.1500000953674316 1.8899999856948853,-1.8899999856948853 C3.375,-3.375 4.230000019073486,-4.994999885559082 4.230000019073486,-6.795000076293945z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,229.92300415039062,664.8729858398438)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-6.118000030517578,-8.17300033569336 C-6.118000030517578,-8.17300033569336 -3.1389999389648438,-8.17300033569336 -3.1389999389648438,-8.17300033569336 C-3.1389999389648438,-8.17300033569336 1.940000057220459,1.0149999856948853 1.940000057220459,1.0149999856948853 C1.940000057220459,1.0149999856948853 3.628999948501587,4.504000186920166 3.628999948501587,4.504000186920166 C3.628999948501587,4.504000186920166 3.7290000915527344,4.504000186920166 3.7290000915527344,4.504000186920166 C3.5889999866485596,2.815000057220459 3.3589999675750732,0.7450000047683716 3.3589999675750732,-1.0750000476837158 C3.3589999675750732,-1.0750000476837158 3.3589999675750732,-8.17300033569336 3.3589999675750732,-8.17300033569336 C3.3589999675750732,-8.17300033569336 6.118000030517578,-8.17300033569336 6.118000030517578,-8.17300033569336 C6.118000030517578,-8.17300033569336 6.118000030517578,8.17300033569336 6.118000030517578,8.17300033569336 C6.118000030517578,8.17300033569336 3.1389999389648438,8.17300033569336 3.1389999389648438,8.17300033569336 C3.1389999389648438,8.17300033569336 -1.940000057220459,-1.0299999713897705 -1.940000057220459,-1.0299999713897705 C-1.940000057220459,-1.0299999713897705 -3.628999948501587,-4.504000186920166 -3.628999948501587,-4.504000186920166 C-3.628999948501587,-4.504000186920166 -3.7290000915527344,-4.504000186920166 -3.7290000915527344,-4.504000186920166 C-3.5889999866485596,-2.7750000953674316 -3.3589999675750732,-0.8040000200271606 -3.3589999675750732,1.0149999856948853 C-3.3589999675750732,1.0149999856948853 -3.3589999675750732,8.17300033569336 -3.3589999675750732,8.17300033569336 C-3.3589999675750732,8.17300033569336 -6.118000030517578,8.17300033569336 -6.118000030517578,8.17300033569336 C-6.118000030517578,8.17300033569336 -6.118000030517578,-8.17300033569336 -6.118000030517578,-8.17300033569336z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,244.50799560546875,666.9080200195312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5940001010894775,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,255.1280059814453,665.3829956054688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-2.319999933242798,3.5239999294281006 C-2.319999933242798,3.5239999294281006 -2.319999933242798,-2.3239998817443848 -2.319999933242798,-2.3239998817443848 C-2.319999933242798,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 C-4.068999767303467,-2.3239998817443848 -4.068999767303467,-4.484000205993652 -4.068999767303467,-4.484000205993652 C-4.068999767303467,-4.484000205993652 -2.1700000762939453,-4.613999843597412 -2.1700000762939453,-4.613999843597412 C-2.1700000762939453,-4.613999843597412 -1.8289999961853027,-7.9629998207092285 -1.8289999961853027,-7.9629998207092285 C-1.8289999961853027,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 C0.5600000023841858,-7.9629998207092285 0.5600000023841858,-4.613999843597412 0.5600000023841858,-4.613999843597412 C0.5600000023841858,-4.613999843597412 3.688999891281128,-4.613999843597412 3.688999891281128,-4.613999843597412 C3.688999891281128,-4.613999843597412 3.688999891281128,-2.3239998817443848 3.688999891281128,-2.3239998817443848 C3.688999891281128,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 C0.5600000023841858,-2.3239998817443848 0.5600000023841858,3.5199999809265137 0.5600000023841858,3.5199999809265137 C0.5600000023841858,4.964000225067139 1.1200000047683716,5.673999786376953 2.299999952316284,5.673999786376953 C2.7200000286102295,5.673999786376953 3.2190001010894775,5.533999919891357 3.5789999961853027,5.394000053405762 C3.5789999961853027,5.394000053405762 4.068999767303467,7.513000011444092 4.068999767303467,7.513000011444092 C3.3989999294281006,7.734000205993652 2.5439999103546143,7.9629998207092285 1.559999942779541,7.9629998207092285 C-1.2699999809265137,7.9629998207092285 -2.319999933242798,6.172999858856201 -2.319999933242798,3.5239999294281006z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,272.3869934082031,664.8729858398438)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.734000205993652,-8.17300033569336 C-5.734000205993652,-8.17300033569336 -0.5849999785423279,-8.17300033569336 -0.5849999785423279,-8.17300033569336 C3.0439999103546143,-8.17300033569336 5.734000205993652,-6.913000106811523 5.734000205993652,-3.134999990463257 C5.734000205993652,0.5099999904632568 3.0339999198913574,2.1640000343322754 -0.48500001430511475,2.1640000343322754 C-0.48500001430511475,2.1640000343322754 -2.8340001106262207,2.1640000343322754 -2.8340001106262207,2.1640000343322754 C-2.8340001106262207,2.1640000343322754 -2.8340001106262207,8.17300033569336 -2.8340001106262207,8.17300033569336 C-2.8340001106262207,8.17300033569336 -5.734000205993652,8.17300033569336 -5.734000205993652,8.17300033569336 C-5.734000205993652,8.17300033569336 -5.734000205993652,-8.17300033569336 -5.734000205993652,-8.17300033569336z M-0.7250000238418579,-0.1550000011920929 C1.7139999866485596,-0.1550000011920929 2.874000072479248,-1.125 2.874000072479248,-3.134999990463257 C2.874000072479248,-5.164000034332275 1.6039999723434448,-5.854000091552734 -0.824999988079071,-5.854000091552734 C-0.824999988079071,-5.854000091552734 -2.8340001106262207,-5.854000091552734 -2.8340001106262207,-5.854000091552734 C-2.8340001106262207,-5.854000091552734 -2.8340001106262207,-0.1550000011920929 -2.8340001106262207,-0.1550000011920929 C-2.8340001106262207,-0.1550000011920929 -0.7250000238418579,-0.1550000011920929 -0.7250000238418579,-0.1550000011920929z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,284.72198486328125,666.7579956054688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-3.7690000534057617,-5.988999843597412 C-3.7690000534057617,-5.988999843597412 -1.409999966621399,-5.988999843597412 -1.409999966621399,-5.988999843597412 C-1.409999966621399,-5.988999843597412 -1.190000057220459,-3.7990000247955322 -1.190000057220459,-3.7990000247955322 C-1.190000057220459,-3.7990000247955322 -1.1100000143051147,-3.7990000247955322 -1.1100000143051147,-3.7990000247955322 C-0.23499999940395355,-5.39900016784668 1.065000057220459,-6.289000034332275 2.378999948501587,-6.289000034332275 C3.003999948501587,-6.289000034332275 3.3989999294281006,-6.209000110626221 3.7690000534057617,-6.039000034332275 C3.7690000534057617,-6.039000034332275 3.2690000534057617,-3.5390000343322754 3.2690000534057617,-3.5390000343322754 C2.8389999866485596,-3.6589999198913574 2.5190000534057617,-3.739000082015991 2.009000062942505,-3.739000082015991 C1.0299999713897705,-3.739000082015991 -0.15000000596046448,-3.069000005722046 -0.8899999856948853,-1.2000000476837158 C-0.8899999856948853,-1.2000000476837158 -0.8899999856948853,6.289000034332275 -0.8899999856948853,6.289000034332275 C-0.8899999856948853,6.289000034332275 -3.7690000534057617,6.289000034332275 -3.7690000534057617,6.289000034332275 C-3.7690000534057617,6.289000034332275 -3.7690000534057617,-5.988999843597412 -3.7690000534057617,-5.988999843597412z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,291.7279968261719,664.2039794921875)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.7799999713897705,-7.2129998207092285 C-1.7799999713897705,-8.182999610900879 -1.0199999809265137,-8.843000411987305 0,-8.843000411987305 C1.0199999809265137,-8.843000411987305 1.7799999713897705,-8.182999610900879 1.7799999713897705,-7.2129998207092285 C1.7799999713897705,-6.263999938964844 1.0199999809265137,-5.584000110626221 0,-5.584000110626221 C-1.0199999809265137,-5.584000110626221 -1.7799999713897705,-6.263999938964844 -1.7799999713897705,-7.2129998207092285z M-1.4490000009536743,-3.434999942779541 C-1.4490000009536743,-3.434999942779541 1.4299999475479126,-3.434999942779541 1.4299999475479126,-3.434999942779541 C1.4299999475479126,-3.434999942779541 1.4299999475479126,8.843000411987305 1.4299999475479126,8.843000411987305 C1.4299999475479126,8.843000411987305 -1.4490000009536743,8.843000411987305 -1.4490000009536743,8.843000411987305 C-1.4490000009536743,8.843000411987305 -1.4490000009536743,-3.434999942779541 -1.4490000009536743,-3.434999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,300.98199462890625,666.9080200195312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.0739998817443848,-6.438000202178955 1.1950000524520874,-6.438000202178955 C2.755000114440918,-6.438000202178955 3.8940000534057617,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384000062942505,-3.188999891281128 3.384000062942505,-3.188999891281128 C2.7339999675750732,-3.757999897003174 2.115000009536743,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.003999948501587,-2.4489998817443848 -2.003999948501587,0.009999999776482582 C-2.003999948501587,2.4700000286102295 -0.6549999713897705,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2149999141693115,4.089000225067139 3.0940001010894775,3.61899995803833 3.7939999103546143,3.0290000438690186 C3.7939999103546143,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.815000057220459,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3940000534057617,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,312.3320007324219,666.9080200195312)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5940001010894775,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.0139999389648438,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,226.9600067138672,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,249.57200622558594,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.92199993133545,10.800000190734863 C-9.92199993133545,10.800000190734863 -7.4029998779296875,7.425000190734863 -7.4029998779296875,7.425000190734863 C-5.692999839782715,9.135000228881836 -3.48799991607666,10.529000282287598 -0.652999997138977,10.529000282287598 C2.4070000648498535,10.529000282287598 4.566999912261963,8.954999923706055 4.566999912261963,6.300000190734863 C4.566999912261963,3.375 2.677999973297119,1.4850000143051147 -3.802000045776367,1.4850000143051147 C-3.802000045776367,1.4850000143051147 -3.802000045776367,-2.384999990463257 -3.802000045776367,-2.384999990463257 C1.777999997138977,-2.384999990463257 3.5769999027252197,-4.275000095367432 3.5769999027252197,-6.885000228881836 C3.5769999027252197,-9.225000381469727 2.046999931335449,-10.619000434875488 -0.5630000233650208,-10.619000434875488 C-2.7679998874664307,-10.619000434875488 -4.5229997634887695,-9.583999633789062 -6.2779998779296875,-7.965000152587891 C-6.2779998779296875,-7.965000152587891 -9.022000312805176,-11.24899959564209 -9.022000312805176,-11.24899959564209 C-6.546999931335449,-13.409000396728516 -3.802999973297119,-14.850000381469727 -0.33799999952316284,-14.850000381469727 C5.1519999504089355,-14.850000381469727 8.932000160217285,-12.104000091552734 8.932000160217285,-7.289000034332275 C8.932000160217285,-4.09499979019165 7.086999893188477,-1.934999942779541 3.9820001125335693,-0.7200000286102295 C3.9820001125335693,-0.7200000286102295 3.9820001125335693,-0.5400000214576721 3.9820001125335693,-0.5400000214576721 C7.35699987411499,0.36000001430511475 9.92199993133545,2.7899999618530273 9.92199993133545,6.570000171661377 C9.92199993133545,11.789999961853027 5.333000183105469,14.850000381469727 -0.20200000703334808,14.850000381469727 C-4.836999893188477,14.850000381469727 -7.896999835968018,13.095000267028809 -9.92199993133545,10.800000190734863z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,273.7139892578125,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.765000343322754,-0.13500000536441803 C-9.765000343322754,-9.8100004196167 -5.939000129699707,-14.850000381469727 0,-14.850000381469727 C5.985000133514404,-14.850000381469727 9.765000343322754,-9.765000343322754 9.765000343322754,-0.13500000536441803 C9.765000343322754,9.539999961853027 5.985000133514404,14.850000381469727 0,14.850000381469727 C-5.939000129699707,14.850000381469727 -9.765000343322754,9.539999961853027 -9.765000343322754,-0.13500000536441803z M4.679999828338623,-0.13500000536441803 C4.679999828338623,-8.1899995803833 2.744999885559082,-10.708999633789062 0,-10.708999633789062 C-2.700000047683716,-10.708999633789062 -4.679999828338623,-8.1899995803833 -4.679999828338623,-0.13500000536441803 C-4.679999828338623,7.965000152587891 -2.700000047683716,10.664999961853027 0,10.664999961853027 C2.744999885559082,10.664999961853027 4.679999828338623,7.965000152587891 4.679999828338623,-0.13500000536441803z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,297.2929992675781,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.765000343322754,-0.13500000536441803 C-9.765000343322754,-9.8100004196167 -5.939000129699707,-14.850000381469727 0,-14.850000381469727 C5.985000133514404,-14.850000381469727 9.765000343322754,-9.765000343322754 9.765000343322754,-0.13500000536441803 C9.765000343322754,9.539999961853027 5.985000133514404,14.850000381469727 0,14.850000381469727 C-5.939000129699707,14.850000381469727 -9.765000343322754,9.539999961853027 -9.765000343322754,-0.13500000536441803z M4.679999828338623,-0.13500000536441803 C4.679999828338623,-8.1899995803833 2.744999885559082,-10.708999633789062 0,-10.708999633789062 C-2.700000047683716,-10.708999633789062 -4.679999828338623,-8.1899995803833 -4.679999828338623,-0.13500000536441803 C-4.679999828338623,7.965000152587891 -2.700000047683716,10.664999961853027 0,10.664999961853027 C2.744999885559082,10.664999961853027 4.679999828338623,7.965000152587891 4.679999828338623,-0.13500000536441803z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,316.57598876953125,823.6799926757812)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-5.376999855041504,-1.934999942779541 C-5.376999855041504,-1.934999942779541 5.376999855041504,-1.934999942779541 5.376999855041504,-1.934999942779541 C5.376999855041504,-1.934999942779541 5.376999855041504,1.934999942779541 5.376999855041504,1.934999942779541 C5.376999855041504,1.934999942779541 -5.376999855041504,1.934999942779541 -5.376999855041504,1.934999942779541 C-5.376999855041504,1.934999942779541 -5.376999855041504,-1.934999942779541 -5.376999855041504,-1.934999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,336.26300048828125,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,358.89801025390625,820.97900390625)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.944999694824219,10.619999885559082 C-9.944999694824219,10.619999885559082 -7.514999866485596,7.199999809265137 -7.514999866485596,7.199999809265137 C-5.804999828338623,8.819999694824219 -3.690000057220459,10.258999824523926 -0.8550000190734863,10.258999824523926 C2.3399999141693115,10.258999824523926 4.590000152587891,8.234999656677246 4.590000152587891,4.860000133514404 C4.590000152587891,1.4850000143051147 2.5199999809265137,-0.4050000011920929 -0.5849999785423279,-0.4050000011920929 C-2.384999990463257,-0.4050000011920929 -3.4200000762939453,0.04500000178813934 -5.130000114440918,1.1699999570846558 C-5.130000114440918,1.1699999570846558 -7.650000095367432,-0.44999998807907104 -7.650000095367432,-0.44999998807907104 C-7.650000095367432,-0.44999998807907104 -6.795000076293945,-14.579999923706055 -6.795000076293945,-14.579999923706055 C-6.795000076293945,-14.579999923706055 8.593999862670898,-14.579999923706055 8.593999862670898,-14.579999923706055 C8.593999862670898,-14.579999923706055 8.593999862670898,-10.079999923706055 8.593999862670898,-10.079999923706055 C8.593999862670898,-10.079999923706055 -2.1600000858306885,-10.079999923706055 -2.1600000858306885,-10.079999923706055 C-2.1600000858306885,-10.079999923706055 -2.7899999618530273,-3.3299999237060547 -2.7899999618530273,-3.3299999237060547 C-1.5750000476837158,-3.9149999618530273 -0.4950000047683716,-4.230000019073486 0.9449999928474426,-4.230000019073486 C5.849999904632568,-4.230000019073486 9.944999694824219,-1.440000057220459 9.944999694824219,4.724999904632568 C9.944999694824219,10.979999542236328 5.130000114440918,14.579999923706055 -0.18000000715255737,14.579999923706055 C-4.815000057220459,14.579999923706055 -7.829999923706055,12.734999656677246 -9.944999694824219,10.619999885559082z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,382.4549865722656,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.92199993133545,10.800000190734863 C-9.92199993133545,10.800000190734863 -7.4019999504089355,7.425000190734863 -7.4019999504089355,7.425000190734863 C-5.692999839782715,9.135000228881836 -3.48799991607666,10.529000282287598 -0.652999997138977,10.529000282287598 C2.4070000648498535,10.529000282287598 4.566999912261963,8.954999923706055 4.566999912261963,6.300000190734863 C4.566999912261963,3.375 2.677000045776367,1.4850000143051147 -3.802000045776367,1.4850000143051147 C-3.802000045776367,1.4850000143051147 -3.802000045776367,-2.384999990463257 -3.802000045776367,-2.384999990463257 C1.777999997138977,-2.384999990463257 3.5769999027252197,-4.275000095367432 3.5769999027252197,-6.885000228881836 C3.5769999027252197,-9.225000381469727 2.046999931335449,-10.619000434875488 -0.5630000233650208,-10.619000434875488 C-2.7679998874664307,-10.619000434875488 -4.5229997634887695,-9.583999633789062 -6.2779998779296875,-7.965000152587891 C-6.2779998779296875,-7.965000152587891 -9.022000312805176,-11.24899959564209 -9.022000312805176,-11.24899959564209 C-6.546999931335449,-13.409000396728516 -3.802999973297119,-14.850000381469727 -0.33799999952316284,-14.850000381469727 C5.1519999504089355,-14.850000381469727 8.932000160217285,-12.104000091552734 8.932000160217285,-7.289000034332275 C8.932000160217285,-4.09499979019165 7.086999893188477,-1.934999942779541 3.9820001125335693,-0.7200000286102295 C3.9820001125335693,-0.7200000286102295 3.9820001125335693,-0.5400000214576721 3.9820001125335693,-0.5400000214576721 C7.35699987411499,0.36000001430511475 9.92199993133545,2.7899999618530273 9.92199993133545,6.570000171661377 C9.92199993133545,11.789999961853027 5.331999778747559,14.850000381469727 -0.2029999941587448,14.850000381469727 C-4.8379998207092285,14.850000381469727 -7.896999835968018,13.095000267028809 -9.92199993133545,10.800000190734863z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,406.59698486328125,820.708984375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.765000343322754,-0.13500000536441803 C-9.765000343322754,-9.8100004196167 -5.939000129699707,-14.850000381469727 0,-14.850000381469727 C5.985000133514404,-14.850000381469727 9.765000343322754,-9.765000343322754 9.765000343322754,-0.13500000536441803 C9.765000343322754,9.539999961853027 5.985000133514404,14.850000381469727 0,14.850000381469727 C-5.939000129699707,14.850000381469727 -9.765000343322754,9.539999961853027 -9.765000343322754,-0.13500000536441803z M4.679999828338623,-0.13500000536441803 C4.679999828338623,-8.1899995803833 2.744999885559082,-10.708999633789062 0,-10.708999633789062 C-2.700000047683716,-10.708999633789062 -4.679999828338623,-8.1899995803833 -4.679999828338623,-0.13500000536441803 C-4.679999828338623,7.965000152587891 -2.700000047683716,10.664999961853027 0,10.664999961853027 C2.744999885559082,10.664999961853027 4.679999828338623,7.965000152587891 4.679999828338623,-0.13500000536441803z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,226.3179931640625,778.6220092773438)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.877999782562256,6.078000068664551 C-5.877999782562256,6.078000068664551 -4.189000129699707,4.089000225067139 -4.189000129699707,4.089000225067139 C-3.0199999809265137,5.203000068664551 -1.4500000476837158,5.953000068664551 0.07000000029802322,5.953000068664551 C1.909999966621399,5.953000068664551 2.9189999103546143,5.118000030517578 2.9189999103546143,3.8440001010894775 C2.9189999103546143,2.499000072479248 1.8639999628067017,2.069000005722046 0.3799999952316284,1.4390000104904175 C0.3799999952316284,1.4390000104904175 -1.8539999723434448,0.4699999988079071 -1.8539999723434448,0.4699999988079071 C-3.4639999866485596,-0.20000000298023224 -5.158999919891357,-1.4739999771118164 -5.158999919891357,-3.864000082015991 C-5.158999919891357,-6.4679999351501465 -2.8589999675750732,-8.472999572753906 0.33000001311302185,-8.472999572753906 C2.239000082015991,-8.472999572753906 4.089000225067139,-7.684000015258789 5.36899995803833,-6.388999938964844 C5.36899995803833,-6.388999938964844 3.878999948501587,-4.548999786376953 3.878999948501587,-4.548999786376953 C2.8389999866485596,-5.434000015258789 1.7289999723434448,-5.953999996185303 0.33000001311302185,-5.953999996185303 C-1.2200000286102295,-5.953999996185303 -2.2290000915527344,-5.228000164031982 -2.2290000915527344,-4.033999919891357 C-2.2290000915527344,-2.749000072479248 -0.984000027179718,-2.2750000953674316 0.3700000047683716,-1.7200000286102295 C0.3700000047683716,-1.7200000286102295 2.5739998817443848,-0.7950000166893005 2.5739998817443848,-0.7950000166893005 C4.519000053405762,0.014999999664723873 5.877999782562256,1.24399995803833 5.877999782562256,3.614000082015991 C5.877999782562256,6.263000011444092 3.678999900817871,8.472999572753906 0.009999999776482582,8.472999572753906 C-2.1989998817443848,8.472999572753906 -4.328999996185303,7.6020002365112305 -5.877999782562256,6.078000068664551z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,240.08299255371094,778.6220092773438)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.7000000476837158,-8.17300033569336 C-1.7000000476837158,-8.17300033569336 1.6990000009536743,-8.17300033569336 1.6990000009536743,-8.17300033569336 C1.6990000009536743,-8.17300033569336 7.0279998779296875,8.17300033569336 7.0279998779296875,8.17300033569336 C7.0279998779296875,8.17300033569336 3.9590001106262207,8.17300033569336 3.9590001106262207,8.17300033569336 C3.9590001106262207,8.17300033569336 1.468999981880188,-0.5249999761581421 1.468999981880188,-0.5249999761581421 C0.9490000009536743,-2.253999948501587 0.4699999988079071,-4.11899995803833 -0.009999999776482582,-5.914000034332275 C-0.009999999776482582,-5.914000034332275 -0.10999999940395355,-5.914000034332275 -0.10999999940395355,-5.914000034332275 C-0.5600000023841858,-4.104000091552734 -1.0399999618530273,-2.253999948501587 -1.559999942779541,-0.5249999761581421 C-1.559999942779541,-0.5249999761581421 -4.068999767303467,8.17300033569336 -4.068999767303467,8.17300033569336 C-4.068999767303467,8.17300033569336 -7.0279998779296875,8.17300033569336 -7.0279998779296875,8.17300033569336 C-7.0279998779296875,8.17300033569336 -1.7000000476837158,-8.17300033569336 -1.7000000476837158,-8.17300033569336z M-3.878999948501587,1.4700000286102295 C-3.878999948501587,1.4700000286102295 3.819000005722046,1.4700000286102295 3.819000005722046,1.4700000286102295 C3.819000005722046,1.4700000286102295 3.819000005722046,3.74399995803833 3.819000005722046,3.74399995803833 C3.819000005722046,3.74399995803833 -3.878999948501587,3.74399995803833 -3.878999948501587,3.74399995803833 C-3.878999948501587,3.74399995803833 -3.878999948501587,1.4700000286102295 -3.878999948501587,1.4700000286102295z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,252.2830047607422,778.6220092773438)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.4490000009536743,-5.732999801635742 C-1.4490000009536743,-5.732999801635742 -6.168000221252441,-5.732999801635742 -6.168000221252441,-5.732999801635742 C-6.168000221252441,-5.732999801635742 -6.168000221252441,-8.17300033569336 -6.168000221252441,-8.17300033569336 C-6.168000221252441,-8.17300033569336 6.168000221252441,-8.17300033569336 6.168000221252441,-8.17300033569336 C6.168000221252441,-8.17300033569336 6.168000221252441,-5.732999801635742 6.168000221252441,-5.732999801635742 C6.168000221252441,-5.732999801635742 1.4500000476837158,-5.732999801635742 1.4500000476837158,-5.732999801635742 C1.4500000476837158,-5.732999801635742 1.4500000476837158,8.17300033569336 1.4500000476837158,8.17300033569336 C1.4500000476837158,8.17300033569336 -1.4490000009536743,8.17300033569336 -1.4490000009536743,8.17300033569336 C-1.4490000009536743,8.17300033569336 -1.4490000009536743,-5.732999801635742 -1.4490000009536743,-5.732999801635742z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,272.2669982910156,778.6220092773438)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-6.083000183105469,-8.17300033569336 C-6.083000183105469,-8.17300033569336 -0.574999988079071,-8.17300033569336 -0.574999988079071,-8.17300033569336 C2.8239998817443848,-8.17300033569336 5.443999767303467,-6.9730000495910645 5.443999767303467,-3.3239998817443848 C5.443999767303467,0.1899999976158142 2.8239998817443848,1.784000039100647 -0.574999988079071,1.784000039100647 C-0.574999988079071,1.784000039100647 -3.184000015258789,1.784000039100647 -3.184000015258789,1.784000039100647 C-3.184000015258789,1.784000039100647 -3.184000015258789,8.17300033569336 -3.184000015258789,8.17300033569336 C-3.184000015258789,8.17300033569336 -6.083000183105469,8.17300033569336 -6.083000183105469,8.17300033569336 C-6.083000183105469,8.17300033569336 -6.083000183105469,-8.17300033569336 -6.083000183105469,-8.17300033569336z M-0.875,-0.5350000262260437 C1.3650000095367432,-0.5350000262260437 2.5840001106262207,-1.465000033378601 2.5840001106262207,-3.3239998817443848 C2.5840001106262207,-5.203999996185303 1.3650000095367432,-5.854000091552734 -0.875,-5.854000091552734 C-0.875,-5.854000091552734 -3.184000015258789,-5.854000091552734 -3.184000015258789,-5.854000091552734 C-3.184000015258789,-5.854000091552734 -3.184000015258789,-0.5350000262260437 -3.184000015258789,-0.5350000262260437 C-3.184000015258789,-0.5350000262260437 -0.875,-0.5350000262260437 -0.875,-0.5350000262260437z M-1.1200000047683716,1.0099999904632568 C-1.1200000047683716,1.0099999904632568 0.9789999723434448,-0.7200000286102295 0.9789999723434448,-0.7200000286102295 C0.9789999723434448,-0.7200000286102295 6.083000183105469,8.17300033569336 6.083000183105469,8.17300033569336 C6.083000183105469,8.17300033569336 2.8239998817443848,8.17300033569336 2.8239998817443848,8.17300033569336 C2.8239998817443848,8.17300033569336 -1.1200000047683716,1.0099999904632568 -1.1200000047683716,1.0099999904632568z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,284.9729919433594,780.656005859375)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.048999786376953,2.8399999141693115 C-5.048999786376953,0.20999999344348907 -2.86899995803833,-1.159000039100647 2.1700000762939453,-1.6990000009536743 C2.130000114440918,-3.0190000534057617 1.5989999771118164,-4.11899995803833 -0.05999999865889549,-4.11899995803833 C-1.2799999713897705,-4.11899995803833 -2.428999900817871,-3.569000005722046 -3.509000062942505,-2.9089999198913574 C-3.509000062942505,-2.9089999198913574 -4.568999767303467,-4.828999996185303 -4.568999767303467,-4.828999996185303 C-3.2190001010894775,-5.678999900817871 -1.4800000190734863,-6.438000202178955 0.4699999988079071,-6.438000202178955 C3.5390000343322754,-6.438000202178955 5.048999786376953,-4.548999786376953 5.048999786376953,-1.1299999952316284 C5.048999786376953,-1.1299999952316284 5.048999786376953,6.138999938964844 5.048999786376953,6.138999938964844 C5.048999786376953,6.138999938964844 2.688999891281128,6.138999938964844 2.688999891281128,6.138999938964844 C2.688999891281128,6.138999938964844 2.4690001010894775,4.7789998054504395 2.4690001010894775,4.7789998054504395 C2.4690001010894775,4.7789998054504395 2.3889999389648438,4.7789998054504395 2.3889999389648438,4.7789998054504395 C1.2890000343322754,5.7179999351501465 0.029999999329447746,6.438000202178955 -1.4199999570846558,6.438000202178955 C-3.569000005722046,6.438000202178955 -5.048999786376953,4.979000091552734 -5.048999786376953,2.8399999141693115z M2.1700000762939453,2.8499999046325684 C2.1700000762939453,2.8499999046325684 2.1700000762939453,0.09000000357627869 2.1700000762939453,0.09000000357627869 C-1.159999966621399,0.5099999904632568 -2.2690000534057617,1.3799999952316284 -2.2690000534057617,2.61899995803833 C-2.2690000534057617,3.7039999961853027 -1.5299999713897705,4.178999900817871 -0.5,4.178999900817871 C0.5,4.178999900817871 1.2599999904632568,3.690000057220459 2.1700000762939453,2.8499999046325684z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,298.7170104980469,780.5059814453125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.234000205993652,-5.988999843597412 C-5.234000205993652,-5.988999843597412 -2.874000072479248,-5.988999843597412 -2.874000072479248,-5.988999843597412 C-2.874000072479248,-5.988999843597412 -2.6549999713897705,-4.328999996185303 -2.6549999713897705,-4.328999996185303 C-2.6549999713897705,-4.328999996185303 -2.5739998817443848,-4.328999996185303 -2.5739998817443848,-4.328999996185303 C-1.4739999771118164,-5.39900016784668 -0.22499999403953552,-6.289000034332275 1.4550000429153442,-6.289000034332275 C4.084000110626221,-6.289000034332275 5.234000205993652,-4.508999824523926 5.234000205993652,-1.409999966621399 C5.234000205993652,-1.409999966621399 5.234000205993652,6.289000034332275 5.234000205993652,6.289000034332275 C5.234000205993652,6.289000034332275 2.3540000915527344,6.289000034332275 2.3540000915527344,6.289000034332275 C2.3540000915527344,6.289000034332275 2.3540000915527344,-1.0399999618530273 2.3540000915527344,-1.0399999618530273 C2.3540000915527344,-3.059999942779541 1.774999976158142,-3.819000005722046 0.4449999928474426,-3.819000005722046 C-0.6349999904632568,-3.819000005722046 -1.343999981880188,-3.2899999618530273 -2.3540000915527344,-2.2899999618530273 C-2.3540000915527344,-2.2899999618530273 -2.3540000915527344,6.289000034332275 -2.3540000915527344,6.289000034332275 C-2.3540000915527344,6.289000034332275 -5.234000205993652,6.289000034332275 -5.234000205993652,6.289000034332275 C-5.234000205993652,6.289000034332275 -5.234000205993652,-5.988999843597412 -5.234000205993652,-5.988999843597412z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,312.47198486328125,783.219970703125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.828999996185303,5.803999900817871 C-5.828999996185303,4.769000053405762 -5.189000129699707,3.865000009536743 -4.059000015258789,3.184999942779541 C-4.059000015258789,3.184999942779541 -4.059000015258789,3.0840001106262207 -4.059000015258789,3.0840001106262207 C-4.689000129699707,2.674999952316284 -5.169000148773193,2.0239999294281006 -5.169000148773193,1.034999966621399 C-5.169000148773193,0.08500000089406967 -4.519000053405762,-0.7549999952316284 -3.809000015258789,-1.2549999952316284 C-3.809000015258789,-1.2549999952316284 -3.809000015258789,-1.3539999723434448 -3.809000015258789,-1.3539999723434448 C-4.64900016784668,-1.9739999771118164 -5.428999900817871,-3.1449999809265137 -5.428999900817871,-4.593999862670898 C-5.428999900817871,-7.413000106811523 -3.1489999294281006,-9.003000259399414 -0.5799999833106995,-9.003000259399414 C0.10000000149011612,-9.003000259399414 0.7400000095367432,-8.883000373840332 1.2400000095367432,-8.70300006866455 C1.2400000095367432,-8.70300006866455 5.627999782562256,-8.70300006866455 5.627999782562256,-8.70300006866455 C5.627999782562256,-8.70300006866455 5.627999782562256,-6.563000202178955 5.627999782562256,-6.563000202178955 C5.627999782562256,-6.563000202178955 3.3889999389648438,-6.563000202178955 3.3889999389648438,-6.563000202178955 C3.7890000343322754,-6.103000164031982 4.089000225067139,-5.343999862670898 4.089000225067139,-4.504000186920166 C4.089000225067139,-1.774999976158142 2.0199999809265137,-0.3140000104904175 -0.5799999833106995,-0.3140000104904175 C-1.100000023841858,-0.3140000104904175 -1.6890000104904175,-0.42500001192092896 -2.239000082015991,-0.6399999856948853 C-2.6089999675750732,-0.32600000500679016 -2.8389999866485596,-0.014999999664723873 -2.8389999866485596,0.5350000262260437 C-2.8389999866485596,1.2239999771118164 -2.3399999141693115,1.6449999809265137 -0.8500000238418579,1.6449999809265137 C-0.8500000238418579,1.6449999809265137 1.3339999914169312,1.6449999809265137 1.3339999914169312,1.6449999809265137 C4.269000053405762,1.6449999809265137 5.828999996185303,2.555000066757202 5.828999996185303,4.673999786376953 C5.828999996185303,7.093999862670898 3.2890000343322754,9.003000259399414 -0.7200000286102295,9.003000259399414 C-3.6489999294281006,9.003000259399414 -5.828999996185303,7.953000068664551 -5.828999996185303,5.803999900817871z M3.0490000247955322,5.144000053405762 C3.0490000247955322,4.195000171661377 2.2899999618530273,3.9140000343322754 0.8849999904632568,3.9140000343322754 C0.8849999904632568,3.9140000343322754 -0.800000011920929,3.9140000343322754 -0.800000011920929,3.9140000343322754 C-1.4600000381469727,3.9140000343322754 -1.9889999628067017,3.864000082015991 -2.4590001106262207,3.74399995803833 C-3.11899995803833,4.24399995803833 -3.4089999198913574,4.794000148773193 -3.4089999198913574,5.36299991607666 C-3.4089999198913574,6.482999801635742 -2.2100000381469727,7.133999824523926 -0.2800000011920929,7.133999824523926 C1.6990000009536743,7.133999824523926 3.0490000247955322,6.203999996185303 3.0490000247955322,5.144000053405762z M1.5499999523162842,-4.593999862670898 C1.5499999523162842,-6.133999824523926 0.6200000047683716,-7.013999938964844 -0.5799999833106995,-7.013999938964844 C-1.7799999713897705,-7.013999938964844 -2.7090001106262207,-6.144000053405762 -2.7090001106262207,-4.593999862670898 C-2.7090001106262207,-3.0339999198913574 -1.7599999904632568,-2.124000072479248 -0.5799999833106995,-2.124000072479248 C0.6000000238418579,-2.124000072479248 1.5499999523162842,-3.0339999198913574 1.5499999523162842,-4.593999862670898z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,324.6369934082031,780.656005859375)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5940001010894775,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.0139999389648438,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fill-opacity="1"
                          d=" M134.9980010986328,359.5570068359375 C134.9980010986328,359.5570068359375 -134.9980010986328,359.5570068359375 -134.9980010986328,359.5570068359375 C-146.91299438476562,359.5570068359375 -156.5709991455078,349.89898681640625 -156.5709991455078,337.9840087890625 C-156.5709991455078,337.9840087890625 -156.5709991455078,-337.9840087890625 -156.5709991455078,-337.9840087890625 C-156.5709991455078,-349.89898681640625 -146.91299438476562,-359.5570068359375 -134.9980010986328,-359.5570068359375 C-134.9980010986328,-359.5570068359375 134.9980010986328,-359.5570068359375 134.9980010986328,-359.5570068359375 C146.91299438476562,-359.5570068359375 156.5709991455078,-349.89898681640625 156.5709991455078,-337.9840087890625 C156.5709991455078,-337.9840087890625 156.5709991455078,337.9840087890625 156.5709991455078,337.9840087890625 C156.5709991455078,349.89898681640625 146.91299438476562,359.5570068359375 134.9980010986328,359.5570068359375z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(35,124,58)"
                          fill-opacity="1"
                          d=" M30.56399917602539,0 C30.56399917602539,16.8799991607666 16.8799991607666,30.56399917602539 0,30.56399917602539 C-16.8799991607666,30.56399917602539 -30.56399917602539,16.8799991607666 -30.56399917602539,0 C-30.56399917602539,-16.8799991607666 -16.8799991607666,-30.56399917602539 0,-30.56399917602539 C16.8799991607666,-30.56399917602539 30.56399917602539,-16.8799991607666 30.56399917602539,0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,620.6939697265625,489.95599365234375)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-10.895999908447266,1.5049999952316284 C-10.895999908447266,1.5049999952316284 -10.895999908447266,-14.654000282287598 -10.895999908447266,-14.654000282287598 C-10.895999908447266,-14.654000282287598 -5.790999889373779,-14.654000282287598 -5.790999889373779,-14.654000282287598 C-5.790999889373779,-14.654000282287598 -5.790999889373779,1.8930000066757202 -5.790999889373779,1.8930000066757202 C-5.790999889373779,8.159000396728516 -3.450000047683716,10.218000411987305 0.03500000014901161,10.218000411987305 C3.555999994277954,10.218000411987305 5.985000133514404,8.159000396728516 5.985000133514404,1.8930000066757202 C5.985000133514404,1.8930000066757202 5.985000133514404,-14.654000282287598 5.985000133514404,-14.654000282287598 C5.985000133514404,-14.654000282287598 10.895999908447266,-14.654000282287598 10.895999908447266,-14.654000282287598 C10.895999908447266,-14.654000282287598 10.895999908447266,1.5049999952316284 10.895999908447266,1.5049999952316284 C10.895999908447266,10.956999778747559 6.705999851226807,14.654000282287598 0.03500000014901161,14.654000282287598 C-6.636000156402588,14.654000282287598 -10.895999908447266,10.956999778747559 -10.895999908447266,1.5049999952316284z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,648.2639770507812,489.6910095214844)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-11.019000053405762,0.09700000286102295 C-11.019000053405762,-9.321000099182129 -5.123000144958496,-14.918000221252441 2.1649999618530273,-14.918000221252441 C5.7729997634887695,-14.918000221252441 8.642999649047852,-13.192999839782715 10.456000328063965,-11.27400016784668 C10.456000328063965,-11.27400016784668 7.7270002365112305,-7.982999801635742 7.7270002365112305,-7.982999801635742 C6.248000144958496,-9.461999893188477 4.52400016784668,-10.482000350952148 2.2709999084472656,-10.482000350952148 C-2.4110000133514404,-10.482000350952148 -5.77400016784668,-6.521999835968018 -5.77400016784668,-0.06199999898672104 C-5.77400016784668,6.504000186920166 -2.674999952316284,10.482000350952148 2.1480000019073486,10.482000350952148 C4.699999809265137,10.482000350952148 6.671000003814697,9.303000450134277 8.291000366210938,7.525000095367432 C8.291000366210938,7.525000095367432 11.019000053405762,10.729000091552734 11.019000053405762,10.729000091552734 C8.685999870300293,13.4399995803833 5.685999870300293,14.918000221252441 1.9539999961853027,14.918000221252441 C-5.281000137329102,14.918000221252441 -11.019000053405762,9.619000434875488 -11.019000053405762,0.09700000286102295z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,676.3350219726562,492.99200439453125)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-5.228000164031982,-1.8480000495910645 C-5.228000164031982,-1.8480000495910645 5.228000164031982,-1.8480000495910645 5.228000164031982,-1.8480000495910645 C5.228000164031982,-1.8480000495910645 5.228000164031982,1.8480000495910645 5.228000164031982,1.8480000495910645 C5.228000164031982,1.8480000495910645 -5.228000164031982,1.8480000495910645 -5.228000164031982,1.8480000495910645 C-5.228000164031982,1.8480000495910645 -5.228000164031982,-1.8480000495910645 -5.228000164031982,-1.8480000495910645z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,705.8419799804688,489.6910095214844)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-10.5,-14.390000343322754 C-10.5,-14.390000343322754 -1.2929999828338623,-14.390000343322754 -1.2929999828338623,-14.390000343322754 C4.620999813079834,-14.390000343322754 8.968999862670898,-12.576000213623047 8.968999862670898,-7.296000003814697 C8.968999862670898,-4.585000038146973 7.491000175476074,-1.9450000524520874 4.9730000495910645,-1.065000057220459 C4.9730000495910645,-1.065000057220459 4.9730000495910645,-0.8889999985694885 4.9730000495910645,-0.8889999985694885 C8.159000396728516,-0.16699999570846558 10.5,2.049999952316284 10.5,5.940999984741211 C10.5,11.696999549865723 5.7829999923706055,14.390000343322754 -0.5540000200271606,14.390000343322754 C-0.5540000200271606,14.390000343322754 -10.5,14.390000343322754 -10.5,14.390000343322754 C-10.5,14.390000343322754 -10.5,-14.390000343322754 -10.5,-14.390000343322754z M-1.7510000467300415,-2.507999897003174 C2.263000011444092,-2.507999897003174 3.9690001010894775,-4.074999809265137 3.9690001010894775,-6.574999809265137 C3.9690001010894775,-9.355999946594238 2.0850000381469727,-10.411999702453613 -1.6460000276565552,-10.411999702453613 C-1.6460000276565552,-10.411999702453613 -5.394999980926514,-10.411999702453613 -5.394999980926514,-10.411999702453613 C-5.394999980926514,-10.411999702453613 -5.394999980926514,-2.507999897003174 -5.394999980926514,-2.507999897003174 C-5.394999980926514,-2.507999897003174 -1.7510000467300415,-2.507999897003174 -1.7510000467300415,-2.507999897003174z M-1.0829999446868896,10.411999702453613 C3.1419999599456787,10.411999702453613 5.500999927520752,8.89799976348877 5.500999927520752,5.659999847412109 C5.500999927520752,2.631999969482422 3.2119998931884766,1.3109999895095825 -1.0829999446868896,1.3109999895095825 C-1.0829999446868896,1.3109999895095825 -5.394999980926514,1.3109999895095825 -5.394999980926514,1.3109999895095825 C-5.394999980926514,1.3109999895095825 -5.394999980926514,10.411999702453613 -5.394999980926514,10.411999702453613 C-5.394999980926514,10.411999702453613 -1.0829999446868896,10.411999702453613 -1.0829999446868896,10.411999702453613z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,729.18701171875,493.27398681640625)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-9.444000244140625,0.017999999225139618 C-9.444000244140625,-7.005000114440918 -4.567999839782715,-11.336000442504883 0.5189999938011169,-11.336000442504883 C6.36299991607666,-11.336000442504883 9.444000244140625,-7.111000061035156 9.444000244140625,-1.0740000009536743 C9.444000244140625,-0.10499999672174454 9.338000297546387,0.8629999756813049 9.223999977111816,1.3910000324249268 C9.223999977111816,1.3910000324249268 -4.498000144958496,1.3910000324249268 -4.498000144958496,1.3910000324249268 C-4.076000213623047,5.228000164031982 -1.6100000143051147,7.409999847412109 1.875,7.409999847412109 C3.7239999771118164,7.409999847412109 5.307000160217285,6.828999996185303 6.890999794006348,5.843999862670898 C6.890999794006348,5.843999862670898 8.616000175476074,8.994000434875488 8.616000175476074,8.994000434875488 C6.557000160217285,10.385000228881836 3.9519999027252197,11.336000442504883 1.2059999704360962,11.336000442504883 C-4.761000156402588,11.336000442504883 -9.444000244140625,7.146999835968018 -9.444000244140625,0.017999999225139618z M5.060999870300293,-2.059999942779541 C5.060999870300293,-5.38700008392334 3.5820000171661377,-7.410999774932861 0.625,-7.410999774932861 C-1.8919999599456787,-7.410999774932861 -4.110000133514404,-5.5279998779296875 -4.550000190734863,-2.059999942779541 C-4.550000190734863,-2.059999942779541 5.060999870300293,-2.059999942779541 5.060999870300293,-2.059999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,750.1129760742188,493.010009765625)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-6.636000156402588,-10.543999671936035 C-6.636000156402588,-10.543999671936035 -2.4820001125335693,-10.543999671936035 -2.4820001125335693,-10.543999671936035 C-2.4820001125335693,-10.543999671936035 -2.0950000286102295,-6.689000129699707 -2.0950000286102295,-6.689000129699707 C-2.0950000286102295,-6.689000129699707 -1.9539999961853027,-6.689000129699707 -1.9539999961853027,-6.689000129699707 C-0.414000004529953,-9.505000114440918 1.8739999532699585,-11.071999549865723 4.189000129699707,-11.071999549865723 C5.289000034332275,-11.071999549865723 5.985000133514404,-10.930999755859375 6.636000156402588,-10.631999969482422 C6.636000156402588,-10.631999969482422 5.75600004196167,-6.23199987411499 5.75600004196167,-6.23199987411499 C4.999000072479248,-6.442999839782715 4.435999870300293,-6.583000183105469 3.5380001068115234,-6.583000183105469 C1.812999963760376,-6.583000183105469 -0.2639999985694885,-5.4039998054504395 -1.565999984741211,-2.11299991607666 C-1.565999984741211,-2.11299991607666 -1.565999984741211,11.071999549865723 -1.565999984741211,11.071999549865723 C-1.565999984741211,11.071999549865723 -6.636000156402588,11.071999549865723 -6.636000156402588,11.071999549865723 C-6.636000156402588,11.071999549865723 -6.636000156402588,-10.543999671936035 -6.636000156402588,-10.543999671936035z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,769.5960083007812,488.53900146484375)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-9.708000183105469,-15.543000221252441 C-9.708000183105469,-15.543000221252441 -4.74399995803833,-15.543000221252441 -4.74399995803833,-15.543000221252441 C-4.74399995803833,-15.543000221252441 -4.74399995803833,3.871999979019165 -4.74399995803833,3.871999979019165 C-4.74399995803833,3.871999979019165 -4.603000164031982,3.871999979019165 -4.603000164031982,3.871999979019165 C-4.603000164031982,3.871999979019165 3.4059998989105225,-6.072999954223633 3.4059998989105225,-6.072999954223633 C3.4059998989105225,-6.072999954223633 8.951000213623047,-6.072999954223633 8.951000213623047,-6.072999954223633 C8.951000213623047,-6.072999954223633 1.5399999618530273,2.7290000915527344 1.5399999618530273,2.7290000915527344 C1.5399999618530273,2.7290000915527344 9.708000183105469,15.543000221252441 9.708000183105469,15.543000221252441 C9.708000183105469,15.543000221252441 4.197999954223633,15.543000221252441 4.197999954223633,15.543000221252441 C4.197999954223633,15.543000221252441 -1.3639999628067017,6.160999774932861 -1.3639999628067017,6.160999774932861 C-1.3639999628067017,6.160999774932861 -4.74399995803833,10.050999641418457 -4.74399995803833,10.050999641418457 C-4.74399995803833,10.050999641418457 -4.74399995803833,15.543000221252441 -4.74399995803833,15.543000221252441 C-4.74399995803833,15.543000221252441 -9.708000183105469,15.543000221252441 -9.708000183105469,15.543000221252441 C-9.708000183105469,15.543000221252441 -9.708000183105469,-15.543000221252441 -9.708000183105469,-15.543000221252441z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,789.8619995117188,493.27398681640625)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-9.444000244140625,0.017999999225139618 C-9.444000244140625,-7.005000114440918 -4.567999839782715,-11.336000442504883 0.5189999938011169,-11.336000442504883 C6.36299991607666,-11.336000442504883 9.444000244140625,-7.111000061035156 9.444000244140625,-1.0740000009536743 C9.444000244140625,-0.10499999672174454 9.338000297546387,0.8629999756813049 9.223999977111816,1.3910000324249268 C9.223999977111816,1.3910000324249268 -4.498000144958496,1.3910000324249268 -4.498000144958496,1.3910000324249268 C-4.076000213623047,5.228000164031982 -1.6100000143051147,7.409999847412109 1.875,7.409999847412109 C3.7230000495910645,7.409999847412109 5.308000087738037,6.828999996185303 6.892000198364258,5.843999862670898 C6.892000198364258,5.843999862670898 8.616000175476074,8.994000434875488 8.616000175476074,8.994000434875488 C6.557000160217285,10.385000228881836 3.9519999027252197,11.336000442504883 1.2059999704360962,11.336000442504883 C-4.761000156402588,11.336000442504883 -9.444000244140625,7.146999835968018 -9.444000244140625,0.017999999225139618z M5.060999870300293,-2.059999942779541 C5.060999870300293,-5.38700008392334 3.5820000171661377,-7.410999774932861 0.625,-7.410999774932861 C-1.8919999599456787,-7.410999774932861 -4.110000133514404,-5.5279998779296875 -4.550000190734863,-2.059999942779541 C-4.550000190734863,-2.059999942779541 5.060999870300293,-2.059999942779541 5.060999870300293,-2.059999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,807.9450073242188,488.8030090332031)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-3.7929999828338623,9.715999603271484 C-3.7929999828338623,9.715999603271484 -3.7929999828338623,-15.807000160217285 -3.7929999828338623,-15.807000160217285 C-3.7929999828338623,-15.807000160217285 1.2760000228881836,-15.807000160217285 1.2760000228881836,-15.807000160217285 C1.2760000228881836,-15.807000160217285 1.2760000228881836,9.979999542236328 1.2760000228881836,9.979999542236328 C1.2760000228881836,11.229999542236328 1.840000033378601,11.670000076293945 2.368000030517578,11.670000076293945 C2.5969998836517334,11.670000076293945 2.7730000019073486,11.670999526977539 3.1600000858306885,11.583000183105469 C3.1600000858306885,11.583000183105469 3.7929999828338623,15.366999626159668 3.7929999828338623,15.366999626159668 C3.177000045776367,15.61299991607666 2.3329999446868896,15.807000160217285 1.1180000305175781,15.807000160217285 C-2.4730000495910645,15.807000160217285 -3.7929999828338623,13.482999801635742 -3.7929999828338623,9.715999603271484z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,824.093017578125,493.27398681640625)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-9.444000244140625,0.017999999225139618 C-9.444000244140625,-7.005000114440918 -4.567999839782715,-11.336000442504883 0.5189999938011169,-11.336000442504883 C6.36299991607666,-11.336000442504883 9.444000244140625,-7.111000061035156 9.444000244140625,-1.0740000009536743 C9.444000244140625,-0.10499999672174454 9.338000297546387,0.8629999756813049 9.223999977111816,1.3910000324249268 C9.223999977111816,1.3910000324249268 -4.498000144958496,1.3910000324249268 -4.498000144958496,1.3910000324249268 C-4.076000213623047,5.228000164031982 -1.6100000143051147,7.409999847412109 1.875,7.409999847412109 C3.7230000495910645,7.409999847412109 5.308000087738037,6.828999996185303 6.892000198364258,5.843999862670898 C6.892000198364258,5.843999862670898 8.616000175476074,8.994000434875488 8.616000175476074,8.994000434875488 C6.557000160217285,10.385000228881836 3.9519999027252197,11.336000442504883 1.2059999704360962,11.336000442504883 C-4.761000156402588,11.336000442504883 -9.444000244140625,7.146999835968018 -9.444000244140625,0.017999999225139618z M5.060999870300293,-2.059999942779541 C5.060999870300293,-5.38700008392334 3.5820000171661377,-7.410999774932861 0.625,-7.410999774932861 C-1.8919999599456787,-7.410999774932861 -4.110000133514404,-5.5279998779296875 -4.550000190734863,-2.059999942779541 C-4.550000190734863,-2.059999942779541 5.060999870300293,-2.059999942779541 5.060999870300293,-2.059999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,846.0490112304688,497.7090148925781)"
                      >
                        <path
                          fill="rgb(0,0,0)"
                          fill-opacity="1"
                          d=" M-9.057000160217285,14.803999900817871 C-9.057000160217285,14.803999900817871 -8.12399959564209,10.878000259399414 -8.12399959564209,10.878000259399414 C-7.710000038146973,11.001999855041504 -7.085000038146973,11.178000450134277 -6.574999809265137,11.178000450134277 C-4.303999900817871,11.178000450134277 -2.9839999675750732,9.628999710083008 -2.26200008392334,7.464000225067139 C-2.26200008392334,7.464000225067139 -1.8569999933242798,6.107999801635742 -1.8569999933242798,6.107999801635742 C-1.8569999933242798,6.107999801635742 -10.359000205993652,-15.244000434875488 -10.359000205993652,-15.244000434875488 C-10.359000205993652,-15.244000434875488 -5.218999862670898,-15.244000434875488 -5.218999862670898,-15.244000434875488 C-5.218999862670898,-15.244000434875488 -1.4869999885559082,-4.646999835968018 -1.4869999885559082,-4.646999835968018 C-0.8360000252723694,-2.7279999256134033 -0.2199999988079071,-0.5989999771118164 0.414000004529953,1.4609999656677246 C0.414000004529953,1.4609999656677246 0.5899999737739563,1.4609999656677246 0.5899999737739563,1.4609999656677246 C1.1349999904632568,-0.5460000038146973 1.680999994277954,-2.674999952316284 2.24399995803833,-4.646999835968018 C2.24399995803833,-4.646999835968018 5.465000152587891,-15.244000434875488 5.465000152587891,-15.244000434875488 C5.465000152587891,-15.244000434875488 10.359000205993652,-15.244000434875488 10.359000205993652,-15.244000434875488 C10.359000205993652,-15.244000434875488 2.5429999828338623,7.35699987411499 2.5429999828338623,7.35699987411499 C0.7480000257492065,12.223999977111816 -1.5219999551773071,15.244000434875488 -6.239999771118164,15.244000434875488 C-7.419000148773193,15.244000434875488 -8.265000343322754,15.067999839782715 -9.057000160217285,14.803999900817871z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,617.3619995117188,591.97802734375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,640.6710205078125,591.97802734375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.718999862670898,0.8550000190734863 C-9.718999862670898,-10.21500015258789 -4.320000171661377,-14.850000381469727 1.5750000476837158,-14.850000381469727 C5.039999961853027,-14.850000381469727 7.559999942779541,-13.409000396728516 9.270000457763672,-11.609000205993652 C9.270000457763672,-11.609000205993652 6.434999942779541,-8.369000434875488 6.434999942779541,-8.369000434875488 C5.355000019073486,-9.583999633789062 3.5999999046325684,-10.529000282287598 1.8450000286102295,-10.529000282287598 C-1.6649999618530273,-10.529000282287598 -4.590000152587891,-7.875 -4.815000057220459,-0.09000000357627869 C-3.1500000953674316,-2.1600000858306885 -0.675000011920929,-3.4200000762939453 1.3949999809265137,-3.4200000762939453 C6.300000190734863,-3.4200000762939453 9.718999862670898,-0.5400000214576721 9.718999862670898,5.445000171661377 C9.718999862670898,11.15999984741211 5.625,14.850000381469727 0.675000011920929,14.850000381469727 C-4.90500020980835,14.850000381469727 -9.718999862670898,10.529000282287598 -9.718999862670898,0.8550000190734863z M-4.679999828338623,3.690000057220459 C-4.139999866485596,8.684000015258789 -2.115000009536743,10.800000190734863 0.6299999952316284,10.800000190734863 C2.9700000286102295,10.800000190734863 4.815000057220459,8.90999984741211 4.815000057220459,5.445000171661377 C4.815000057220459,2.115000009536743 3.1500000953674316,0.4050000011920929 0.4050000011920929,0.4050000011920929 C-1.2599999904632568,0.4050000011920929 -3.240000009536743,1.3949999809265137 -4.679999828338623,3.690000057220459z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,671.5180053710938,591.572998046875)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-17.617000579833984,-5.985000133514404 C-17.617000579833984,-11.880000114440918 -14.737000465393066,-15.253999710083008 -10.597000122070312,-15.253999710083008 C-6.456999778747559,-15.253999710083008 -3.5320000648498535,-11.880000114440918 -3.5320000648498535,-5.985000133514404 C-3.5320000648498535,-0.04600000008940697 -6.456999778747559,3.375 -10.597000122070312,3.375 C-14.737000465393066,3.375 -17.617000579833984,-0.04600000008940697 -17.617000579833984,-5.985000133514404z M-7.35699987411499,-5.985000133514404 C-7.35699987411499,-10.395000457763672 -8.751999855041504,-12.194999694824219 -10.597000122070312,-12.194999694824219 C-12.442000389099121,-12.194999694824219 -13.836999893188477,-10.395000457763672 -13.836999893188477,-5.985000133514404 C-13.836999893188477,-1.5750000476837158 -12.442000389099121,0.3149999976158142 -10.597000122070312,0.3149999976158142 C-8.751999855041504,0.3149999976158142 -7.35699987411499,-1.5750000476837158 -7.35699987411499,-5.985000133514404z M6.367000102996826,-15.253999710083008 C6.367000102996826,-15.253999710083008 9.607000350952148,-15.253999710083008 9.607000350952148,-15.253999710083008 C9.607000350952148,-15.253999710083008 -6.4120001792907715,15.253999710083008 -6.4120001792907715,15.253999710083008 C-6.4120001792907715,15.253999710083008 -9.652000427246094,15.253999710083008 -9.652000427246094,15.253999710083008 C-9.652000427246094,15.253999710083008 6.367000102996826,-15.253999710083008 6.367000102996826,-15.253999710083008z M3.5320000648498535,5.894999980926514 C3.5320000648498535,-0.0010000000474974513 6.4120001792907715,-3.375 10.552000045776367,-3.375 C14.692000389099121,-3.375 17.617000579833984,-0.0010000000474974513 17.617000579833984,5.894999980926514 C17.617000579833984,11.833999633789062 14.692000389099121,15.253999710083008 10.552000045776367,15.253999710083008 C6.4120001792907715,15.253999710083008 3.5320000648498535,11.833999633789062 3.5320000648498535,5.894999980926514z M13.791999816894531,5.894999980926514 C13.791999816894531,1.4850000143051147 12.397000312805176,-0.3149999976158142 10.552000045776367,-0.3149999976158142 C8.706999778747559,-0.3149999976158142 7.311999797821045,1.4850000143051147 7.311999797821045,5.894999980926514 C7.311999797821045,10.303999900817871 8.706999778747559,12.194999694824219 10.552000045776367,12.194999694824219 C12.397000312805176,12.194999694824219 13.791999816894531,10.303999900817871 13.791999816894531,5.894999980926514z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,616.8610229492188,549.8900146484375)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.6990000009536743,-8.17300033569336 C-1.6990000009536743,-8.17300033569336 1.6990000009536743,-8.17300033569336 1.6990000009536743,-8.17300033569336 C1.6990000009536743,-8.17300033569336 7.0279998779296875,8.17300033569336 7.0279998779296875,8.17300033569336 C7.0279998779296875,8.17300033569336 3.9590001106262207,8.17300033569336 3.9590001106262207,8.17300033569336 C3.9590001106262207,8.17300033569336 1.4700000286102295,-0.5249999761581421 1.4700000286102295,-0.5249999761581421 C0.949999988079071,-2.253999948501587 0.4690000116825104,-4.11899995803833 -0.009999999776482582,-5.914000034332275 C-0.009999999776482582,-5.914000034332275 -0.10999999940395355,-5.914000034332275 -0.10999999940395355,-5.914000034332275 C-0.5590000152587891,-4.104000091552734 -1.0399999618530273,-2.253999948501587 -1.559999942779541,-0.5249999761581421 C-1.559999942779541,-0.5249999761581421 -4.068999767303467,8.17300033569336 -4.068999767303467,8.17300033569336 C-4.068999767303467,8.17300033569336 -7.0279998779296875,8.17300033569336 -7.0279998779296875,8.17300033569336 C-7.0279998779296875,8.17300033569336 -1.6990000009536743,-8.17300033569336 -1.6990000009536743,-8.17300033569336z M-3.878999948501587,1.4700000286102295 C-3.878999948501587,1.4700000286102295 3.819000005722046,1.4700000286102295 3.819000005722046,1.4700000286102295 C3.819000005722046,1.4700000286102295 3.819000005722046,3.74399995803833 3.819000005722046,3.74399995803833 C3.819000005722046,3.74399995803833 -3.878999948501587,3.74399995803833 -3.878999948501587,3.74399995803833 C-3.878999948501587,3.74399995803833 -3.878999948501587,1.4700000286102295 -3.878999948501587,1.4700000286102295z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,629.8159790039062,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.075000047683716,-6.438000202178955 1.1950000524520874,-6.438000202178955 C2.755000114440918,-6.438000202178955 3.8940000534057617,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384999990463257,-3.188999891281128 3.384999990463257,-3.188999891281128 C2.734999895095825,-3.757999897003174 2.115999937057495,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.003999948501587,-2.4489998817443848 -2.003999948501587,0.009999999776482582 C-2.003999948501587,2.4700000286102295 -0.6539999842643738,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2149999141693115,4.089000225067139 3.0950000286102295,3.61899995803833 3.7950000762939453,3.0290000438690186 C3.7950000762939453,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.815000057220459,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3940000534057617,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,640.7659912109375,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.075000047683716,-6.438000202178955 1.194000005722046,-6.438000202178955 C2.753999948501587,-6.438000202178955 3.8929998874664307,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384000062942505,-3.188999891281128 3.384000062942505,-3.188999891281128 C2.734999895095825,-3.757999897003174 2.115000009536743,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.005000114440918,-2.4489998817443848 -2.005000114440918,0.009999999776482582 C-2.005000114440918,2.4700000286102295 -0.6549999713897705,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2139999866485596,4.089000225067139 3.0940001010894775,3.61899995803833 3.7939999103546143,3.0290000438690186 C3.7939999103546143,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.813999891281128,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3949999809265137,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,652.1160278320312,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5950000286102295,-6.438000202178955 0.2939999997615814,-6.438000202178955 C3.61299991607666,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.302999973297119,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.315000057220459,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7049999237060547,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,665.8300170898438,554.2039794921875)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.593999862670898,-8.418000221252441 C-5.593999862670898,-8.418000221252441 -3.2339999675750732,-8.418000221252441 -3.2339999675750732,-8.418000221252441 C-3.2339999675750732,-8.418000221252441 -3.015000104904175,-7.107999801635742 -3.015000104904175,-7.107999801635742 C-3.015000104904175,-7.107999801635742 -2.934999942779541,-7.107999801635742 -2.934999942779541,-7.107999801635742 C-1.899999976158142,-7.998000144958496 -0.5849999785423279,-8.718000411987305 0.7649999856948853,-8.718000411987305 C3.8340001106262207,-8.718000411987305 5.593999862670898,-6.257999897003174 5.593999862670898,-2.4690001010894775 C5.593999862670898,1.7289999723434448 3.0840001106262207,4.158999919891357 0.35499998927116394,4.158999919891357 C-0.7350000143051147,4.158999919891357 -1.8049999475479126,3.6689999103546143 -2.805000066757202,2.809999942779541 C-2.805000066757202,2.809999942779541 -2.7139999866485596,4.849999904632568 -2.7139999866485596,4.849999904632568 C-2.7139999866485596,4.849999904632568 -2.7139999866485596,8.718000411987305 -2.7139999866485596,8.718000411987305 C-2.7139999866485596,8.718000411987305 -5.593999862670898,8.718000411987305 -5.593999862670898,8.718000411987305 C-5.593999862670898,8.718000411987305 -5.593999862670898,-8.418000221252441 -5.593999862670898,-8.418000221252441z M2.634999990463257,-2.438999891281128 C2.634999990463257,-4.888000011444092 1.8350000381469727,-6.3379998207092285 -0.03500000014901161,-6.3379998207092285 C-0.925000011920929,-6.3379998207092285 -1.7649999856948853,-5.888999938964844 -2.7139999866485596,-4.958000183105469 C-2.7139999866485596,-4.958000183105469 -2.7139999866485596,0.7599999904632568 -2.7139999866485596,0.7599999904632568 C-1.8339999914169312,1.5099999904632568 -0.9649999737739563,1.7799999713897705 -0.2549999952316284,1.7799999713897705 C1.3849999904632568,1.7799999713897705 2.634999990463257,0.3400000035762787 2.634999990463257,-2.438999891281128z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,676.5360107421875,550.4000244140625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-2.319000005722046,3.5239999294281006 C-2.319000005722046,3.5239999294281006 -2.319000005722046,-2.3239998817443848 -2.319000005722046,-2.3239998817443848 C-2.319000005722046,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 C-4.068999767303467,-2.3239998817443848 -4.068999767303467,-4.484000205993652 -4.068999767303467,-4.484000205993652 C-4.068999767303467,-4.484000205993652 -2.1700000762939453,-4.613999843597412 -2.1700000762939453,-4.613999843597412 C-2.1700000762939453,-4.613999843597412 -1.8289999961853027,-7.9629998207092285 -1.8289999961853027,-7.9629998207092285 C-1.8289999961853027,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 C0.5600000023841858,-7.9629998207092285 0.5600000023841858,-4.613999843597412 0.5600000023841858,-4.613999843597412 C0.5600000023841858,-4.613999843597412 3.688999891281128,-4.613999843597412 3.688999891281128,-4.613999843597412 C3.688999891281128,-4.613999843597412 3.688999891281128,-2.3239998817443848 3.688999891281128,-2.3239998817443848 C3.688999891281128,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 C0.5600000023841858,-2.3239998817443848 0.5600000023841858,3.5199999809265137 0.5600000023841858,3.5199999809265137 C0.5600000023841858,4.964000225067139 1.1200000047683716,5.673999786376953 2.299999952316284,5.673999786376953 C2.7200000286102295,5.673999786376953 3.2200000286102295,5.533999919891357 3.5789999961853027,5.394000053405762 C3.5789999961853027,5.394000053405762 4.068999767303467,7.513000011444092 4.068999767303467,7.513000011444092 C3.3989999294281006,7.734000205993652 2.5439999103546143,7.9629998207092285 1.559999942779541,7.9629998207092285 C-1.2690000534057617,7.9629998207092285 -2.319000005722046,6.172999858856201 -2.319000005722046,3.5239999294281006z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,686.676025390625,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.048999786376953,2.8399999141693115 C-5.048999786376953,0.20999999344348907 -2.86899995803833,-1.159000039100647 2.1689999103546143,-1.6990000009536743 C2.130000114440918,-3.0190000534057617 1.5989999771118164,-4.11899995803833 -0.05999999865889549,-4.11899995803833 C-1.2799999713897705,-4.11899995803833 -2.430000066757202,-3.569000005722046 -3.509000062942505,-2.9089999198913574 C-3.509000062942505,-2.9089999198913574 -4.568999767303467,-4.828999996185303 -4.568999767303467,-4.828999996185303 C-3.2190001010894775,-5.678999900817871 -1.4789999723434448,-6.438000202178955 0.4699999988079071,-6.438000202178955 C3.5390000343322754,-6.438000202178955 5.048999786376953,-4.548999786376953 5.048999786376953,-1.1299999952316284 C5.048999786376953,-1.1299999952316284 5.048999786376953,6.138999938964844 5.048999786376953,6.138999938964844 C5.048999786376953,6.138999938964844 2.688999891281128,6.138999938964844 2.688999891281128,6.138999938964844 C2.688999891281128,6.138999938964844 2.4700000286102295,4.7789998054504395 2.4700000286102295,4.7789998054504395 C2.4700000286102295,4.7789998054504395 2.390000104904175,4.7789998054504395 2.390000104904175,4.7789998054504395 C1.2899999618530273,5.7179999351501465 0.029999999329447746,6.438000202178955 -1.4199999570846558,6.438000202178955 C-3.569000005722046,6.438000202178955 -5.048999786376953,4.979000091552734 -5.048999786376953,2.8399999141693115z M2.1689999103546143,2.8499999046325684 C2.1689999103546143,2.8499999046325684 2.1689999103546143,0.09000000357627869 2.1689999103546143,0.09000000357627869 C-1.159999966621399,0.5099999904632568 -2.2699999809265137,1.3799999952316284 -2.2699999809265137,2.61899995803833 C-2.2699999809265137,3.7039999961853027 -1.5290000438690186,4.178999900817871 -0.5,4.178999900817871 C0.5,4.178999900817871 1.2599999904632568,3.690000057220459 2.1689999103546143,2.8499999046325684z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,700.4199829101562,551.7739868164062)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.232999801635742,-5.988999843597412 C-5.232999801635742,-5.988999843597412 -2.874000072479248,-5.988999843597412 -2.874000072479248,-5.988999843597412 C-2.874000072479248,-5.988999843597412 -2.6540000438690186,-4.328999996185303 -2.6540000438690186,-4.328999996185303 C-2.6540000438690186,-4.328999996185303 -2.5739998817443848,-4.328999996185303 -2.5739998817443848,-4.328999996185303 C-1.4739999771118164,-5.39900016784668 -0.22499999403953552,-6.289000034332275 1.4550000429153442,-6.289000034332275 C4.084000110626221,-6.289000034332275 5.232999801635742,-4.508999824523926 5.232999801635742,-1.409999966621399 C5.232999801635742,-1.409999966621399 5.232999801635742,6.289000034332275 5.232999801635742,6.289000034332275 C5.232999801635742,6.289000034332275 2.3540000915527344,6.289000034332275 2.3540000915527344,6.289000034332275 C2.3540000915527344,6.289000034332275 2.3540000915527344,-1.0399999618530273 2.3540000915527344,-1.0399999618530273 C2.3540000915527344,-3.059999942779541 1.7740000486373901,-3.819000005722046 0.4449999928474426,-3.819000005722046 C-0.6349999904632568,-3.819000005722046 -1.343999981880188,-3.2899999618530273 -2.3540000915527344,-2.2899999618530273 C-2.3540000915527344,-2.2899999618530273 -2.3540000915527344,6.289000034332275 -2.3540000915527344,6.289000034332275 C-2.3540000915527344,6.289000034332275 -5.232999801635742,6.289000034332275 -5.232999801635742,6.289000034332275 C-5.232999801635742,6.289000034332275 -5.232999801635742,-5.988999843597412 -5.232999801635742,-5.988999843597412z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,713.3400268554688,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.075000047683716,-6.438000202178955 1.1950000524520874,-6.438000202178955 C2.755000114440918,-6.438000202178955 3.8940000534057617,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384999990463257,-3.188999891281128 3.384999990463257,-3.188999891281128 C2.734999895095825,-3.757999897003174 2.115999937057495,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.003999948501587,-2.4489998817443848 -2.003999948501587,0.009999999776482582 C-2.003999948501587,2.4700000286102295 -0.6539999842643738,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2149999141693115,4.089000225067139 3.0950000286102295,3.61899995803833 3.7950000762939453,3.0290000438690186 C3.7950000762939453,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.815000057220459,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3940000534057617,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,724.6900024414062,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5950000286102295,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9149999618530273,3.319000005722046 C3.9149999618530273,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5829999446868896,-1.1699999570846558 C-2.5829999446868896,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,744.14501953125,549.8900146484375)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-6.083000183105469,-8.17300033569336 C-6.083000183105469,-8.17300033569336 -0.574999988079071,-8.17300033569336 -0.574999988079071,-8.17300033569336 C2.822999954223633,-8.17300033569336 5.442999839782715,-6.9730000495910645 5.442999839782715,-3.3239998817443848 C5.442999839782715,0.1899999976158142 2.822999954223633,1.784000039100647 -0.574999988079071,1.784000039100647 C-0.574999988079071,1.784000039100647 -3.184000015258789,1.784000039100647 -3.184000015258789,1.784000039100647 C-3.184000015258789,1.784000039100647 -3.184000015258789,8.17300033569336 -3.184000015258789,8.17300033569336 C-3.184000015258789,8.17300033569336 -6.083000183105469,8.17300033569336 -6.083000183105469,8.17300033569336 C-6.083000183105469,8.17300033569336 -6.083000183105469,-8.17300033569336 -6.083000183105469,-8.17300033569336z M-0.875,-0.5350000262260437 C1.3650000095367432,-0.5350000262260437 2.5840001106262207,-1.465000033378601 2.5840001106262207,-3.3239998817443848 C2.5840001106262207,-5.203999996185303 1.3650000095367432,-5.854000091552734 -0.875,-5.854000091552734 C-0.875,-5.854000091552734 -3.184000015258789,-5.854000091552734 -3.184000015258789,-5.854000091552734 C-3.184000015258789,-5.854000091552734 -3.184000015258789,-0.5350000262260437 -3.184000015258789,-0.5350000262260437 C-3.184000015258789,-0.5350000262260437 -0.875,-0.5350000262260437 -0.875,-0.5350000262260437z M-1.1200000047683716,1.0099999904632568 C-1.1200000047683716,1.0099999904632568 0.9789999723434448,-0.7200000286102295 0.9789999723434448,-0.7200000286102295 C0.9789999723434448,-0.7200000286102295 6.083000183105469,8.17300033569336 6.083000183105469,8.17300033569336 C6.083000183105469,8.17300033569336 2.8239998817443848,8.17300033569336 2.8239998817443848,8.17300033569336 C2.8239998817443848,8.17300033569336 -1.1200000047683716,1.0099999904632568 -1.1200000047683716,1.0099999904632568z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,756.8499755859375,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.047999858856201,2.8399999141693115 C-5.047999858856201,0.20999999344348907 -2.869999885559082,-1.159000039100647 2.1689999103546143,-1.6990000009536743 C2.128999948501587,-3.0190000534057617 1.5989999771118164,-4.11899995803833 -0.05999999865889549,-4.11899995803833 C-1.2799999713897705,-4.11899995803833 -2.428999900817871,-3.569000005722046 -3.509000062942505,-2.9089999198913574 C-3.509000062942505,-2.9089999198913574 -4.568999767303467,-4.828999996185303 -4.568999767303467,-4.828999996185303 C-3.2190001010894775,-5.678999900817871 -1.4800000190734863,-6.438000202178955 0.4699999988079071,-6.438000202178955 C3.5390000343322754,-6.438000202178955 5.047999858856201,-4.548999786376953 5.047999858856201,-1.1299999952316284 C5.047999858856201,-1.1299999952316284 5.047999858856201,6.138999938964844 5.047999858856201,6.138999938964844 C5.047999858856201,6.138999938964844 2.688999891281128,6.138999938964844 2.688999891281128,6.138999938964844 C2.688999891281128,6.138999938964844 2.4690001010894775,4.7789998054504395 2.4690001010894775,4.7789998054504395 C2.4690001010894775,4.7789998054504395 2.3889999389648438,4.7789998054504395 2.3889999389648438,4.7789998054504395 C1.2890000343322754,5.7179999351501465 0.029999999329447746,6.438000202178955 -1.4190000295639038,6.438000202178955 C-3.568000078201294,6.438000202178955 -5.047999858856201,4.979000091552734 -5.047999858856201,2.8399999141693115z M2.1689999103546143,2.8499999046325684 C2.1689999103546143,2.8499999046325684 2.1689999103546143,0.09000000357627869 2.1689999103546143,0.09000000357627869 C-1.159999966621399,0.5099999904632568 -2.2690000534057617,1.3799999952316284 -2.2690000534057617,2.61899995803833 C-2.2690000534057617,3.7039999961853027 -1.5299999713897705,4.178999900817871 -0.5,4.178999900817871 C0.49900001287460327,4.178999900817871 1.2589999437332153,3.690000057220459 2.1689999103546143,2.8499999046325684z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,767.7109985351562,550.4000244140625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-2.319999933242798,3.5239999294281006 C-2.319999933242798,3.5239999294281006 -2.319999933242798,-2.3239998817443848 -2.319999933242798,-2.3239998817443848 C-2.319999933242798,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 C-4.068999767303467,-2.3239998817443848 -4.068999767303467,-4.484000205993652 -4.068999767303467,-4.484000205993652 C-4.068999767303467,-4.484000205993652 -2.1689999103546143,-4.613999843597412 -2.1689999103546143,-4.613999843597412 C-2.1689999103546143,-4.613999843597412 -1.8300000429153442,-7.9629998207092285 -1.8300000429153442,-7.9629998207092285 C-1.8300000429153442,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 C0.5600000023841858,-7.9629998207092285 0.5600000023841858,-4.613999843597412 0.5600000023841858,-4.613999843597412 C0.5600000023841858,-4.613999843597412 3.688999891281128,-4.613999843597412 3.688999891281128,-4.613999843597412 C3.688999891281128,-4.613999843597412 3.688999891281128,-2.3239998817443848 3.688999891281128,-2.3239998817443848 C3.688999891281128,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 C0.5600000023841858,-2.3239998817443848 0.5600000023841858,3.5199999809265137 0.5600000023841858,3.5199999809265137 C0.5600000023841858,4.964000225067139 1.11899995803833,5.673999786376953 2.2990000247955322,5.673999786376953 C2.7190001010894775,5.673999786376953 3.2200000286102295,5.533999919891357 3.5799999237060547,5.394000053405762 C3.5799999237060547,5.394000053405762 4.068999767303467,7.513000011444092 4.068999767303467,7.513000011444092 C3.3989999294281006,7.734000205993652 2.5439999103546143,7.9629998207092285 1.559999942779541,7.9629998207092285 C-1.2699999809265137,7.9629998207092285 -2.319999933242798,6.172999858856201 -2.319999933242798,3.5239999294281006z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,778.1400146484375,551.9240112304688)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5950000286102295,-6.438000202178955 0.2939999997615814,-6.438000202178955 C3.61299991607666,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.302999973297119,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.315000057220459,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7049999237060547,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,618.864990234375,705.7269897460938)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-1.4170000553131104,14.803999900817871 C-4.3420000076293945,14.532999992370605 -7.177000045776367,13.319000244140625 -9.20199966430664,11.15999984741211 C-9.20199966430664,11.15999984741211 -6.771999835968018,7.875 -6.771999835968018,7.875 C-4.702000141143799,9.675000190734863 -2.5880000591278076,10.529000282287598 -0.2029999941587448,10.529000282287598 C2.7219998836517334,10.529000282287598 4.072000026702881,9.045000076293945 4.072000026702881,6.614999771118164 C4.072000026702881,1.3489999771118164 -8.121999740600586,1.215000033378601 -8.121999740600586,-6.75 C-8.121999740600586,-10.979000091552734 -5.51200008392334,-13.949000358581543 -1.4170000553131104,-14.668999671936035 C-1.4170000553131104,-14.668999671936035 -1.4170000553131104,-19.259000778198242 -1.4170000553131104,-19.259000778198242 C-1.4170000553131104,-19.259000778198242 2.2279999256134033,-19.259000778198242 2.2279999256134033,-19.259000778198242 C2.2279999256134033,-19.259000778198242 2.2279999256134033,-14.758999824523926 2.2279999256134033,-14.758999824523926 C5.063000202178955,-14.399999618530273 7.131999969482422,-13.050000190734863 8.79699993133545,-11.114999771118164 C8.79699993133545,-11.114999771118164 6.052000045776367,-8.234999656677246 6.052000045776367,-8.234999656677246 C4.566999912261963,-9.720000267028809 2.947999954223633,-10.529999732971191 0.7879999876022339,-10.529999732971191 C-1.5520000457763672,-10.529999732971191 -2.992000102996826,-9.225000381469727 -2.992000102996826,-6.974999904632568 C-2.992000102996826,-2.1610000133514404 9.20199966430664,-2.2060000896453857 9.20199966430664,6.209000110626221 C9.20199966430664,10.574000358581543 6.683000087738037,13.770000457763672 2.2279999256134033,14.625 C2.2279999256134033,14.625 2.2279999256134033,19.259000778198242 2.2279999256134033,19.259000778198242 C2.2279999256134033,19.259000778198242 -1.4170000553131104,19.259000778198242 -1.4170000553131104,19.259000778198242 C-1.4170000553131104,19.259000778198242 -1.4170000553131104,14.803999900817871 -1.4170000553131104,14.803999900817871z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,643.18701171875,705.7260131835938)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,666.3610229492188,705.7260131835938)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.720000267028809,6.974999904632568 C-9.720000267028809,3.4200000762939453 -7.289999961853027,1.0800000429153442 -4.590000152587891,-0.35899999737739563 C-4.590000152587891,-0.35899999737739563 -4.590000152587891,-0.5400000214576721 -4.590000152587891,-0.5400000214576721 C-6.75,-2.115000009536743 -8.503999710083008,-4.184000015258789 -8.503999710083008,-7.198999881744385 C-8.503999710083008,-11.878999710083008 -4.815000057220459,-14.850000381469727 0.18000000715255737,-14.850000381469727 C5.309999942779541,-14.850000381469727 8.640000343322754,-11.744000434875488 8.640000343322754,-7.109000205993652 C8.640000343322754,-4.27400016784668 6.659999847412109,-1.8899999856948853 4.769999980926514,-0.5849999785423279 C4.769999980926514,-0.5849999785423279 4.769999980926514,-0.4050000011920929 4.769999980926514,-0.4050000011920929 C7.425000190734863,1.125 9.720000267028809,3.240000009536743 9.720000267028809,7.064000129699707 C9.720000267028809,11.473999977111816 5.849999904632568,14.850000381469727 0,14.850000381469727 C-5.579999923706055,14.850000381469727 -9.720000267028809,11.609999656677246 -9.720000267028809,6.974999904632568z M4.769999980926514,6.885000228881836 C4.769999980926514,3.825000047683716 1.7999999523162842,2.700000047683716 -2.069999933242798,1.125 C-3.7799999713897705,2.430000066757202 -5.039999961853027,4.276000022888184 -5.039999961853027,6.434999942779541 C-5.039999961853027,9.225000381469727 -2.7899999618530273,11.069000244140625 0.13500000536441803,11.069000244140625 C2.8350000381469727,11.069000244140625 4.769999980926514,9.494999885559082 4.769999980926514,6.885000228881836z M4.230000019073486,-6.795000076293945 C4.230000019073486,-9.270000457763672 2.700000047683716,-11.069000244140625 0.09000000357627869,-11.069000244140625 C-2.069999933242798,-11.069000244140625 -3.7799999713897705,-9.675000190734863 -3.7799999713897705,-7.198999881744385 C-3.7799999713897705,-4.409999847412109 -1.2599999904632568,-3.1500000953674316 1.8899999856948853,-1.8899999856948853 C3.375,-3.375 4.230000019073486,-4.994999885559082 4.230000019073486,-6.795000076293945z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,684.6079711914062,720.8679809570312)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-4.117000102996826,4.521999835968018 C-1.1469999551773071,3.3519999980926514 0.5170000195503235,1.3279999494552612 0.47200000286102295,-0.9670000076293945 C0.3370000123977661,-0.9670000076293945 0.2029999941587448,-0.9670000076293945 0.06800000369548798,-0.9670000076293945 C-1.7319999933242798,-0.9670000076293945 -3.306999921798706,-2.0929999351501465 -3.306999921798706,-4.208000183105469 C-3.306999921798706,-6.186999797821045 -1.7330000400543213,-7.447000026702881 0.20200000703334808,-7.447000026702881 C2.7219998836517334,-7.447000026702881 4.117000102996826,-5.421999931335449 4.117000102996826,-2.002000093460083 C4.117000102996826,2.453000068664551 1.5529999732971191,5.873000144958496 -2.992000102996826,7.447000026702881 C-2.992000102996826,7.447000026702881 -4.117000102996826,4.521999835968018 -4.117000102996826,4.521999835968018z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,702.3610229492188,705.9959716796875)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.944999694824219,10.619999885559082 C-9.944999694824219,10.619999885559082 -7.514999866485596,7.199999809265137 -7.514999866485596,7.199999809265137 C-5.804999828338623,8.819999694824219 -3.690000057220459,10.258999824523926 -0.8550000190734863,10.258999824523926 C2.3399999141693115,10.258999824523926 4.590000152587891,8.234999656677246 4.590000152587891,4.860000133514404 C4.590000152587891,1.4850000143051147 2.5199999809265137,-0.4050000011920929 -0.5849999785423279,-0.4050000011920929 C-2.384999990463257,-0.4050000011920929 -3.4200000762939453,0.04500000178813934 -5.130000114440918,1.1699999570846558 C-5.130000114440918,1.1699999570846558 -7.650000095367432,-0.44999998807907104 -7.650000095367432,-0.44999998807907104 C-7.650000095367432,-0.44999998807907104 -6.795000076293945,-14.579999923706055 -6.795000076293945,-14.579999923706055 C-6.795000076293945,-14.579999923706055 8.593999862670898,-14.579999923706055 8.593999862670898,-14.579999923706055 C8.593999862670898,-14.579999923706055 8.593999862670898,-10.079999923706055 8.593999862670898,-10.079999923706055 C8.593999862670898,-10.079999923706055 -2.1600000858306885,-10.079999923706055 -2.1600000858306885,-10.079999923706055 C-2.1600000858306885,-10.079999923706055 -2.7899999618530273,-3.3299999237060547 -2.7899999618530273,-3.3299999237060547 C-1.5750000476837158,-3.9149999618530273 -0.4950000047683716,-4.230000019073486 0.9449999928474426,-4.230000019073486 C5.849999904632568,-4.230000019073486 9.944999694824219,-1.440000057220459 9.944999694824219,4.724999904632568 C9.944999694824219,10.979999542236328 5.130000114440918,14.579999923706055 -0.18000000715255737,14.579999923706055 C-4.815000057220459,14.579999923706055 -7.829999923706055,12.734999656677246 -9.944999694824219,10.619999885559082z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,726.2559814453125,705.4559936523438)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.628999710083008,11.293999671936035 C-1.7990000247955322,4.005000114440918 3.2850000858306885,-1.215000033378601 3.2850000858306885,-5.489999771118164 C3.2850000858306885,-8.505000114440918 1.6200000047683716,-10.348999977111816 -1.3949999809265137,-10.348999977111816 C-3.5999999046325684,-10.348999977111816 -5.400000095367432,-8.90999984741211 -6.929999828338623,-7.244999885559082 C-6.929999828338623,-7.244999885559082 -9.765000343322754,-10.03499984741211 -9.765000343322754,-10.03499984741211 C-7.199999809265137,-12.914999961853027 -4.545000076293945,-14.579999923706055 -0.675000011920929,-14.579999923706055 C4.815000057220459,-14.579999923706055 8.414999961853027,-11.114999771118164 8.414999961853027,-5.848999977111816 C8.414999961853027,-0.4950000047683716 3.555000066757202,4.409999847412109 -2.384999990463257,10.350000381469727 C-0.8550000190734863,10.21399974822998 1.034999966621399,10.079999923706055 2.430000066757202,10.079999923706055 C2.430000066757202,10.079999923706055 9.765000343322754,10.079999923706055 9.765000343322754,10.079999923706055 C9.765000343322754,10.079999923706055 9.765000343322754,14.579999923706055 9.765000343322754,14.579999923706055 C9.765000343322754,14.579999923706055 -9.628999710083008,14.579999923706055 -9.628999710083008,14.579999923706055 C-9.628999710083008,14.579999923706055 -9.628999710083008,11.293999671936035 -9.628999710083008,11.293999671936035z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,749.8350219726562,705.4559936523438)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.628999710083008,11.293999671936035 C-1.7990000247955322,4.005000114440918 3.2850000858306885,-1.215000033378601 3.2850000858306885,-5.489999771118164 C3.2850000858306885,-8.505000114440918 1.6200000047683716,-10.348999977111816 -1.3949999809265137,-10.348999977111816 C-3.5999999046325684,-10.348999977111816 -5.400000095367432,-8.90999984741211 -6.929999828338623,-7.244999885559082 C-6.929999828338623,-7.244999885559082 -9.765000343322754,-10.03499984741211 -9.765000343322754,-10.03499984741211 C-7.199999809265137,-12.914999961853027 -4.545000076293945,-14.579999923706055 -0.675000011920929,-14.579999923706055 C4.815000057220459,-14.579999923706055 8.414999961853027,-11.114999771118164 8.414999961853027,-5.848999977111816 C8.414999961853027,-0.4950000047683716 3.555000066757202,4.409999847412109 -2.384999990463257,10.350000381469727 C-0.8550000190734863,10.21399974822998 1.034999966621399,10.079999923706055 2.430000066757202,10.079999923706055 C2.430000066757202,10.079999923706055 9.765000343322754,10.079999923706055 9.765000343322754,10.079999923706055 C9.765000343322754,10.079999923706055 9.765000343322754,14.579999923706055 9.765000343322754,14.579999923706055 C9.765000343322754,14.579999923706055 -9.628999710083008,14.579999923706055 -9.628999710083008,14.579999923706055 C-9.628999710083008,14.579999923706055 -9.628999710083008,11.293999671936035 -9.628999710083008,11.293999671936035z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,620.3250122070312,663.6380004882812)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-6.118000030517578,-8.17300033569336 C-6.118000030517578,-8.17300033569336 -3.1389999389648438,-8.17300033569336 -3.1389999389648438,-8.17300033569336 C-3.1389999389648438,-8.17300033569336 1.940000057220459,1.0149999856948853 1.940000057220459,1.0149999856948853 C1.940000057220459,1.0149999856948853 3.628999948501587,4.504000186920166 3.628999948501587,4.504000186920166 C3.628999948501587,4.504000186920166 3.7290000915527344,4.504000186920166 3.7290000915527344,4.504000186920166 C3.5889999866485596,2.815000057220459 3.3589999675750732,0.7450000047683716 3.3589999675750732,-1.0750000476837158 C3.3589999675750732,-1.0750000476837158 3.3589999675750732,-8.17300033569336 3.3589999675750732,-8.17300033569336 C3.3589999675750732,-8.17300033569336 6.118000030517578,-8.17300033569336 6.118000030517578,-8.17300033569336 C6.118000030517578,-8.17300033569336 6.118000030517578,8.17300033569336 6.118000030517578,8.17300033569336 C6.118000030517578,8.17300033569336 3.1389999389648438,8.17300033569336 3.1389999389648438,8.17300033569336 C3.1389999389648438,8.17300033569336 -1.940000057220459,-1.0299999713897705 -1.940000057220459,-1.0299999713897705 C-1.940000057220459,-1.0299999713897705 -3.628999948501587,-4.504000186920166 -3.628999948501587,-4.504000186920166 C-3.628999948501587,-4.504000186920166 -3.7290000915527344,-4.504000186920166 -3.7290000915527344,-4.504000186920166 C-3.5889999866485596,-2.7750000953674316 -3.3589999675750732,-0.8040000200271606 -3.3589999675750732,1.0149999856948853 C-3.3589999675750732,1.0149999856948853 -3.3589999675750732,8.17300033569336 -3.3589999675750732,8.17300033569336 C-3.3589999675750732,8.17300033569336 -6.118000030517578,8.17300033569336 -6.118000030517578,8.17300033569336 C-6.118000030517578,8.17300033569336 -6.118000030517578,-8.17300033569336 -6.118000030517578,-8.17300033569336z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,634.9099731445312,665.6719970703125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5940001010894775,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.015000104904175,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,645.531005859375,664.1480102539062)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-2.319999933242798,3.5239999294281006 C-2.319999933242798,3.5239999294281006 -2.319999933242798,-2.3239998817443848 -2.319999933242798,-2.3239998817443848 C-2.319999933242798,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 -4.068999767303467,-2.3239998817443848 C-4.068999767303467,-2.3239998817443848 -4.068999767303467,-4.484000205993652 -4.068999767303467,-4.484000205993652 C-4.068999767303467,-4.484000205993652 -2.1700000762939453,-4.613999843597412 -2.1700000762939453,-4.613999843597412 C-2.1700000762939453,-4.613999843597412 -1.8289999961853027,-7.9629998207092285 -1.8289999961853027,-7.9629998207092285 C-1.8289999961853027,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 0.5600000023841858,-7.9629998207092285 C0.5600000023841858,-7.9629998207092285 0.5600000023841858,-4.613999843597412 0.5600000023841858,-4.613999843597412 C0.5600000023841858,-4.613999843597412 3.688999891281128,-4.613999843597412 3.688999891281128,-4.613999843597412 C3.688999891281128,-4.613999843597412 3.688999891281128,-2.3239998817443848 3.688999891281128,-2.3239998817443848 C3.688999891281128,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 0.5600000023841858,-2.3239998817443848 C0.5600000023841858,-2.3239998817443848 0.5600000023841858,3.5199999809265137 0.5600000023841858,3.5199999809265137 C0.5600000023841858,4.964000225067139 1.1200000047683716,5.673999786376953 2.299999952316284,5.673999786376953 C2.7200000286102295,5.673999786376953 3.2190001010894775,5.533999919891357 3.5789999961853027,5.394000053405762 C3.5789999961853027,5.394000053405762 4.068999767303467,7.513000011444092 4.068999767303467,7.513000011444092 C3.3989999294281006,7.734000205993652 2.5439999103546143,7.9629998207092285 1.559999942779541,7.9629998207092285 C-1.2699999809265137,7.9629998207092285 -2.319999933242798,6.172999858856201 -2.319999933242798,3.5239999294281006z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,662.7899780273438,663.6380004882812)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.734000205993652,-8.17300033569336 C-5.734000205993652,-8.17300033569336 -0.5849999785423279,-8.17300033569336 -0.5849999785423279,-8.17300033569336 C3.0439999103546143,-8.17300033569336 5.734000205993652,-6.913000106811523 5.734000205993652,-3.134999990463257 C5.734000205993652,0.5099999904632568 3.0339999198913574,2.1640000343322754 -0.48500001430511475,2.1640000343322754 C-0.48500001430511475,2.1640000343322754 -2.8340001106262207,2.1640000343322754 -2.8340001106262207,2.1640000343322754 C-2.8340001106262207,2.1640000343322754 -2.8340001106262207,8.17300033569336 -2.8340001106262207,8.17300033569336 C-2.8340001106262207,8.17300033569336 -5.734000205993652,8.17300033569336 -5.734000205993652,8.17300033569336 C-5.734000205993652,8.17300033569336 -5.734000205993652,-8.17300033569336 -5.734000205993652,-8.17300033569336z M-0.7250000238418579,-0.1550000011920929 C1.7139999866485596,-0.1550000011920929 2.874000072479248,-1.125 2.874000072479248,-3.134999990463257 C2.874000072479248,-5.164000034332275 1.6039999723434448,-5.854000091552734 -0.824999988079071,-5.854000091552734 C-0.824999988079071,-5.854000091552734 -2.8340001106262207,-5.854000091552734 -2.8340001106262207,-5.854000091552734 C-2.8340001106262207,-5.854000091552734 -2.8340001106262207,-0.1550000011920929 -2.8340001106262207,-0.1550000011920929 C-2.8340001106262207,-0.1550000011920929 -0.7250000238418579,-0.1550000011920929 -0.7250000238418579,-0.1550000011920929z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,675.125,665.52197265625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-3.7690000534057617,-5.988999843597412 C-3.7690000534057617,-5.988999843597412 -1.409999966621399,-5.988999843597412 -1.409999966621399,-5.988999843597412 C-1.409999966621399,-5.988999843597412 -1.190000057220459,-3.7990000247955322 -1.190000057220459,-3.7990000247955322 C-1.190000057220459,-3.7990000247955322 -1.1100000143051147,-3.7990000247955322 -1.1100000143051147,-3.7990000247955322 C-0.23499999940395355,-5.39900016784668 1.065000057220459,-6.289000034332275 2.378999948501587,-6.289000034332275 C3.003999948501587,-6.289000034332275 3.3989999294281006,-6.209000110626221 3.7690000534057617,-6.039000034332275 C3.7690000534057617,-6.039000034332275 3.2690000534057617,-3.5390000343322754 3.2690000534057617,-3.5390000343322754 C2.8389999866485596,-3.6589999198913574 2.5190000534057617,-3.739000082015991 2.009000062942505,-3.739000082015991 C1.0299999713897705,-3.739000082015991 -0.15000000596046448,-3.069000005722046 -0.8899999856948853,-1.2000000476837158 C-0.8899999856948853,-1.2000000476837158 -0.8899999856948853,6.289000034332275 -0.8899999856948853,6.289000034332275 C-0.8899999856948853,6.289000034332275 -3.7690000534057617,6.289000034332275 -3.7690000534057617,6.289000034332275 C-3.7690000534057617,6.289000034332275 -3.7690000534057617,-5.988999843597412 -3.7690000534057617,-5.988999843597412z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,682.1300048828125,662.968017578125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.7799999713897705,-7.2129998207092285 C-1.7799999713897705,-8.182999610900879 -1.0199999809265137,-8.843000411987305 0,-8.843000411987305 C1.0199999809265137,-8.843000411987305 1.7799999713897705,-8.182999610900879 1.7799999713897705,-7.2129998207092285 C1.7799999713897705,-6.263999938964844 1.0199999809265137,-5.584000110626221 0,-5.584000110626221 C-1.0199999809265137,-5.584000110626221 -1.7799999713897705,-6.263999938964844 -1.7799999713897705,-7.2129998207092285z M-1.4490000009536743,-3.434999942779541 C-1.4490000009536743,-3.434999942779541 1.4299999475479126,-3.434999942779541 1.4299999475479126,-3.434999942779541 C1.4299999475479126,-3.434999942779541 1.4299999475479126,8.843000411987305 1.4299999475479126,8.843000411987305 C1.4299999475479126,8.843000411987305 -1.4490000009536743,8.843000411987305 -1.4490000009536743,8.843000411987305 C-1.4490000009536743,8.843000411987305 -1.4490000009536743,-3.434999942779541 -1.4490000009536743,-3.434999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,691.3839721679688,665.6719970703125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-4.964000225067139,0.009999999776482582 C-4.964000225067139,-4.078999996185303 -2.0739998817443848,-6.438000202178955 1.1950000524520874,-6.438000202178955 C2.755000114440918,-6.438000202178955 3.8940000534057617,-5.839000225067139 4.783999919891357,-5.059000015258789 C4.783999919891357,-5.059000015258789 3.384000062942505,-3.188999891281128 3.384000062942505,-3.188999891281128 C2.7339999675750732,-3.757999897003174 2.115000009536743,-4.089000225067139 1.3450000286102295,-4.089000225067139 C-0.6340000033378601,-4.089000225067139 -2.003999948501587,-2.4489998817443848 -2.003999948501587,0.009999999776482582 C-2.003999948501587,2.4700000286102295 -0.6549999713897705,4.089000225067139 1.2549999952316284,4.089000225067139 C2.2149999141693115,4.089000225067139 3.0940001010894775,3.61899995803833 3.7939999103546143,3.0290000438690186 C3.7939999103546143,3.0290000438690186 4.964000225067139,4.928999900817871 4.964000225067139,4.928999900817871 C3.815000057220459,5.948999881744385 2.3540000915527344,6.438000202178955 0.9549999833106995,6.438000202178955 C-2.3940000534057617,6.438000202178955 -4.964000225067139,4.078999996185303 -4.964000225067139,0.009999999776482582z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,702.7340087890625,665.6719970703125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5940001010894775,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.0139999389648438,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,617.3619995117188,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,639.9739990234375,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.92199993133545,10.800000190734863 C-9.92199993133545,10.800000190734863 -7.4029998779296875,7.425000190734863 -7.4029998779296875,7.425000190734863 C-5.692999839782715,9.135000228881836 -3.48799991607666,10.529000282287598 -0.652999997138977,10.529000282287598 C2.4070000648498535,10.529000282287598 4.566999912261963,8.954999923706055 4.566999912261963,6.300000190734863 C4.566999912261963,3.375 2.677999973297119,1.4850000143051147 -3.802000045776367,1.4850000143051147 C-3.802000045776367,1.4850000143051147 -3.802000045776367,-2.384999990463257 -3.802000045776367,-2.384999990463257 C1.777999997138977,-2.384999990463257 3.5769999027252197,-4.275000095367432 3.5769999027252197,-6.885000228881836 C3.5769999027252197,-9.225000381469727 2.046999931335449,-10.619000434875488 -0.5630000233650208,-10.619000434875488 C-2.7679998874664307,-10.619000434875488 -4.5229997634887695,-9.583999633789062 -6.2779998779296875,-7.965000152587891 C-6.2779998779296875,-7.965000152587891 -9.022000312805176,-11.24899959564209 -9.022000312805176,-11.24899959564209 C-6.546999931335449,-13.409000396728516 -3.802999973297119,-14.850000381469727 -0.33799999952316284,-14.850000381469727 C5.1519999504089355,-14.850000381469727 8.932000160217285,-12.104000091552734 8.932000160217285,-7.289000034332275 C8.932000160217285,-4.09499979019165 7.086999893188477,-1.934999942779541 3.9820001125335693,-0.7200000286102295 C3.9820001125335693,-0.7200000286102295 3.9820001125335693,-0.5400000214576721 3.9820001125335693,-0.5400000214576721 C7.35699987411499,0.36000001430511475 9.92199993133545,2.7899999618530273 9.92199993133545,6.570000171661377 C9.92199993133545,11.789999961853027 5.333000183105469,14.850000381469727 -0.20200000703334808,14.850000381469727 C-4.836999893188477,14.850000381469727 -7.896999835968018,13.095000267028809 -9.92199993133545,10.800000190734863z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,663.5540161132812,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.92199993133545,10.800000190734863 C-9.92199993133545,10.800000190734863 -7.4019999504089355,7.425000190734863 -7.4019999504089355,7.425000190734863 C-5.692999839782715,9.135000228881836 -3.48799991607666,10.529000282287598 -0.652999997138977,10.529000282287598 C2.4070000648498535,10.529000282287598 4.566999912261963,8.954999923706055 4.566999912261963,6.300000190734863 C4.566999912261963,3.375 2.677000045776367,1.4850000143051147 -3.802000045776367,1.4850000143051147 C-3.802000045776367,1.4850000143051147 -3.802000045776367,-2.384999990463257 -3.802000045776367,-2.384999990463257 C1.777999997138977,-2.384999990463257 3.5769999027252197,-4.275000095367432 3.5769999027252197,-6.885000228881836 C3.5769999027252197,-9.225000381469727 2.046999931335449,-10.619000434875488 -0.5630000233650208,-10.619000434875488 C-2.7679998874664307,-10.619000434875488 -4.5229997634887695,-9.583999633789062 -6.2779998779296875,-7.965000152587891 C-6.2779998779296875,-7.965000152587891 -9.022000312805176,-11.24899959564209 -9.022000312805176,-11.24899959564209 C-6.546999931335449,-13.409000396728516 -3.802999973297119,-14.850000381469727 -0.33799999952316284,-14.850000381469727 C5.1519999504089355,-14.850000381469727 8.932000160217285,-12.104000091552734 8.932000160217285,-7.289000034332275 C8.932000160217285,-4.09499979019165 7.086999893188477,-1.934999942779541 3.9820001125335693,-0.7200000286102295 C3.9820001125335693,-0.7200000286102295 3.9820001125335693,-0.5400000214576721 3.9820001125335693,-0.5400000214576721 C7.35699987411499,0.36000001430511475 9.92199993133545,2.7899999618530273 9.92199993133545,6.570000171661377 C9.92199993133545,11.789999961853027 5.331999778747559,14.850000381469727 -0.2029999941587448,14.850000381469727 C-4.8379998207092285,14.850000381469727 -7.896999835968018,13.095000267028809 -9.92199993133545,10.800000190734863z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,687.6959838867188,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.765000343322754,-0.13500000536441803 C-9.765000343322754,-9.8100004196167 -5.939000129699707,-14.850000381469727 0,-14.850000381469727 C5.985000133514404,-14.850000381469727 9.765000343322754,-9.765000343322754 9.765000343322754,-0.13500000536441803 C9.765000343322754,9.539999961853027 5.985000133514404,14.850000381469727 0,14.850000381469727 C-5.939000129699707,14.850000381469727 -9.765000343322754,9.539999961853027 -9.765000343322754,-0.13500000536441803z M4.679999828338623,-0.13500000536441803 C4.679999828338623,-8.1899995803833 2.744999885559082,-10.708999633789062 0,-10.708999633789062 C-2.700000047683716,-10.708999633789062 -4.679999828338623,-8.1899995803833 -4.679999828338623,-0.13500000536441803 C-4.679999828338623,7.965000152587891 -2.700000047683716,10.664999961853027 0,10.664999961853027 C2.744999885559082,10.664999961853027 4.679999828338623,7.965000152587891 4.679999828338623,-0.13500000536441803z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,706.97900390625,822.4439697265625)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-5.376999855041504,-1.934999942779541 C-5.376999855041504,-1.934999942779541 5.376999855041504,-1.934999942779541 5.376999855041504,-1.934999942779541 C5.376999855041504,-1.934999942779541 5.376999855041504,1.934999942779541 5.376999855041504,1.934999942779541 C5.376999855041504,1.934999942779541 -5.376999855041504,1.934999942779541 -5.376999855041504,1.934999942779541 C-5.376999855041504,1.934999942779541 -5.376999855041504,-1.934999942779541 -5.376999855041504,-1.934999942779541z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,726.666015625,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-8.640000343322754,9.989999771118164 C-8.640000343322754,9.989999771118164 -2.25,9.989999771118164 -2.25,9.989999771118164 C-2.25,9.989999771118164 -2.25,-8.595000267028809 -2.25,-8.595000267028809 C-2.25,-8.595000267028809 -7.559999942779541,-8.595000267028809 -7.559999942779541,-8.595000267028809 C-7.559999942779541,-8.595000267028809 -7.559999942779541,-11.925000190734863 -7.559999942779541,-11.925000190734863 C-4.679999828338623,-12.46399974822998 -2.744999885559082,-13.229999542236328 -0.8999999761581421,-14.3100004196167 C-0.8999999761581421,-14.3100004196167 3.059999942779541,-14.3100004196167 3.059999942779541,-14.3100004196167 C3.059999942779541,-14.3100004196167 3.059999942779541,9.989999771118164 3.059999942779541,9.989999771118164 C3.059999942779541,9.989999771118164 8.640000343322754,9.989999771118164 8.640000343322754,9.989999771118164 C8.640000343322754,9.989999771118164 8.640000343322754,14.3100004196167 8.640000343322754,14.3100004196167 C8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 -8.640000343322754,14.3100004196167 C-8.640000343322754,14.3100004196167 -8.640000343322754,9.989999771118164 -8.640000343322754,9.989999771118164z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,749.2999877929688,819.7440185546875)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.944999694824219,10.619999885559082 C-9.944999694824219,10.619999885559082 -7.514999866485596,7.199999809265137 -7.514999866485596,7.199999809265137 C-5.804999828338623,8.819999694824219 -3.690000057220459,10.258999824523926 -0.8550000190734863,10.258999824523926 C2.3399999141693115,10.258999824523926 4.590000152587891,8.234999656677246 4.590000152587891,4.860000133514404 C4.590000152587891,1.4850000143051147 2.5199999809265137,-0.4050000011920929 -0.5849999785423279,-0.4050000011920929 C-2.384999990463257,-0.4050000011920929 -3.4200000762939453,0.04500000178813934 -5.130000114440918,1.1699999570846558 C-5.130000114440918,1.1699999570846558 -7.650000095367432,-0.44999998807907104 -7.650000095367432,-0.44999998807907104 C-7.650000095367432,-0.44999998807907104 -6.795000076293945,-14.579999923706055 -6.795000076293945,-14.579999923706055 C-6.795000076293945,-14.579999923706055 8.593999862670898,-14.579999923706055 8.593999862670898,-14.579999923706055 C8.593999862670898,-14.579999923706055 8.593999862670898,-10.079999923706055 8.593999862670898,-10.079999923706055 C8.593999862670898,-10.079999923706055 -2.1600000858306885,-10.079999923706055 -2.1600000858306885,-10.079999923706055 C-2.1600000858306885,-10.079999923706055 -2.7899999618530273,-3.3299999237060547 -2.7899999618530273,-3.3299999237060547 C-1.5750000476837158,-3.9149999618530273 -0.4950000047683716,-4.230000019073486 0.9449999928474426,-4.230000019073486 C5.849999904632568,-4.230000019073486 9.944999694824219,-1.440000057220459 9.944999694824219,4.724999904632568 C9.944999694824219,10.979999542236328 5.130000114440918,14.579999923706055 -0.18000000715255737,14.579999923706055 C-4.815000057220459,14.579999923706055 -7.829999923706055,12.734999656677246 -9.944999694824219,10.619999885559082z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,772.8569946289062,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.92199993133545,10.800000190734863 C-9.92199993133545,10.800000190734863 -7.4019999504089355,7.425000190734863 -7.4019999504089355,7.425000190734863 C-5.692999839782715,9.135000228881836 -3.48799991607666,10.529000282287598 -0.652999997138977,10.529000282287598 C2.4070000648498535,10.529000282287598 4.566999912261963,8.954999923706055 4.566999912261963,6.300000190734863 C4.566999912261963,3.375 2.677000045776367,1.4850000143051147 -3.802000045776367,1.4850000143051147 C-3.802000045776367,1.4850000143051147 -3.802000045776367,-2.384999990463257 -3.802000045776367,-2.384999990463257 C1.777999997138977,-2.384999990463257 3.5769999027252197,-4.275000095367432 3.5769999027252197,-6.885000228881836 C3.5769999027252197,-9.225000381469727 2.046999931335449,-10.619000434875488 -0.5630000233650208,-10.619000434875488 C-2.7679998874664307,-10.619000434875488 -4.5229997634887695,-9.583999633789062 -6.2779998779296875,-7.965000152587891 C-6.2779998779296875,-7.965000152587891 -9.022000312805176,-11.24899959564209 -9.022000312805176,-11.24899959564209 C-6.546999931335449,-13.409000396728516 -3.802999973297119,-14.850000381469727 -0.33799999952316284,-14.850000381469727 C5.1519999504089355,-14.850000381469727 8.932000160217285,-12.104000091552734 8.932000160217285,-7.289000034332275 C8.932000160217285,-4.09499979019165 7.086999893188477,-1.934999942779541 3.9820001125335693,-0.7200000286102295 C3.9820001125335693,-0.7200000286102295 3.9820001125335693,-0.5400000214576721 3.9820001125335693,-0.5400000214576721 C7.35699987411499,0.36000001430511475 9.92199993133545,2.7899999618530273 9.92199993133545,6.570000171661377 C9.92199993133545,11.789999961853027 5.331999778747559,14.850000381469727 -0.2029999941587448,14.850000381469727 C-4.8379998207092285,14.850000381469727 -7.896999835968018,13.095000267028809 -9.92199993133545,10.800000190734863z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,796.9990234375,819.4739990234375)"
                      >
                        <path
                          fill="rgb(32,129,77)"
                          fill-opacity="1"
                          d=" M-9.765000343322754,-0.13500000536441803 C-9.765000343322754,-9.8100004196167 -5.939000129699707,-14.850000381469727 0,-14.850000381469727 C5.985000133514404,-14.850000381469727 9.765000343322754,-9.765000343322754 9.765000343322754,-0.13500000536441803 C9.765000343322754,9.539999961853027 5.985000133514404,14.850000381469727 0,14.850000381469727 C-5.939000129699707,14.850000381469727 -9.765000343322754,9.539999961853027 -9.765000343322754,-0.13500000536441803z M4.679999828338623,-0.13500000536441803 C4.679999828338623,-8.1899995803833 2.744999885559082,-10.708999633789062 0,-10.708999633789062 C-2.700000047683716,-10.708999633789062 -4.679999828338623,-8.1899995803833 -4.679999828338623,-0.13500000536441803 C-4.679999828338623,7.965000152587891 -2.700000047683716,10.664999961853027 0,10.664999961853027 C2.744999885559082,10.664999961853027 4.679999828338623,7.965000152587891 4.679999828338623,-0.13500000536441803z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,616.7210083007812,777.385986328125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.877999782562256,6.078000068664551 C-5.877999782562256,6.078000068664551 -4.189000129699707,4.089000225067139 -4.189000129699707,4.089000225067139 C-3.0199999809265137,5.203000068664551 -1.4500000476837158,5.953000068664551 0.07000000029802322,5.953000068664551 C1.909999966621399,5.953000068664551 2.9189999103546143,5.118000030517578 2.9189999103546143,3.8440001010894775 C2.9189999103546143,2.499000072479248 1.8639999628067017,2.069000005722046 0.3799999952316284,1.4390000104904175 C0.3799999952316284,1.4390000104904175 -1.8539999723434448,0.4699999988079071 -1.8539999723434448,0.4699999988079071 C-3.4639999866485596,-0.20000000298023224 -5.158999919891357,-1.4739999771118164 -5.158999919891357,-3.864000082015991 C-5.158999919891357,-6.4679999351501465 -2.8589999675750732,-8.472999572753906 0.33000001311302185,-8.472999572753906 C2.239000082015991,-8.472999572753906 4.089000225067139,-7.684000015258789 5.36899995803833,-6.388999938964844 C5.36899995803833,-6.388999938964844 3.878999948501587,-4.548999786376953 3.878999948501587,-4.548999786376953 C2.8389999866485596,-5.434000015258789 1.7289999723434448,-5.953999996185303 0.33000001311302185,-5.953999996185303 C-1.2200000286102295,-5.953999996185303 -2.2290000915527344,-5.228000164031982 -2.2290000915527344,-4.033999919891357 C-2.2290000915527344,-2.749000072479248 -0.984000027179718,-2.2750000953674316 0.3700000047683716,-1.7200000286102295 C0.3700000047683716,-1.7200000286102295 2.5739998817443848,-0.7950000166893005 2.5739998817443848,-0.7950000166893005 C4.519000053405762,0.014999999664723873 5.877999782562256,1.24399995803833 5.877999782562256,3.614000082015991 C5.877999782562256,6.263000011444092 3.678999900817871,8.472999572753906 0.009999999776482582,8.472999572753906 C-2.1989998817443848,8.472999572753906 -4.328999996185303,7.6020002365112305 -5.877999782562256,6.078000068664551z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,630.4860229492188,777.385986328125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.7000000476837158,-8.17300033569336 C-1.7000000476837158,-8.17300033569336 1.6990000009536743,-8.17300033569336 1.6990000009536743,-8.17300033569336 C1.6990000009536743,-8.17300033569336 7.0279998779296875,8.17300033569336 7.0279998779296875,8.17300033569336 C7.0279998779296875,8.17300033569336 3.9590001106262207,8.17300033569336 3.9590001106262207,8.17300033569336 C3.9590001106262207,8.17300033569336 1.468999981880188,-0.5249999761581421 1.468999981880188,-0.5249999761581421 C0.9490000009536743,-2.253999948501587 0.4699999988079071,-4.11899995803833 -0.009999999776482582,-5.914000034332275 C-0.009999999776482582,-5.914000034332275 -0.10999999940395355,-5.914000034332275 -0.10999999940395355,-5.914000034332275 C-0.5600000023841858,-4.104000091552734 -1.0399999618530273,-2.253999948501587 -1.559999942779541,-0.5249999761581421 C-1.559999942779541,-0.5249999761581421 -4.068999767303467,8.17300033569336 -4.068999767303467,8.17300033569336 C-4.068999767303467,8.17300033569336 -7.0279998779296875,8.17300033569336 -7.0279998779296875,8.17300033569336 C-7.0279998779296875,8.17300033569336 -1.7000000476837158,-8.17300033569336 -1.7000000476837158,-8.17300033569336z M-3.878999948501587,1.4700000286102295 C-3.878999948501587,1.4700000286102295 3.819000005722046,1.4700000286102295 3.819000005722046,1.4700000286102295 C3.819000005722046,1.4700000286102295 3.819000005722046,3.74399995803833 3.819000005722046,3.74399995803833 C3.819000005722046,3.74399995803833 -3.878999948501587,3.74399995803833 -3.878999948501587,3.74399995803833 C-3.878999948501587,3.74399995803833 -3.878999948501587,1.4700000286102295 -3.878999948501587,1.4700000286102295z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,642.6849975585938,777.385986328125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-1.4490000009536743,-5.732999801635742 C-1.4490000009536743,-5.732999801635742 -6.168000221252441,-5.732999801635742 -6.168000221252441,-5.732999801635742 C-6.168000221252441,-5.732999801635742 -6.168000221252441,-8.17300033569336 -6.168000221252441,-8.17300033569336 C-6.168000221252441,-8.17300033569336 6.168000221252441,-8.17300033569336 6.168000221252441,-8.17300033569336 C6.168000221252441,-8.17300033569336 6.168000221252441,-5.732999801635742 6.168000221252441,-5.732999801635742 C6.168000221252441,-5.732999801635742 1.4500000476837158,-5.732999801635742 1.4500000476837158,-5.732999801635742 C1.4500000476837158,-5.732999801635742 1.4500000476837158,8.17300033569336 1.4500000476837158,8.17300033569336 C1.4500000476837158,8.17300033569336 -1.4490000009536743,8.17300033569336 -1.4490000009536743,8.17300033569336 C-1.4490000009536743,8.17300033569336 -1.4490000009536743,-5.732999801635742 -1.4490000009536743,-5.732999801635742z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,662.6699829101562,777.385986328125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-6.083000183105469,-8.17300033569336 C-6.083000183105469,-8.17300033569336 -0.574999988079071,-8.17300033569336 -0.574999988079071,-8.17300033569336 C2.8239998817443848,-8.17300033569336 5.443999767303467,-6.9730000495910645 5.443999767303467,-3.3239998817443848 C5.443999767303467,0.1899999976158142 2.8239998817443848,1.784000039100647 -0.574999988079071,1.784000039100647 C-0.574999988079071,1.784000039100647 -3.184000015258789,1.784000039100647 -3.184000015258789,1.784000039100647 C-3.184000015258789,1.784000039100647 -3.184000015258789,8.17300033569336 -3.184000015258789,8.17300033569336 C-3.184000015258789,8.17300033569336 -6.083000183105469,8.17300033569336 -6.083000183105469,8.17300033569336 C-6.083000183105469,8.17300033569336 -6.083000183105469,-8.17300033569336 -6.083000183105469,-8.17300033569336z M-0.875,-0.5350000262260437 C1.3650000095367432,-0.5350000262260437 2.5840001106262207,-1.465000033378601 2.5840001106262207,-3.3239998817443848 C2.5840001106262207,-5.203999996185303 1.3650000095367432,-5.854000091552734 -0.875,-5.854000091552734 C-0.875,-5.854000091552734 -3.184000015258789,-5.854000091552734 -3.184000015258789,-5.854000091552734 C-3.184000015258789,-5.854000091552734 -3.184000015258789,-0.5350000262260437 -3.184000015258789,-0.5350000262260437 C-3.184000015258789,-0.5350000262260437 -0.875,-0.5350000262260437 -0.875,-0.5350000262260437z M-1.1200000047683716,1.0099999904632568 C-1.1200000047683716,1.0099999904632568 0.9789999723434448,-0.7200000286102295 0.9789999723434448,-0.7200000286102295 C0.9789999723434448,-0.7200000286102295 6.083000183105469,8.17300033569336 6.083000183105469,8.17300033569336 C6.083000183105469,8.17300033569336 2.8239998817443848,8.17300033569336 2.8239998817443848,8.17300033569336 C2.8239998817443848,8.17300033569336 -1.1200000047683716,1.0099999904632568 -1.1200000047683716,1.0099999904632568z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,675.3759765625,779.4199829101562)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.048999786376953,2.8399999141693115 C-5.048999786376953,0.20999999344348907 -2.86899995803833,-1.159000039100647 2.1700000762939453,-1.6990000009536743 C2.130000114440918,-3.0190000534057617 1.5989999771118164,-4.11899995803833 -0.05999999865889549,-4.11899995803833 C-1.2799999713897705,-4.11899995803833 -2.428999900817871,-3.569000005722046 -3.509000062942505,-2.9089999198913574 C-3.509000062942505,-2.9089999198913574 -4.568999767303467,-4.828999996185303 -4.568999767303467,-4.828999996185303 C-3.2190001010894775,-5.678999900817871 -1.4800000190734863,-6.438000202178955 0.4699999988079071,-6.438000202178955 C3.5390000343322754,-6.438000202178955 5.048999786376953,-4.548999786376953 5.048999786376953,-1.1299999952316284 C5.048999786376953,-1.1299999952316284 5.048999786376953,6.138999938964844 5.048999786376953,6.138999938964844 C5.048999786376953,6.138999938964844 2.688999891281128,6.138999938964844 2.688999891281128,6.138999938964844 C2.688999891281128,6.138999938964844 2.4690001010894775,4.7789998054504395 2.4690001010894775,4.7789998054504395 C2.4690001010894775,4.7789998054504395 2.3889999389648438,4.7789998054504395 2.3889999389648438,4.7789998054504395 C1.2890000343322754,5.7179999351501465 0.029999999329447746,6.438000202178955 -1.4199999570846558,6.438000202178955 C-3.569000005722046,6.438000202178955 -5.048999786376953,4.979000091552734 -5.048999786376953,2.8399999141693115z M2.1700000762939453,2.8499999046325684 C2.1700000762939453,2.8499999046325684 2.1700000762939453,0.09000000357627869 2.1700000762939453,0.09000000357627869 C-1.159999966621399,0.5099999904632568 -2.2690000534057617,1.3799999952316284 -2.2690000534057617,2.61899995803833 C-2.2690000534057617,3.7039999961853027 -1.5299999713897705,4.178999900817871 -0.5,4.178999900817871 C0.5,4.178999900817871 1.2599999904632568,3.690000057220459 2.1700000762939453,2.8499999046325684z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,689.1199951171875,779.27001953125)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.234000205993652,-5.988999843597412 C-5.234000205993652,-5.988999843597412 -2.874000072479248,-5.988999843597412 -2.874000072479248,-5.988999843597412 C-2.874000072479248,-5.988999843597412 -2.6549999713897705,-4.328999996185303 -2.6549999713897705,-4.328999996185303 C-2.6549999713897705,-4.328999996185303 -2.5739998817443848,-4.328999996185303 -2.5739998817443848,-4.328999996185303 C-1.4739999771118164,-5.39900016784668 -0.22499999403953552,-6.289000034332275 1.4550000429153442,-6.289000034332275 C4.084000110626221,-6.289000034332275 5.234000205993652,-4.508999824523926 5.234000205993652,-1.409999966621399 C5.234000205993652,-1.409999966621399 5.234000205993652,6.289000034332275 5.234000205993652,6.289000034332275 C5.234000205993652,6.289000034332275 2.3540000915527344,6.289000034332275 2.3540000915527344,6.289000034332275 C2.3540000915527344,6.289000034332275 2.3540000915527344,-1.0399999618530273 2.3540000915527344,-1.0399999618530273 C2.3540000915527344,-3.059999942779541 1.774999976158142,-3.819000005722046 0.4449999928474426,-3.819000005722046 C-0.6349999904632568,-3.819000005722046 -1.343999981880188,-3.2899999618530273 -2.3540000915527344,-2.2899999618530273 C-2.3540000915527344,-2.2899999618530273 -2.3540000915527344,6.289000034332275 -2.3540000915527344,6.289000034332275 C-2.3540000915527344,6.289000034332275 -5.234000205993652,6.289000034332275 -5.234000205993652,6.289000034332275 C-5.234000205993652,6.289000034332275 -5.234000205993652,-5.988999843597412 -5.234000205993652,-5.988999843597412z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,702.875,781.9849853515625)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.828999996185303,5.803999900817871 C-5.828999996185303,4.769000053405762 -5.189000129699707,3.865000009536743 -4.059000015258789,3.184999942779541 C-4.059000015258789,3.184999942779541 -4.059000015258789,3.0840001106262207 -4.059000015258789,3.0840001106262207 C-4.689000129699707,2.674999952316284 -5.169000148773193,2.0239999294281006 -5.169000148773193,1.034999966621399 C-5.169000148773193,0.08500000089406967 -4.519000053405762,-0.7549999952316284 -3.809000015258789,-1.2549999952316284 C-3.809000015258789,-1.2549999952316284 -3.809000015258789,-1.3539999723434448 -3.809000015258789,-1.3539999723434448 C-4.64900016784668,-1.9739999771118164 -5.428999900817871,-3.1449999809265137 -5.428999900817871,-4.593999862670898 C-5.428999900817871,-7.413000106811523 -3.1489999294281006,-9.003000259399414 -0.5799999833106995,-9.003000259399414 C0.10000000149011612,-9.003000259399414 0.7400000095367432,-8.883000373840332 1.2400000095367432,-8.70300006866455 C1.2400000095367432,-8.70300006866455 5.627999782562256,-8.70300006866455 5.627999782562256,-8.70300006866455 C5.627999782562256,-8.70300006866455 5.627999782562256,-6.563000202178955 5.627999782562256,-6.563000202178955 C5.627999782562256,-6.563000202178955 3.3889999389648438,-6.563000202178955 3.3889999389648438,-6.563000202178955 C3.7890000343322754,-6.103000164031982 4.089000225067139,-5.343999862670898 4.089000225067139,-4.504000186920166 C4.089000225067139,-1.774999976158142 2.0199999809265137,-0.3140000104904175 -0.5799999833106995,-0.3140000104904175 C-1.100000023841858,-0.3140000104904175 -1.6890000104904175,-0.42500001192092896 -2.239000082015991,-0.6399999856948853 C-2.6089999675750732,-0.32600000500679016 -2.8389999866485596,-0.014999999664723873 -2.8389999866485596,0.5350000262260437 C-2.8389999866485596,1.2239999771118164 -2.3399999141693115,1.6449999809265137 -0.8500000238418579,1.6449999809265137 C-0.8500000238418579,1.6449999809265137 1.3339999914169312,1.6449999809265137 1.3339999914169312,1.6449999809265137 C4.269000053405762,1.6449999809265137 5.828999996185303,2.555000066757202 5.828999996185303,4.673999786376953 C5.828999996185303,7.093999862670898 3.2890000343322754,9.003000259399414 -0.7200000286102295,9.003000259399414 C-3.6489999294281006,9.003000259399414 -5.828999996185303,7.953000068664551 -5.828999996185303,5.803999900817871z M3.0490000247955322,5.144000053405762 C3.0490000247955322,4.195000171661377 2.2899999618530273,3.9140000343322754 0.8849999904632568,3.9140000343322754 C0.8849999904632568,3.9140000343322754 -0.800000011920929,3.9140000343322754 -0.800000011920929,3.9140000343322754 C-1.4600000381469727,3.9140000343322754 -1.9889999628067017,3.864000082015991 -2.4590001106262207,3.74399995803833 C-3.11899995803833,4.24399995803833 -3.4089999198913574,4.794000148773193 -3.4089999198913574,5.36299991607666 C-3.4089999198913574,6.482999801635742 -2.2100000381469727,7.133999824523926 -0.2800000011920929,7.133999824523926 C1.6990000009536743,7.133999824523926 3.0490000247955322,6.203999996185303 3.0490000247955322,5.144000053405762z M1.5499999523162842,-4.593999862670898 C1.5499999523162842,-6.133999824523926 0.6200000047683716,-7.013999938964844 -0.5799999833106995,-7.013999938964844 C-1.7799999713897705,-7.013999938964844 -2.7090001106262207,-6.144000053405762 -2.7090001106262207,-4.593999862670898 C-2.7090001106262207,-3.0339999198913574 -1.7599999904632568,-2.124000072479248 -0.5799999833106995,-2.124000072479248 C0.6000000238418579,-2.124000072479248 1.5499999523162842,-3.0339999198913574 1.5499999523162842,-4.593999862670898z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,715.0399780273438,779.4199829101562)"
                      >
                        <path
                          fill="rgb(0,47,33)"
                          fill-opacity="1"
                          d=" M-5.363999843597412,0.009999999776482582 C-5.363999843597412,-3.9779999256134033 -2.5940001010894775,-6.438000202178955 0.29499998688697815,-6.438000202178955 C3.614000082015991,-6.438000202178955 5.363999843597412,-4.039000034332275 5.363999843597412,-0.609000027179718 C5.363999843597412,-0.05900000035762787 5.303999900817871,0.49000000953674316 5.238999843597412,0.7900000214576721 C5.238999843597412,0.7900000214576721 -2.553999900817871,0.7900000214576721 -2.553999900817871,0.7900000214576721 C-2.313999891281128,2.9700000286102295 -0.9139999747276306,4.209000110626221 1.065000057220459,4.209000110626221 C2.115000009536743,4.209000110626221 3.0139999389648438,3.878999948501587 3.9140000343322754,3.319000005722046 C3.9140000343322754,3.319000005722046 4.894000053405762,5.109000205993652 4.894000053405762,5.109000205993652 C3.7239999771118164,5.8979997634887695 2.244999885559082,6.438000202178955 0.6850000023841858,6.438000202178955 C-2.7039999961853027,6.438000202178955 -5.363999843597412,4.059999942779541 -5.363999843597412,0.009999999776482582z M2.875,-1.1699999570846558 C2.875,-3.059000015258789 2.0350000858306885,-4.209000110626221 0.35499998927116394,-4.209000110626221 C-1.0750000476837158,-4.209000110626221 -2.3340001106262207,-3.1389999389648438 -2.5840001106262207,-1.1699999570846558 C-2.5840001106262207,-1.1699999570846558 2.875,-1.1699999570846558 2.875,-1.1699999570846558z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(109,189,163)"
                          fill-opacity="1"
                          d=" M156.5709991455078,87.91999816894531 C156.5709991455078,87.91999816894531 -156.5709991455078,87.91999816894531 -156.5709991455078,87.91999816894531 C-156.5709991455078,87.91999816894531 -156.5709991455078,-63.85300064086914 -156.5709991455078,-63.85300064086914 C-156.5709991455078,-77.1449966430664 -145.79600524902344,-87.91999816894531 -132.50399780273438,-87.91999816894531 C-132.50399780273438,-87.91999816894531 132.50399780273438,-87.91999816894531 132.50399780273438,-87.91999816894531 C145.79600524902344,-87.91999816894531 156.5709991455078,-77.1449966430664 156.5709991455078,-63.85300064086914 C156.5709991455078,-63.85300064086914 156.5709991455078,87.91999816894531 156.5709991455078,87.91999816894531z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,343,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,293.7919921875,307.68701171875)"
                      >
                        <path
                          fill="rgb(35,124,58)"
                          fill-opacity="1"
                          d=" M96.427001953125,-18.113000869750977 C94.71099853515625,-21.152999877929688 83.29100036621094,-41.38800048828125 68.9540023803711,-40.95399856567383 C55.71500015258789,-40.553001403808594 37.766998291015625,-21.472000122070312 37.766998291015625,-21.472000122070312 C37.766998291015625,-21.472000122070312 12.40999984741211,-41.095001220703125 -0.8450000286102295,-38.266998291015625 C-14.317000389099121,-35.393001556396484 -26.833999633789062,-8.708000183105469 -26.833999633789062,-8.708000183105469 C-26.833999633789062,-8.708000183105469 -47.74300003051758,-23.332000732421875 -61.733001708984375,-20.799999237060547 C-75.85900115966797,-18.243999481201172 -90.69200134277344,5.400000095367432 -90.69200134277344,5.400000095367432 C-90.69200134277344,5.400000095367432 -97.45800018310547,2.878000020980835 -105.68099975585938,1.406999945640564 C-105.68099975585938,1.406999945640564 -105.68099975585938,40.96099853515625 -105.68099975585938,40.96099853515625 C-105.68099975585938,40.96099853515625 103.13899993896484,40.96099853515625 103.13899993896484,40.96099853515625 C108.19300079345703,20.320999145507812 105.58799743652344,-1.8819999694824219 96.427001953125,-18.113000869750977z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,241.55099487304688,219.18899536132812)"
                      >
                        <path
                          fill="rgb(231,113,51)"
                          fill-opacity="1"
                          d=" M22.18600082397461,0 C22.18600082397461,12.253000259399414 12.253000259399414,22.18600082397461 0,22.18600082397461 C-12.253000259399414,22.18600082397461 -22.18600082397461,12.253000259399414 -22.18600082397461,0 C-22.18600082397461,-12.253000259399414 -12.253000259399414,-22.18600082397461 0,-22.18600082397461 C12.253000259399414,-22.18600082397461 22.18600082397461,-12.253000259399414 22.18600082397461,0z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,407.9549865722656,266.72601318359375)"
                      >
                        <path
                          fill="rgb(242,170,212)"
                          fill-opacity="1"
                          d=" M68.76200103759766,42.224998474121094 C68.76200103759766,42.224998474121094 -68.76200103759766,42.224998474121094 -68.76200103759766,42.224998474121094 C-68.76200103759766,42.224998474121094 -68.76200103759766,-42.224998474121094 -68.76200103759766,-42.224998474121094 C-68.76200103759766,-42.224998474121094 68.76200103759766,-42.224998474121094 68.76200103759766,-42.224998474121094 C68.76200103759766,-42.224998474121094 68.76200103759766,42.224998474121094 68.76200103759766,42.224998474121094z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,375.0119934082031,287.8380126953125)"
                      >
                        <path
                          fill="rgb(231,113,51)"
                          fill-opacity="1"
                          d=" M16.104000091552734,21.11199951171875 C16.104000091552734,21.11199951171875 -16.104000091552734,21.11199951171875 -16.104000091552734,21.11199951171875 C-16.104000091552734,21.11199951171875 -16.104000091552734,-21.11199951171875 -16.104000091552734,-21.11199951171875 C-16.104000091552734,-21.11199951171875 16.104000091552734,-21.11199951171875 16.104000091552734,-21.11199951171875 C16.104000091552734,-21.11199951171875 16.104000091552734,21.11199951171875 16.104000091552734,21.11199951171875z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,344.6820068359375,324.46099853515625)"
                      >
                        <path
                          fill="rgb(16,47,37)"
                          fill-opacity="1"
                          d=" M156.5709991455078,-14.678000450134277 C76.68800354003906,-37.66600036621094 -156.5709991455078,-11.75100040435791 -156.5709991455078,-11.75100040435791 C-156.5709991455078,-11.75100040435791 -156.5709991455078,24.187999725341797 -156.5709991455078,24.187999725341797 C-156.5709991455078,24.187999725341797 156.5709991455078,24.187999725341797 156.5709991455078,24.187999725341797 C156.5709991455078,24.187999725341797 156.5709991455078,-14.678000450134277 156.5709991455078,-14.678000450134277z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(242,170,212)"
                          fill-opacity="1"
                          d=" M156.5709991455078,87.91999816894531 C156.5709991455078,87.91999816894531 -156.5709991455078,87.91999816894531 -156.5709991455078,87.91999816894531 C-156.5709991455078,87.91999816894531 -156.5709991455078,-63.85300064086914 -156.5709991455078,-63.85300064086914 C-156.5709991455078,-77.1449966430664 -145.79600524902344,-87.91999816894531 -132.50399780273438,-87.91999816894531 C-132.50399780273438,-87.91999816894531 132.50399780273438,-87.91999816894531 132.50399780273438,-87.91999816894531 C145.79600524902344,-87.91999816894531 156.5709991455078,-77.1449966430664 156.5709991455078,-63.85300064086914 C156.5709991455078,-63.85300064086914 156.5709991455078,87.91999816894531 156.5709991455078,87.91999816894531z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0,0,0,0,736,546)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,704.4110107421875,281.1659851074219)"
                      >
                        <path
                          fill="rgb(231,113,51)"
                          fill-opacity="1"
                          d=" M-7.492000102996826,11.720000267028809 C-7.492000102996826,11.720000267028809 -4.64300012588501,-12.741999626159668 -7.492000102996826,-18.145000457763672 C-0.5479999780654907,-18.523000717163086 7.492000102996826,-18.145000457763672 7.492000102996826,-18.145000457763672 C7.492000102996826,-18.145000457763672 4.203000068664551,15.253000259399414 6.03000020980835,17.833999633789062 C7.85699987411499,20.415000915527344 -7.492000102996826,11.720000267028809 -7.492000102996826,11.720000267028809z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,704.4110107421875,228.6199951171875)"
                      >
                        <path
                          fill="rgb(16,47,37)"
                          fill-opacity="1"
                          d=" M37.87200164794922,8.222000122070312 C37.87200164794922,-0.382999986410141 31.972999572753906,-7.563000202178955 24.1299991607666,-9.227999687194824 C24.7450008392334,-11.39799976348877 25.079999923706055,-13.692000389099121 25.079999923706055,-16.066999435424805 C25.079999923706055,-29.481000900268555 14.567999839782715,-40.35599899291992 1.5989999771118164,-40.35599899291992 C-11.369000434875488,-40.35599899291992 -21.882999420166016,-29.481000900268555 -21.882999420166016,-16.066999435424805 C-21.882999420166016,-14.831000328063965 -21.79199981689453,-13.616999626159668 -21.6200008392334,-12.430999755859375 C-31.049999237060547,-9.277000427246094 -37.87200164794922,-0.12399999797344208 -37.87200164794922,10.680000305175781 C-37.87200164794922,24.0939998626709 -27.357999801635742,34.96900177001953 -14.390000343322754,34.96900177001953 C-13.984000205993652,34.96900177001953 -13.581000328063965,34.95800018310547 -13.180000305175781,34.9370002746582 C-9.144000053405762,38.32400131225586 -4.002999782562256,40.35599899291992 1.5989999771118164,40.35599899291992 C11.206000328063965,40.35599899291992 19.461000442504883,34.3849983215332 23.097000122070312,25.836999893188477 C31.445999145507812,24.604999542236328 37.87200164794922,17.198999404907227 37.87200164794922,8.222000122070312z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,581.7639770507812,299.47900390625)"
                      >
                        <path
                          fill="rgb(16,47,37)"
                          fill-opacity="1"
                          d=" M0,0"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,814.4089965820312,268.9750061035156)"
                      >
                        <path
                          fill="rgb(231,113,51)"
                          fill-opacity="1"
                          d=" M-1.187000036239624,-48.24599838256836 C-1.187000036239624,-48.24599838256836 -1.187000036239624,-7.6479997634887695 -1.187000036239624,-7.6479997634887695 C-1.187000036239624,-7.6479997634887695 -50.768001556396484,-7.6479997634887695 -50.768001556396484,-7.6479997634887695 C-50.768001556396484,-7.6479997634887695 -50.768001556396484,48.24599838256836 -50.768001556396484,48.24599838256836 C-50.768001556396484,48.24599838256836 -1.187000036239624,48.24599838256836 -1.187000036239624,48.24599838256836 C-1.187000036239624,48.24599838256836 50.768001556396484,48.24599838256836 50.768001556396484,48.24599838256836 C50.768001556396484,48.24599838256836 50.768001556396484,-48.24599838256836 50.768001556396484,-48.24599838256836 C50.768001556396484,-48.24599838256836 -1.187000036239624,-48.24599838256836 -1.187000036239624,-48.24599838256836z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,860.322021484375,297.8680114746094)"
                      >
                        <path
                          fill="rgb(16,47,37)"
                          fill-opacity="1"
                          d=" M31.48900032043457,-18.03499984741211 C27.69300079345703,-19.44300079345703 23.642000198364258,-20.41699981689453 19.834999084472656,-20.29800033569336 C7.339000225067139,-19.9060001373291 9.611000061035156,-3.388000011444092 9.611000061035156,-3.388000011444092 C9.611000061035156,-3.388000011444092 6.203000068664551,-11.680999755859375 -12.35200023651123,-9.331000328063965 C-30.906999588012695,-6.980999946594238 -31.48900032043457,15.878000259399414 -31.48900032043457,15.878000259399414 C-31.48900032043457,15.878000259399414 -12.730999946594238,18.871000289916992 -10.079999923706055,20.04599952697754 C-7.428999900817871,21.22100067138672 14.911999702453613,18.08799934387207 19.834999084472656,17.695999145507812 C21.777999877929688,17.541000366210938 26.493000030517578,13.295999526977539 31.48900032043457,8.217000007629395 C31.48900032043457,8.217000007629395 31.48900032043457,-18.03499984741211 31.48900032043457,-18.03499984741211z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,627.760009765625,256.989990234375)"
                      >
                        <path
                          fill="rgb(255,152,0)"
                          fill-opacity="1"
                          d=" M27.229999542236328,44.86000061035156 C27.229999542236328,44.86000061035156 -27.229999542236328,44.86000061035156 -27.229999542236328,44.86000061035156 C-27.229999542236328,44.86000061035156 -27.229999542236328,-44.86000061035156 -27.229999542236328,-44.86000061035156 C-27.229999542236328,-44.86000061035156 27.229999542236328,-44.86000061035156 27.229999542236328,-44.86000061035156 C27.229999542236328,-44.86000061035156 27.229999542236328,44.86000061035156 27.229999542236328,44.86000061035156z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,612.9459838867188,279.93499755859375)"
                      >
                        <path
                          fill="rgb(16,47,37)"
                          fill-opacity="1"
                          d=" M-34.277000427246094,-25.666000366210938 C-34.277000427246094,-25.666000366210938 -34.277000427246094,26.33099937438965 -34.277000427246094,26.33099937438965 C-29.104999542236328,25.718000411987305 -3.871000051498413,24.55699920654297 3.6549999713897705,22.702999114990234 C11.607000350952148,20.7450008392334 29.405000686645508,14.086000442504883 32.8129997253418,11.736000061035156 C36.22100067138672,9.38599967956543 33.56999969482422,-7.065000057220459 25.996999740600586,-12.293000221252441 C18.423999786376953,-17.520999908447266 8.199000358581543,-8.631999969482422 4.790999889373779,-7.848999977111816 C1.3830000162124634,-7.065999984741211 -3.9179999828338623,-21.16699981689453 -25.50200080871582,-25.867000579833984 C-28.804000854492188,-26.586000442504883 -31.71299934387207,-26.430999755859375 -34.277000427246094,-25.666000366210938z"
                        ></path>
                      </g>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,735.239990234375,317.4779968261719)"
                      >
                        <path
                          fill="rgb(35,124,58)"
                          fill-opacity="1"
                          d=" M44.28499984741211,-4.067999839782715 C14.58899974822998,-9.074000358581543 2.0160000324249268,-20.288000106811523 -30.691999435424805,-27.863000869750977 C-80.75900268554688,-39.45800018310547 -125.57599639892578,-30.38599967956543 -156.5709991455078,-20.257999420166016 C-156.5709991455078,-20.257999420166016 -156.5709991455078,33.29499816894531 -156.5709991455078,33.29499816894531 C-156.5709991455078,33.29499816894531 156.5709991455078,33.29499816894531 156.5709991455078,33.29499816894531 C156.5709991455078,33.29499816894531 156.5709991455078,-23.58799934387207 156.5709991455078,-23.58799934387207 C107.5,-0.3529999852180481 70.1969985961914,0.30000001192092896 44.28499984741211,-4.067999839782715z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </section>
          <section class="home-rankings">
            <div class="home-wavy-edge home-wavy-edge--rankings">
              <div class="home-wavy-edge__inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                  <path
                    d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
                    transform="translate(0 -5)"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="home-header home-header--rankings">
              <div class="type--weight-600 home-header__kicker">
                2023 Rankings
              </div>
            </h2>
            <p class="type--weight-700 home-header home-header--rankings home-header__title">
              Browse schools &amp; colleges by “best&nbsp;of”&nbsp;lists.
            </p>
            <div class="home-squiggle home-squiggle--rankings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 186 17"
                fill="none"
              >
                <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
              </svg>
            </div>
            <div class="type--weight-400 home-body home-body--rankings">
              We combine the reviews and the data to put together these
              comprehensive lists to get you started.
            </div>
            <ul class="home-rankings__ranks">
              <li class="home-rankings__rank">
                <a
                  href="https://www.niche.com/colleges/rankings/"
                  class="home-rankings__rank__link"
                  tabindex="0"
                >
                  <figure class="home-rankings__rank__badge">
                    <div
                      class="rankings-badge"
                      data-size="large"
                      data-theme="salt"
                      data-vertical="colleges"
                      data-testid="rankings-badge"
                    ></div>
                  </figure>
                  <span class="type--weight-600 home-rankings__rank__cta">
                    View Best Colleges
                  </span>
                </a>
              </li>
              <li class="home-rankings__rank">
                <a
                  href="https://www.niche.com/k12/rankings/"
                  class="home-rankings__rank__link"
                  tabindex="0"
                >
                  <figure class="home-rankings__rank__badge">
                    <div
                      class="rankings-badge"
                      data-size="large"
                      data-theme="salt"
                      data-vertical="k12"
                      data-testid="rankings-badge"
                    ></div>
                  </figure>
                  <span class="type--weight-600 home-rankings__rank__cta">
                    View Best K-12 Schools
                  </span>
                </a>
              </li>
              <li class="home-rankings__rank">
                <a
                  href="https://www.niche.com/k12/search/best-school-districts/"
                  class="home-rankings__rank__link"
                  tabindex="0"
                >
                  <figure class="home-rankings__rank__badge">
                    <div
                      class="rankings-badge"
                      data-size="large"
                      data-theme="salt"
                      data-vertical="k12"
                      data-testid="rankings-badge"
                    ></div>
                  </figure>
                  <span class="type--weight-600 home-rankings__rank__cta">
                    View Best Districts
                  </span>
                </a>
              </li>
            </ul>
          </section>
          <section class="home-partners">
            <div class="home-wavy-edge home-wavy-edge--partners">
              <div class="home-wavy-edge__inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                  <path
                    d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
                    transform="translate(0 -5)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="home-partners__copy-container">
              <h2 class="home-header home-header--partners">
                <div class="type--weight-600 home-header__kicker">
                  Partner With Niche
                </div>
              </h2>
              <p class="type--weight-700 home-header home-header--partners home-header__title">
                For schools and&nbsp;colleges
              </p>
              <div class="home-squiggle home-squiggle--partners">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186 17"
                  fill="none"
                >
                  <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                </svg>
              </div>
              <div class="type--weight-400 home-body home-body--partners">
                Are you a college or K-12 school representative? Learn more
                about how you can partner with Niche to connect with students
                and families throughout the school search process.
              </div>
              <div class="home-partners__cta-claim">
                <a
                  href="https://www.niche.com/claim-your-school/"
                  class="home-partners__cta-claim__link"
                  tabindex="0"
                >
                  <span
                    class="claimed-entity-icon home-partners__cta-claim__icon"
                    aria-label="blue checkmark"
                    role="navigation"
                  ></span>
                  <span class="type--weight-600 home-partners__cta-claim__text">
                    Claim Your School
                  </span>
                </a>
              </div>
              <div class="home-partners__cta-learn">
                <button class="button home-button--green">Learn More</button>
              </div>
            </div>
            <div
              class="home-partners__photo-container home-partners__photo-container--animatable"
              id="partnerAnimation"
            >
              <figure class="home-partners__photo home-partners__photo--photo1">
                <div class="home-partners__photo__image-wrap">
                  <picture>
                    <source
                      srcset="
                            https://d33a4decm84gsn.cloudfront.net/static/home/partner-dartmouth.webp
                          "
                      type="image/webp"
                    />
                    <source
                      srcset="
                            https://d33a4decm84gsn.cloudfront.net/static/home/partner-dartmouth.jpg
                          "
                      type="image/jpeg"
                    />
                    <Image
                      loading="lazy"
                      src="https://d33a4decm84gsn.cloudfront.net/static/home/partner-dartmouth.jpg"
                      alt="Niche Partner: Dartmouth College"
                    />
                  </picture>
                </div>
                <figcaption class="type--weight-600 home-partners__photo__caption">
                  Dartmouth College
                </figcaption>
              </figure>
              <figure class="home-partners__photo home-partners__photo--photo2">
                <div class="home-partners__photo__image-wrap">
                  <picture>
                    <source
                      srcset="
                            https://d33a4decm84gsn.cloudfront.net/static/home/partner-nazareth-prep.webp
                          "
                      type="image/webp"
                    />
                    <source
                      srcset="
                            https://d33a4decm84gsn.cloudfront.net/static/home/partner-nazareth-prep.jpg
                          "
                      type="image/jpeg"
                    />
                    <Image
                      loading="lazy"
                      src="https://d33a4decm84gsn.cloudfront.net/static/home/partner-nazareth-prep.jpg"
                      alt="Niche Partner: Nazareth Prep"
                    />
                  </picture>
                </div>
                <figcaption class="type--weight-600 home-partners__photo__caption">
                  Nazareth Prep
                </figcaption>
              </figure>
              <figure class="home-partners__stamp">
                <Image
                  loading="lazy"
                  src="https://d33a4decm84gsn.cloudfront.net/static/home/stamp-claim.svg"
                  alt=""
                />
              </figure>
            </div>
            <div
              class="home-partners__logos-wrap"
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              <div class="type--weight-700 home-partners__logos-title">
                Over 1,700 schools partner with Niche
              </div>
              <ul class="home-partners__logos">
                <li class="home-partners__logo">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/logo-phillips-andover.png"
                    class="home-partners__logo__image"
                    alt="Phillips Academy Andover logo"
                  />
                </li>
                <li class="home-partners__logo">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/logo-oregon.png"
                    class="home-partners__logo__image"
                    alt="University of Oregon logo"
                  />
                </li>
                <li class="home-partners__logo">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/logo-wash-jeff.png"
                    class="home-partners__logo__image"
                    alt="Washington and Jefferson College logo"
                  />
                </li>
                <li class="home-partners__logo">
                  <Image
                    loading="lazy"
                    src="https://d33a4decm84gsn.cloudfront.net/static/home/logo-marquette.png"
                    class="home-partners__logo__image"
                    alt="Marquette University logo"
                  />
                </li>
              </ul>
            </div>
          </section>
          <section class="home-started">
            <div class="home-wavy-edge home-wavy-edge--start">
              <div class="home-wavy-edge__inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                  <path
                    d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
                    transform="translate(0 -5)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="home-start__illustration">
              <picture>
                <source
                  srcset="
                        https://d33a4decm84gsn.cloudfront.net/static/home/start-student-with-dog.webp
                      "
                  type="image/webp"
                />
                <source
                  srcset="
                        https://d33a4decm84gsn.cloudfront.net/static/home/start-student-with-dog.png
                      "
                  type="image/png"
                />
                <Image
                  loading="lazy"
                  src="https://d33a4decm84gsn.cloudfront.net/static/home/start-student-with-dog.png"
                  alt="Illustration of a student and dog looking to the future"
                />
              </picture>
            </div>
            <div class="home-start__content-container">
              <h2 class="home-header home-header--start">
                <div class="type--weight-700 home-header__title">
                  Not sure where to start?
                </div>
              </h2>
              <div class="home-squiggle home-squiggle--start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186 17"
                  fill="none"
                >
                  <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                </svg>
              </div>
              <div class="type--weight-400 home-body home-body--start">
                Tell us what matters most to you and we&apos;ll create a custom
                list of schools tailored to fit your needs.
              </div>
              <ul class="home-start__ctas">
                <li class="home-start__cta">
                  <a
                    href="https://www.niche.com/colleges/college-quiz/"
                    class="button home-button--green home-start__button-block"
                    tabindex="0"
                  >
                    Take our College Quiz
                  </a>
                </li>
                <li class="home-start__cta">
                  <a
                    href="https://www.niche.com/k12/schools-near-you/"
                    class="button home-button--green home-start__button-block"
                    tabindex="0"
                  >
                    Find K-12 Schools Near You
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
