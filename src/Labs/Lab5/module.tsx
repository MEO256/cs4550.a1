const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Module() {

  return (
    <div id="wd-module">
    
      <a id="wd-get-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>

      <a id="wd-get-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
    </div>
);}