import type { MouseEventHandler } from "react";

const Button = ({
  text,
  btnStyle,
  imgSrc,
  onClick,
}: {
  text?: string;
  btnStyle: string;
  imgSrc?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button className={btnStyle} onClick={onClick}>
      {text}
      {imgSrc && <img src={imgSrc} alt="icons" />}
    </button>
  );
};
export default Button;
