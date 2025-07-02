const Button = ({
  text,
  btnStyle,
  btnSrc,
}: {
  text?: string;
  btnStyle: string;
  btnSrc?: string;
}) => {
  return (
    <button className={btnStyle}>
      {text}
      <img src={btnSrc} />
    </button>
  );
};
export default Button;
