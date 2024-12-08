import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cover from "./Components/Cover/Cover";
import Card from "./Components/Card/Card";
import Login from "./Components/Login/Login";
import data from "./data"; // Import data
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cover />
              <div className="card-grid">
                {data.map((blog) => (
                  <div className="card-item" key={blog.id}>
                    <Card
                      title={blog.title}
                      date={blog.date}
                      image={blog.image}
                      description={blog.description}
                      link={blog.link}
                    />
                  </div>
                ))}
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
