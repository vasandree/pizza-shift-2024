import { useMutation } from '@tanstack/react-query';
import { postAuthOtp, PostAuthOtpConfig } from '@/utils/api';

export const usePostAuthOtpQuery = () =>
  useMutation({
    mutationFn: (params: PostAuthOtpConfig) => postAuthOtp(params)
  });
