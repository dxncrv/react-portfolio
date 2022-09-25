import list from "../articleData";

const Articles = ({ ID }) => {
  const arrArticles = list
    .filter((item) => item.id == ID)
    .map((i) => i.articles)
    .flat();

  return (
    <>
      {arrArticles.map((i, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center bg-[#0f0f0f] md:mx-32 lg:w-[80rem] mt-16 mb-16 pb-8 rounded-2xl border border-[#696969] overflow-hidden"
          >
            <img
              className="w-[100%] xl:h-[80vh] pb-4 object-cover"
              src={i.cover}
            />
            <h1 className="w-full font-[Nunito] text-2xl text-left xl:px-32 md:px-12 p-8">
              {i.title}
            </h1>
            {i.content.map((i, index) => {
              if (i.type == "img") {
                return (
                  <img
                    className={`pt-4 pb-8 ${i.size}`}
                    key={index}
                    src={i.img}
                  />
                );
              } else if (i.type == "vid") {
                return (
                  <video
                    key={index}
                    className="w-[100%] pt-4 pb-8 demo"
                    controls
                    src={i.vid}
                  />
                );
              } else if (i.type == "vidauto") {
                return (
                  <video
                    key={index}
                    className="w-full md:px-16 xl:px-40 pt-4 pb-8"
                    autoPlay
                    muted
                    loop
                    src={i.vid}
                  />
                );
              } else if (i.type == "h1") {
                return (
                  <h1
                    className="w-full font-[Nunito] text-2xl text-left xl:px-32 md:px-12 p-8"
                    key={index}
                  >
                    {i.h1}
                  </h1>
                );
              } else if (i.type == "h2") {
                return (
                  <h1
                    className="font-[Nunito] text-xl text-center xl:px-32 md:px-12 p-8"
                    key={index}
                  >
                    {i.h2}
                  </h1>
                );
              } else if (i.type == "p") {
                return (
                  <p
                    className="w-full font-[Nunito] text-[1.15rem] text-left xl:px-40 md:px-16 pb-4 pl-8 pr-12"
                    key={index}
                  >
                    {i.p}
                  </p>
                );
              } else if (i.type == "ol") {
                return (
                  <ol className="w-full pb-4" key={index}>
                    {i.ol.map((j, index) => (
                      <li
                        className="font-[Nunito] text-[#cacaca] text-[1.15rem] text-left xl:px-40 md:px-16 pl-8 pr-12"
                        key={index}
                      >
                        {j}
                      </li>
                    ))}
                  </ol>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};

export default Articles;
