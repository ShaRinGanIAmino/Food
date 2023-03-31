import { Left, Log_form } from '../components';
const Log_in = () => {
  return (
    <div className="flex justify-center items-center  w-screen h-full">
      <div className=" w-[50%] h-full smm:border-r-2 border-r-0 border-line smm:block hidden">
        <Left />
      </div>
      <div className="smm:w-[50%] w-[100%] h-full ">
        <Log_form />
      </div>
    </div>
  );
};

export default Log_in;
