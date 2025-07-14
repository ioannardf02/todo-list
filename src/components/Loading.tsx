const Loading = () => {
  return (
    <div className=" animate-pulse">
      <div className="flex flex-col gap-3 p-5">
        <div className="flex w-1/2 h-1/3 rounded-xl p-10 bg-violet-50"></div>
        <div className="flex w-1/4 h-1/3 rounded-xl p-10 bg-violet-50"></div>
      </div>
      <div className="flex flex-col rounded-xl bg-violet-50 h-1/2 p-16 gap-3">
        <div className="rounded-2xl bg-violet-100 h-2 w-1/3 p-2"></div>
        <div className="rounded-2xl bg-violet-100 h-2 w-1/3 p-2"></div>
        <div className="rounded-2xl bg-violet-100 h-2 w-1/3 p-2"></div>
        <div className="rounded-full bg-violet-100 h-5 w-1/4 p-6"></div>
      </div>
    </div>
  );
};

export default Loading;
