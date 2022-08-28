import { ThreeDots } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<ThreeDots
			height='80'
			width='80'
			color='#666'
			ariaLabel='three-dots-loading'
			visible={true}
		/>
	)
}
