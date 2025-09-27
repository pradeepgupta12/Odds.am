import React from "react";
import OddsRow from "../components/OddsRow";

const OddsTable = ({ data = [] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow-sm">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
          <tr>
            <th className="px-4 py-2">Match</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">League</th>
            <th className="px-4 py-2">1</th>
            <th className="px-4 py-2">X</th>
            <th className="px-4 py-2">2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((match) => (
            <OddsRow key={match.id} match={match} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OddsTable;
