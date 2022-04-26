
class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.view.bindSetAlarmTime(this.handleSetAlarmTime);
    this.view.bindToggleOnOff(this.handleToggleOnOff);

    this.view.setAlarmStateOn(false);

    // Update time every second
    setInterval(this.renderTime, 1000);
  }

  handleSetAlarmTime = (time) => {
    console.log("Clicked on set alarm time: " + time)
    this.view.setAlarmStateOn(true);
  }

  handleToggleOnOff = (isOn) => {
    this.view.setAlarmStateOn(isOn);
  }

  // Function to convert time to string value
  getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
      minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
  };

  // Function to display current time on screen
  renderTime = () => {
    //var currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone });
    //currentTime.innerHTML = timeString;

    this.view.setCurrentTime(timeString);

    // checkAlarm(timeString);
  };


}

const app = new Controller(new Model(), new View())