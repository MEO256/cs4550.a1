import { Modal, FormControl, Button } from "react-bootstrap";
import { addAssignment } from "./reducer";
export default function AssignmentEditor({ show, handleClose, dialogTitle, moduleName, setModuleName,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; moduleName: string; setModuleName: (name: string) => void;}) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <FormControl value={moduleName}
     onChange={(e) => { setModuleName(e.target.value); }} />
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
     addAssignment({ name: moduleName });
      handleClose();
     }} > Add Assignment </Button>
   </Modal.Footer>
  </Modal>
);}