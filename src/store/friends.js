import { defineStore } from 'pinia'
import { getModuleTemplate } from './helpers/moduleTemplate'
import { friends } from '@/data/data'
import { useAssignmentsStore } from './assignments'

const friendsModule = getModuleTemplate('friends', friends)

export const useFriendsStore = defineStore('friends', {
  state: () => ({
    ...friendsModule.state,
  }),

  getters: {
    selectFriendsList: (state) => {
      const assignmentsModule = useAssignmentsStore()

      return !assignmentsModule.assignments.length
        ? state.friends
        : state.friends.filter(
            (friend) => !assignmentsModule.assignments.some((assignment) => assignment.friendId === friend.id)
          )
    },

    ...friendsModule.getters,
  },

  actions: {
    ...friendsModule.actions,

    removeItem(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId)
      useAssignmentsStore().removeAssignmentByFriendId(friendId)
    },
  },
})
