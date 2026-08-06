import { createAsyncThunk } from '@reduxjs/toolkit';

interface IParams {
  filters: IFilters;
  page: number;
  abortController?: AbortController;
}

export const fetchVacanciesThunk = createAsyncThunk(
  'vacancies/fetchVacanciesThunk',
  async ({ filters, page, abortController }: IParams, { rejectWithValue }) => {
    // TODO: refactor with getState?

    const { skills, search, city } = filters;

    const url = 'https://kata-jobs.onrender.com/api/jobs';
    const queryParams = `?skills=${skills.join(',')}&search=${search}&city=${city}&page=${page}`;

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
