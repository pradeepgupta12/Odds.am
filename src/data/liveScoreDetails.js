// // liveScoreDetailsComprehensive.js

// const liveScoreDetails = {
//   "liveEvents": [

//     // --- Football Match 1 (Comprehensive Details) ---
//     {
//       "id": "foot-1",
//       "sport": "Football",
//       "matchup": "Team A vs Team B",
//       "league": "Premier League (Dummy)",
//       "dateTime": "2025-10-03T18:00:00Z",
//       "status": "Live",
//       "matchTime": "75'",
//       "teams": {
//         "home": {
//           "name": "Team A",
//           "score": "1",
//           "logo": "https://img.link/team_a.png"
//         },
//         "away": {
//           "name": "Team B",
//           "score": "2",
//           "logo": "https://img.link/team_b.png"
//         }
//       },
//       "liveStats": { // अतिरिक्त आँकड़े
//         "possession": "48% - 52%",
//         "shotsOnTarget": "3 - 5",
//         "shotsOffTarget": "7 - 4",
//         "corners": "5 - 3",
//         "fouls": "10 - 8",
//         "yellowCards": "2 - 1",
//         "redCards": "0 - 0"
//       },
//       "periodScores": {
//         "halfTime": "1-1",
//         "currentPeriod": "2nd Half"
//       },
//       "inPlayOdds": { // लाइव बेटिंग के लिए संभावित ऑड्स
//         "homeWin": 4.50,
//         "draw": 3.20,
//         "awayWin": 1.90,
//         "nextGoal": "Team B (1.50)"
//       },
//       "timeline": [ // मैच इवेंट्स का टाइमलाइन
//         { "time": "25'", "event": "Goal (Team A)", "scorer": "A. Player" },
//         { "time": "40'", "event": "Yellow Card (Team B)", "player": "B. Defender" },
//         { "time": "45+2'", "event": "Goal (Team B)", "scorer": "B. Striker" },
//         { "time": "60'", "event": "Goal (Team B)", "scorer": "B. Midfielder" }
//       ]
//     },

//     // --- Tennis Match 1 (Comprehensive Details) ---
//     {
//       "id": "ten-1",
//       "sport": "Tennis",
//       "matchup": "David Goffin vs Arthur Rinderknech",
//       "tournament": "ATP_Beijing",
//       "round": "Round of 32",
//       "status": "Live",
//       "currentSet": 3,
//       "players": {
//         "player1": {
//           "name": "David Goffin",
//           "setScore": "1",
//           "logo": "https://img.link/david_goffin.png",
//           "currentSetGames": 2,
//           "currentSetPoints": "40-30",
//           "isServing": false
//         },
//         "player2": {
//           "name": "Arthur Rinderknech",
//           "setScore": "1",
//           "logo": "https://img.link/arthur_rinderknech.png",
//           "currentSetGames": 3,
//           "currentSetPoints": "40-30",
//           "isServing": true
//         }
//       },
//       "scoreBreakdown": [
//         { "set": 1, "score": "6-4", "winner": "Goffin" },
//         { "set": 2, "score": "3-6", "winner": "Rinderknech" },
//         { "set": 3, "score": "2-3", "winner": "N/A" }
//       ],
//       "inPlayOdds": {
//         "matchWinner": {
//           "Goffin": 2.10,
//           "Rinderknech": 1.70
//         },
//         "nextGameWinner": {
//           "Goffin": 1.55,
//           "Rinderknech": 2.30
//         }
//       },
//       "stats": { // टेनिस के विशिष्ट आँकड़े
//         "aces": "5 - 7",
//         "doubleFaults": "3 - 2",
//         "firstServeIn": "65% - 72%",
//         "breakPointsWon": "1/4 - 2/3"
//       }
//     },

//     // --- AussieRules Match 1 (Comprehensive Details) ---
//     {
//       "id": "aussie-1",
//       "sport": "AussieRules",
//       "matchup": "Melbourne Demons vs Sydney Swans",
//       "league": "AFL (Dummy)",
//       "status": "Live",
//       "matchTime": "Q4, 15:30 min", // क्वार्टर और शेष समय
//       "teams": {
//         "home": {
//           "name": "Melbourne Demons",
//           "score": "75",
//           "logo": "https://img.link/melbourne_demons.png"
//         },
//         "away": {
//           "name": "Sydney Swans",
//           "score": "68",
//           "logo": "https://img.link/sydney_swans.png"
//         }
//       },
//       "scoreDetails": {
//         "goals": "11 - 10",
//         "behinds": "9 - 8"
//       },
//       "periodScores": {
//         "Q1": "20-15",
//         "Q2": "40-35",
//         "Q3": "60-50",
//         "currentPeriod": "4th Quarter"
//       },
//       "liveStats": {
//         "kicks": "150 - 145",
//         "handballs": "120 - 130",
//         "marks": "70 - 65",
//         "tackles": "40 - 35"
//       },
//       "inPlayOdds": {
//         "matchWinner": {
//           "Demons": 1.40,
//           "Swans": 3.50
//         }
//       }
//     }
//     //... अन्य सभी मैचों के लिए इसी तरह की व्यापक संरचना
//   ]
// };

// export default liveScoreDetails;

const liveScoreDetails = {
  "liveEvents": [
    // Football Match 1
    {
      "id": "foot-1",
      "sport": "Football",
      "matchup": "Team A vs Team B",
      "league": "Premier League (Dummy)",
      "dateTime": "2025-10-03T18:00:00Z",
      "status": "Live",
      "matchTime": "75'",
      "teams": {
        "home": {
          "name": "Team A",
          "score": "1",
          "logo": "https://img.link/team_a.png"
        },
        "away": {
          "name": "Team B",
          "score": "2",
          "logo": "https://img.link/team_b.png"
        }
      },
      "liveStats": {
        "possession": "48% - 52%",
        "shotsOnTarget": "3 - 5",
        "shotsOffTarget": "7 - 4",
        "corners": "5 - 3",
        "fouls": "10 - 8",
        "yellowCards": "2 - 1",
        "redCards": "0 - 0"
      },
      "periodScores": {
        "halfTime": "1-1",
        "currentPeriod": "2nd Half"
      },
      "inPlayOdds": {
        "homeWin": 4.50,
        "draw": 3.20,
        "awayWin": 1.90,
        "nextGoal": "Team B (1.50)"
      },
      "timeline": [
        { "time": "25'", "event": "Goal (Team A)", "scorer": "A. Player" },
        { "time": "40'", "event": "Yellow Card (Team B)", "player": "B. Defender" },
        { "time": "45+2'", "event": "Goal (Team B)", "scorer": "B. Striker" },
        { "time": "60'", "event": "Goal (Team B)", "scorer": "B. Midfielder" }
      ]
    },
    // Football Match 2
    {
      "id": "foot-2",
      "sport": "Football",
      "matchup": "Team C vs Team D",
      "league": "Premier League (Dummy)",
      "dateTime": "2025-10-03T19:00:00Z",
      "status": "Live",
      "matchTime": "30'",
      "teams": {
        "home": {
          "name": "Team C",
          "score": "0",
          "logo": "https://img.link/team_c.png"
        },
        "away": {
          "name": "Team D",
          "score": "0",
          "logo": "https://img.link/team_d.png"
        }
      },
      "liveStats": {
        "possession": "50% - 50%",
        "shotsOnTarget": "1 - 1",
        "shotsOffTarget": "2 - 2",
        "corners": "2 - 1",
        "fouls": "5 - 4",
        "yellowCards": "0 - 0",
        "redCards": "0 - 0"
      },
      "periodScores": {
        "halfTime": "0-0",
        "currentPeriod": "1st Half"
      },
      "inPlayOdds": {
        "homeWin": 2.50,
        "draw": 3.00,
        "awayWin": 2.80
      },
      "timeline": [
        { "time": "10'", "event": "Shot (Team C)", "player": "C. Forward" },
        { "time": "20'", "event": "Corner (Team D)", "player": "D. Midfielder" }
      ]
    },

    // Tennis Match 1
    {
      "id": "ten-1",
      "sport": "Tennis",
      "matchup": "David Goffin vs Arthur Rinderknech",
      "tournament": "ATP_Beijing",
      "round": "Round of 32",
      "status": "Live",
      "currentSet": 3,
      "players": {
        "player1": {
          "name": "David Goffin",
          "setScore": "1",
          "logo": "https://img.link/david_goffin.png",
          "currentSetGames": 2,
          "currentSetPoints": "40-30",
          "isServing": false
        },
        "player2": {
          "name": "Arthur Rinderknech",
          "setScore": "1",
          "logo": "https://img.link/arthur_rinderknech.png",
          "currentSetGames": 3,
          "currentSetPoints": "40-30",
          "isServing": true
        }
      },
      "scoreBreakdown": [
        { "set": 1, "score": "6-4", "winner": "Goffin" },
        { "set": 2, "score": "3-6", "winner": "Rinderknech" },
        { "set": 3, "score": "2-3", "winner": "N/A" }
      ],
      "inPlayOdds": {
        "matchWinner": {
          "Goffin": 2.10,
          "Rinderknech": 1.70
        },
        "nextGameWinner": {
          "Goffin": 1.55,
          "Rinderknech": 2.30
        }
      },
      "stats": {
        "aces": "5 - 7",
        "doubleFaults": "3 - 2",
        "firstServeIn": "65% - 72%",
        "breakPointsWon": "1/4 - 2/3"
      }
    },
    // Tennis Match 2
    {
      "id": "ten-2",
      "sport": "Tennis",
      "matchup": "Alex De Minaur vs Bu Yunchaokete",
      "tournament": "ATP_Beijing",
      "round": "Round of 32",
      "status": "Live",
      "currentSet": 1,
      "players": {
        "player1": {
          "name": "Alex De Minaur",
          "setScore": "0",
          "logo": "https://img.link/alex_de_minaur.png",
          "currentSetGames": 1,
          "currentSetPoints": "15-0",
          "isServing": true
        },
        "player2": {
          "name": "Bu Yunchaokete",
          "setScore": "0",
          "logo": "https://img.link/bu_yunchaokete.png",
          "currentSetGames": 0,
          "currentSetPoints": "0-15",
          "isServing": false
        }
      },
      "scoreBreakdown": [
        { "set": 1, "score": "1-0", "winner": "N/A" }
      ],
      "inPlayOdds": {
        "matchWinner": {
          "De Minaur": 1.20,
          "Yunchaokete": 4.50
        },
        "nextGameWinner": {
          "De Minaur": 1.10,
          "Yunchaokete": 6.00
        }
      },
      "stats": {
        "aces": "2 - 0",
        "doubleFaults": "0 - 1",
        "firstServeIn": "70% - 60%",
        "breakPointsWon": "0/0 - 0/0"
      }
    },
    // Tennis Match 3
    {
      "id": "ten-3",
      "sport": "Tennis",
      "matchup": "Juncheng Shang vs Arthur Cazaux",
      "tournament": "ATP_Beijing",
      "round": "Round of 32",
      "status": "Live",
      "currentSet": 1,
      "players": {
        "player1": {
          "name": "Juncheng Shang",
          "setScore": "0",
          "logo": "https://img.link/juncheng_shang.png",
          "currentSetGames": 0,
          "currentSetPoints": "30-15",
          "isServing": true
        },
        "player2": {
          "name": "Arthur Cazaux",
          "setScore": "0",
          "logo": "https://img.link/arthur_cazaux.png",
          "currentSetGames": 0,
          "currentSetPoints": "15-30",
          "isServing": false
        }
      },
      "scoreBreakdown": [
        { "set": 1, "score": "0-0", "winner": "N/A" }
      ],
      "inPlayOdds": {
        "matchWinner": {
          "Shang": 1.80,
          "Cazaux": 2.00
        },
        "nextGameWinner": {
          "Shang": 1.30,
          "Cazaux": 3.50
        }
      },
      "stats": {
        "aces": "0 - 0",
        "doubleFaults": "0 - 0",
        "firstServeIn": "55% - 50%",
        "breakPointsWon": "0/0 - 0/0"
      }
    },
    // Tennis Match 4 (ATP Tokyo)
    {
      "id": "ten-4",
      "sport": "Tennis",
      "matchup": "Sho Shimabukuro vs Sebastian Korda",
      "tournament": "ATP_Tokyo",
      "round": "Round of 32",
      "status": "Live",
      "currentSet": 2,
      "players": {
        "player1": {
          "name": "Sho Shimabukuro",
          "setScore": "0",
          "logo": "https://img.link/sho_shimabukuro.png",
          "currentSetGames": 1,
          "currentSetPoints": "0-30",
          "isServing": false
        },
        "player2": {
          "name": "Sebastian Korda",
          "setScore": "2",
          "logo": "https://img.link/sebastian_korda.png",
          "currentSetGames": 4,
          "currentSetPoints": "30-0",
          "isServing": true
        }
      },
      "scoreBreakdown": [
        { "set": 1, "score": "3-6", "winner": "Korda" },
        { "set": 2, "score": "1-4", "winner": "N/A" }
      ],
      "inPlayOdds": {
        "matchWinner": {
          "Shimabukuro": 5.00,
          "Korda": 1.15
        },
        "nextGameWinner": {
          "Shimabukuro": 3.00,
          "Korda": 1.35
        }
      },
      "stats": {
        "aces": "1 - 4",
        "doubleFaults": "2 - 1",
        "firstServeIn": "60% - 75%",
        "breakPointsWon": "0/2 - 2/3"
      }
    },
    // Tennis Match 5 (WTA Beijing)
    {
      "id": "ten-5",
      "sport": "Tennis",
      "matchup": "Marie Bouzkova vs Magda Linette",
      "tournament": "WTA_Beijing",
      "round": "Round of 32",
      "status": "Live",
      "currentSet": 1,
      "players": {
        "player1": {
          "name": "Marie Bouzkova",
          "setScore": "0",
          "logo": "https://img.link/marie_bouzkova.png",
          "currentSetGames": 2,
          "currentSetPoints": "40-15",
          "isServing": true
        },
        "player2": {
          "name": "Magda Linette",
          "setScore": "0",
          "logo": "https://img.link/magda_linette.png",
          "currentSetGames": 1,
          "currentSetPoints": "15-40",
          "isServing": false
        }
      },
      "scoreBreakdown": [
        { "set": 1, "score": "2-1", "winner": "N/A" }
      ],
      "inPlayOdds": {
        "matchWinner": {
          "Bouzkova": 1.60,
          "Linette": 2.30
        },
        "nextGameWinner": {
          "Bouzkova": 1.25,
          "Linette": 3.80
        }
      },
      "stats": {
        "aces": "0 - 1",
        "doubleFaults": "1 - 0",
        "firstServeIn": "68% - 62%",
        "breakPointsWon": "1/1 - 0/1"
      }
    },
    // Tennis Match 6 (WTA Beijing)
    {
      "id": "ten-6",
      "sport": "Tennis",
      "matchup": "Elena Rybakina vs Caty McNally",
      "tournament": "WTA_Beijing",
      "round": "Round of 32",
      "status": "Live",
      "currentSet": 1,
      "players": {
        "player1": {
          "name": "Elena Rybakina",
          "setScore": "0",
          "logo": "https://img.link/elena_rybakina.png",
          "currentSetGames": 3,
          "currentSetPoints": "30-0",
          "isServing": true
        },
        "player2": {
          "name": "Caty McNally",
          "setScore": "0",
          "logo": "https://img.link/caty_mcnally.png",
          "currentSetGames": 0,
          "currentSetPoints": "0-30",
          "isServing": false
        }
      },
      "scoreBreakdown": [
        { "set": 1, "score": "3-0", "winner": "N/A" }
      ],
      "inPlayOdds": {
        "matchWinner": {
          "Rybakina": 1.05,
          "McNally": 8.50
        },
        "nextGameWinner": {
          "Rybakina": 1.05,
          "McNally": 8.00
        }
      },
      "stats": {
        "aces": "3 - 0",
        "doubleFaults": "0 - 0",
        "firstServeIn": "80% - 55%",
        "breakPointsWon": "1/1 - 0/0"
      }
    },

    // AussieRules Match 1
    {
      "id": "aussie-1",
      "sport": "AussieRules",
      "matchup": "Melbourne Demons vs Sydney Swans",
      "league": "AFL (Dummy)",
      "status": "Live",
      "matchTime": "Q4, 15:30 min",
      "teams": {
        "home": {
          "name": "Melbourne Demons",
          "score": "75",
          "logo": "https://img.link/melbourne_demons.png"
        },
        "away": {
          "name": "Sydney Swans",
          "score": "68",
          "logo": "https://img.link/sydney_swans.png"
        }
      },
      "scoreDetails": {
        "goals": "11 - 10",
        "behinds": "9 - 8"
      },
      "periodScores": {
        "Q1": "20-15",
        "Q2": "40-35",
        "Q3": "60-50",
        "currentPeriod": "4th Quarter"
      },
      "liveStats": {
        "kicks": "150 - 145",
        "handballs": "120 - 130",
        "marks": "70 - 65",
        "tackles": "40 - 35"
      },
      "inPlayOdds": {
        "matchWinner": {
          "Demons": 1.40,
          "Swans": 3.50
        }
      }
    },
    // AussieRules Match 2
    {
      "id": "aussie-2",
      "sport": "AussieRules",
      "matchup": "West Coast Eagles vs Hawthorn Hawks",
      "league": "AFL (Dummy)",
      "status": "Live",
      "matchTime": "Q3, 20:45 min",
      "teams": {
        "home": {
          "name": "West Coast Eagles",
          "score": "52",
          "logo": "https://img.link/west_coast_eagles.png"
        },
        "away": {
          "name": "Hawthorn Hawks",
          "score": "60",
          "logo": "https://img.link/hawthorn_hawks.png"
        }
      },
      "scoreDetails": {
        "goals": "7 - 8",
        "behinds": "10 - 12"
      },
      "periodScores": {
        "Q1": "15-20",
        "Q2": "30-35",
        "Q3": "45-50",
        "currentPeriod": "3rd Quarter"
      },
      "liveStats": {
        "kicks": "120 - 130",
        "handballs": "90 - 100",
        "marks": "50 - 55",
        "tackles": "30 - 32"
      },
      "inPlayOdds": {
        "matchWinner": {
          "Eagles": 2.80,
          "Hawks": 1.50
        }
      }
    }
  ]
};

export default liveScoreDetails;