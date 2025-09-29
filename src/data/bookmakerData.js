// src/data/bookmakerData.js

const bookmakerData = {
  page_title: "Top Bookmakers and Free Bets",

  top_free_bets: [
    {
      bookmaker_name: "Betway",
      image_url: "https://www.betrallyindia.com/wp-content/uploads/2022/10/megapari-logo.png",
      offer_type: "100% BONUS",
      bonus_amount: "₹10,000",
      offer_details: "Deposit bonus for new users",
      call_to_action: "CLAIM NOW!"
    },
    {
      bookmaker_name: "1xBet",
      image_url: "https://www.betrallyindia.com/wp-content/uploads/2022/10/megapari-logo.png",
      offer_type: "WELCOME BONUS",
      bonus_amount: "₹8,000",
      offer_details: "For first deposit only",
      call_to_action: "JOIN NOW"
    },
    {
      bookmaker_name: "Parimatch",
      image_url: "https://www.betrallyindia.com/wp-content/uploads/2022/10/megapari-logo.png",
      offer_type: "FREE BET",
      bonus_amount: "₹12,000",
      offer_details: "No risk first bet",
      call_to_action: "CLAIM NOW!"
    }
  ],

  bookmaker_rating: {
    filter: {
      label: "Bonus For",
      value: "All Users",
      options: ["All Users", "New Users", "VIP"]
    },
    table_data: [
      {
        bookmaker_name: "Betway",
        image_url: "https://www.betrallyindia.com/wp-content/uploads/2022/10/megapari-logo.png",
        rating_score: "9.5",
        rating_stars: 4.5,
        review_link: "Read Review",
        average_payout: "97.5%",
        welcome_bonus: "100% up to ₹10,000",
        call_to_action: "CLAIM NOW!"
      },
      {
        bookmaker_name: "1xBet",
        image_url: "https://www.betrallyindia.com/wp-content/uploads/2022/10/megapari-logo.png",
        rating_score: "9.2",
        rating_stars: 4,
        review_link: "Read Review",
        average_payout: "96.8%",
        welcome_bonus: "Up to ₹8,000 Bonus",
        call_to_action: "JOIN NOW"
      },
      {
        bookmaker_name: "Parimatch",
        image_url: "https://www.betrallyindia.com/wp-content/uploads/2022/10/megapari-logo.png",
        rating_score: "9.0",
        rating_stars: 4,
        review_link: "Read Review",
        average_payout: "96.2%",
        welcome_bonus: "Free Bet up to ₹12,000",
        call_to_action: "CLAIM NOW!"
      }
    ]
  }
};

export default bookmakerData;
