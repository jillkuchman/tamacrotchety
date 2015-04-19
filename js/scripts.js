$(document).ready(function() {

    var meds = 5;
    var grumbling = 5;
    var metamucil = 5;
    var nap = 5;
    var alive = true;
    var tamacrotchety;

    var causes_of_death = [];

    function setWidth($elem, val) {
        $elem.attr('style', 'width: ' + val * 10 + '%');
    }

    function setColor($elem, val) {
        var color;

        var colorGreen = 'progress-bar-success';
        var colorYellow = 'progress-bar-warning';
        var colorRed = 'progress-bar-danger'

        if (val >= 7){
            color = colorGreen;
        }
        else if (val >= 3){
            color = colorYellow;
        }
        else {
            color = colorRed;
        }

        $elem.removeClass(colorGreen + ' ' + colorYellow + ' ' + colorRed);
        $elem.addClass(color);
    }

    function updateStatus($elem, val) {
        setWidth($elem, val);
        setColor($elem, val);
    }

    function deathTest() {
        if(!tamacrotchety.alive){
            $('#dead').show();
            $('#tamacrotchety-created').hide();
            var causes = causes_of_death.join(', ');
            $('#death-message').text( tamacrotchety.tamaName + ' has died of ' + causes);
        }
    }

    function tamaClick() {
        updateStatus($('#statusMeds'), tamacrotchety.meds);
        updateStatus($('#statusListen'), tamacrotchety.grumbling);
        updateStatus($('#statusFiber'), tamacrotchety.metamucil);
        updateStatus($('#statusNap'), tamacrotchety.nap);

        deathTest();
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

        updateStatus($('#statusMeds'), tamacrotchety.meds);
        updateStatus($('#statusListen'), tamacrotchety.grumbling);
        updateStatus($('#statusFiber'), tamacrotchety.metamucil);
        updateStatus($('#statusNap'), tamacrotchety.nap);

        $('#tamaName').text(tamacrotchety.tamaName);
        $('#tamacrotchety-form').hide();
        $('#tamacrotchety-created').show();

        $('#give-meds').click(function(){
            tamacrotchety.giveMeds();
            tamaClick();
        });

        $('#listen-to-grumbling').click(function(){
            tamacrotchety.listen();
            tamaClick();
        });

        $('#give-fiber').click(function(){
            tamacrotchety.giveFiber();
            tamaClick();
        });

        $('#give-nap').click(function() {
            tamacrotchety.giveNap();
            tamaClick();
        });
    });
});
