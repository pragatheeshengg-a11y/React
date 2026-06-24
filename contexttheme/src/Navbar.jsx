import { useContext } from "react";
import {ThemeContext} from "./context";

function Navbar(){
    const {theme }=useContext(ThemeContext);
    return(
        <nav>
        <h1>THIS IS NAVBAR</h1>
        <h1>theme:{theme}</h1>
    </nav>
    );
}
export default Navbar;