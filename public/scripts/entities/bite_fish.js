class BiteFish extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }


    for(let denizen in fishtank.denizens){
      const object = fishtank.denizens[denizen];
      console.log(object.id);
      if(object.id !== this.id){
        if (distance < 50 && object.constructor.name !== 'Starter' && object.constructor.name !== 'BiteFish'){
          object.kill();
        }
      }
    }

  }

  onClick(event) {
    this.kill();
  }



}







