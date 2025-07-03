const Button = ({
  text,
  btnStyle,
  imgSrc,
}: {
  text?: string;
  btnStyle: string;
  imgSrc?: string;
}) => {
  return (
    <button className={btnStyle}>
      {text}
      {imgSrc && <img src={imgSrc} />}
    </button>
  );
};
export default Button;
