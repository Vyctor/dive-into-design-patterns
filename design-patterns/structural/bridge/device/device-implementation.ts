export interface DeviceImplementation {
  getName(): string;
  setPower(powerStatus: boolean): void;
  getPower(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
  setChannel(channel: number): void;
  getChannel(): number;
}
