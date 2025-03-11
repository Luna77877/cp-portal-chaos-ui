import "./resources/static/css/layout.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExperimentList from "./components/ExperimentList";
import Events from "./components/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cpchaosui/list" element={<ExperimentList />} />
        <Route path="/cpchaosui/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
