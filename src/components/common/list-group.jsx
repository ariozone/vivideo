import React from "react";

export default function ListGroup(props) {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedGenre
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            selectedGenre === item
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
