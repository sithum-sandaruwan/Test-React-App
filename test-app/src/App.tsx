import ListGroup from "./components/ListGroup";
import Homepage from "./Homepage";

function App() {
  let items = ["Sri Lanka", "China", "USA", "Australia"];

  return (
    <div>
      <ListGroup items={items} heading="Countries" />
    </div>
  );
}

export default App;
