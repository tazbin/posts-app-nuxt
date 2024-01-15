<template>
    <div>
        <p class=""> Blog id: {{ postDetails.id }} </p>
        <p class="text-3xl"> {{ postDetails.title }} </p>
        <p class="mt-5 mb-5">
            {{ postDetails.body }}
        </p>

        <ULink to="/" active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            View all posts
        </ULink>


        <h2 class="text-xl font-semibold mb-4 mt-5">Comments</h2>
        <div v-if="!pending"> 
        <div v-for="comment in postComments.value" :key="comment.id" class="mb-4">
            <div class="bg-white rounded-md border p-2 mt-2">
                <div class="mb-4">
                    <p class="text-gray-800 font-semibold">{{ comment.name }}</p>
                    <p class="text-gray-600">{{ comment.email }}</p>
                </div>
                <p class="text-gray-700">
                    {{ comment.body }}
                </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Post details',
})
const route = useRoute()

const postComments = ref([])
const { data: postDetails } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
const { data, pending } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`, {
    lazy: true
})
postComments.value = data
</script>