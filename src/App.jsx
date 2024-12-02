import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cover from "./Components/Cover/Cover";
import Card from "./Components/Card/Card";
import Login from "./Components/Login/Login"; // Import Login component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={
            <>
              <Cover />
              <div className="card-grid">
                <div className="card-item">
                  <Card />
                </div>
                <div className="card-item">
                  <Card />
                </div>
                <div className="card-item">
                  <Card />
                </div>
                <div className="card-item">
                  <Card />
                </div>
                <div className="card-item">
                  <Card />
                </div>
                <div className="card-item">
                  <Card />
                </div>
              </div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
