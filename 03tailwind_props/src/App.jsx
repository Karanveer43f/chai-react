import "./App.css";
import Card from "./components/card";

function App() {
  let properties1 = {
    buttonText : "Click me"
  }
  let properties2 = {
    buttonText : "Click me again"
  }
  let properties3 = {
    buttonText : "Click me dobara"
  }
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="bg-green-500 p-4 rounded-xl">Testing Tailwind CSS</h1>
        <div className="flex justify-around">
          <Card creator="Karanveer 1" properties={properties1} />
          <Card creator="Karanveer 2" properties={properties2}/>
          <Card creatur="Karanveer 3" test="test" properties={properties3}/>
        </div>
      </div>
    </>
  );
}

export default App;
