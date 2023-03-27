<template>
  <main class="bg-white flex flex-col mx-auto w-[670px]">
    <div class="w-[280px] p-1 border border-black my-1">€ 159</div>
    <CardForm />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardForm from "~/components/CardForm.vue";

const title = ref("Форма оплаты");
const description = ref("Кастомная форма оплаты");
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
      keywords: ["payment", "online bils"],
    },
  ],
});
</script>

<style>
html {
  font-family: "Acme", sans-serif;
  line-height: 21px;
}
</style>
