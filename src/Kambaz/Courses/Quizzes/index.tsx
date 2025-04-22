import { useEffect, useState } from "react";
import { Button, Form, InputGroup, ListGroup, Table } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaCaretDown, FaPencil } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import QuizControlButtons from "./QuizControlButtons";
import * as quizClient from "./client";
import * as coursesClient from "../client";
import { addQuizzes, deleteQuizzes, setQuizzes, updateQuizzes } from "./reducer";
import QuizControl from "./QuizControl";
import { editAssignment } from "../Assignments/reducer";
import { IoEllipsisVertical } from "react-icons/io5";


export default function Quizzes() {
    const { cid } = useParams();
    const [, setShow] = useState(false);
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    

    const fetchAssignments = async () => {
          const assignments = await coursesClient.findQuizzesForCourse(cid as string);
          console.log(assignments);
          dispatch(setQuizzes(assignments));
        };
    
        const saveAssignment = async (assignment: any) => {
          await quizClient.updateAssignment(assignment);
          dispatch(updateQuizzes(assignment));
        };
        const addAssignmentHandler = async () => {
          const newAssignment = await quizClient.createAssignment();
          dispatch(addQuizzes(newAssignment));
        };
    
        const removeAssignment = async (assignmentId: string) => {
          await quizClient.deleteAssignment(assignmentId);
          dispatch(deleteQuizzes(assignmentId));
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
                Quiz
            </Button>
        </div>
        <br></br>
        <ListGroup className="rounded-0" id="wd-assignment-grouping">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> <FaCaretDown /> Quizzes <QuizControlButtons /> </div>
            <ListGroup className="wd-assignments rounded-0 d-flex align-items-center">
              {quizzes
                .map((quiz: any) => (
                  <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen style={{ color: "green" }}/> 
                    <div className="flex-grow-1"><b>{quiz.title}</b> <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {quiz.available} | <b>Due</b> {quiz.due} | {quiz.points}pts</p></div>
                    <Link to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`} className="text-decoration-none">
                    <IoEllipsisVertical className="fs-4" />
                    </Link>
                    {(currentUser.role == "ADMIN" || currentUser.role == "FACULTY") && 
                    (<>
                    <FaPencil
                                onClick={() => saveAssignment(quiz._id)}
                                className="text-primary me-3"
                              />
                      <QuizControl assignmentId={quiz._id} deleteAssignment={(quizId: string) => removeAssignment(quizId)} />
                    </>)}
                  </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
}