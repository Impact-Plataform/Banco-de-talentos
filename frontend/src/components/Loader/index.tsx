import { ThreeDots } from 'react-loader-spinner'

interface LoaderProps {
	width?: number
	height?: number
	color?: string
}

export const Loader = ({ height, width, color }: LoaderProps) => {
	return (
		<ThreeDots
			height={`${height || 80}`}
			width={`${width || 80}`}
			color={color || '#666'}
			ariaLabel='three-dots-loading'
			visible={true}
		/>
	)
}
