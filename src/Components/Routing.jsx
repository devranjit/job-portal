
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
 
);
