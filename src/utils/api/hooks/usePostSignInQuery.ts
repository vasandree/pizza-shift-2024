import { useMutation } from '@tanstack/react-query';

import type { PostSignInConfig } from '@/utils/api';
import { postSignIn } from '@/utils/api';

export const usePostSignInQuery = () =>
  useMutation({
    mutationFn: (params: PostSignInConfig) => postSignIn(params)
  });
