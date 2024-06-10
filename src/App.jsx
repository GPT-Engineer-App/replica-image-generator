import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;