import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const handleSearch = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div>
      <label htmlFor="search">Car Search : </label>
      <input id="search" value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default CarSearch;
