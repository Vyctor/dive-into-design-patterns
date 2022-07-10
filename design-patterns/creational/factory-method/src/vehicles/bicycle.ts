import { Vehicle } from "./vehicle";

export default class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickup(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou!`);
  }
}
