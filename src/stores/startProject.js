import { defineStore } from "pinia";
export const useIngridientsStore = defineStore( 'IngridientsStore', {
  state: () =>
  {
    return {
      ingridients: []
    }
  },
  actions: {
    async fill (){
      this.ingridients = [...(await import("../json/ingridients.json")).default.ingridients]
    },
  }
})