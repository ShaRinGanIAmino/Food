import Input_field from './Input_field';
import { Link } from 'react-router-dom';

const Log_form = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <Input_field Title="Username" />
      <Input_field Title="Password" />
      <div className="flex flex-col justify-center items-center gap-4">
        <button className=" font-mont font-medium text-[12px] bg-line rounded-sm text-white pl-6 pr-6 pt-2 pb-2 tracking-wide">
          Connect
        </button>
        <Link
          to="/Sign_in"
          className=" font-mont font-normal text-[12px] hover:underline hover:text-primary text-line">
          Dont have an account ? Sign in
        </Link>
      </div>
    </div>
  );
};

export default Log_form;
