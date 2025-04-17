import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHeader from "./AssignmentsControlButtons";
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { FaCaretDown, FaPlus, FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";
import {
  addAssignment,
  updateAssignment,
  deleteAssignment,
  setAssignments,
} from "./reducer";
import { FaPencil } from "react-icons/fa6";

export default function Assignments() {
    const { cid } = useParams();
    const [, setShow] = useState(false);
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
      const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };

    const saveAssignment = async (assignment: any) => {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    };
    const addAssignmentHandler = async () => {
      const newAssignment = await assignmentsClient.createAssignment();
      dispatch(addAssignment(newAssignment));
    };

    const removeAssignment = async (assignmentId: string) => {
      await assignmentsClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    };

    useEffect(() => {
      fetchAssignments();
    }, []);  
    const handleClose = () => setShow(false);

    return (
      <div id="wd-assignments">
        <div id="wd-assignment-controls" className="text-nowrap d-flex align-items-center gap-4">
            <InputGroup.Text style={{ width: "400px"}} className="rounded-0 border-grey">
                <FaSearch className="me-2"/>
                <Form.Control id="wd-assignment-search" placeholder="Search..."/>
            </InputGroup.Text >
            <Button variant="danger" className="flex-end" size="lg" onClick={() => {
      addAssignmentHandler();
      handleClose();
     }}><FaPlus className="position-relative me-2" /> 
                Assignment
            </Button>
        </div>
        <br></br>
        <ListGroup className="rounded-0" id="wd-assignment-grouping">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> <FaCaretDown /> ASSIGNMENTS <AssignmentHeader /> </div>
            <ListGroup className="wd-assignments rounded-0 d-flex align-items-center">
              {assignments
                .map((assignment: any) => (
                  <ListGroup.Item action href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment p-3 ps-1 d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen style={{ color: "green" }}/> 
                    <div className="flex-grow-1"><b>{assignment.title}</b> <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.available} | <b>Due</b> {assignment.due} | {assignment.points}pts</p></div>
                    <FaPencil
                                onClick={() => saveAssignment(assignment._id)}
                                className="text-primary me-3"
                              />
                    <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => removeAssignment(assignmentId)} /> 
                  </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  