import { Elements } from "@stripe/react-stripe-js";
import HeadingTitle from "../../../Components/HeadingTitle/HeadingTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectClass from "../../../Components/Hooks/useSelectClass";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [classes]=useSelectClass();
    const total=classes.reduce((sum,item)=>sum + item.price,0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
                <HeadingTitle heading='Payment Form'>
            </HeadingTitle>
           <h2>My Taka</h2> 
           <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;