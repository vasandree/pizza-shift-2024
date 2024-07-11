import type { GetUserSessionConfig } from '@api/requests/getUserSession.ts';
import { getUserSession } from '@api/requests/getUserSession.ts';
import { useQuery } from '@tanstack/react-query';

import { getToken } from '@/utils/helpers';

export const useGetUserSessionQuery = (config: GetUserSessionConfig) =>
  useQuery({
    queryFn: () => getUserSession(config),
    queryKey: ['userSession', getToken()],
    select: (data) => data.user
  });
