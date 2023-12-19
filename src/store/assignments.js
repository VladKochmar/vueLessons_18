import { defineStore } from 'pinia'
import { getModuleTemplate } from './helpers/moduleTemplate'
import { useGiftsStore } from './gifts'
import { useFriendsStore } from './friends'

export const useAssignmentsStore = defineStore('assignments', {
  state: () => ({
    assignments: [{ id: 1, friendId: 3, giftId: 1 }],
  }),

  getters: {
    filledAssignmentsList: (state) =>
      !state.assignments.length
        ? []
        : state.assignments.map((assignment) => ({
            id: assignment.id,
            title: `${useFriendsStore().getItemById(assignment.friendId).title} - ${
              useGiftsStore().getItemById(assignment.giftId).title
            }`,
          })),
  },

  actions: {
    ...getModuleTemplate('assignments', []).actions,

    removeItem(assignmentId) {
      this.assignments = this.assignments.filter((assignment) => assignment.id !== assignmentId)
    },

    removeAssignmentByFriendId(friendId) {
      this.assignments = this.assignments.filter((assignment) => assignment.friendId !== friendId)
    },

    removeAssignmentByGiftId(giftId) {
      this.assignments = this.assignments.filter((assignment) => assignment.giftId !== giftId)
    },
  },
})
