const Team = () => {
  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <p>Meet the dedicated team behind Alpha Enterprises</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="./assets/img/team/team-1.jpg" alt="" />
                <h4>Shaji Nair</h4>
                <span>Chief Executive Officer</span>
                <p>
                  With a visionary approach and a wealth of experience in the
                  precision components industry, Shaji leads Alpha Enterprises
                  to new heights.
                </p>
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="./assets/img/team/team-2.jpg" alt="" />
                <h4>Ravi Kumar</h4>
                <span>Product Manager</span>
                <p>
                  Ravi ensures the highest quality standards and oversees the
                  development of innovative solutions for our clients.
                </p>
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="./assets/img/team/team-3.jpg" alt="" />
                <h4>Vikram Singh</h4>
                <span>Chief Technical Officer</span>
                <p>
                  Vikram is the technical backbone of Alpha Enterprises, driving
                  innovation and ensuring seamless operations with cutting-edge
                  technology.
                </p>
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
