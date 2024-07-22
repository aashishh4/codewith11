
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [Toggle, setToggle] = useState(true);
    const [form,setForm]=useState(true)

    return (
        <div>
            {
                // Toggle ? <Link to="/">Home</Link> : <Link to="/home1">Home1</Link>
            }
         
            <h2>View Toggle</h2>
            <button onClick={() => setToggle(true)}><Link to="/">Home</Link></button>
            <button onClick={() => setToggle(false)}><Link to="/home1">Home1</Link></button><br/><br/>
            <button onClick={()=>setForm(!form)}><Link to="/feedback">Have a Feedback</Link></button>
        </div>
    );
}

export default Navbar;
