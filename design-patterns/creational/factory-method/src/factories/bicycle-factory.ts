import { Vehicle } from "../vehicles/vehicle";
import VehicleFactory from "./vehicle-factory";
import Bicycle from "../vehicles/bicycle";

export default class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
