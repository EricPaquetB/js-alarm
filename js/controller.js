
class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.view.bindSetAlarmTime(this.handleSetAlarmTime)
  }

  handleSetAlarmTime = () => {
    console.log("Clicked on set alarm time")
  }

}

const app = new Controller(new Model(), new View())