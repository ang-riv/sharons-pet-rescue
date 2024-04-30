//const statusButton = document.querySelector("button");
//const pets = document.querySelector(".all-pets");

const createPet = function (name, species){
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function (){
            console.log(`${this.name} needs a nap. Zzz...`);
            // after sleeping, resets the tired meter down to zero
            this.isTired = 1;
        },
        play: function(){
            if (this.isTired === 10) {
                console.log("Too tired to play.");
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`)
                // add to it because playing makes pets tired
                this.isTired += 1;
            }
        }
    };
    return pet;
}

// making some pets
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// verify the objects and methods
// console.log(sora, clover, baxter, cleo, francine);
// checking if methods work
clover.sleep();
baxter.play();

// checking isTired meters
console.log(clover, baxter);