import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as client from "./client";
import { Table } from "react-bootstrap";


export default function QuizDetails() {
    const { uid } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [quizzes, setQuiz] = useState<any>({});
   
        const fetchUser = async () => {
            if (!uid) return;
            const user = await client.fetchAssigmentById(uid);
            setQuiz(user);
        };
    
        useEffect(() => {
            if (uid) fetchUser();
        }, [uid]);
    
        if (!uid) return null;
    

    return (
        <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {quizzes
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>
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
      </Table>
        );
    }