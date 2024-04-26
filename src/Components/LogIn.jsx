import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const LogIn = ({ closeLogIn }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const removeRef = useRef();
  const closeModel = (e) => {
    if (removeRef.current === e.target) {
      closeLogIn();
    }
  };
  return (
    <div
      ref={removeRef}
      onClick={closeModel}
      className="bg-[#04080ccb] w-full h-screen pt-20 grid place-items-center absolute z-[10000] overflow-hidden"
    >
      <div className="bg-white w-[250px] md:w-1/2 max-w-md py-3 md:py-5 px-5 shadow-xl ring-1 ring-gray-900/5 md:px-10 rounded-md  ">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-black text-start">
              Sign in
            </h1>
            <button
              className="text-gray-400 text-2xl hover:bg-gray-200 hover:text-gray-400 rounded-full font-bold"
              onClick={closeLogIn}
            >
              <RxCross2 />
            </button>
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="relative mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer w-full border rounded border-gray-800 px-0 py-3 placeholder:text-white focus:border-gray-500 focus:outline-blue-700"
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 left-3 capitalize origin-left -translate-y-1/2 transform text-sm text-blue-600 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:bg-white peer-focus:p-2 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  user name *
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer peer w-full border border-gray-300 px-0 py-3 rounded placeholder:text-transparent focus:border-blue-600 focus:outline-blue-700"
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-3  capitalize origin-left -translate-y-1/2 transform text-sm text-blue-600 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1  peer-focus:p-2 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white"
                >
                  Password *
                </label>
              </div>
              <div className="my-6 flex justify-end">
                <button
                  type="submit"
                  className="w-28 rounded-md bg-blue-700 px-2 py-2 text-white text-sm uppercase font-semibold"
                >
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
