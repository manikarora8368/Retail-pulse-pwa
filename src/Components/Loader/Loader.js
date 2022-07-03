import React from "react";
import { TailSpin } from "react-loader-spinner";
const CustomLoader = ({ visible = false }) => {
  return (
    <div>
      <TailSpin color="#2196F3" width={80} visible={visible} />
    </div>
  );
};

export default CustomLoader;
