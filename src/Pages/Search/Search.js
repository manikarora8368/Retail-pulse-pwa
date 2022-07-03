import React, { useState } from "react";
import "./Search.scss";
import { TextField, InputAdornment, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomLoader from "../../Components/Loader/Loader";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/search.json";
// import { Outlets } from "../../utils/data";
import { useHistory } from "react-router-dom";
import { searchOutlet } from "../../services/search";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const NoOutlet = ({ noVisible }) => {
  if (!noVisible) {
    return null;
  }
  return (
    <div className="noOutlet__container">
      <div className="noOutlet__heading">No Outlets results found</div>
      <div className="noOutlet__subheading">
        Try searching with another OL Code
      </div>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

const Search = () => {
  const [visible, setVisible] = useState(false);
  const [searchCode, setSearchCode] = useState("");
  const [noVisible, setNoVisible] = useState(false);
  const history = useHistory();
  const handleOutletSubmit = async () => {
    setVisible(true);
    setNoVisible(false);
    try {
      let outlets = await searchOutlet(searchCode);
      history.push({
        pathname: "/outlets",
        state: { outlets: outlets },
      });
    } catch (err) {
      setNoVisible(true);
    }
    setVisible(false);
  };
  return (
    <div className="search__page">
      <div className="app__logo">
        <img src={require("../../assets/retail-pulse-logo.png")} alt="" />
      </div>
      <div className="search__box">
        <div className="search__heading">Search Outlet(OL) Code</div>
        <div className="search__inputContainer">
          <TextField
            id="input-with-icon-textfield"
            label="Search OL Code"
            value={searchCode}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={(e) => {
              setSearchCode(e.target.value);
            }}
            type="number"
          />
          <Button
            variant="contained"
            onClick={handleOutletSubmit}
            {...(searchCode ? { disabled: false } : { disabled: true })}
          >
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <CustomLoader visible={visible} />
      <NoOutlet noVisible={noVisible} />
    </div>
  );
};

export default Search;
