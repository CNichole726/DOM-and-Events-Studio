// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    takeOff = document.getElementById('takeoff');
    paragraph = document.getElementById('flightStatus');
    background = document.getElementById('shuttleBackground');
    height = document.getElementById('spaceShuttleHeight');
    landing = document.getElementById('landing');

    takeOff.addEventListener('click', function(event) {
        let answer = window.confirm('Confirm that the shuttle is ready for takeoff');
        if(answer === true) {
            paragraph.innerHTML = 'Shuttle in flight.';
		    background.style.backgroundColor = 'blue';
            height.innerHTML += 10000;
        }
    });

    landing.addEventListener('click', function(event) {
        let response = window.confirm('The shuttle is landing. Landing gear engaged.');
        if(response === true) {
            paragraph.innerHTML = 'The shuttle has landed.';
            background.style.backgroundColor = 'green';
            height.innerHTML = 0;
        }
    });

}

window.addEventListener('load', init);

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    });

