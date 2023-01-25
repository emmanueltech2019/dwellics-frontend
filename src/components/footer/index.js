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
            {/* <a alt="Niche" className="footer-logo" href="/">
              <img
                src={Logo}
                className="ab top-0 left-0"
                style={{ width: "120px", height: "50px" }}
                alt={""}
              />
            </a> */}
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
                  Niche For Schools
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Niche For Colleges
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
                  Resource Center
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Contact Niche
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Data
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Careers
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Partnerships
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Press
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Do Not Sell My Personal Information
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  User Agreement
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Web Accessibility
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="#"
                  rel="noopener"
                  target="_self"
                >
                  Cookie Policy
                </a>
              </li>
              <li className="footer-static-list__item">
                <a
                  className="footer-static-list__link"
                  href="/sitemap/"
                  rel="noopener"
                  target="_self"
                >
                  Sitemap
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
              Discover the schools, companies, and neighborhoods that are right
              for you.
            </p>
            <ul className="footer-vertical-links">
              <li className="footer-vertical-links__item">
                <a href="#" target="_self">
                Homebuyers data
                </a>
              </li>
              <li className="footer-vertical-links__item">
                <a href="#" target="_self">
                Places to live data
                </a>
              </li>
              <li className="footer-vertical-links__item">
                <a href="#" target="_self">
                Mortgage leads
                </a>
              </li>
              <li className="footer-vertical-links__item">
                <a href="#" target="_self">
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
                    <a href="#">College Rankings</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Christian Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Liberal Arts Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Value Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Hardest Colleges to Get Into</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Top Party Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Top Public Universities</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">College Scholarships</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">California Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Florida Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Ohio Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">New York Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Pennsylvania Colleges</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Texas Colleges</a>
                  </li>
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
              <section className="footer-link-collection-list">
                <ul>
                  <li className="footer-link-collection-list__item">
                    <a href="#">K-12 School Rankings</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Elementary Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Middle Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best High Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Private High Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Charter High Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best Magnet High Schools</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in California</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in Michigan</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in New Jersey</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in New York</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in Pennsylvania</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in Texas</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Best School Districts in Virginia</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in Pittsburgh</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in Seattle</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Companies in Texas</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Tech Companies</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Financial Services Companies</a>
                  </li>
                </ul>
              </section>
              <section className="footer-link-collection-list">
                <ul>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Atlanta Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Austin Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Baltimore Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Boston Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Chicago Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Denver Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Houston Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Los Angeles Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Miami Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">New York City Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Philadelphia Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Pittsburgh Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">San Francisco Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Seattle Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Washington, D.C. Neighborhoods</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Healthcare Organizations</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Internet Companies</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Energy Companies</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Retail Companies</a>
                  </li>
                  <li className="footer-link-collection-list__item">
                    <a href="#">Insurance Companies</a>
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
