import Button from "../Button";

const InputTask = () => {
  return (
    <div>
      <ul>
        <li className="gap-3 flex justify-between">
          <div>
            <input type="checkbox" />
            <label>Wash the dishes</label>
          </div>
          <div>
            <Button text="E" btnStyle="" />
            <Button text="D" btnStyle="" />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default InputTask;
