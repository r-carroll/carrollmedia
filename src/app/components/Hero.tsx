import { Background, Flex, Heading, Icon } from "@/once-ui/components";
import { FaChevronDown } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import styles from './Hero.module.scss';

export default function Hero() {
  return (
		// <><div className={styles.masthead}>
		// 	<Flex fillWidth
		// 		position='absolute'>
		// 		<iframe
		// 			src='https://www.youtube.com/embed/MtEusBjciIA?si=-UpyM6WymkjUkCSx&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=MtEusBjciIA'
		// 			className={styles.bgVideo}
		// 			title='fixed'
		// 			allowFullScreen={true}
		// 			allow='autoplay' />
		// 	</Flex>



		<>
		<Flex
			className={styles.masthead}
			fillWidth paddingX="l"
			justifyContent="center"
			direction="column">
				<Background
					dots={false} style={{ opacity: '50%' }} />
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						position="relative"
						fillWidth gap="24" marginBottom="104"
						direction="column">
						<Heading size='xl'>
							<ReactTyped
								strings={[
									'Hello, it\'s nice to meet you',
									'Welcome, I\'m so glad you\'re here',
									'こにちわよろしくお願いします',
									'ようこそ、来てくれて嬉しいです'
								]}
								typeSpeed={70}
								loop
							>
							</ReactTyped>
						</Heading>
						<Heading>
							<Icon name='FaChevronDown' />
							<FaChevronDown />
						</Heading>
					</Flex>
				</Flex>
			</Flex>

			<div className={styles.videoWrap}>
				<video className={styles.bgVideo} autoPlay loop muted>
					<source src='video/CM-hero.mp4' type="video/mp4"></source>
				</video>
			</div>
			</>
			
  )
}