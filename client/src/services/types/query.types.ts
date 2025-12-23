export interface UserQueryParams {
  page: number;
  limit: number;
  search: string;
  sort: string;
  order: "asc" | "desc";
  status?: "Online" | "Offline";
}
