import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { addAssignment } from "./reducer";
import { useState } from "react";

export default function AssignmentsControls({
  isFaculty,
}: {
  isFaculty: boolean;
}) {
  const [moduleName, setModuleName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

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
            variant="danger"
            className="d-flex align-items-center px-3"
            id="wd-add-assignment"
          >
            <BsPlus className="position-relative me-2" /> Assignment
          </Button>
          <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>NEW</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <FormControl value={moduleName}
     onChange={(e) => { setModuleName(e.target.value); }} />
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
        addAssignment({ moduleName });
      handleClose();
     }} > Add Assignment </Button>
   </Modal.Footer>
  </Modal>
        </div>
      )}
    </div>
  );
}