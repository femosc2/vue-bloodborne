new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        preyHealth: 500,
        playerVials: 20,
        playerBullets: 20,
        gameIsRunning: false,
        preySlaughtered: 0,
        echoes: 50000,
        huntersGarb: false,
        cainhurstSet: false,
        combatLog: [],
        bloodStoneShard: false,
        bloodStoneChunk: false,
        bloodRock: false,
        splashImage: true,
        name: null
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.combatLog = [];
            console.log(this.name);
            if (this.huntersGarb === true) {
                this.playerHealth = 120;
        }   else if (this.cainhurstSet === true) {
                this.playerHealth = 150;
        }   else {
                this.playerHealth = 100;
        }
            if (this.preySlaughtered >= 10){
                this.preyHealth = 750;
            } else {
                this.preyHealth = 500;
            }
        },
        attack() {
            gitGudRating = Math.floor(Math.random() * 101);
            if (gitGudRating > 40){
                if (this.bloodStoneShard === true){
                    playerAttack = Math.floor(Math.random() * (62*1.2));
                    this.preyHealth = this.preyHealth - playerAttack;
                    this.combatLog.unshift("The hunter attacked the prey for" + " " + playerAttack + " " + "damage!");
                }else if (this.bloodStoneChunk === true) {
                    playerAttack = Math.floor(Math.random() * (62*1.4) );
                    this.preyHealth = this.preyHealth - playerAttack;
                    this.combatLog.unshift("The hunter attacked the prey for" + " " + playerAttack + " " + "damage!");
                } else if (this.bloodRock === true) {
                    playerAttack = Math.floor(Math.random() * (62*1.7));
                    this.preyHealth = this.preyHealth - playerAttack;
                    this.combatLog.unshift("The hunter attacked the prey for" + " " + playerAttack + " " + "damage!");
                } else {
                    playerAttack = Math.floor(Math.random() * 61);
                    this.preyHealth = this.preyHealth - playerAttack;
                    this.combatLog.unshift("The hunter attacked the prey for" + " " + playerAttack + " " + "damage!");
                }
            } else {
                beastAttack = Math.floor(Math.random() * 61);
                this.playerHealth = this.playerHealth - beastAttack;
                this.combatLog.unshift("The beast attacked the hunter for" + " " + beastAttack + " " + "damage!");
                }

            if (this.preyHealth <= 0) {
                    alert("PREY SLAUGHTERED");
                    this.preyHealth = 0;                    
                    this.gameIsRunning = false;
                    this.echoes = this.echoes + 5000;
                    this.preySlaughtered++;
            }       
        },
        visceral() {
            if(this.playerBullets === 0) { 
                alert("You are out of bullets!");
                this.playerHealth = this.playerHealth - 30;
                //
            } else {
                this.playerBullets--;
                gitGudRating = Math.floor(Math.random() * 5)
                if (gitGudRating === 1){
                    this.preyHealth = this.preyHealth - 200;
                } else {
                    this.playerHealth = this.playerHealth - 50;
                }    
                if (this.preyHealth <= 0) {
                    alert("PREY SLAUGHTERED");
                    this.preyHealth = 0;                    
                    this.gameIsRunning = false;
                    this.echoes = this.echoes + 5000;
                    this.preySlaughtered++;
                }    
            }
        },
        bloodVial() {
            if(this.playerVials === 0) {
                alert("You are out of vials!");
                this.playerHealth = this.playerHealth - 30;
                //
            } else {
                this.playerVials--;
                this.playerHealth = this.playerHealth + 40;
                if (this.playerHealth > 100 && this.huntersGarb === false && this.cainhurstSet === false) {
                    this.playerHealth = 100
            }   else if (this.playerHealth > 120 && this.huntersGarb === true) {
                    this.playerHealth = 120;
            }   else if (this.playerHealth > 150 && this.cainhurstSet === true) {
                    this.playerHealth = 150;
                }
            }
        },
        huntersMark() {
            this.gameIsRunning = false;
            this.echoes = 0;
        },
        buyVial() {
            if (this.echoes >= 500 && this.playerVials < 20){
                this.playerVials++
                this.echoes = this.echoes - 500;
            } else {
                alert("You do not have enough blood echoes or you already have 20 vials!")
            }  
        },
        buyBullet() {
            if (this.echoes >= 250 && this.playerBullets < 20){
                this.playerBullets++
                this.echoes = this.echoes - 250;
            } else {
                alert("You do not have enough blood echoes or you already have 20 bullets!")
            }  
        }, 
        buyHuntersGarb() {
            if (this.cainhurstSet === true && this.huntersGarb === false){
                alert("You already have the Cainhurst or the Hunters Garb")
            } else if (this.echoes < 20000){
                alert("You do not have enough echoes!")
            }
             else {
                this.huntersGarb = true;
                this.playerHealth = 120;
                this.echoes = this.echoes - 5000;
            }
        },
        buyCainhurstSet() {
            if (this.cainhurstSet === true && this.huntersGarb === false){
                alert("You already have the Cainhurst set!")
            } else if (this.echoes < 50000) {
                alert("You do not have enough echoes!")
            } else {
            this.huntersGarb = false;
            this.cainhurstSet= true;
            this.playerHealth = 150;
            this.echoes = this.echoes - 11000;
        }
    },
    buyBloodStoneShard() {
        if (this.bloodStoneShard === true || this.bloodStoneChunk === true || this.bloodRock === true){
            alert("You already have a better weapon!")
        } else if (this.echoes < 3000) {
            alert("You do not have enough echoes!")
        } else {
        this.bloodStoneChunk = false;
        this.bloodStoneRock= false;
        this.bloodStoneShard = true;
        this.echoes = this.echoes - 3000;
    }
    },
    buyBloodStoneChunk() {
        if (this.bloodStoneChunk === true || this.bloodRock === true){
            alert("You already have a better weapon!")
        } else if (this.echoes < 5000) {
            alert("You do not have enough echoes!")
        } else {
        this.bloodStoneChunk = true;
        this.bloodStoneRock= false;
        this.bloodStoneShard = false;
        this.echoes = this.echoes - 5000;
    }
    },
    buyBloodRock() {
        if (this.bloodRock === true){
            alert("You already have a better weapon!")
        } else if (this.echoes < 8000) {
            alert("You do not have enough echoes!")
        } else {
        this.bloodStoneChunk = false;
        this.bloodRock= true;
        this.bloodStoneShard = false;
        this.echoes = this.echoes - 8000;
    }
    },

}

});