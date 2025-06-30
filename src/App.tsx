import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
