import { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";


const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get('/payments').then((res) => {
      setPayments(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="w-full">
      <HeadingTitle heading='My Selected Class'>
            </HeadingTitle>
     <div className="overflow-x-auto">
     <table className="table">
        <thead className="text-sm font-bold text-black">
          <tr>
            <th>#</th>
            <th>Transaction ID</th>
            <th>Date</th>
          
          
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment.transactionId}>
              <td>{index + 1}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.date}</td>
            
              
             
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default PaymentHistory;