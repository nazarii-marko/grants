export class Pagination {
  take: number;
  skip: number;
  orderBy: {
    field: string;
    direction: 'asc' | 'desc';
  };
}
