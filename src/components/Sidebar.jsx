import React from "react";
import BookmakerCard from "../components/BookmakerCard";
import SurebetCard from "../components/SurebetCard";

const Sidebar = ({ bookmakers, contests, tips }) => {
  return (
    <div className="space-y-6">
      {/* 🎯 Bookmakers */}
      <section>
        <h3 className="text-lg font-bold mb-3">Top Bookmakers</h3>
        <div className="space-y-3">
          {bookmakers.map((bk) => (
            <BookmakerCard key={bk.id} bookmaker={bk} />
          ))}
        </div>
      </section>

      {/* 🎯 Contests */}
      <section>
        <h3 className="text-lg font-bold mb-3">Betting Contests</h3>
        <div className="space-y-3">
          {contests.map((contest) => (
            <SurebetCard key={contest.id} contest={contest} />
          ))}
        </div>
      </section>

      {/* 🎯 Tips */}
      <section>
        <h3 className="text-lg font-bold mb-3">Betting Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          {tips.map((tip) => (
            <li key={tip.id}>{tip.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
