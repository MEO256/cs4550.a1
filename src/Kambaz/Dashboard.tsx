import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Web Development  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
              <div className="wd-dashboard-course">
                  <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                      <div>
                          <h5> CS3500</h5>
                          <p className="wd-dashboard-course-title">
                              Object-Oriented Design  </p>
                          <button> Go </button>
                      </div>
                  </Link>
              </div>
              <div className="wd-dashboard-course">
                  <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                      <div>
                          <h5> CS3650 </h5>
                          <p className="wd-dashboard-course-title">
                              Computer Systems  </p>
                          <button> Go </button>
                      </div>
                  </Link>
              </div>
              <div className="wd-dashboard-course">
                  <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                      <div>
                          <h5> CS4700 </h5>
                          <p className="wd-dashboard-course-title">
                              Network Fundamentals  </p>
                          <button> Go </button>
                      </div>
                  </Link>
              </div>
              <div className="wd-dashboard-course">
                  <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                      <div>
                          <h5> CS1800 </h5>
                          <p className="wd-dashboard-course-title">
                              Discrete Structures  </p>
                          <button> Go </button>
                      </div>
                  </Link>
              </div>
              <div className="wd-dashboard-course">
                  <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                      <div>
                          <h5> CS2500 </h5>
                          <p className="wd-dashboard-course-title">
                              Fundies 1  </p>
                          <button> Go </button>
                      </div>
                  </Link>
              </div>
              <div className="wd-dashboard-course">
                  <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                      <div>
                          <h5> CS1210 </h5>
                          <p className="wd-dashboard-course-title">
                              CO-OP  </p>
                          <button> Go </button>
                      </div>
                  </Link>
              </div>
          </div>
    </div>
);}
