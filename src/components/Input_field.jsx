const Input_field = ({ Title, Name, value, onchange }) => {
  return (
    <div className="flex flex-col justify-start gap-2 smm:w-[40%] w-[60%]">
      <p className=" font-mont text-[14px] tracking-wide font-medium text-primary">
        {Title}
      </p>
      <input
        onChange={onchange}
        value={value}
        name={Name}
        type="text"
        className="border-2 border-line bg-transparent p-1 rounded-sm outline-0"
      />
    </div>
  );
};

export default Input_field;
