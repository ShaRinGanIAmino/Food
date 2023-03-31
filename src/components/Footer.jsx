import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className=" w-screen flex items-center h-full">
      <Link
        to="/Home"
        className="flex  justify-center items-center w-[50%]  h-full border-r-2 border-line text-primary hover:bg-line hover:text-white transition transform">
        <div className=" font-poppins  sm:text-[14px] text-[10px] font-medium ">
          Home
        </div>
      </Link>
      <Link
        to="/Contact_us"
        className="flex justify-center items-center w-[50%] h-full text-primary hover:bg-line hover:text-white transition transform">
        <div className=" font-poppins  sm:text-[14px] text-[10px] font-medium  ">
          Learn more
        </div>
      </Link>
    </nav>
  );
};

export default Footer;
