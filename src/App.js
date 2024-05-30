
import Layout from "./layout";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/services";
import SignUp from "./pages/SignUp";
import NextPage from "./pages/NextPage/index.jsx";
import { Routes, Route, } from "react-router-dom";


function App() {
  return (
    <Layout>
      <Routes>

        <Route path="/" exact element={<HomePage />} />
        <Route path="/AboutUs" exact element={<AboutUs />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/SignUp" exact element={<SignUp />} />
        <Route path="/NextPage" exact element={<NextPage />} />

      </Routes>

    </Layout>
  );
}

export default App;
