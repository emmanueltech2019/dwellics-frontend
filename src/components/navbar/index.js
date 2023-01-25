import React from "react";
import Image from "next/image"
import Logo from "@/assets/logo.jpeg"

function Navbar() {
  return (
    <>
    <div>
      <header className="global-nav-container">
        <div>
          <div className="global-nav__inputs--collapsed-dropdown">
            <div className="global-nav__inputs--collapsed-dropdown__inner">
              <button
                aria-expanded="false"
                className="button button--bare global-nav__close-search-icon"
                aria-label="Close Searchbars"
              >
                <div className="niche-icon-wrap">
                  <svg
                    className="niche-icon niche-icon--close"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 3.7l-6 6-6-6c-.6-.6-1.7-1.1-2.5-.2-.9.8-.4 1.9.2 2.5l6 6-6 6c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l6-6 6 6c.6.6 1.7 1.1 2.5.3.9-.9.4-1.9-.3-2.5l-6-6 6-6c.6-.6 1.1-1.7.3-2.5-.7-.9-1.8-.4-2.4.2z"
                      xmlns="http://www.w3.org/2000/svg"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <section className="global-nav__primary global-nav__primary--collapsed">
            <div className="global-nav__primary-inner">
              <div
                className="global-nav__hamburger"
                role="button"
                tabindex="0"
                aria-expanded="false"
                aria-label="Open search bars and mega menu"
              >
                <span className="global-nav__hamburger-line"></span>
              </div>
              <div className="global-nav__logo">
                <a
                  title="Niche"
                  href="https://www.niche.com/"
                  data-after-sherlock="true"
                  aria-label="Niche Home"
                >
                    <Image src={Logo} alt=""/>
                </a>
              </div>
              <div className="global-nav__primary--collapsed-inner">
                <div className="global-links-wrap global-links--primary">
                  <nav className="global-links" aria-label="Banner Links">
                    <ul className="global-links__list">
                      <li className="global-links__item">
                        <a
                          href="https://www.niche.com/k12/search/best-schools/s/massachusetts/"
                          role="button"
                        >
                          Homebuyers data
                        </a>
                      </li>
                      <li className="global-links__item">
                        <a
                          href="https://www.niche.com/Places to live data/search/best-Places to live data/s/massachusetts/"
                          role="button"
                        >
                          Places to live data
                        </a>
                      </li>
                      <li className="global-links__item">
                        <a
                          href="https://www.niche.com/graduate-schools/search/best-graduate-schools/s/massachusetts/"
                          role="button"
                        >
                          Graduate Schools
                        </a>
                      </li>
                      <li className="global-links__item">
                        <a
                          href="https://www.niche.com/Places to live data/scholarships/"
                          role="button"
                        >
                          Market Insights
                        </a>
                      </li>
                      <li className="global-links__item">
                        <a
                          href="https://www.niche.com/places-to-live/search/best-places-to-live/s/massachusetts/"
                          role="button"
                        >
                          Places to Live
                        </a>
                      </li>
                      <li className="global-links__item">
                        <a
                          href="https://www.niche.com/places-to-work/search/all-workplaces/s/massachusetts/"
                          role="button"
                        >
                          Places to Work
                        </a>
                      </li>
                    </ul>
                    <button
                      className="button button--bare global-links__meatball-icon"
                      aria-expanded="false"
                    >
                      <div className="niche-icon-wrap">
                        <svg
                          className="niche-icon niche-icon--meatball"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="13" r="2.5"></circle>
                            <circle cx="21.5" cy="13" r="2.5"></circle>
                            <circle cx="2.5" cy="13" r="2.5"></circle>
                          </g>
                        </svg>
                      </div>
                      <span className="visually-hidden">Mega Menu</span>
                    </button>
                  </nav>
                </div>
                <div className="global-nav__search-icon-container">
                  <button
                    aria-expanded="false"
                    className="button button--bare global-nav__search-icon"
                  >
                    <div className="niche-icon-wrap">
                      <svg
                        className="niche-icon niche-icon--search"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                      >
                        <g id="search_collapsedNavigation">
                          <path d="M13.5 2C8.8 2 5 5.8 5 10.5c0 1.8.5 3.4 1.5 4.8L2.7 19c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l3.7-3.7c1.4.9 3 1.5 4.8 1.5 4.7 0 8.5-3.8 8.5-8.5C22 5.8 18.2 2 13.5 2zm0 14.4c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="visually-hidden">Open Searchbars</span>
                  </button>
                  <div className="global-nav__divider"></div>
                </div>
              </div>
              <nav
                className="global-nav__inputs"
                aria-label="Search by name and location"
              >
                <div className="global-nav__inputs-wrap" aria-busy="false">
                  <div className="global-nav__inputs__sliding-backdrop"></div>
                  <div className="sherlock__container--global-nav sherlock__container--entity-input">
                    <div className="sherlock__input-wrap">
                      <input
                        type="text"
                        aria-autocomplete="list"
                        aria-haspopup="listbox"
                        aria-describedby="sherlock__input-help--d14355fd-cfd7-41e2-ba92-1e5a06df38f3 sherlock__alerts--d14355fd-cfd7-41e2-ba92-1e5a06df38f3"
                        aria-labelledby="global-nav-entity-sherlock-label"
                        autocapitalize="off"
                        autocomplete="nope"
                        autocorrect="off"
                        className="sherlock__input"
                        data-lpignore="true"
                        data-testid="sherlock__input--entityInput"
                        id="sherlock__input--d14355fd-cfd7-41e2-ba92-1e5a06df38f3"
                        placeholder="a college or university ..."
                        spellcheck="false"
                        value=""
                      />
                      <div className="sherlock__overflow-gradient"></div>
                      <div className="niche-icon-wrap">
                        <svg
                          className="niche-icon niche-icon--search"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-hidden="true"
                        >
                          <g id="search_">
                            <path d="M13.5 2C8.8 2 5 5.8 5 10.5c0 1.8.5 3.4 1.5 4.8L2.7 19c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l3.7-3.7c1.4.9 3 1.5 4.8 1.5 4.7 0 8.5-3.8 8.5-8.5C22 5.8 18.2 2 13.5 2zm0 14.4c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="visually-hidden"
                      id="sherlock__input-help--d14355fd-cfd7-41e2-ba92-1e5a06df38f3"
                    >
                      Provides auto-suggestions when entering text
                    </div>
                    <span
                      className="visually-hidden"
                      id="global-nav-entity-sherlock-label"
                    >
                      Find a college or university ...
                    </span>
                  </div>
                  <div className="sherlock__container--global-nav sherlock__container--location-input">
                    <div className="sherlock__input-wrap">
                      <input
                        type="text"
                        aria-autocomplete="list"
                        aria-haspopup="listbox"
                        aria-describedby="sherlock__input-help--467c05ce-5dc8-4416-9bae-e6013f98ae55 sherlock__alerts--467c05ce-5dc8-4416-9bae-e6013f98ae55"
                        aria-labelledby="global-nav-location-sherlock-label"
                        autocapitalize="off"
                        autocomplete="nope"
                        autocorrect="off"
                        className="sherlock__input sherlock__input--location-name-placeholder"
                        data-lpignore="true"
                        data-testid="sherlock__input--locationInput"
                        id="sherlock__input--467c05ce-5dc8-4416-9bae-e6013f98ae55"
                        placeholder="Massachusetts"
                        spellcheck="false"
                        value=""
                      />
                      <div className="sherlock__overflow-gradient"></div>
                      <div className="niche-icon-wrap">
                        <svg
                          className="niche-icon niche-icon--location-line"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,0.5c-4.8,0-8.6,4.1-8.6,9.1c0,6.4,6.4,12.7,6.7,13l0,0c0.7,0.6,1.3,0.9,1.9,0.9c0.6,0,1.3-0.3,1.9-0.9   c0.3-0.3,6.7-6.6,6.7-13C20.6,4.6,16.8,0.5,12,0.5z M12.3,20.9c-0.2,0.2-0.3,0.3-0.4,0.3c-0.1,0-0.2-0.1-0.4-0.3   c-0.2-0.2-6-6-6-11.3c0-3.7,2.9-6.8,6.4-6.8c3.5,0,6.4,3,6.4,6.8C18.4,15,12.4,20.8,12.3,20.9z"></path>
                            <path d="M12,4.8c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S14.5,4.8,12,4.8z M12,11.5   c-1.2,0-2.2-1-2.2-2.2S10.8,7,12,7c1.2,0,2.2,1,2.2,2.2S13.2,11.5,12,11.5z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="visually-hidden"
                      id="sherlock__input-help--467c05ce-5dc8-4416-9bae-e6013f98ae55"
                    >
                      Provides auto-suggestions when entering text
                    </div>
                    <span
                      className="visually-hidden"
                      id="global-nav-location-sherlock-label"
                    >
                      Search in a state or metro ...
                    </span>
                  </div>
                </div>
              </nav>
              <div className="global-nav__account">
                <button
                  className="global-account-panel-toggle"
                  id="global-account-panel-toggle"
                  data-logged-in="false"
                  data-after-sherlock="true"
                  aria-expanded="false"
                  aria-label="Open account navigation"
                >
                  <div className="global-nav__account__logged-in">
                    <span className="global-nav__account-icon">
                      <div className="niche-icon-wrap">
                        <svg
                          className="niche-icon niche-icon--account"
                          height=""
                          viewBox="0 0 24 24"
                          width=""
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            id="account_thick"
                            d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M6.9,18.1c0.6-1.8,1.7-2.9,3-2.7h0.4   c0.6,0,0.8-0.2,0.8-0.4c0.1-0.3-0.1-0.8-0.4-1.1c-0.8-0.8-1.3-1.8-1.3-3c0-1.6,1.1-2.7,2.6-2.7s2.6,1.2,2.6,2.7   c0,0.9-0.2,2.2-1.3,3C13,14.3,12.8,14.7,13,15c0.1,0.2,0.3,0.4,0.9,0.4h0.4c1.3-0.2,2.4,0.8,3,2.6c-1.5,1.3-3.3,2-5.3,2   C10.1,20,8.3,19.3,6.9,18.1z M18.7,16.4c-0.6-1.2-1.6-1.9-2.8-2.3c0.6-0.9,0.8-2,0.8-3.1c0-2.8-2-4.8-4.7-4.8s-4.7,2-4.7,4.8   c0,1.1,0.3,2.2,0.8,3.1C7,14.5,6,15.3,5.4,16.5C4.5,15.2,4,13.7,4,12c0-4.4,3.6-8,8-8s8,3.6,8,8C20,13.6,19.5,15.1,18.7,16.4z"
                          ></path>
                          <title>profile icon</title>
                        </svg>
                        <img
                          className="niche-icon-wrap gravatar-icon"
                          src="https://www.gravatar.com/avatar/0?s=&amp;d=blank"
                          alt="Gravatar Icon"
                        />
                      </div>
                    </span>
                    <span className="global-nav__account-username">
                      <div className="niche-icon-wrap">
                        <svg
                          className="niche-icon niche-icon--arrow-down"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          data-testid="icon-arrow-down"
                        >
                          <path
                            d="M19.6 9.4c-.7-.7-1.6-.3-2.1.2L12 15.2 6.5 9.7c-.5-.5-1.4-1-2.1-.3-.7.7-.3 1.6.2 2.1l7.4 7.4 7.4-7.4c.5-.5.9-1.3.2-2.1z"
                            xmlns="http://www.w3.org/2000/svg"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </div>
                </button>
                <div className="global-nav__account__logged-out">
                  <button
                    className="button button-small button-darker global-nav__account-login"
                    data-after-sherlock="true"
                  >
                    Log In
                  </button>
                  <button className="button button-small button-darker global-nav__account-signup" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">
                    Sign&nbsp;Up
                  </button>
                  {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}

                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <nav className="mega-menu-hidden">
            <ul className="mega-menu__list mega-menu__list--expanded">
              <div className="mega-menu__category-label">
                <a
                  className="mega-menu-category-label__link"
                  href="#"
                  aria-label="Homebuyers data Schools Group - Click to collapse"
                >
                  Homebuyers data SCHOOLS
                </a>
                <div className="mega-menu__category-label__arrow">
                  <svg
                    className="niche-icon niche-icon--arrow-up"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="icon-arrow-up"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow_up_Homebuyers data SCHOOLS"
                      className="st0"
                      d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                    ></path>
                  </svg>
                </div>
              </div>
              <li className="mega-menu__item">
                <a href="#">
                  School Search
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/k12/search/best-school-districts/s/massachusetts/">
                  District Search
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/k12/rankings/">
                  School Rankings
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/k12/schools-near-you/">
                  Schools Near You
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/about/k12-quiz/">Homebuyers data Quiz</a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/k12/compare/">Compare Schools</a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/k12/survey/">
                  Review Your School
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/blog/topics/parent-resources/?ref=megamenu">
                  Parent Resources
                </a>
              </li>
            </ul>
            <ul className="mega-menu__list mega-menu__list--expanded">
              <div className="mega-menu__category-label">
                <a
                  className="mega-menu-category-label__link"
                  href="https://www.niche.com/Places to live data/search/best-Places to live data/s/massachusetts/"
                  aria-label="Places to live data Group - Click to collapse"
                >
                  Places to live data
                </a>
                <div className="mega-menu__category-label__arrow">
                  <svg
                    className="niche-icon niche-icon--arrow-up"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="icon-arrow-up"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow_up_COLLEGES"
                      className="st0"
                      d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                    ></path>
                  </svg>
                </div>
              </div>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/search/best-Places to live data/s/massachusetts/">
                  College Search
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/search/best-online-Places to live data/">
                  Online College Search
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/rankings/">
                  College Rankings
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/college-quiz/">
                  College Quiz
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/scholarships/">
                  Scholarships
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/scholarships/no-essay-scholarship/">
                  $2,000 No Essay Scholarship
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/about/find-private-student-loans/">
                  Student Loans
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/admissions-calculator/">
                  Admissions Calculator
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/compare/">
                  Compare Places to live data
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/Places to live data/survey/">
                  Review Your College
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/blog/topics/college-guidance/?ref=megamenu">
                  College Guidance
                </a>
              </li>
            </ul>
            <ul className="mega-menu__list mega-menu__list--expanded">
              <div className="mega-menu__category-label">
                <a
                  className="mega-menu-category-label__link"
                  href="https://www.niche.com/graduate-schools/search/best-graduate-schools/s/massachusetts/"
                  aria-label="Graduate Schools Group - Click to collapse"
                >
                  Mortgage leads
                </a>
                <div className="mega-menu__category-label__arrow">
                  <svg
                    className="niche-icon niche-icon--arrow-up"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="icon-arrow-up"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow_up_GRADUATE SCHOOLS"
                      className="st0"
                      d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                    ></path>
                  </svg>
                </div>
              </div>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/graduate-schools/search/best-graduate-schools/s/massachusetts/">
                  Grad School Search
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/graduate-schools/programs/">
                  Graduate Programs
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/graduate-schools/graduate-school-survey-scholarship/">
                  $1,000 Graduate Survey Scholarship
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/graduate-schools/survey/">
                  Review Your Grad School
                </a>
              </li>
            </ul>
            <ul className="mega-menu__list mega-menu__list--expanded">
              <div className="mega-menu__category-label">
                <a
                  className="mega-menu-category-label__link"
                  href="https://www.niche.com/places-to-live/search/best-places-to-live/s/massachusetts/"
                  aria-label="Places To Live Group - Click to collapse"
                >
                  PLACES TO LIVE
                </a>
                <div className="mega-menu__category-label__arrow">
                  <svg
                    className="niche-icon niche-icon--arrow-up"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="icon-arrow-up"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow_up_PLACES TO LIVE"
                      className="st0"
                      d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                    ></path>
                  </svg>
                </div>
              </div>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/places-to-live/search/best-places-to-live/s/massachusetts/">
                  Find Places to Live
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/places-to-live/rankings/">
                  Rankings
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/places-to-live/survey/">
                  Review Your Area
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/places-to-work/search/all-workplaces/s/massachusetts/">
                  Find Places to Work
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/places-to-work/survey/">
                  Review Your Company
                </a>
              </li>
              <li className="mega-menu__item">
                <a href="https://www.niche.com/blog/topics/home-buying-tips/?ref=megamenu">
                  Home Buying Tips
                </a>
              </li>
            </ul>
            <ul className="mega-menu__niche-links-wrap">
              <li className="mega-menu__niche-link">
                <a href="https://www.niche.com/about/">About Niche</a>
              </li>
              <li className="mega-menu__niche-link">
                <a href="https://www.niche.com/about/data/">Niche Data</a>
              </li>
              <li className="mega-menu__niche-link">
                <a href="https://www.niche.com/about/team/">Careers</a>
              </li>
              <li className="mega-menu__niche-link">
                <a href="https://www.niche.com/blog/?ref=megamenu">Blog</a>
              </li>
              <li className="mega-menu__niche-link">
                <a href="https://www.niche.com/claim-your-school/">
                  Claim Your School
                </a>
              </li>
              <li className="mega-menu__niche-link">
                <a href="/contact/">Contact Niche</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>










    {/* <div  tabindex="-1" aria-hidden="true" class="fixed top-[40%] left-[20px] z-[100000000]  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <nput id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>  */}
    </>
  );
}

export default Navbar;
