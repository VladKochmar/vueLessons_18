<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <v-select
        v-model="itemData.friendId"
        label="Друг"
        :items="selectFriendsList"
        item-title="title"
        item-value="id"
      ></v-select>
      <v-select
        v-model="itemData.giftId"
        label="Подарунок"
        :items="selectGiftsList"
        item-title="title"
        item-value="id"
      ></v-select>
      <v-btn :disabled="isDisabled" block class="mt-2" text="Додати" @click="onAdd"></v-btn>
    </v-sheet>
  </div>
</template>

<script>
import { useFriendsStore } from '@/store/friends'
import { useGiftsStore } from '@/store/gifts'
import { useAssignmentsStore } from '@/store/assignments'

import { mapState, mapActions } from 'pinia'

export default {
  name: 'AssignmentCreator',

  data() {
    return {
      itemData: {},
    }
  },

  computed: {
    ...mapState(useFriendsStore, ['selectFriendsList']),
    ...mapState(useGiftsStore, ['selectGiftsList']),

    isDisabled() {
      return !this.itemData.friendId || !this.itemData.giftId
    },
  },

  methods: {
    ...mapActions(useAssignmentsStore, ['addItem']),

    onAdd() {
      this.addItem(this.itemData)
      this.itemData = {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
