import { apiInstance, RequestConfig, SignInDto, SignInResponse } from '@/utils/api';

export type PostSignInConfig = RequestConfig<SignInDto>;

export const postSignIn = async ({ params, config }: postSignInConfig) => {
  const response = await apiInstance.post<SignInResponse>('/users/signin', params, config);
  return response.data;
};
