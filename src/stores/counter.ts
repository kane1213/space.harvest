import { defineStore } from 'pinia'

export const useKindStore = defineStore('counters', {
  state: () => {
    return { time: 0 }
  },
  getters: {
    // double: (state) => state.count * 2,
    double: (state) => state.time * 2,
  },
  actions: {
    increase() {
      this.time += 1
    },
    decrease() {
      this.time -= 1
    },
  },
})
