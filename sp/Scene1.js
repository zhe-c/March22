class Scene1 extends BaseScene 
{
    constructor(){

        super("Level1");

        console.log("Finished child constractor for Scene 1");

    }

    preload(){
        
        //call the super preload
        super.preload("mapLevel1","assets/tilemaps/Level1.json");
    }

    create(){

        //call the super create
        super.create("mapLevel1");

    }

    update(){

        //call the super update
        super.update();
        
    }

    kingEscape(){
        //call the super kingEscape
        super.kingEscape("Level2");
    }
}