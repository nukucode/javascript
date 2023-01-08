//: Mediator Behavioural Design Pattern

/* It is a behavioural design pattern that encapsulates how a set of objects interact with each other. It provides the central authority over a group of objects by promoting loose coupling, keeping objects from referring to each other explicitly. */

class TrafficTower {
  constructor() {
    this._airplanes = [];
  }

  register(airplane) {
    this._airplanes.push(airplane);
    airplane.register(this);
  }

  requestCoordinates(airplane) {
    return this._airplanes
      .filter((plane) => airplane !== plane)
      .map((plane) => plane.coordinates);
  }
}

class Airplane {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.trafficTower = null;
  }

  register(trafficTower) {
    this.trafficTower = trafficTower;
  }

  requestCoordinates() {
    if (this.trafficTower) return this.trafficTower.requestCoordinates(this);
  }
}

// usage
const tower = new TrafficTower();

const airplanes = [new Airplane(20), new Airplane(30), new Airplane(10)];
airplanes.map((airplane) => {
  tower.register(airplane);
});

console.log(airplanes.map((airplane) => airplane.requestCoordinates()));
