import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Hitesh",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="hitesh" myArr={newArr} />
      <Card username="Json" post="Staff Engg." />
      <Card />
    </>
  );
}
export default App;
