<template>
  <div class="page-container">
    <h1>Список друзів</h1>
    <items-list :list="friends" :delete-item="removeItem" />
    <item-creator :add-item="addItem" label="Ім'я">
      <h4>Новий друг</h4>
    </item-creator>
  </div>
</template>

<script>
import { useFriendsStore } from '@/store/friends'
import { mapState, mapActions } from 'pinia'

import ItemsList from '@/components/ItemsList.vue'
import ItemCreator from '@/components/ItemCreator.vue'

export default {
  name: 'FriendsView',

  components: {
    ItemsList,
    ItemCreator,
  },

  computed: {
    ...mapState(useFriendsStore, ['friends']),
  },

  methods: {
    ...mapActions(useFriendsStore, ['removeItem', 'addItem']),
  },
}
</script>

<style lang="scss" scoped></style>
