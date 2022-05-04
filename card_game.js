class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Red_Belt extends Card{
    constructor() {
        super('Red Belt', 3)
        this.power = 3;
        this.stamina = 4;
    }
    power_up() {
        this.power += 1;
    }
    power_down() {
        if (this.power === 0) {
            throw 'power cannot be below 0'
        }
        this.power -= 1;
    }
    stamina_up() {
        this.stamnia += 1
    }
    stamina_down() {
        if (this.stamina === 0) {
            throw 'stamina cannot be below 0'
        }
        this.stamina -= 1
    }
    attack(unit) {
        for (var x=0; x < this.power; x++) {
            unit.stamina_down()
        }
    }

}
class Black_Belt extends Card {
    constructor() {
        super('Black Belt', 4)
        this.power = 5;
        this.stamina = 4;
    }
    power_up() {
        this.power += 1;
    }
    power_down() {
        if (this.power === 0) {
            throw 'power cannot be below 0'
        }
        this.power -= 1;
    }
    stamina_up() {
        this.stamnia += 1
    }
    stamina_down() {
        if (this.stamina === 0) {
            throw 'stamina cannot be below 0'
        }
        this.stamina -= 1
    }
    attack(unit) {
        for (var x=0; x < this.power; x++) {
            unit.stamina_down()
        }
    }
}

class Hard_algo extends Card {
    constructor(Unit) {
        super('Hard Algorithm', 2)
        let x = 0
        while (x < 3) {
            Unit.stamina_up()
            x++
        }
    }
}

class Reject extends Card {
    constructor(Unit) {
        super('Reject', 1);
        let x = 0
        while (x < 2) {
            Unit.stamina_down()
            x++
        }
        
    }
}

class Program extends Card {
    constructor(unit) {
        super('Program', 3);
        let x = 0
        while (x < 2) {
            unit.power_up()
            x++
        }
    }
}

unit1 = new Red_Belt()
new Hard_algo(unit1)
unit2 = new Black_Belt()
new Reject(unit1)
new Program(unit1)
unit1.attack(unit2)