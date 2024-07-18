import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<ListEmployeeComponent/>}></Route>
         <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
