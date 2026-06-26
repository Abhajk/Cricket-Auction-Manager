import Player from "./player.js";
import players from "../testdata.json" with { type: "json" };

class Batsman extends Player {

    constructor(id, name, age, role, basePrice, soldPrice, isSold) {
        super(id, name, age, role, basePrice, soldPrice, isSold);
    }

}

// Filter only batsmen and create Batsman objects
const batsmen = players
    .filter(player => player.role === "Batsman")
    .map(player => new Batsman(
        player.id,
        player.name,
        player.age,
        player.role,
        player.basePrice,
        player.soldPrice,
        player.isSold
    ));

export default batsmen;