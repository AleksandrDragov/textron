import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sendEmail = (form) => {
  const { REACT_APP_YOUR_SERVICE_ID, REACT_APP_YOUR_TEMPLATE_ID, REACT_APP_YOUR_PUBLIC_KEY } = process.env;


  return emailjs.sendForm('textronSender_1273871', 'template_hn61si5', form, 'TUnl3P7C8CsqQpe-4')
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



