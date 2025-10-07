// // liveScore.js

// const liveScore = {
//   "Football": [
//     {
//       "team1": {
//         "name": "Team A",
//         "score": "1",
//         "logo": "https://img.link/team_a.png"
//       },
//       "team2": {
//         "name": "Team B",
//         "score": "2",
//         "logo": "https://img.link/team_b.png"
//       }
//     },
//     {
//       "team1": {
//         "name": "Team C",
//         "score": "0",
//         "logo": "https://img.link/team_c.png"
//       },
//       "team2": {
//         "name": "Team D",
//         "score": "0",
//         "logo": "https://img.link/team_d.png"
//       }
//     }
//   ],

//   "Tennis": {
//     "ATP_Beijing": [
//       {
//         "player1": {
//           "name": "David Goffin",
//           "score": "1",
//           "logo": "https://img.link/david_goffin.png"
//         },
//         "player2": {
//           "name": "Arthur Rinderknech",
//           "score": "1",
//           "logo": "https://img.link/arthur_rinderknech.png"
//         }
//       },
//       {
//         "player1": {
//           "name": "Alex De Minaur",
//           "score": "0",
//           "logo": "https://img.link/alex_de_minaur.png"
//         },
//         "player2": {
//           "name": "Bu Yunchaokete",
//           "score": "0",
//           "logo": "https://img.link/bu_yunchaokete.png"
//         }
//       },
//       {
//         "player1": {
//           "name": "Juncheng Shang",
//           "score": "0",
//           "logo": "https://img.link/juncheng_shang.png"
//         },
//         "player2": {
//           "name": "Arthur Cazaux",
//           "score": "0",
//           "logo": "https://img.link/arthur_cazaux.png"
//         }
//       }
//     ],

//     "ATP_Tokyo": [
//       {
//         "player1": {
//           "name": "Sho Shimabukuro",
//           "score": "0",
//           "logo": "https://img.link/sho_shimabukuro.png"
//         },
//         "player2": {
//           "name": "Sebastian Korda",
//           "score": "2",
//           "logo": "https://img.link/sebastian_korda.png"
//         }
//       }
//     ],

//     "WTA_Beijing": [
//       {
//         "player1": {
//           "name": "Marie Bouzkova",
//           "score": "0",
//           "logo": "https://img.link/marie_bouzkova.png"
//         },
//         "player2": {
//           "name": "Magda Linette",
//           "score": "0",
//           "logo": "https://img.link/magda_linette.png"
//         }
//       },
//       {
//         "player1": {
//           "name": "Elena Rybakina",
//           "score": "0",
//           "logo": "https://img.link/elena_rybakina.png"
//         },
//         "player2": {
//           "name": "Caty McNally",
//           "score": "0",
//           "logo": "https://img.link/caty_mcnally.png"
//         }
//       }
//     ]
//   },

//   "AussieRules": [
//     {
//       "team1": {
//         "name": "Melbourne Demons",
//         "score": "75",
//         "logo": "https://img.link/melbourne_demons.png"
//       },
//       "team2": {
//         "name": "Sydney Swans",
//         "score": "68",
//         "logo": "https://img.link/sydney_swans.png"
//       }
//     },
//     {
//       "team1": {
//         "name": "West Coast Eagles",
//         "score": "52",
//         "logo": "https://img.link/west_coast_eagles.png"
//       },
//       "team2": {
//         "name": "Hawthorn Hawks",
//         "score": "60",
//         "logo": "https://img.link/hawthorn_hawks.png"
//       }
//     }
//   ]
// };

// export default liveScore;

const liveScore = {
  "Football": [
    {
      "id": "foot-1",
      "team1": {
        "name": "Team A",
        "score": "1",
        "logo": "https://img.link/team_a.png"
      },
      "team2": {
        "name": "Team B",
        "score": "2",
        "logo": "https://img.link/team_b.png"
      }
    },
    {
      "id": "foot-2",
      "team1": {
        "name": "Team C",
        "score": "0",
        "logo": "https://img.link/team_c.png"
      },
      "team2": {
        "name": "Team D",
        "score": "0",
        "logo": "https://img.link/team_d.png"
      }
    }
  ],

  "Tennis": {
    "ATP_Beijing": [
      {
        "id": "ten-1",
        "player1": {
          "name": "David Goffin",
          "score": "1",
          "logo": "https://img.link/david_goffin.png"
        },
        "player2": {
          "name": "Arthur Rinderknech",
          "score": "1",
          "logo": "https://img.link/arthur_rinderknech.png"
        }
      },
      {
        "id": "ten-2",
        "player1": {
          "name": "Alex De Minaur",
          "score": "0",
          "logo": "https://img.link/alex_de_minaur.png"
        },
        "player2": {
          "name": "Bu Yunchaokete",
          "score": "0",
          "logo": "https://img.link/bu_yunchaokete.png"
        }
      },
      {
        "id": "ten-3",
        "player1": {
          "name": "Juncheng Shang",
          "score": "0",
          "logo": "https://img.link/juncheng_shang.png"
        },
        "player2": {
          "name": "Arthur Cazaux",
          "score": "0",
          "logo": "https://img.link/arthur_cazaux.png"
        }
      }
    ],

    "ATP_Tokyo": [
      {
        "id": "ten-4",
        "player1": {
          "name": "Sho Shimabukuro",
          "score": "0",
          "logo": "https://img.link/sho_shimabukuro.png"
        },
        "player2": {
          "name": "Sebastian Korda",
          "score": "2",
          "logo": "https://img.link/sebastian_korda.png"
        }
      }
    ],

    "WTA_Beijing": [
      {
        "id": "ten-5",
        "player1": {
          "name": "Marie Bouzkova",
          "score": "0",
          "logo": "https://img.link/marie_bouzkova.png"
        },
        "player2": {
          "name": "Magda Linette",
          "score": "0",
          "logo": "https://img.link/magda_linette.png"
        }
      },
      {
        "id": "ten-6",
        "player1": {
          "name": "Elena Rybakina",
          "score": "0",
          "logo": "https://img.link/elena_rybakina.png"
        },
        "player2": {
          "name": "Caty McNally",
          "score": "0",
          "logo": "https://img.link/caty_mcnally.png"
        }
      }
    ]
  },

  "AussieRules": [
    {
      "id": "aussie-1",
      "team1": {
        "name": "Melbourne Demons",
        "score": "75",
        "logo": "https://img.link/melbourne_demons.png"
      },
      "team2": {
        "name": "Sydney Swans",
        "score": "68",
        "logo": "https://img.link/sydney_swans.png"
      }
    },
    {
      "id": "aussie-2",
      "team1": {
        "name": "West Coast Eagles",
        "score": "52",
        "logo": "https://img.link/west_coast_eagles.png"
      },
      "team2": {
        "name": "Hawthorn Hawks",
        "score": "60",
        "logo": "https://img.link/hawthorn_hawks.png"
      }
    }
  ]
};

export default liveScore;
