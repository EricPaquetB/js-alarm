
class View {
  constructor() {

    // The root element
    this.app = this.getElement('#root')

    // The title of the app
    this.title = this.createElement('h1')
    this.title.textContent = 'JS Alarm'

    this.inputAlarmTime = this.createElement('input')
    this.inputAlarmTime.setAttribute('type', 'time')
    this.inputAlarmTime.textContent = 'Alarm Time'

    this.inputToggleOnOff = this.createElement('input')
    this.inputToggleOnOff.setAttribute('type', 'checkbox')

    // Indicate if alarm is on or off
    this.alarmState = this.createElement('h5');
    //this.alarmState.textContent = 'Alarm is off';

    // Current time
    this.currentTime = this.createElement('h5')
    this.currentTime.textContent = ''

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.inputAlarmTime, this.inputToggleOnOff, this.alarmState, this.currentTime);
  }

  // Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }

  bindSetAlarmTime(handler) {
    this.inputAlarmTime.addEventListener('change', event => {
      handler(this.inputAlarmTime.value)
    })
  }

  bindToggleOnOff(handler) {
    this.inputToggleOnOff.addEventListener('change', event => {
      if (event.currentTarget.checked) {
        handler(true);
      } else {
        handler(false);
      }
    })
  }

  setAlarmStateOn(stateIsOn) {
    if (stateIsOn) {
      this.alarmState.textContent = 'Alarm is on';
      this.inputToggleOnOff.checked = true;
    }
    else {
      this.alarmState.textContent = 'Alarm is off';
      this.inputToggleOnOff.checked = false;
    }
  }

  setCurrentTime(currentTime) {
    this.currentTime.textContent = currentTime;
  }

}
