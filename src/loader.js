class loader extends Phaser.Scene {

  constructor() {
    super({ key: 'loader' });
  }

  preload() {
    this.load.image("background", "src/assets/Backgrounds/ons-ms-apartment-bedroom-5.jpg");
    this.load.image("ons-ms-apartment-bedroom-5", "src/assets/Backgrounds/ons-ms-apartment-bedroom-5.jpg");
    this.load.image("ons-lux-party-balcony-7", "src/assets/Backgrounds/ons-lux-party-balcony-7.jpg");
    this.load.image("ons-lux-party-hall-6", "src/assets/Backgrounds/ons-lux-party-hall-6.jpg");
    this.load.image("body", "src/assets/MAINHERO/start/body/1/face_f_1_body_f_regular_white_1.png");
    this.load.image("backHair3", "src/assets/MAINHERO/start/hair/back/hair_f_3_back.png");
    this.load.image("hair3", "src/assets/MAINHERO/start/hair/front/hair_f_3.png");
    this.load.image("backHair4", "src/assets/MAINHERO/start/hair/back/hair_f_4_back.png");
    this.load.image("hair4", "src/assets/MAINHERO/start/hair/front/hair_f_4.png");
    this.load.image("cloths16", "src/assets/MAINHERO/cloths_f_regular_16.png");
    this.load.image("cloths8", "src/assets/MAINHERO/start/clothes/cloths_f_regular_8.png");
    this.load.image("cloths9", "src/assets/MAINHERO/start/clothes/cloths_f_regular_9.png");
    this.load.image("bodyM", "src/assets/Russell/face_m_1_body_m_regular_white_1.png");
    this.load.image("backHairM", "src/assets/Russell/hair/hair_m_4_back.png");
    this.load.image("hairM", "src/assets/Russell/hair/hair_m_4.png");
    this.load.image("clothsM", "src/assets/Russell/cloths_m_regular_6.png");
    this.load.image("left", "src/assets/buttons/arrow_left.png");
    this.load.image("right", "src/assets/buttons/arrow_right.png");
    this.load.image("chooseCloths", "src/assets/boxType/chooseCloths.png");
    this.load.image("chooseHair", "src/assets/boxType/chooseHair.png");
    this.load.image("confirm", "src/assets/boxType/confirm.png");
    this.load.image("itemChosen", "src/assets/boxType/itemChosen.png");
    this.load.image("closeBtn", "src/assets/buttons/close.png");
    this.load.image("angryEclipse", `src/assets/eclipse/angry.png`);
    this.load.image("defaultEclipse", `src/assets/eclipse/default.png`);
    this.load.image("flirtyEclipse", `src/assets/eclipse/flirty 2.png`);
    this.load.image("happyEclipse", `src/assets/eclipse/happy.png`);
    this.load.image("sadEclipse", `src/assets/eclipse/sad.png`);
    this.load.image("shyEclipse", `src/assets/eclipse/shy.png`);
    this.load.image("surprisedEclipse", `src/assets/eclipse/surprised.png`);
    this.load.image("angry", `src/assets/MAINHERO/start/body/1/emotions/face_f_1_angry.png`);
    this.load.image("default", `src/assets/MAINHERO/start/body/1/emotions/face_f_1_default.png`);
    this.load.image("joy", `src/assets/MAINHERO/start/body/1/emotions/face_f_1_joy.png`);
    this.load.image("sad", `src/assets/MAINHERO/start/body/1/emotions/face_f_1_sad.png`);
    this.load.image("shy", `src/assets/MAINHERO/start/body/1/emotions/face_f_1_shy.png`);
    this.load.image("surprised", `src/assets/MAINHERO/start/body/1/emotions/face_f_1_surprised.png`);
    this.load.image("angryM", `src/assets/Russell/emotions/face_m_1_angry.png`);
    this.load.image("defaultM", `src/assets/Russell/emotions/face_m_1_default.png`);
    this.load.image("joyM", `src/assets/Russell/emotions/face_m_1_joy.png`);
    this.load.image("sadM", `src/assets/Russell/emotions/face_m_1_sad.png`);
    this.load.image("shyM", `src/assets/Russell/emotions/face_m_1_shy.png`);
    this.load.image("surprisedM", `src/assets/Russell/emotions/face_m_1_surprised.png`);
    this.load.image("thought", `src/assets/boxType/thought.png`);
    this.load.image("defaultBox", `src/assets/boxType/default.png`);
  }

  create() {}
  update () {
    this.scene.start('sceneA');
  }
}

export default loader;