import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchVacanciesThunk } from '../reducers/vacanciesThunk.ts';

interface IState {
  filters: IFilters;
  pagination: IPagination;
  jobs: IJob[];
  status: 'loading' | 'error' | 'success';
  error: string;
}

const getInitialFilters = (): IFilters => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.toString()
    ? {
        skills: searchParams.get('skills')?.split(',') || [],
        search: searchParams.get('search') || '',
        city: searchParams.get('city') || '',
      }
    : { skills: ['JavaScript', 'React', 'Redux', 'Python'], search: '', city: '' };
};

const initialState: IState = {
  filters: getInitialFilters(),
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
    hasNextPage: false,
    hasPreviousPage: false,
  },
  jobs: [],
  error: '',
  status: 'loading',
};

const slice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    updateFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
      state.pagination.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVacanciesThunk.pending, (state) => {
      state.status = 'loading';
      state.jobs = [];
    });

    builder.addCase(fetchVacanciesThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.jobs = action.payload.jobs;
      state.pagination = action.payload.pagination;
      state.error = '';
    });

    builder.addCase(fetchVacanciesThunk.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
  },
});

export const { setCurrentPage, updateFilters } = slice.actions;
export default slice.reducer;
