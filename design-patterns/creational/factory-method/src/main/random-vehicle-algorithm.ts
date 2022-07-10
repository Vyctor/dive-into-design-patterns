import { Vehicle } from "../vehicles/vehicle";
import CarFactory from "../factories/car-factory";
import BicycleFactory from "../factories/bicycle-factory";
import { randomNumbers } from "../utils/random-numbers";

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta");
  const bicycle = bicycleFactory.getVehicle("Bicicleta");
  const vehicles = [car1, car2, bicycle];

  const sortedNumber = randomNumbers(vehicles.length);

  return vehicles[sortedNumber];
}
