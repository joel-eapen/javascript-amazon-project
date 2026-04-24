class Car{
    #brand;
    #model;
    speed;
    isTrunkOpen;
    constructor(carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = 0;
        this.isTrunkOpen = false;
    }

    displayInfo(){
        console.log(`${this.#brand} ${this.#model} speed: ${this.speed}km/hr trunkInfo:${this.isTrunkOpen}`);
    }

    go(){
        if(this.isTrunkOpen){
            console.log('You need to close the trunk before driving');
        }else{
            this.speed +=5;
            return this.speed;
        }
    }

    brake(){
        this.speed-=5;
        return this.speed;
    }

    openTrunk(){
        if(this.speed>0){
            console.log('You need to stop the car before opening the trunk');
        }else{
            this.isTrunkOpen = true;
            return this.isTrunkOpen;
        }
        
    }

    closeTrunk(){
        this.isTrunkOpen = false;
        return this.isTrunkOpen;
    }
}

const car1 = new Car({
    brand:'Toyota',
    model:'Corolla'
});

const car2 = new Car({
    brand:'Tesla',
    model:'Model 3'
});



class RaceCar extends Car{
    acceleration;
    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
        this.isTrunkOpen = undefined;
       
    }

    go(){
        if(this.isTrunkOpen){
            console.log('You need to close the trunk before driving');
        }else{
            this.speed += this.acceleration;
            return this.speed;
        }
    }


    openTrunk(){
        return ``;

    }

    closeTrunk(){
        return ``;
    }
}

const raceCar1 = new RaceCar({
    brand:'McLaren',
    model:'P1',
    acceleration: 10  
})

raceCar1.go();
raceCar1.go();
console.log(raceCar1.displayInfo());