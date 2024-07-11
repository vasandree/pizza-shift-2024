import type { RequestConfig, UpdateProfileDto, UpdateProfileResponse } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type PatchUserProfileConfig = RequestConfig<UpdateProfileDto>;

export const patchUserProfile = async ({ params, config }: PatchEditProfileConfig) => {
  const response = await apiInstance.patch('/users/profile', params, config);
  return response.data as UpdateProfileResponse;
};
