import type { RequestConfig, SessionResponse } from '@/utils/api';
import { apiInstance } from '@/utils/api';

export type GetUserSessionConfig = RequestConfig;

export const getUserSession = async (config: GetUserSessionConfig) => {
  const response = await apiInstance.get('/users/session', config.config);
  return response.data as SessionResponse;
};
