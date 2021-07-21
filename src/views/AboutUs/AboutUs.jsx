import { useInView } from "react-intersection-observer";
import "./aboutus.scss";
const AboutUs = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true, delay: 700 });
  return (
    <div className="about-us">
      <div className="background-about-us"></div>
      <div className="about-us-thesis">
        <h1>Carsecondlife</h1>
        <h2>Restoration driven by love, passion and extensive care</h2>
        <div className="about-us-thesis-columns">
          <p style={{ marginRight: "10px" }}>
            Our skill and extensive experience is underpinned by passion and
            love for classic car restoration. We will not miss a detail as we
            realise even the smallest detail makes an overall difference to the
            look and feel of your car. Our experience comes from a variety of
            projects - some big, some small. Please take a look through our
            projects to see the examples of previous work and models of cars
            that we have worked on.
          </p>
          <p>
            You can count on us to thoroughly double check every stage of the
            restoration process. We are equipped to manufacture some parts,
            which are impossible to source, providing restoration on a new
            level. We have every confidence that you will be happy with the
            quality of our work, but for ease of mind - extra warranty is
            provided.
          </p>
        </div>
        <p style={{ marginTop: "16px", fontSize: "22px" }}>
          Our clients can follow the restoration process by receiving regular
          updates of work done daily, weekly or monthly.
        </p>
        <div className="about-us-thesis-footer">
          <img src="images/facebook-logo-1.svg" />

          <a href="/contact" className="no-under">
            Request a callback <img src="images/right-arrow.png" />
          </a>
        </div>
      </div>
      <div className="about-us-biography">
        <div className="about-us-biography-container">
          <img src="images/Roma.png" />
          <div className="container">
            <h3>Who are we?</h3>
            <h1>Road to classic cars...</h1>
            <div className="columns">
              <p style={{ marginRight: "50px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-strip">
        <div className="tint"></div>
        <div className="about-us-strip-container">
          <div className="container">
            <div className="stripItem">
              <h1>11</h1>Years in the business
            </div>
            <div className="stripItem">
              <h1>50+</h1>Finished Projects
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-values">
        <div className="about-us-values-content">
          <h1>Our Values</h1>
          <div className="about-us-values-content-container">
            <div className="values-box">
              <img src="images/handshake.svg"></img>
              <div className="values-box-text">
                <h1>Trust</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="values-box">
              <img src="images/speech-box.svg"></img>
              <div className="values-box-text">
                <h1>Communication</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="values-box">
              <img src="images/heart.svg"></img>
              <div className="values-box-text">
                <h1>Passion</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="values-box">
              <img src="images/diamond.svg"></img>
              <div className="values-box-text">
                <h1>Quality</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
