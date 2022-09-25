import persona from "../assets/PersonaPNG.png";
import photo from "../assets/Photo.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-around items-center w-full min-h-screen bg-[#151515]"
    >
      <h1 className="w-[80vw] lg:w-3/4 pt-4 sm:px-4 text-left">About</h1>
      <div className="h-full flex flex-col sm:flex-row justify-between rounded-2xl m-8 md:mb-10 md:mx-12 lg:mb-12">
        <img
          className="md:max-w-[35%] xl:max-w-[50%] sm:h-auto object-cover object-top md:object-left xl:mr-16"
          src={persona}
        />
        <div className="flex relative items-center flex-col justify-end sm:h-full border border-[#cacaca] rounded-3xl">
          <img
            className="absolute top-[-6rem] xl:top-[-8rem] h-36 w-36 xl:h-40 xl:w-40 rounded-3xl shadow-lg"
            src={photo}
          />
          <h1 className="font-['Nunito'] sm:pt-16 pt-16 text-2xl">
            Hi, I'm Aashay Mehta
          </h1>
          <p className="font-['Nunito'] text-left sm:px-16 sm:pt-8 sm:pb-16 p-6 sm:max-w-2xl sm:text-xl text-[0.95rem]">
            I'm a multi-disciplinary Designer & Developer who specializes in
            digital products, such as apps and games. I live in Vancouver,
            Canada.
            <br />
            <br />
            I'm also an agile scrum master who loves to organize, prioritize and
            solve obstacles; Loves creating a team workspace, and facilitating a
            sharedbrain environment for concieving ideas .. even remotely.
            <br />
            <br />
            My happy place is being involved in building systems that foster
            positive consequences, goal-oriented productivity, and good behavior
            change in a fun way. I'm a keen believer of cultural inclusivity,
            world citizenship and spiritual awareness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
