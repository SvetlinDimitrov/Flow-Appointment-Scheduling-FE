import {axiosInstance} from '../utils/axios_config/axiosInstance';
import User from "../models/users/User.ts";
import CreateUser from "../models/users/CreateUser.ts";
import UpdateUser from "../models/users/UpdateUser.ts";
import Page from "../models/shared/Page.ts";

export const getAllUsers = async (page: number, size: number): Promise<Page<User>> => {
  const response = await axiosInstance.get(`/users`, {
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

export const createUser = async (user: CreateUser): Promise<User> => {
  const response = await axiosInstance.post(`/users`, user);
  return response.data;
};

export const updateUser = async (id: number, user: UpdateUser): Promise<User> => {
  const response = await axiosInstance.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.status;
};