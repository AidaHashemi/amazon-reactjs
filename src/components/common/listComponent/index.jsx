// ListComponent.jsx
const ListComponent = ({ title, items }) => {
  return (
    <div>
      <ul>
        <li>{title}</li>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
