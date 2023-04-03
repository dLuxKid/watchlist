import { ContextProvider } from "./context/context";
import Layout from "./Layout/Layout";

function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
