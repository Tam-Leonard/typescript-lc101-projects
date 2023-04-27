"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; //pushed enter while typing the word Caro and the import came up at the top to import Cargo
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //Returns the sum of all itmes using each item's massKg property
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        /*alt way:
        let carogMassTotal = this.sumMass(this.cargoItems);
        let astronautMassTotal = this.sumMass(this.astronauts);
        let massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal*/
    };
    Rocket.prototype.canAdd = function (item) {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        /* alt way:
        let totalMass = this.crrentMassKg() + item.massKg;
        return totalMass <= this.totalCapacityKg;
        or we can do this:
        let myTotalMass = this.currentMassKg() + item.massKg;
        if (myTotalMass <= this.totalCapacityKg) return true;
        return false; */
    };
    Rocket.prototype.addCargo = function (cargo) {
        //Uses this.canAdd() to see if another item can be added. 
        var itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            //If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            //If false, returns false.
            return false;
        }
        /* alt way:
        else statement is optional:
            } return false;
       }*/
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //Uses this.canAdd() to see if another astronaut can be added.
        var itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            //If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            //If false, returns false.
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
