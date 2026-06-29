import Team from "./models/team.js";
import batsmen from "./models/batsman.js";
import bowlers from "./models/bowler.js";
import allRounders from "./models/allrounder.js";
import AuctionUtility from "./utilities/auction-utility.js";

// Create Teams
const team1 = new Team(1, "RCB");
const team2 = new Team(2, "MI");

// Combine all players
const players = [...batsmen, ...bowlers, ...allRounders];

// Conduct Auction
players.forEach((player, index) => {

    if (index < 5) {
        AuctionUtility.conductAuction(
            player,
            team1,
            player.basePrice + 5000
        );
    } else {
        AuctionUtility.conductAuction(
            player,
            team2,
            player.basePrice + 5000
        );
    }

});

// Print Final Auction List
AuctionUtility.printAuctionLog(players);