import React from "react";

const ContactUs = () => {
  return (
    <div id="ContactUs" className="flex flex-col items-center my-16 w-full">
      <div className="w-2/3 flex flex-col gap-12 max-md:w-full max-md:px-4">
        <div className="capitalize text-3xl font-bold flex justify-start items-center">
          Contact us
        </div>
        <form className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col">
          <div className="flex flex-col gap-4">
            <div>Name</div>
            <input
              className="bg-[#F0F0F0] outline-none border-none p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>Email ID</div>
            <input
              className="bg-[#F0F0F0] outline-none border-none p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>Mobile Number</div>
            <div className="flex gap-6">
              <select
                className="bg-[#F0F0F0] outline-none border-none p-3 w-[75px] rounded-lg"
                name=""
                id=""
              >
                <option value="+91">+91</option>
              </select>
              <input
                className="bg-[#F0F0F0] outline-none border-none p-3 w-[calc(100%-75px)] rounded-lg"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Message</div>
            <textarea
              className="bg-[#F0F0F0] outline-white border-none p-3 w-[90%] rounded-lg max-md:w-full"
              type="text"
            ></textarea>
          </div>
        </form>
        <div className="w-full flex gap-3">
          <input id="wa" type="checkbox" />
          <label for="wa">
            Yes, I would like to receive updates &amp; promotions from Godrej
            Properties Limited.
          </label>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="w-fit text-[#f07f22] border-2 border-solid border-[#f07f22] py-2 px-6 rounded-xl outline-none">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
