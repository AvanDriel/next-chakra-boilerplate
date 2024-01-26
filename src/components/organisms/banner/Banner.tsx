import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'

interface BannerProps {
  backgroundColor?: string
  textColor?: string
}

export const Banner = ({ backgroundColor, textColor }: BannerProps) => {
  return (
    <Grid
      margin='auto'
      maxW='8xl'
      templateColumns='repeat(5, 1fr)'
      gap={6}
      backgroundColor='brand.primary'
      color='brand.tertiary'
      p={8}
      borderRadius={6}
    >
      <GridItem colSpan={12}>
        <Heading size='2xl' mb={4}>
          Nextjs Chakra Boilerplate
        </Heading>
        <Text>Description text</Text>
      </GridItem>
    </Grid>
  )
}
