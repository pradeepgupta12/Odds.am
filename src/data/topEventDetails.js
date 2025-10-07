// navbarDataDetails.js

export const topEventDetails = {
    // ----------------------------------------------------------------------------------
    // 1. COPA LIBERTADORES (फुटबॉल)
    // ----------------------------------------------------------------------------------
    "Copa Libertadores": {
        eventName: "Copa Libertadores",
        matchup: "Palmeiras vs Atlético Mineiro (Quarter-Final)",
        scheduledTime: "2025-11-05T21:30:00+05:30",
        sport: "Football",
        status: "Scheduled",

        // --- Odds & Fixtures (La Liga Screenshot Style) ---
        odds: {
            homeTeam: "Palmeiras",
            awayTeam: "Atlético Mineiro",
            logo_home: "https://assets.example.com/palmeiras_logo.png", // काल्पनिक URL
            logo_away: "https://assets.example.com/atleticomg_logo.png", // काल्पनिक URL
            betting_options: [
                { type: "3 Way", options: { "1": 1.90, "X": 3.40, "2": 4.10 } },
                { type: "Total Goals", options: { "Under 2.5": 1.75, "Over 2.5": 2.10 } }
            ]
        },

        // --- Lineup & Squad (Chelsea vs Liverpool Screenshot Style) ---
        squadDetails: {
            tournamentStage: "Quarter-Finals",
            homeTeam: {
                name: "Palmeiras",
                coach: "Abel Ferreira", // Flag Removed
                startingXI: [
                    { "No": 21, "Name": "Weverton", "Pos": "G" }, // Flag Removed
                    { "No": 12, "Name": "Mayke", "Pos": "D" }, // Flag Removed
                    { "No": 4, "Name": "Gustavo Gómez (C)", "Pos": "D" }, // Flag Removed
                    { "No": 8, "Name": "Zé Rafael", "Pos": "M" }, // Flag Removed
                    { "No": 10, "Name": "Rony", "Pos": "F" } // Flag Removed
                ],
                doNotPlay: [
                    { "No": 7, "Name": "Dudu" } // Flag Removed
                ]
            },
            awayTeam: {
                name: "Atlético Mineiro",
                coach: "Gabriel Milito", // Flag Removed
                startingXI: [
                    { "No": 22, "Name": "Everson", "Pos": "G" }, // Flag Removed
                    { "No": 13, "Name": "Guilherme Arana", "Pos": "D" }, // Flag Removed
                    { "No": 21, "Name": "Rodrigo Battaglia", "Pos": "M" }, // Flag Removed
                    { "No": 7, "Name": "Hulk (C)", "Pos": "F" }, // Flag Removed
                    { "No": 10, "Name": "Eduardo Vargas", "Pos": "F" } // Flag Removed
                ],
                doNotPlay: [
                    { "No": 6, "Name": "Rubens" } // Flag Removed
                ]
            }
        },
        context: {
            venue: "Allianz Parque, São Paulo",
            recentForm: { "Palmeiras": "WWDWL", "Atlético Mineiro": "WLLWD" }
        }
    },

    // ----------------------------------------------------------------------------------
    // 2. UEFA CHAMPIONS LEAGUE (फुटबॉल)
    // ----------------------------------------------------------------------------------
    "UEFA Champions League": {
        eventName: "UEFA Champions League",
        matchup: "Paris Saint-Germain vs Liverpool (Group Stage)",
        scheduledTime: "2025-10-29T00:30:00+05:30",
        sport: "Football",
        status: "Live",
        score: "1:0 (HT)", // Half-Time Score

        // --- Odds & Fixtures (La Liga Screenshot Style) ---
        odds: {
            homeTeam: "PSG",
            awayTeam: "Liverpool",
            logo_home: "https://assets.example.com/psg_logo.png", // काल्पनिक URL
            logo_away: "https://assets.example.com/liverpool_logo.png", // काल्पनिक URL
            betting_options: [
                { type: "3 Way", options: { "1": 2.50, "X": 3.60, "2": 2.75 } },
                { type: "Total Goals", options: { "Under 3.5": 1.50, "Over 3.5": 2.80 } }
            ]
        },

        // --- Lineup & Squad (Chelsea vs Liverpool Screenshot Style) ---
        squadDetails: {
            tournamentStage: "Group Stage",
            homeTeam: {
                name: "PSG",
                coach: "Luis Enrique", // Flag Removed
                startingXI: [
                    { "No": 99, "Name": "G. Donnarumma", "Pos": "G" }, // Flag Removed
                    { "No": 2, "Name": "A. Hakimi", "Pos": "D" }, // Flag Removed
                    { "No": 5, "Name": "M. Škriniar", "Pos": "D" }, // Flag Removed
                    { "No": 8, "Name": "Fabián Ruiz", "Pos": "M" }, // Flag Removed
                    { "No": 7, "Name": "K. Mbappé (C)", "Pos": "F" } // Flag Removed
                ],
                doNotPlay: [
                    { "No": 10, "Name": "O. Dembélé" } // Flag Removed
                ]
            },
            awayTeam: {
                name: "Liverpool",
                coach: "Arne Slot", // Flag Removed
                startingXI: [
                    { "No": 1, "Name": "Alisson Becker", "Pos": "G" }, // Flag Removed
                    { "No": 4, "Name": "V. van Dijk (C)", "Pos": "D" }, // Flag Removed
                    { "No": 66, "Name": "T. Alexander-Arnold", "Pos": "D" }, // Flag Removed
                    { "No": 8, "Name": "D. Szoboszlai", "Pos": "M" }, // Flag Removed
                    { "No": 11, "Name": "Mohamed Salah", "Pos": "F" } // Flag Removed
                ],
                doNotPlay: [
                    { "No": 7, "Name": "L. Díaz" } // Flag Removed
                ]
            }
        },
        context: {
            venue: "Parc des Princes, Paris",
            referee: "Glenn Nyberg", // Flag Removed
            recentForm: { "PSG": "WWWWW", "Liverpool": "WDLWW" }
        }
    },

    // ----------------------------------------------------------------------------------
    // 3. FIFA WORLD CUP QUALIFIERS (फुटबॉल)
    // ----------------------------------------------------------------------------------
    "FIFA World Cup Qualifiers": {
        eventName: "FIFA World Cup Qualifiers",
        matchup: "Japan vs Australia (Asia Round 3)",
        scheduledTime: "2025-10-15T15:35:00+05:30",
        sport: "Football",
        status: "Finished",
        score: "0:2",

        // --- Odds & Fixtures (La Liga Screenshot Style) ---
        odds: {
            homeTeam: "Japan",
            awayTeam: "Australia",
            logo_home: "https://assets.example.com/japan_logo.png", // काल्पनिक URL
            logo_away: "https://assets.example.com/australia_football_logo.png", // काल्पनिक URL
            betting_options: [
                { type: "3 Way", options: { "1": 1.50, "X": 4.00, "2": 6.50 } },
                { type: "Total Goals", options: { "Under 1.5": 2.80, "Over 1.5": 1.40 } }
            ]
        },

        // --- Lineup & Squad (Simplified) ---
        squadDetails: {
            tournamentStage: "Round 3",
            homeTeam: {
                name: "Japan",
                coach: "Hajime Moriyasu", // Flag Removed
                startingXI: [
                    { "No": 12, "Name": "K. Nakamura", "Pos": "F" }, // Flag Removed
                    { "No": 10, "Name": "R. Doan", "Pos": "M" }, // Flag Removed
                    { "No": 4, "Name": "K. Itakura", "Pos": "D" } // Flag Removed
                ],
                doNotPlay: []
            },
            awayTeam: {
                name: "Australia",
                coach: "Graham Arnold", // Flag Removed
                startingXI: [
                    { "No": 7, "Name": "M. Boyle", "Pos": "F" }, // Flag Removed
                    { "No": 13, "Name": "A. Leckie", "Pos": "F" }, // Flag Removed
                    { "No": 20, "Name": "T. Hrustic", "Pos": "M" } // Flag Removed
                ],
                doNotPlay: []
            }
        },
        context: {
            venue: "Saitama Stadium 2002, Japan",
            matchSummary: "Australia's two late goals secured a crucial victory."
        }
    },

    // ----------------------------------------------------------------------------------
    // 4. T20 CRICKET WORLD CUP (क्रिकेट)
    // ----------------------------------------------------------------------------------
    "T20 Cricket World Cup": {
        eventName: "T20 Cricket World Cup",
        matchup: "India vs England (Semi-Final 1)",
        scheduledTime: "2025-10-20T19:30:00+05:30",
        sport: "Cricket (T20)",
        status: "Scheduled",

        // --- Odds & Fixtures (Simplified Cricket Format) ---
        odds: {
            team_a: "India",
            team_b: "England",
            logo_a: "https://assets.example.com/india_cricket_logo.png", // काल्पनिक URL
            logo_b: "https://assets.example.com/england_cricket_logo.png", // काल्पनिक URL
            betting_options: [
                { type: "Match Winner", options: { "India": 1.65, "England": 2.30 } },
                { type: "Highest Opening Partnership", options: { "India": 1.80, "England": 2.00 } }
            ]
        },

        // --- Lineup & Squad (Cricket adaptation) ---
        squadDetails: {
            tournamentStage: "Semi-Final",
            teamA: {
                name: "India",
                coach: "Rahul Dravid", // Flag Removed
                squad: [ // 'Starting XI' is 'Squad' in Cricket
                    { "No": 45, "Name": "Rohit Sharma (C)", "Role": "BAT" }, // Flag Removed
                    { "No": 18, "Name": "Virat Kohli", "Role": "BAT" }, // Flag Removed
                    { "No": 63, "Name": "Hardik Pandya", "Role": "AR" }, // Flag Removed
                    { "No": 1, "Name": "Jasprit Bumrah", "Role": "BOWL" } // Flag Removed
                ],
                unavailable: [
                    { "No": 11, "Name": "KL Rahul" } // Flag Removed
                ]
            },
            teamB: {
                name: "England",
                coach: "Matthew Mott", // Flag Removed
                squad: [
                    { "No": 69, "Name": "Jos Buttler (C)", "Role": "WK/BAT" }, // Flag Removed
                    { "No": 10, "Name": "Liam Livingstone", "Role": "AR" }, // Flag Removed
                    { "No": 58, "Name": "Jofra Archer", "Role": "BOWL" }, // Flag Removed
                    { "No": 32, "Name": "Sam Curran", "Role": "AR" } // Flag Removed
                ],
                unavailable: [
                    { "No": 95, "Name": "Ben Stokes" } // Flag Removed
                ]
            }
        },
        context: {
            venue: "Providence Stadium, Guyana",
            pitchReport: "Spin-friendly pitch expected.",
            umpire: "Rod Tucker" // Flag Removed
        }
    }
};

export default topEventDetails;