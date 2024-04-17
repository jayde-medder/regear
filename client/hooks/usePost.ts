import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPost, updatePost, deletePost } from '../apis/apiPosts'

export function usePost() {
  const queryClient = useQueryClient()

  const updatePostMutation = useMutation(updatePost, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['post'])
    },
  })

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['post'])
    },
  })

  const addPostMutation = useMutation(addPost, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['post'])
    },
  })

  return {
    updatePostMutation,
    deletePostMutation,
    addPostMutation,
  }
}
