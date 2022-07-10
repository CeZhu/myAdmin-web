export interface PageModel<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}
