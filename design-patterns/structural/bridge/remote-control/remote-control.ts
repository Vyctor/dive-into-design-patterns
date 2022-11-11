import { DeviceImplementation } from "../device/device-implementation";
export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    const deviceStatus = this.device.getPower();
    this.device.setPower(!deviceStatus);
    console.log(`${this.device.getName()} power is now ${!deviceStatus}`);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  printStatus(): void {
    console.log(
      `Device: ${this.device.getName()}, Power: ${this.device.getPower()}, Volume: ${this.device.getVolume()}, Channel: ${this.device.getChannel()}`
    );
  }

  setDevice(device: DeviceImplementation): void {
    this.device = device;
  }

  getDevice(): DeviceImplementation {
    return this.device;
  }
}
