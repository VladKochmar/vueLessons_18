<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id" class="list__item">
      {{ item.title }}
      <v-btn variant="outlined" @click="deleteItem(item.id)">Видалити</v-btn>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ItemsList',

  props: {
    list: {
      type: Array,
      default: () => [],
    },

    deleteItem: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  gap: 1.25rem 0;
  list-style: none;
  max-width: 45rem;
  // .list__item
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid green;
    padding: 0.625rem 1.25rem;
  }
}
</style>
