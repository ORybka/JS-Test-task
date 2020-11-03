import json from "./assets/ons2.json";
import person from "./index";

let backgroundName;

class sceneD extends Phaser.Scene {

  constructor() {
    super({ key: 'sceneD' });
  }

  preload () {
    this.load.plugin('rexcirclemaskimageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcirclemaskimageplugin.min.js', true);
  }
  
  create (id) {
    if (typeof id !== 'string') { id = "0" };
    const obj = json.find(el => el.id === id);
    if (id === "0") {this.cameras.main.fadeIn(1000, 0, 0, 0)};

    if ( obj  === "" || obj === undefined) { 
      this.scene.start('sceneD', "0");
    }; 

    let background;
    let eclipse;
    let boxType;
    let text;
    let backHair;
    let body;
    let face;
    let cloths;
    let hair;
    let closeBtn;
    let shape;
    let mask;

    if (obj.type === "background") {
      backgroundName = obj.backgroundName.replace("background_", "");
    }   
    background = this.add.image(250, 300, backgroundName);
    background.setScale(.7);
    
    const textStyle = { 
      font: "24px 'Nunito sans'", 
      fill: "#000", 
      align: "left",
      wordWrap: { width: 400, useAdvancedWrap: true }
    };

    shape = this.make.graphics();
    mask = shape.createGeometryMask();

    if (obj.type === "left") {
      eclipse = this.add.image(200, 270, `${obj.emotion}Eclipse`);
      shape.arc(229, 260, 150, 0, 360, false);
      shape.fillStyle(0xffffff).fillPath();
      backHair = this.add.image(200, 370, person.backHair).setScale(.5);
      body = this.add.image(200, 370, "body").setScale(.5).setMask(mask);
      face = this.add.image(200, 370, obj.emotion).setScale(.5);
      cloths = this.add.image(200, 370, person.cloths).setScale(.5).setMask(mask);
      hair = this.add.image(200, 370, person.hair).setScale(.5);
      boxType = this.add.image(350, 450, obj.boxType);
      if (obj.boxType === "" || obj.boxType === undefined) {boxType = this.add.image(350, 450, "thought")};
      text = this.add.text(150, 430, obj.text, textStyle);
    } else if (obj.type === "right") {
      eclipse = this.add.image(600, 270, `${obj.emotion}Eclipse`);
      backHair = this.add.image(600, 370, "backHairM").setScale(.5);
      shape.arc(573, 264, 150, 0, 360, false);
      shape.fillStyle(0xffffff).fillPath();
      body = this.add.image(600, 370, "bodyM").setScale(.5).setMask(mask);
      face = this.add.image(600, 370, `${obj.emotion}M`).setScale(.5);
      cloths = this.add.image(600, 370, "clothsM").setScale(.5).setMask(mask);
      hair = this.add.image(600, 370, "hairM").setScale(.5);
      boxType = this.add.image(480, 450, obj.boxType); 
      if (obj.boxType === "" || obj.boxType === undefined) {boxType = this.add.image(480, 450, "thought")};
      text = this.add.text(280, 430, obj.text, textStyle);
      eclipse.flipX = true;
      boxType.flipX = true;
      backHair.flipX = true;
      body.flipX = true;
      face.flipX = true;
      cloths.flipX = true;
      hair.flipX = true;
    } else if (obj.type === "middle") {
      boxType = this.add.image(420, 350, "defaultBox");  
      text = this.add.text(220, 320, obj.text, textStyle);
    } 

    if (eclipse) {eclipse.setScale(.5)};
    if (boxType) {boxType.setScale(1.5, 1.3)};

    closeBtn = this.add.image(50, 50, "closeBtn");
    closeBtn.setInteractive();
    closeBtn.on('pointerdown', function () {
      this.scene.start('sceneD', "0");
    }, this);

    this.input.keyboard.on('keydown_SPACE', function () {
      this.scene.start('sceneD', obj.nextId);
    }, this);
  }
}

export default sceneD;
