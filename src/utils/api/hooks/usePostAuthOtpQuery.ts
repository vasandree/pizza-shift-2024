import { useMutation } from '@tanstack/react-query';

import type { PostAuthOtpConfig } from '@/utils/api';
import { postAuthOtp } from '@/utils/api';

export const usePostAuthOtpQuery = () =>
  useMutation({
    mutationFn: (params: PostAuthOtpConfig) => postAuthOtp(params)
  });
