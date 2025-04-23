import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
