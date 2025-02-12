import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAnalyticsEventTracker from "../middleware/useAnalyticsEventTracker";

import ReactGA from "react-ga4";
const subtle = crypto.subtle;

const hashSensitiveUserData = async (value: string) => {
  const encoder = new TextEncoder();
  const value_utf8 = encoder.encode(value);
  const hash_sha256 = await subtle.digest("SHA-256", value_utf8);
  const hash_array = Array.from(new Uint8Array(hash_sha256));
  return hash_array.map((b) => b.toString(16).padStart(2, "0")).join("");
};

const Contact: React.FC = () => {
  const [result, setResult] = React.useState("");
  const gaEventTracker = useAnalyticsEventTracker("Contact us");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1439fddb-41f9-486c-a3e0-0203a9adcd6b");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Contact Details Sent Successfully");
      console.log(result);
      toast.success("Contact details sent successfully");

      // GOOGLE ANALYTICS
      const hashedEmail = await hashSensitiveUserData(
        formData.get("email") as string
      );
      const name = formData.get("name") as string;
      const message = formData.get("message") as string;
      ReactGA.event({
        category: "Form",
        action: "Contact-Form-Submit",
        label: `email: ${hashedEmail}, name: ${name}`,
      });
      const contactDetails: {
        userEmail: string;
        userName: string;
        message: string;
      } = {
        userEmail: `${hashedEmail}`,
        userName: `${name}`,
        message: `${message}`,
      };
      ReactGA.set({
        contactDetails,
      });

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      gaEventTracker("form_submit_failed");
    }
  };
  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Get in touch with Alpha Enterprises for high-quality precision
              components and services.
            </p>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-4 info">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      Gat No. 86, Plot No. 5<br />
                      Jyotibanagar, Talewade, Pune 411062
                    </p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>alphashaji@gmail.com</p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 9307406188</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <form className="php-email-form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      name="phone-No"
                      id="contactNo"
                      placeholder="Your Contact No"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    maxLength={256}
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
