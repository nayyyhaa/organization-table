import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, PageNotFound, TreePage } from "./pages";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Team Organization</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tree/:id" element={<TreePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
