import ApiService from "./api.service";
const resource = "api/repas";

export const RepasService = {
  query(params) {
    return ApiService.query(resource, {
      params,
    });
  },
  get(count) {
    return ApiService.get(`${resource}?page=${count}`);
  },
  getByID(id) {
    return ApiService.get(resource, id);
  },
  create(params) {
    return ApiService.post(resource, { repas: params });
  },
  update(id, params) {
    return ApiService.put(resource, id, { repas: params });
  },
  put(resource, data) {
    return ApiService.put(resource, data);
  },
  destroy(id) {
    return ApiService.delete(`${resource}/${id}`);
  },
};
