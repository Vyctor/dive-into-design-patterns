import Customer from "../customer/customer";
import Vehicle from "./vehicle";

export default class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickup(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
