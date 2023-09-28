class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
        if (distanceInKilometers < 0 || timeInMinutes < 0) {
            throw new Error("Distance and time must be non-negative values.");
        }

        const fare = this.baseFare + distanceInKilometers * this.costPerKilometer + timeInMinutes * this.costPerMinute;
        return fare;
    }
}

// Create an instance of the UberPriceCalculator class with pricing details
const uberCalculator = new UberPriceCalculator(5, 2, 0.5);

// Calculate the price for a 10-kilometer, 15-minute trip
const totalPrice = uberCalculator.calculatePrice(10, 15);

console.log(`The estimated Uber price for the trip is $${totalPrice.toFixed(2)}`);
