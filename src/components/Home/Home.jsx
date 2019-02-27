import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
class Home extends React.Component {
  render() {
    return (
      <div className="">
        <section className="home-section">
          <section className="home-over">
            <div className="container">
              <div className="row justify-content-center shocase-row">
                <div className="col-md-8 text-center">
                  <h1 className="logoHeadingMain text-white text-center">
                    <img src={require("../../assets/heartbeat.png")} alt="" />
                    Patient Tracker
                  </h1>
                  <p className="intro-app text-white">
                    Lets start tracking our patients! <br />
                    Yes! <br />
                    Lets Star tracking our lifes!
                  </p>
                  <br />
                  <br />
                  <Link
                    to="/signUpDoctor"
                    onClick={() => console.log(this.props)}
                  >
                    {" "}
                    <button className="btn btn-lg cstm-acc-btn">
                      Create Account
                    </button>
                  </Link>
                  <br />
                  <br />
                  <p className="lead mt-3 text-white">
                    Already have Account?
                    <Link to="/loginDoctor" id="login_Link">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="highlight-purpose py-5 text-center">
          <div className="container">
            <h1 className="logoHeading">Mission</h1>
            <p className="lead">
              The system is aimed to help doctors to enter as well as view
              patient history as well as other patient details. Our system is a
              standalone system that can be used on doctor Android or iOS phone
              to be used for further login.
            </p>
            <Link to="/signUpDoctor">
              <button className="btn btn-outline-info btn-lg">
                Lets Start
              </button>
            </Link>
          </div>
        </section>

        <section className="how-it-work-showacase py-5">
          <div className="container">
            <h1 className="logoHeading text-center mb-5">How it works? </h1>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={require("../../assets/doctor.png")}
                  alt=""
                  height="128px"
                  className="mb-3 mt-2"
                />
                <br />
                <div className="shocase_number">1</div>
                <h5>Sign in </h5>
                <p>Create an account and sign up to use the application</p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={require("../../assets/test.png")}
                  alt=""
                  height="128px"
                  className="mb-3 mt-2"
                />
                <br />
                <div className="shocase_number">2</div>
                <h5> Enter Records</h5>
                <p>
                  After creating the account successfull, Start using the app
                  and enter the Records
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={require("../../assets/business-plan.png")}
                  alt=""
                  height="128px"
                  className="mb-3 mt-2"
                />
                <br />
                <div className="shocase_number">3</div>
                <h5>Manage Stats </h5>
                <p>
                  Manage your own state, and Records with the help of our
                  magical functionality
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-included-showcase py-5">
          <div className="container">
            {/* center issue to be resolved */}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6 col-sm-12 text-center">
                <h1 className="mb-3 logoHeading text-center">We Offer you </h1>
                <h5 className="mb-5">
                  {" "}
                  <i className="fa fa-star" style={{ color: "#00bbd4fd" }} /> We
                  offer you to create your own Profile{" "}
                </h5>
                <h5 className="mb-5">
                  {" "}
                  <i className="fa fa-star" style={{ color: "#00bbd4fd" }} /> We
                  offer you to manage your patients.
                </h5>
                <h5 className="mb-5">
                  {" "}
                  <i className="fa fa-star" style={{ color: "#00bbd4fd" }} /> we
                  offer you to keep track of your patietns.
                </h5>
                <h5 className="mb-5">
                  {" "}
                  <i className="fa fa-star" style={{ color: "#00bbd4fd" }} /> We
                  offer you to check your own stats.
                </h5>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-4 bg-dark text-center">
          <p className="lead text-white">Developed by Rehan Sattar &copy; </p>
        </footer>
      </div>
    )
  }
}

export default Home
