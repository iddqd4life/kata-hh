import { Flex, Container, Stack, Title, Text } from '@mantine/core';
import Searcher from '../Searcher/Searcher';

const Hero = () => (
  <Flex py={24} style={{ borderBottom: '1px solid rgba(15, 15, 16, 0.2)' }}>
    <Container maw={1000} w="100%">
      <Flex justify={'space-between'} gap={32} align={'center'}>
        <Stack gap={4}>
          <Title order={1} size={'26px'} fw={700} c={'#0F0F10'}>
            Список вакансий
          </Title>
          <Text c={'rgba(15, 15, 16, 0.5)'} fw={500} size={'20px'}>
            по профессии Frontend-разработчик
          </Text>
        </Stack>
        <Searcher />
      </Flex>
    </Container>
  </Flex>
);

export default Hero;
