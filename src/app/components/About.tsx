import { Flex, Heading } from "@/once-ui/components";

export default function About() {
  return (
    <Flex
      fillWidth
      direction="column" alignItems="center" flex={1}>
      <Flex
          position="relative"
          as="section" overflow="hidden"
          fillWidth minHeight="0" maxWidth={64}
          direction="column" alignItems="center" flex={1}>
            <Heading>
              Hello
            </Heading>
        </Flex>
    </Flex>
  )
}