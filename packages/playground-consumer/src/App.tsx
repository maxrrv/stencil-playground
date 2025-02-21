import "./App.css";
import { MyComponent } from "playground-react";

function App() {
  return (
    <>
      <form action=".something" method="post">
        <MyComponent />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
