import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.jpeg";
import MegaMenu from "@/components/navbar/megamenu";
function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  let [isSearching, setIsSearching] = useState(false);

  let navSwitch = () => {
    setIsOpen(!isOpen);
  };
  let searchSwitch = ()=>{
    setIsSearching(!isSearching)
  }
  return (
    <>
      <div>
        <header className="global-nav-container">
          <div>
            <section className="global-nav__primary global-nav__primary--collapsed">
              <div className="global-nav__primary-inner">
                <div
                  className="global-nav__hamburger"
                  role="button"
                  tabindex="0"
                  aria-expanded="false"
                  aria-label="Open search bars and mega menu"
                  onClick={() => navSwitch(!isOpen)}
                >
                  <span className="global-nav__hamburger-line"></span>
                </div>
                <div className="global-nav__logo">
                  <a
                    title="Dwellics"
                    href="#"
                    data-after-sherlock="true"
                    aria-label="Dwellics Home"
                  >
                    <Image src={Logo} alt="" className="h-10" />
                  </a>
                </div>
                <div className="global-nav__primary--collapsed-inner">
                  <div className="global-links-wrap global-links--primary">
                    <nav className="global-links" aria-label="Banner Links">
                      <ul className="global-links__list">
                        <li className="global-links__item">
                          <a href="#" role="button">
                            Homebuyers data
                          </a>
                        </li>
                        <li className="global-links__item">
                          <a href="#" role="button">
                            Places to live data
                          </a>
                        </li>
                        <li className="global-links__item">
                          <a href="#" role="button">
                             Mortgage Leads 
                          </a>
                        </li>
                        <li className="global-links__item">
                          <a href="#" role="button">
                            Market Insights
                          </a>
                        </li>
                        <li className="global-links__item">
                          <a href="#" role="button">
                            Places to Live
                          </a>
                        </li>
                        <li className="global-links__item">
                          <a href="#" role="button">
                            Places to Work
                          </a>
                        </li>
                      </ul>
                      <button
                        className="button button--bare global-links__meatball-icon"
                        aria-expanded="false"
                      >
                        <div
                          className="niche-icon-wrap"
                          onClick={() => navSwitch(!isOpen)}
                        >
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
                      onClick={()=>searchSwitch()}
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
                    <button
                      className="button button-small button-darker global-nav__account-signup"
                      data-modal-target="authentication-modal"
                      data-modal-toggle="authentication-modal"
                    >
                      Sign&nbsp;Up
                    </button>
                    {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            {isOpen == false ? (
              ""
            ) : (
              <div className="mega-menu-wrapper p-10 hidden md:block">
                <nav className="p-10">
                  <div className="flex">
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href="#"
                          aria-label="Homebuyers data Mortgage Leads  Group - Click to collapse"
                        >
                          Homebuyers data
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
                              id="arrow_up_Homebuyers data Mortgage Leads "
                              className="st0"
                              d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <li className="mega-menu__item">
                        <a href="#">Mortgage Leads Search</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">District Search</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Mortgage Leads Rankings</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Mortgage Leads  Near You</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Homebuyers data Quiz</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Compare Mortgage Leads </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Review Your Mortgage Leads</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Parent Resources</a>
                      </li>
                    </ul>
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href="#"
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
                        <a href="#">home loan Search</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Online home loan Search</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">home loan Rankings</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">home loan Quiz</a>
                      </li>


                      <li className="mega-menu__item">
                        <a href="#">Home Buyer Leads  Loans</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Admissions Calculator</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Compare Places to live data</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Review Your home loan</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">home loan Guidance</a>
                      </li>
                    </ul>
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href="#"
                          aria-label=" Mortgage Leads  Group - Click to collapse"
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
                              id="arrow_up_ Mortgage Leads "
                              className="st0"
                              d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <li className="mega-menu__item">
                        <a href="#"> Mortgage Leads Search</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#"> Programs</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">$1,000  Survey Scholarship</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Review Your  Mortgage Leads</a>
                      </li>
                    </ul>
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href="#"
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
                        <a href="#">Find Places to Live</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Rankings</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Review Your Area</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Find Places to Work</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Review Your Company</a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">Home Buying Tips</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="mega-menu__niche-links-wrap flex-none">
                    <li className="mega-menu__niche-link">
                      <a href="#">About Dwellics</a>
                    </li>
                    <li className="mega-menu__niche-link">
                      <a href="#">Dwellics Data</a>
                    </li>
                    <li className="mega-menu__niche-link">
                      <a href="#">Careers</a>
                    </li>
                    <li className="mega-menu__niche-link">
                      <a href="#">Blog</a>
                    </li>
                    <li className="mega-menu__niche-link">
                      <a href="#">Claim Your Mortgage Leads</a>
                    </li>
                    <li className="mega-menu__niche-link">
                      <a href="#">Contact Dwellics</a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}

            {isOpen == false ? (
              ""
            ) : (
              <div className=" md:hidden block fixed top-0 left-0 h-screen z-[10000]">
                <div className="mega-menu-wrapper">
                  <nav
                    className="mega-menu"
                    tabindex="0"
                    aria-label="Mega Menu"
                  >
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href="#"
                          aria-label="K-12 Mortgage Leads  Group - Click to collapse"
                        >
                          K-12 Mortgage Leads 
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
                              id="arrow_up_K-12 Mortgage Leads "
                              className="st0"
                              d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <li className="mega-menu__item">
                        <a href="">
                          Mortgage Leads Search
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          District Search
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Mortgage Leads Rankings
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Mortgage Leads  Near You
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          K-12 Quiz
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Compare Mortgage Leads 
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Review Your Mortgage Leads
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Parent Resources
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href=""
                          aria-label="Colleges Group - Click to collapse"
                        >
                          home loan
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
                        <a href="">
                        home loan Search
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Online home loan Search
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                        home loan Rankings
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                        home loan Quiz
                        </a>
                      </li>

                      <li className="mega-menu__item">
                        <a href="">
                          Home Buyer Leads  Loans
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Admissions Calculator
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Compare home loan
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                          Review Your home loan
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="">
                        home loan Guidance
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href=""
                          aria-label=" Mortgage Leads  Group - Click to collapse"
                        >
                           Mortgage Leads 
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
                              id="arrow_up_ Mortgage Leads "
                              className="st0"
                              d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <li className="mega-menu__item">
                        <a href="#">
                           Mortgage Leads Search
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                           Programs
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          $1,000  Survey Scholarship
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Review Your  Mortgage Leads
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-menu__list mega-menu__list--expanded">
                      <div className="mega-menu__category-label">
                        <a
                          className="mega-menu-category-label__link"
                          href="#"
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
                        <a href="#">
                          Find Places to Live
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Rankings
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Review Your Area
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Find Places to Work
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Review Your Company
                        </a>
                      </li>
                      <li className="mega-menu__item">
                        <a href="#">
                          Home Buying Tips
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-menu__niche-links-wrap">
                      <li className="mega-menu__niche-link">
                        <a href="#">About Dwellics</a>
                      </li>
                      <li className="mega-menu__niche-link">
                        <a href="#">
                          Dwellics Data
                        </a>
                      </li>
                      <li className="mega-menu__niche-link">
                        <a href="">Careers</a>
                      </li>
                      <li className="mega-menu__niche-link">
                        <a href="#">
                          Blog
                        </a>
                      </li>
                      <li className="mega-menu__niche-link">
                        <a href="#">
                          Claim Your Mortgage Leads
                        </a>
                      </li>
                      <li className="mega-menu__niche-link">
                        <a href="/contact/">Contact Dwellics</a>
                      </li>
                      <li className="mega-menu__niche-link mega-menu__niche-link--wrap">
                        <div className="niche-app-icon--footer"></div>
                        <span>Download the Dwellics App</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}

            {isSearching == false ? (
              ""
            ) : (
              <div className="fixed top-0 left-0 w-screen z-[20000000000000000000000] bg-gray-400 w-screen h-screeb">
                <div className="global-nav__inputs--collapsed-dropdown global-nav__inputs--collapsed-dropdown-visible">
                  <div className="global-nav__inputs--collapsed-dropdown__inner">
                    <nav
                      className="global-nav__inputs"
                      aria-label="Search by name and location"
                    >
                      <div
                        className="global-nav__inputs-wrap"
                        aria-busy="false"
                      >
                        <div className="global-nav__inputs__sliding-backdrop"></div>
                        <div className="sherlock__container--global-nav sherlock__container--entity-input">
                          <div className="sherlock__input-wrap">
                            <input
                              aria-autocomplete="list"
                              aria-haspopup="listbox"
                              aria-describedby="sherlock__input-help--7453ef01-c114-428d-95c2-fa5b69053de6 sherlock__alerts--7453ef01-c114-428d-95c2-fa5b69053de6"
                              aria-labelledby="global-nav-entity-sherlock-label"
                              autocapitalize="off"
                              autocomplete="nope"
                              autocorrect="off"
                              className="sherlock__input"
                              data-lpignore="true"
                              data-testid="sherlock__input--entityInput"
                              id="sherlock__input--7453ef01-c114-428d-95c2-fa5b69053de6"
                              placeholder="a place ..."
                              spellcheck="false"
                              type="text"
                              value=""
                              aria-controls="sherlock-options--7453ef01-c114-428d-95c2-fa5b69053de6"
                            />
                            <div className="sherlock__overflow-gradient"></div>
                            <div className="niche-icon-wrap">

                            </div>
                          </div>
                          <fieldset
                            id="sherlock-options--7453ef01-c114-428d-95c2-fa5b69053de6"
                            className="sherlock-options sherlock-options--suggestions"
                          >
                            <legend className="visually-hidden">
                              Search Suggestions
                            </legend>
                            <div className="sherlock-option sherlock-option--recent-profile-suggestion">
                              <input
                                className="visually-hidden"
                                data-sherlock-option-selected="false"
                                id="option__1d755237-c671-478d-8020-63cc46eed935"
                                data-testid="option-0"
                                name="sherlock"
                                type="radio"
                              />
                              <label
                                className="sherlock-option__label"
                                for="option__1d755237-c671-478d-8020-63cc46eed935"
                              >
                                <div className="sherlock-option__label--primary">
                                 Healthy Environment
                                </div>
                              </label>
                            </div>
                            

                            <div className="sherlock-option sherlock-option--vertical-search-suggestion">
                              <input
                                className="visually-hidden"
                                data-sherlock-option-selected="false"
                                id="option__Places to Live"
                                data-testid="option-6"
                                name="sherlock"
                                type="radio"
                              />
                              <label
                                className="sherlock-option__label"
                                for="option__Places to Live"
                              >
                                <div className="sherlock-option__label--primary">
                                  Places to Live
                                </div>
                              </label>
                            </div>
                            <div className="sherlock-option sherlock-option--vertical-search-suggestion">
                              <input
                                className="visually-hidden"
                                data-sherlock-option-selected="false"
                                id="option__Places to Work"
                                data-testid="option-7"
                                name="sherlock"
                                type="radio"
                              />
                              <label
                                className="sherlock-option__label"
                                for="option__Places to Work"
                              >
                                <div className="sherlock-option__label--primary">
                                  Places to Work
                                </div>
                              </label>
                            </div>
                          </fieldset>
                          <div
                            className="visually-hidden"
                            id="sherlock__input-help--7453ef01-c114-428d-95c2-fa5b69053de6"
                          >
                            Provides auto-suggestions when entering text
                          </div>
                          <span
                            className="visually-hidden"
                            id="global-nav-entity-sherlock-label"
                          >
                            Find a home loan or mortgage ...
                          </span>
                        </div>
                        <div className="sherlock__container--global-nav sherlock__container--location-input">
                          <div className="sherlock__input-wrap">
                            <input
                              aria-autocomplete="list"
                              aria-haspopup="listbox"
                              aria-describedby="sherlock__input-help--7af0ffd2-692a-4b31-8dfe-e54f32f9d78c sherlock__alerts--7af0ffd2-692a-4b31-8dfe-e54f32f9d78c"
                              aria-labelledby="global-nav-location-sherlock-label"
                              autocapitalize="off"
                              autocomplete="nope"
                              autocorrect="off"
                              className="sherlock__input sherlock__input--location-name-placeholder"
                              data-lpignore="true"
                              data-testid="sherlock__input--locationInput"
                              id="sherlock__input--7af0ffd2-692a-4b31-8dfe-e54f32f9d78c"
                              placeholder="Massachusetts"
                              spellcheck="false"
                              type="text"
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
                            id="sherlock__input-help--7af0ffd2-692a-4b31-8dfe-e54f32f9d78c"
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
                    <button
                      aria-expanded="true"
                      className="button button--bare global-nav__close-search-icon"
                      aria-label="Close Searchbars"
                      onClick={()=>searchSwitch()}
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

              </div>
            )}
          </div>
        </header>
      </div>
      {/* <MegaMenu/> */}

      {/* <div  tabindex="-1" aria-hidden="true" className="fixed top-[40%] left-[20px] z-[100000000]  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <nput id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
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
