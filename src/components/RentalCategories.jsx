import { useDispatch, useSelector } from "react-redux";
import { createRandomRentalCategory } from "../data";
import { addRentalCategory, removeRentalCategory } from "../store";

export const RentalCategories = () => {
  // should NOT use index but for demo purposes it is good enough

  /*  const renderedRentalCategories = rentalCategories.map((category, index) => {
    return (
      <li key={index}>
        {category}
        <button className="button is-danger">X</button>
      </li>
    );
  }); */

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Locations</h3>
        <div className="buttons">
          <button className="button is-link">
            + Ajouter un type de location
          </button>
        </div>
      </div>
      {/* <ul>{renderedRentalCategories}</ul> */}
    </div>
  );
};
