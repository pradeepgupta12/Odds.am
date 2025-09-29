// UpcomingMatch.js

const UpcomingMatchesPage = {
  football: [
    {
      league: "England. Premier League",
      date: "30th September",
      matches: [
        {
          time: "00:30",
          homeTeam: {
            name: "Everton",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
          },
          awayTeam: {
            name: "West Ham United",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
          },
          odds: { home: 1.78, draw: 4.10, away: 5.60 },
          overUnder: { line: 2.5, under: 1.97, over: 2.00 },
        },
      ],
    },
    {
      league: "England. Premier League",
      date: "4th October",
      matches: [
        {
          time: "00:30",
          homeTeam: {
            name: "Bournemouth",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_(2013).svg",
          },
          awayTeam: {
            name: "Fulham",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Fulham_FC_logo.svg",
          },
          odds: { home: 2.05, draw: 3.79, away: 4.30 },
          overUnder: { line: 2.5, under: 1.99, over: 1.95 },
        },
        {
          time: "17:00",
          homeTeam: {
            name: "Leeds United",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Leeds_United_F.C._logo.svg",
          },
          awayTeam: {
            name: "Tottenham",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
          },
          odds: { home: 3.00, draw: 3.80, away: 2.50 },
          overUnder: { line: 2.5, under: 2.00, over: 1.95 },
        },
        {
          time: "19:30",
          homeTeam: {
            name: "Arsenal",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          },
          awayTeam: {
            name: "West Ham United",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
          },
          odds: { home: 1.28, draw: 6.80, away: 16.0 },
          overUnder: { line: 2.5, under: 2.44, over: 1.65 },
        },
        {
          time: "19:30",
          homeTeam: {
            name: "Manchester United",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
          },
          awayTeam: {
            name: "Sunderland",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Sunderland_AFC_logo.svg",
          },
          odds: { home: 1.55, draw: 4.75, away: 7.25 },
          overUnder: { line: 2.5, under: 2.28, over: 1.73 },
        },
        {
          time: "22:00",
          homeTeam: {
            name: "Chelsea",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
          },
          awayTeam: {
            name: "Liverpool",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
          odds: { home: 3.05, draw: 3.90, away: 2.41 },
          overUnder: { line: 2.5, under: 2.47, over: 1.65 },
        },
      ],
    },
  ],

  tennis: [
    {
      tournament: "ATP World Tour",
      date: "30th September",
      matches: [
        {
          time: "15:00",
          player1: {
            name: "Novak Djokovic",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/250px-Flag_of_Serbia.svg.png",
          },
          player2: {
            name: "Carlos Alcaraz",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/250px-Flag_of_Serbia.svg.png",
          },
          odds: { player1: 1.65, player2: 2.20 },
        },
      ],
    },
  ],

  iceHockey: [
    {
      league: "NHL",
      date: "1st October",
      matches: [
        {
          time: "02:00",
          homeTeam: {
            name: "Toronto Maple Leafs",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/34/Toronto_Maple_Leafs_logo.svg",
          },
          awayTeam: {
            name: "Boston Bruins",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0f/Boston_Bruins_logo.svg",
          },
          odds: { home: 2.10, draw: 3.50, away: 3.00 },
        },
      ],
    },
  ],

  rugbyUnion: [
    {
      league: "Six Nations",
      date: "2nd October",
      matches: [
        {
          time: "18:00",
          homeTeam: {
            name: "England",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/be/Rugby_Union_England_Logo.svg",
          },
          awayTeam: {
            name: "France",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Federation_R%C3%A9gionale_de_Rugby.svg",
          },
          odds: { home: 1.90, draw: 4.00, away: 2.80 },
        },
      ],
    },
  ],

  cricket: [
    {
      league: "ICC World Cup",
      date: "3rd October",
      matches: [
        {
          time: "14:00",
          homeTeam: {
            name: "India",
            logo: "https://commons.wikimedia.org/wiki/File:Board_of_Control_for_Cricket_in_India_Logo_%282024%29.svg",
          },
          awayTeam: {
            name: "Australia",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cricket_Australia_logo.svg",
          },
          odds: { home: 1.70, away: 2.10 },
        },
      ],
    },
  ],

  floorball: [
    {
      league: "Swedish Super League",
      date: "5th October",
      matches: [
        {
          time: "20:00",
          homeTeam: {
            name: "Storvreta IBK",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/Storvreta_IF_logo.svg",
          },
          awayTeam: {
            name: "Falun",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/IBF_Falun_logo.svg",
          },
          odds: { home: 2.50, draw: 3.60, away: 2.10 },
        },
      ],
    },
  ],

  baseball: [
    {
      league: "MLB",
      date: "6th October",
      matches: [
        {
          time: "23:30",
          homeTeam: {
            name: "New York Yankees",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/New_York_Yankees_Logo.svg",
          },
          awayTeam: {
            name: "Boston Red Sox",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Boston_Red_Sox_logo.svg",
          },
          odds: { home: 1.95, away: 2.05 },
        },
      ],
    },
  ],

  rugbyLeague: [
    {
      league: "Super League",
      date: "7th October",
      matches: [
        {
          time: "19:00",
          homeTeam: {
            name: "Wigan Warriors",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0d/Wigan_Warriors_logo.svg",
          },
          awayTeam: {
            name: "Leeds Rhinos",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Leeds_Rhinos_logo.svg",
          },
          odds: { home: 1.80, draw: 4.20, away: 2.30 },
        },
      ],
    },
  ],

  tableTennis: [
    {
      tournament: "ITTF World Tour",
      date: "8th October",
      matches: [
        {
          time: "11:00",
          player1: {
            name: "Ma Long",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ma_Long_2018.jpg",
          },
          player2: {
            name: "Fan Zhendong",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fan_Zhendong_2019.jpg",
          },
          odds: { player1: 1.75, player2: 2.05 },
        },
      ],
    },
  ],

  handball: [
    {
      league: "EHF Champions League",
      date: "9th October",
      matches: [
        {
          time: "21:00",
          homeTeam: {
            name: "Barcelona Handball",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/63/FC_Barcelona_logo.svg",
          },
          awayTeam: {
            name: "PSG Handball",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_Football_Club_logo.svg",
          },
          odds: { home: 1.85, draw: 3.90, away: 2.20 },
        },
      ],
    },
  ],
};

export default UpcomingMatchesPage;
