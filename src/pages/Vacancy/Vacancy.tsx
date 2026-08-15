import { useParams } from 'react-router';
import React from 'react';
import { Alert, Container, Loader, Stack, Title, Text } from '@mantine/core';
import VacancyCard from '../../ui/VacancyCard/VacancyCard.tsx';

interface IDataSuccess {
  success: true;
  job: IJobExtended;
}

interface IDataFailure {
  success: false;
  error: string;
  message: string;
}

const Vacancy = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<IDataSuccess | IDataFailure | null>(null);

  React.useEffect(() => {
    if (!id) return;

    const abortController = new AbortController();

    fetch(`https://kata-jobs.onrender.com/api/jobs/${id}`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((json) => setData(json));

    return () => abortController.abort();
  }, [id]);

  return (
    <Container py={24} maw={658} w={'100%'}>
      {!data && <Loader />}
      {data && !data.success && (
        <Alert color={'red'} title={data.error}>
          {data.message}
        </Alert>
      )}
      {data && data.success && (
        <Stack gap={24}>
          <VacancyCard job={data.job} navigateButton={false} />
          <Stack p={24} bg={'#fff'} bdrs={'12px'}>
            <Stack gap={12}>
              <Title order={2} size={20}>
                Компания
              </Title>
              <Text>{data.job.about_company}</Text>
            </Stack>
            <Stack gap={8}>
              <Title order={2} size={16}>
                О вакансии
              </Title>
              <Text>{data.job.description}</Text>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default Vacancy;
