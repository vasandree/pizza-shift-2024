import { useMutation } from '@tanstack/react-query';

import type { PatchUserProfileConfig } from '@/utils/api';
import { patchUserProfile } from '@/utils/api';

export const usePatchUserProfileQuery = () =>
  useMutation({
    mutationFn: (params: PatchUserProfileConfig) => patchUserProfile(params)
  });
