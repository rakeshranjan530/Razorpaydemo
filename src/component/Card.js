const Card =({buyProduct})=>{
    return(
        <div>
            <div className="card">
                <label>PRODUCT</label>
            </div>
            <div className="price">
                <label style={{fontWeight:"700"}}> $9 </label>
            </div>
            <div className="pricebutton" onClick={buyProduct}>
                <label style={{fontWeight:"700"}}>BUY</label>
            </div> 
        </div>
            
    )
}
export default Card;