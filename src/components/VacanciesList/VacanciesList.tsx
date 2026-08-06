import { Pagination, Stack } from '@mantine/core';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux.ts';
import { setCurrentPage } from '../../slices/vacanciesSlice.ts';
import VacancyCard from '../../ui/VacancyCard/VacancyCard.tsx';

const VacanciesList = () => {
  const { pagination, jobs } = useTypedSelector((state) => state.vacancies);
  const dispatch = useTypedDispatch();

  return (
    <Stack gap={24} style={{ flexGrow: 1 }}>
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
