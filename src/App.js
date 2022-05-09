import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, PageNotFound, TreePage } from "./pages";
import { Footer } from "components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1 className="centered-text">Team Organization</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tree/:id" element={<TreePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
