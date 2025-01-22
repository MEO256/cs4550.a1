export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="Assignments">Assignments</option>
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                </select>
              </td>
            </tr>
              <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="Online">Online</option>
                  <option value="In person">In person</option>
                </select>
              </td>
            </tr>
              <tr>
              <td align="right" valign="top">Online Entry Options</td>
              <td>
                <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Uploads</label>
              </td>
            </tr>
              <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <input id="wd-assign-to" defaultValue="Everyone" />
              </td>
            </tr>
              <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              </td>
            </tr>
              <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" /> Until
                <input type="date" id="wd-available-until" defaultValue="2024-05-28" />
              </td>
            </tr>
        </table>
        <br />
        <button>Cancel</button>
        <button>Save</button>
      </div>
  );}
  