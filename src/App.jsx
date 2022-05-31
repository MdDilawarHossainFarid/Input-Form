import Inputs from "./components/inputs/input";
import classes from "./app.module.css";

const App = () => {
  return (
    <>
      <div className={classes.app}>
        <h1 className={classes.heading}>Working With Forms in React</h1>
        <hr />
        <Inputs />
      </div>
    </>
  );
};

export default App;
