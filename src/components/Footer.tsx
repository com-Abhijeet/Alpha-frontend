const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Alpha Enterprises</h3>
                <p>
                  Gate No. 86, Plot No. 5 <br />
                  Jyotibanagar, Talewade, Pune 411062
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> +91 9307406188
                  <br />
                  <strong>Email:</strong> support@alphaenterprisess.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-7 col-md-12 map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.1237809021964!2d73.78750927523909!3d18.613501482498197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9fbee1660e9%3A0x8110cdda72a76b32!2sAlpha%20Enterprises!5e0!3m2!1sen!2sin!4v1723380751541!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Alpha Enterprises</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by{" "}
              <a href="https://pspmerp.in/">PSPM Technologies pvt. ltd.</a>
            </div>
          </div>
          {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
