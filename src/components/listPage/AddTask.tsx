import Button from "../Button";

const AddTask = () => {
  return (
    <form className="flex flex-row gap-4">
      <input
        placeholder="Enter your task..."
        className="border-b-2 border-pink-700 p-4"
      />
      <Button
        text={"+"}
        btnStyle={
          "rounded-2xl p-4 bg-pink-500 shadow-lg shadow-indigo-500/50 text-2xl text-white"
        }
      />
    </form>
  );
};
export default AddTask;
