import Player from "./player.js";
import players from "../testdata.json" with { type: "json" };

class AllRounder extends Player {

    constructor(id, name, age, role, basePrice, soldPrice, isSold) {
        super(id, name, age, role, basePrice, soldPrice, isSold);
    }

}

const allRounders = players
    .filter(player => player.role === "AllRounder")
    .map(player => new AllRounder(
        player.id,
        player.name,
        player.age,
        player.role,
        player.basePrice,
        player.soldPrice,
        player.isSold
    ));

export default allRounders;