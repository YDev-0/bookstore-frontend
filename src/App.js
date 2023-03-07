import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BookList from "./components/content/book/BookList";
import Books from "./components/content/book/Books";
import Home from "./components/content/Home";
import Form from "./components/content/book/Form";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="/auth">
            <Route path="books">
              <Route path="" element={<BookList />} />
              <Route path="add" element={<Form />} />
            </Route>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
