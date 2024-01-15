import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', () => {
  const posts = ref([])
  const postsPending = ref(false)
  const postsError = ref({})

  const posts = ref({
    data: ref([]),
    
  })

  const getPosts = async() => {
    const { data, error, pending } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
        lazy: true,
    })
    posts.value = data
    postsPending.value = pending
    postsError.value = error
  }

  const postDetails = ref({})
  const postComments = ref([])

  const getPostDetails = async(id) => {
    const { data: details } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    postDetails.value = details
  }

  const getPostComments = async(id) => {
    const { data: comments } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    postComments.value = comments
  }

  return {
    posts,
    postsPending,
    getPosts,

    postDetails,
    getPostDetails,
    
    postComments,
    getPostComments,
  }
})