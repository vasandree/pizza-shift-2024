import { useMutation } from '@tanstack/react-query';
import { postSignIn, PostSignInConfig } from '@/utils/api';

export const usePostSignInQuery = () =>
  useMutation({
    mutationFn: (params: PostSignInConfig) => postSignIn(params)
  });
