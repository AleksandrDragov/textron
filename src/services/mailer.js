import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { configDotenv } from 'dotenv';

const sendEmail = (form) => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;
  
  return emailjs.sendForm('REACT_APP_SERVICE_ID', REACT_APP_TEMPLATE_ID, form, REACT_APP_PUBLIC_KEY)
  .then(
      () => {
          toast.success("send", {
              position: "top-center",
            });
        },
        (error) => {
          console.log(REACT_APP_PUBLIC_KEY, REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID)
            toast.error("not send ", {
            position:"top-center",
            
          });
      }
    );
};

export default sendEmail;



