// The countdown is an instantiable object
let compteARebours = function (hours, minutes, seconds){
    this.hoursTime = hours;
    this.minutesTime = minutes;
    this.secondsTime = seconds;

    this.chrono = function () {

        let hours = document.getElementById("heures");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("secondes");

        // Allow the user to specify a personalized time
        // increment by 1 each time I click on the "hautHeures" button!
        let addHours = this.hoursTime;
        hours.innerHTML = addHours;
        if (addHours < 9) {
            hours.innerHTML = "0" + addHours;
        }

        add("hautHeures", addHours, 10, 100, hours);

        let addMinutes = this.minutesTime;
        minutes.innerHTML = addMinutes;
        if (addMinutes < 9) {
            minutes.innerHTML = "0" + addMinutes;
        }

        // increment by 1 each time I click on the "hautMinutes" button!
        add("hautMinutes", addMinutes, 10, 60, minutes);

        let addSeconde = this.secondsTime;
        seconds.innerHTML = addSeconde;
        if (addSeconde < 9) {
            seconds.innerHTML = "0" + addSeconde;
        }

        // increment by 1 each time I click on the "hautSecondes" button!
        add("hautSecondes", addSeconde, 10, 60, seconds);

        // Decrement by 1 each time I click on the "basHeures" button!
        less("basHeures", addHours, 10, 100, hours, 99, "99");

        // Decrement by 1 each time I click on the "basMinutes" button!
        less("basMinutes", addMinutes, 10, 60, minutes, 59, "59");

        // Decrement by 1 each time I click on the "basSecondes" button!
        less("basSecondes", addSeconde, 10, 60, seconds, 59, "59");

        let timeoutID;

        // Countdown
        let countUp = function () {
            timeoutID = setInterval(function () {
                if (addSeconde < 11) {
                    seconds.innerHTML = "0" + (addSeconde -= 1);
                }
                else if (10 >= addSeconde <= 60) {
                    seconds.innerHTML = (addSeconde -= 1);
                }

                if (addMinutes === 0 && addHours === 0 && addSeconde === -1) {
                    addSeconde = 0;
                    seconds.innerHTML = "00";
                }

                if (addSeconde === -1) {
                    addSeconde = 59;
                    seconds.innerHTML = "59";
                    if (addMinutes < 11) {
                        minutes.innerHTML = "0" + (addMinutes -= 1);
                    }
                    else if (10 >= addMinutes <= 60) {
                        minutes.innerHTML = (addMinutes -= 1);
                    }

                    if (addMinutes === -1) {
                        addMinutes = 59;
                        minutes.innerHTML = "59";
                        if (addHours < 11) {
                            hours.innerHTML = "0" + (addHours -= 1);
                        } else if (10 >= addHours <= 100) {
                            hours.innerHTML = (addHours -= 1);
                        }

                        if (addHours === -1) {
                            addHours = 99;
                            hours.innerHTML = "99";
                        }
                    }
                }
            }, 1000);
        };

        // Button used to start the countdown and to display 2 buttons
        document.getElementById("demarrer").addEventListener("click", function () {
            document.getElementById("reset").style.display = "block";
            document.getElementById("pause").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("demarrer").style.display = "none";
            countUp();
        });

        // Button that refreshes the page to reset the countdown
        document.getElementById("reset").onclick = function () {
            location.reload();
        };

        // Button that pauses the countdown and displays the continue button
        document.getElementById("pause").addEventListener("click", function () {
            document.getElementById("continue").style.display = "block";
            document.getElementById("pause").style.display = "none";
            clearTimeout(timeoutID);
        })

        // Button that allows you to continue the countdown after a pause and displays the pause button
        document.getElementById("continue").addEventListener("click", function () {
            document.getElementById("continue").style.display = "none";
            document.getElementById("pause").style.display = "block";
            countUp();
        });
    }
}

let compteARebours1 = new compteARebours(0,1,0);
compteARebours1.chrono();

// Increment the time by 1 by clicking on a button
function add (idClick, addTime, numberLimit1, numberLimit2, time ) {
    document.getElementById(idClick).addEventListener("click", function () {
        setTimeout(function () {
            if (addTime < 9) {
                time.innerHTML = "0" + (addTime += 1);
            }
            else if (numberLimit1 >= addTime <= numberLimit2) {
                time.innerHTML = (addTime += 1);
            }

            if (addTime === numberLimit2) {
                addTime = 0;
                time.innerHTML = "00";
            }
        }, 500);
    });
}

// Decrement the time by 1 by clicking on a button
function less (idClick, lessTime, numberLimit1, numberLimit2, time, limit, limit2 ) {
    document.getElementById(idClick).addEventListener("click", function () {
        setTimeout(function () {
            if (lessTime < 11) {
                time.innerHTML = "0" + (lessTime -= 1);
            }
            else if (numberLimit1 >= lessTime <= numberLimit2) {
                time.innerHTML = (lessTime -= 1);
            }

            if (lessTime === -1) {
                lessTime = limit;
                time.innerHTML = limit2;
            }
        }, 500);
    });
}