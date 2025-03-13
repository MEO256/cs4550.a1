import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment } from "./reducer";
import { ListGroup, Form, InputGroup } from "react-bootstrap";
import { BsGripVertical  } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { LiaBookSolid } from "react-icons/lia";
import * as db from "../../Database";

export default function Assignments() {
  const assignments = db.assignments;
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [moduleName, setModuleName] = useState("");
  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div className="p-4">
      <AssignmentsControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
                  dispatch(
                    addAssignment({
                      name: moduleName
                    })
                  );
                  setModuleName("");
                }}
                isFaculty={isFaculty} 
      />
      {/* Search Bar */}
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control placeholder="Search for Assignments" />
      </InputGroup>

      {/* Assignments Header */}
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="p-3 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS 40% of Total
            </div>
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
                <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={(assignmentId) => {
                        dispatch(deleteAssignment(assignmentId));
                      }}
                      isFaculty={isFaculty}
                    />
              </div>
              <div>{assignment.course}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup>
    </div>
  );
}