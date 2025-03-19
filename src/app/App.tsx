import {} from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router";
import {
  HomePage,
  ServiceWorkerPage,
  SharedWorkerPage,
  WorkerPage,
} from "./pages";
import { Routes } from "react-router";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/worker" element={<WorkerPage />} />
        <Route path="/sharedWorker" element={<SharedWorkerPage />} />
        <Route path="/serviceWorker" element={<ServiceWorkerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
