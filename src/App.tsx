import "./App.css";
import ToDo from "./components/ToDo";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ToDo />
      </ChakraProvider>
    </div>
  );
}

export default App;
