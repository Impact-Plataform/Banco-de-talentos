import { motion } from 'framer-motion'

type AnimatedContainerProps = {
	children: React.ReactNode
}

export function AnimatedContainer({ children }: AnimatedContainerProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 3 }}
			className="flex flex-col gap-4"
		>
			{children}
		</motion.div>
	)
}
