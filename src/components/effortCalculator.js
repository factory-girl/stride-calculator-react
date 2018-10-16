export function calculateLeastAmountOfStrides(stepsPerFlight, stepsPerStride) {
    stepsPerFlight = stepsPerFlight.split(",");
    const stepsForLanding = 2;
    let stridesTracker = (stepsPerFlight.length - 1)*stepsForLanding;

    stepsPerFlight.forEach(flight => {
        if (flight % stepsPerStride === 0) {
            stridesTracker = stridesTracker + (flight/stepsPerStride);
        } else {
            stridesTracker = stridesTracker + Math.floor(flight/stepsPerStride);
            stridesTracker++;
        }
    });

    return "leastNumberOfStrides: " + stridesTracker + "";
}