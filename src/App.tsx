import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Loyout é a rota pai */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {<Route path="projetos" element={<Projects />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
