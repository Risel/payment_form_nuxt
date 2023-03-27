<template>
  <label class="flex flex-col relative">
    <span class="absolute top-[-20px] w-[120px]">{{ label }}</span>
    <input
      v-maska
      :data-maska="mask"
      :data-maska-tokens="maskTokens"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :required="required"
      :class="inputClass"
    />
  </label>
</template>

<script setup lang="ts">
import { vMaska } from "maska";

interface IProps {
  mask?: string;
  maskTokens?: string;
  label?: string;
  type?: string;
  modelValue: string;
  size?: string;
  placeholder: string;
  maxlength?: string;
  required?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  type: "text",
  size: "long",
  required: true,
});

const inputClass = {
  "w-[50px]": props.size === "small",
  "w-[110px]": props.size === "medium",
  "w-[280px]": props.size === "long",
};

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
<style>
.input {
  @apply flex flex-col;
}
input {
  @apply text-black h-10 mt-2 p-[10px];
}
</style>
