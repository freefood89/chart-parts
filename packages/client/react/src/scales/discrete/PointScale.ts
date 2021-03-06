/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { Dimension } from '@chart-parts/interfaces'
import { point } from '@chart-parts/scales'
import { DomainRangeScale, DomainRangeScaleProps } from '../DomainRangeScale'

export interface PointScaleProps
	extends DomainRangeScaleProps<string[], [number, number], Dimension> {
	/**
	 * The name of the Point-width static scale
	 */
	stepName?: string

	/**
	 * Bin alignment 0-beginning, 1=end
	 */
	align?: number

	/**
	 * The outer and inner padding value
	 */
	padding?: number
}

export class PointScale extends DomainRangeScale<
	PointScaleProps,
	string[],
	[number, number],
	Dimension
> {
	protected createScale() {
		const stepName = this.props.stepName || this.props.name + 'Step'
		return point(this.props.name)
			.domain(this.props.domain)
			.range(this.props.range)
			.stepName(stepName)
			.align(this.props.align)
			.padding(this.props.padding)
			.reverse(this.props.reverse)
	}
}
