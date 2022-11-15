import SideBar from "./Components/SideBar/SideBar";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";
import Page6 from "./Pages/Page6/Page6";
import Page7 from "./Pages/Page7/Page7";
import Page8 from "./Pages/Page8/Page8";
import Page11 from "./Pages/Page11/Page11";
import Page10 from "./Pages/Page10/Page10";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Page2 />} />
          <Route path="/orders" element={<Page3 />} />
          <Route path="/allnurseries" element={<Page4 />} />
          <Route path="/ordersreport" element={<Page6 />} />
          <Route path="/salesreport" element={<Page7 />} />
          <Route path="/catagories" element={<Page11 />} />
          <Route path="/customers" element={<Page8 />} />
          <Route path="/Products" element={<Page10 />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
