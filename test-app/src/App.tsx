import ListGroup from "./components/ListGroup";
import Homepage from "./Homepage";

function App() {
  let items = ["Sri Lanka", "China", "USA", "Australia"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
