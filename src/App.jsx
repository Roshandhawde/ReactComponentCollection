import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./Screen/Modal/Modal";
import Drawer from "./Screen/Modal/Drawer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Modal />} />
          <Route path="/drawer" element={<Drawer />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
