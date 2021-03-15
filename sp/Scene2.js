class Scene2 extends BaseScene {
    constructor(){

        super("Level2");

        console.log("Finished child constractor for Scene 2");

    }

    preload(){
        
        //call the super preload
        super.preload("mapLevel2","assets/tilemaps/Level2.json");
    }

    create(){

        //call the super create
        super.create("mapLevel2");

    }

    update(){

        //call the super update
        super.update();
        
    }

    kingEscape(){
        //call the super kingEscape
        super.kingEscape(null);
    }
}