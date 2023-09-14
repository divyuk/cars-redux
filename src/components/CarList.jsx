import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const carsList = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = carsList.map((car) => {
    return (
      <div key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleDelete(car)}>Delete</button>
      </div>
    );
  });
  return (
    <div>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
