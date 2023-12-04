import React, { useState } from "react";
import red from "../../assets/shake.jpg";
import axios, { Axios } from "axios";
import AxiosInstance from "../../config/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



function CourtRegistrationForm() {
  const [registerData, setReisterData] = useState({
    businessName: "",
    location: "",
    venueType: "",
    feature: "",
    number: "",
    about: "",
  });

  const [courtPic, setCourtPic] = useState({ file: "" });

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setCourtPic({ file: e.target.files[0] });
  };

  const navigate=useNavigate()
  const handleSave = () => {
    try {
      console.log(registerData, "registerData");

      let fileData = new FormData();
      fileData.append("image", courtPic.file);

      AxiosInstance.post(
        "/vender/register-court",
        fileData,
        { params: registerData },
        { headers: { "Content-Type": "multipart/form-data" } }
      )
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Court Registred Successfully",
            showConfirmButton: false,
            timer: 2000
          });;
          navigate('/myCourts')
        })
        .catch((res) => {
        
         Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All Field Is Required!",
          showConfirmButton: true,
          confirmButtonText:'ok',
          confirmButtonColor: '#d33'
          
        });
        }
        );

    } catch (error) {
     alert()
       
    }
  };

  const [errors, setErrors] = useState({});

  const handlesubmit = (event) => {
    event.preventDefault();
    const showErrors = {};

    if (!registerData.businessName.trim()) {
      showErrors.businessName = "Business Name is required";
    }
    if (!registerData.location.trim()) {
      showErrors.location = "Business location is required";
    }
    if (!registerData.venueType.trim()) {
      showErrors.venueType = "Venue Type is required";
    }
    if (!registerData.feature.trim()) {
      showErrors.feature = "Business feature is required";
    }
    if (!registerData.number.trim()) {
      showErrors.number = "Mobile number is required";
    }
    if (!registerData.about.trim()) {
      showErrors.about = "About field is required";
    }
    setErrors(showErrors);
  };

  return (
    <div className="formInput min-h-screen  flex items-center justify-center py-40">
      <div className="bg-[#d8f3dc] flex rounded-2xl  md:max-w-[60%]   md:max-h-[100%] shadow-lg  p-5 items-center">
        <div className="max-w-[100%] px-16">
          <h2 className="font-bold text-4xl text-[#00424F]">
            Register Your Venue here:
          </h2>
          <p className="text-md font-semibold mt-4 text-[#00424F]">
            Togethor we can
          </p>

          <form onSubmit={handlesubmit} className="flex flex-col gap-2 w-100%">
            <label className=" mt-8 text-[#00424F] text-md font-semibold">
              Business Name
            </label>
            <input
              className=" p-3 rounded-xl border capitalize"
              type="text"
              placeholder="BusinessName"
              value={registerData.businessName}
              onChange={(e) =>
                setReisterData({
                  ...registerData,
                  businessName: e.target.value,
                })
              }
            />
            {errors.businessName && <span>{errors.businessName}</span>}

            <label className="  text-[#00424F] text-md font-semibold">
              Select Location
            </label>
            <select
              value={registerData.location}
              onChange={(e) =>
                setReisterData({ ...registerData, location: e.target.value })
              }
              className=" p-3  border   rounded-xl focus:ring-[#2d6a4f] focus:border-[#2d6a4f] block w-full   dark:border-gray-600 dark:placeholder-gray-400  "
            >
              <option selected className="text-grey-200">
                Select Location
              </option>
              <option className="m-2">Kerala</option>
              <option className="m-2">ThamilNadu</option>
              <option className="m-2">Delhi</option>
              <option className="m-2">Karnataka</option>
              <option className="m-2">Gujerat</option>
              <option className="m-2">Goa</option>
              <option className="m-2">Manipur</option>
            </select>

            {errors.location && <span>{errors.location}</span>}

            <label className="text-[#00424F] text-md font-semibold">
              Select Venue Type
            </label>
            <select
              value={registerData.venueType}
              onChange={(e) =>
                setReisterData({ ...registerData, venueType: e.target.value })
              }
              className=" p-3  border   rounded-xl focus:ring-[#2d6a4f] focus:border-[#2d6a4f] block w-full   dark:border-gray-600 dark:placeholder-gray-400  ">
              <option selected className="text-grey-200">
                Select Venue Type
              </option>
              <option className="m-2">Cricket</option>
              <option className="m-2">Badminton</option>
              <option className="m-2">Football</option>
              <option className="m-2">Vollyball</option>
              <option className="m-2">Tennis</option>
              <option className="m-2">Basket Ball</option>
              <option className="m-2">Base Ball</option>
            </select>

            {errors.venueType && <span>{errors.venueType}</span>}

            <label className="text-[#00424F] text-md font-semibold">
              Select Venue feature
            </label>
            <select
              value={registerData.feature}
              onChange={(e) =>
                setReisterData({ ...registerData, feature: e.target.value })
              }
              className=" p-3  border   rounded-xl focus:ring-[#2d6a4f] focus:border-[#2d6a4f] block w-full   dark:border-gray-600 dark:placeholder-gray-400  "
            >
              <option selected className="text-grey-200">
                Select Feature
              </option>
              <option className="m-2">Indoor</option>
              <option className="m-2">Outdoor</option>
              <option className="m-2">Both Indoor and Outdoor</option>
            </select>

            {errors.feature && <span>{errors.feature}</span>}

            <label className="text-[#00424F] text-md font-semibold">
              Owner's Mobile Number
            </label>
            <input
              className=" p-3 rounded-xl border"
              type="number"
              placeholder="Enter Mobile Number"
              value={registerData.number}
              onChange={(e) =>
                setReisterData({ ...registerData, number: e.target.value })
              }
            />

            {errors.number && <span>{errors.number}</span>}

            <label className="text-[#00424F] text-md font-semibold">
              About Your Venue
            </label>
            <textarea
              name="about"
              cols="60"
              type="text"
              rows="7"
              className="p-4 rounded-xl border"
              placeholder="About your Venue"
              value={registerData.about}
              onChange={(e) =>
                setReisterData({ ...registerData, about: e.target.value })
              }
            ></textarea>
            {errors.about && <span>{errors.about}</span>}

            <label
              className="text-[#00424F] text-md font-semibold "
              for="multiple_files"
            >
              Upload Image files
              (make sure it's landscape)
            </label>
            <input
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
              id="multiple_files"
              type="file"
              onChange={handleFileChange}
            />

            <button
              className="hover:scale-105 duration-300 bg-[#2d6a4f] rounded-xl text-white py-2"
              onClick={handleSave} 
            >
              Register
            </button>
          </form>
        </div>

        {/* <div className='md:block hidden max-h-[100%] p-5 '>
            <img className=' rounded-2xl' src={red} alt='' />

        </div> */}
      </div>
    </div>
  );
}

export default CourtRegistrationForm;
