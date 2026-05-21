import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/message" element={<Message />} /> */}
      </Routes>
    </Layout>
  );
}
