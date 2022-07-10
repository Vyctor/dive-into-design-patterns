import { Vehicle } from "../vehicles/vehicle";
import VehicleFactory from "./vehicle-factory";
import { Car } from "../vehicles/car";

export default class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
