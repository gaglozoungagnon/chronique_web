import ApiService from "./api.service";
const resource = "api/books";

export const BooksService = {
  query(params) {
    return ApiService.query(resource, {
      params,
    });
  },
  get(params) {
    return ApiService.get(resource, { params });
  },
  getByID(id) {
    return ApiService.get(resource, id);
  },
};
