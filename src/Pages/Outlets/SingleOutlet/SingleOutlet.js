import { Button } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import CustomDialog from "../../../Components/CustomDialog/CustomDialog";
import Program from "./Program/Program";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./SingleOutlet.scss";
import { storage } from "../../../firebase/firebase";
const SingleOutlet = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  let outlet = location?.state?.outlet;
  const { programs, outlet_name } = outlet;
  const [images, setImages] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const history = useHistory();
  const handleFirebaseUpload = () => {
    setOpen(true);
    let totalBytes = 0;
    let byteTransfered = 0;
    images.forEach((img) => {
      const uploadTask = storage.ref(`/images/${img.file.name}`).put(img.file);
      totalBytes += img.file.size;
      let lastTransfer = 0;

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          byteTransfered += snapshot.bytesTransferred - lastTransfer;
          lastTransfer = snapshot.bytesTransferred;
          setUploadPercentage(Math.round((byteTransfered / totalBytes) * 100));
        },
        (error) => {
          console.log(error);
        },
        () => {}
      );
    });
  };

  return (
    <div className="out__screen">
      <div className="outlet__wrapper">
        <div
          className="back__btn"
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </div>
      </div>
      <div className="out__heading">OL Name: {outlet_name}</div>
      <div className="out__programs">
        {programs?.map((program, index) => {
          return (
            <Program
              program={program}
              index={index}
              key={index}
              setImages={setImages}
              images={images}
            />
          );
        })}
        <Button
          variant="contained"
          className="out__button"
          onClick={handleFirebaseUpload}
          {...(images.length === outlet.programs.length
            ? { disabled: false }
            : { disabled: true })}
        >
          Upload Photos
        </Button>
        {open && (
          <CustomDialog
            open={open}
            handleClose={setOpen}
            uploadPercentage={uploadPercentage}
          />
        )}
      </div>
    </div>
  );
};

export default SingleOutlet;
