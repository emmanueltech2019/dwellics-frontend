import React from "react";

function claim() {
  return (
    <>
      <div className="content" id="maincontent">
        <noscript>
          <div className="noscript">
            <span>
              Dwellics requires Javascript to work correctly. Please
              <a target="_blank" href="http://www.enable-javascript.com/" rel="noreferrer">
                turn it on
              </a>
              if you're experiencing issues.
            </span>
          </div>
        </noscript>
        <main className="claim-school">
          <section className="claim-school-intro">
            <div className="claim-school-intro__content">
              <h1 className="claim-school-intro-header">Claim Your Data</h1>
              <div className="claim-school-intro-subheader">
              Access your business profile on Dwellics
              </div>
              <section className="claim-school-form">
                <button
                  className="button button--compact claim-school-form__start-button"
                  tabindex="2"
                  aria-expanded="false"
                >
                  Start
                </button>
                <p className="claim-school-form__text">
                  Great! Please provide the following information so we can
                  verify your connection to this school and create your free
                  Niche Partner Account.
                </p>
                <div className="form__wrapper--claim-school">
                  <form
                    action="."
                    aria-labelledby="form__header"
                    aria-live="polite"
                    className="form form--claim-school"
                    method="post"
                  >
                    <div aria-label="" className="field-group__wrapper">
                      <div className="form__field-group--claim-school-org">
                        <div className="input">
                          <input
                            type="text"
                            aria-invalid="false"
                            aria-label="Your School's Name"
                            autocapitalize="sentences"
                            autocomplete="organization"
                            autocorrect="on"
                            className="textbox"
                            id="contactOrg"
                            inputmode=""
                            maxlength="255"
                            name="contact-org"
                            novalidate=""
                            pattern=".*"
                            placeholder="Enter company or business"
                            spellcheck="off"
                            tabindex="1"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div aria-label="Your Name" className="field-group__wrapper">
                      <div className="form__field-group">
                        <label className="field-group__label" for="contactFullName">
                          <span className="field-group__label__text">
                            Your Name
                          </span>
                          <small className="field-group__label__hint"></small>
                        </label>
                        <div className="input">
                          <input
                            type="text"
                            aria-invalid="false"
                            aria-label=""
                            autocapitalize="sentences"
                            autocomplete="name"
                            autocorrect="off"
                            className="textbox"
                            id="contactFullName"
                            inputmode=""
                            maxlength="255"
                            name="contact-full-name"
                            novalidate=""
                            pattern=".*"
                            placeholder=""
                            spellcheck="off"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      aria-label="Your Work Email"
                      className="field-group__wrapper"
                    >
                      <div className="form__field-group">
                        <label className="field-group__label" for="contactEmail">
                          <span className="field-group__label__text">
                            Your Work Email
                          </span>
                          <small className="field-group__label__hint"></small>
                        </label>
                        <div className="input">
                          <input
                            type="email"
                            aria-invalid="false"
                            aria-label=""
                            autocapitalize="none"
                            autocomplete="email"
                            autocorrect="off"
                            className="textbox"
                            id="contactEmail"
                            inputmode=""
                            maxlength="254"
                            name="contact-email"
                            novalidate=""
                            pattern=".*"
                            placeholder=""
                            spellcheck="off"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      aria-label="Your Work Phone"
                      className="field-group__wrapper"
                    >
                      <div className="form__field-group">
                        <label className="field-group__label" for="contactPhone">
                          <span className="field-group__label__text">
                            Your Work Phone
                          </span>
                          <small className="field-group__label__hint"></small>
                        </label>
                        <div className="input">
                          <input
                            type="tel"
                            aria-invalid="false"
                            aria-label=""
                            autocapitalize="none"
                            autocomplete="tel-national"
                            autocorrect="on"
                            className="textbox"
                            id="contactPhone"
                            inputmode=""
                            maxlength="255"
                            name="contact-phone"
                            novalidate=""
                            pattern=".*"
                            placeholder=""
                            spellcheck="off"
                            tabindex=""
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      aria-label="School Location"
                      className="field-group__wrapper"
                    >
                      <div className="form__field-group">
                        <label className="field-group__label" for="contactLocation">
                          <span className="field-group__label__text">
                            School Location
                          </span>
                          <small className="field-group__label__hint">
                            Town, State
                          </small>
                        </label>
                        <div className="input">
                          <input
                            type="text"
                            aria-invalid="false"
                            aria-label=""
                            autocapitalize="sentences"
                            autocomplete="on"
                            autocorrect="off"
                            className="textbox"
                            id="contactLocation"
                            inputmode=""
                            maxlength="255"
                            name="contact-floc"
                            novalidate=""
                            pattern=".*"
                            placeholder="Town, State"
                            spellcheck="off"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div aria-label="School Type" className="field-group__wrapper">
                      <div className="form__field-group">
                        <label
                          className="field-group__label"
                          for="contactSchoolType"
                        >
                          <span className="field-group__label__text">
                            School Type
                          </span>
                          <small className="field-group__label__hint">
                            K12, College, Graduate School, etc.
                          </small>
                        </label>
                        <div className="input">
                          <input
                            type="text"
                            aria-invalid="false"
                            aria-label=""
                            autocapitalize="sentences"
                            autocomplete="on"
                            autocorrect="off"
                            className="textbox"
                            id="contactSchoolType"
                            inputmode=""
                            maxlength="255"
                            name="contact-type"
                            novalidate=""
                            pattern=".*"
                            placeholder="K12, College, Graduate School, etc."
                            spellcheck="off"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      aria-label="Job Title At This School"
                      className="field-group__wrapper"
                    >
                      <div className="form__field-group">
                        <label className="field-group__label" for="contactRole">
                          <span className="field-group__label__text">
                            Job Title At This School
                          </span>
                          <small className="field-group__label__hint"></small>
                        </label>
                        <div className="input">
                          <input
                            type="text"
                            aria-invalid="false"
                            aria-label=""
                            autocapitalize="sentences"
                            autocomplete="organization-title"
                            autocorrect="on"
                            className="textbox"
                            id="contactRole"
                            inputmode=""
                            maxlength="255"
                            name="contact-role"
                            novalidate=""
                            pattern=".*"
                            placeholder=""
                            spellcheck="off"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      aria-label="Additional Information"
                      className="field-group__wrapper"
                    >
                      <div className="form__field-group">
                        <label className="field-group__label" for="contactMessage">
                          <span className="field-group__label__text">
                            Additional Information
                          </span>
                          <small className="field-group__label__hint">
                            Optional
                          </small>
                        </label>
                        <textarea
                          aria-label="Additional Information, Optional"
                          autocapitalize="sentences"
                          autocomplete="on"
                          autocorrect="on"
                          className="textbox--textarea"
                          id="message"
                          name="contact-message"
                          placeholder=""
                          spellcheck="off"
                          tabindex="-1"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form__submit form__submit__col-wrap">
                      <div className="form__submit__cols">
                        <button
                          className="button button--large button--wide button--mobile-full-width form__submit__btn form__submit__btn--claim-school"
                          tabindex="0"
                          type="submit"
                        >
                          Submit
                        </button>
                        <small className="form__terms">
                          By clicking or tapping "Submit," you acknowledge and
                          agree to our
                          <a
                            className="form__terms__link"
                            href="https://www.niche.com/about/privacy/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Privacy&nbsp;Policy
                          </a>
                          and
                          <a
                            className="form__terms__link"
                            href="https://www.niche.com/about/terms/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Terms&nbsp;of&nbsp;Use
                          </a>
                          .
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
              <ul className="claim-school-reasons">
                <li className="claim-school-reasons__list-item">
                  <h2 className="claim-school-reasons-header">Monitor user engagement</h2>
                  <p className="claim-school-reasons-paragraph">
                  Keep an eye on user activities on your Dwellics profile, and on Competitor profiles

                  </p>
                </li>
                <li className="claim-school-reasons__list-item">
                  <h2 className="claim-school-reasons-header">Keep your profile fresh</h2>
                  <p className="claim-school-reasons-paragraph">
                  Update your Dwellics profile consistently for fresh data

                  </p>
                </li>
                <li className="claim-school-reasons__list-item">
                  <h2 className="claim-school-reasons-header">
                  Go Premium

                  </h2>
                  <p className="claim-school-reasons-paragraph">
                  Exhibit your outstanding business profile to gain more positive user actions like visits, clicks and apply. 
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="claim-school-footer">
            <h2 className="claim-school-footer__heading">
            Dwellics is a recognized and trusted site for selecting the best homes and mortgages
            </h2>
            <ul className="claim-school-footer-facts">
              <li className="claim-school-footer-facts__item">
                <p className="claim-school-footer-fact">
                  <em className="claim-school-footer-fact__emphasis">1 in 3</em>
                  <span>
                  home buyers successfully use Dwellics to purchase homes and discover home finance 
                  </span>
                </p>
              </li>
              <li className="claim-school-footer-facts__item">
                <p className="claim-school-footer-fact">
                  <em className="claim-school-footer-fact__emphasis">1,000,000+</em>
                  <span>
                  visits from home buyers and residents 
                  </span>
                </p>
              </li>
              <li className="claim-school-footer-facts__item">
                <p className="claim-school-footer-fact">
                  <em className="claim-school-footer-fact__emphasis">2-3x</em>
                  <span>
                  engagement boost following premium upgrade
                  </span>
                </p>
              </li>
            </ul>
            <button className="button button--large">Get Started</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default claim;
