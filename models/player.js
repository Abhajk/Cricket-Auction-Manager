class Player {

    constructor(
        id,
        name,
        age,
        role,
        basePrice,
        soldPrice,
        isSold,
        experience,
        runs,
        wickets
    ) {

        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = soldPrice;
        this.isSold = isSold;
        this.team = null;
        this.experience = experience;
        this.runs = runs;
        this.wickets = wickets;
    }

}

export default Player;