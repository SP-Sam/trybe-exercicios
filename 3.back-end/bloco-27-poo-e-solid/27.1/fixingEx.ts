class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): object {
    return {
      brand: this._brand,
      size: this._size,
      resolution: this._resolution,
      connections: this._connections,
      connectedTo: this.connectedTo,
    }
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(newValue: string) {
    const hasConnection = this._connections.some(connection => connection === newValue);

    if (hasConnection) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const myTv = new Tv('Philips', 39, '1280x720', ['HDMI', 'AV', 'USB', 'TV']);
myTv.connectedTo = 'HDMI';

console.log(myTv.turnOn());
