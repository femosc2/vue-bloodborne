new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 500,
        playerVials: 20,
        playerBullets: 20,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 500;
        },
        attack: function() {
            gitGudRating = Math.floor(Math.random() * 101)
            console.log(gitGudRating)
            if (gitGudRating > 20){
                this.monsterHealth = this.monsterHealth - 30;
            } else {
                this.monsterHealth = this.monsterHealth - 50;
            }    
        },
        visceral: function() {
            if(this.playerBullets === 0) { 
                alert("You are out of bullets!");
                this.playerHealth = this.playerHealth - 30;
                //
            } else {
                this.playerBullets--;
                gitGudRating = Math.floor(Math.random() * 2)
                if (gitGudRating === 1){
                    this.monsterHealth = this.monsterHealth - 33;
                } else {
                    this.playerHealth = this.playerHealth - 50;
                }    
            }
        },
        bloodVial: function() {
            if(this.playerVials === 0) {
                alert("You are out of vials!");
                this.playerHealth = this.playerHealth - 30;
                //
            } else {
                this.playerVials--;
                this.playerHealth = this.playerHealth + 40;
            }
        },
        boldHuntersMark() {

        },

    }
});