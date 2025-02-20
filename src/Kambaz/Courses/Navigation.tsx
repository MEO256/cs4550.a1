import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default function CourseNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;
        return (
          <ListGroup.Item
            key={link}
            as={Link}
            to={path}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
          >
            {link}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}