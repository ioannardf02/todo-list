import List from "../components/listPage/List";
import TopBar from "../components/TopBar";

const MyListPage = () => {
  return (
    <div className="flex flex-col lg:p-3 gap-5 md:p-2 p-1 w-full h-screen">
      <TopBar />
      <div className="flex justify-center">
        <div className="flex flex-col rounded-3xl bg-violet-50 shadow-2xl lg:p-10 md:p-8 p-2 gap-10 w-full ">
          <List />
        </div>
      </div>
    </div>
  );
};
export default MyListPage;
