class Ninja {
    constructor(name, health, strength = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Hello my name is ${this.name} !`);
    }
    showStats() {
        console.log(
            `Name : ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`
        );
    }
    drinkSake() {
        this.health += 10;
        console.log(`add +10 Health : ${this.health} `)
    }
}
class Sensei extends Ninja {
    constructor(name, health = 200, strength = 10, speed = 10, wisdom = 10) {
        super(name, health, strength, speed);
        this.wisdom = wisdom
    }
    speakWisdom() {
       // super.drinkSake();
        console.log(
            `What one programmer can do in a month, two programmers can do in two months.`
        );
        return this;
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();








