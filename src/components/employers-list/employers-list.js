import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
import EmployersAddForm from "../employers-add-form/employers-add-form";
const EmployersList = ({ database, deleteItem, addItem }) => {
  const element = database.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployersListItem
        key={id}
        {...itemProps}
        deleteItem={() => deleteItem(id)}
      />
    );
  });
  return (
    <>
      <ul className="app-list list-group">{element}</ul>
      <EmployersAddForm addItem={addItem} />
    </>
  );
};
export default EmployersList;
