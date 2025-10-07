// BettingContestDetail.js

const bettingContestDetail = {
  // --- A. Contest Header/Metadata ---
  "contestMetadata": {
    "title": "ODDS.am Betting Contest",
    "subtitle": "Current Ranking in September",
    "prizesOverall": "500€ Every Month!",
    "callToAction": {
      "text": "Sign Up",
      "link": "/contest/signup" // काल्पनिक लिंक
    }
  },

  // --- B. All Individual User Contest Profiles (Screenshotted Format) ---
  // यह लिस्ट हर उपयोगकर्ता के विस्तृत डैशबोर्ड डेटा को स्टोर करती है।
  "allUserProfiles": [
    // --- Profile 1: elioter300 (Rank 1) ---
    {
      "username": "elioter300", 
      "lastOnline": "12 hours ago",
      "registeredSince": "4 years ago",
      "profileImage": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
      "timePeriodSelected": "October 2025", 
      "performanceDashboard": [
        { "label": "Rank", "value": "1", "unit": "🏆" },
        { "label": "ROI", "value": "96%", "unit": "", "isProfitMetric": true },
        { "label": "Net Profit", "value": "9690", "unit": "¢", "isProfitMetric": true },
        { "label": "Sum of Stakes", "value": "20070", "unit": "¢" },
        { "label": "Unsettled Cents", "value": "10000", "unit": "¢" },
        { "label": "Unsettled Bets", "value": "1", "unit": "" }
      ],
      "betSummaryDashboard": [
        { "label": "Total Balance", "value": "10790", "unit": "¢", "highlight": true },
        { "label": "Number of Bets", "value": "4", "unit": "" },
        { "label": "Won", "value": "3", "percentage": "100%", "unit": "Won", "isPositive": true },
        { "label": "Back", "value": "0", "percentage": "0%", "unit": "Back", "isNeutral": true },
        { "label": "Lost", "value": "0", "percentage": "0%", "unit": "Lost", "isNegative": true }
      ],
      "bestPerformances": {
        "title": "Player's Best Performances",
        "dataAvailable": false,
        "message": "Not enough bets have been placed in order to display the player's best performances. This block will show you best performances in percentages by competitions, teams and bet types."
      },
      "lastBetsGraphic": {
        "title": "Graphic of the Last Bets",
        "data": [ 
          { "result": "Won", "value": 10, "color": "green" },
          { "result": "Won", "value": 20, "color": "green" },
          { "result": "Lost", "value": 5, "color": "red" },
          { "result": "Won", "value": 15, "color": "green" }
        ],
        "hoverInstruction": "You can hover on the graph in order to check details"
      },
      "contestDetails": { "position": 1, "prize": "100€", "points": 31149, "country": "Ukraine" }
    },

    // --- Profile 2: Toha1980 (Rank 2) ---
    {
      "username": "Toha1980",
      "lastOnline": "3 days ago",
      "registeredSince": "2 years ago",
      "profileImage": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
      "timePeriodSelected": "October 2025",
      "performanceDashboard": [
        { "label": "Rank", "value": "2", "unit": "🥈" },
        { "label": "ROI", "value": "55%", "unit": "", "isProfitMetric": true },
        { "label": "Net Profit", "value": "5200", "unit": "¢", "isProfitMetric": true },
        { "label": "Sum of Stakes", "value": "15500", "unit": "¢" },
        { "label": "Unsettled Cents", "value": "3000", "unit": "¢" },
        { "label": "Unsettled Bets", "value": "0", "unit": "" }
      ],
      "betSummaryDashboard": [
        { "label": "Total Balance", "value": "8500", "unit": "¢", "highlight": true },
        { "label": "Number of Bets", "value": "12", "unit": "" },
        { "label": "Won", "value": "6", "percentage": "50%", "unit": "Won", "isPositive": true },
        { "label": "Back", "value": "3", "percentage": "25%", "unit": "Back", "isNeutral": true },
        { "label": "Lost", "value": "3", "percentage": "25%", "unit": "Lost", "isNegative": true }
      ],
      "bestPerformances": {
        "title": "Player's Best Performances",
        "dataAvailable": true,
        "message": "Highest Win Rate: Football (70%)"
      },
      "lastBetsGraphic": {
        "title": "Graphic of the Last Bets",
        "data": [ 
          { "result": "Won", "value": 5, "color": "green" },
          { "result": "Lost", "value": 15, "color": "red" },
          { "result": "Won", "value": 10, "color": "green" },
          { "result": "Won", "value": 10, "color": "green" }
        ],
        "hoverInstruction": "You can hover on the graph in order to check details"
      },
      "contestDetails": { "position": 2, "prize": "75€", "points": 24727, "country": "Ukraine" }
    },
    
    // --- Profile 3: sangretobays (Rank 3) ---
    {
      "username": "sangretobays",
      "lastOnline": "1 hour ago",
      "registeredSince": "1 year ago",
      "profileImage": null,
      "timePeriodSelected": "October 2025",
      "performanceDashboard": [
        { "label": "Rank", "value": "3", "unit": "🥉" },
        { "label": "ROI", "value": "32%", "unit": "", "isProfitMetric": true },
        { "label": "Net Profit", "value": "3000", "unit": "¢", "isProfitMetric": true },
        { "label": "Sum of Stakes", "value": "9000", "unit": "¢" },
        { "label": "Unsettled Cents", "value": "1500", "unit": "¢" },
        { "label": "Unsettled Bets", "value": "1", "unit": "" }
      ],
      "betSummaryDashboard": [
        { "label": "Total Balance", "value": "5500", "unit": "¢", "highlight": true },
        { "label": "Number of Bets", "value": "25", "unit": "" },
        { "label": "Won", "value": "15", "percentage": "60%", "unit": "Won", "isPositive": true },
        { "label": "Back", "value": "5", "percentage": "20%", "unit": "Back", "isNeutral": true },
        { "label": "Lost", "value": "5", "percentage": "20%", "unit": "Lost", "isNegative": true }
      ],
      "bestPerformances": {
        "title": "Player's Best Performances",
        "dataAvailable": true,
        "message": "Highest Odd Won: 8.5x"
      },
      "lastBetsGraphic": {
        "title": "Graphic of the Last Bets",
        "data": [ 
          { "result": "Lost", "value": 10, "color": "red" },
          { "result": "Won", "value": 20, "color": "green" },
          { "result": "Won", "value": 5, "color": "green" },
          { "result": "Lost", "value": 10, "color": "red" }
        ],
        "hoverInstruction": "You can hover on the graph in order to check details"
      },
      "contestDetails": { "position": 3, "prize": "50€", "points": 23028, "country": null }
    },

    // --- Profile 4: TimBetRS (Rank 4) ---
    {
      "username": "TimBetRS",
      "lastOnline": "1 day ago",
      "registeredSince": "5 months ago",
      "profileImage": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png",
      "timePeriodSelected": "October 2025",
      "performanceDashboard": [
        { "label": "Rank", "value": "4", "unit": "4th" },
        { "label": "ROI", "value": "20%", "unit": "", "isProfitMetric": true },
        { "label": "Net Profit", "value": "2500", "unit": "¢", "isProfitMetric": true },
        { "label": "Sum of Stakes", "value": "12000", "unit": "¢" },
        { "label": "Unsettled Cents", "value": "500", "unit": "¢" },
        { "label": "Unsettled Bets", "value": "0", "unit": "" }
      ],
      "betSummaryDashboard": [
        { "label": "Total Balance", "value": "4500", "unit": "¢", "highlight": true },
        { "label": "Number of Bets", "value": "8", "unit": "" },
        { "label": "Won", "value": "4", "percentage": "50%", "unit": "Won", "isPositive": true },
        { "label": "Back", "value": "2", "percentage": "25%", "unit": "Back", "isNeutral": true },
        { "label": "Lost", "value": "2", "percentage": "25%", "unit": "Lost", "isNegative": true }
      ],
      "bestPerformances": {
        "title": "Player's Best Performances",
        "dataAvailable": true,
        "message": "Highest Profit: $500 on Basketball"
      },
      "lastBetsGraphic": {
        "title": "Graphic of the Last Bets",
        "data": [ 
          { "result": "Won", "value": 15, "color": "green" },
          { "result": "Won", "value": 15, "color": "green" },
          { "result": "Lost", "value": 10, "color": "red" },
          { "result": "Lost", "value": 5, "color": "red" }
        ],
        "hoverInstruction": "You can hover on the graph in order to check details"
      },
      "contestDetails": { "position": 4, "prize": "25€", "points": 22830, "country": "Ukraine" }
    },

    // --- Profile 5: GabrielKingRK (Rank 5) ---
    {
      "username": "GabrielKingRK",
      "lastOnline": "6 hours ago",
      "registeredSince": "9 months ago",
      "profileImage": null,
      "timePeriodSelected": "October 2025",
      "performanceDashboard": [
        { "label": "Rank", "value": "5", "unit": "5th" },
        { "label": "ROI", "value": "15%", "unit": "", "isProfitMetric": true },
        { "label": "Net Profit", "value": "2000", "unit": "¢", "isProfitMetric": true },
        { "label": "Sum of Stakes", "value": "13500", "unit": "¢" },
        { "label": "Unsettled Cents", "value": "2000", "unit": "¢" },
        { "label": "Unsettled Bets", "value": "2", "unit": "" }
      ],
      "betSummaryDashboard": [
        { "label": "Total Balance", "value": "3500", "unit": "¢", "highlight": true },
        { "label": "Number of Bets", "value": "30", "unit": "" },
        { "label": "Won", "value": "18", "percentage": "60%", "unit": "Won", "isPositive": true },
        { "label": "Back", "value": "6", "percentage": "20%", "unit": "Back", "isNeutral": true },
        { "label": "Lost", "value": "6", "percentage": "20%", "unit": "Lost", "isNegative": true }
      ],
      "bestPerformances": {
        "title": "Player's Best Performances",
        "dataAvailable": true,
        "message": "Most Bets Placed: 30"
      },
      "lastBetsGraphic": {
        "title": "Graphic of the Last Bets",
        "data": [ 
          { "result": "Won", "value": 20, "color": "green" },
          { "result": "Lost", "value": 10, "color": "red" },
          { "result": "Won", "value": 10, "color": "green" },
          { "result": "Won", "value": 20, "color": "green" }
        ],
        "hoverInstruction": "You can hover on the graph in order to check details"
      },
      "contestDetails": { "position": 5, "prize": "25€", "points": 22519, "country": null }
    },

    // --- Profile 6: LauraTomy8 (Rank 6) ---
    {
      "username": "LauraTomy8",
      "lastOnline": "45 minutes ago",
      "registeredSince": "1 month ago",
      "profileImage": null,
      "timePeriodSelected": "October 2025",
      "performanceDashboard": [
        { "label": "Rank", "value": "6", "unit": "6th" },
        { "label": "ROI", "value": "10%", "unit": "", "isProfitMetric": true },
        { "label": "Net Profit", "value": "1500", "unit": "¢", "isProfitMetric": true },
        { "label": "Sum of Stakes", "value": "15000", "unit": "¢" },
        { "label": "Unsettled Cents", "value": "5000", "unit": "¢" },
        { "label": "Unsettled Bets", "value": "3", "unit": "" }
      ],
      "betSummaryDashboard": [
        { "label": "Total Balance", "value": "2500", "unit": "¢", "highlight": true },
        { "label": "Number of Bets", "value": "40", "unit": "" },
        { "label": "Won", "value": "25", "percentage": "62.5%", "unit": "Won", "isPositive": true },
        { "label": "Back", "value": "5", "percentage": "12.5%", "unit": "Back", "isNeutral": true },
        { "label": "Lost", "value": "10", "percentage": "25%", "unit": "Lost", "isNegative": true }
      ],
      "bestPerformances": {
        "title": "Player's Best Performances",
        "dataAvailable": true,
        "message": "Highest Win Streak: 7"
      },
      "lastBetsGraphic": {
        "title": "Graphic of the Last Bets",
        "data": [ 
          { "result": "Won", "value": 15, "color": "green" },
          { "result": "Won", "value": 10, "color": "green" },
          { "result": "Won", "value": 20, "color": "green" },
          { "result": "Lost", "value": 5, "color": "red" }
        ],
        "hoverInstruction": "You can hover on the graph in order to check details"
      },
      "contestDetails": { "position": 6, "prize": "25€", "points": 20537, "country": null }
    }
  ],

  // --- C. Contest Full Leaderboard (Original Data - Optional for Display) ---
  // यह खंड अब मुख्य रूप से 'allUserProfiles' से लिया जा सकता है, लेकिन इसे मूल रूप में भी रखा गया है
  "fullRanking": [
    { "position": 1, "username": "elioter300", "prize": "100€", "points": 31149, "country": "Ukraine", "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png" },
    { "position": 2, "username": "Toha1980", "prize": "75€", "points": 24727, "country": "Ukraine", "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png" },
    { "position": 3, "username": "sangretobays", "prize": "50€", "points": 23028, "country": null, "flag": null },
    { "position": 4, "username": "TimBetRS", "prize": "25€", "points": 22830, "country": "Ukraine", "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/FC_Midtjylland_logo.svg/1200px-FC_Midtjylland_logo.svg.png" },
    { "position": 5, "username": "GabrielKingRK", "prize": "25€", "points": 22519, "country": null, "flag": null },
    { "position": 6, "username": "LauraTomy8", "prize": "25€", "points": 20537, "country": null, "flag": null }
  ]
};

export default bettingContestDetail;