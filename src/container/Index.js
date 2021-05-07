import Card from "../component/Card"
import image from '../assets/image.jpeg';
import data from '../utils/data';
const Container =()=>{

    const isScriptAdded = async (src)=>{
        return new Promise(resolve=>{
            const script = document.createElement('script');
            script.src = src;
            script.onload=()=>{
                resolve(true);
            }
            script.onerror=()=>{
                resolve(false)
            }
            document.body.appendChild(script);
        })
    }
    const buyProduct = async(price) => {
        const res = await isScriptAdded('https://checkout.razorpay.com/v1/checkout.js');
        if(!res){
            alert("Razorpay is failed to laod, Are you online?");
            return;
        }
        const amount = (price*100).toString();
        var options = {
            "key": "rzp_test_zlbws4Uv3OeKqF", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "USD",
            "name": "Razorpay",
            "description": "Cryptoleague Test Transaction",
            "image": image,
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();//open pop pup
    }
    return(
        <div className="container">
            {
                data?.map((price)=>{
                    return <div key={price}>
                        <Card
                          price ={price}
                          buyProduct={buyProduct}
                        />
                    </div>
                })
            }
        </div>
    )
}
export default Container;