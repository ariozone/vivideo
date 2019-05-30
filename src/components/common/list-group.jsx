import React from "react"

export default function ListGroup(props) {
  const {
    items,
    textProperty,
    valueProperty,
    onGenreSelect,
    selectedGenre
  } = props
  return (
    <ul className="list-group m-2 pointer text-white">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onGenreSelect(item)}
          className={
            selectedGenre === item
              ? "list-group-item active bg-dark"
              : "list-group-item bg-secondary"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  )
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
}
