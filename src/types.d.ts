interface IJob {
  id: number;
  company_name: string;
  name: string;
  city: string;
  salary: string;
  published_at: string;
  short_description: string;
  space: string; // TODO: enum
  skills: string;
  experience: string;
}

interface IFilters {
  skills: string[];
  search: string;
  city: string;
}

interface IPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
