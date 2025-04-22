import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function QuizControl({ assignmentId, deleteAssignment }: {
    assignmentId: string; 
    deleteAssignment: (assignmentId: string) => void;
}) {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaTrash className="text-danger me-2 mb-1" onClick={(e) => {
                e.preventDefault();
                const check = window.confirm(
                    "Are you sure you want to delete this quiz?"
                );
                if (check) {
                    deleteAssignment(assignmentId);
                }
            }}/>

        </div>
    );}