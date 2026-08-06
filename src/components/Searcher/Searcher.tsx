import { Button, Flex, Input, Image } from '@mantine/core';
import SearchIcon from '/src/assets/search.svg';
import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux.ts';
import { updateFilters } from '../../slices/vacanciesSlice.ts';

const Searcher = () => {
  const { filters } = useTypedSelector((state) => state.vacancies);
  const dispatch = useTypedDispatch();

  const [search, setSearch] = React.useState<string>(filters.search);

  const submitHandler = (e: React.SubmitEvent) => {
    e.preventDefault();
    dispatch(updateFilters({ ...filters, search }));
  };

  return (
    <Flex maw={508} w="100%">
      <form onSubmit={submitHandler} style={{ display: 'flex', gap: 12, flexGrow: 1 }}>
        <Input
          style={{ flexGrow: 1 }}
          bd={'1px solid rgba(15, 15, 16, 0.2)'}
          bdrs="md"
          size="md"
          variant="unstyled"
          placeholder="Должность или название компании"
          leftSection={<Image src={SearchIcon} alt="Поиск" w={16} />}
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <Button type={'submit'} bg={'indigo'} size="md" radius="sm">
          Найти
        </Button>
      </form>
    </Flex>
  );
};

export default Searcher;
