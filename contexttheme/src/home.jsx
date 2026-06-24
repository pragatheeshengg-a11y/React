import { useContext } from "react";
import{ThemeContext} from "./context";

function Home(){
    const{theme,toggleChange}=useContext(ThemeContext);
    return (
        <div>
            <button
            onClick={toggleChange}>CHANGE</button>
            <p>{theme}</p>
        </div>
    );
}

export default Home;