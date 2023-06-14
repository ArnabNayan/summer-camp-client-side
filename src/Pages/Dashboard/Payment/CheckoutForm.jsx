import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import { useContext } from "react";
 import { AuthContext } from "../../../Providers/AuthProvider";


import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";


const CheckoutForm = ({price,classes}) => {
    const stripe=useStripe()
    const elements=useElements()
    const user=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [cardError,setCardError]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const [processing,setProcessing]=useState(false);
    const [transactionId,setTransactionId]=useState('');
    
    useEffect(()=>{
      console.log(price)
     axiosSecure.post('/create-payment-intent',{price})
     .then(res=>{
         console.log(res.data.clientSecret)
         setClientSecret(res.data.clientSecret)
     })
    },[price,axiosSecure])
   

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card=elements.getElement(CardElement)
        if(card===null){
            return
        }
        console.log('card',card)

        const {error,paymentMethod}=await stripe.createPaymentMethod({
          type:'card',
          card
        })
        if(error){
          console.log(error)
          setCardError(error.message)
        }
        else{
          setCardError('');
          console.log('payment method',paymentMethod)
        }
        setProcessing(true)
  

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,   
          {
            payment_method: paymentMethod.id,
          },
        
        );
        if(confirmError){
          console.log(confirmError)
        }
         console.log('payment intent', paymentIntent)
         setProcessing(false)
         if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)
          // const transactionId=paymentIntent.id;
          const payment={
            email:user?.email,
            transactionId:paymentIntent.id,
            price,
            date:new Date(),
            selectedclass:classes.length,
            classes:classes.map(classes=>classes._id),
            selectClass:classes.map(classes=>classes.classId),
            status:'service pending',
            className:classes.map(classes=>classes.classname)
            }
            axiosSecure.post('/payments',payment)
            .then(res=>{
              console.log(res.data);
              if(res.data.insertedId){
                //todo
              }
            })
         }
     
   
     }

  
    return (

        <>
          <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-secondary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing} >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">TransactionId complete with transactionId:{transactionId}</p>} 
       </>

    );
};

export default CheckoutForm;






  // {
          //   payment_method:{
          //     payment:paymentMethod.id,
          //     card: card,
          //     billing_details: {
          //       email:user?.email || 'anonymous',
          //       name: user?.displayName || 'anonymous'
          //     },
          //   },
          // },




         