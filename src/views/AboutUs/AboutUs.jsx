import { useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";
import "./aboutus.scss";
const AboutUs = () => {
  const showThesis = () => {
    const thesis = document.querySelector(".about-us-thesis");

    var index = 0;
    console.log(thesis);
    // var delay = setInterval(function () {
    //   if (index < navItems.length) {
    //     navLinks[index].classList.remove("show");
    //     navItems[index].classList.remove("show");
    //     index += 1;
    //   } else {
    //     clearInterval(delay);
    //   }
    // }, 150);
  };

  useEffect(() => {
    console.log("yes");
  }, []);

  return (
    <div className="about-us">
      <div className="background-about-us"></div>
      <InView triggerOnce="true">
        {({ inView, ref, entry }) => (
          <div className="about-us-thesis">
            <h1
              ref={ref}
              className={`${inView ? "" : "hide-opacity"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              Carsecondlife
            </h1>
            <h2
              ref={ref}
              className={`${inView ? "" : "hide-opacity"}`}
              style={{ transitionDelay: "0.35s" }}
            >
              Restoration driven by love, passion and extensive care
            </h2>
            <div className="about-us-thesis-columns">
              <p
                ref={ref}
                className={`${inView ? "" : "hide-opacity-position"}`}
                style={{ transitionDelay: "0.4s", marginRight: "10px" }}
              >
                Our skill and extensive experience is underpinned by passion and
                love for classic car restoration. We will not miss a detail as
                we realise even the smallest detail makes an overall difference
                to the look and feel of your car. Our experience comes from a
                variety of projects - some big, some small. Please take a look
                through our projects to see the examples of previous work and
                models of cars that we have worked on.
              </p>
              <p
                ref={ref}
                className={`${inView ? "" : "hide-opacity-position"}`}
                style={{ transitionDelay: "0.45s" }}
              >
                You can count on us to thoroughly double check every stage of
                the restoration process. We are equipped to manufacture some
                parts, which are impossible to source, providing restoration on
                a new level. We have every confidence that you will be happy
                with the quality of our work, but for ease of mind - extra
                warranty is provided.
              </p>
            </div>
            <p
              ref={ref}
              className={`${inView ? "" : "hide-opacity-position"}`}
              style={{
                transitionDelay: "0.6s",
                marginTop: "16px",
                fontSize: "22px",
              }}
            >
              Our clients can follow the restoration process by receiving
              regular updates of work done daily, weekly or monthly.
            </p>
            <div className="about-us-thesis-footer">
              <img
                ref={ref}
                className={`${inView ? "" : "hide-opacity"}`}
                style={{
                  transitionDelay: "0.9s",
                }}
                src="images/facebook-logo-1.svg"
              />

              <a
                ref={ref}
                className={`no-unde ${inView ? "" : "hide-opacity"}`}
                style={{
                  transitionDelay: "1s",
                }}
                href="/contact"
              >
                Request a callback <img src="images/right-arrow.png" />
              </a>
            </div>
          </div>
        )}
      </InView>

      <div className="about-us-biography">
        <InView threshold="0.1" triggerOnce="true">
          {({ inView, ref, entry }) => (
            <div className="about-us-biography-container">
              <img
                ref={ref}
                className={`${inView ? "" : "hide-opacity"}`}
                src="images/Roma.png"
              />

              <div className="container">
                <h3
                  ref={ref}
                  className={`${inView ? "" : "hide-opacity"}`}
                  style={{ transitionDelay: "0.3s" }}
                >
                  Who are we?
                </h3>
                <h1
                  ref={ref}
                  className={`${inView ? "" : "hide-opacity"}`}
                  style={{ transitionDelay: "0.5s" }}
                >
                  Road to classic cars...
                </h1>
                <div className="columns">
                  <p
                    ref={ref}
                    className={`${inView ? "" : "hide-opacity"}`}
                    style={{ marginRight: "50px", transitionDelay: "0.7s" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p
                    ref={ref}
                    className={`${inView ? "" : "hide-opacity"}`}
                    style={{ transitionDelay: "0.8s" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>

      <div className="about-us-strip">
        <div className="tint"></div>
        <div className="about-us-strip-container">
          <InView triggerOnce="true" delay="200">
            {({ inView, ref, entry }) => (
              <div className="container">
                <div
                  ref={ref}
                  className={`stripItem ${inView ? "" : "hide-opacity-zoom"}`}
                >
                  <h1>11</h1>Years in the business
                </div>
                <div
                  ref={ref}
                  className={`stripItem ${inView ? "" : "hide-opacity-zoom"}`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  <h1>50+</h1>Finished Projects
                </div>
              </div>
            )}
          </InView>
        </div>
      </div>
      <div className="about-us-values">
        <div className="about-us-values-content">
          <h1>Our Values</h1>
          <div className="about-us-values-content-container">
            <InView triggerOnce="true">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`values-box ${
                    inView ? "" : "hide-opacity-position"
                  }`}
                >
                  <img src="images/handshake.svg"></img>
                  <div className="values-box-text">
                    <h1>Trust</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              )}
            </InView>

            <InView triggerOnce="true" delay="500">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`values-box ${
                    inView ? "" : "hide-opacity-position"
                  }`}
                >
                  <img src="images/speech-box.svg"></img>
                  <div className="values-box-text">
                    <h1>Communication</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              )}
            </InView>

            <InView triggerOnce="true">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`values-box ${
                    inView ? "" : "hide-opacity-position"
                  }`}
                >
                  <img src="images/heart.svg"></img>
                  <div className="values-box-text">
                    <h1>Passion</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              )}
            </InView>

            <InView triggerOnce="true" delay="500">
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`values-box ${
                    inView ? "" : "hide-opacity-position"
                  }`}
                >
                  <img src="images/diamond.svg"></img>
                  <div className="values-box-text">
                    <h1>Quality</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
