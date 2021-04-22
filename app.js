// The countdown is an instantiable object
let compteARebours = function (hours, minutes, seconds){
    this.hoursTime = hours;
    this.minutesTime = minutes;
    this.secondsTime = seconds;

    this.chrono = function () {

        let hours = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");

        // Allow the user to specify a personalized time
        let addHours = this.hoursTime;
        hours.innerHTML = addHours;
        if (addHours < 9) {
            hours.innerHTML = "0" + addHours;
        }

        // increment by 1 each time I click on the "addHours" button!
        document.getElementById("addHours").addEventListener("click", function () {
            setTimeout(function () {
                if (addHours < 9) {
                    hours.innerHTML = "0" + (addHours += 1);
                }
                else if (10 >= addHours <= 100) {
                    hours.innerHTML = (addHours += 1);
                }

                if (addHours === 100) {
                    addHours = 0;
                    hours.innerHTML = "00";
                }
            }, 500);
        });

        let addMinutes = this.minutesTime;
        minutes.innerHTML = addMinutes;
        if (addMinutes < 9) {
            minutes.innerHTML = "0" + addMinutes;
        }

        // increment by 1 each time I click on the "addMinutes" button!
        document.getElementById("addMinutes").addEventListener("click", function () {
            setTimeout(function () {
                if (addMinutes < 9) {
                    minutes.innerHTML = "0" + (addMinutes += 1);
                }
                else if (10 >= addMinutes <= 60) {
                    minutes.innerHTML = (addMinutes += 1);
                }

                if (addMinutes === 60) {
                    addMinutes = 0;
                    minutes.innerHTML = "00";
                }
            }, 500);
        });

        let addSeconde = this.secondsTime;
        seconds.innerHTML = addSeconde;
        if (addSeconde < 9) {
            seconds.innerHTML = "0" + addSeconde;
        }

        // increment by 1 each time I click on the "addSeconds" button!
        document.getElementById("addSeconds").addEventListener("click", function () {
            setTimeout(function () {
                if (addSeconde < 9) {
                    seconds.innerHTML = "0" + (addSeconde += 1);
                }
                else if (10 >= addSeconde <= 60) {
                    seconds.innerHTML = (addSeconde += 1);
                }

                if (addSeconde === 60) {
                    addSeconde = 0;
                    seconds.innerHTML = "00";
                }
            }, 500);
        });

        // Decrement by 1 each time I click on the "lessHours" button!
        document.getElementById("lessHours").addEventListener("click", function () {
            setTimeout(function () {
                if (addHours < 11) {
                    hours.innerHTML = "0" + (addHours -= 1);
                } else if (10 >= addHours <= 100) {
                    hours.innerHTML = (addHours -= 1);
                }

                if (addHours === -1) {
                    addHours = 99;
                    hours.innerHTML = "99";
                }
            }, 500);
        });

        // Decrement by 1 each time I click on the "lessMinutes" button!
        document.getElementById("lessMinutes").addEventListener("click", function () {
            setTimeout(function () {
                if (addMinutes < 11) {
                    minutes.innerHTML = "0" + (addMinutes -= 1);
                }
                else if (10 >= addMinutes <= 60) {
                    minutes.innerHTML = (addMinutes -= 1);
                }

                if (addMinutes === -1) {
                    addMinutes = 59;
                    minutes.innerHTML = "59";
                }
            }, 500);
        });

        // Decrement by 1 each time I click on the "lessSeconds" button!
        document.getElementById("lessSeconds").addEventListener("click", function () {
            setTimeout(function () {
                if (addSeconde < 11) {
                    seconds.innerHTML = "0" + (addSeconde -= 1);
                } else if (10 >= addSeconde <= 60) {
                    seconds.innerHTML = (addSeconde -= 1);
                }

                if (addSeconde === -1) {
                    addSeconde = 59;
                    seconds.innerHTML = "59";
                }
            }, 500);
        });


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
        document.getElementById("play").addEventListener("click", function () {
            document.getElementById("reset").style.display = "block";
            document.getElementById("stop").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("play").style.display = "none";
            countUp();
        });

        // Button that refreshes the page to reset the countdown
        document.getElementById("reset").onclick = function () {
            location.reload();
        };

        // Button that pauses the countdown and displays the continue button
        document.getElementById("stop").addEventListener("click", function () {
            document.getElementById("continue").style.display = "block";
            document.getElementById("stop").style.display = "none";
            clearTimeout(timeoutID);
        })

        // Button that allows you to continue the countdown after a pause and displays the pause button
        document.getElementById("continue").addEventListener("click", function () {
            document.getElementById("continue").style.display = "none";
            document.getElementById("stop").style.display = "block";
            countUp();
        });
    }
}

let compteARebours1 = new compteARebours(0,1,0);
compteARebours1.chrono();