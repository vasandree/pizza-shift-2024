import type { CreateOtpDto, OtpResponse, RequestConfig } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type PostAuthOtpConfig = RequestConfig<CreateOtpDto>;

export const postAuthOtp = async ({ params, config }: PostAuthOtpConfig): Promise<OtpResponse> => {
  const response = await apiInstance.post('/auth/otp', params, config);
  return response.data as OtpResponse;
};
