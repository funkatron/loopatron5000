import valueHelpers from "./valueHelpers.js";
import {DEFAULT_STEP_INCREMENT, DEFAULT_STEP_INCREMENT_SINE, GEN_MAX, GEN_MIN} from "./consts.js";

export const valueFunctions = {
    ramp(syncStep = 0, options = {minVal:GEN_MIN, maxVal:GEN_MAX, stepIncrement:DEFAULT_STEP_INCREMENT}) {
        let val = (syncStep * options.stepIncrement) + options.minVal;
        console.log("ramp val: ", val);
        if (val > options.maxVal) {  // start over at the minVal if we exceed the maxVal
            val = options.minVal;

            // val = val - syncStep;
            // console.log("ramp val 2: ", val, syncStep);
        }
        return val;
    },

    /**
     *
     * a generator function that returns a pattern of sign wave values
     * @param {Number} syncStep the current sync step
     * @param options
     * @param {Number} options.minVal the minimum value to return
     * @param {Number} options.maxVal the maximum value to return
     * @param {Number} options.stepIncrement the amount to increment the value by each step
     */
    sine: function (syncStep = 0, options = {minVal:GEN_MIN, maxVal:GEN_MAX, stepIncrement:DEFAULT_STEP_INCREMENT_SINE}) {
        let val = Math.sin(syncStep * options.stepIncrement);
        // scale the possible sine values (-1 to 1) to the range of minVal to maxVal
        return valueHelpers.scaleValue(val, [options.minVal, options.maxVal], [-1, 1]);
    }
};
