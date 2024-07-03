import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import MentalSupport from "./pages/MentalSupport";
import MyHealth from "./pages/MyHealth";
import SymptomChecker from "./pages/SymptomChecker";
import Specialists from "./pages/Specialists";


export function PageRoutes () {
    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/home/specialists" element={<Specialists/>}/>
                <Route exact path="/appointments" element={<Appointments/>}/>
                <Route exact path="/mentalsupport" element={<MentalSupport/>}/>
                <Route exact path="/myhealth" element={<MyHealth/>}/>
                <Route exact path="/symptomchecker" element={<SymptomChecker/>}/>
            </Routes>
        </Router>
    )
}