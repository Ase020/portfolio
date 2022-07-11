import React from "react";
import "./portfolioList.scss";

function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "porfolioList active" : "porfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
