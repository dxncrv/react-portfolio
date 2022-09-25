import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-around items-center w-full bg-[#151515]"
    >
      <h1 className="w-[80vw] lg:w-3/4 pt-4 sm:px-4 text-left">Contact</h1>
      <div className="w-[80vw] lg:w-3/4 sm:px-4 py-4 gap-6 flex justify-center flex-wrap">
        <button>
          <a href="https://www.linkedin.com/in/dxncrv/">LinkedIn</a>
        </button>
        <button>
          <a href="mailto:doncorve@gmail.com">E-mail</a>
        </button>
        <button>
          <a href="https://github.com/dxncrv">GitHub</a>
        </button>
      </div>
      <div className=" w-4 h-[1px] bg-[#696969] my-4" />
      <p className="p-4 pb-8 font-[nunito] text-[1rem]">
        Thank you for visiting <br /> © 2022
      </p>
    </section>
  );
};

export default Contact;
