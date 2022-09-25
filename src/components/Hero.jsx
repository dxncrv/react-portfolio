import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-start gap-12 items-center"
    >
      <Navbar />
      <h1 className="lg:w-3/5 transition-all duration-300 text-7xl my-20 sm:text-9xl sm:mx-16">
        I s
        <span className="transition-color duration-500 hover:text-red-200">
          olve
        </span>
        <br className="sm:block hidden " /> questions
      </h1>
      <p className="xl:w-3/5 font-[Nunito] text-[1rem] md:text-[1.25rem] mx-12">
        I'm passionate about solving complex problems, and I do it by
        <br className="sm:block hidden" />
        fragmenting, analyzing, learning, hypothesizing, prototyping, testing,
        and iterating.
      </p>
    </section>
  );
};

export default Hero;
