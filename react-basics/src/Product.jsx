
import './product.css'
function Product({title ,price,features }){
    // const list =features.map((feature)=><li>{feature}</li>);
//    let isDiscount = price > 30000 ? " Discount of5%" : "";
let styles = {backgroundColor :"grey"}
        return(
            <div className="product" >
            <h1 style={styles}>{title}</h1>
            <h3>Price :{price}</h3>
            {/* <p>{price > 30000 ? " Discount of 5%" : ""}</p> */}
            {/* {price >30000 ? <p>"Discount of 5%"</p>:<a href='/'>Get Discount</a> } */}
            {price >30000 && <p>Discount  of 5%</p>}
            </div>
            );
            } 
            

export default Product;