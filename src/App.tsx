import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// import Projetos from "./pages/Projetos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Loyout é a rota pai */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* <Route path="projetos" element={<Projetos />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
