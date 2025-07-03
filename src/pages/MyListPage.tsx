import InfoList from "../components/listPage/InfoList";
import List from "../components/listPage/List";
import TopBar from "../components/TopBar";

const MyListPage = () => {
  return (
    <div className="flex flex-col lg:p-5 gap-5 md:p-3 p-1 w-full h-screen">
      <TopBar />
      <InfoList />
      <div className="flex justify-center">
        <List />
      </div>
    </div>
  );
};
export default MyListPage;
