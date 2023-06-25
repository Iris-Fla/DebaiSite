<template>
  <div class="container">
  <div
    v-for="blog in data?.contents"
    :key="blog.id"
    class="mx-auto my-3 card mb-3 rounded-4"
    style="max-width: 540px;"
  >
  <NuxtLink
      :to="`/${blog.id}`"
      class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6"
    >
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="blog.eyecatch?.url" alt="..." style="" class="card-img rounded-4"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">{{ blog.title }}</h3>
          <p class="card-text">{{ blog.subtitle }}</p>
          <p class="card-text">
            <small class="text-muted"
              >カテゴリー:{{ blog.category?.name }}</small
            >
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
  </div>
</div>
</template>

<script setup lang="ts">
import { Blog } from "../plugins/blog";

const { data } = await useMicroCMSGetList<Blog>({
endpoint: "blogs",
});
</script>
