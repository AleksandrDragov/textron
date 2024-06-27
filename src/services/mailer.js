import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const sendEmail = (form) => {

  
  return emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID,  process.env.REACT_APP_YOUR_TEMPLATE_ID, form,  process.env.REACT_APP_YOUR_PUBLIC_KEY)
  .then(
      () => {
          toast.success("send", {
              position: "top-center",
            });
        },
        (error) => {
            toast.error("not send", {
            position:"top-center",
          });
      }
    );
};

export default sendEmail;



