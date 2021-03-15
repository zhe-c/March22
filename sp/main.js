//IIFE
(function(){
    //put our code here - safe

    // set up our game config
    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: "#2d2d2d",
        parent: "palace-revolt",
        pixelArt: true,
        physics: {
            default: "matter",
            matter: {
                gravity: {y:0},
                debug:true
            }
        },

        scene: [Scene1,Scene2]
    };

    let game = new Phaser.Game(config);

})();