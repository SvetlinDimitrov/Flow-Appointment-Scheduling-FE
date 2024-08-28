import {axiosInstance} from '../utils/axios-config/axiosInstance';
import Page from "../shared/models/api/shared/Page.ts";
import {Service} from "../shared/models/service.types.ts";
import {ServiceDTO} from "../shared/models/api/services.ts";

const API_URL = '/services';

export const getAllServices = async (page: number, size: number, staffEmail?: string) => {
  const params = {page, size, staffEmail};
  const response = await axiosInstance.get<Page<Service>>(API_URL, {params});
  return response.data;
};

export const getServiceById = async (id: number) => {
  const response = await axiosInstance.get<Service>(`${API_URL}/${id}`);
  return response.data;
};

export const createService = async (service: ServiceDTO) => {
  const response = await axiosInstance.post<Service>(API_URL, service);
  return response.data;
};

export const assignStaffToService = async (id: number, staffEmail: string) => {
  const response = await axiosInstance.post<Service>(`${API_URL}/${id}/assign`, null, {
    params: {staffEmail}
  });
  return response.data;
};

export const unassignStaffFromService = async (id: number, staffEmail: string) => {
  const response = await axiosInstance.put<Service>(`${API_URL}/${id}/unassign`, null, {
    params: {staffEmail}
  });
  return response.data;
};

export const updateService = async (id: number, service: ServiceDTO) => {
  const response = await axiosInstance.put<Service>(`${API_URL}/${id}`, service);
  return response.data;
};

export const deleteService = async (id: number) => {
  await axiosInstance.delete(`${API_URL}/${id}`);
};

// This is a list of available workSpaces in my DB .
// If provide something else in here it will not be accepted
// In the feature i will change this to be fetched from the backend, just for now i want to keep it simple
export const availableServices = [
  'Flow Building A - Floor 1',
  'Flow Building A - Floor 2',
  'Flow Building B - Floor 1',
  'Flow Building B - Floor 2',
  'Flow Building C - Floor 1',
  'Flow Building C - Floor 2',
  'Flow Building D - Floor 1',
  'Flow Building D - Floor 2',
  'Flow Building E - Floor 1',
  'Flow Building E - Floor 2',
];
