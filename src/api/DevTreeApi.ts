import { isAxiosError } from "axios";
import api from "../config/axios";
import type { PfrofileImage, User, UserHandle } from "../types";

export async function getUser() {
  try {
    const { data } = await api<User>("/user");
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error || error.message);
    }
  }
}

export async function getUserByHandle(handle: string) {
  try {
    const { data } = await api<UserHandle>(`/${handle}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error || error.message);
    }
  }
}

export async function updateProfile(formData: User) {
  try {
    const { data } = await api.patch<string>("/user", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error || error.message);
    }
  }
}

export async function updateProfileImage(formData: FormData) {
  try {
    const { data } = await api.post<PfrofileImage>("/user/image", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.error || error.message);
    }
  }
}