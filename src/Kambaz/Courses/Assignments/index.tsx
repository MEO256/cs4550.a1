import { ListGroup, Button, Form, InputGroup } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons"; // Import LessonControlButtons
import { LiaBookSolid } from "react-icons/lia";

export default function Assignments() {
  return (
    <div className="p-4">
      {/* Search Bar */}
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control placeholder="Search for Assignments" />
      </InputGroup>

      {/* Buttons for Adding Assignments */}
      <div className="d-flex justify-content-end mb-3">
        <Button variant="secondary" className="me-2">
          <BsPlus className="me-1" /> Group
        </Button>
        <Button variant="danger">
          <BsPlus className="me-1" /> Assignment
        </Button>
      </div>

      {/* Assignments Header */}
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="p-3 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS 40% of Total
            </div>
            <Button variant="outline-secondary" size="sm">
              <BsPlus />
            </Button>
          </div>
        </ListGroup.Item>

        {/* Assignment List */}
        <ListGroup className="rounded-0">
          {[
            {
              id: 123,
              title: "A1 - ENV + HTML",
              details: "Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts",
            },
            {
              id: 1337,
              title: "A2 - CSS + BOOTSTRAP",
              details: "Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts",
            },
            {
              id: 228,
              title: "A3 - JAVASCRIPT + REACT",
              details: "Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts",
            },
          ].map((assignment) => (
            <ListGroup.Item key={assignment.id} className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <LiaBookSolid className="fs-1 text-success"></LiaBookSolid>
                  <Link to={`/Kambaz/Courses/1234/Assignments/${assignment.id}`} className="fw-bold text-primary text-decoration-none">
                    {assignment.title}
                  </Link>
                </div>
                <LessonControlButtons />
              </div>
              <div className="text-muted">{assignment.details}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup>
    </div>
  );
}
