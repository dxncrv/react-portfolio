import Modal from "./Modal";
import list, { tooltipDict } from "../projectData";
import { useState, useEffect } from "react";
import view from "../assets/View.svg";

const Projects = () => {
  // Declare state variables
  const arrTags = list.map((i) => {
    return i.tags;
  });
  const [tags] = useState([...new Set(arrTags.flat())]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(list);
  }, [list]);

  const [id, setId] = useState(0);
  const [visible, setVisible] = useState(3);

  const loadHandler = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  // filter function
  const filter = (e) => {
    const filterData = list.filter((item) => item.tags.includes(e));
    setCards(filterData);
  };

  // function to open modal at scroll 0
  const openModal = (id) => {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.getElementById("modal").scrollTop = 0;
    setId(id);
  };

  // hide load button if all cards are visible
  const hideLoadButton = visible >= cards.length;

  return (
    <section
      id="work"
      className="flex flex-col items-center w-[100vw] h-[100%] bg-[#151515] pb-4"
    >
      <h1 className="w-[80vw] lg:w-3/4 sm:px-4 pt-4 text-left">Projects</h1>
      <div className="w-[80vw] lg:w-3/4 sm:px-4 py-4 gap-6 flex justify-center flex-wrap">
        <button
          className="tt"
          data-tt="All Projects"
          onClick={() => setCards(list)}
        >
          All
        </button>
        {tags.sort().map((tag) => {
          return (
            <button
              className="tt"
              data-tt={tooltipDict[tag]}
              onClick={() => {
                filter(tag);
              }}
              key={tag}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-[80vw] lg:w-3/4 sm:p-4 py-6 gap-12">
        {cards.slice(0, visible).map((i) => (
          <div
            key={i.id}
            className="flex flex-col justify-between bg-[#0f0f0f] border border-[#696969] h-[100%] rounded-2xl shadow-2xl relative"
          >
            <img
              className="w-[100%] object-cover rounded-t-2xl"
              src={i.cover}
            />
            <h1 className="text-left font-[Saira] font-semibold text-2xl px-6 pt-4">
              {i.title}
            </h1>
            <p className="text-[1rem] font-['Saira'] font-light text-left px-6 py-4">
              {i.description}
            </p>
            <div className="border-t border-[#696969] flex gap-2 h-14 px-6 py-4 items-center justify-end">
              <img
                onClick={() => openModal(i.id)}
                alt="view"
                className="max-h-6 transition-all filter hover:brightness-200 cursor-pointer"
                src={view}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        id="Load"
        className="m-4"
        onClick={loadHandler}
        hidden={hideLoadButton}
      >
        {cards.length - visible} more
      </button>
      <Modal projectID={id} />
    </section>
  );
};

export default Projects;
