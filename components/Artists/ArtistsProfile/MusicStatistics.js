import React from "react";
import { BsMusicNote } from "react-icons/bs";

const MusicStatistics = ({ musicData }) => {
  return (
    <ul className="row gap-3 grid grid-cols-2">
      {musicData.map((item) => (
        <li className="col m-0" key={item.id}>
          <BsMusicNote className="img-fluid" />
          <span>{item.title}</span>
          <em>{item.count}</em>
        </li>
      ))}
    </ul>
  );
};

export default MusicStatistics;
