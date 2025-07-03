import type { MouseEventHandler } from "react";

const Button = ({
  text,
  btnStyle,
  imgSrc,
  addTask,
}: {
  text?: string;
  btnStyle: string;
  imgSrc?: string;
  addTask?: MouseEventHandler;
}) => {
  return (
    <button className={btnStyle} onClick={addTask}>
      {text}
      {imgSrc && <img src={imgSrc} />}
    </button>
  );
};
export default Button;
