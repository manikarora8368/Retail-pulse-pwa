import React from "react";
import Dialog from "@mui/material/Dialog";
import "./CustomDialog.scss";
import { Button, CircularProgress } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/done.json";
import { useHistory } from "react-router-dom";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const CustomDialog = ({ open, handleClose, uploadPercentage }) => {
  const history = useHistory();
  const handleDialogClose = () => {
    handleClose(false);
    history.push("/");
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog__container">
          <div className="dialog__heading">
            {uploadPercentage < 100 ? "Uploading Photos" : "Visit Successful"}
          </div>
          {uploadPercentage < 100 ? (
            <>
              {" "}
              <div className="dialog__progress">
                <CircularProgress
                  variant="determinate"
                  value={uploadPercentage}
                  style={{ height: "200px", width: "200px" }}
                />
                <div className="progress__value">
                  {`${Math.round(uploadPercentage)}%`}
                  <div>Uploaded</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Lottie options={defaultOptions} height={180} width={180} />
              <Button
                variant="contained"
                className="dialog__btn"
                onClick={handleDialogClose}
              >
                Done
              </Button>
            </>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default CustomDialog;
