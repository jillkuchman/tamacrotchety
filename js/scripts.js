$(document).ready(function() {

    $('form#tamacrotchety-name').submit(function(event) {
        event.preventDefault();

        var name = $('input#name').val();
        var meds = 5;
        var grumbling = 5;
        var metamucil = 5;
        var nap = 5;
        var alive = true;

        var tamacrotchety = {

            meds: meds,
            grumbling: grumbling,
            metamucil: metamucil,
            nap: nap,
            alive: alive,

            time = function() {
                this.meds --;
                this.grumbling ++;
                this.metamucil --;
                this.nap --;
                this.isAlive();
            },

            giveMeds = function() {
                this.meds ++;
                this.grumbling ++;
                this.metamucil --;
                this.nap --;
            },

            listen = function() {
                this.meds --;
                this.grumbling --;
                this.metamucil --;
                this.nap --;
            },

            giveFiber = function() {
                this.meds --;
                this.grumbling ++;
                this.metamucil ++;
                this.nap --;
            },

            giveNap = function() {
                this.meds --;
                this.grumbling --;
                this.metamucil --;
                this.nap ++;
            },

            isAlive = function() {
            if(this.meds === 0 || this.meds > 10 || this.grumbling > 10 || this.metamucil === 0 || this.metamucil > 10 || this.nap === 0 || this.nap > 10) {
                this.alive = false;
            }
        }

    });
    //controls
    $('form#tamacrotchety-properties')


});
