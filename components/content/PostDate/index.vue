<script setup lang="ts">
import { internazilation } from "~/utils/formatingDate";

interface IProps {
  icon: string;
  date: string;
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="pt-5">
    <div class="flex gap-2 items-center">
      <Icon :name="props.icon" size="25"></Icon>
      {{ internazilation(props.date) }}
    </div>
    <slot name="image" />
  </div>
</template>
