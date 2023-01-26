import React from "react";

function claim() {
  return (
    <>
      <div className="content" id="maincontent">
        <noscript>
          <div className="noscript">
            <span>
              Niche requires Javascript to work correctly. Please
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
              <h1 className="claim-school-intro-header">Claim Your School</h1>
              <div className="claim-school-intro-subheader">
                Get access to manage your
                school's&nbsp;profile&nbsp;on&nbsp;Niche
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
                            placeholder="Enter a school or college"
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
                  <h2 className="claim-school-reasons-header">Track Engagement</h2>
                  <p className="claim-school-reasons-paragraph">
                    See user activity for your Niche profile—plus your
                    competitors
                  </p>
                </li>
                <li className="claim-school-reasons__list-item">
                  <h2 className="claim-school-reasons-header">Update Your Data</h2>
                  <p className="claim-school-reasons-paragraph">
                    Help us keep your data as up-to-date as possible
                  </p>
                </li>
                <li className="claim-school-reasons__list-item">
                  <h2 className="claim-school-reasons-header">
                    Upgrade to Premium
                  </h2>
                  <p className="claim-school-reasons-paragraph">
                    Showcase your school and motivate next steps—apply, visit,
                    etc.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="claim-school-footer">
            <h2 className="claim-school-footer__heading">
              Niche is the #1 Website for Choosing Colleges and K-12 Schools
            </h2>
            <ul className="claim-school-footer-facts">
              <li className="claim-school-footer-facts__item">
                <p className="claim-school-footer-fact">
                  <em className="claim-school-footer-fact__emphasis">1 in 2</em>
                  <span>
                    college-bound students use Niche
                    to&nbsp;find&nbsp;their&nbsp;college
                  </span>
                </p>
              </li>
              <li className="claim-school-footer-facts__item">
                <p className="claim-school-footer-fact">
                  <em className="claim-school-footer-fact__emphasis">5</em>
                  <span>
                    million visits per month from
                    students&nbsp;and&nbsp;families
                  </span>
                </p>
              </li>
              <li className="claim-school-footer-facts__item">
                <p className="claim-school-footer-fact">
                  <em className="claim-school-footer-fact__emphasis">2-4x</em>
                  <span>
                    increase in engagement after upgrading&nbsp;to&nbsp;Premium
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
