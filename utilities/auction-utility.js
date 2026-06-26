class AuctionUtility {

    // Convert player name to uppercase
    static convertToUpperCase(player) {
        player.name = player.name.toUpperCase();
    }

    // Validate player age
    static validateAge(player) {
        return player.age > 18;
    }

    // Conduct auction
    static conductAuction(player, team, soldPrice) {

        if (!this.validateAge(player)) {
            console.log(`${player.name} is not eligible for auction.`);
            return;
        }

        this.convertToUpperCase(player);

        player.soldPrice = soldPrice;
        player.isSold = true;
        player.team = team.name;

        team.addPlayer(player);
    }

    // Print final auction list
    static printAuctionLog(players) {

        console.log("\n========== FINAL AUCTION LIST ==========\n");

        players.forEach(player => {

            console.log(`ID          : ${player.id}`);
            console.log(`NAME        : ${player.name}`);
            console.log(`ROLE        : ${player.role}`);
            console.log(`TEAM        : ${player.team}`);
            console.log(`BASE PRICE  : ${player.basePrice}`);
            console.log(`SOLD PRICE  : ${player.soldPrice}`);
            console.log(`SOLD STATUS : ${player.isSold}`);
            console.log("----------------------------------------");

        });

    }

}

export default AuctionUtility;