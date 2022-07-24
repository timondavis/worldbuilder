export class WorldTopography {

    private dataGrid: number[];
    private gridWidth: number = 0;
    private gridLength: number = 0;
    private minGridValue: null | number = null;
    private maxGridValue: null | number = null;

    constructor(width: number, length: number) {
        this.dataGrid = [];
    }

    public setMinGridValue(min: null | number) {
        this.minGridValue = min;
    }
    public setMaxGridValue(max: null | number) {
        this.maxGridValue = max;
    }

    protected getDataGrid(): number[] {
        return this.dataGrid;
    }

    protected setValueAt(value: number, x: number, y: number) {
        if (this.isValidXValue(x) && this.isValidYValue(y)) {
        } else {
            throw new RangeError("World Topography coordinate X: " + x + ",  Y: " + y + " is out of range.");
        }
    }

    protected getGridWidth() {
        return this.gridWidth;
    }

    protected getGridLength() {
        return this.gridLength;
    }

    protected isValidXValue(xValue: number) {
        return (xValue > 0 && xValue < this.getGridWidth());
    }

    protected isValidYValue(yValue: number) {
        return (yValue > 0 && yValue < this.getGridLength());
    }
}