import "./styles.css";
import { useState, useRef, useEffect } from "react";
import CheckmarkSVG from "./Components/CheckmarkSVG";
import LoadingSpinnerSVG from "./LoadingSpinnerSVG";
import sanitizeInput from "../../Utils/sanitizeInput";
import validateInput from "../../Utils/validateInput";
import { useCsrfToken } from "../../Hooks/useCSRF";
import { useRecaptcha } from "../../Hooks/useReCAPTCHA";

function ContactComponent() {
  const csrfToken = useCsrfToken();
  const recaptchaToken = useRecaptcha(
    "6LdntzApAAAAAH5dBl-21sMj1Gv0W_EdTEJV5tKF"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateInput.name(formData.name),
      email: validateInput.email(formData.email),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form submission started");

    if (!validateForm()) {
      console.log("Form validation failed", errors);
      return;
    }

    setIsLoading(true);
    console.log("Loading state set to true");

    const sanitizedData = {
      name: sanitizeInput.text(formData.name),
      email: sanitizeInput.email(formData.email),
      message: sanitizeInput.text(formData.message),
    };

    console.log("Sanitized data:", sanitizedData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ ...sanitizedData, recaptchaToken }),
        credentials: "include",
        mode: "cors",
      });

      console.log("Fetch request sent");

      const result = await response.json();
      console.log("Response received:", result);

      if (result.status === "success") {
        console.log("Form submission successful");
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        console.log("Form submission failed:", result);
      }
    } catch (error) {
      console.log("An error occurred during form submission:", error);
    } finally {
      setIsLoading(false);
      console.log("Loading state set to false");
    }
  };

  return (
    <div id="contact-section" className={`contact-section__outer`}>
      <div className={`contact-section`}>
        <div className={`contact-section__inner container`}>
          <h1>Let&apos;s Connect!</h1>
          <p>
            Want to inquire about a project or employment opportunity?<br></br>
            Fill out the form below and I will return your message shortly.
          </p>

          <form className={`contact-form`} onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="name-input__wrapper">
                <input
                  ref={nameInputRef}
                  className={`name-input ${errors.name ? "input-error" : ""}`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error-message">
                    Please enter a valid name
                  </span>
                )}
              </div>

              <div className="email-input__wrapper">
                <input
                  ref={emailInputRef}
                  className={`email-input ${errors.email ? "input-error" : ""}`}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-message">
                    Please enter a valid email (<i>123@example.com</i>)
                  </span>
                )}
              </div>
            </div>
            <textarea
              className={`message--textarea`}
              name="message"
              placeholder="Message (Optional)"
              id=""
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="button-row">
              {!isLoading && !isSuccess && (
                <button
                  className={`send--btn`}
                  type="submit"
                  disabled={isLoading || isSuccess}
                  style={{
                    visibility: isLoading || isSuccess ? "hidden" : "visible",
                  }}
                >
                  Send
                </button>
              )}
              {isLoading && (
                <div className="loading-wrapper">
                  <LoadingSpinnerSVG />
                </div>
              )}
              {!isLoading && isSuccess && (
                <div className="check-wrapper">
                  <CheckmarkSVG />
                  <p className="message-sent">Sent!</p>
                </div>
              )}

              <span className={`outlook-span`}>
                Have Outlook?<br></br> Simply click&nbsp;
                <a className={`here-link`} href="mailto:ildidvorani@gmail.com">
                  here
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
