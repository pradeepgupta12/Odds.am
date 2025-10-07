// // LeagueDetailPage.js

// export const LeagueMatchesDetail = [
//   {
//     "id": "midtjylland_sturm_europa_md1",
//     "competition": "Europa League",
//     "matchday": "Matchday 1",
//     "date": "2025-10-01",
//     "time": "22:15",
//     "venue": "MCH Arena, Herning (Denmark)",
//     "referee": "Felix Zwayer (Germany)",
//     "attendance": "14,200",
//     "teams": {
//       "home": {
//         "name": "Midtjylland",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Thomas Thomasberg",
//         "formation": "4-3-3",
//         "lineup": ["Lössl", "Anderson", "Dalsgaard", "Juninho", "Paulinho", "Olsen", "Charles", "Martinez", "Isaksen", "Chilufya", "Cho Gue-sung"],
//         "bench": ["Madsen", "Sviatchenko", "Dyhr", "Kristensen"],
//         "recent_form": ["W","L","D","W","W"]
//       },
//       "away": {
//         "name": "Sturm Graz",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Christian Ilzer",
//         "formation": "4-2-3-1",
//         "lineup": ["Siebenhandl", "Gazibegovic", "Affengruber", "Wüthrich", "Dante", "Hierländer", "Prass", "Horvat", "Bøving", "Sarkaria", "Emegha"],
//         "bench": ["Jantscher","Johnston","Okonkwo"],
//         "recent_form": ["W","W","D","W","L"]
//       }
//     },
//     "odds": { "1": 1.73, "X": 4.40, "2": 4.59, "over_2.5": 1.95, "under_2.5": 1.80, "btts_yes": 1.85, "btts_no": 1.95 },
//     "head_to_head": { "played": 2, "midtjylland_wins": 1, "sturm_wins": 1, "draws": 0 },
//     "stats": { "possession": { "home": 54, "away": 46 }, "shots_on_target": { "home": 5, "away": 4 } },
//     "tip": "Home Win"
//   },
//   {
//     "id": "paok_maccabi_europa_md1",
//     "competition": "Europa League",
//     "matchday": "Matchday 1",
//     "date": "2025-10-01",
//     "time": "22:15",
//     "venue": "Toumba Stadium, Thessaloniki",
//     "referee": "Antonio Mateu Lahoz (Spain)",
//     "attendance": "28,000",
//     "teams": {
//       "home": {
//         "name": "PAOK",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Razvan Lucescu",
//         "formation": "4-2-3-1",
//         "lineup": ["Kotarski","Sastre","Michailidis","Ingason","Vierinha","Schwab","Kurtic","Zivkovic","Biseswar","Konstantelias","Oliveira"],
//         "bench": ["Tzimas","Koulierakis"],
//         "recent_form": ["W","D","W","W","L"]
//       },
//       "away": {
//         "name": "Maccabi Tel Aviv",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Robbie Keane",
//         "formation": "4-3-3",
//         "lineup": ["Peretz","Saborit","Menachem","Shahar","Golasa","Perica","Kanichowsky","Gloukh","Davidzada","Ben Chaim","Zahavi"],
//         "bench": ["Cohen","Jovanovic"],
//         "recent_form": ["L","W","W","W","D"]
//       }
//     },
//     "odds": { "1": 1.98, "X": 3.65, "2": 4.12, "over_2.5": 2.00, "under_2.5": 1.75, "btts_yes": 1.82, "btts_no": 2.00 },
//     "head_to_head": { "played": 0, "paok_wins": 0, "maccabi_wins": 0, "draws": 0 },
//     "stats": { "possession": { "home": 50, "away": 50 } },
//     "tip": "Under 2.5 Goals"
//   },
//   {
//     "id": "getafe_alaves_laliga_md6",
//     "competition": "La Liga",
//     "matchday": "Matchday 6",
//     "date": "2025-10-01",
//     "time": "22:30",
//     "venue": "Coliseum Alfonso Pérez, Getafe",
//     "referee": "Carlos Del Cerro Grande",
//     "attendance": "15,600",
//     "teams": {
//       "home": {
//         "name": "Getafe",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "José Bordalás",
//         "formation": "4-4-2",
//         "lineup": ["Soria","Djene","Maksimovic","Greenwood","Mata","Unal","Alderete","Arambarri","Gaston","Portu","Carmona"],
//         "bench": ["Mayoral","Alvarez"],
//         "recent_form": ["D","W","L","W","D"]
//       },
//       "away": {
//         "name": "Alaves",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Luis García Plaza",
//         "formation": "4-2-3-1",
//         "lineup": ["Sivera","Tenaglia","Duarte","Marin","Navarro","Guridi","Benavidez","Rioja","Blanco","Hagi","Kike Garcia"],
//         "bench": ["Villalibre","Pacheco"],
//         "recent_form": ["L","L","W","D","W"]
//       }
//     },
//     "odds": { "1": 2.39, "X": 2.89, "2": 3.91, "over_2.5": 2.20, "under_2.5": 1.65, "btts_yes": 2.05, "btts_no": 1.75 },
//     "head_to_head": { "played": 10, "getafe_wins": 4, "alaves_wins": 3, "draws": 3 },
//     "stats": { "possession": { "home": 47, "away": 53 } },
//     "tip": "Draw"
//   },
//   {
//     "id": "newcastle_bradford_leaguecup_md3",
//     "competition": "League Cup",
//     "matchday": "Matchday 3",
//     "date": "2025-10-02",
//     "time": "00:15",
//     "venue": "St James' Park, Newcastle",
//     "referee": "Michael Oliver",
//     "attendance": "41,500",
//     "teams": {
//       "home": {
//         "name": "Newcastle United",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Eddie Howe",
//         "formation": "4-3-3",
//         "lineup": ["Pope","Trippier","Botman","Schar","Burn","Guimaraes","Joelinton","Longstaff","Gordon","Isak","Barnes"],
//         "bench": ["Wilson","Almiron"],
//         "recent_form": ["W","W","W","L","W"]
//       },
//       "away": {
//         "name": "Bradford City",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Graham Alexander",
//         "formation": "4-4-2",
//         "lineup": ["Lewis","Halliday","Stubbs","Platt","Ridehalgh","Smallwood","Gilliead","Walker","Pereira","Cook","Smith"],
//         "bench": ["Banks","Kavanagh"],
//         "recent_form": ["L","D","W","L","L"]
//       }
//     },
//     "odds": { "1": 1.16, "X": 9.20, "2": 20.0 },
//     "tip": "Newcastle -1.5 Handicap"
//   },
//   {
//     "id": "tottenham_doncaster_leaguecup_md3",
//     "competition": "League Cup",
//     "matchday": "Matchday 3",
//     "date": "2025-10-02",
//     "time": "00:15",
//     "venue": "Tottenham Hotspur Stadium, London",
//     "referee": "Anthony Taylor",
//     "attendance": "55,000",
//     "teams": {
//       "home": {
//         "name": "Tottenham Hotspur",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Ange Postecoglou",
//         "formation": "4-3-3",
//         "lineup": ["Vicario","Porro","Romero","van de Ven","Udogie","Bissouma","Maddison","Sarr","Kulusevski","Richarlison","Son"],
//         "bench": ["Lo Celso","Bentancur"],
//         "recent_form": ["W","W","L","W","D"]
//       },
//       "away": {
//         "name": "Doncaster Rovers",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Grant McCann",
//         "formation": "4-4-2",
//         "lineup": ["Mitchell","Williams","Anderson","Faulkner","Brown","Rowe","Close","Molyneux","Biggins","Miller","Agard"],
//         "bench": ["Taylor","Barlow"],
//         "recent_form": ["L","L","W","D","L"]
//       }
//     },
//     "odds": { "1": 1.20, "X": 7.90, "2": 15.5 },
//     "tip": "Tottenham Clean Sheet"
//   },
//   {
//     "id": "huddersfield_mancity_leaguecup_md3",
//     "competition": "League Cup",
//     "matchday": "Matchday 3",
//     "date": "2025-10-02",
//     "time": "00:15",
//     "venue": "John Smith’s Stadium, Huddersfield",
//     "referee": "Craig Pawson",
//     "attendance": "21,000",
//     "teams": {
//       "home": {
//         "name": "Huddersfield Town",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Darren Moore",
//         "formation": "4-2-3-1",
//         "lineup": ["Nicholls","Turton","Helik","Pearson","Jackson","Hogg","Rudoni","Thomas","Koroma","Holmes","Ward"],
//         "bench": ["Nakayama","Wiles"],
//         "recent_form": ["L","D","L","L","W"]
//       },
//       "away": {
//         "name": "Manchester City",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Pep Guardiola",
//         "formation": "4-3-3",
//         "lineup": ["Ederson","Walker","Dias","Gvardiol","Ake","Rodri","Foden","De Bruyne","Silva","Haaland","Doku"],
//         "bench": ["Grealish","Alvarez"],
//         "recent_form": ["W","W","W","W","D"]
//       }
//     },
//     "odds": { "1": 15.0, "X": 8.20, "2": 1.20 },
//     "tip": "Manchester City -2 Handicap"
//   },
//   {
//     "id": "braga_feyenoord_europa_md1",
//     "competition": "Europa League",
//     "matchday": "Matchday 1",
//     "date": "2025-10-02",
//     "time": "00:30",
//     "venue": "Estádio Municipal de Braga, Portugal",
//     "referee": "Daniele Orsato",
//     "attendance": "28,450",
//     "teams": {
//       "home": {
//         "name": "Braga",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Artur Jorge",
//         "formation": "4-2-3-1",
//         "lineup": ["Matheus","Fonte","Niakaté","Gómez","Sequeira","Carvalho","Musrati","Bruma","Horta","Rodrigues","Banza"],
//         "bench": ["Ruiz","Lopes"],
//         "recent_form": ["W","D","W","L","W"]
//       },
//       "away": {
//         "name": "Feyenoord",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Arne Slot",
//         "formation": "4-3-3",
//         "lineup": ["Bijlow","Geertruida","Trauner","Hancko","Hartman","Wieffer","Timber","Stengs","Paixão","Szymanski","Gimenez"],
//         "bench": ["Dilrosun","Ivanusec"],
//         "recent_form": ["W","W","W","D","W"]
//       }
//     },
//     "odds": { "1": 2.37, "X": 3.64, "2": 3.12 },
//     "tip": "Both Teams to Score"
//   },
//   {
//     "id": "freiburg_basel_europa_md1",
//     "competition": "Europa League",
//     "matchday": "Matchday 1",
//     "date": "2025-10-02",
//     "time": "00:30",
//     "venue": "Europa-Park Stadion, Freiburg",
//     "referee": "Szymon Marciniak",
//     "attendance": "33,000",
//     "teams": {
//       "home": {
//         "name": "Freiburg",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Christian Streich",
//         "formation": "4-4-2",
//         "lineup": ["Flekken","Kubler","Lienhart","Ginter","Gunter","Eggestein","Höfler","Doan","Grifo","Holer","Gregoritsch"],
//         "bench": ["Keitel","Sallai"],
//         "recent_form": ["W","L","W","D","W"]
//       },
//       "away": {
//         "name": "Basel",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
//         "coach": "Heiko Vogel",
//         "formation": "4-2-3-1",
//         "lineup": ["Hitz","Lang","Pelmar","Katterbach","Calafiori","Burger","Xhaka","Millar","Amdouni","Zeqiri","Augustin"],
//         "bench": ["Ndoye","Pululu"],
//         "recent_form": ["L","D","W","L","L"]
//       }
//     },
//     "odds": { "1": 1.67, "X": 4.52, "2": 5.02 },
//     "tip": "Home Win"
//   }
// ];

// LeagueDetailPage.js

export const LeagueMatchesDetail = [
  {
    "id": "midtjylland_sturm_europa_md1",
    "competition": "Europa League",
    "matchday": "Matchday 1",
    "date": "2025-10-01",
    "time": "22:15",
    "venue": "MCH Arena, Herning (Denmark)",
    "referee": "Felix Zwayer (Germany)",
    "attendance": "14,200",
    "teams": {
      "home": {
        "name": "Midtjylland",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Thomas Thomasberg",
        "formation": "4-3-3",
        "lineup": ["Lössl", "Anderson", "Dalsgaard", "Juninho", "Paulinho", "Olsen", "Charles", "Martinez", "Isaksen", "Chilufya", "Cho Gue-sung"],
        "bench": ["Madsen", "Sviatchenko", "Dyhr", "Kristensen"],
        "recent_form": ["W","L","D","W","W"]
      },
      "away": {
        "name": "Sturm Graz",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SK_Sturm_Graz_Logo.svg/1200px-SK_Sturm_Graz_Logo.svg.png",
        "coach": "Christian Ilzer",
        "formation": "4-2-3-1",
        "lineup": ["Siebenhandl", "Gazibegovic", "Affengruber", "Wüthrich", "Dante", "Hierländer", "Prass", "Horvat", "Bøving", "Sarkaria", "Emegha"],
        "bench": ["Jantscher","Johnston","Okonkwo"],
        "recent_form": ["W","W","D","W","L"]
      }
    },
    "odds": { "1": 1.73, "X": 4.40, "2": 4.59, "over_2.5": 1.95, "under_2.5": 1.80, "btts_yes": 1.85, "btts_no": 1.95 },
    "head_to_head": { "played": 2, "midtjylland_wins": 1, "sturm_graz_wins": 1, "draws": 0 },
    "stats": { "possession": { "home": 54, "away": 46 }, "shots_on_target": { "home": 5, "away": 4 } },
    "tip": "Home Win"
  },
  {
    "id": "midtjylland_randers_superliga_md8",
    "competition": "Danish Superliga",
    "matchday": "Matchday 8",
    "date": "2025-09-20",
    "time": "20:00",
    "venue": "MCH Arena, Herning (Denmark)",
    "referee": "Jonas Hansen",
    "attendance": "12,000",
    "teams": {
      "home": {
        "name": "Midtjylland",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Thomas Thomasberg",
        "formation": "4-3-3",
        "lineup": ["Lössl", "Dyhr", "Sviatchenko", "Juninho", "Paulinho", "Olsen", "Charles", "Martinez", "Isaksen", "Chilufya", "Cho Gue-sung"],
        "bench": ["Madsen", "Anderson", "Kristensen"],
        "recent_form": ["W","D","W","L","W"]
      },
      "away": {
        "name": "Randers FC",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Randers_FC_logo.svg/1200px-Randers_FC_logo.svg.png",
        "coach": "Thomas Thomasberg",
        "formation": "4-4-2",
        "lineup": ["Jungdal", "Olawoyin", "Enggrob", "Nielsen", "Sorensen", "Kallesoe", "Lomholt", "Yusuf", "Lohne", "Fenger", "Carcela"],
        "bench": ["Saevarsson", "Pedersen", "Kaars"],
        "recent_form": ["L","W","L","D","L"]
      }
    },
    "odds": { "1": 1.50, "X": 4.00, "2": 5.50, "over_2.5": 1.80, "under_2.5": 2.00, "btts_yes": 1.90, "btts_no": 1.80 },
    "head_to_head": { "played": 5, "midtjylland_wins": 3, "randers_wins": 1, "draws": 1 },
    "stats": { "possession": { "home": 60, "away": 40 } },
    "tip": "Home Win"
  },
  {
    "id": "copenhagen_midtjylland_superliga_md7",
    "competition": "Danish Superliga",
    "matchday": "Matchday 7",
    "date": "2025-09-15",
    "time": "18:00",
    "venue": "Parken Stadium, Copenhagen (Denmark)",
    "referee": "Michael Krogh",
    "attendance": "35,000",
    "teams": {
      "home": {
        "name": "FC Copenhagen",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/FC_Copenhagen_logo.svg/1200px-FC_Copenhagen_logo.svg.png",
        "coach": "Jacob Neestrup",
        "formation": "4-3-3",
        "lineup": ["Grabara", "Vavro", "Boilesen", "Goncalves", "Mattsson", "Lerager", "Falk", "Claesson", "Elyounoussi", "Wind", "Jensen"],
        "bench": ["Zaletel", "Diks", "Bardghji"],
        "recent_form": ["W","W","D","W","L"]
      },
      "away": {
        "name": "Midtjylland",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Thomas Thomasberg",
        "formation": "4-3-3",
        "lineup": ["Lössl", "Anderson", "Dalsgaard", "Juninho", "Paulinho", "Olsen", "Charles", "Martinez", "Isaksen", "Chilufya", "Cho Gue-sung"],
        "bench": ["Madsen", "Sviatchenko", "Dyhr"],
        "recent_form": ["D","L","W","W","D"]
      }
    },
    "odds": { "1": 2.20, "X": 3.40, "2": 3.00, "over_2.5": 2.10, "under_2.5": 1.70, "btts_yes": 1.75, "btts_no": 2.00 },
    "head_to_head": { "played": 20, "copenhagen_wins": 8, "midtjylland_wins": 7, "draws": 5 },
    "stats": { "possession": { "home": 55, "away": 45 } },
    "tip": "Draw"
  },
  {
    "id": "sturm_graz_midtjylland_friendly_2024",
    "competition": "Friendly",
    "matchday": "Pre-season",
    "date": "2024-07-20",
    "time": "19:00",
    "venue": "Stadion auf der Gleisdreieck, Graz (Austria)",
    "referee": "Unknown",
    "attendance": "5,000",
    "teams": {
      "home": {
        "name": "Sturm Graz",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SK_Sturm_Graz_Logo.svg/1200px-SK_Sturm_Graz_Logo.svg.png",
        "coach": "Christian Ilzer",
        "formation": "4-2-3-1",
        "lineup": ["Siebenhandl", "Gazibegovic", "Affengruber", "Wüthrich", "Dante", "Hierländer", "Prass", "Horvat", "Bøving", "Sarkaria", "Emegha"],
        "bench": ["Jantscher", "Johnston", "Okonkwo"],
        "recent_form": ["W","D","L","W","D"]
      },
      "away": {
        "name": "Midtjylland",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Thomas Thomasberg",
        "formation": "4-3-3",
        "lineup": ["Lössl", "Anderson", "Dalsgaard", "Juninho", "Paulinho", "Olsen", "Charles", "Martinez", "Isaksen", "Chilufya", "Cho Gue-sung"],
        "bench": ["Madsen", "Sviatchenko", "Dyhr"],
        "recent_form": ["L","W","D","W","L"]
      }
    },
    "odds": { "1": 2.80, "X": 3.50, "2": 2.40, "over_2.5": 2.20, "under_2.5": 1.60, "btts_yes": 1.95, "btts_no": 1.75 },
    "head_to_head": { "played": 2, "sturm_graz_wins": 1, "midtjylland_wins": 1, "draws": 0 },
    "stats": null,
    "tip": "Draw"
  },
  {
    "id": "paok_maccabi_europa_md1",
    "competition": "Europa League",
    "matchday": "Matchday 1",
    "date": "2025-10-01",
    "time": "22:15",
    "venue": "Toumba Stadium, Thessaloniki",
    "referee": "Antonio Mateu Lahoz (Spain)",
    "attendance": "28,000",
    "teams": {
      "home": {
        "name": "PAOK",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Razvan Lucescu",
        "formation": "4-2-3-1",
        "lineup": ["Kotarski","Sastre","Michailidis","Ingason","Vierinha","Schwab","Kurtic","Zivkovic","Biseswar","Konstantelias","Oliveira"],
        "bench": ["Tzimas","Koulierakis"],
        "recent_form": ["W","D","W","W","L"]
      },
      "away": {
        "name": "Maccabi Tel Aviv",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Robbie Keane",
        "formation": "4-3-3",
        "lineup": ["Peretz","Saborit","Menachem","Shahar","Golasa","Perica","Kanichowsky","Gloukh","Davidzada","Ben Chaim","Zahavi"],
        "bench": ["Cohen","Jovanovic"],
        "recent_form": ["L","W","W","W","D"]
      }
    },
    "odds": { "1": 1.98, "X": 3.65, "2": 4.12, "over_2.5": 2.00, "under_2.5": 1.75, "btts_yes": 1.82, "btts_no": 2.00 },
    "head_to_head": { "played": 0, "paok_wins": 0, "maccabi_wins": 0, "draws": 0 },
    "stats": { "possession": { "home": 50, "away": 50 } },
    "tip": "Under 2.5 Goals"
  },
  {
    "id": "getafe_alaves_laliga_md6",
    "competition": "La Liga",
    "matchday": "Matchday 6",
    "date": "2025-10-01",
    "time": "22:30",
    "venue": "Coliseum Alfonso Pérez, Getafe",
    "referee": "Carlos Del Cerro Grande",
    "attendance": "15,600",
    "teams": {
      "home": {
        "name": "Getafe",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "José Bordalás",
        "formation": "4-4-2",
        "lineup": ["Soria","Djene","Maksimovic","Greenwood","Mata","Unal","Alderete","Arambarri","Gaston","Portu","Carmona"],
        "bench": ["Mayoral","Alvarez"],
        "recent_form": ["D","W","L","W","D"]
      },
      "away": {
        "name": "Alaves",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Luis García Plaza",
        "formation": "4-2-3-1",
        "lineup": ["Sivera","Tenaglia","Duarte","Marin","Navarro","Guridi","Benavidez","Rioja","Blanco","Hagi","Kike Garcia"],
        "bench": ["Villalibre","Pacheco"],
        "recent_form": ["L","L","W","D","W"]
      }
    },
    "odds": { "1": 2.39, "X": 2.89, "2": 3.91, "over_2.5": 2.20, "under_2.5": 1.65, "btts_yes": 2.05, "btts_no": 1.75 },
    "head_to_head": { "played": 10, "getafe_wins": 4, "alaves_wins": 3, "draws": 3 },
    "stats": { "possession": { "home": 47, "away": 53 } },
    "tip": "Draw"
  },
  {
    "id": "newcastle_bradford_leaguecup_md3",
    "competition": "League Cup",
    "matchday": "Matchday 3",
    "date": "2025-10-02",
    "time": "00:15",
    "venue": "St James' Park, Newcastle",
    "referee": "Michael Oliver",
    "attendance": "41,500",
    "teams": {
      "home": {
        "name": "Newcastle United",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Eddie Howe",
        "formation": "4-3-3",
        "lineup": ["Pope","Trippier","Botman","Schar","Burn","Guimaraes","Joelinton","Longstaff","Gordon","Isak","Barnes"],
        "bench": ["Wilson","Almiron"],
        "recent_form": ["W","W","W","L","W"]
      },
      "away": {
        "name": "Bradford City",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Graham Alexander",
        "formation": "4-4-2",
        "lineup": ["Lewis","Halliday","Stubbs","Platt","Ridehalgh","Smallwood","Gilliead","Walker","Pereira","Cook","Smith"],
        "bench": ["Banks","Kavanagh"],
        "recent_form": ["L","D","W","L","L"]
      }
    },
    "odds": { "1": 1.16, "X": 9.20, "2": 20.0 },
    "tip": "Newcastle -1.5 Handicap"
  },
  {
    "id": "tottenham_doncaster_leaguecup_md3",
    "competition": "League Cup",
    "matchday": "Matchday 3",
    "date": "2025-10-02",
    "time": "00:15",
    "venue": "Tottenham Hotspur Stadium, London",
    "referee": "Anthony Taylor",
    "attendance": "55,000",
    "teams": {
      "home": {
        "name": "Tottenham Hotspur",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Ange Postecoglou",
        "formation": "4-3-3",
        "lineup": ["Vicario","Porro","Romero","van de Ven","Udogie","Bissouma","Maddison","Sarr","Kulusevski","Richarlison","Son"],
        "bench": ["Lo Celso","Bentancur"],
        "recent_form": ["W","W","L","W","D"]
      },
      "away": {
        "name": "Doncaster Rovers",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Grant McCann",
        "formation": "4-4-2",
        "lineup": ["Mitchell","Williams","Anderson","Faulkner","Brown","Rowe","Close","Molyneux","Biggins","Miller","Agard"],
        "bench": ["Taylor","Barlow"],
        "recent_form": ["L","L","W","D","L"]
      }
    },
    "odds": { "1": 1.20, "X": 7.90, "2": 15.5 },
    "tip": "Tottenham Clean Sheet"
  },
  {
    "id": "huddersfield_mancity_leaguecup_md3",
    "competition": "League Cup",
    "matchday": "Matchday 3",
    "date": "2025-10-02",
    "time": "00:15",
    "venue": "John Smith’s Stadium, Huddersfield",
    "referee": "Craig Pawson",
    "attendance": "21,000",
    "teams": {
      "home": {
        "name": "Huddersfield Town",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Darren Moore",
        "formation": "4-2-3-1",
        "lineup": ["Nicholls","Turton","Helik","Pearson","Jackson","Hogg","Rudoni","Thomas","Koroma","Holmes","Ward"],
        "bench": ["Nakayama","Wiles"],
        "recent_form": ["L","D","L","L","W"]
      },
      "away": {
        "name": "Manchester City",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Pep Guardiola",
        "formation": "4-3-3",
        "lineup": ["Ederson","Walker","Dias","Gvardiol","Ake","Rodri","Foden","De Bruyne","Silva","Haaland","Doku"],
        "bench": ["Grealish","Alvarez"],
        "recent_form": ["W","W","W","W","D"]
      }
    },
    "odds": { "1": 15.0, "X": 8.20, "2": 1.20 },
    "tip": "Manchester City -2 Handicap"
  },
  {
    "id": "braga_feyenoord_europa_md1",
    "competition": "Europa League",
    "matchday": "Matchday 1",
    "date": "2025-10-02",
    "time": "00:30",
    "venue": "Estádio Municipal de Braga, Portugal",
    "referee": "Daniele Orsato",
    "attendance": "28,450",
    "teams": {
      "home": {
        "name": "Braga",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Artur Jorge",
        "formation": "4-2-3-1",
        "lineup": ["Matheus","Fonte","Niakaté","Gómez","Sequeira","Carvalho","Musrati","Bruma","Horta","Rodrigues","Banza"],
        "bench": ["Ruiz","Lopes"],
        "recent_form": ["W","D","W","L","W"]
      },
      "away": {
        "name": "Feyenoord",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Arne Slot",
        "formation": "4-3-3",
        "lineup": ["Bijlow","Geertruida","Trauner","Hancko","Hartman","Wieffer","Timber","Stengs","Paixão","Szymanski","Gimenez"],
        "bench": ["Dilrosun","Ivanusec"],
        "recent_form": ["W","W","W","D","W"]
      }
    },
    "odds": { "1": 2.37, "X": 3.64, "2": 3.12 },
    "tip": "Both Teams to Score"
  },
  {
    "id": "freiburg_basel_europa_md1",
    "competition": "Europa League",
    "matchday": "Matchday 1",
    "date": "2025-10-02",
    "time": "00:30",
    "venue": "Europa-Park Stadion, Freiburg",
    "referee": "Szymon Marciniak",
    "attendance": "33,000",
    "teams": {
      "home": {
        "name": "Freiburg",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Christian Streich",
        "formation": "4-4-2",
        "lineup": ["Flekken","Kubler","Lienhart","Ginter","Gunter","Eggestein","Höfler","Doan","Grifo","Holer","Gregoritsch"],
        "bench": ["Keitel","Sallai"],
        "recent_form": ["W","L","W","D","W"]
      },
      "away": {
        "name": "Basel",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
        "coach": "Heiko Vogel",
        "formation": "4-2-3-1",
        "lineup": ["Hitz","Lang","Pelmar","Katterbach","Calafiori","Burger","Xhaka","Millar","Amdouni","Zeqiri","Augustin"],
        "bench": ["Ndoye","Pululu"],
        "recent_form": ["L","D","W","L","L"]
      }
    },
    "odds": { "1": 1.67, "X": 4.52, "2": 5.02 },
    "tip": "Home Win"
  }
];