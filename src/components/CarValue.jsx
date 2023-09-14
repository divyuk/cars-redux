import { useSelector } from "react-redux";

function CarValue() {
  const carPrice = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return <div>{carPrice}</div>;
}

export default CarValue;
