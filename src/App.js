import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import Coins from "./components/Coins.jsx"
import Exchanges from "./components/Exchanges.jsx"
import Home from "./components/Home.jsx"
import Coindetails from "./components/Coindetails.jsx"  
import Footer from "./components/Footer.jsx";
  
function App() {
  return (
    <Router>
      <Header/>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/coins" element={<Coins/>}></Route>
        <Route path="/exchanges" element={<Exchanges/>}></Route>
        <Route path="/coin/:id" element={<Coindetails/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
