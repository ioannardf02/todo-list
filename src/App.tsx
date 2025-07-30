import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`/mylist`} element={<MyListPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
