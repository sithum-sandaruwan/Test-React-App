import Alert from "./components/Alert";
import SelectButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sri Lanka", "China", "USA", "Australia"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Countries"
          onSelectItem={handleSelectItem}
        />
        <Alert />
      </div>

      <SelectButton color="danger" onClick={() => console.log("clicked")}>
        Select
      </SelectButton>
    </>
  );
}

export default App;
