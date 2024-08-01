import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import Data2 from "./Router/Data2"
import Data1 from "./Router/Data1";
import Data3 from "./Router/Data3";
import Data4 from "./Router/Data4";
import Data5 from "./Router/Data5";
import Data6 from "./Router/Data6";
import Data7 from "./Router/Data7";
import Data8 from "./Router/Data8";
export default function App() {
  return (
    //Routes.........
    <>
      <Routes>
      <Route path="/eco-mind/" element={<Home />} />
        <Route path="/eco-mind/data" element={<Data1 />} />
        <Route path="/eco-mind/data1" element={<Data2/>}/>
        <Route path="/eco-mind/data2" element={<Data3 />} />
        <Route path="/eco-mind/data3" element={<Data4/>}/>
        <Route path="/eco-mind/data4" element={<Data5 />} />
        <Route path="/eco-mind/data5" element={<Data6/>}/>
        <Route path="/eco-mind/data6" element={<Data7 />} />
        <Route path="/eco-mind/data7" element={<Data8/>}/>


      </Routes>


    </>
  );
}
