import "./resources/static/css/layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperimentList from "./components/ExperimentList";
import Events from "./components/Events";
import ExperimentDetail from "./components/ExperimentDetail";

function App() {
  return (
    <BrowserRouter basename="/cpchaosui">
      <Routes>
        <Route path="/" element={<ExperimentList />} />
        <Route path="/list" element={<ExperimentList />} />
        <Route path="/detail/:kind/:name" element={<ExperimentDetail />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
