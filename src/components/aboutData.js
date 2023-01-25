import React from "react";

function aboutData() {
  return (
    <div>
      <div className="content-wrapper">
        <main className="structured-container" id="maincontent">
          <div id="navSentinel" className=""></div>
          <nav className="nav" aria-label="About Niche">
            <div className="nav__inner">
              <div className="nav__title" aria-hidden="true">
                About Niche
              </div>

              <ul className="nav__primaries">
                <li className="nav__primary">
                  <a href="https://www.niche.com/about/" className="nav__label">
                    Overview
                  </a>
                </li>
                <li className="nav__primary">
                  <a
                    href="https://www.niche.com/about/data/"
                    className="nav__label nav__label--selected"
                  >
                    Our Data
                  </a>
                </li>
                <li className="nav__primary">
                  <a
                    href="https://www.niche.com/about/press/"
                    className="nav__label"
                  >
                    Press
                  </a>
                </li>
                <li className="nav__primary">
                  <a
                    href="https://www.niche.com/about/team/"
                    className="nav__label"
                  >
                    Working At Niche
                  </a>
                </li>
                <li className="nav__primary">
                  <a
                    href="https://www.niche.com/about/partnerships/"
                    className="nav__label"
                  >
                    Partnerships
                  </a>
                </li>
              </ul>

              <div className="nav__close-top" data-close-nav="">
                <div className="svg-icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 3.7l-6 6-6-6c-.6-.6-1.7-1.1-2.5-.2-.9.8-.4 1.9.2 2.5l6 6-6 6c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l6-6 6 6c.6.6 1.7 1.1 2.5.3.9-.9.4-1.9-.3-2.5l-6-6 6-6c.6-.6 1.1-1.7.3-2.5-.7-.9-1.8-.4-2.4.2z"></path>
                  </svg>
                </div>
              </div>

              <div className="nav__trigger" data-open-nav="">
                More
                <div className="svg-icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.6 9.4c-.7-.7-1.6-.3-2.1.2L12 15.2 6.5 9.7c-.5-.5-1.4-1-2.1-.3-.7.7-.3 1.6.2 2.1l7.4 7.4 7.4-7.4c.5-.5.9-1.3.2-2.1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </nav>

          <section className="about-layout-wrap about-layout--max-w-900">
            <div className="about-layout about-layout--m-t-50">
              <div className="about-text about-text--14 about-text--niche about-text--600 about-text--green02 about-text--pad-b-2">
                WHERE OUR DATA COMES FROM
              </div>

              <div className="about-text about-text--30-35 about-text--pad-b-1">
                Niche has the most comprehensive data on U.S. schools and
                neighborhoods.
              </div>

              <div className="about-text about-text--18 about-text--leading-150">
                We rigorously analyze dozens of public data sets and over 100
                million reviews and survey responses to help you understand what
                a place is really like.
              </div>
            </div>
          </section>

          <section className="about-wrap about-layout--m-t-20 about-layout--m-b-20 about-layout--p-b-0 about-wrap--max-width-900">
            <div className="about-template about-template--card about-template--less-padding">
              <div className="about-grid about-grid--two about-grid--centered-content">
                <div className="about-grid__group">
                  <img
                    className="about-data-image"
                    src="https://www.niche.com/about/wp-content/uploads/2018/03/data.png"
                    role="presentation"
                  />
                </div>

                <div className="about-grid__group about-grid__group--add-padding">
                  <div className="about-text"></div>
                  <div className="about-text about-text--25-30 about-text--pad-b-1">
                    Comprehensive Data
                  </div>
                  <div className="about-text about-text--leading-130">
                    We use the most up-to-date data available from dozens of
                    public data sources including the
                    <a href="https://www2.ed.gov/about/inits/ed/edfacts/data-files/index.html">
                      Department of Education
                    </a>
                    ,
                    <a href="https://www.census.gov/programs-surveys/acs/">
                      U.S. Census
                    </a>
                    , and <a href="https://ucr.fbi.gov/ucr">FBI</a>.
                  </div>

                  <div className="about-link-wrap">
                    <a className="about-link" href="#dataSources">
                      View All Data Sources
                      <div className="svg-icon-wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.6 9.4c-.7-.7-1.6-.3-2.1.2L12 15.2 6.5 9.7c-.5-.5-1.4-1-2.1-.3-.7.7-.3 1.6.2 2.1l7.4 7.4 7.4-7.4c.5-.5.9-1.3.2-2.1z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="about-background about-background--angle about-layout--p-t-0 about-layout--p-b-30 about-background--green05">
            <section className="about-wrap about-layout--m-t-20 about-layout--m-b-20 about-layout--p-b-0 about-wrap--max-width-900">
              <div className="about-template about-template--card about-template--less-padding">
                <div className="about-grid about-grid--two about-grid--centered-content">
                  <div className="about-grid__group about-grid__group--swap-sides">
                    <img
                      className="about-data-image"
                      src="https://www.niche.com/about/wp-content/uploads/2018/03/reviews.png"
                      role="presentation"
                    />
                  </div>

                  <div className="about-grid__group about-grid__group--add-padding">
                    <div className="about-text"></div>
                    <div className="about-text about-text--25-30 about-text--pad-b-1">
                      Real Reviews &amp; Outcomes
                    </div>
                    <div className="about-text about-text--leading-130">
                      We&apos;ve gathered over 100 million reviews and survey
                      responses from students, parents, and residents to help
                      you better understand what a school or neighborhood is
                      really like.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-wrap about-layout--m-t-20 about-layout--m-b-20 about-layout--p-b-0 about-wrap--max-width-900">
              <div className="about-template about-template--card about-template--less-padding">
                <div className="about-grid about-grid--two about-grid--centered-content">
                  <div className="about-grid__group">
                    <img
                      className="about-data-image"
                      src="https://www.niche.com/about/wp-content/uploads/2018/03/analysis-1.png"
                      role="presentation"
                    />
                  </div>

                  <div className="about-grid__group about-grid__group--add-padding">
                    <div className="about-text"></div>
                    <div className="about-text about-text--25-30 about-text--pad-b-1">
                      Rigorous Analysis
                    </div>
                    <div className="about-text about-text--leading-130">
                      Our Data Team uses advanced algorithms and statistical
                      techniques to compare, score, and connect millions of data
                      points to thoroughly analyze U.S. schools and
                      neighborhoods.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-wrap about-layout--m-t-20 about-layout--m-b-20 about-layout--p-b-0 about-wrap--max-width-900">
              <div className="about-template about-template--card about-template--less-padding">
                <div className="about-grid about-grid--two about-grid--centered-content">
                  <div className="about-grid__group about-grid__group--swap-sides">
                    <img
                      className="about-data-image"
                      src="https://www.niche.com/about/wp-content/uploads/2018/03/rankings.png"
                      role="presentation"
                    />
                  </div>

                  <div className="about-grid__group about-grid__group--add-padding">
                    <div className="about-text"></div>
                    <div className="about-text about-text--25-30 about-text--pad-b-1">
                      Rankings, Grades, and Profiles
                    </div>
                    <div className="about-text about-text--leading-130">
                      From rigorous analysis, we refine and simplify complex
                      data into comparable rankings, grades, and profiles for
                      schools and neighborhoods. See how we calculate our
                      <a href="https://www.niche.com/about/methodology/best-places-to-live/">
                        Best Places to Live
                      </a>
                      ,
                      <a href="https://www.niche.com/about/methodology/best-school-districts/">
                        K-12
                      </a>
                      , and
                      <a href="https://www.niche.com/about/methodology/best-colleges/">
                        College
                      </a>
                      rankings.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-layout-wrap about-layout--max-w-700 text-white " style={{color:"#fff !important"}}>
              <div className="about-layout about-layout--m-t-0 text-white" style={{color:"#fff !important"}}>
                <div className="about-text about-text--25-30 about-text--pad-b-1 text-white" style={{color:"#fff !important"}}>
                  Interested in Licensing our Data?
                </div>

                <div className="about-text about-text--18 about-text--leading-150 text-changw">
                  Niche has the most comprehensive data on U.S. K-12 schools,
                  colleges, and places (neighborhoods, cities, ZIP codes, etc.).
                  We offer data solutions for the education and real estate
                  industries as well as custom solutions for brands and market
                  research. Our rankings, reviews, and statistics power
                  applications, research, and media coverage of U.S. schools and
                  neighborhoods.
                </div>

                <div className="about-button-center about-text--pad-t-4">
                  <a href="https://www.niche.com/about/licensing/">
                    <div className="button button-small button-wide button-green">
                      Learn More About Data Licensing
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <section
            id="dataSources"
            className="about-wrap about-wrap--max-width-900"
          >
            <div
              className="about-template about-template--top-padding about-template--bottom-padding"
              id="data-k12"
            >
              <div className="about-text about-text--25-30 about-text--pad-b-2">
                Data Sources
              </div>

              <div className="about-data-sources-wrap about-data-sources--less-margin">
                <div className="about-text about-text--18 about-text--pad-b-2 about-text--600">
                  K-12 Schools and Districts
                </div>

                <ul className="about-data-sources">
                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www2.ed.gov/about/inits/ed/edfacts/data-files/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      US Department of Education
                    </a>
                    K12 data on graduation rates and state level test scores.
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://nces.ed.gov/surveys/pss/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Private School Universe Survey (PSS)
                    </a>
                    &nbsp;from&nbsp;National Center for Education Statistics
                    (NCES) <br />
                    <div className="about-data-source__indent">
                      Source for list of private schools and their information
                      such as enrollment figures.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://nces.ed.gov/ccd/"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Common Core Data (CCD)
                    </a>
                    &nbsp;from&nbsp;National Center for Education Statistics
                    (NCES) <br />
                    <div className="about-data-source__indent">
                      Source for list of schools and school districts and their
                      information such as enrollment figures.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://nces.ed.gov/ccd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Common Core Data (CCD) School District Finance Survey
                      (F-33)
                    </a>
                    &nbsp;from&nbsp;National Center for Education Statistics
                    (NCES) <br />
                    <div className="about-data-source__indent">
                      School district data on finance information.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://ocrdata.ed.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Civil Rights Data Collection
                    </a>
                    <br />
                    <div className="about-data-source__indent">
                      K12 data on AP/IB classes, disciplinary actions,
                      athletics, etc.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://nces.ed.gov/surveys/sdds/sabs/#Datasets"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      School Attendance Boundary Survey (SABS)
                    </a>
                    &nbsp;from&nbsp;National Center for Education Statistics
                    (NCES) <br />
                    <div className="about-data-source__indent">
                      Source for school boundaries.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.niche.com/k12/survey/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Niche K-12 Student and Parent Surveys
                    </a>
                    <br />
                    <div className="about-data-source__indent">
                      Survey administered to millions of parents, high school
                      students, and recent alumni&nbsp;on Niche.com.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.niche.com/k12/survey/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Niche K-12 Student and Parent Surveys
                    </a>
                    &nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      Survey administered to millions of parents, high school
                      students, and recent alumni on Niche.com.
                    </div>
                    <div className="about-data-source__cta about-data-source__cta--green">
                      <div className="about-data-source__cta-icon about-data-source__cta-icon--green">
                        <div className="svg-icon-wrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm1.14 15.88a.76.76 0 0 1-.36.37 1 1 0 0 1-.55.1c-.35 0-.77-.57-.83-.69L10.62 14h-4l-.77 1.69c-.1.19-.52.62-.83.62a1 1 0 0 1-.55-.1.76.76 0 0 1-.36-.37.66.66 0 0 1 0-.61L7.88 7a.81.81 0 0 1 .69-.4.68.68 0 0 1 .69.4l3.88 8.29a.64.64 0 0 1 0 .59zm6.73-3h-2.1v2a.9.9 0 0 1-1.79 0v-2.1h-1.87c-.46 0-.57-.3-.67-.56v-.15a.66.66 0 0 1 0-.64.54.54 0 0 1 .47-.21H16V9.15a.87.87 0 0 1 .82-.89.94.94 0 0 1 .9.89v2.1h2.09a.94.94 0 0 1 .89.74v.08a.82.82 0 0 1-.83.82z"></path>
                            <path d="M7.26 12.41h2.61l-1.3-3.17-1.31 3.17z"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="about-data-source__cta-text">
                        <strong>
                          <a
                            className="about-link"
                            href="https://www.niche.com/k12/survey/"
                          >
                            Niche&apos;s School Survey Sweepstakes
                          </a>
                        </strong>
                        helps others find the area that&apos;s right for them.
                      </div>
                    </div>
                  </li>

                  <li className="about-data-source" id="data-college">
                    Niche K-12 Data Update through Niche Partner Accounts&nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      A Niche Partner Account is administered to school
                      representatives giving them access to add or update data
                      related to their school.
                    </div>
                    <div className="about-data-source__cta about-data-source__cta--blue">
                      <div className="about-data-source__cta-icon about-data-source__cta-icon--blue">
                        <div className="svg-icon-wrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm5.92 10.29l-7.26 7.32-4.27-4.28a1.42 1.42 0 0 1-.16-2.12 1.44 1.44 0 0 1 2.12.16l2.31 2.31L16 8.33a1.39 1.39 0 1 1 1.93 2z"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="about-data-source__cta-text">
                        <a
                          className="about-link"
                          href="https://www.niche.com/claim-your-school/"
                        >
                          Claim Your School{" "}
                        </a>
                        to get access to manage your profile and update your
                        data.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="about-data-sources-wrap">
                <div className="about-text about-text--18 about-text--pad-b-2 about-text--600">
                  Colleges and Graduate Schools
                </div>

                <ul className="about-data-sources">
                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://nces.ed.gov/ipeds/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Integrated Postsecondary Education Data System (IPEDS)
                    </a>
                    &nbsp;from&nbsp;National Center for Education Statistics
                    (NCES) <br />
                    <div className="about-data-source__indent">
                      Source for list of accredited colleges, majors and their
                      information, such as enrollment and tuition.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www2.ed.gov/about/offices/list/ope/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Office of Post-Secondary Education (OPE)
                    </a>
                    from&nbsp;US Department of Education <br />
                    <div className="about-data-source__indent">
                      College data on athletics, campus crime and loan default
                      information.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://mup.asu.edu/University-Data"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Center for Measuring University Performance
                    </a>
                    <br />
                    <div className="about-data-source__indent">
                      College data on faculty awards and student awards.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://collegescorecard.ed.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      College Scorecard Data
                    </a>
                    &nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      Data on post-graduate earnings from the U.S. Department of
                      Education.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.brookings.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Brookings Institute
                    </a>
                    <br />
                    <div className="about-data-source__indent">
                      College data on value-added for attending a particular
                      college.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://nsf.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      National Science Foundation
                    </a>
                    &nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      Data on college expenditures by department.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.niche.com/colleges/survey/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Niche College Student Survey
                    </a>
                    &nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      Survey administered to millions of current students and
                      recent alumni on Niche.com.
                    </div>
                    <div className="about-data-source__cta about-data-source__cta--green">
                      <div className="about-data-source__cta-icon about-data-source__cta-icon--green">
                        <div className="svg-icon-wrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm1.14 15.88a.76.76 0 0 1-.36.37 1 1 0 0 1-.55.1c-.35 0-.77-.57-.83-.69L10.62 14h-4l-.77 1.69c-.1.19-.52.62-.83.62a1 1 0 0 1-.55-.1.76.76 0 0 1-.36-.37.66.66 0 0 1 0-.61L7.88 7a.81.81 0 0 1 .69-.4.68.68 0 0 1 .69.4l3.88 8.29a.64.64 0 0 1 0 .59zm6.73-3h-2.1v2a.9.9 0 0 1-1.79 0v-2.1h-1.87c-.46 0-.57-.3-.67-.56v-.15a.66.66 0 0 1 0-.64.54.54 0 0 1 .47-.21H16V9.15a.87.87 0 0 1 .82-.89.94.94 0 0 1 .9.89v2.1h2.09a.94.94 0 0 1 .89.74v.08a.82.82 0 0 1-.83.82z"></path>
                            <path d="M7.26 12.41h2.61l-1.3-3.17-1.31 3.17z"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="about-data-source__cta-text">
                        <strong>
                          <a
                            className="about-link"
                            href="https://www.niche.com/colleges/survey/"
                          >
                            Niche&apos;s College Student Survey
                          </a>
                        </strong>
                        helps others find the college that&apos;s right for them.
                      </div>
                    </div>
                  </li>

                  <li className="about-data-source" id="data-places-to-live">
                    Niche College Data Update through Niche Partner
                    Account&nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      A Niche Partner Account is administered to college
                      representatives giving them access to add or update data
                      related to their school.
                    </div>
                    <div className="about-data-source__cta about-data-source__cta--blue">
                      <div className="about-data-source__cta-icon about-data-source__cta-icon--blue">
                        <div className="svg-icon-wrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm5.92 10.29l-7.26 7.32-4.27-4.28a1.42 1.42 0 0 1-.16-2.12 1.44 1.44 0 0 1 2.12.16l2.31 2.31L16 8.33a1.39 1.39 0 1 1 1.93 2z"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="about-data-source__cta-text">
                        <a
                          className="about-link"
                          href="https://www.niche.com/claim-your-school/"
                        >
                          Claim Your School{" "}
                        </a>
                        to get access to manage your profile and update your
                        data.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="about-data-sources-wrap">
                <div
                  className="about-text about-text--18 about-text--pad-b-2 about-text--600"
                  id="data-places-to-live"
                >
                  Places to Live
                </div>

                <ul className="about-data-sources">
                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.census.gov/acs/www/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      American Community Survey (ACS)
                    </a>
                    from&nbsp;US Census Bureau <br />
                    <div className="about-data-source__indent">
                      Source for local information such as population, home
                      value, income levels.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.fbi.gov/about-us/cjis/ucr/ucr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Uniformed Crime Report
                    </a>
                    from&nbsp;Federal Bureau of Investigation (FBI) <br />
                    <div className="about-data-source__indent">
                      Source for crime statistics.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.ncdc.noaa.gov/data-access/land-based-station-data/land-based-datasets/climate-normals/1981-2010-normals-data"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      National Climatic Data Center (NCDC)
                    </a>
                    from&nbsp;National Oceanic and Atmospheric Administration
                    (NOAA) <br />
                    <div className="about-data-source__indent">
                      Source for weather information.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.census.gov/programs-surveys/geography.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Topologically Integrated Geographic Encoding and
                      Referencing (TIGER)
                    </a>
                    from&nbsp;US Census Bureau <br />
                    <div className="about-data-source__indent">
                      Source for list of areas and boundaries.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.census.gov/programs-surveys/cbp/data.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      County Business Patterns
                    </a>
                    from&nbsp;US Census Bureau
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.census.gov/programs-surveys/cbp/data.html"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      ZIP Code Business Patterns
                    </a>
                    from&nbsp;US Census Bureau
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.ers.usda.gov/data-products/food-environment-atlas.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Food Environment Atlas
                    </a>
                    from&nbsp;US Department of Agriculture
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.volunteeringinamerica.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Volunteering and Civic Life in America
                    </a>
                    from Corporation for National &amp; Community Service
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.irs.gov/Charities-&amp;-Non-Profits/Exempt-Organizations-Business-Master-File-Extract-EO-BMF"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Exempt Organizations Business Master File
                    </a>
                    from&nbsp;IRS
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="https://www.niche.com/about/urban-neighborhood-data-disclaimers-and-sources/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Urban Neighborhood Boundaries and Statistics
                    </a>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://factle.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Factle
                    </a>
                    <br />
                    <div className="about-data-source__indent">
                      Secondary source for neighborhood boundaries.
                    </div>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="http://www.openstreetmap.org/"
                    >
                      OpenStreetMap
                    </a>
                  </li>

                  <li className="about-data-source">
                    <a
                      className="about-link"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Niche Local Survey{" "}
                    </a>
                    &nbsp;
                    <br />
                    <div className="about-data-source__indent">
                      Survey administered to millions of people living in
                      neighborhoods across the U.S. on Niche.com
                    </div>
                    <div className="about-data-source__cta about-data-source__cta--green">
                      <div className="about-data-source__cta-icon about-data-source__cta-icon--green">
                        <div className="svg-icon-wrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm1.14 15.88a.76.76 0 0 1-.36.37 1 1 0 0 1-.55.1c-.35 0-.77-.57-.83-.69L10.62 14h-4l-.77 1.69c-.1.19-.52.62-.83.62a1 1 0 0 1-.55-.1.76.76 0 0 1-.36-.37.66.66 0 0 1 0-.61L7.88 7a.81.81 0 0 1 .69-.4.68.68 0 0 1 .69.4l3.88 8.29a.64.64 0 0 1 0 .59zm6.73-3h-2.1v2a.9.9 0 0 1-1.79 0v-2.1h-1.87c-.46 0-.57-.3-.67-.56v-.15a.66.66 0 0 1 0-.64.54.54 0 0 1 .47-.21H16V9.15a.87.87 0 0 1 .82-.89.94.94 0 0 1 .9.89v2.1h2.09a.94.94 0 0 1 .89.74v.08a.82.82 0 0 1-.83.82z"></path>
                            <path d="M7.26 12.41h2.61l-1.3-3.17-1.31 3.17z"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="about-data-source__cta-text">
                        <strong>
                          <a className="about-link" href="#">
                            Niche&apos;s Local Survey
                          </a>
                        </strong>
                        helps others find the area that&apos;s right for them.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="about-background about-layout--p-t-30 about-layout--p-b-30 about-background--green05 text-white">
            <section className="about-layout-wrap about-layout--max-w-900">
              <div className="about-layout about-layout--m-t-0">
                <div className="about-text about-text--22-26 about-text--pad-b-1 about-layout--max-w-500 about-text--center">
                  Questions About&nbsp;our&nbsp;Data?
                </div>

                <div className="about-text about-text--18 about-text--leading-150 about-text--center">
                  For more information about&nbsp;our&nbsp;data
                </div>

                <div className="about-button-center about-text--pad-t-4">
                  <a href="#">
                    <div className="button button-small button-wide button-green">
                      Contact Us
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default aboutData;
