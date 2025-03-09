import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";

function App() {

  return (
    <div className="bg-[#0f1616] h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
