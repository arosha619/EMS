import "./App.css";
import AddEmployees from "./components/AddEmployees";
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
         <Route path="/add-employee" element={<AddEmployees/>}></Route>
         <Route path="/edit-employee/:id" element={<AddEmployees/>}></Route>
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
