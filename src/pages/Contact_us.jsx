import { Input_field, Input_field_big } from '../components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact_us = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_bxweoj9',
        'template_m6x5z3n',
        form.current,
        's4d6cnwvxGRhHYXiy'
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
  };

  const notify = () =>
    toast.success('Email sent successfully!', {
      position: 'top-center',
      theme: 'light',
      autoClose: 3000,
    });

  const HandleClick = () => {
    setName('');
    setEmail('');
    setMessage('');
    notify();
  };

  return (
    <div className="flex justify-center items-center  w-screen h-full">
      <div className="smm:w-[50%] w-[100%] h-full smm:border-r-2 border-r-0 border-line">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 items-center justify-center h-full">
          <p className="font-mont text-[18px] tracking-wider font-medium text-primary">
            How can we help ?
          </p>
          <Input_field
            Title="Name"
            Name="from_user"
            value={name}
            onchange={(e) => setName(e.target.value)}
          />
          <Input_field
            Title="Email"
            Name="user_email"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
          <Input_field_big
            Title="Message"
            Name="message"
            value={message}
            onchange={(e) => setMessage(e.target.value)}
          />
          <div className="flex flex-col justify-center items-center gap-4">
            <button
              onClick={HandleClick}
              value="Send"
              type="submit"
              className=" font-mont font-medium text-[12px] bg-line rounded-sm text-white pl-10 pr-10 pt-2 pb-2 tracking-wide">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="w-[50%] h-full smm:block hidden"></div>
    </div>
  );
};

export default Contact_us;
