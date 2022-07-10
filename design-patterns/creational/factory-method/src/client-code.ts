import { randomVehicleAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

const customerNames = ["Ana", "João", "Maria", "Pedro", "José", "Felipe"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();

  const name = customerNames[randomNumbers(customerNames.length)];

  vehicle.pickup(name);
  vehicle.stop();
  console.log("---");
}
