// ResultData.js

export const matchResults = {
  "page_title": "Archive of Results",
  "navigation_tabs": [
    {"name": "Football", "is_active": true},
    {"name": "Tennis", "is_active": false},
    {"name": "Ice Hockey", "is_active": false},
    {"name": "e-Sports", "is_active": false},
    {"name": "Baseball", "is_active": false},
    {"name": "Basketball", "is_active": false}
  ],
  "date_options": [
    {"name": "Today", "is_selected": true},
    {"name": "Yesterday", "is_selected": false},
    {"name": "By Date", "is_selected": false}
  ],
  "search_box": {
    "placeholder": "Search for a Team or Competition"
  },
  "results_data": {
    "Football": [
      {
        "competition": "Mexico. Liga MX",
        "matchday": "Matchday 11",
        "matches": [
          {
            "time": "8:35",
            "home_team": {
              "name": "Tijuana",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/16716966472836721561_0"
            },
            "score": "2:0",
            "away_team": {
              "name": "Cruz Azul",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/4989612897988933015_0"
            },
            "status": "Finished"
          }
        ]
      },
      {
        "competition": "Uruguay. Primera Division",
        "matchday": "Matchday 9",
        "matches": [
          {
            "time": "5:30",
            "home_team": {
              "name": "Miramar Misiones",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/1078542021484658789_0"
            },
            "score": "0:0",
            "away_team": {
              "name": "Defensor Sporting",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/3310494627542918631_0"
            },
            "status": "Finished"
          }
        ]
      },
      {
        "competition": "Russia. Second League. Division B. Group 2",
        "matchday": "Matchday 25",
        "matches": [
          {
            "time": "10:30",
            "home_team": {
              "name": "Yenisey 2",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/6543354629920345033_0"
            },
            "score": "1:0",
            "away_team": {
              "name": "Baltika-2",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/10912825206865533680_0"
            },
            "status": "Finished"
          }
        ]
      },
      {
        "competition": "El Salvador. Primera Division",
        "matchday": "Matchday 14",
        "matches": [
          {
            "time": "5:30",
            "home_team": {
              "name": "FAS",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/17066047969415283034_0"
            },
            "score": "3:0",
            "away_team": {
              "name": "Fuerte",
              "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/16549714539075276883_0"
            },
            "status": "Finished"
          }
        ]
      }
    ],
    "Tennis": [
      {
        "competition": "ATP Masters 1000: Indian Wells",
        "matches": [
          {
            "time": "12:00",
            "home_player": {"name": "Djokovic N.", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/4449502215712296617_0"},
            "away_player": {"name": "Sinner J.", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/4449502215712296617_0"},
            "score_sets": "2:1",
            "score_details": "(6-4, 3-6, 6-3)",
            "status": "Finished"
          },
          {
            "time": "16:30",
            "home_player": {"name": "Alcaraz C.", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/4449502215712296617_0"},
            "away_player": {"name": "Medvedev D.", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/4449502215712296617_0"},
            "status": "Scheduled"
          }
        ]
      }
    ],
    "Ice Hockey": [
      {
        "competition": "NHL Regular Season",
        "matches": [
          {
            "time": "7:00",
            "home_team": {"name": "Boston Bruins", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/6494485114678186165_0"},
            "score": "4:3",
            "away_team": {"name": "Tampa Bay Lightning", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/3178637336570375155_0"},
            "score_details": "(OT)",
            "status": "Finished"
          },
          {
            "time": "9:30",
            "home_team": {"name": "Edmonton Oilers", "logo_description": "Oilers logo (Dummy)"},
            "score": "2:5",
            "away_team": {"name": "Toronto Maple Leafs", "logo_description": "Maple Leafs logo (Dummy)"},
            "score_details": "(3rd Period)",
            "status": "Finished"
          }
        ]
      }
    ],
    "e-Sports": [
      {
        "competition": "League of Legends: LEC Summer",
        "matches": [
          {
            "time": "18:00",
            "home_team": {"name": "Fnatic", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/2924276382968294503_0"},
            "score": "1:0",
            "away_team": {"name": "G2 Esports", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/850703444795298679_0"},
            "score_details": "(Bo1)",
            "status": "Finished"
          }
        ]
      }
    ],
    "Baseball": [
      {
        "competition": "MLB: Regular Season",
        "matches": [
          {
            "time": "11:00",
            "home_team": {"name": "NY Yankees", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/3808252390778526238_0"},
            "score": "5:2",
            "away_team": {"name": "Boston Red Sox", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/14382840666492598348_0"},
            "score_details": "(9th Inning)",
            "status": "Finished"
          }
        ]
      }
    ],
    "Basketball": [
      {
        "competition": "NBA Regular Season",
        "matches": [
          {
            "time": "10:30",
            "home_team": {"name": "LA Lakers", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/14489448267082292276_0"},
            "score": "115:110",
            "away_team": {"name": "Golden State Warriors", "logo_url": "http://googleusercontent.com/image_collection/image_retrieval/12455562935904379655_0"},
            "score_details": "(4th Quarter)",
            "status": "Finished"
          }
        ]
      }
    ]
  }
};