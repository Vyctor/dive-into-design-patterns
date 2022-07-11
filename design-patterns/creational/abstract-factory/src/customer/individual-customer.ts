import Customer from "./customer";

export default class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}
