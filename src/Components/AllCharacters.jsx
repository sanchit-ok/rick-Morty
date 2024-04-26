import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
const AllCharacters = () => {
  const [cardData, setCardData] = useState();
  const [filter, setFilter] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [optName, setOptName] = useState();
  const [status, setStatus] = useState([]);
  let [species, setSpecies] = useState([]);
  let [gender, setGender] = useState([]);
  let [Type, setType] = useState([]);
  let [filterSpecies, setFilterSpecies] = useState("");
  let [filterType, setFilterType] = useState("");
  let [filterGender, setFilterGender] = useState("");

  let [count, setCount] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://rickandmortyapi.com/api/character/?name=" +
        filterName +
        "&status=" +
        filterStatus +
        "&species=" +
        filterSpecies +
        "&type=" +
        filterType +
        "&gender=" +
        filterGender;
      const fetchData = await fetch(url);
      const characterData = await fetchData.json();
      setCardData(characterData.results);
      if (count == 0) {
        setOptName(characterData.results);
        setCount(++count);
        console.log(count);
      }
    };
    getData();
  }, [filterName, filterStatus, filterSpecies, filterType, filterGender]);
  optName &&
    optName.map((items) => {
      if (!status.includes(items.status)) {
        setStatus(status.push(items.status));
      }
      if (!species.includes(items.species)) {
        setSpecies(species.push(items.species));
      }
      if (!Type.includes(items.type)) {
        setType(Type.push(items.type));
      }
      if (!gender.includes(items.gender)) {
        setGender(gender.push(items.gender));
      }
    });
  return (
    <>
      <div className={filter ? "asideBar" : "asideBarHide"}>
        <button
          className="bg-white text-gray-500 text-3xl absolute top-3 right-5"
          onClick={() => setFilter((prevState) => !prevState)}
        >
          <RxCross2 />
        </button>
        <div className=" flex flex-col items-center">
          <select
            size="md"
            label="Select Version"
            className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
            onChange={(e) => setFilterName(e.target.value)}
          >
            <option value="" className="h-1/2">
              All
            </option>
            {optName &&
              optName.map((items, index) => (
                <option value={items.name} key={index}>
                  {items.name}
                </option>
              ))}
          </select>
          <select
            size="md"
            label="Select Version"
            className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            {status &&
              status.map((items, index) => (
                <option value={items} key={index}>
                  {items}
                </option>
              ))}
          </select>
          <select
            className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
            onChange={(e) => {
              setFilterSpecies(e.target.value);
            }}
          >
            <option value={""}>All</option>

            {species &&
              species.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>
          <select
            className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
          >
            <option value={""}>All</option>

            {Type &&
              Type.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>
          <select
            className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
            onChange={(e) => {
              setFilterGender(e.target.value);
            }}
          >
            <option value={""}>All</option>

            {gender &&
              gender.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      </div>
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
        <aside className="hidden md:block bg-white md:w-[30%] h-full mt-4 md:h-full">
          <div
            className="h-[600vh] w-full flex flex-col items-center my-5
          "
          >
            <select
              size="md"
              label="Select Version"
              className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
              onChange={(e) => setFilterName(e.target.value)}
            >
              <option value="">All</option>
              {optName &&
                optName.map((items, index) => (
                  <option value={items.name} key={index}>
                    {items.name}
                  </option>
                ))}
            </select>
            <select
              size="md"
              label="Select Version"
              className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All</option>
              {status &&
                status.map((items, index) => (
                  <option value={items} key={index}>
                    {items}
                  </option>
                ))}
            </select>
            <select
              className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
              onChange={(e) => {
                setFilterSpecies(e.target.value);
              }}
            >
              <option value={""}>All</option>

              {species &&
                species.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
            </select>
            <select
              className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
              onChange={(e) => {
                setFilterType(e.target.value);
              }}
            >
              <option value={""}>All</option>

              {Type &&
                Type.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
            </select>
            <select
              className="appearance-none focus:outline-none w-[80%] h-12 border border-black px-2 text-md my-2"
              onChange={(e) => {
                setFilterGender(e.target.value);
              }}
            >
              <option value={""}>All</option>

              {gender &&
                gender.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </aside>
        <main className="bg-[#181818] w-full h-full flex flex-wrap justify-center sm:gap-5 md:w-[75%] md:h-full">
          {cardData &&
            cardData.map((item, index) => (
              <div className="bg-white my-4 rounded-md lg:w-[30%]" key={index}>
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
                  <p className="px-4 w-[280px] font-normal capitalize">
                    Type : {item.type}
                  </p>
                  <a
                    href=""
                    className="text-blue-800 px-4  capitalize  block pt-5 underline"
                  >
                    learn more
                  </a>
                </div>
              </div>
            ))}
        </main>
      </div>
    </>
  );
};

export default AllCharacters;
