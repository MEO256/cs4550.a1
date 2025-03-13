import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import AssignmentEditor from "./AssignmentEditor";
export default function AssignmentsControls(
  { moduleName, setModuleName, isFaculty }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; isFaculty: boolean; }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      id="wd-assignments-controls"
      className="d-flex justify-content-between align-items-center mb-3"
    >
      <InputGroup style={{ maxWidth: "300px" }}>
        <InputGroup.Text className="bg-light border-secondary">
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          placeholder="Search..."
          aria-label="Search for Assignments"
          id="wd-search-assignment"
          className="border-secondary"
        />
      </InputGroup>
      {isFaculty && (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button
            variant="outline-secondary"
            className="me-2 d-flex align-items-center px-3"
            id="wd-add-assignment-group"
          >
            <BsPlus className="position-relative me-2" /> Group
          </Button>

          <Button
            onClick={handleShow}
            variant="danger"
            size="lg"
            className="me-1 float-end"
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment{" "}
          </Button>
          <AssignmentEditor
            show={show}
            handleClose={handleClose}
            dialogTitle="Add Assignment"
            moduleName={moduleName}
            setModuleName={setModuleName}
          />
        </div>
      )}
    </div>
  );
}