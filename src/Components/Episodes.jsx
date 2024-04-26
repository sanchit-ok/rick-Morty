import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Episodes = () => {
  const [getData, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://rickandmortyapi.com/api/episode";
        const response = await fetch(url);
        const data = await response.json();

        let result = await Promise.all(
          data.results.map(async (item) => {
            const characters = await Promise.all(
              item.characters.map(async (characterUrl) => {
                const characterResponse = await fetch(characterUrl);
                const characterData = await characterResponse.json();
                return characterData.image;
              })
            );
            return { ...item, cImages: characters };
          })
        );
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={filter ? "asideBar" : "asideBarHide"}></div>
      <div
        id="btnWrapper"
        className="w-full flex justify-center py-4 md:hidden bg-black"
      >
        <button
          className="bg-blue-600 text-white w-[90%] capitalize"
          onClick={() => setFilter((prevState) => !prevState)}
        >
          filter
        </button>
      </div>
      <div className="bg-black h-full flex md:flex">
        <aside className="bg-white md:w-[30%] md:h-full">
          <RxCross2 />
        </aside>
        <main className="bg-[#181818] w-full h-full px-5 flex flex-wrap justify-center sm:gap-5 md:w-[75%] md:h-full">
          {getData.map((episode, index) => (
            <div
              className="bg-white w-[300px] my-4 h-auto pb-5 rounded-md lg:w-[30%]"
              key={index}
            >
              <img
                className="h-[250px] w-full object-cover"
                src="https://rick-morty-app-manish.vercel.app/static/media/episode3.577f8367121a8c60d1f9.jpg"
                alt=""
              />
              <h1 className="text-gray-600 px-4 pt-4">{episode.episode}</h1>
              <h1 className="text-3xl font-normal px-4 pt-3">{episode.name}</h1>
              <p className="px-4 text-gray-800">
                Air Date : {episode.air_date}
              </p>
              <p className="px-4 capitalize">Characters</p>
              <div className="flex flex-wrap h-auto w-full px-8">
                {episode.cImages.map((image, innerIndex) => (
                  <div
                    className="rounded-full w-10 h-10 border -ml-4 border-black overflow-hidden"
                    key={innerIndex}
                  >
                    <img
                      className="object-cover max-w-full max-h-full "
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <footer className="bg-white w-full h-16 mb-3 rounded-md"></footer>
        </main>
      </div>
    </>
  );
};

export default Episodes;
