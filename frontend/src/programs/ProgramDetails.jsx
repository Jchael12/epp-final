import { useLocation } from "react-router-dom";

function ProgramDetails() {
  const location = useLocation();
  const program = location.state?.program || {};

  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <section>
        <img
          className="w-[500px] mt-28"
          src={program.image_url}
          alt={program.title}
        />
        <div className="bg-red-600 text-justify flex flex-col items-center justify-center mt-5 p-5 text-white rounded-md border-t-2 border-amber-300">
          <h1 className="text-3xl text-amber-300">{program.title}</h1>
          <p className="p-12">{program.description}</p>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetails;
