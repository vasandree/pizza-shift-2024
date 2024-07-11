import { apiInstance, CreateOtpDto, OtpResponse, RequestConfig } from '@/utils/api';

export type PostAuthOtpConfig = RequestConfig<CreateOtpDto>;

export const postAuthOtp = async ({ params, config }: PostAuthOtpConfig): OtpResponse => {
  const response = await apiInstance.post('/auth/otp', params, config);
  return response.data as OtpResponse;
};
