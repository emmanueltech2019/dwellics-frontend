import React from "react";

function aboutDwellics() {
  return (
    <div className="content-wrapper">
      <main className="structured-container" id="maincontent">
        <div id="navSentinel"></div>
        <nav className="nav" aria-label="About Dwellics">
          <div className="nav__inner">
            <div className="nav__title" aria-hidden="true">
              About Dwellics
            </div>

            <ul className="nav__primaries">
              <li className="nav__primary">
                <a
                  href="https://www.niche.com/about/"
                  className="nav__label nav__label--selected"
                >
                  Overview
                </a>
              </li>
              <li className="nav__primary">
                <a
                  href="https://www.niche.com/about/data/"
                  className="nav__label "
                >
                  Our Data
                </a>
              </li>
              <li className="nav__primary">
                <a
                  href="https://www.niche.com/about/team/"
                  className="nav__label "
                >
                  Working At Dwellics
                </a>
              </li>
              <li className="nav__primary">
                <a
                  href="https://www.niche.com/about/partnerships/"
                  className="nav__label "
                >
                  Partnerships
                </a>
              </li>
            </ul>

            <div className="nav__close-top" data-close-nav>
              <div className="svg-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 3.7l-6 6-6-6c-.6-.6-1.7-1.1-2.5-.2-.9.8-.4 1.9.2 2.5l6 6-6 6c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l6-6 6 6c.6.6 1.7 1.1 2.5.3.9-.9.4-1.9-.3-2.5l-6-6 6-6c.6-.6 1.1-1.7.3-2.5-.7-.9-1.8-.4-2.4.2z" />
                </svg>
              </div>
            </div>

            <div className="nav__trigger" data-open-nav>
              More{" "}
              <div className="svg-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.6 9.4c-.7-.7-1.6-.3-2.1.2L12 15.2 6.5 9.7c-.5-.5-1.4-1-2.1-.3-.7.7-.3 1.6.2 2.1l7.4 7.4 7.4-7.4c.5-.5.9-1.3.2-2.1z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>

        <div className="about-bg-wrap">
          <div className="about-bg about-bg--sky about-absolute"></div>
        </div>

        <section className="about-layout-wrap about-layout--max-w-700">
          <div className="about-layout about-layout--p-t-60 about-illustration-padding">
            <div className="about-text about-text--40-50 about-text--dark-blue about-text--pad-b-1 about-text--leading-100 about-text--center">
              Find Where You&nbsp;Belong
            </div>

            <div
              className="about-text about-text--20-24 about-text--pad-b-1 
		about-text--center about-layout--max-w-500"
            >
              Dwellics connects people to their future schools, neighborhoods,
              and workplaces.
            </div>
          </div>
        </section>

        <div className="about-main-illustration-wrap">
          <div className="about-bg about-bg--cloud1 about-absolute"></div>
          <div className="about-bg about-bg--cloud2 about-absolute"></div>
          <div className="about-bg about-bg--cloud3 about-absolute"></div>
          <div className="about-bg about-bg--cloud4 about-absolute"></div>
          <div className="about-bg about-bg--cloud5 about-absolute"></div>
          <div className="about-bg about-bg--cloud6 about-absolute"></div>
          <div className="about-bg about-bg--cloud7 about-absolute"></div>

          <div className="about-bg about-bg--balloon about-absolute"></div>

          <div className="about-bg about-bg--hills-1 about-absolute"></div>
          <div className="about-bg about-bg--hills-2 about-absolute"></div>
          <div className="about-bg about-bg--hills-3 about-absolute"></div>
          <div className="about-bg about-bg--hills-4 about-absolute"></div>

          <div className="about-top-wrap-inner">
            <div className="about-absolute about-absolute--places-photo">
              <div className="about-photo about-photo--places"></div>
            </div>

            <div className="about-absolute about-absolute--k12-photo">
              <div className="about-photo about-photo--k12"></div>
            </div>

            <div className="about-absolute about-absolute--college-photo">
              <div className="about-photo about-photo--college"></div>
            </div>

            <div className="about-absolute about-absolute--work-photo">
              <div className="about-photo about-photo--work"></div>
            </div>
          </div>
        </div>

        <div className="about-main-big-numbers about-background--green03">
          <section className="about-layout-wrap about-layout--max-w-900">
            <div className="about-layout about-layout--m-t-60">
              <div className="about-grid">
                <div className="about-grid__group">
                  <div className="about-text about-text--niche about-text--800 about-text--25-30 about-text--center about-text--pad-b-1 about-text--green06">
                    100
                    <br />
                    million+
                  </div>
                  <div className="about-text about-text--center about-text--green06 about-layout--max-w-200">
                    ratings and reviews from&nbsp;real&nbsp;people
                  </div>
                </div>

                <div className="about-grid__group">
                  <div className="about-text about-text--niche about-text--800 about-text--25-30 about-text--center about-text--pad-b-1 about-text--green06">
                    200
                    <br />
                    Thousand+
                  </div>
                  <div className="about-text about-text--center about-text--green06">
                    in-depth profiles on schools, <br />
                    companies, and neighborhoods
                  </div>
                </div>

                <div className="about-grid__group">
                  <div className="about-text about-text--niche about-text--800 about-text--25-30 about-text--center about-text--pad-b-1 about-text--green06">
                    50
                    <br />
                    million+
                  </div>
                  <div className="about-text about-text--center about-text--green06 about-layout--max-w-200">
                    people used Dwellics in&nbsp;the&nbsp;last&nbsp;year
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="about-bg about-bg--curve about-absolute"></div>
          <div className="about-bg about-bg--leaf1 about-absolute"></div>
          <div className="about-bg about-bg--leaf2 about-absolute"></div>
        </div>

        <div className="about-background  about-layout--p-t-30 about-layout--p-b-10 about-background--green06">
          <section className="about-layout-wrap about-layout--max-w-900">
            <div className="about-layout   about-layout--m-t-50">
              <div
                className="about-text about-text--25-30 about-text--pad-b-1 
				 about-text--pad-b-3"
              >
                What Sets Dwellics Apart
              </div>

              <div
                className="about-text about-text--18 about-text--leading-150 
				 
				about-text--pad-b-4"
              >
                Dwellics is the market leader in connecting colleges and schools
                with students and families. With in-depth profiles on every
                school and college in America, over 140 million reviews and
                ratings, and powerful search and data tools, Dwellics helps
                millions of students and families find and enroll in the right
                school for them. For schools, school districts, and communities,
                Dwellics platform, data, and services help thousands of schools
                recruit and enroll more best-fit students.
              </div>
            </div>
          </section>
        </div>
        <div className="about-background  about-layout--p-t-10 about-layout--p-b-10 about-background--green05">
          <section className="about-layout-wrap about-layout--max-w-900">
            <div className="about-layout   about-layout--m-t-50">
              <div
                className="about-text about-text--25-30 about-text--pad-b-1 
				 "
              >
                Working At Dwellics
              </div>

              <div
                className="about-text about-text--18 about-text--leading-150 
				 
				"
              >
                Dwellics is a rapidly growing team, headquartered in Pittsburgh,
                with employees throughout the U.S. Our team is focused on
                changing the way people choose their education and are looking
                for innovative and fresh perspectives to join our mission. Your
                ideas and work will make an immediate impact on our company and
                millions of users.
              </div>

              <div className="about-link-wrap ">
                <a className="about-link" href="#">
                  Learn More About Working At Dwellics{" "}
                  <div className="svg-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.4 5.4c-.7.7-.3 1.6.3 2.1l5.5 5.5-5.5 5.5c-.5.5-.9 1.4-.2 2.1.7.7 1.6.3 2.1-.2L17 13 9.6 5.6c-.6-.5-1.4-.9-2.2-.2z" />
                    </svg>
                  </div>{" "}
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="team-slideshow-wrapper">
          <div className="icon-shape icon-shape--left-arrow" data-slider-left>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="arrow_left"
                className="st0"
                d="M16.6 20.6c.7-.7.3-1.6-.2-2.1L10.8 13l5.5-5.5c.5-.5.9-1.4.2-2.1-.7-.7-1.6-.3-2.1.2L7.1 13l7.4 7.4c.5.5 1.3.9 2.1.2z"
              />
            </svg>
          </div>

          <div className="icon-shape icon-shape--right-arrow" data-slider-right>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="arrow_right"
                className="st0"
                d="M7.4 5.4c-.7.7-.3 1.6.3 2.1l5.5 5.5-5.5 5.5c-.5.5-.9 1.4-.2 2.1.7.7 1.6.3 2.1-.2L17 13 9.6 5.6c-.6-.5-1.4-.9-2.2-.2z"
              />
            </svg>
          </div>

          <div className="team-slideshow-window" data-slider-window>
            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2019/08/IMG_3657_1.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>

            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2018/06/slideshow-nbc.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>

            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2018/06/slideshow-soccer.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>

            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2018/06/slideshow-vto.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>

            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2018/06/slideshow-tech.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>

            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2018/06/slideshow-stump.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>

            <div className="team-slideshow-slides">
              <img
                className="team-slideshow-slide"
                src="https://www.niche.com/about/wp-content/uploads/2019/08/niche-arcade.jpg"
                alt=""
              />
              <img className="team-slideshow-slide " src="" alt="" />
            </div>
          </div>
        </section>

        <section className="about-layout about-layout--p-t-90 about-layout--p-b-80 about-jobs-cta about-background--green05">
          <div
            className="about-text about-text--22-26 about-text--pad-b-1 about-layout--max-w-500 
	about-text--center"
          >
            Your ideas and work will make an immediate impact on our company and
            millions of users.
          </div>

          <div className="about-button-center about-text--pad-t-4">
            <a href="#">
              <div className="button button-small button-wide button-green">
                See Open Jobs
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default aboutDwellics;
