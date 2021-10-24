import "./App.css";
import { useData } from "./contexts/DataProvider";
import { useDataLoading } from "./hooks/useDataLoading";
import { Card } from "./components/Card/Card";

function App() {
  useDataLoading();
  const { userData } = useData();

  console.log(userData);
  return (
    <div className="App">
      {userData?.map((user) => {
        return <Card {...user} />;
      })}
    </div>
  );
}

export default App;
