import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as client from "./client";
import { Table } from "react-bootstrap";


export default function QuizDetails() {
    const { qid, cid } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [quizzes, setQuiz] = useState<any>([]);
    
   
        const fetchUser = async () => {
            if (!qid) return;
            if (!cid) return;
            const quiz = await client.fetchAssignmentById(cid, qid);
            console.log("quizzes", quiz);
            setQuiz(quiz);
        };
    
        useEffect(() => {
            if (qid) fetchUser();
        }, [qid]);
    
        if (!qid) return null;
    

    return (
        <tbody>
          {quizzes
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.webcam}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
        );
    }