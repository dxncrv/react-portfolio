import close from "../assets/Close.svg";
import Articles from "./Articles";

const Modal = ({ projectID }) => {
  //function to close modal
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
    const videos = document.getElementsByClassName("demo");
    for (let i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  });

  return (
    <div
      id="modal"
      className="bg-[#000000a0] fixed top-0 left-0 w-full h-full overflow-auto hidden flex-wrap justify-center lg:items-center z-50"
    >
      <img
        onClick={closeModal}
        className="z-50 fixed h-8 w-8 top-8 right-8 cursor-pointer"
        src={close}
        alt="close"
      />
      <Articles ID={projectID} />
    </div>
  );
};

export default Modal;
