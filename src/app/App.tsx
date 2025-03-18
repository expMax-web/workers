import {} from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router";
import { HomePage, SharedWorkerPage, WorkerPage } from "./pages";
import { Routes } from "react-router";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/worker" element={<WorkerPage />} />
        <Route path="/sharedWorker" element={<SharedWorkerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
