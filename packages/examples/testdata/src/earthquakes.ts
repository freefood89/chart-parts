// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
declare var require: any
import { parseScene } from '@chart-parts/scenegraph'
const data = require('../resources/earthquakes.json')

export const scenegraph = parseScene(data)
export const title = 'Earthquakes'
export const dimensions = {
	height: 600,
	width: 600,
	origin: [30, 19] as [number, number],
}
