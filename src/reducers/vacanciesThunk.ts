import { createAsyncThunk } from '@reduxjs/toolkit';

interface IParams {
  filters: IFilters;
  page: number;
  abortController?: AbortController;
  cityByRoute?: string;
}

export const fetchVacanciesThunk = createAsyncThunk(
  'vacancies/fetchVacanciesThunk',
  async ({ filters, page, abortController, cityByRoute }: IParams, { rejectWithValue }) => {
    const { skills, search, city } = filters;

    const getCityParam = () => {
      switch (cityByRoute) {
        case 'moscow':
          return 'Москва';
        case 'petersburg':
          return 'Санкт-Петербург';
        default:
          return city;
      }
    };

    const url = 'https://kata-jobs.onrender.com/api/jobs';
    const queryParams = `?skills=${skills.join(',')}&search=${search}&city=${getCityParam()}&page=${page}`;

    try {
      const res = await fetch(url + queryParams, { signal: abortController?.signal });

      if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'something went wrong...');
    }
  },
);
