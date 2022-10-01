import "./App.css";
import Loader from "./Components/BodyComponents/Loader";
import { useSelector } from "react-redux";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuc from "./PaymentSuc";
function App() {
  const { lod } = useSelector((state) => state.custom);
  const load = lod;
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/paymentsuccess" element={<PaymentSuc />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
