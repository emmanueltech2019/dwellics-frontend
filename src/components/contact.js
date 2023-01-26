import React from "react";

function contact() {
  return (
    <>
      <div className="content" id="maincontent">
        <noscript>
          <div className="noscript">
            <span>
              Dwellics requires Javascript to work correctly. Please
              <a target="_blank" href="http://www.enable-javascript.com/" rel="noreferrer" >
                turn it on
              </a>
              if you're experiencing issues.
            </span>
          </div>
        </noscript>
        <main className="contact-form">
          <header className="contact-form__header">
            <h1 className="header--1">Contact Dwellics</h1>
            <p className="contact-form__header__info">
              We'd love to hear from you. Tell us a little about yourself and
              what type of question you have.
            </p>
          </header>
          <div className="form__wrapper--contact">
            <form
              action="."
              aria-labelledby="form__header"
              aria-live="polite"
              className="form form--contact"
              method="post"
            >
              <div aria-label="" className="field-group__wrapper">
                <div className="field-group--contact-picker">
                  <div className="form__field-group">
                    <label className="field-group__label">
                      <span aria-hidden="true">I am a ...</span>
                      <span
                        className="visually-hidden"
                        for="contact-picker-group--userType"
                      >
                        What kind of Dwellics user are you? Choose one of the
                        following so that we can provide the most appropriate
                        contact form
                      </span>
                    </label>
                    <section className="form__field-group--picker">
                      <div className="picker-list__wrapper" id="contactUser">
                        <label className="field-group__label" for="contactUser">
                          <span className="field-group__label__text"></span>
                        </label>
                        <ul
                          className="picker-list"
                          id="contact-picker-group--userType"
                        >
                          <li className="picker-list-item" id="nicheUser">
                            <button
                              className="button button--bare picker-list-item__button"
                              aria-label="Niche User"
                            >
                              Dwellics User
                            </button>
                          </li>
                          <li className="picker-list-item" id="schoolRep">
                            <button
                              className="button button--bare picker-list-item__button"
                              aria-label="School Representative"
                            >
                              School Representative
                            </button>
                          </li>
                          <li className="picker-list-item" id="businessPartner">
                            <button
                              className="button button--bare picker-list-item__button"
                              aria-label="Business Partner"
                            >
                              Business Partner
                            </button>
                          </li>
                          <li className="picker-list-item" id="press">
                            <button
                              className="button button--bare picker-list-item__button"
                              aria-label="Member of Press"
                            >
                              Member of Press
                            </button>
                          </li>
                          <li className="picker-list-item" id="companyRep">
                            <button
                              className="button button--bare picker-list-item__button"
                              aria-label="Company Owner or Representative"
                            >
                              Company Owner or Representative
                            </button>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div aria-label="Name *" className="field-group__wrapper">
                <div className="form__field-group--contact">
                  <label className="field-group__label" for="contactFullName">
                    <span className="field-group__label__text">Name *</span>
                    <small className="field-group__label__hint"></small>
                  </label>
                  <div className="input">
                    <input
                      type="text"
                      aria-invalid="false"
                      aria-label="Name; required"
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
                      tabindex=""
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div aria-label="Email *" className="field-group__wrapper">
                <div className="form__field-group--contact">
                  <label className="field-group__label" for="contactEmail">
                    <span className="field-group__label__text">Email *</span>
                    <small className="field-group__label__hint"></small>
                  </label>
                  <div className="input">
                    <input
                      type="text"
                      aria-invalid="false"
                      aria-label="Email; required"
                      autocapitalize="none"
                      autocomplete="email"
                      autocorrect="off"
                      className="textbox"
                      id="contactEmail"
                      inputmode="email"
                      maxlength="254"
                      name="contact-email"
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
              <div aria-label="Location *" className="field-group__wrapper">
                <div className="field-group--opt-sherlock">
                  <fieldset className="form__field-group">
                    <legend className="field-group__label" id="contactLocation">
                      Location *
                    </legend>
                    <div className="optional-sherlock">
                      <div className="sherlock__container--contact-location">
                        <p
                          className="visually-hidden"
                          id="form-sherlock__label"
                        >
                          Location; required;
                        </p>
                        <div className="sherlock__input-wrap">
                          <input
                            type="text"
                            aria-autocomplete="list"
                            aria-haspopup="listbox"
                            aria-describedby="sherlock__input-help--e352b1e2-c898-4553-84c3-d28e020ad426 sherlock__alerts--e352b1e2-c898-4553-84c3-d28e020ad426"
                            aria-labelledby="form-sherlock__label"
                            autocapitalize="off"
                            autocomplete="nope"
                            autocorrect="off"
                            className="sherlock__input"
                            data-lpignore="true"
                            data-testid="sherlock__input--contact-location"
                            id="sherlock__input--e352b1e2-c898-4553-84c3-d28e020ad426"
                            placeholder="Enter your location ..."
                            spellcheck="false"
                            value=""
                          />
                          <div className="sherlock__overflow-gradient"></div>
                        </div>
                        <div
                          className="visually-hidden"
                          id="sherlock__input-help--e352b1e2-c898-4553-84c3-d28e020ad426"
                        >
                          Provides auto-suggestions when entering text
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        id="binary-input-group"
                        className="field-group--binary"
                      >
                        <div className="field-group-v1 field-group--checkbox">
                          <input
                            type="checkbox"
                            aria-label="My location isn't listed"
                            className="checkbox"
                            id="locationNotListed"
                            name="contact-loc-not-listed"
                            value=""
                          />
                          <label
                            className="field-group__label field-group__label--checkbox"
                            for="locationNotListed"
                          >
                            My location isn't listed
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div aria-label="Message *" className="field-group__wrapper">
                <div className="form__field-group--contact">
                  <label className="field-group__label" for="contactMessage">
                    <span className="field-group__label__text--wrap">
                      Message *
                    </span>
                    <small className="field-group__label__hint"></small>
                  </label>
                  <textarea
                    aria-label="Message; required"
                    autocapitalize="sentences"
                    autocomplete="on"
                    autocorrect="on"
                    className="textbox--textarea"
                    id="message"
                    name="contact-message"
                    placeholder=""
                    spellcheck="off"
                    tabindex=""
                  ></textarea>
                </div>
              </div>
              <div className="form__submit">
                <button
                  className="button button--large button--wide button--mobile-full-width form__submit__btn form__submit__btn--contact"
                  tabindex="0"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default contact;
