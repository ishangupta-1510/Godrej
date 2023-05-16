import React from "react";

function ContactUs() {
  return (
    <div
      className="flex  flex-col items-center my-16 2xl:my-60 w-full"
      id="ContactUs"
    >
      <div className="w-2/3 flex flex-col gap-12 max-md:w-full max-md:px-4">
        <div className="capitalize text-3xl font-bold flex justify-start items-center">
          Contact us
        </div>
        <form className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col">
          <div className="flex flex-col gap-4">
            <div>Name</div>
            <input
              className="bg-[#F0F0F0] border-white p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            />
          </div>
          <div className="flex  flex-col gap-4">
            <div>Email ID</div>
            <input
              className="bg-[#F0F0F0] border-white p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>Country</div>
            <input
              className="bg-[#F0F0F0] border-white p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>City</div>
            <input
              className="bg-[#F0F0F0] border-white p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>Mobile Number</div>
            <div className="flex gap-6">
              <select
                className="bg-[#F0F0F0] border-white p-3 w-[20%] rounded-lg max-md:w-[30%]"
                name=""
                id=""
              >
                <option value="+91">+91</option>
              </select>
              <input
                className="bg-[#F0F0F0] border-white p-3 w-[60%] rounded-lg max-md:w-[70%]"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="capitalize">Book your visit</div>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <input
                  name="book"
                  id="yes"
                  type="radio"
                  className="bg-[#F0F0F0] text-orange-400 outline-none focus:ring-transparent rounded-full border-white p-3"
                />
                <label>Yes</label>
              </div>
              <div className="flex gap-2">
                <input
                  name="book"
                  id="no"
                  type="radio"
                  className="bg-[#F0F0F0] text-orange-400 outline-none focus:ring-transparent rounded-full border-white p-3"
                />
                <label>No</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-white gap-4">
            <div className="capitalize">Date for visit</div>
            <input
              className="bg-[#F0F0F0] border-white p-3 w-[90%] rounded-lg max-md:w-full"
              type="date"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="capitalize">time for visit</div>
            <input
              className="bg-[#F0F0F0] border-white p-3 w-[90%] rounded-lg max-md:w-full"
              type="time"
            />
          </div>
        </form>
        <div className="w-full flex gap-3">
          <input id="wa" type="checkbox" />
          <label for="wa">
            Yes, I would like to receive updates & promotions from Godrej
            Properties Limited.
          </label>
        </div>
        <div className="flex justify-start gap-4">
          <img src="/wa.png" alt="" />
          <a className="text-[#2289b9] underline">Contact us on WhatsApp</a>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="w-fit text-[#f07f22] border-2 border-solid border-[#f07f22] py-2 px-6 rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
