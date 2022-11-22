import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PopularMovies from "./pages/PopularMovies";
import UpcomingMovies from "./pages/UpcomingMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/upcoming" element={<UpcomingMovies />} />
            <Route path="/popular" element={<PopularMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
