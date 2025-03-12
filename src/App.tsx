import Labs from "./Labs";
import Kambaz from "./Kambaz";
import store from "./Labs/store";
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router";
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Project" element={<h1>Project</h1>} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
