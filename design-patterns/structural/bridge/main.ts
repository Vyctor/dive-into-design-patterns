import { RemoteControl } from "./remote-control/remote-control";
import { Tv } from "./device/tv";
import { Radio } from "./device/radio";

export class Client {
  constructor(private readonly abstraction: RemoteControl) {}

  public togglePower(): void {
    this.abstraction.togglePower();
  }

  public volumeUp(): void {
    this.abstraction.volumeUp();
  }
}

const tv = new Tv();
const radio = new Radio();
const tvRemoteControl = new RemoteControl(tv);
const radioRemoteControl = new RemoteControl(radio);

const tvClient = new Client(tvRemoteControl);
const radioClient = new Client(radioRemoteControl);

tvClient.togglePower();
