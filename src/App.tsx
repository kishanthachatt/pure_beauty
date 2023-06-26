import * as React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { Layout } from "./Components/Layout";
import Login from "./Routes/Login";
import Blogs from "./Routes/Blogs";
import { ROUTE } from "./Routes.constant";
import { BlogDetail } from "./Routes/Blogs/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route index={true} path={ROUTE.LOGIN} element={<Login />} />
          <Route element={<Layout />}>
            <Route path={ROUTE.BLOG} element={<Blogs />} />
            <Route path={ROUTE.BLOG_DETAIL} element={<BlogDetail />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
