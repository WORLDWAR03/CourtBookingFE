import React from "react";
import { BASEURL } from "../../Constants/baseUrl";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function UpComingBookings({ data }) {
  const navigate = useNavigate();
  const cancelBooking = () => {
    navigate(`/cancelpage/${data._id}`);
  };
  return (
    <div
      className=" mx-auto max-w-md bg:center gap-4 px-5 py-5  justify-center grid  md:grid-cols-1 place-items-center align-middle cursor-pointer my-auto md:max-w-6xl bg-[#fff"
      onClick={cancelBooking}
    >
      <div className=" align-center sm:max-w-sm md:max-w-xl md:max-h-[] w-full lg:max-w-full cursor-pointer lg:flex rounded-lg bg-[#d8f3dc]  shadow-lg overflow-hidden">
        <div
          className="h-48 lg:h-auto md: lg:w-56 flex-none bg-cover rounded-t-lg lg:rounded-t-none   text-center overflow-hidden  items-end "
          title="court image"
        >
        <img
          className="lg:h-full lg-w-full  rounded-l-lg"
          src={`${BASEURL}/venderImages/${data.courts.image}`}
        />
      </div>
        <div className="border-r lg:min-w-[400px] border-b border-l border-[#95d5b2] lg:border-l-0 lg:border-t-0 lg:border-r-0 lg:border-b-0  rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal bg-[#d8f3dc]">
          <div className="mb-8 pt-2 ">
            <div className="flex justify-between">
              <div>
                <p className="text-md font-semibold text-green-900 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  {data.slot.name}
                </p>
              </div>
              <div className="text-md font-semibold text-green-900 flex items-center">
                {data.date.split("T")[0]}
              </div>
            </div>
            <h3 className="font-bold text-xl mt-2">
              {data.courts.businessName}
            </h3>
            <div className="text-[#00424F] font-bold text-xl mb-2">
              {data.businessName}
            </div>
            <p>location: {data.courts.location}</p>
            <p>
              VenueType:{data.venueType} ({data.courts.feature})
            </p>

            <p className="">Cost: {data.cost}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpComingBookings;
