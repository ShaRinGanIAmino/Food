import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className=" w-screen flex items-center h-full">
      <Link
        to="/Restaurants"
        className="flex sm:justify-start justify-center items-center w-[25%]  h-full border-r-2 border-line text-primary hover:bg-line hover:text-white transition transform">
        <div className=" font-poppins sm:ml-6 ml-0  sm:text-[14px] text-[10px] font-medium ">
          Restaurants
        </div>
      </Link>
      <Link
        to="/Coffee_shop"
        className="flex sm:justify-start justify-center items-center w-[25%] h-full border-r-2 border-line  text-primary hover:bg-line hover:text-white transition transform">
        <div className=" font-poppins sm:ml-6 ml-0 sm:text-[14px] text-[10px] font-medium  ">
          Coffee Shops
        </div>
      </Link>
      <Link
        to="/Sign_in"
        className="flex sm:justify-start justify-center items-center w-[25%] h-full border-r-2 border-line  text-primary hover:bg-line hover:text-white transition transform">
        <div className=" font-poppins sm:ml-6 ml-0   sm:text-[14px] text-[10px] font-medium  ">
          Sign in
        </div>
      </Link>
      <Link
        to="/Log_in"
        className="flex sm:justify-start justify-center items-center w-[25%] h-full  text-primary hover:bg-line hover:text-white transition transform">
        <div className=" font-poppins sm:ml-6 ml-0  sm:text-[14px] text-[10px] font-medium  ">
          Log in
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
