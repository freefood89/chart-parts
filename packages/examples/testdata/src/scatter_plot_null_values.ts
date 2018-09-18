// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
declare var require: any
import { parseScene } from '@chart-parts/scenegraph'
const data = require('../resources/scatter_plot_null_values.json')

export const scenegraph = parseScene(data)
export const title = 'Scatter Plot Null Values'
export const dimensions = {
	height: 550,
	width: 550,
	origin: [30, 19] as [number, number],
}
