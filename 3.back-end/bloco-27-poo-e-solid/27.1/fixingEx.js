var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    Tv.prototype.turnOn = function () {
        return {
            brand: this._brand,
            size: this._size,
            resolution: this._resolution,
            connections: this._connections,
            connectedTo: this.connectedTo
        };
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (newValue) {
            var hasConnection = this._connections.some(function (connection) { return connection === newValue; });
            if (hasConnection) {
                this._connectedTo = newValue;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var myTv = new Tv('Philips', 39, '1280x720', ['HDMI', 'AV', 'USB', 'TV']);
myTv.connectedTo = 'HDMI';
console.log(myTv.turnOn());
