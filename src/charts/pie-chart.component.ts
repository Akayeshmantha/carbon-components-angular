import {
	Component,
	Input,
	AfterViewInit,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";

import { BaseChart } from "./base-chart.component";

import { PieChart as PC } from "@peretz/charts/bundle/bundle.js";

/**
 * Wrapper around `PieChart` in peretz charts library
 *
 * Most functions just call their equivalent from the chart library.
 *
 * @export
 * @class PieChart
 * @extends {BaseChart}
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-pie-chart",
	template: `
		<div #nChart
			class='n-chart-container'>
		</div>
	`,
	styleUrls: ["./charts.scss"],
	encapsulation: ViewEncapsulation.None
})
export class PieChart extends BaseChart implements AfterViewInit {
	/**
	 * Data passed to charts library for displaying
	 *
	 * @type {*}
	 * @memberof PieChart
	 */
	@Input() data: any;
	/**
	 * Options passed to charts library
	 *
	 * @type {*}
	 * @memberof PieChart
	 */
	@Input() options: any;
	/**
	 * Chart container element ref
	 *
	 * @memberof PieChart
	 */
	@ViewChild("nChart") chartRef;

	/**
	 * Runs after view init to create a chart, attach it to `chartRef` and draw it.
	 *
	 * @memberof PieChart
	 */
	ngAfterViewInit() {
		this.chart = new PC(this.chartRef.nativeElement, this.options, this.data);
		Object.assign(this, this.chart);
		this.drawChart();
	}

	/**
	 * Calls `drawChart()` from the chart library.
	 *
	 * @memberof PieChart
	 */
	drawChart() {
		this.chart.drawChart();
	}
}
