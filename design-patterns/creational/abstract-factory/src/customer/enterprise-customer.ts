import Customer from "./customer";

export default class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}
