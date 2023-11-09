import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../../config/axiosInstance";
import { BASEURL } from "../../../Constants/baseUrl";
import "./intialCourtData.css";
import Navigation from "../../navigation/Navigation";
import Modal from "../modal/Modal";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { TIMINGS } from "../../../Constants/baseUrl";
import Swal from "sweetalert2";

function IntialCourtData() {
  const [filterTimings, setFilterTimings] = useState(TIMINGS);
  const [sigleViewData, setSigleViewData] = useState({});
  const [isOpen, setIsOpen] = useState({});
  const [selectedTimings, setSelectedTimings] = useState([]);
  const [intialDate,setIntialDate]= useState(new Date())
  const [minEndDate,setMinEndDate]= useState()
  const [costData,setCostData]= useState({
    cost:'',
  });
  const [courtTiming, setCourtTiming] = useState({
    startDate: "",
    endDate: "",
  });

  useEffect(()=>{
    AxiosInstance.get('/users/getUpdatedDate',{params:{courtId:id}}).then((res)=>{
      let latestDate=new Date(res.data.startingDate)
      latestDate.setDate(latestDate.getDate()+1);
      
      setIntialDate(latestDate.toISOString().split('T')[0])
      
    })
  },[]);

  useEffect(()=>{
   if(courtTiming.startDate){
    let newMinDate = new Date(courtTiming.startDate).toISOString().split('T')[0]
    setMinEndDate(newMinDate)
   }else{
    setMinEndDate(intialDate)
   }
  },[courtTiming.startDate,intialDate]);


  const addNewTime = (element, index) => {
    const check = selectedTimings.filter(
      (timeObj) => timeObj.id === element.id
    );

    if (check.length > 0) {
      return;
    } else {
      setSelectedTimings([...selectedTimings, element]);
    }

    const filtaredData = filterTimings.filter(
      (timeObj) => timeObj.id !== element.id
    );

    setFilterTimings(filtaredData);
  };

  const removeItems = (element) => {
    const removed = selectedTimings.filter(
      (timeObj) => timeObj.id !== element.id
    );

    setSelectedTimings(removed);

    setFilterTimings([...filterTimings, element]);
  };

  

  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    try {
      AxiosInstance.get("/users/getSigleCourtViewData", {
        params: { courtId: id },
      })
        .then((resp) => {
          console.log();
          setSigleViewData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });

        
    } catch (error) {


    }
  }, [IntialCourtData]);

  const addCourtTimings=()=>{
    try {
      
  AxiosInstance({
    method:'post',
    url:'/users/addCourtTiming',
    data:{
     dates:courtTiming,
     schedules:selectedTimings,
     cost:costData,
     courtId:id,
    }
}).then((res)=>{
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Schedules Added Successfully",
    showConfirmButton: false,
    timer: 2000
  });

})

    } catch (res) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  



  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div className="wrapper ">
        <div className="headers relative">
          <img
            className="picture"
            src={BASEURL + "/venderImages/" + sigleViewData?.data?.image}
          />
          <div className="banner-text absolute ">
            <h1 className="text-6xl font-semibold">
              {sigleViewData?.data?.businessName}
            </h1>
            <p className="">{sigleViewData?.data?.aboutVenue}</p>
          </div>
        </div>

        <div className="aside aside1 w-full"></div>

        <div className="footer bg-[#2c6e49]">
          <div className="text bg-[#2c6e49]">set schedules for players</div>
          <div className="modal bg-[#2c6e49]">
            <Modal data={sigleViewData}>
              <div>
                <div className="px-7 overflow-y-auto">
                  <label className="block text-sm font-medium text-left text-gray-800">
                    From:
                  </label>
                  <input
                    
                    onChange={(e) =>
                      setCourtTiming({
                        ...courtTiming,
                        startDate: new Date(e.target.value),
                      })

                    }
                    type="date"
                    min={intialDate}
                    
                    id="input-label"
                    className="py-3 px-4 block w-full border rounded-md text-sm  focus:border-[#2c6e49] focus:ring-[#2c6e49] text-gray-600"
              
                  />
                </div>
                <div className="px-7 overflow-y-auto pt-3">
                  <label className="block text-sm font-medium  text-left text-gray-800">
                    Till:
                  </label>
                  <input
                    onChange={(e) =>
                      setCourtTiming({
                        ...courtTiming,
                        endDate: new Date(e.target.value),
                      })
                    }
                    type="date"
                    min={minEndDate}
                    id="input-label"
                    className="py-3 px-4 block w-full  border rounded-md text-sm focus:border-[#2c6e49] focus:ring-[#2c6e49] text-gray-600"
                    placeholder=""
                  />
                </div>

                <div className="px-7 overflow-y-auto pt-3">
                  <label className="block text-sm font-medium  text-left text-gray-800">
                    Cost Per Hour:
                  </label>
                  <input
                    onChange={(e) =>
                      setCostData({
                        cost: parseInt(e.target.value),
                      })
                    }
                    type="number"
                    id="input-label"
                    className="py-3 px-4 block w-full  border rounded-md text-sm focus:border-[#2c6e49] focus:ring-[#2c6e49] text-gray-600"
                    placeholder=""
                  />
                </div>

                <div className="px-7 pt-4">
                  <div className="relative flex flex-col items-center text-gray-800 w-[340px] rounded">
                    <button
                      onClick={() => setIsOpen((done) => !done)}
                      className="bg-white py-2 px-4 focus:border-[#2c6e49]  overflow-y-auto w-full flex items-center justify-between text-lg  rounded  border active:border-black"
                    >
                      select Times
                      {isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
                    </button>
                    {!isOpen && (
                      <div
                        onMouseLeave={() => setIsOpen((done) => !done)}
                        className="bg-[#d8f3dc] absolute max-h-[300px]  top-10 pt-4 flex flex-col items-start rounded-lg  w-full h-auto overflow-y-auto"
                      >
                        {filterTimings.map((element) => (
                          <ul className="text-black w-full py-1  hover:bg-[#2c6e49] hover:text-white  cursor-pointer rounded-r-lg border-l-transparent ">
                            <li
                              onClick={() => addNewTime(element)}
                              key={element.id}
                            >
                              {" "}
                              {element.name}
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 px-7 h-auto gap-2 grid grid-cols-4  overflow-x-visible w-full ">
                  {selectedTimings.map((element) => (
                    <div
                      onClick={() => removeItems(element)}
                      key={element.id}
                      className="border mr-3 cursor-pointer hover:bg-[#2c6e49] hover:text-white bg-[#dff4e2] rounded w-full p-1 "
                    >
                      {element.name}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end items-center gap-x-2 py-4 px-7  ">
                  <button
                    type="button"
                    className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-gray-300 font-medium bg-white text-[#1b4332] shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black transition-all text-sm  dark:hover:bg-[#192f27]  dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-focus-management-modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={addCourtTimings}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#2c6e49] text-white hover:bg-[#276040] focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all text-sm  "
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntialCourtData;
