import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Home1 from "./Home1"
import Navbar from "./Navbar"
import Feedback from "./Feedback"

function Rout(){

    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
              
                <Route path="/home1" element={<Home1/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
            </Routes>

        </div>
    )
}export default Rout