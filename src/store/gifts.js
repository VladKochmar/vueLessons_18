import { defineStore } from 'pinia'
import { getModuleTemplate } from './helpers/moduleTemplate'
import { gifts } from '@/data/data'
import { useAssignmentsStore } from './assignments'

const giftsModule = getModuleTemplate('gifts', gifts)

export const useGiftsStore = defineStore('gifts', {
  state: () => ({
    ...giftsModule.state,
  }),

  getters: {
    selectGiftsList: (state) => {
      const assignmentsModule = useAssignmentsStore()

      return !assignmentsModule.assignments.length
        ? state.gifts
        : state.gifts.filter(
            (gift) => !assignmentsModule.assignments.some((assignment) => assignment.giftId === gift.id)
          )
    },

    ...giftsModule.getters,
  },

  actions: {
    ...giftsModule.actions,

    removeItem(giftId) {
      this.gifts = this.gifts.filter((gift) => gift.id !== giftId)
      useAssignmentsStore().removeAssignmentByGiftId(giftId)
    },
  },
})
