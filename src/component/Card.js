const Card =({buyProduct,price})=>{
    return(
        <>
            <div className="card">
                <label>PRODUCT</label>
            </div>
            <div className="price">
                <label style={{fontWeight:"700"}}> ${price} </label>
            </div>
            <div className="pricebutton" onClick={()=>buyProduct(price)}>
                <label style={{fontWeight:"700"}}>BUY</label>
            </div> 
        </>
            
    )
}
export default Card;