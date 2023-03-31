import { Logo } from '../assets';

const Left = () => {
  return (
    <div className="flex flex-col gap-16 mt-44 ml-20">
      <div className="flex smm:gap-10 gap-4 items-center justify-start flex-wrap">
        <p className=" font-mont font-extrabold smm:text-[60px] text-[30px] text-primary tracking-wider">
          BON PLAN
        </p>
        <img
          src={Logo}
          alt="Logo"
          className="smm:w-[60px] smm:h-[60px] object-contain h-[30px] w-[30px]"
        />
      </div>
      <p className=" font-poppins font-normal text-primary text-[14px] w-[70%]">
        Lorem ipsum dolor sit amet consectetur. Tempus laoreet viverra vulputate
        consectetur nulla tincidunt pellentesque egestas. Egestas risus diam
        quis mauris. Arcu quam orci pellentesque nulla netus neque sit
        vestibulum. Sed pharetra dolor purus amet neque libero in dictum nunc.
      </p>
    </div>
  );
};

export default Left;
