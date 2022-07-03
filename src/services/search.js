import { Outlets } from "../utils/data";
export const searchOutlet = (outlet_code) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let outlets = Outlets.filter((outlet) => {
        return outlet.outlet_code === Number(outlet_code);
      });
      if (outlets.length > 0) {
        resolve(outlets);
      } else {
        reject("No outlet found");
      }
    }, 2000);
  });
};
