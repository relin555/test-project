import { defineStore } from "pinia";

export const useStartProject = defineStore( 'start', {
  state: () =>
  {
    return {
     show:true
   }
 }
  ,
  getters: {
    openShow: ( state ) =>
    {
      this.show = !this.show
    } 
  }
})