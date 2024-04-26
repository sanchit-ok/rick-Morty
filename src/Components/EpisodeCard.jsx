import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EpisodesCard = () => {
  const [getData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://rickandmortyapi.com/api/episode";
        const response = await fetch(url);
        const data = await response.json();
        let result = await Promise.all(
          data.results.map(async (item) => {
            let cImages = await Promise.all(
              item.characters.map(async (characterUrl) => {
                const characterResponse = await fetch(characterUrl);
                const characterData = await characterResponse.json();
                return characterData.image;
              })
            );
            return { ...item, cImages };
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
    <main className="bg-[#181818] p-4 flex flex-wrap justify-center sm:gap-4 md:gap-4 lg:gap-4 lg:justify-center lg:py-3">
      <div className="w-full font-semibold  flex justify-between items-center">
        <h1 className="text-white font-semibold text-4xl capitalize">
          episodes
        </h1>
        <Link
          to="episodes"
          className="underline after:content-['View-All'] md:after:content-['View-All-Characters'] text-white"
        ></Link>
      </div>
      {getData.slice(0, 4).map((episode, index) => (
        <div
          className="bg-white my-4 w-[230px] rounded-md lg:w-[23%] overflow-hidden"
          key={index}
        >
          <img
            className="h-[300px] w-full object-cover"
            src="	https://rick-morty-app-manish.vercel.app/static/media/episode3.577f8367121a8c60d1f9.jpg"
            alt=""
          />
          <div className="px-5 py-4">
            <h1>{episode.episode}</h1>
          </div>
          <div className="px-4">
            <h1 className="font-normal capitalize text-2xl">{episode.name}</h1>
            <p>Air Date : {episode.air_date}</p>
            <div className="w-full flex flex-wrap p-2">
              {episode.cImages.map((innerItem, innerIndex) => (
                <div
                  className="overflow-hidden rounded-full -ml-3 w-12 h-12 "
                  key={innerIndex}
                >
                  <img className="object-cover" src={innerItem} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default EpisodesCard;
