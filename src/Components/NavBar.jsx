import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [asideBar, setAsideBar] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const closeLogIn = () => {
    setLogIn(false);
  };
  const bodyTag = document.querySelector("body");
  if (logIn || asideBar) {
    bodyTag.style.overflow = "hidden";
  } else {
    bodyTag.style.overflow = "auto";
  }

  return (
    <div>
      {logIn && <LogIn closeLogIn={closeLogIn} />}
      <header className="header relative">
        <div className="w-1/3 h-full flex items-center justify-start gap-16  md:w-1/2">
          <button
            className="text-xl md:hidden"
            onClick={() => setAsideBar((prevState) => !prevState)}
          >
            <MdMenu />
          </button>
          <Link className="navBtn hidden md:block" to="characters">
            characters
          </Link>
          <Link className="navBtn hidden md:block" to="episodes">
            episodes
          </Link>
        </div>
        <div className="w-3/5 h-full flex items-center justify-center  md:order-first md:w-1/6">
          <img
            className="w-28 h-16"
            src="https://rick-morty-app-manish.vercel.app/static/media/logo.17a7b2f2883b56b71238.jpg"
            alt="Rick & Morty Logo"
          />
        </div>
        <div className="w-1/3 h-full flex items-center justify-end">
          <button className="navBtn" onClick={() => setLogIn(true)}>
            logIn
          </button>
        </div>
      </header>
      <div className={asideBar ? "asideBar" : "asideBarHide"}>
        <div className="w-4/5">
          <button
            className="absolute right-5 text-slate-400 top-4 text-2xl"
            onClick={() => setAsideBar((prevState) => !prevState)}
          >
            <RxCross2 />
          </button>
          <Link className="navBtn w-full block text-center" to="characters">
            characters
          </Link>
          <Link className="navBtn w-full block text-center" to="episodes">
            episodes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
