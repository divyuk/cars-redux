import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName } from "../store/slices/formSlice";
import { addCar } from "../store/slices/carsSlice";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  const handleName = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCost = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Car Name</label>
        <input type="text" value={name} onChange={handleName} />
        <label>Car Cost</label>
        <input type="number" value={cost || ""} onChange={handleCost} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CarForm;
