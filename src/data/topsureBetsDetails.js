// topsureBetsDetailsPage.js

const topsureBetsDetails = {
  "betsDetails": [

    // --- Football Bets ---
    {
      "id": "football-1",
      "sport": "Football",
      "matchup": "Haugesund 2 vs Djerv 1919",
      "scheduledTime": "2025-09-25T20:30:00",
      "betType": "3 Way",
      "bestReturn": "17.7%",
      "teams": {
        "home": "Haugesund 2",
        "away": "Djerv 1919",
        "homeLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2mG_ms1DGcjatAaPVr3wNheVFHIRXwEf1g&s",
        "awayLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2mG_ms1DGcjatAaPVr3wNheVFHIRXwEf1g&s"
      },
      "bettingOptions": [
        { // Haugesund 2 Win
          "outcome": "Home Win",
          "bestOdd": 4.6,
          "bookmaker": "betboro-2",
          "details": [
            { "bookmakerName": "betboro", "odds": 4.5, "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExXCBa4Xl3iMlKJ4dHRdEbTI7dj1Y6gQ91Q&s", "website": "https://www.betboro.com/en/" },
            { "bookmakerName": "betboro-2", "odds": 4.6, "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExXCBa4Xl3iMlKJ4dHRdEbTI7dj1Y6gQ91Q&s", "website": "https://www.betboro.com/en/" }
          ]
        },
        { // Djerv 1919 Win
          "outcome": "Away Win",
          "bestOdd": 2.44,
          "bookmaker": "pin-up",
          "details": [
            { "bookmakerName": "pin-up", "odds": 2.44, "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExXCBa4Xl3iMlKJ4dHRdEbTI7dj1Y6gQ91Q&s", "website": "https://pin-up.bet/" }
          ]
        },
        { // Draw (काल्पनिक डेटा)
          "outcome": "Draw",
          "bestOdd": 3.0, 
          "bookmaker": "bet365",
          "details": [
            { "bookmakerName": "bet365", "odds": 3.0, "logo": "...", "website": "https://www.bet365.com/" }
          ]
        }
      ]
    },
    {
      "id": "football-2",
      "sport": "Football",
      "matchup": "Persepolis vs Malavan",
      "scheduledTime": "2025-09-25T21:00:00",
      "betType": "3 Way",
      "bestReturn": "2.6%",
      "teams": {
        "home": "Persepolis",
        "away": "Malavan",
        "homeLogo": "https://assets.example.com/logos/persepolis.png",
        "awayLogo": "https://assets.example.com/logos/malavan.png"
      },
      "bettingOptions": [
        { // Persepolis Win
          "outcome": "Home Win",
          "bestOdd": 1.42,
          "bookmaker": "cloudbet",
          "details": [
            { "bookmakerName": "cloudbet", "odds": 1.42, "logo": "https://assets.example.com/bookmakers/cloudbet.png", "website": "https://www.cloudbet.com/en/" }
          ]
        },
        { // Draw
          "outcome": "Draw",
          "bestOdd": 4.6,
          "bookmaker": "lsbet",
          "details": [
            { "bookmakerName": "lsbet", "odds": 4.6, "logo": "https://assets.example.com/bookmakers/lsbet.png", "website": "https://www.lsbet.com/" }
          ]
        },
        { // Malavan Win
          "outcome": "Away Win",
          "bestOdd": 19.0,
          "bookmaker": "pin-up",
          "details": [
            { "bookmakerName": "pin-up", "odds": 19.0, "logo": "https://assets.example.com/bookmakers/pinup.png", "website": "https://pin-up.bet/" }
          ]
        }
      ]
    },

    // --- Ice Hockey Bets ---
    {
      "id": "ice-1",
      "sport": "Ice Hockey",
      "matchup": "Skelleftea vs Lulea",
      "scheduledTime": "2025-09-26T18:00:00",
      "betType": "Moneyline",
      "bestReturn": "8.4%",
      "teams": {
        "home": "Skelleftea",
        "away": "Lulea",
        "homeLogo": "https://assets.example.com/logos/skelleftea.png",
        "awayLogo": "https://assets.example.com/logos/lulea.png"
      },
      "bettingOptions": [
        { // Skelleftea Win
          "outcome": "Home Win",
          "bestOdd": 2.15,
          "bookmaker": "pinnacle",
          "details": [
            { "bookmakerName": "bet365", "odds": 2.1, "logo": "https://assets.example.com/bookmakers/bet365.png", "website": "https://www.bet365.com/" },
            { "bookmakerName": "pinnacle", "odds": 2.15, "logo": "https://assets.example.com/bookmakers/pinnacle.png", "website": "https://www.pinnacle.com/" }
          ]
        },
        { // Lulea Win (काल्पनिक डेटा - आर्बिट्रेज पूरा करने के लिए)
          "outcome": "Away Win",
          "bestOdd": 1.85,
          "bookmaker": "unibet",
          "details": [
            { "bookmakerName": "unibet", "odds": 1.85, "logo": "...", "website": "https://www.unibet.com/" }
          ]
        }
      ]
    },
    {
      "id": "ice-2",
      "sport": "Ice Hockey",
      "matchup": "Frölunda vs HV71",
      "scheduledTime": "2025-09-26T20:30:00",
      "betType": "Over/Under",
      "bestReturn": "5.2%",
      "teams": {
        "home": "Frölunda",
        "away": "HV71",
        "homeLogo": "https://assets.example.com/logos/frolunda.png",
        "awayLogo": "https://assets.example.com/logos/hv71.png"
      },
      "bettingOptions": [
        { // Over (Total Goals)
          "outcome": "Over X.5",
          "bestOdd": 1.9,
          "bookmaker": "betfair",
          "details": [
            { "bookmakerName": "betfair", "odds": 1.9, "logo": "https://assets.example.com/bookmakers/betfair.png", "website": "https://www.betfair.com/" }
          ]
        },
        { // Under (Total Goals)
          "outcome": "Under X.5",
          "bestOdd": 1.85,
          "bookmaker": "williamhill",
          "details": [
            { "bookmakerName": "williamhill", "odds": 1.85, "logo": "https://assets.example.com/bookmakers/willhill.png", "website": "https://www.williamhill.com/" }
          ]
        }
      ]
    },

    // --- Basketball Bets ---
    {
      "id": "bball-1",
      "sport": "Basketball",
      "matchup": "Real Madrid vs Barcelona",
      "scheduledTime": "2025-09-27T19:00:00",
      "betType": "Point Spread",
      "bestReturn": "6.1%",
      "teams": {
        "home": "Real Madrid",
        "away": "Barcelona",
        "homeLogo": "https://assets.example.com/logos/realmadrid.png",
        "awayLogo": "https://assets.example.com/logos/barcelona.png"
      },
      "bettingOptions": [
        { // Real Madrid Spread (+/- X points)
          "outcome": "Real Madrid Spread",
          "bestOdd": 2.0,
          "bookmaker": "unibet",
          "details": [
            { "bookmakerName": "betway", "odds": 1.95, "logo": "https://assets.example.com/bookmakers/betway.png", "website": "https://betway.com/" },
            { "bookmakerName": "unibet", "odds": 2.0, "logo": "https://assets.example.com/bookmakers/unibet.png", "website": "https://www.unibet.com/" }
          ]
        },
        { // Barcelona Spread (-/+ X points) (काल्पनिक डेटा)
          "outcome": "Barcelona Spread",
          "bestOdd": 1.98,
          "bookmaker": "bet365",
          "details": [
            { "bookmakerName": "bet365", "odds": 1.98, "logo": "...", "website": "https://www.bet365.com/" }
          ]
        }
      ]
    },
    {
      "id": "bball-2",
      "sport": "Basketball",
      "matchup": "Lakers vs Celtics",
      "scheduledTime": "2025-09-27T21:30:00",
      "betType": "Moneyline",
      "bestReturn": "4.3%",
      "teams": {
        "home": "Lakers",
        "away": "Celtics",
        "homeLogo": "https://assets.example.com/logos/lakers.png",
        "awayLogo": "https://assets.example.com/logos/celtics.png"
      },
      "bettingOptions": [
        { // Lakers Win
          "outcome": "Home Win",
          "bestOdd": 2.4,
          "bookmaker": "draftkings",
          "details": [
            { "bookmakerName": "draftkings", "odds": 2.4, "logo": "https://assets.example.com/bookmakers/draftkings.png", "website": "https://www.draftkings.com/" }
          ]
        },
        { // Celtics Win
          "outcome": "Away Win",
          "bestOdd": 2.35,
          "bookmaker": "fanDuel",
          "details": [
            { "bookmakerName": "fanDuel", "odds": 2.35, "logo": "https://assets.example.com/bookmakers/fanduel.png", "website": "https://www.fanduel.com/" }
          ]
        }
      ]
    },

    // --- Tennis Bets ---
    {
      "id": "tennis-1",
      "sport": "Tennis",
      "matchup": "Novak Djokovic vs Carlos Alcaraz",
      "scheduledTime": "2025-09-28T14:00:00",
      "betType": "Match Winner",
      "bestReturn": "3.9%",
      "teams": {
        "home": "Novak Djokovic",
        "away": "Carlos Alcaraz",
        "homeLogo": "https://assets.example.com/logos/djokovic.png",
        "awayLogo": "https://assets.example.com/logos/alcaraz.png"
      },
      "bettingOptions": [
        { // Djokovic Win
          "outcome": "Djokovic Win",
          "bestOdd": 2.05,
          "bookmaker": "coral",
          "details": [
            { "bookmakerName": "bet365", "odds": 1.7, "logo": "https://assets.example.com/bookmakers/bet365.png", "website": "https://www.bet365.com/" },
            { "bookmakerName": "coral", "odds": 2.05, "logo": "https://assets.example.com/bookmakers/coral.png", "website": "https://www.coral.co.uk/" }
          ]
        },
        { // Alcaraz Win (काल्पनिक डेटा)
          "outcome": "Alcaraz Win",
          "bestOdd": 1.75,
          "bookmaker": "pinnacle",
          "details": [
            { "bookmakerName": "pinnacle", "odds": 1.75, "logo": "...", "website": "https://www.pinnacle.com/" }
          ]
        }
      ]
    },
    {
      "id": "tennis-2",
      "sport": "Tennis",
      "matchup": "Iga Swiatek vs Coco Gauff",
      "scheduledTime": "2025-09-28T16:30:00",
      "betType": "Match Winner",
      "bestReturn": "7.0%",
      "teams": {
        "home": "Iga Swiatek",
        "away": "Coco Gauff",
        "homeLogo": "https://assets.example.com/logos/swiatek.png",
        "awayLogo": "https://assets.example.com/logos/gauff.png"
      },
      "bettingOptions": [
        { // Swiatek Win
          "outcome": "Swiatek Win",
          "bestOdd": 2.0,
          "bookmaker": "betfair",
          "details": [
            { "bookmakerName": "williamhill", "odds": 1.8, "logo": "https://assets.example.com/bookmakers/willhill.png", "website": "https://www.williamhill.com/" },
            { "bookmakerName": "betfair", "odds": 2.0, "logo": "https://assets.example.com/bookmakers/betfair.png", "website": "https://www.betfair.com/" }
          ]
        },
        { // Gauff Win (काल्पनिक डेटा)
          "outcome": "Gauff Win",
          "bestOdd": 1.9,
          "bookmaker": "betway",
          "details": [
            { "bookmakerName": "betway", "odds": 1.9, "logo": "...", "website": "https://betway.com/" }
          ]
        }
      ]
    },

    // --- MMA Bets ---
    {
      "id": "mma-1",
      "sport": "MMA",
      "matchup": "Conor McGregor vs Dustin Poirier",
      "scheduledTime": "2025-09-29T22:00:00",
      "betType": "Method of Victory",
      "bestReturn": "9.5%",
      "teams": {
        "home": "Conor McGregor",
        "away": "Dustin Poirier",
        "homeLogo": "https://assets.example.com/logos/mcgregor.png",
        "awayLogo": "https://assets.example.com/logos/poirier.png"
      },
      "bettingOptions": [
        { // McGregor Wins (काल्पनिक परिणाम)
          "outcome": "McGregor KO/TKO",
          "bestOdd": 3.4,
          "bookmaker": "pinnacle",
          "details": [
            { "bookmakerName": "betboro", "odds": 3.2, "logo": "https://assets.example.com/bookmakers/betboro.png", "website": "https://www.betboro.com/en/" },
            { "bookmakerName": "pinnacle", "odds": 3.4, "logo": "https://assets.example.com/bookmakers/pinnacle.png", "website": "https://www.pinnacle.com/" }
          ]
        },
        { // Poirier Wins (काल्पनिक परिणाम - आर्बिट्रेज के लिए)
          "outcome": "Poirier Submission",
          "bestOdd": 2.8,
          "bookmaker": "draftkings",
          "details": [
            { "bookmakerName": "draftkings", "odds": 2.8, "logo": "...", "website": "https://www.draftkings.com/" }
          ]
        }
        // चूंकि 'Method of Victory' में कई विकल्प होते हैं, यह एक 2-वे आर्बिट्रेज (McGregor जीतेगा vs Poirier जीतेगा) के लिए सरलीकृत है।
      ]
    },
    {
      "id": "mma-2",
      "sport": "MMA",
      "matchup": "Israel Adesanya vs Alex Pereira",
      "scheduledTime": "2025-09-30T00:00:00",
      "betType": "Rounds",
      "bestReturn": "6.8%",
      "teams": {
        "home": "Israel Adesanya",
        "away": "Alex Pereira",
        "homeLogo": "https://assets.example.com/logos/adesanya.png",
        "awayLogo": "https://assets.example.com/logos/pereira.png"
      },
      "bettingOptions": [
        { // Over X.5 Rounds (काल्पनिक)
          "outcome": "Over 2.5 Rounds",
          "bestOdd": 2.9,
          "bookmaker": "betway",
          "details": [
            { "bookmakerName": "betway", "odds": 2.9, "logo": "https://assets.example.com/bookmakers/betway.png", "website": "https://betway.com/" }
          ]
        },
        { // Under X.5 Rounds (काल्पनिक)
          "outcome": "Under 2.5 Rounds",
          "bestOdd": 2.75,
          "bookmaker": "bet365",
          "details": [
            { "bookmakerName": "bet365", "odds": 2.75, "logo": "https://assets.example.com/bookmakers/bet365.png", "website": "https://www.bet365.com/" }
          ]
        }
      ]
    },

    // --- Handball Bets ---
    {
      "id": "hand-1",
      "sport": "Handball",
      "matchup": "Barcelona Handball vs PSG Handball",
      "scheduledTime": "2025-10-01T18:30:00",
      "betType": "3 Way",
      "bestReturn": "4.9%",
      "teams": {
        "home": "Barcelona Handball",
        "away": "PSG Handball",
        "homeLogo": "https://assets.example.com/logos/barca_hand.png",
        "awayLogo": "https://assets.example.com/logos/psg_hand.png"
      },
      "bettingOptions": [
        { // Barcelona Win
          "outcome": "Home Win",
          "bestOdd": 2.05,
          "bookmaker": "betfair",
          "details": [
            { "bookmakerName": "unibet", "odds": 1.9, "logo": "https://assets.example.com/bookmakers/unibet.png", "website": "https://www.unibet.com/" },
            { "bookmakerName": "betfair", "odds": 2.05, "logo": "https://assets.example.com/bookmakers/betfair.png", "website": "https://www.betfair.com/" }
          ]
        },
        { // PSG Win (काल्पनिक डेटा)
          "outcome": "Away Win",
          "bestOdd": 2.1,
          "bookmaker": "pinnacle",
          "details": [
            { "bookmakerName": "pinnacle", "odds": 2.1, "logo": "...", "website": "https://www.pinnacle.com/" }
          ]
        },
        { // Draw (काल्पनिक डेटा)
          "outcome": "Draw",
          "bestOdd": 1.8,
          "bookmaker": "bet365",
          "details": [
            { "bookmakerName": "bet365", "odds": 1.8, "logo": "...", "website": "https://www.bet365.com/" }
          ]
        }
      ]
    },
    {
      "id": "hand-2",
      "sport": "Handball",
      "matchup": "THW Kiel vs SG Flensburg",
      "scheduledTime": "2025-10-01T20:45:00",
      "betType": "Over/Under",
      "bestReturn": "3.7%",
      "teams": {
        "home": "THW Kiel",
        "away": "SG Flensburg",
        "homeLogo": "https://assets.example.com/logos/kiel.png",
        "awayLogo": "https://assets.example.com/logos/flensburg.png"
      },
      "bettingOptions": [
        { // Under (Total Goals)
          "outcome": "Under Y.5",
          "bestOdd": 1.95,
          "bookmaker": "williamhill",
          "details": [
            { "bookmakerName": "williamhill", "odds": 1.95, "logo": "https://assets.example.com/bookmakers/willhill.png", "website": "https://www.williamhill.com/" }
          ]
        },
        { // Over (Total Goals)
          "outcome": "Over Y.5",
          "bestOdd": 1.88,
          "bookmaker": "betsson",
          "details": [
            { "bookmakerName": "betsson", "odds": 1.88, "logo": "https://assets.example.com/bookmakers/betsson.png", "website": "https://www.betsson.com/en" }
          ]
        }
      ]
    },

    // --- American Football Bets ---
    {
      "id": "af-1",
      "sport": "American Football",
      "matchup": "Kansas City Chiefs vs Buffalo Bills",
      "scheduledTime": "2025-10-02T01:00:00",
      "betType": "Spread",
      "bestReturn": "12.2%",
      "teams": {
        "home": "Kansas City Chiefs",
        "away": "Buffalo Bills",
        "homeLogo": "https://assets.example.com/logos/chiefs.png",
        "awayLogo": "https://assets.example.com/logos/bills.png"
      },
      "bettingOptions": [
        { // Chiefs Spread (-/+ Z points)
          "outcome": "Chiefs Spread",
          "bestOdd": 1.75,
          "bookmaker": "pinnacle",
          "details": [
            { "bookmakerName": "bet365", "odds": 1.7, "logo": "https://assets.example.com/bookmakers/bet365.png", "website": "https://www.bet365.com/" },
            { "bookmakerName": "pinnacle", "odds": 1.75, "logo": "https://assets.example.com/bookmakers/pinnacle.png", "website": "https://www.pinnacle.com/" }
          ]
        },
        { // Bills Spread (+/- Z points) (काल्पनिक डेटा)
          "outcome": "Bills Spread",
          "bestOdd": 1.9,
          "bookmaker": "draftkings",
          "details": [
            { "bookmakerName": "draftkings", "odds": 1.9, "logo": "...", "website": "https://www.draftkings.com/" }
          ]
        }
      ]
    },
    {
      "id": "af-2",
      "sport": "American Football",
      "matchup": "Dallas Cowboys vs Green Bay Packers",
      "scheduledTime": "2025-10-02T04:25:00",
      "betType": "Moneyline",
      "bestReturn": "7.6%",
      "teams": {
        "home": "Dallas Cowboys",
        "away": "Green Bay Packers",
        "homeLogo": "https://assets.example.com/logos/cowboys.png",
        "awayLogo": "https://assets.example.com/logos/packers.png"
      },
      "bettingOptions": [
        { // Cowboys Win
          "outcome": "Home Win",
          "bestOdd": 2.1,
          "bookmaker": "draftkings",
          "details": [
            { "bookmakerName": "fanDuel", "odds": 2.05, "logo": "https://assets.example.com/bookmakers/fanduel.png", "website": "https://www.fanduel.com/" },
            { "bookmakerName": "draftkings", "odds": 2.1, "logo": "https://assets.example.com/bookmakers/draftkings.png", "website": "https://www.draftkings.com/" }
          ]
        },
        { // Packers Win (काल्पनिक डेटा)
          "outcome": "Away Win",
          "bestOdd": 2.05,
          "bookmaker": "fanDuel",
          "details": [
            { "bookmakerName": "fanDuel", "odds": 2.05, "logo": "https://assets.example.com/bookmakers/fanduel.png", "website": "https://www.fanduel.com/" }
          ]
        }
      ]
    }
  ]
};

export default topsureBetsDetails;