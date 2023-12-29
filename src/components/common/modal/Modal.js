
import React, { Children, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
 
  Typography,
} from "@material-tailwind/react";
 
export function Modal({children ,addCourtTimings}) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen}>Create Schedules </Button>
    <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
            
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead" >
            
          </Typography>
          <div className="grid gap-6">
           {children}
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient"  color="gray" onClick={addCourtTimings}>
            Create Schedules
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}



// function Modal({children}) {
//   const [modal , setModal]=(false)
//   return (
//     <div >
// <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#21543f] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
// Schedule Maker
// </button>  


// <div id="hs-focus-management-modal"  className="hs-overlay hidden w-full h-full fixed top-60 left-0 z-[60] overflow-x-hidden overflow-y-auto">
//   <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto overflow-y-auto">
//     <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-white  dark:shadow-slate-700/[.7]">
//       <div className="flex justify-between items-center py-2 px-4  ">
//         <h3 className="font-bold text-gray-500">
          
//         </h3>
//         <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-[#1b4332] dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-focus-management-modal">
//           <span className="sr-only">Close</span>
//           <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
//           </svg>
//         </button>
//       </div>
//       {/* <div className="px-7 overflow-y-auto">
//         <label for="input-label" className="block text-sm font-medium  dark:text-white">Email</label>
//         <input type="email" id="input-label" className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   dark:text-gray-400" placeholder="you@site.com" autofocus/>
//       </div>
//       <div className="px-7 overflow-y-auto">
//         <label for="input-label" className="block text-sm font-medium mb-3 dark:text-white">Email</label>
//         <input type="email" id="input-label" className="py-3 px-4 block w-full  border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   dark:text-gray-400" placeholder="you@site.com" autofocus/>
//       </div> */}

//         {children}
//       {/* <div className="flex justify-end items-center gap-x-2 py-4 px-7  ">
//         <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-gray-300 font-medium bg-white text-[#1b4332] shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black transition-all text-sm  dark:hover:bg-[#192f27]  dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-focus-management-modal">
//           Close
//         </button>
//         <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#2c6e49] text-white hover:bg-[#276040] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
//           Save changes
//         </a>
//       </div> */}
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }






export default Modal