"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldTopography = void 0;
class WorldTopography {
    constructor(width, length) {
        this.gridWidth = 0;
        this.gridLength = 0;
        this.minGridValue = null;
        this.maxGridValue = null;
        this.dataGrid = [];
    }
    setMinGridValue(min) {
        this.minGridValue = min;
    }
    setMaxGridValue(max) {
        this.maxGridValue = max;
    }
    getDataGrid() {
        return this.dataGrid;
    }
    setValueAt(value, x, y) {
        if (this.isValidXValue(x) && this.isValidYValue(y)) {
        }
        else {
            throw new RangeError("World Topography coordinate X: " + x + ",  Y: " + y + " is out of range.");
        }
    }
    getGridWidth() {
        return this.gridWidth;
    }
    getGridLength() {
        return this.gridLength;
    }
    isValidXValue(xValue) {
        return (xValue > 0 && xValue < this.getGridWidth());
    }
    isValidYValue(yValue) {
        return (yValue > 0 && yValue < this.getGridLength());
    }
}
exports.WorldTopography = WorldTopography;
//# sourceMappingURL=WorldTopography.js.map