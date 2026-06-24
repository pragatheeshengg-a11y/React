import { useContext } from "react";
import { cartcreate } from "./cartcontext";

const product=[{id:1,product:"Laptop",price:50000},
    {id:2,product:"mobile",price:25000},
    {id:3,product:"tab",price:45000}
]

function Productlist(){
    const{addtocart}=useContext(cartcreate);

    return(
        <>
        {product.map((item)=>(
            <div key={item.id}
          style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
                <h2>{item.product}</h2>
                <h3>{item.price}</h3>
                <button onClick={()=>addtocart(item)}>Add to Cart</button>
            </div>
        ))}
        </>
    );

}

export default Productlist;