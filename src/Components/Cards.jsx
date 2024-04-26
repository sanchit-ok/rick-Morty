import { useEffect, useState } from "react";
const Cards = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    const getData = async () => {
      const url = "https://rickandmortyapi.com/api/character";
      const fetchData = await fetch(url);
      const characterData = await fetchData.json();
      setCardData(characterData.results);
    };
    getData();
  }, []);

  return (
    <div className="bg-[#181818] p-4 flex flex-wrap justify-center sm:gap-4 md:gap-4 lg:gap-4 lg:justify-center lg:py-3">
      {cardData &&
        cardData.slice(0, 4).map((item, index) => (
          <div className="bg-white my-4 rounded-md lg:w-[23%]" key={index}>
            <div className="py-4">
              <h1 className="font-normal px-4 text-xl">{item.name}</h1>
              <span className="px-4">{item.species}</span>
            </div>
            <img
              src={item.image}
              alt=""
              className="h-[250px] w-full object-cover"
            />
            <div className="py-3">
              <p className="px-4 font-normal capitalize">
                Status: {item.status}
              </p>
              <p className="px-4 font-normal capitalize">Type : {item.type}</p>
              <a
                href=""
                className="text-blue-800 px-4  capitalize  block pt-5 underline"
              >
                learn more
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Cards;
