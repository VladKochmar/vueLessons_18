<template>
  <div class="page-container">
    <h1>Список подарунків</h1>
    <items-list :list="gifts" :delete-item="removeItem" />
    <item-creator :add-item="addItem" label="Назва">
      <h4>Новий подарунок</h4>
    </item-creator>
  </div>
</template>

<script>
import { useGiftsStore } from '@/store/gifts'
import { mapState, mapActions } from 'pinia'

import ItemCreator from '@/components/ItemCreator.vue'
import ItemsList from '@/components/ItemsList.vue'

export default {
  name: 'GiftsView',

  components: {
    ItemsList,
    ItemCreator,
  },

  computed: {
    ...mapState(useGiftsStore, ['gifts']),
  },

  methods: {
    ...mapActions(useGiftsStore, ['addItem', 'removeItem']),
  },
}
</script>

<style lang="scss" scoped></style>
