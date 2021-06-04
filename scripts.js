// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const shuttle = document.getElementById("rocket");
    shuttle.style.position = "absolute";
    shuttle.style.left ="0px";
    shuttle.style.bottom = "0px"; 
   
    takeOff = document.getElementById('takeoff');
    paragraph = document.getElementById('flightStatus');
    background = document.getElementById('shuttleBackground');
    height = document.getElementById('spaceShuttleHeight');
    landing = document.getElementById('landing');
    abortMission = document.getElementById('missionAbort');
    upButton = document.getElementById("up");
    rightButton = document.getElementById("right");

    takeOff.addEventListener('click', function(event) {
        let answer = window.confirm('Confirm that the shuttle is ready for takeoff');
        if(answer === true) {
            paragraph.innerHTML = 'Shuttle in flight.';
		    background.style.backgroundColor = 'blue';
            height.innerHTML = Number(height.innerHTML) + 10000;
        }
    });

    landing.addEventListener('click', function(event) {
        window.alert('The shuttle is landing. Landing gear engaged.');
            paragraph.innerHTML = 'The shuttle has landed.';
            background.style.backgroundColor = 'green';
            height.innerHTML = 0;
    });

    abortMission.addEventListener('click', function (event) {
        let answer = window.confirm('Confirm that you want to abort the mission.');
        if(answer === true) {
            paragraph.innerHTML = 'Mission aborted.';
            background.style.backgroundColor = 'green';
            height.innerHTML = 0;
        }
    });

    upButton.addEventListener('click', function(event) {
        shuttle.style.bottom = parseInt(shuttle.style.bottom) + 10 + 'px';
        height.innerHTML = Number(height.innerHTML) + 10000;
    });

    rightButton.addEventListener('click', function(event) {
        shuttle.style.left = parseInt(height.style.left) + 10 + 'px';
    });

}

window.addEventListener('load', init);

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    });

