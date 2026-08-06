import { ActionIcon, Box, Flex, Input, Stack, Text, Image, Pill, Select } from '@mantine/core';
import PlusIcon from '/src/assets/plus.svg';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux.ts';
import React from 'react';
import { updateFilters } from '../../slices/vacanciesSlice.ts';

const Filters = () => {
  const { filters } = useTypedSelector((state) => state.vacancies);
  const dispatch = useTypedDispatch();

  const [newSkill, setNewSkill] = React.useState<string>('');

  const submitNewSkill = (e: React.SubmitEvent) => {
    e.preventDefault();

    const skills = [...filters.skills, newSkill];
    dispatch(updateFilters({ ...filters, skills }));
    setNewSkill('');
  };

  const removeSkill = (removableSkill: string) => {
    const skills = filters.skills.filter((skill) => skill !== removableSkill);
    dispatch(updateFilters({ ...filters, skills }));
  };

  return (
    <Stack maw={317} w={'100%'}>
      <Stack bg={'#ffffff'} p={24} bdrs={12} gap={12}>
        <Text size={'14px'} lh={'20px'} c={'rgba(33, 37, 41, 1)'} fw={600}>
          Ключевые навыки
        </Text>
        <form onSubmit={submitNewSkill}>
          <Flex gap={8}>
            <Input
              bdrs={8}
              size={'xs'}
              placeholder={'Навык'}
              w={'100%'}
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <ActionIcon type={'submit'} py={2} px={4} w={'100%'} maw={34} h={30} disabled={!newSkill.trim()}>
              <Image src={PlusIcon} alt="+" />
            </ActionIcon>
          </Flex>
        </form>
        <Flex wrap={'wrap'} columnGap={4} rowGap={6}>
          {filters.skills.map((skill: string) => (
            <Pill withRemoveButton key={skill} onRemove={() => removeSkill(skill)}>
              {skill}
            </Pill>
          ))}
        </Flex>
      </Stack>
      <Box p={24} bg={'#ffffff'} bdrs={12}>
        <Select
          value={filters.city}
          onChange={(value) => dispatch(updateFilters({ ...filters, city: value as string }))}
          data={[
            { value: '', label: 'Все города' },
            { value: 'Москва', label: 'Москва' },
            { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
          ]}
        />
      </Box>
    </Stack>
  );
};

export default Filters;
