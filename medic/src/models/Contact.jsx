import React from "react";

export default function Contact({closeForm}) {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className="popup-form mt-12 absolute text-black ">
        <form className="w-80 lg:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center">Book Now</h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="first name."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
            />
          </div>
          <div className="flex space-x-5">
            <button className="px-5 py-3 bg-brightColor hover:bg-hoverColor transition duration-200 ease-in-out rounded-lg text-xl lg:text-lg text-white">Book Now</button>
            <button className="bg-backGroundColor text-white text-xl lg:text-lg px-5 py-3 rounded-lg active:bg-hoverColor" onClick={closeForm}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
