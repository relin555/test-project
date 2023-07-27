import { defineStore } from "pinia";

export const useStartProject = defineStore( 'start', {
  state: () =>
  {
    return {
      show: false,
   }
 }
  ,
  actions: {
    openShow(){
      this.show = !this.show
    } 
  }
})