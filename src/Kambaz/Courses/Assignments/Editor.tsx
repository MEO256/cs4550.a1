import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router';
import * as db from '../../Database';


export default function AssignmentEditor() {
  const { cid } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id === cid);
  const [submissionType, setSubmissionType] = useState("Online");

  // Handle change for Submission Type
  const handleSubmissionTypeChange = (event: React.ChangeEvent<HTMLElement>) => {
    const { value } = event.target as HTMLSelectElement;  // Type casting to HTMLSelectElement
    setSubmissionType(value);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment?.title} />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" defaultValue="The assignment is available online Submit a link to the landing page of" />
        </Form.Group>

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Points</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col>
            <Form.Control as="select" id="wd-group">
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col>
            <Form.Control as="select" id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col>
            <Form.Control as="select" id="wd-submission-type" value={submissionType} onChange={handleSubmissionTypeChange}>
              <option value="Online">Online</option>
              <option value="In person">In person</option>
            </Form.Control>
          </Col>
        </Row>

        {submissionType === "Online" && (
          <Form.Group className="mt-3">
            <Form.Label>Online Entry Options</Form.Label>
            <div>
              <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
              <Form.Check type="checkbox" label="Website URL" id="wd-website-url" />
              <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
              <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
              <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" />
            </div>
          </Form.Group>
        )}

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Assign To</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" id="wd-assign-to" defaultValue="Everyone" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Due</Form.Label>
          </Col>
          <Col>
            <Form.Control type="date" id="wd-due-date" defaultValue="2024-05-13" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={3} className="text-end">
            <Form.Label>Available from</Form.Label>
          </Col>
          <Col>
            <Form.Control type="date" id="wd-available-from" defaultValue="2024-05-06" /> 
            Until
            <Form.Control type="date" id="wd-available-until" defaultValue="2024-05-28" />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col sm={6} className="text-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
              <Button variant="secondary" className="me-2">Cancel</Button>
            </Link>
            <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
              <Button variant="danger">Save</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
