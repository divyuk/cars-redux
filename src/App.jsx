import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import CarForm from "./components/Carform";

function App() {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
