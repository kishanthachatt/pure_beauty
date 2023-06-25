import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Components/Layout";
import Login from "./Routes/Login";
import Blogs from "./Routes/Blogs";
import { ROUTE } from "./Routes.constant";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route element={<Layout />}>
            <Route path={ROUTE.BLOG} element={<Blogs />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
