import React, { useState, useEffect, useRef } from "react";
import "./home.scss";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import ServiceTabs from "../../components/ServiceTabs/ServiceTabs";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useInView } from "react-intersection-observer";
const config = {
  api: `${process.env.REACT_APP_API}`,
  title: "Contact Me",
  description:
    "Write us about your request, We'll get back to you within 24 hours.",
  successMessage: "Thank you for contacting me.",
  errorMessage: "Please fill the complete form",
  fields: {
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
  },
  fieldsConfig: [
    {
      id: 1,
      label: "First Name",
      fieldName: "firstName",
      type: "text",
      placeholder: "Your First Name",
      isRequired: true,
      klassName: "first-name-field",
    },
    {
      id: 2,
      label: "Last Name",
      fieldName: "lastName",
      type: "text",
      placeholder: "Your Last Name",
      isRequired: true,
      klassName: "last-name-field",
    },
    {
      id: 3,
      label: "Email",
      fieldName: "email",
      type: "email",
      placeholder: " Your Email",
      isRequired: true,
      klassName: "email-field",
    },
    {
      id: 4,
      label: "Message",
      fieldName: "msg",
      type: "textarea",
      placeholder: "Write something.....",
      isRequired: true,
      klassName: "message-field",
    },
  ],
};
const Home = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true, delay: 700 });

  return (
    <div id="home">
      <div className="background"></div>
      <div className="block-home">
        <div className="text-container">
          <p>
            <h1>Car Second Life! </h1>
            We are specialists in classic and modern car body restoration and
            our workshop is fully equipped. When you are looking for a company
            that specializes in classic car restorations in South and Southwest
            England make sure we are your first port of call.
            <br />
          </p>
          <p>
            At Car Second Life we can provide you with restoration, rebuild and
            repair services for classic and modern motor vehicles. For your
            peace of mind we have many years experience in the industry and we
            have an impeccable reputation due to the quality of service. The
            materials are carefully chosen and shaped by our specialists
          </p>
          <h2>
            Restore your car now - request a callback and we will get back to
            you as soon as possible.
          </h2>
          <a href="/contact" className="no-under">
            Request a callback <img src="images/right-arrow.png" />
          </a>
        </div>
        <div className="carousel-container">
          <HomeCarousel />
        </div>
      </div>
      <div className="block-about-us">
        <div className="block-about-us-container">
          <div className="title">
            <p>About Us</p>
          </div>
          <div className="about">
            <div className="about-container">
              <div className="about-container-text">
                CarSecondLife was founded by people who quite simply love cars!
                Our speciality however is Classic Cars. All our work is
                underpinned by the philosophy that every Classic car has its own
                charm, character and life. Thus we keep this mind when carrying
                out any restoration work and ensure that the individuality of
                each car are kept intact.
                <a className="learn-more-btn" href="/about-us">
                  <div className="learn-more-btn-text">Learn More</div>
                  <img src="images/Arrow Right.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-our-services">
        <div className="block-our-services-content">
          <div className="title">
            <p>Our Services</p>
          </div>
          <div className="tabs">
            <ServiceTabs />
          </div>
        </div>
      </div>
      <div className="block-contact-us">
        <div
          ref={ref}
          className={`block-contact-us-wrapper ${
            inView ? "block-contact-us-wrapper-in-view" : ""
          }`}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
