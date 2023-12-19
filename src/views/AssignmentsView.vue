<template>
  <div class="page-container">
    <h1>Розподіл подарунків</h1>
    <items-list :list="filledAssignmentsList" :delete-item="removeItem" />
    <assignment-creator />
  </div>
</template>

<script>
import { useAssignmentsStore } from '@/store/assignments'

import { mapState, mapActions } from 'pinia'

import ItemsList from '@/components/ItemsList.vue'
import AssignmentCreator from '@/components/AssignmentCreator.vue'

export default {
  name: 'AssignmentsView',

  components: {
    ItemsList,
    AssignmentCreator,
  },

  computed: {
    ...mapState(useAssignmentsStore, ['filledAssignmentsList']),
  },

  methods: {
    ...mapActions(useAssignmentsStore, ['addItem', 'removeItem']),
  },
}
</script>

<style lang="scss" scoped></style>
