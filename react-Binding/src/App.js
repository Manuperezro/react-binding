import "./App.css";
// import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
// import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
// import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";

function App() {
  return <div className="App">
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} /> */}
      {/* <NestingComponents/> */}
      <MethodsAsPropsParent />
  </div>;
}

export default App;