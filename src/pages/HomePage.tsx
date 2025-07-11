import { useState } from "react";
import DownSideHome from "../components/home/DownSideHome";
import UpSideHome from "../components/home/UpSideHome";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function loadingFun() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/mylist");
    }, 1000);
  }
  return (
    <div className="flex flex-col p-5 gap-3 w-full h-screen dark:bg-slate-800">
      <TopBar />
      {!isloading && (
        <div className="flex flex-col gap-4 size-full pt-6">
          <UpSideHome />
          <DownSideHome loadingFun={loadingFun} />
        </div>
      )}
      {isloading && <Loading />}
    </div>
  );
};
export default HomePage;
