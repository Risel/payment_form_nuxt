<template>
  <div>
    <div
      v-if="isPopupVisible"
      class="popup-overlay"
      @click="() => (isPopupVisible = false)"
    ></div>
    <form @submit.prevent="handleSubmit">
      <div class="relative">
        <div class="front-card">
          <div class="flex justify-between items-center mb-10">
            <div class="flex flex-row">
              <p>Paying:</p>
              <p class="ml-2">€ 159</p>
            </div>
            <img src="~/assets/img/logo.png" alt="logo" />
          </div>
          <div class="flex flex-col">
            <InputField
              label="Card Number"
              mask="#### – #### – #### – ####"
              placeholder="0000 – 0000 – 0000 – 0000"
              required
              v-model="cardNumber"
            />
            <div class="grid grid-cols-2 grid-rows-1 gap-x-4 mt-8">
              <InputField
                label="Card Number"
                maskTokens="@:[а-яА-Я,a-zA-Z]"
                placeholder="Michael Nagarov"
                required
                v-model="cardHolder"
              />
              <div class="flex flex-row items-center pl-20">
                <InputField
                  label="Expiration Date:"
                  placeholder="09"
                  required
                  size="small"
                  maxlength="2"
                  v-model="expirationDate.mm"
                />
                <span class="mx-2">/</span>
                <InputField
                  placeholder="24"
                  required
                  size="small"
                  maxlength="2"
                  v-model="expirationDate.yy"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="back-card">
          <div class="bg-gray-light w-full h-[90px]"></div>
          <div class="absolute bottom-[110px] right-[10px]">
            <InputField
              label="CVC/CVV"
              type="password"
              size="medium"
              v-model="cvv"
              placeholder="•••"
              maxlength="3"
              required
            />
          </div>
        </div>
      </div>
      <div class="shadow-main mt-24 flex justify-between p-7">
        <div>
          <p class="text-lg text-gray-dark">Итого к зачислению</p>
          <h1 class="text-gray-main text-4xl">€ 159</h1>
          <p class="text-sm font-thin text-gray-light">Без комиссии</p>
        </div>
        <button class="w-[195px] bg-black py-4 text-white" type="submit">
          Оплатить
        </button>
      </div>
    </form>
    <div class="popup" v-if="isPopupVisible">Спасибо за заказ!</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputField from "~/components/InputField.vue";

const cardNumber = ref("");
const cardHolder = ref("");
const expirationDate = ref({
  mm: "",
  yy: "",
});
const cvv = ref("");
const isPopupVisible = ref(false);

const handleSubmit = async () => {
  const data = {
    name: cardHolder.value.split(" ")[0],
    surname: cardHolder.value.split(" ")[1],
    cardNumber: cardNumber.value,
    expirationDate: expirationDate.value,
    cvv: cvv.value,
  };
  await $fetch("http://www.mocky.io/v2/5eaffb6c3300005c00c68a8a", {
    method: "POST",
    body: data,
  });
  isPopupVisible.value = true;
  setTimeout(() => {
    isPopupVisible.value = false;
    console.log(data);
  }, 3000);
};
</script>

<style>
.front-card {
  @apply bg-gray-dark w-[500px] text-white p-10 z-50 relative;
}
.back-card {
  @apply bg-gray-main w-[500px] h-[320px] text-white py-10 absolute top-1/4 left-1/4 z-0;
}
.popup-overlay {
  @apply fixed top-0 left-0 w-full h-full bg-black;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
.popup {
  @apply fixed top-1/2 left-1/2 shadow-sm p-10 border border-gray-400 bg-white;
  z-index: 1000;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in;
}
</style>
