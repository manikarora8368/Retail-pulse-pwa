import { useHistory, useLocation } from "react-router-dom";
import OutletContainer from "./OutletContainer/OutletContainer";
import "./Outlets.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Outlets as data } from "../../utils/data";
const Outlets = () => {
  const location = useLocation();
  let outlets = location?.state?.outlets ?? data;
  const history = useHistory();
  return (
    <div className="outlet__wrapper">
      <div
        className="back__btn"
        onClick={() => {
          history.goBack();
        }}
      >
        <ArrowBackIcon fontSize="large" />
      </div>
      {outlets?.map((outlet, index) => {
        return <OutletContainer outlet={outlet} key={index} />;
      })}
    </div>
  );
};

export default Outlets;
