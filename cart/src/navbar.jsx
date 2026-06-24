import { useContext } from "react";
import { cartcreate } from "./cartcontext";

function Navbar(){
    const {cart}=useContext(cartcreate);

    return(
        <>
        <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#333",
        color:"yellow",
      }}>
            <p>Shopping APP</p>
            <p>🛒{cart.length}</p>

        </nav>
        </>
    );
}
export default Navbar;