import data from "../resumeData";
import swirl from "../assets/@.svg";
import insignias from "../assets/Insignias.png";
import download from "../assets/logos/download.svg";
import resume from "../assets/Aash_Resume.pdf";
import { useState } from "react";

const Resume = () => {
  const [visible, setVisible] = useState(3);

  const loadHandler = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const hideLoadButton = visible >= data.length;

  const addOpacity = (e) => {
    e = document.querySelectorAll(".rf");
    e.forEach((element) => {
      if (element.classList.contains("focus")) {
        element.classList.remove("focus");
      } else {
        element.classList.add("focus");
      }
    });
  };

  return (
    <section
      className="flex flex-col items-center w-[100vw] h-[100%] bg-[#151515] pb-4"
      id="resume"
    >
      <h1 className="sm:px-4 pt-4 text-left w-[80vw] lg:w-3/4">Resume</h1>
      <div className="sm:pt-16 pt-16 items-center w-[80vw] lg:w-3/4">
        <div className="sm:flex sm:h-[10rem] w-[100%] justify-between items-center">
          <img className="sm:h-[100%] sm:p-0 px-16" src={swirl} />
          <div className="flex flex-col w-full sm:py-6 sm:px-16 justify-center">
            <h1 className="sm:text-[2rem] text-[1.5rem] sm:p-0 p-4 font-[Saira] uppercase font-black sm:text-left">
              Aashay Mehta
            </h1>
            <h2 className="text-[1.25rem] text-[honeydew] font-[Saira] font-medium sm:text-left text-center hover:opacity-100">
              Product [Manager, Designer, Developer]
            </h2>
          </div>
          <a
            className="h-12 w-12 tt mx-16 md:block hidden"
            data-tt="Download"
            href={resume}
            download
          >
            <img
              className="transition-all filter hover:brightness-200 cursor-pointer"
              src={download}
            />
          </a>
        </div>
        <div className="sm:flex pt-16 gap-16">
          <div className="sm:w-[35%]">
            <h1 className="w-[100%] sm:mb-8 text-2xl tracking-wider font-['Saira_Condensed'] font-bold uppercase text-left">
              {data[1].label}
            </h1>
            <div className="rf hover:opacity-100 sm:p-6 w-[100%] py-6 border-[#cacaca] border border-opacity-0 hover:bg-[#0f0f0f] hover:shadow-2xl hover:border-opacity-100 rounded-2xl transition-all">
              <h1 className="text-2xl text-left font-['Saira'] font-semibold">
                {data[1].content[0].h1}
              </h1>
              <p className=" text-left text-[1rem]">{data[1].content[0].p}</p>
              <h2 className=" text-left text-[1rem] text-[#696969]">
                {data[1].content[0].h2}
              </h2>
              <h2 className=" text-left text-[1rem] text-[#696969]">
                {data[1].content[0].term}
              </h2>
              <img className="pt-4" src={insignias} />
            </div>
            <div className="rf hover:opacity-100 sm:p-6 w-[100%] py-6 border-[#cacaca] border border-opacity-0 hover:bg-[#0f0f0f] hover:shadow-2xl hover:border-opacity-100 rounded-2xl transition-all">
              <h1 className="text-2xl text-left font-['Saira'] font-semibold">
                {data[1].content[1].h1}
              </h1>
              <p className=" text-left text-[1rem]">{data[1].content[1].p}</p>
              <h2 className=" text-left text-[1rem] text-[#696969]">
                {data[1].content[1].h2}
              </h2>
              <h2 className=" text-left text-[1rem] text-[#696969]">
                {data[1].content[1].term}
              </h2>
            </div>
            <div className="sm:w-[100%]">
              <h1 className="w-[100%] sm:my-8 text-2xl tracking-wider font-['Saira_Condensed'] font-bold uppercase text-left">
                {data[2].label}
              </h1>
              {data[2].content.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="rf hover:opacity-100 sm:p-6 w-[100%] py-6 border-[#cacaca] border border-opacity-0 hover:bg-[#0f0f0f] hover:shadow-2xl hover:border-opacity-100 rounded-2xl transition-all"
                  >
                    <h1 className="text-2xl text-left font-['Saira'] font-semibold">
                      {i.h1}
                    </h1>
                    <p className=" text-left text-[1rem]">{i.p}</p>
                  </div>
                );
              })}
            </div>
            <div className="sm:w-[100%]">
              <h1 className="w-[100%] sm:my-8 text-2xl tracking-wider font-['Saira_Condensed'] font-bold uppercase text-left">
                {data[3].label}
              </h1>
              <div className="rf hover:opacity-100 sm:p-6 w-[100%] py-6 border-[#cacaca] border border-opacity-0 hover:bg-[#0f0f0f] hover:shadow-2xl hover:border-opacity-100 rounded-2xl transition-all">
                {data[3].content.map((i, index) => {
                  return (
                    <p key={index} className=" text-left text-[1rem]">
                      {i}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="sm:w-[100%]">
              <h1 className="w-[100%] sm:my-8 text-2xl tracking-wider font-['Saira_Condensed'] font-bold uppercase text-left">
                {data[4].label}
              </h1>
              <div className="rf hover:opacity-100 sm:p-6 w-[100%] py-6 border-[#cacaca] border border-opacity-0 hover:bg-[#0f0f0f] hover:shadow-2xl hover:border-opacity-100 rounded-2xl transition-all">
                {data[4].content.map((i, index) => {
                  return (
                    <p key={index} className=" text-left text-[1rem]">
                      {i}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:w-[65%] items-center">
            <h1 className="w-[100%] sm:mb-8 text-2xl tracking-wider font-['Saira_Condensed'] font-bold uppercase text-left">
              {data[0].label}
            </h1>
            {data[0].content.slice(0, visible).map((i) => {
              return (
                <div
                  key={i.h1}
                  className="rf hover:opacity-100 sm:p-6 w-[100%] py-6 border-[#cacaca] border border-opacity-0 hover:bg-[#0f0f0f] hover:shadow-2xl hover:border-opacity-100 rounded-2xl transition-all"
                >
                  <h1 className="text-2xl text-left font-['Saira'] font-semibold">
                    {i.h1}
                  </h1>
                  <h2 className="text-xl py-2 font-['Saira'] font-light text-[#696969]">
                    {i.h2}
                  </h2>
                  {i.p.map((i) => {
                    return (
                      <p key={i} className=" text-left text-[1rem]">
                        {i}
                      </p>
                    );
                  })}
                </div>
              );
            })}
            <button
              onClick={loadHandler}
              className="m-8"
              hidden={hideLoadButton}
            >
              more
            </button>
          </div>
        </div>
      </div>
      <button className="m-8" onClick={addOpacity} hidden={!hideLoadButton}>
        Dim
      </button>
    </section>
  );
};

export default Resume;
