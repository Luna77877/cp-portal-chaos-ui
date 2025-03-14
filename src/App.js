import "./resources/static/css/layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperimentList from "./components/ExperimentList";
import Events from "./components/Events";
import ExperimentDetailPage from "./components/details/ExperimentDetailPage";

function App() {
  return (
    <BrowserRouter basename="/cpchaosui">
      <Routes>
        <Route path="/" element={<ExperimentList />} />
        <Route path="/list" element={<ExperimentList />} />
        <Route
          path="/detail/:kind/:namespace/:name"
          element={<ExperimentDetailPage />}
        />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
