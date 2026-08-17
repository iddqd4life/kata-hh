import { Stack, Title, Text, Container } from '@mantine/core';

const About = () => {
  return (
    <Container maw={658} w={'100%'} py={24}>
      <Stack bg={'#fff'} gap={12} p={24} bdrs={12}>
        <Title order={2}>Евгений Дьяков</Title>
        <Text>
          Frontend-разработчик. Пишу приложения на React + TypeScript + Redux Toolkit. Играю в свои соулс-лайки, думы,
          српг, фанат творчества Хидео Кодзимы, хз что еще написать. Вот кофий сча пью вкусно оч.
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
