import React, {  Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes'
const Login = React.lazy(() => import("./pages/Login"));
function App() {
  return (
    <Router>
      <Suspense fallback={<p>LODING...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
