import { useDispatch, useSelector } from "react-redux";
import { createRandomSalesCategory } from "../data";
import { addSalesCategory, removeSalesCategory } from "../store";

export const SalesCategories = () => {
  // should NOT use index but for demo purposes it is good enough
  /*  const renderedSalesCategories = salesCategories.map((category, index) => {
    return (
      <li key={index}>
        {category}
        <button
          onClick={() => handleSalesCategoryRemove(category)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  }); */

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Ventes</h3>
        <div className="buttons">
          {/*      <button
            onClick={() => handleSalesCategoryAdd(createRandomSalesCategory())}
            className="button is-link"
          >
            + Ajouter un type de vente
          </button> */}
        </div>
      </div>
      {/* <ul>{renderedSalesCategories}</ul> */}
    </div>
  );
};
