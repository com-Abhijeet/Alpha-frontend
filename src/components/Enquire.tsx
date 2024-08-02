import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  productName: string;
}

const Enquire: React.FC<props> = ({ productName }) => {
  console.log(productName);

  const [result, setResult] = React.useState("");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f903b31d-c584-47b0-8f37-2c317bd8e34f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      console.log(result);
      toast.success("Enquire details successfully sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <section id="enquire" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Enquire</h2>
            <p>
              Please Add the enquiry for the product and we will get back to you
              soon !
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
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={`Enquiry for ${productName}`}
                    contentEditable="false"
                    readOnly
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
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
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Enquire;
