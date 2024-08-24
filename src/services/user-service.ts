import {axiosInstance} from '../utils/axios-config/axiosInstance';
import Page from "../shared/models/api/shared/Page.ts";
import {User} from "../shared/models/user.types.ts";
import {CreateUserRequest, UpdateUserRequest} from "../shared/models/api/users.ts";

export const getAllUsers = async (page: number, size: number): Promise<Page<User>> => {
  const response = await axiosInstance.get(`/users`, {
    params: {
      page,
      size
    }
  });
  return response.data;
};

export const getAllUsersByServiceId = async (page: number, size: number, serviceId: number): Promise<Page<User>> => {
  const response = await axiosInstance.get(`/users/service/${serviceId}`, {
    params: {
      page,
      size
    }
  });
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: CreateUserRequest): Promise<User> => {
  const response = await axiosInstance.post(`/users`, user);
  return response.data;
};

export const updateUser = async (id: number, user: UpdateUserRequest): Promise<User> => {
  const response = await axiosInstance.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.status;
};