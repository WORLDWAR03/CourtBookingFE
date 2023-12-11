import React, { useEffect, useState } from 'react'
import './button.css'
import AxiosInstance from '../../config/axiosInstance'
import { BASEURL } from '../../Constants/baseUrl'
import Swal from 'sweetalert2'

function Button({slot}) {
   const [modal, setModal] = useState(false)
   const [button,setButton] = useState(false)
   const [date, setDate] = useState('')
   const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

  const toggleModal =() =>{
    setModal(!modal)

    if(modal){
      document.body.classList.add('active-modal')

      }else{
        document.body.classList.remove('active-modal')
      }
    if(slot.bookedBy){
      setModal(modal)
    }
    if(button){
      setModal(modal)
    }
    
    }
    useEffect(
      ()=>{
        setDate(slot.date, 'dddd, mmmm ds, yyyy')

      },[slot]
    )

    async function displayRazorpay() {
      const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }

      // creating a new order
      const result = await AxiosInstance.post(BASEURL+"/payment/generateOrder",{slotId:slot._id});
    
      if(result.message==="slot already booked"){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This slot already booked!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
      }

      if (!result) {
          alert("Server error. Are you online?");
          return;
      }

      // Getting the order details back
      const { amount, id: order_id, currency, receipt } = result.data;

      const options = {
          key: "rzp_test_W8qX9aPNqnIMwk", // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: "Soumya Corp.",
          description: "Test Transaction",
        
          order_id: order_id,
          handler: async function (response) {
              const data = {
                  receipt: receipt,
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
              };

              const result = await AxiosInstance.post(BASEURL+"/payment/success", data);
              setModal(false)
              setButton(true)
              alert(result.data.msg);
              
              
            
          },
          prefill: {
              name: "PLEY",
              email: "pley.win@gmail.com",
              contact: "9384958395",
          },
          notes: {
              address: "PLEY Corporate Office",
          },
          theme: {
              color: "#61dafb",
          },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
}
function loadScript(src) {
  try {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });

}
  catch (error) {
   Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
   } 
  
}


  return (
    <>
        {slot.bookedBy ? <button  type="button" class="btn-modal text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br  focus:outline-non  font-medium rounded-lg text-sm py-2  text-center me-2 mt-1 mb-2 ">{slot?.slot?.name}</button>: <button onClick={toggleModal} type="button" class="btn-modal text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-700 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2  text-center me-2 mt-1 mb-2 ">{slot?.slot?.name}</button>}
      {modal &&(
            <div className='modaal'>
            <div className='overlay' onClick={toggleModal}></div>
             <div className='modal-content '>
                  <div className='fl text-left mb-2'> <div className="font-xl">Date:</div> {slot?.date}</div>
                  <div className='fl text-left mb-2'> <div className="font-xl">Court Name:</div> {slot?.courts[0]?.businessName}</div>
                  <div className='fl text-left mb-2'> <div className="font-xl">Time:</div> {slot?.slot?.name}</div>
                  <div className='fl text-left mb-2'> <div className="font-xl">Location:</div> {slot?.courts[0]?.location}</div>
                  <div className='fl text-left mb-2'> <div className="font-xl">Cost:</div> {slot?.cost}</div>


                  <button className='close-modal px-3' onClick={toggleModal}>X</button>
                  
                   <div className='flex justify-center '>
                   <button type="button"  class="w-[50px]  justify-center items-center text-white bg-gradient-to-r from-green-800 via-green-800 to-green-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-700 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2  text-center me-2 mt-1 mb-2 " onClick={displayRazorpay}>Book</button>

                   </div>
               </div>


          </div>
      )}
        
    </>
  )
}

export default Button