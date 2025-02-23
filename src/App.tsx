// App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/auth/createAccount";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import Research from "./pages/Reserch";

function App() {
  return (
    <Routes>
      {/* Wrap pages inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="research" element={<Research />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />
      </Route>
      <Route path="createaccount" element={<CreateAccount />} />
    </Routes>
  );
}

export default App;
