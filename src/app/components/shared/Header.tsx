import { Flex, Logo } from "@/once-ui/components";

export default function Header() {
  return (
    <Flex
			fillWidth paddingTop="l" paddingLeft='l'
			direction="column" alignItems="left" flex={1}>
				<Logo size="xl" icon={false} style={{ zIndex: '1' }} />
		</Flex>
  )
}