const ListComponent = ({ title, items }) => {
  return (
    <div>
      {title && <h3 style={{ margin: "0 0 16px 0", padding: "0" }}>{title}</h3>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
