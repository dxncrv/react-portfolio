import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav id="nav">
      <ul className="flex justify-center items-center gap-8">
        <li className="sm:block hidden">
          <a href="#work">
            <h1 className="transition-full ease-in-out duration-300 opacity-10 hover:opacity-100 font-['Saira'] font-bold uppercase text-[1rem] ">
              work
            </h1>
          </a>
        </li>
        <li className="sm:block hidden">
          <a href="#resume">
            <h1 className="transition-full ease-in-out duration-300 opacity-10 hover:opacity-100 font-['Saira'] font-bold uppercase text-[1rem] ">
              resume
            </h1>
          </a>
        </li>
        <li>
          <img className="h-[75px] mx-4" src={logo} />
        </li>
        <li className="sm:block hidden">
          <a href="#about">
            <h1 className="transition-full ease-in-out duration-300 opacity-10 hover:opacity-100 font-['Saira'] font-bold uppercase text-[1rem] ">
              about
            </h1>
          </a>
        </li>
        <li className="sm:block hidden">
          <a href="#contact">
            <h1 className="transition-full ease-in-out duration-300 opacity-10 hover:opacity-100 font-['Saira'] font-bold uppercase text-[1rem] ">
              contact
            </h1>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
