import { Flex, Stack, Title, Text, Badge, Anchor, Button } from '@mantine/core';
import { Link, useNavigate } from 'react-router';

interface IProps {
  job: IJob;
  navigateButton?: boolean;
}

const VacancyCard = ({ job, navigateButton = true }: IProps) => {
  const navigate = useNavigate();

  const Space = () => {
    switch (job.space) {
      case 'office':
        return (
          <Badge bg={'rgba(15, 15, 16, 0.1)'} size={'xs'} bdrs={'xs'} py={1} px={6} c={'rgba(15, 15, 16, 0.5)'}>
            Офис
          </Badge>
        );
      case 'hybrid':
        return (
          <Badge bg={'rgba(15, 15, 16, 1)'} size={'xs'} bdrs={'xs'} py={1} px={6} c={'#ffffff'}>
            Гибрид
          </Badge>
        );
      case 'remote':
        return (
          <Badge bg={'rgba(66, 99, 235, 1)'} size={'xs'} bdrs={'xs'} py={1} px={6} c={'#ffffff'}>
            Можно удалённо
          </Badge>
        );
    }
  };

  return (
    <Stack gap={16} p={24} bg={'#ffffff'} bdrs={12} align={'start'}>
      <Stack gap={8}>
        <Anchor to={`/vacancies/${job.id}`} c={'indigo.9'} component={Link}>
          <Title fw={600} size={'20px'}>
            {job.name}
          </Title>
        </Anchor>
        <Flex align={'center'} gap={16}>
          <Text c={'rgba(15, 15, 16, 1)'} size={'16px'} fw={400}>
            {Number(job.salary).toLocaleString('ru-RU')} ₽
          </Text>
          <Text c={'rgba(15, 15, 16, 0.5)'} size={'14px'} fw={400}>
            Опыт {job.experience}
          </Text>
        </Flex>
      </Stack>
      <Stack gap={8}>
        <Text c={'rgba(15, 15, 16, 0.5)'} size={'14px'} fw={400}>
          {job.company_name}
        </Text>
        <Stack gap={4}>
          {Space()}
          <Text c={'rgba(15, 15, 16, 1)'} size={'16px'}>
            {job.city}
          </Text>
        </Stack>
      </Stack>
      {navigateButton && (
        <Button
          onClick={() => navigate(`/vacancies/${job.id}`)}
          size={'sm'}
          radius={'sm'}
          bg={'rgba(15, 15, 16, 1)'}
          fw={400}
          c={'#ffffff'}
        >
          Смотреть вакансию
        </Button>
      )}
    </Stack>
  );
};

export default VacancyCard;
