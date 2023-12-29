import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
function NewModal({cancell}) {

 const [open, setOpen] = useState(false);

 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} className="bg-green-800 w-full">
        Cancel Schedule
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Cancell Booking</DialogHeader>
        <DialogBody>
        Do you want to cancell this schedule?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span onClick={cancell}>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default NewModal