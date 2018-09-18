import { MarkType, Interpolation } from '@chart-parts/interfaces'
import { CommonMarkProps, MarkEncodingProp } from '../interfaces'
import { BaseMark } from './BaseMark'

export interface LineProps extends CommonMarkProps {
	interpolate?: MarkEncodingProp<Interpolation>
	tension?: MarkEncodingProp<number>
	defined?: MarkEncodingProp<boolean>
}

export class Line extends BaseMark<LineProps> {
	public markType = MarkType.Line

	protected encodeCustomProperties() {
		const { interpolate, tension, defined } = this.props
		return { interpolate, tension, defined }
	}
}
