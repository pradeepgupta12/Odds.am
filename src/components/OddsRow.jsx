import React from "react";

const OddsRow = ({ match }) => {
  return (
    <tr className="border-b last:border-none hover:bg-gray-50">
      <td className="px-4 py-2">{match.teams}</td>
      <td className="px-4 py-2">{match.date}</td>
      <td className="px-4 py-2">{match.league}</td>
      <td className="px-4 py-2">{match.odds?.one ?? "-"}</td>
      <td className="px-4 py-2">{match.odds?.x ?? "-"}</td>
      <td className="px-4 py-2">{match.odds?.two ?? "-"}</td>
    </tr>
  );
};

export default OddsRow;
