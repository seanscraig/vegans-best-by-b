import './Button.css'

const Button = ({ type, value, styleClass, onClick }) => {
  return (
    <button
      className={styleClass}
      type={type === "submit" ? "submit" : "button"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
