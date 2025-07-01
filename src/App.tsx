import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import MyListPage from "./components/pages/MyListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mylist" element={<MyListPage />} />
      </Routes>
    </div>
  );
}
export default App;
