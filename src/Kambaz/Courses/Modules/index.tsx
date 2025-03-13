import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls
        addModule={() => {
          dispatch(
            addModule({
              name: moduleName,
              course: cid,
            })
          );
          setModuleName("");
        }}
        moduleName={moduleName}
        setModuleName={setModuleName}
      />
      <ListGroup className="rounded-0">
        {modules.map((module: any) => (
          <ListGroup.Item
            className="wd-module
                    p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              {!module.editing && module.name}
              {module.editing && (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  value={module.name}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}