import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
import BookMovieTicket from "./components/BookMovieTicket";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/shows/:id" element={<MovieDetail />} />
        <Route path="/book/:id" element={<BookMovieTicket />} />
      </Routes>
    </div>
  );
}

export default App;
