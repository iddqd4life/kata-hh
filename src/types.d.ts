interface IJob {
  id: number;
  company_name: string;
  name: string;
  city: string;
  salary: string;
  published_at: string;
  short_description: string;
  space: string;
  skills: string;
  experience: string;
}

interface IJobExtended extends IJob {
  description: string;
  about_company: string;
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
