import { ListGroup, Button, Form, InputGroup } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LiaBookSolid } from "react-icons/lia";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

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
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <LiaBookSolid className="fs-1 text-success"></LiaBookSolid>
                  <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="fw-bold text-primary text-decoration-none">
                    {assignment.title}
                  </Link>
                </div>
                <LessonControlButtons />
              </div>
              <div>{assignment.course}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup>
    </div>
  );
}
