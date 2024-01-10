import { RentalCategories } from "./components/RentalCategories";
import { SalesCategories } from "./components/SalesCategories";

export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both lists
      </button>
      <hr />
      <RentalCategories />
      <hr />
      <SalesCategories />
    </div>
  );
}
