import DownSideHome from "../components/home/DownSideHome";
import UpSideHome from "../components/home/UpSideHome";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <div className="flex flex-col p-5 gap-3 w-full h-screen">
      <TopBar />
      <div className="flex flex-col gap-4 size-full pt-6">
        <UpSideHome />
        <DownSideHome />
      </div>
    </div>
  );
};
export default HomePage;
