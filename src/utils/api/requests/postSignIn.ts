import type { RequestConfig, SignInDto, SignInResponse } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type PostSignInConfig = RequestConfig<SignInDto>;

export const postSignIn = async ({ params, config }: PostSignInConfig) => {
  const response = await apiInstance.post<SignInResponse>('/users/signin', params, config);
  return response.data;
};
