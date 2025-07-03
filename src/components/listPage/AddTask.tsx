import Button from "../Button";

const AddTask = () => {
  return (
    <form className="flex flex-row gap-4">
      <input
        placeholder="Enter your task..."
        className="border-b-2 border-fuchsia-800 focus:outline-hidden lg:text-lg md:text-xl text-base"
      />
      <Button
        text=""
        btnStyle={
          "rounded-lg lg:py-2 lg:px-3 md:py-2 md:px-3 px-2 py-1 bg-fuchsia-800 shadow-lg shadow-indigo-500/50 lg:text-3xl md:text-xl text-base font-semibold text-white"
        }
        imgSrc="plus.png"
      />
    </form>
  );
};
export default AddTask;
