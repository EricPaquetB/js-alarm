
class View {
  constructor() {

    // The root element
    this.app = this.getElement('#root')

    // The title of the app
    this.title = this.createElement('h1')
    this.title.textContent = 'Todos'

    this.inputAlarmTime = this.createElement('input')
    this.inputAlarmTime.setAttribute('type', 'time')
    this.inputAlarmTime.textContent = 'Alarm Time'

    this.inputToggleOnOff = this.createElement('input')
    this.inputToggleOnOff.setAttribute('type', 'checkbox')

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.inputAlarmTime, this.inputToggleOnOff)

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
      handler()
    })
  }

}
