import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import NewArticle from "./pages/NewArticle";
import NotFound from "./pages/NotFound";
import ArticleLayout from "./ArticleLayout";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<ArticleLayout />}>
            <Route index element={<Blog />} />
            <Route path=":id" element={<Article />} />
            <Route path="new" element={<NewArticle />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
