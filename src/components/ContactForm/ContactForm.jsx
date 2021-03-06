import React, { useState, useRef } from "react";
import "./contactform.scss";
import axios from "axios";
import FormValidator from "../../utilities/form-validators";

const API_PATH = "http://carsecondlife.co.uk/mail.php";

var completionValidators = {
  name: false,
  email: false,
  phone: false,
  msg: false,
};

/**
 * @component ContactForm
 * @props - { object } -  config
 */
const ContactForm = (props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMessage] = useState("");
  const formValidator = new FormValidator();

  const onNameChange = (event) => {
    //Prevents linebreaks
    if (event.nativeEvent.inputType == "insertLineBreak") {
      return;
    } else {
      setName(event.target.value);
    }
  };

  const onEmailChange = (event) => {
    if (event.nativeEvent.inputType == "insertLineBreak") {
      return;
    } else {
      setEmail(event.target.value);
    }
  };

  const onPhoneChange = (event) => {
    if (event.nativeEvent.inputType == "insertLineBreak") {
      return;
    }

    if (
      formValidator.validateNum(
        event.target.value[event.target.textLength - 1] ||
          event.target.value == ""
      )
    ) {
      setPhone(event.target.value);
    } else if (event.target.value == "") {
      setPhone(event.target.value);
    }
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onFieldBlur = (event) => {
    console.log(event);
    switch (event.target.id) {
      case "name":
        if (event.target.value != "") {
          completionValidators["name"] = true;
          toggleError(false, event.target);
          togglePlaceHolder(true, event.target);
        } else {
          completionValidators["name"] = false;
          toggleError(true, event.target);
          togglePlaceHolder(false, event.target);
        }
        console.log(completionValidators);
        break;
      case "email":
        if (formValidator.validateEmail(event.target.value)) {
          completionValidators["email"] = true;
          toggleError(false, event.target);
          togglePlaceHolder(true, event.target);
        } else {
          completionValidators["email"] = false;
          toggleError(true, event.target);
          togglePlaceHolder(false, event.target);
        }
        console.log(completionValidators);
        break;
      case "phone":
        if (formValidator.validatePhone(event.target.value)) {
          completionValidators["phone"] = true;
          toggleError(false, event.target);
          togglePlaceHolder(true, event.target);
        } else {
          completionValidators["phone"] = false;
          toggleError(true, event.target);
          togglePlaceHolder(false, event.target);
        }
        console.log(completionValidators);
        break;
      case "msg":
        if (event.target.value != "") {
          completionValidators["msg"] = true;
          toggleError(false, event.target);
          togglePlaceHolder(true, event.target);
        } else {
          completionValidators["msg"] = false;
          toggleError(true, event.target);
          togglePlaceHolder(false, event.target);
        }
        console.log(completionValidators);
        break;
    }
  };

  const togglePlaceHolder = (show, target) => {
    console.log(target.nextSibling.nextSibling);
    if (show) {
      target.nextSibling.nextSibling.classList.add("unfocus");
    } else {
      target.nextSibling.nextSibling.classList.remove("unfocus");
    }
  };

  const toggleError = (mode, target) => {
    if (mode) {
      target.classList.add("error");
      target.nextSibling.classList.remove("hide-default");
    } else {
      target.classList.remove("error");
      target.nextSibling.classList.add("hide-default");
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formValidator.validateForm(completionValidators)) {
      console.log("YES SEND");
    } else {
      console.log("NO DONT");
      return;
    }

    await axios
      .post(API_PATH, {
        name,
        email,
        phone,
        msg,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log("err mail not sent"));
  };

  const removeErrors = (event) => {
    event.target.classList.remove("error");
    event.target.nextSibling.classList.add("hide-default");
    togglePlaceHolder(false, event.target);
  };
  return (
    <div className="contact-form__container">
      <div className="title">
        <p>Get in touch</p>
      </div>
      <form className="form-root" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="form-field">
          <textarea
            id="name"
            placeholder=" "
            type="text"
            className="form-control name"
            value={name}
            onChange={(e) => onNameChange(e)}
            onBlur={(e) => onFieldBlur(e)}
            onFocus={(e) => removeErrors(e)}
            maxLength="30"
          ></textarea>
          <div className="form-field-error hide-default">
            Please enter a name
          </div>
          <label htmlFor="name" className="form-placeholder">
            Name
          </label>
        </div>

        <div className="form-field ">
          <textarea
            id="email"
            type="email"
            className="form-control email"
            value={email}
            maxLength="30"
            onChange={(e) => onEmailChange(e)}
            onBlur={(e) => onFieldBlur(e)}
            onFocus={(e) => removeErrors(e)}
            placeholder=" "
          ></textarea>
          <div className="form-field-error hide-default">
            Please enter a viable email
          </div>
          <label htmlFor="email" className="form-placeholder">
            Email
          </label>
        </div>
        <div className="form-field">
          <textarea
            id="phone"
            placeholder=" "
            type="number"
            maxLength=""
            className="form-control phone"
            value={phone}
            maxLength="20"
            onChange={(e) => onPhoneChange(e)}
            onBlur={(e) => onFieldBlur(e)}
            onFocus={(e) => removeErrors(e)}
          ></textarea>
          <div className="form-field-error hide-default">
            Please enter a viable phone number
          </div>
          <label htmlFor="phone" className="form-placeholder">
            Phone
          </label>
        </div>
        <div className="form-field ">
          <textarea
            id="msg"
            placeholder=" "
            className="form-control text"
            rows="7"
            value={msg}
            onChange={(e) => onMessageChange(e)}
            onBlur={(e) => onFieldBlur(e)}
            onFocus={(e) => removeErrors(e)}
          ></textarea>
          <div className="form-field-error hide-default">
            Please enter a message
          </div>
          <label htmlFor="message" className="form-placeholder">
            Message
          </label>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
