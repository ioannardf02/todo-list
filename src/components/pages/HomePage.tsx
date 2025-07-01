import DownSideHome from "../home/DownSideHome";
import UpSideHome from "../home/UpSideHome";
import TopBar from "../TopBar";

const HomePage = () => {
  return (
    <div className="flex flex-col p-5 gap-5 ">
      <TopBar />
      <UpSideHome />
      <DownSideHome />
    </div>
  );
};
export default HomePage;
