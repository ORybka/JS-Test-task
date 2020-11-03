import Phaser from "phaser";
import loader from "./loader"
import sceneD from "./dialog"
import json from "./assets/ons2.json"

let person = {};

class sceneA extends Phaser.Scene {

  constructor() {
    super({ key: 'sceneA' });
  }

  create(state) {
    if (typeof state !== 'number')
      state = 0;

    let confirm;
    let left;
    let right;
    let backHair;
    let body;
    let cloths;
    let hair;
    let choose;
    
    const background = this.add.image(250, 300, "background").setScale(.7);
    backHair = this.add.image(400, 350, "backHair3").setScale(.5);
    body = this.add.image(400, 350, "body").setScale(.5);

    let clothsItems = [
      "cloths16",
      "cloths8",
      "cloths9",
    ]
    cloths = this.add.image(400, 350, clothsItems[state]).setScale(.5);


    hair = this.add.image(400, 350, "hair3").setScale(.5);
    choose = this.add.image(400, 550, "chooseCloths");
        
    left = this.add.image(80, 350, "left").setScale(1.5).setInteractive();
    left.on('pointerdown', function () {
      if (state > 0) {
        state -= 1;
      } else {
        state = clothsItems.length - 1;
      }
      this.scene.start('sceneA', state || {});
    }, this);
    right = this.add.image(720, 350, "right").setScale(1.5).setInteractive();
    right.on('pointerdown', function () {
      if (state < clothsItems.length-1) {
        state += 1;
      } else {
        state = {};
      }
      this.scene.start('sceneA', state);
    }, this);

    confirm = this.add.image(400, 630, "confirm").setInteractive();
    confirm.on('pointerdown', function () {
      person.cloths = clothsItems[state];
      state = {};
      this.scene.start('sceneB', state);
    }, this);
  }
}

class sceneB extends Phaser.Scene {

  constructor() {
    super({ key: 'sceneB' });
  }

  create(state) {
    if (typeof state !== 'number')
      state = 0;

    let confirm;
    let left;
    let right;
    let backHair;
    let body;
    let cloths;
    let hair;
    let choose;

    let hairItems = [
      ["backHair3", "hair3"],
      ["backHair4", "hair4"]
    ]
    
    const background = this.add.image(250, 300, "background").setScale(.7);
    backHair = this.add.image(400, 350, hairItems[state][0]).setScale(.5);
    body = this.add.image(400, 350, "body").setScale(.5);
    cloths = this.add.image(400, 350, person.cloths).setScale(.5);
    hair = this.add.image(400, 350, hairItems[state][1]).setScale(.5);
    choose = this.add.image(400, 550, "chooseHair");
        
    left = this.add.image(80, 350, "left").setScale(1.5).setInteractive();
    left.on('pointerdown', function () {
      if (state > 0) {
        state -= 1;
      } else {
        state = hairItems.length - 1;
      }
      this.scene.start('sceneB', state || {});
    }, this);
    right = this.add.image(720, 350, "right").setScale(1.5).setInteractive();
    right.on('pointerdown', function () {
      if (state < hairItems.length-1) {
        state += 1;
      } else {
        state = {};
      }
      this.scene.start('sceneB', state);
    }, this);
    confirm = this.add.image(400, 630, "confirm").setInteractive();
    confirm.on('pointerdown', function () {
      person.backHair = hairItems[state][0];
      person.hair = hairItems[state][1];
      state = {};
      this.scene.start('sceneC', state);
      console.log(person.backHair);
      console.log(person.hair);
    }, this);
  }
}

class sceneC extends Phaser.Scene {

  constructor() {
    super({ key: 'sceneC' });
  }

  create(state) {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    if (typeof state !== 'number')
      state = 0;

    const background = this.add.image(250, 300, "background").setScale(.7);
    let backHair = this.add.image(400, 350, person.backHair).setScale(.5);
    let body = this.add.image(400, 350, "body").setScale(.5);
    let cloths = this.add.image(400, 350, person.cloths).setScale(.5);
    let hair = this.add.image(400, 350, person.hair).setScale(.5);
        
    let itemChosen = this.add.image(400, 29, "itemChosen").setScale(.3);

    this.input.keyboard.on('keydown_SPACE', function () {
      this.scene.start('sceneD');
    }, this);
  }
}

export default person;

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 700,
  scene: [ loader, sceneA, sceneB, sceneC, sceneD ]
};

const game = new Phaser.Game(config);