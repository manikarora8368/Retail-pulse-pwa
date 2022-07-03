import React, { useState } from "react";
import "./Program.scss";
const Program = ({ program, index, setImages, images }) => {
  const { image_url, id } = program;
  const [source, setSource] = useState(null);
  const handleCapture = (target) => {
    if (target.files && target.files.length !== 0) {
      const file = target.files[0];
      const url = URL.createObjectURL(file);
      setSource(url);
      let programIndex = images.findIndex((img) => img.program_id === id);
      let imagesCopy = images;
      if (programIndex !== -1) {
        imagesCopy.splice(programIndex, 1);
      }
      setImages([...imagesCopy, { program_id: id, file: file }]);
    }
  };
  return (
    <div className="program__container">
      <div className="program__left">
        <div className="img__heading">Upload Image {index + 1}</div>
        <div className="img__container">
          <img src={image_url} alt="program img" />
        </div>
      </div>
      <div className="program__right">
        <input
          accept="image/*"
          id={`icon-button-file-${index}`}
          type="file"
          capture="environment"
          style={{ display: "none" }}
          onChange={(e) => {
            handleCapture(e.target);
          }}
        />
        <label htmlFor={`icon-button-file-${index}`}>
          <div className="img__input">
            {source ? (
              <img src={source} alt="prod img" className="program__img" />
            ) : (
              <img
                src={require("../../../../assets/plus.svg").default}
                alt="plus"
              />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Program;
