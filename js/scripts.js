$(document).ready(function() {

    $('form#tamacrotchety-name').submit(function(event) {
        event.preventDefault();

        var tamaName = $('input#name').val();
        var meds = 5;
        var grumbling = 5;
        var metamucil = 5;
        var nap = 5;
        var alive = true;
        var tamacrotchety = {

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
                if(this.meds === 0 || this.meds > 10 || this.grumbling > 10 || this.metamucil === 0 || this.metamucil > 10 || this.nap === 0 || this.nap > 10) {
                    this.alive = false;

                }
            },

        };

        $('#statusMeds').attr("style", "width: " + tamacrotchety.meds*10 + "%" );
        $('#statusListen').attr("style", "width: " + tamacrotchety.grumbling*10 + "%" );
        $('#statusFiber').attr("style", "width: " + tamacrotchety.metamucil*10 + "%" );
        $('#statusNap').attr("style", "width: " + tamacrotchety.nap*10 + "%" );


        $("#tamaName").text(tamacrotchety.tamaName);
        $("#tamacrotchety-form").hide();
        $("#tamacrotchety-created").show();

        $('#give-meds').click(function(){
            tamacrotchety.giveMeds();
            $('#statusMeds').attr("style", "width: " + tamacrotchety.meds*10 + "%" );
            $('#statusListen').attr("style", "width: " + tamacrotchety.grumbling*10 + "%" );
            $('#statusFiber').attr("style", "width: " + tamacrotchety.metamucil*10 + "%" );
            $('#statusNap').attr("style", "width: " + tamacrotchety.nap*10 + "%" );
            
        });

        $('#listen-to-grumbling').click(function(){
            tamacrotchety.listen();
            $('#statusMeds').attr("style", "width: " + tamacrotchety.meds*10 + "%" );
            $('#statusListen').attr("style", "width: " + tamacrotchety.grumbling*10 + "%" );
            $('#statusFiber').attr("style", "width: " + tamacrotchety.metamucil*10 + "%" );
            $('#statusNap').attr("style", "width: " + tamacrotchety.nap*10 + "%" );

        });
        $('#give-fiber').click(function(){
            tamacrotchety.giveFiber();
            $('#statusMeds').attr("style", "width: " + tamacrotchety.meds*10 + "%" );
            $('#statusListen').attr("style", "width: " + tamacrotchety.grumbling*10 + "%" );
            $('#statusFiber').attr("style", "width: " + tamacrotchety.metamucil*10 + "%" );
            $('#statusNap').attr("style", "width: " + tamacrotchety.nap*10 + "%" );
        });

        $('#give-nap').click(function() {
            tamacrotchety.giveNap();
            $('#statusMeds').attr("style", "width: " + tamacrotchety.meds*10 + "%" );
            $('#statusListen').attr("style", "width: " + tamacrotchety.grumbling*10 + "%" );
            $('#statusFiber').attr("style", "width: " + tamacrotchety.metamucil*10 + "%" );
            $('#statusNap').attr("style", "width: " + tamacrotchety.nap*10 + "%" );
        });


    });



});
