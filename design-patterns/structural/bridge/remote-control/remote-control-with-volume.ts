import { DeviceImplementation } from "../device/device-implementation";
import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
  constructor(device: DeviceImplementation) {
    super(device);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }
}
