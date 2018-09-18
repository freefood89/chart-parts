// tslint:disable jsx-no-object-literal-props jsx-no-lambda jsx-no-lambda-props
import * as React from 'react'
import { FlatList, View } from 'react-native'
import { Orchestrator } from '@chart-parts/orchestrator'
import { Renderer } from 'react-chart-parts-native-svg-renderer'
import { testCharts, TestScenegraph } from '@chart-parts/testdata'

const pipeline = new Orchestrator(new Renderer())
const renderChart = (chart: TestScenegraph) =>
	pipeline.renderScenegraph(chart.scenegraph, chart.dimensions)

export default () => (
	<FlatList
		style={{ flex: 1 }}
		data={testCharts}
		keyExtractor={item => item.title}
		renderItem={({ item }) => (
			<View style={{ height: 500, width: 500 }}>{renderChart(item)}</View>
		)}
	/>
)
