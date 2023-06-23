import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Components/Layout";
import Blogs from "./Routes/Blogs";
import Login from "./Routes/Login";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Blogs />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
