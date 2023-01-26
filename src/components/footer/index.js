import React from "react";
import Logo from "@/assets/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
function footer() {
  return (
    <>
      <footer role="contentinfo" aria-label="Footer" className="footer">
        <div className="footer__container relative top-0 left-0">
          <div className="footer-static-nav-container">

            <ul className="footer-static-list" aria-label="about Niche">

              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  About Us
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Data Sources
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Blog
                </a>
              </li>
              
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Contact Us
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  FAQ
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Personalized Ranks
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Compare Cities
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Compare Climate
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Cost of Living Calculator
                </a>
              </li>
            </ul>
            <ul className="footer-social-buttons">
              <li>
                <a
                  className="footer-social-button footer-social-button--instagram"
                  href="#"
                  rel="noreferrer"
                  target="_blank"  
                >
                  <span className="visually-hidden">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-social-button footer-social-button--facebook"
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-social-button footer-social-button--twitter"
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-social-button footer-social-button--tiktok"
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">Tiktok</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-social-button footer-social-button--discord"
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">Discord</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-social-button footer-social-button--youtube"
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">YouTube</span>
                </a>
              </li>
            </ul>
            <div className="footer-copyright">Dwellics.com Inc.</div>
          </div>
          <div className="footer-dynamic-nav-container">
            <p className="footer-tagline">
            Discover the Homebuyers data, Places to live data, and mortgage leads.
            </p>
            <ul className="footer-vertical-links" style={{fontSize:"1px !important"}}>
              <li className="footer-vertical-links__item" >
                <a href="#" target="_self" style={{fontSize:"10px !important"}}>
                Homebuyers data
                </a>
              </li>
              <li className="footer-vertical-links__item">
                <a href="#" target="_self" style={{fontSize:"10px !important"}}>
                Places to live data
                </a>
              </li>
              <li className="footer-vertical-links__item">
                <a href="#" target="_self" style={{fontSize:"10px !important"}}>
                Mortgage leads
                </a>
              </li>
              <li className="footer-vertical-links__item">
                <a href="#" target="_self" style={{fontSize:"10px !important"}}>
                Market Insights
                </a>
              </li>
            </ul>
            <div className="footer-claim-cta">
              <div className="claim-your-school-cta">
                Are you looking for a house or loan?
                <a
                  className="claim-your-school-cta__link"
                  href="/cleam"
                  target="_self"
                >
                  Check Here
                  <span className="icon-arrowright-thin--expansion"></span>
                </a>
              </div>
            </div>
            <div className="footer-link-collection">
              <section className="footer-link-collection-list">
                <ul>
                  <li className="footer-link-collection-list__item">
                    <a href="#">The Best Cities To Work Remote In 2023</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Places To Raise a Family In The Midwest</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Places To Raise a Family In The Northeast</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Places To Raise a Family In The South</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Places To Raise a Family In The West</a>
                  </li>
                  
               
                </ul>
              </section>
              <section className="footer-link-collection-list">
                <ul>
                <li className="footer-link-collection-list__item">
                    <a href="#">Most Affordable U.S. Cities with Outstanding Education</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Most Educated Cities In America</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Cities For Retired Singles In 2023</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Cities For Outdoor Living In 2023</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Healthiest Counties In America 2023</a>
                  </li>
                </ul>
              </section>
              <section className="footer-link-collection-list">
                <ul>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in Austin</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in Boston</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in California</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in Denver</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in New York</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;

// import React from 'react'
// import Logo from "@/assets/logo.jpeg"
// import Image from 'next/image'
// function footer() {
//   return (
//     <>
//     <div style={{margin:"100px 0 !important",height:"110vh"}}>
//         <div className='w-screen p-5 mt-10 d-block p-5'>
//             <div className='absolute top-0 mt-5 left-0 '>
//             <hr className="h-px w-screen my-8 bg-gray-200 border-0 dark:bg-gray-700" style={{color: "#5f5f5f"}}/>
//                 <Image src={Logo} className="md:w-60 w-40 absolute md:top-0 top-1 md:left-[10%] left-[31%]" alt="h"/>
//                 <p className='d-none px-5 text-center  md:pl-40 font-gray' style={{color: "#5f5f5f",fontSize: "18px",fontWeight: "400",lineHeight: "22px",textAlign: "center"}}>Discover the schools, companies, and neighborhoods that are right for you.</p>
//             </div>
//         </div>

//     </div>
//     </>
//   )
// }

// export default footer
