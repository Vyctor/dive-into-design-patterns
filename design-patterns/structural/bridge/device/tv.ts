import { DeviceImplementation } from "./device-implementation";
export class Tv implements DeviceImplementation {
  private volume = 10;
  private channel = 1;
  private power = false;
  private name = "TV";

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) return;

    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
  getChannel(): number {
    return this.channel;
  }
}
