class Scene1 extends BaseScene {
    constructor(){
        super("Level1");

        console.log("finished child cons for scene1");
    }

    preload() {
        super.preload("mapLevel1","assets/tilemaps/Level1.json");

        this.load.audio("audio_crowd","assets/sounds/angry_crowd.mp3");
    }

    create(){
        super.create("mapLevel1");

        this.levelMusic = this.sound.add("audio_crowd");

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
        super.kingEscapes("Level2")
    }
}