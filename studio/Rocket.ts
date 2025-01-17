import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; //pushed enter while typing the word Caro and the import came up at the top to import Cargo
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        //Returns the sum of all itmes using each item's massKg property
        let myTotalMass = 0;
        for(let i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }

    currentMassKg(): number {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
       return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
       
       /*alt way:
       let carogMassTotal = this.sumMass(this.cargoItems);
       let astronautMassTotal = this.sumMass(this.astronauts);
       let massTotal = cargoMassTotal + astronautMassTotal;
       return massTotal*/
    }

    canAdd(item: Payload): boolean {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
       
        /* alt way:
        let totalMass = this.crrentMassKg() + item.massKg;
        return totalMass <= this.totalCapacityKg;
        or we can do this:
        let myTotalMass = this.currentMassKg() + item.massKg;
        if (myTotalMass <= this.totalCapacityKg) return true;
        return false; */
    }

    addCargo(cargo: Cargo): boolean {
        //Uses this.canAdd() to see if another item can be added. 
        
        let itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            //If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        } else {
            //If false, returns false.
            return false;
        } 
        /* alt way:
        else statement is optional:
            } return false;
       }*/
    }

    addAstronaut(astronaut: Astronaut): boolean {
        //Uses this.canAdd() to see if another astronaut can be added.
        let itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            //If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        } else {
            //If false, returns false.
            return false;
        } 
    }




 }