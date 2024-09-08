import { Button, Flex, Text } from "@/once-ui/components";
import { useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  return (
    <Flex
    as="footer"
    position="relative"
    fillWidth paddingX="l" paddingY="m"
    justifyContent="space-between">
    <Text
      variant="body-default-s" onBackground="neutral-weak">
      © {currentYear} CarrollMedia
    </Text>
    <Flex
      gap="12">
      <Button
        href="https://github.com/r-carroll"
        prefixIcon="github" size="s" variant="tertiary">
        GitHub
      </Button>
    </Flex>
  </Flex>
  )
}