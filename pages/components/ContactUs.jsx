import React from "react";

function ContactUs() {
  return (
    <div className="absolute text-gray-700 h-screen left-7 right-7">
      <h1 className="text-lg text-gray-700 xl:text-3xl font-bold">
        Contact Us
      </h1>
      <form className="pt-5">
        <label className="text-xs text-gray-700  xl:text-3xl" htmlFor="name">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-100
          h-8 w-[calc(100%-1rem)]
          text-xs pl-2 rounded-md mt-1 border-white"
          required
        />
        <br />

        <label className="text-xs text-gray-700 xl:text-3xl" htmlFor="email">
          Email:
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-100
          h-8 w-[calc(100%-1rem)]
          text-xs pl-2 rounded-md mt-1 border-white"
          required
        />
        <br />

        <label className="text-xs text-gray-700 xl:text-3xl" htmlFor="country">
          Country:
        </label>
        <br />
        <input
          type="text"
          id="country"
          name="country"
          className="bg-gray-100
          h-8 w-[calc(100%-1rem)]
          text-xs pl-2 rounded-md mt-1 border-white"
          required
        />
        <br />

        <label className="text-xs text-gray-700 xl:text-3xl" htmlFor="city">
          City:
        </label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          className="bg-gray-100
          h-8 w-[calc(100%-1rem)]
          text-xs pl-2 rounded-md mt-1 border-white"
          required
        />
        <br />

        <label className="text-xs text-gray-700 xl:text-3xl" htmlFor="mobile">
          Mobile Number:
        </label>
        <br />
        <div className="flex">
          <input
            type="text"
            defaultValue={"+91"}
            id="country-code"
            name="country-code"
            className="bg-gray-100 h-8 text-xs pl-2 rounded-md mt-1 w-[3rem] border-white"
            required
          />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            className="bg-gray-100 h-8 text-xs pl-2 rounded-md mt-1 ml-2 mr-4 w-[calc(100%-2rem)] border-white"
            required
          />
        </div>
        <br />

        <label className="text-xs text-gray-700 xl:text-3xl">
          Book Your Visit:
        </label>
        <br />
        <input
          className="form-radio checked:bg-orange-600 text-orange700"
          type="radio"
          id="visit-yes"
          name="visit"
          value="yes"
          checked
        />
        <label className="ml-3" htmlFor="visit-yes">
          Yes
        </label>
        <input
          className="form-radio  checked:bg-orange-600 text-orange700 ml-10"
          type="radio"
          id="visit-no"
          name="visit"
          value="no"
        />
        <label className="ml-2" htmlFor="visit-no">
          No
        </label>
        <br />
        <div className="flex">
          <div className="pt-3  pr-9 text-xs">
            <label htmlFor="visit-time">Time of Visit:</label>
            <br />
            <input
              type="time"
              id="visit-time"
              name="visit-time"
              className="bg-gray-100 text-xs rounded-md mt-1 border-white"
            />
            <br />
          </div>
          <div className="pt-3 text-xs">
            <label htmlFor="visit-date ">Date of Visit:</label>
            <br />
            <input
              type="date"
              id="visit-date"
              name="visit-date"
              className="bg-gray-100 rounded-md mt-1 text-xs border-white"
            />
            <br />
          </div>
        </div>
        <div className="pt-3 w-scree">
          <label className="text-xs flex">
            <input type="checkbox" name="terms" required />
            <p className="pl-3">
              Yes, I would like to receive updates & promotions from Godrej
              Properties Limited.
            </p>
          </label>
          <br />
          <div className="w-screen flex justify-center items-center">
            <button
              className="border border-orange-500 rounded-lg w-32  h-8 mt-24 absolute h-30"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
