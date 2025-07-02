import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mylist" element={<MyListPage />} />
    </Routes>
  );
}
export default App;
