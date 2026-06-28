import Player from "./player.js";
import players from "../testdata.json" with { type: "json" };

class Bowler extends Player {

    constructor(id,name,age,role,basePrice,soldPrice,isSold,experience,runs,wickets) {

        super(id,name,age,role,basePrice,soldPrice,isSold,experience,runs,wickets);

    }

}

// Filter only bowlers and create Bowler objects
const bowlers = players
    .filter(player => player.role === "Bowler")
    .map(player => new Bowler(
        player.id,
        player.name,
        player.age,
        player.role,
        player.basePrice,
        player.soldPrice,
        player.isSold,
        player.experience,
        player.runs,
        player.wickets
    ));

export default bowlers;