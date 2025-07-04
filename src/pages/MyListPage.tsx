import List from "../components/listPage/List";
import TopBar from "../components/TopBar";

const MyListPage = () => {
  return (
    <div className="flex flex-col lg:p-3 gap-5 md:p-2 p-1 w-full h-screen">
      <TopBar />
      <div className="flex justify-center">
        <div className="flex flex-col rounded-3xl bg-violet-50 shadow-2xl items-center p-10 gap-7 w-full text-center">
          <List />
        </div>
      </div>
    </div>
  );
};
export default MyListPage;
