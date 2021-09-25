import React from "react";

export default function CategoryScreen(props) {
  const thisCategory = props.match.params.category;
  return <p>{thisCategory}</p>;
}
