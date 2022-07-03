import React from "react";
import "./OutletContainer.scss";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const OutletContainer = ({ outlet }) => {
  const { outlet_name, town_code, route_code, outlet_code, outlet_id } = outlet;
  console.log(outlet_name, town_code, route_code, outlet_code);
  const history = useHistory();
  return (
    <div className="outlet__container">
      <div className="outlet__name">
        <span>OL Name:</span>
        {outlet_name}
      </div>
      <div className="outlet__details">
        <div className="outlet__box">
          <div className="detail__heading">Town Code</div>
          <div className="detail__value">{town_code}</div>
        </div>
        <div className="outlet__box">
          <div className="detail__heading">Route Code</div>
          <div className="detail__value">{route_code}</div>
        </div>
        <div className="outlet__box">
          <div className="detail__heading">OL Code</div>
          <div className="detail__value">{outlet_code}</div>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          history.push({
            pathname: `/outlets/${outlet_id}`,
            state: { outlet: outlet },
          });
        }}
      >
        START VISIT
      </Button>
    </div>
  );
};

export default OutletContainer;
