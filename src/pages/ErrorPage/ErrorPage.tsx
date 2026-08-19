import { Container, Stack, Title, Flex, Text, Button, Image, Code } from '@mantine/core';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';
import SadCatGif from '../../assets/sad-cat.gif';
import Header from '../../components/Header/Header.tsx';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <>
      <Header />
      <Container maw={707} w={'100%'} py={72}>
        <Stack p={32} bg={'#fff'} bdrs={12}>
          <Flex align={'center'} justify={'space-between'}>
            <Stack gap={12} maw={460}>
              <Title order={2} size={34} lh={'1.3'} c={'#0F0F10'}>
                {isRouteErrorResponse(error) ? 'Упс! Такой страницы не существует' : 'Технические шоколадки!'}
              </Title>
              <Text size={'18px'}>
                {isRouteErrorResponse(error) ? 'Давайте перейдём к началу.' : 'Уже фиксим в ритме дворфов.'}
              </Text>
            </Stack>
            <Button style={{ width: 'max-content' }} px={22} size={'md'} onClick={() => navigate('/')}>
              На главную
            </Button>
          </Flex>
          <Image src={SadCatGif} alt={'sad cat'} width={'100%'} bdrs={12} />
          {error instanceof Error && <Code block>{error.stack}</Code>}
        </Stack>
      </Container>
    </>
  );
};

export default ErrorPage;
