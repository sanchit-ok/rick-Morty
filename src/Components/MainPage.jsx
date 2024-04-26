import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <main className="w-full min-h-full flex flex-col bg-[#181818] items-center text-center text-white">
      <img
        className="w-full h-[30vh] lg:h-[50vh] object-cover"
        src="https://rick-morty-app-manish.vercel.app/static/media/banner.9f438b62ba343f3875bd.jpg"
        alt="Rick & Morty Banner"
      />
      <div className="border border-[#181818] w-[65%] py-5">
        <h1 className="text-2xl font-bold">Rick & Morty App</h1>
        <p className="">
          Here we get all information about Rick & Morty. Find out everything
          about the characters and the episodes.
        </p>
      </div>
      <section className="w-full capitalize px-5 flex items-center justify-between text-white py-3">
        <h1 className="text-4xl md:text-4xl font-medium">characters</h1>
        <Link
          to="characters"
          className="underline after:content-['View-All'] md:after:content-['View-All-Characters']"
        ></Link>
      </section>
    </main>
  );
};

export default MainPage;
