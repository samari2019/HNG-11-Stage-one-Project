// Function to display the Slack name
function displaySlackName(slackName) {
    // Select container element by its id
    var container = document.getElementById('slack-name-container');

    //  innerText of the container to the Slack name
    container.innerText = slackName;

    //  add  data-test-id attribute directly to the container 
    container.setAttribute('data-testid', 'slackDisplayName');
}

//  Slack name
var slackName = 'SoniaSamari';

// Display Slack name using function
displaySlackName(slackName);


// Function to get and display the current UTC time
function displayCurrentUTCTime() {
    // Select container element by its id
    var container = document.getElementById('time-container');

    // Get current date and time in UTC
    var now = new Date();
    var utcTime = now.toUTCString();

    // Set innerText of the container to the UTC time
    container.innerText = utcTime;

    // add a data-test-id attribute directly to the container if needed
    container.setAttribute('data-testid', 'currentTimeUTC');
}

// Call the function initially to display the time
displayCurrentUTCTime();

// Update the time every second
setInterval(displayCurrentUTCTime, 1000);



// Function to get and display the current day of the week
function displayCurrentDayOfWeek() {
    // Select container element by its id
    var container = document.getElementById('day-container');

    // Get current day of the week
    var now = new Date();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDay = daysOfWeek[now.getUTCDay()];

    // Set innerText of the container to the current day of the week
    container.innerText = currentDay;
}

// Call the function initially to display the current day
displayCurrentDayOfWeek();


// Function to display the Slack email
function displaySlackEmail(slackEmail) {
    // Select the container element by its id
    var container = document.getElementById('email-container');

    // Set the innerText of the container to the Slack email
    container.innerText = slackEmail;
}

// Example Slack email
var slackEmail = 'samarisonia@gmail.com';

// Display the Slack email using the function
displaySlackEmail(slackEmail);


// Function to display the Slack profile picture with natural dimensions
function displaySlackProfilePic() {
    // Select the img element by its id
    var imgElement = document.getElementById('profile-pic');

    // Wait until the image is fully loaded
    imgElement.onload = function () {
        // Set the width and height to the natural dimensions of the image
        imgElement.style.width = imgElement.naturalWidth + 'px';
        imgElement.style.height = imgElement.naturalHeight + 'px';
    };
}

// Call the function to display the Slack profile picture
displaySlackProfilePic();
