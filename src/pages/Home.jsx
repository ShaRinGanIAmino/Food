import { Hero } from '../assets';
import { Left } from '../components';
const Home = () => {
  return (
    <div className="flex justify-center items-center  w-screen h-full">
      <div className="smm:w-[50%] w-[100%] h-full smm:border-r-2 border-r-0 border-line">
        <Left />
      </div>
      <div className="w-[50%] h-full smm:block hidden">
        <img src={Hero} alt="Food" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Home;
