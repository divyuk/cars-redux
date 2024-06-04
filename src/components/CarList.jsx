import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { carsList, name } = useSelector(
    ({ form, cars: { data, searchTerm } }) => {
      const fitleredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        carsList: fitleredCars,
        name: form.name,
      };
    }
  );

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = carsList.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id}>
        <p style={{ fontWeight: bold ? "bold" : "normal" }}>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleDelete(car)}>Delete</button>
      </div>
    );
  });
  return (
    <div>
      <label>Car List</label>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
