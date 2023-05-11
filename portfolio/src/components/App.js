import Home from './home';
import About from './about';
import Nav from './nav';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export {App};
