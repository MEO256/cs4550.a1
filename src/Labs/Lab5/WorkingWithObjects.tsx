import {useEffect, useState} from "react";
import * as client from './client';

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

  const [module, setModule] = useState({
    id:2614, name:"NodeJS ReactJS", description:"Learning NodeJS and ReactJS",
    course:"Web Development",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

  const fetch = async () => {
      setAssignment(await client.fetchAssignment());
  }

  useEffect(() => {
      fetch();
  }, []);

  return (
    <div id="wd-working-with-objects">
        <h3>Working With Objects</h3>
        <h4>Retrieving Objects</h4>
        <a id="wd-retrieve-assignments" className="btn btn-primary"  href={`${REMOTE_SERVER}/lab5/assignment`}>
            Get Assignment
        </a>
        <hr/>

        <h4>Retrieving Properties</h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>
            Get Title
        </a>
        <hr/>

        <h4>Modifying Properties - Title</h4>
        <a id="wd-update-assignment-title" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
           onClick={() => setAssignment({...assignment, title: assignment.title})} target="_blank">
            Update Title
        </a>
        <input className="form-control w-75" id="wd-assignment-title" value={assignment.title} onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}/>
        <hr />

        <h4>Modifying Properties - Score</h4>
        <a id="wd-update-assignment-score" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
           onClick={() => setAssignment({...assignment, score: assignment.score})} target="_blank">
            Update Score
        </a>
        <input type="number" className="form-control w-75" id="wd-assignment-score" value={assignment.score} onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })}/>
        <hr />

        <h4>Modifying Properties - Completed</h4>
        <input type="checkbox" checked={assignment.completed}
               onChange={() => setAssignment({...assignment, completed: !assignment.completed})}/>
        Completed
        <a target="_blank" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
           className="btn btn-primary me-2 float-end">
            Update Completed
        </a>

        <h4>Get Module</h4>
        <a id="wd-update-assignment-title" className="btn btn-primary" href={`${MODULE_API_URL}/`}>
            Get Module
        </a>
        <hr />

        <h4>Get Module Name</h4>
        <a id="wd-update-assignment-title" className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
            Get Name
        </a>
        <hr />

        <h4>Update Module Name</h4>
        <a id="wd-update-module-name" className="btn btn-primary float-end" href={`${MODULE_API_URL}/name/${module.name}`}
           target="_blank" onClick={() => setModule({...module, name: module.name})}>
            Update Module Name
        </a>
        <input className="form-control w-75" id="wd-module-name" value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
        <hr />

        <h4>Update Module Description</h4>
        <a id="wd-update-module-name" className="btn btn-primary float-end" href={`${MODULE_API_URL}/description/${module.description}`}
           target="_blank" onClick={() => setModule({...module, description: module.description})}>
            Update Module Description
        </a>
        <input className="form-control w-75" id="wd-module-description" value={module.description} onChange={(e) =>
            setModule({ ...module, description: e.target.value })}/>
        <hr />
    </div>
);}