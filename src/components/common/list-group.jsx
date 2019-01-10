import React from "react";

export default function ListGroup(props) {
  const { items, textProperty, valueProperty, onItemSelect } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className="list-group-item"
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
