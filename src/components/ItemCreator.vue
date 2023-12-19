<template>
  <div>
    <slot></slot>
    <v-sheet max-width="300" class="mx-auto">
      <v-text-field v-model="itemData.title" :label="label"></v-text-field>
      <v-btn :disabled="isDisabled" block class="mt-2" text="Додати" @click="onAdd"></v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'ItemCreator',

  props: {
    addItem: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      itemData: {},
    }
  },

  computed: {
    isDisabled() {
      return !this.itemData.title
    },
  },

  methods: {
    onAdd() {
      this.addItem(this.itemData)
      this.itemData = {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
