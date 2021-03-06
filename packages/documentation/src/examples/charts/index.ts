/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import BarChart from './bar-chart'
import BarChartWithMean from './bar-chart-with-mean'
import GroupedBarChart from './grouped-bar-chart'
import StackedBarChart from './stacked-bar-chart'
import LineChart from './line-chart'
import AreaChart from './area-chart'
import StackedAreaChart from './stacked-area-chart'
import PoulationPyramid from './population-pyramid'
import JobVoyager from './job-voyager'

export default {
  // Bar Charts
  'bar-chart': BarChart,
  'grouped-bar-chart': GroupedBarChart,
  'stacked-bar-chart': StackedBarChart,
  'bar-chart-with-mean': BarChartWithMean,

  // Line & Area Charts
  'line-chart': LineChart,
  'area-chart': AreaChart,
  'stacked-area-chart': StackedAreaChart,
  'population-pyramid': PoulationPyramid,
  'job-voyager': JobVoyager,
}
