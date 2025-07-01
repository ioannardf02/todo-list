const Button = ({ text, btnStyle }: { text: string; btnStyle: string }) => {
  return <button className={btnStyle}>{text}</button>;
};
export default Button;
