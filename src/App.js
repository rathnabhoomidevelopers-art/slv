import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import ThankYou from "./ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Optional: make "/" go to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Optional: fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
