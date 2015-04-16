$(document).ready(function() {

    var meds = 5;
    var grumbling = 5;
    var metamucil = 5;
    var nap = 5;
    var alive = true;   
    var tamacrotchety;

    var causes_of_death = [];

    function statusBar() {
        $('#statusMeds').attr("style", "width: " + tamacrotchety.meds*10 + "%" );
        $('#statusListen').attr("style", "width: " + tamacrotchety.grumbling*10 + "%" );
        $('#statusFiber').attr("style", "width: " + tamacrotchety.metamucil*10 + "%" );
        $('#statusNap').attr("style", "width: " + tamacrotchety.nap*10 + "%" );
    }

    function deathTest() {
        if(!tamacrotchety.alive){
            $("#dead").show();
            $("#tamacrotchety-created").hide();
            $("#death-message").text( tamacrotchety.tamaName + " has died.");
                    console.log(causes_of_death);

        }
    }
    
    $('form#tamacrotchety-name').submit(function(event) {
        event.preventDefault();

        var tamaName = $('input#name').val();
        tamacrotchety = {
            tamaName: tamaName,
            meds: meds,
            grumbling: grumbling,
            metamucil: metamucil,
            nap: nap,
            alive: alive,

            time: function() {
                this.meds --;
                this.grumbling ++;
                this.metamucil --;
                this.nap --;
                this.isAlive();
            },

            giveMeds: function() {
                this.meds ++;
                this.grumbling ++;
                this.metamucil --;
                this.nap --;
                this.isAlive();
            },

            listen: function() {
                this.meds --;
                this.grumbling --;
                this.metamucil --;
                this.nap --;
                this.isAlive();
            },

            giveFiber: function() {
                this.meds --;
                this.grumbling ++;
                this.metamucil ++;
                this.nap --;
                this.isAlive();
            },

            giveNap: function() {
                this.meds --;
                this.grumbling --;
                this.metamucil --;
                this.nap ++;
                this.isAlive();
            },

            isAlive: function() {
                if (this.meds === 0 || this.meds > 10) {
                    causes_of_death.push('crazy');
                    this.alive = false;
                }
                if (this.grumbling > 10) {
                    causes_of_death.push('crotchety');  
                    this.alive = false;
                }
                if (this.metamucil === 0) {
                    causes_of_death.push('implosion');
                    this.alive = false;
                }
                if (this.metamucil > 10) {
                    causes_of_death.push('explosion');
                    this.alive = false;
                }
                if (this.nap === 0) {
                    causes_of_death.push('nap attack');
                    this.alive = false;
                }
                if (this.nap > 10) {
                    causes_of_death.push('never woke up');
                    this.alive = false;
                }
            }

        };

        statusBar();

        $("#tamaName").text(tamacrotchety.tamaName);
        $("#tamacrotchety-form").hide();
        $("#tamacrotchety-created").show();

        $('#give-meds').click(function(){
            tamacrotchety.giveMeds();
            statusBar();
            deathTest();
        });

        $('#listen-to-grumbling').click(function(){
            tamacrotchety.listen();
            statusBar();
            deathTest();
        });

        $('#give-fiber').click(function(){
            tamacrotchety.giveFiber();
            statusBar();
            deathTest();
        });

        $('#give-nap').click(function() {
            tamacrotchety.giveNap();
            statusBar();
            deathTest();
        });

    });



});
