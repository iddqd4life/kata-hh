import { Container, Stack, Title, Flex, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router';
import SadCatGif from '../../assets/sad-cat.gif';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maw={707} w={'100%'} py={72}>
      <Stack p={32} bg={'#fff'} bdrs={12}>
        <Flex align={'center'} justify={'space-between'}>
          <Stack gap={12} maw={460}>
            <Title order={2} size={34} lh={'1.3'} c={'#0F0F10'}>
              Упс! Такой страницы не существует
            </Title>
            <Text size={'18px'}>Давайте перейдем к началу</Text>
          </Stack>
          <Button style={{ width: 'max-content' }} px={22} size={'md'} onClick={() => navigate('/')}>
            На главную
          </Button>
        </Flex>
        <Image src={SadCatGif} alt={'sad cat'} width={'100%'} bdrs={12} />
      </Stack>
    </Container>
  );
};

export default NotFound;
