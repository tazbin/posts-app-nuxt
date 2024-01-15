<template>
    <UButton @click="postStore.getPosts()" class="mt-2" size="sm" :ui="{ rounded: 'rounded-full' }">
                Get posts
            </UButton>
    <div v-if="postStore.postsPending.value" class="grid grid-cols-4 gap-4">
        <div v-for="index in 8" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-4 p-4">
            <div class="p-4 rounded bg-gray-300 h-2 w-3/4 mb-2"></div>
            <div class="p-4 rounded bg-gray-200 h-20 w-full mb-2"></div>
            <div class="p-4 rounded bg-gray-100 h-6 w-1/2"></div>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
        <UCard v-for="post in postStore.posts.value" :key="post?.id" class="col-span-1 mb-4">
            <!-- {{ post }} -->
            <template #header>
                <div class="grid items-center">
                    <div class="flex items-start">
                        <UBadge>{{ post.id }}</UBadge>
                        <div class="ml-2 text-sm">{{ post.title }}</div>
                    </div>
                </div>
            </template>
            <span class="text-sm">{{ post.body }}</span>
            <br />
            <UButton :to="`/posts/${post.id}`" class="mt-2" size="sm" :ui="{ rounded: 'rounded-full' }">
                View details
            </UButton>
        </UCard>
    </div>
</template>

<script setup>
useHead({
  title: 'All posts',
})

import { usePostStore } from "@/stores/post"
const postStore = usePostStore()

postStore.getPosts()

// const { data: posts, error, pending, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
//     lazy: true,
// })
</script>