import React from "react";

export default function ListGroup(props) {
  const { items } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item._id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}
