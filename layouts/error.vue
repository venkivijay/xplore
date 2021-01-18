<template>
  <section class="flex flex-col items-center justify-center">
    <div v-if="error.statusCode === 404">
      <img src="@/assets/404.svg" alt="Page not found" />
    </div>
    <h1 v-else>An error occurred</h1>
    <NuxtLink
      class="p-2 mt-6 text-theme-primary bg-theme-secondary rounded shadow duration-200 ease-out transform transition-transform-shadow hover:shadow-mermaid hover:-translate-y-2px"
      to="/"
      >Go back to home page</NuxtLink
    >
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
