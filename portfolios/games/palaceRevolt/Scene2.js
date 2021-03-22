class Scene2 extends BaseScene {
    constructor(){
        super("Level2");

        console.log("finished child cons for scene2");
    }

    preload() {
        super.preload("mapLevel2","assets/tilemaps/Level2.json");
        
        this.load.audio("audio_chipmunk","assets/sounds/angry_chipmunk.mp3");
    }

    create(){
        super.create("mapLevel2");

        this.levelMusic = this.sound.add("audio_chipmunk");

        let musicConfig={
            mute:false,
            volume:0.2,
            rate:1,
            detune:0,
            loop:true,
            delay:0
        }

        this.levelMusic.play(musicConfig);

    }

    update(){
        super.update();
        
    }

    kingEscapes() {
        this.levelMusic.stop();
        super.kingEscapes(null)
    }
}