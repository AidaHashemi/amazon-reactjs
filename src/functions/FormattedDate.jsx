// Helper Component for Date Formatting
const FormattedDate = () => {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  return <em>{date.toLocaleDateString("en-US", options)}</em>;
};

export default FormattedDate;
