class BaseScene extends Phaser.Scene {

    //static var for character speeds
    static KING_SPEED = 10;
    static MINION_SPEED = 5;

    //static var for game paused bollean
    static gamePaused = false;

    //static var for checking if character sprites already preloaded
    static charactersLoaded = false;
    constructor(sceneName){

        super(sceneName);

        this.nextKingIdle = "king-idle-back";

        console.log("Finished parent constractor for BaseScene");

    }

    preload(mapKey,mapFile){
        this.load.image('dungeon_barrels','assets/tilesets/Barrels/Barrels.png');
        this.load.image('dungeon_bookcases','assets/tilesets/Bookcases/Bookcases.png');
        this.load.image('dungeon_carpets','assets/tilesets/Carpets/Carpets.png');
        this.load.image('dungeon_columns','assets/tilesets/Columns/Columns.png');
        this.load.image('dungeon_floors','assets/tilesets/Floors/Floors.png');
        this.load.image('dungeon_props','assets/tilesets/Props/Props.png');
        this.load.image('dungeon_stairs','assets/tilesets/Stairs/Stairs.png');
        this.load.image('dungeon_walls','assets/tilesets/Walls/Walls.png');

        //preload the map
        this.load.tilemapTiledJSON(mapKey,mapFile);

        //preload the character spritesheet if nor already preloaded
        if(!BaseScene.charactersLoaded)
        {
            this.load.multiatlas('character_sprites','assets/spritesheets/characters/Characters.json',
            'assets/spritesheets/characters');

            this.load.multiatlas('projectile_sprites','assets/spritesheets/projectiles/projectiles.json',
            'assets/spritesheets/projectiles');

            BaseScene.charactersLoaded = true;
        }
    }

    create(mapKey){
        //create the map
        const map = this.add.tilemap(mapKey);

        //add the tile sets to the map - not using columns and stairs at present
        const tileset1 = map.addTilesetImage("Barrels","dungeon_barrels");
        const tileset2 = map.addTilesetImage("Bookcases","dungeon_bookcases");
        const tileset3 = map.addTilesetImage("Carpets","dungeon_carpets");
        const tileset4 = map.addTilesetImage("Floors","dungeon_floors");
        const tileset5 = map.addTilesetImage("Props","dungeon_props");
        const tileset6 = map.addTilesetImage("Walls","dungeon_walls");

        //add the map layers to the scene
        const floorLayer = map.createLayer("Floors",[tileset4],0.0);
        const carpetLayer = map.createLayer("Carpets",[tileset3],0.0);
        const foundationLayer = map.createLayer("Foundations",[tileset6],0.0);
        const propLayer = map.createLayer("Props",[tileset5],0.0);
        const bookcaseLayer = map.createLayer("Bookcases",[tileset2],0.0);
        const barrelLayer = map.createLayer("Barrels",[tileset1],0.0);

        //set the camera's start position so we are in the map -now camera is centerd on king
        // this.cameras.main.scrollX = 600;
        // this.cameras.main.scrollY = 600;
    
        //turn on the cursor keys so we can pan around the map
        this.cursors = this.input.keyboard.createCursorKeys();

        //add the spacebar key to fire fireballs
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //create the king sprite and scale up the king
        this.king = this.matter.add.sprite(400,1300,'character_sprites','king-back-0.png');
        this.king.setName("king");
        this.king.setScale(2);

        //set the king to not get rotated br collision with the collision zone
        this.king.setBounce(0.2);
        this.king.setFixedRotation();

        // set the camera to the follow the king and stay within the map
        // this.cameras.main.setBounds(-(map.widthInPixels / 2), 0 , map.widthInPixels + 256, map.heightInPixels + 256);
        this.cameras.main.startFollow(this.king);

        //would have been great if this worked as matte+pharser+tiled
        //all get their isometric act together
        //but in isometric all x and y position of collision zones are Nan
        //foundationLayer.setCollisionByProperty({collides:true});
        //this.matter.world.convertTilemapLayer(foundationLayer);


        let matterInstance = this.matter;


        //manually add collision zones for foundations layer
        foundationLayer.forEachTile(function(tile){
            let tileWorldPos = foundationLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset6.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width / 2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height / 2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovable
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width,collisionItem.height);

                    //check if the curtrent collision zone is the escape point for this level
                    if(collisionItem.properties && collisionItem.properties.length > 0)
                    {
                        tmpSprite.setName(collisionItem.properties[0].name);
                    }

                }
                else{
                    console.log("Unsupported collision item shape!");
                }
            });
        });

        //props layer
        propLayer.forEachTile(function(tile){
            let tileWorldPos = propLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset5.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width / 2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height / 2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovable
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width,collisionItem.height);
                }
                else{
                    console.log("Unsupported collision item shape!");
                }
            });
        });

        //bookcases layer
        bookcaseLayer.forEachTile(function(tile){
            let tileWorldPos = bookcaseLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset2.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width / 2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height / 2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovable
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width,collisionItem.height);
                }
                else{
                    console.log("Unsupported collision item shape!");
                }
            });
        });

        //barel layer
        barrelLayer.forEachTile(function(tile){
            let tileWorldPos = barrelLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset1.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width / 2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height / 2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovable
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width,collisionItem.height);
                }
                else{
                    console.log("Unsupported collision item shape!");
                }
            });
        });

        //we will add enemies here so they show up "behind" overlap layer
        //find our spawn points
        let spawnPoints = new Array();
        floorLayer.forEachTile(function(tile){
            let tileWorldPos = floorLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset4.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width / 2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height / 2;

                    //if this is a spawn point collision item
                    //add to array of spawn points
                    if(collisionItem.properties && collisionItem.properties.length>0)
                    {
                        if(collisionItem.properties[0].name === "SpawnPoint")
                        {
                            let currentPoint = new Phaser.Geom.Point(objectX,objectY);
                            spawnPoints.push(currentPoint);
                        }
                    }
                }
                else{
                    console.log("Unsupported collision item shape!");
                }
            });
        });

        //MINIONS - 5 per level for now
        this.enemies = new Array();
        let spawnPointUsed = new Array();
        for(let i = 0; i < 5; i ++)
        {
            let spawnPointIndex = -1;

            //need to make sure same spawn point not used twice per level
            do{
                spawnPointIndex = Phaser.Math.RND.between(0,spawnPoints.length - 1);
            } while(spawnPointUsed.includes(spawnPointIndex));

            spawnPointUsed.push(spawnPointIndex);

            //now let us create a Minion at that Spawn point
            let newMinion = this.matter.add.sprite(
                spawnPoints[spawnPointIndex].x,
                spawnPoints[spawnPointIndex].y,
                'character_sprites','minion-front-0.png'
            );

            newMinion.setScale(2);
            newMinion.setBounce(0.2);
            newMinion.setFixedRotation();
            newMinion.setName("enemy-minion" + (i + 1));
            
            // TEMP - log spawn point chosen
            console.log(newMinion.name + " created at spawn point: " + spawnPointIndex);

            //add new enemy to array of enemies
            this.enemies.push(newMinion);
        }

        //add projectiles
        this.projectiles = new Array();



        //add the OverlapFoundations layers to the scene after the king and enemies
        //so they should behind this layer
        const OverlapFoundationLayer = map.createLayer("OverlapFoundations",[tileset6],0.0);

        //manually add collision zones for Overlapfoundations layer
        OverlapFoundationLayer.forEachTile(function(tile){
            let tileWorldPos = OverlapFoundationLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset6.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width / 2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height / 2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovable
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width,collisionItem.height);
                }
                else{
                    console.log("Unsupported collision item shape!");
                }
            });
        });
        //refactor this into an animation method that takes in the character
        //prefix as a premeter

        //create king animations
        this.createCharacterAnimations("king");

        //create minion animations
        this.createCharacterAnimations("minion");

        //create animations for projectiles
        this.createFireballAnimations();

        //create explosion animations
        this.anims.create({
            key: "explosion",
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: "explosion-",
                suffix: ".png",
                start: 0,
                end: 5
            }),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        });
        
        //handle matter collision types 
        this.matter.world.on("collisionstart", (event, bodyA, bodyB) => {

            //see if this is collision between king and enemy
            if(bodyA.gameObject.name === "king" && bodyB.gameObject.name.startsWith("enemy") ||
                bodyA.gameObject.name.startsWith("enemy") && bodyB.gameObject.name === "king")
            {
                //console.log("the king was captured!");
                this.kingCaptured();
            }
            else if(bodyA.gameObject.name === "projectile" && bodyB.gameObject.name.startsWith("enemy") ||
                bodyA.gameObject.name.startsWith("enemy") && bodyB.gameObject.name === "projectile")
            {
                console.log("the enemy was hit!");

                if(bodyA.name === "projectile") //first object is projectile
                {
                    this.enemyShot(bodyB.gameObject, bodyA.gameObject);
                }
                else
                {
                    this.enemyShot(bodyA.gameObject, bodyB.gameObject);
                }
            }
            //projectile hitting non-enemy
            else if(bodyA.gameObject.name === "projectile" && bodyB.gameObject.name !== "king" ||
                bodyA.gameObject.name !== "king" && bodyB.gameObject.name === "projectile")
            {
                if(bodyA.name === "projectile") //first object is projectile
                {
                    this.shotMissed(bodyA.gameObject);
                }
                else
                {
                    this.shotMissed(bodyB.gameObject);
                }
            }

            //see if this is collision between king and escapePoint
            else if(bodyA.gameObject.name === "king" && bodyB.gameObject.name === "escapePoint" ||
                bodyA.gameObject.name === "escapePoint" && bodyB.gameObject.name === "king")
            {
                //console.log("the king escaped through the escape point!");
                this.kingEscape();
            }
        });

        //handle matter pause event
        this.matter.world.on("pause",()=> {
            console.log("Game paused");
            BaseScene.gamePaused = true;
        })

    }//end of create function

    update(){
        if(!BaseScene.gamePaused)
        {
            //deal with fireball
            if(Phaser.Input.Keyboard.JustDown(this.spacebar))
            {
                this.shootFireball();
            }

            for(let i = 0; i < this.projectiles.length; i++)
            {
                let fireball = this.projectiles[i];

                if(fireball) //so not null
                {
                    fireball.update();
                }
            }

            //let's add in diagonal movement
            if(this.cursors.up.isDown && this.cursors.right.isDown)//north east
            {
                this.king.setVelocityY(-0.5 * (BaseScene.KING_SPEED));
                this.king.setVelocityX(BaseScene.KING_SPEED);
                this.king.play('king-walk-right', true);
                this.nextKingIdle = 'king-idle-right';
                this.king.direction = "northeast";
            }
            else if(this.cursors.down.isDown && this.cursors.right.isDown)//southeast
            {
                this.king.setVelocityY(0.5 * BaseScene.KING_SPEED);
                this.king.setVelocityX(BaseScene.KING_SPEED);
                this.king.play('king-walk-right', true);
                this.nextKingIdle = 'king-idle-right';
                this.king.direction = "southeast";
            }
            else if(this.cursors.up.isDown && this.cursors.left.isDown)//northwest
            {
                this.king.setVelocityY(-0.5 * BaseScene.KING_SPEED);
                this.king.setVelocityX(-(BaseScene.KING_SPEED));
                this.king.play('king-walk-left', true);
                this.nextKingIdle = 'king-idle-left';
                this.king.direction = "northwest";
            }
            else if(this.cursors.down.isDown && this.cursors.left.isDown)//southwest
            {
                this.king.setVelocityY(0.5 * BaseScene.KING_SPEED);
                this.king.setVelocityX(-(BaseScene.KING_SPEED));
                this.king.play('king-walk-left', true);
                this.nextKingIdle = 'king-idle-left';
                this.king.direction = "southwest";
            }

            //north
            else if(this.cursors.up.isDown)
            {
                this.king.setVelocityY(-(BaseScene.KING_SPEED));
                this.king.setVelocityX(0);
                this.king.play('king-walk-up', true);
                this.nextKingIdle = 'king-idle-back';
                this.king.direction = "north";
            }
            else if(this.cursors.down.isDown)//south
            {
                this.king.setVelocityY(BaseScene.KING_SPEED);
                this.king.setVelocityX(0);
                this.king.play('king-walk-down', true);
                this.nextKingIdle = 'king-idle-front';
                this.king.direction = "south";
            }
            else if(this.cursors.right.isDown)//east
            {
                this.king.setVelocityY(0);
                this.king.setVelocityX(BaseScene.KING_SPEED);
                this.king.play('king-walk-right', true);
                this.nextKingIdle = 'king-idle-right';
                this.king.direction = "east";
            }
            else if(this.cursors.left.isDown)//west
            {
                this.king.setVelocityY(0);
                this.king.setVelocityX(-(BaseScene.KING_SPEED));
                this.king.play('king-walk-left', true);
                this.nextKingIdle = 'king-idle-left';
                this.king.direction = "west";
            }
            else //king is standing still, so show next idle animation
            {
                this.king.setVelocityY(0);
                this.king.setVelocityX(0);
                this.king.play(this.nextKingIdle);
            }

            //start minions moving
            let currentScene = this;
            let king = this.king;

            //check if minions in camera and start moving
            this.enemies.forEach(function(enemy){
                if(enemy)//do nothing if null
                {
                    if(currentScene.cameras.main.worldView.contains(enemy.x,enemy.y))
                    {
                        //need to determine the orientation between the king and the minion
                        let kingOrientation = currentScene.getKingEnemyOrientation(king,enemy);

                        let enemyAnimation = "minion-idle-front";
                        let enemyXVelocity = 0;
                        let enemyYVelocity = 0;

                        //if the enemy is not currently moving
                        if(Math.abs(enemy.body.velocity.x) < 1 && Math.abs(enemy.body.velocity.y) < 1)
                        {
                            if(kingOrientation.aspect === "x" && kingOrientation.positive === false)
                            {
                                enemyXVelocity = -(BaseScene.MINION_SPEED);
                                enemyAnimation = "minion-walk-left";
                            }
                            else if(kingOrientation.aspect === "y" && kingOrientation.positive === true)
                            {
                                enemyYVelocity = BaseScene.MINION_SPEED;
                                enemyAnimation = "minion-walk-down";
                            }
                            else if(kingOrientation.aspect === "y" && kingOrientation.positive === false)
                            {
                                enemyYVelocity = -(BaseScene.MINION_SPEED);
                                enemyAnimation = "minion-walk-up";
                            }
                            else
                            {
                                enemyXVelocity = BaseScene.MINION_SPEED;
                                enemyAnimation = "minion-walk-right";
                            }
                        }
                        //else if enemy already moving
                        else
                        {
                            if(enemyXVelocity === 0 && kingOrientation.aspect === "x")
                            {
                                enemyYVelocity = 0;

                                //start moving toeards the king on "x"
                                if(kingOrientation.positive === true)
                                {
                                    enemyXVelocity = BaseScene.MINION_SPEED;
                                    enemyAnimation = "minion-walk-right";
                                }
                                else
                                {
                                    enemyXVelocity = -(BaseScene.MINION_SPEED);
                                    enemyAnimation = "minion-walk-left";
                                }
                            }
                            else if(enemyYVelocity === 0 && kingOrientation.aspect === "y")
                            {
                                enemyXVelocity = 0;

                                //start moving toeards the king on "y"
                                if(kingOrientation.positive === true)
                                {
                                    enemyYVelocity = BaseScene.MINION_SPEED;
                                    enemyAnimation = "minion-walk-down";
                                }
                                else
                                {
                                    enemyYVelocity = -(BaseScene.MINION_SPEED);
                                    enemyAnimation = "minion-walk-up";
                                }
                            }
                        }

                        enemy.setVelocityY(enemyYVelocity);
                        enemy.currentVelocityY = enemyYVelocity;
                        enemy.setVelocityX(enemyXVelocity);
                        enemy.currentVelocityX = enemyXVelocity;
                        enemy.play(enemyAnimation, true);
                    }
                }
            });


        }//this is end of my update
    }

    //this function will get orientation between king and enemy
    getKingEnemyOrientation(king,enemy)
    {
        let orientation = {
            aspect: "",
            positive: false
        };

        //we need to find in which direction is greatest
        //king and enemy position
        let xDifference = king.x - enemy.x;
        let yDifference = king.y - enemy.y;

        //we will default to x if both equal
        if(Math.abs(xDifference) >= Math.abs(yDifference))
        {
            orientation.aspect = "x";
            if(xDifference > 0)
            {
                orientation.positive = true;
            }

        }
        else
        {
            orientation.aspect = "y";
            if(yDifference > 0)
            {
                orientation.positive = true;
            }
        }
        return orientation;
    }

    //shoot fireball function
    shootFireball()
    {
        console.log("shot fireball..");
        let fireball = new Fireball(this);

    }

    //enemy shot function
    enemyShot(enemy, projectile)
    {
        let explosion = new Explosion(this, enemy.x, enemy.y);

        projectile.destroy(true);
        this.matter.world.remove(projectile);

        let fireBallIndex = this.projectiles.indexOf(projectile);
        this.projectiles[fireBallIndex] = null;

        enemy.destroy(true);
        this.matter.world.remove(enemy);

        let enemyIndex = this.enemies.indexOf(enemy);
        this.enemies[enemyIndex] = null;

        //Later- Might like to generate a new enemy
        //need to increase the score
        //need an explosion sound
    }

    //shot missed function
    shotMissed(projectile)
    {
        let explosion = new Explosion(this, projectile.x , projectile.y);

        projectile.destroy(true);
        this.matter.world.remove(projectile);

        let fireBallIndex = this.projectiles.indexOf(projectile);
        this.projectiles[fireBallIndex] = null;
    }


    //this function will call when the king escape the current level
    kingEscape(nextLevel)
    {
        //load next scene if passed in , if null end the game
        if(nextLevel === null)
        {
            console.log("Game Over");
            //pause method phsics engine
            this.matter.world.pause();

            //set the king's tint to red and stop the king animation
            this.king.setTint(0xff0000);
            this.king.play(this.nextKingIdle, true);
        }
        else
        {
            console.log("king escaped to: " + nextLevel);
            //pause method phsics engine
            // this.matter.world.pause();
            this.scene.start(nextLevel);
        }
    }

    kingCaptured()
    {
        console.log("the king was captured!");

        //pause the matter physics engine
        this.matter.world.pause();

        //set the king to a red tint
        this.king.setTint(0xff0000);
        this.king.play(this.nextKingIdle, true);

        //set all enemies to green tint and stop their animations
        this.enemies.forEach(function(enemy){
            enemy.setTint(0x00ff00);
            enemy.play("minion-idle-front", true);
        });
    }

    //ANIMATION METHODS
    createCharacterAnimations(characterPrefix)
    {
        //add the character animations when the character is moving
        this.anims.create({
            key: characterPrefix + "-walk-up",
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: characterPrefix + '-back-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: characterPrefix + "-walk-down",
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: characterPrefix + '-front-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: characterPrefix + "-walk-left",
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: characterPrefix + '-left-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: characterPrefix + "-walk-right",
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: characterPrefix + '-right-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate:10,
            repeat: -1
        });

        //character standing still animations
        this.anims.create({
            key: characterPrefix + '-idle-front',
            frames: [{
                key:'character_sprites',
                frame: characterPrefix + '-front-0.png'
            }]
        });
        this.anims.create({
            key: characterPrefix + '-idle-back',
            frames: [{
                key:'character_sprites',
                frame: characterPrefix + '-back-0.png'
            }]
        });
        this.anims.create({
            key: characterPrefix + '-idle-left',
            frames: [{
                key:'character_sprites',
                frame: characterPrefix + '-left-0.png'
            }]
        });
        this.anims.create({
            key: characterPrefix + '-idle-right',
            frames: [{
                key:'character_sprites',
                frame: characterPrefix + '-right-0.png'
            }]
        });

    }

    //function to create fireball animations
    createFireballAnimations()
    {
        this.anims.create({
            key: 'fireball-north',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-north-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-northeast',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-northeast-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-east',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-east-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-southeast',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-southeast-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-south',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-south-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-southwest',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-southwest-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-west',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-west-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
        this.anims.create({
            key: 'fireball-northwest',
            frames: this.anims.generateFrameNames('projectile_sprites',{
                prefix: 'fireball-northwest-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate:10,
            repeat: -1
        });
    }
}