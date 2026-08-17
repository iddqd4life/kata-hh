import { Pagination, Stack, Tabs } from '@mantine/core';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux.ts';
import { setCurrentPage } from '../../slices/vacanciesSlice.ts';
import VacancyCard from '../../ui/VacancyCard/VacancyCard.tsx';
import { useLocation, useNavigate } from 'react-router';

const VacanciesList = () => {
  const { pagination, jobs } = useTypedSelector((state) => state.vacancies);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack gap={24} style={{ flexGrow: 1 }}>
      <Tabs value={location.pathname} onChange={(path) => navigate(path as string)}>
        <Tabs.List>
          <Tabs.Tab value={'/vacancies'}>Все города</Tabs.Tab>
          <Tabs.Tab value={'/vacancies/moscow'}>Москва</Tabs.Tab>
          <Tabs.Tab value={'/vacancies/petersburg'}>Санкт-Петербург</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      {jobs.map((job) => (
        <VacancyCard job={job} key={job.id} />
      ))}
      <Pagination
        withControls
        withEdges
        mx={'auto'}
        total={pagination.totalPages}
        value={pagination.currentPage}
        onChange={(page) => dispatch(setCurrentPage(page))}
        color={'indigo.9'}
      />
    </Stack>
  );
};

export default VacanciesList;
