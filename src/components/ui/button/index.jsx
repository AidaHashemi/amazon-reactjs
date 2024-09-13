const Button = ({
  size = "medium",
  color = "primary",
  textColor = "#fff",
  text = "Button",
  borderRadius = "8px",
  onClick,
  width = "auto",
  style = {},
  disabled = false,
  type = "button",
  ...props
}) => {
  const getSizeStyle = (size) => {
    switch (size) {
      case "small":
        return { padding: "5px 10px", fontSize: "12px" };
      case "large":
        return { padding: "15px 30px", fontSize: "18px" };
      case "medium":
      default:
        return { padding: "10px 20px", fontSize: "16px" };
    }
  };

  const getColorStyle = (color) => {
    switch (color) {
      case "secondary":
        return { backgroundColor: "#6c757d" };
      case "success":
        return { backgroundColor: "#28a745" };
      case "danger":
        return { backgroundColor: "#dc3545" };
      case "warning":
        return { backgroundColor: "#ffc107" };
      case "none":
        return { backgroundColor: "transparent" };
      case "primary":
      default:
        return { backgroundColor: "#007bff" };
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{
        ...getSizeStyle(size),
        ...getColorStyle(color),
        color: textColor,
        borderRadius: borderRadius,
        border: "none",
        width: width,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
