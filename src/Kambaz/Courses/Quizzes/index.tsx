import { RxRocket } from "react-icons/rx";
import QuizzesControls from "./QuizzesControls";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setQuizzes } from "./reducer";
import * as client from "./client";
import QuizContextMenu from "./QuizContextMenu";

export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [quizData] = useState<{
    [key: string]: {
      questionCount: number;
      score?: number | null;
      total?: number | null;
    };
  }>({});

  const { currentUser } = useSelector((state: any) => state.accountReducer); 
  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    console.log("Quizzes fetched:", quizzes);
    dispatch(setQuizzes(quizzes));
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };


  useEffect(() => {
    fetchQuizzes();
  }, [currentUser.role]);
  
  return (
    <div id="wd-quizzes">
      <QuizzesControls userRole={currentUser.role} />
      <br />
      <br />
      <li className="wd-quizzes list-group-item p-0 mb-5 fs-5 border-gray">
        <div
          className="wd-quizzes-title p-3 ps-2 bg-secondary dropdown-toggle"
          onClick={handleToggle}
          aria-expanded={!isCollapsed}
        >
          <span className="fw-bold ps-3">Assignment Quizzes</span>
        </div>
        <div className={`collapse ${!isCollapsed ? "show" : ""}`}>
          <ul
            id="wd-quiz-list"
            className="wd-quiz-list list-group rounded-0"
            style={{ borderLeft: "4px solid green" }}
          >
            {quizzes
              .map((q: any) => (
                <li
                  className="wd-quiz-item list-group-item d-flex align-items-center p-3 ps-1"
                  key={q._id}
                >
                  <RxRocket className="m-4 fs-5 text-success" />
                  <div>
                    <Link
                      to={`/Kambaz/Courses/${cid}/Quizzes/${q._id}`}
                      className="wd-quiz-link fs-5 fw-bold text-decoration-none text-dark"
                    >
                      {q.title}
                    </Link>
                    <p className="mb-0 text-muted fs-6">
                      <b>{}</b> |{" "}
                      {q.dueDate === "" ? (
                        <b>No Due Date</b>
                      ) : (
                        <>
                          <b>Due</b> {q.dueDate}
                        </>
                      )}{" "}
                      | {q.points} pts | {quizData[q._id]?.questionCount || 0}{" "}
                      Questions
                      {currentUser.role === "STUDENT" &&
                        quizData[q._id]?.score !== -1 &&
                        quizData[q._id]?.total !== -1 && (
                          <>
                            {" "}
                            | <span>Score: </span>
                            {quizData[q._id]?.score} / {quizData[q._id]?.total}
                          </>
                        )}
                    </p>
                  </div>
                  <div className="ms-auto position-relative">
                    {currentUser.role === "FACULTY" && <QuizContextMenu quizId={q._id} />}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </li>
    </div>
  );
}