import { Alert, Container, Flex, Loader } from '@mantine/core';
import Filters from '../../components/Filters/Filters.tsx';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux.ts';
import { fetchVacanciesThunk } from '../../reducers/vacanciesThunk.ts';
import React from 'react';
import VacanciesList from '../../components/VacanciesList/VacanciesList.tsx';
import Hero from '../../components/Hero/Hero.tsx';
import { useSearchParams } from 'react-router';

const Vacancies = () => {
  const { filters, pagination, status, error, jobs } = useTypedSelector((state) => state.vacancies);
  const dispatch = useTypedDispatch();
  const [_, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const normalizedFilters = Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (value?.length) acc[key] = value.toString();
        return acc;
      },
      {} as Record<string, string>,
    );
    setSearchParams(normalizedFilters, { replace: true });
  }, [filters, setSearchParams]);

  React.useEffect(() => {
    const abortController = new AbortController();
    const page = pagination.currentPage;
    dispatch(fetchVacanciesThunk({ filters, page, abortController }));

    return () => abortController.abort();
  }, [dispatch, filters, pagination.currentPage]);

  const Content = () => {
    switch (status) {
      case 'loading':
        return <Loader />;
      case 'error':
        return (
          <Alert color={'red'} title={'Ошибка!'}>
            {error}
          </Alert>
        );
      case 'success':
        return jobs.length ? (
          <VacanciesList />
        ) : (
          <Alert color={'indigo'} title={'Упс!'}>
            Кажется, ничего не нашлось...
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Hero />
      <Container maw={1000} w="100%" py={24}>
        <Flex gap={24} align={'start'}>
          <Filters />
          {Content()}
        </Flex>
      </Container>
    </>
  );
};

export default Vacancies;
