import logo from "../assets/earist-logo-1.png";

const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 text-blue-400 text-4xl animate-pulse flex items-center justify-center">
        <img src={logo} className="rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
