import { defineStore } from 'pinia'

export const UserStore = defineStore('user',{
  state: () => ({
    token:null,
    roles:[],
    profile:{
      firstName:'',
      LastName:'',
      userName:'',
      password:'',
    },
    favorite:[],
   }),
  getters: {
    getToken: (state) => state.token,
    getFavorite: (state) => state.favorite,
    getProfile: (state) => state.profile,
  },
  actions: {
    setToken(token){
      this.token = token
    },
    setRoles(roles){
      this.roles = roles
    },
    setProfile(profile){
      this.profile.firstName = profile.firstName
      this.profile.LastName = profile.LastName
      this.profile.userName = profile.userName
      this.profile.password = profile.password
    },
    setFavoriteArray(favorites){
      this.favorite = favorites
    },
    addFavorite(favorite){
      this.favorite.push(favorite)
    },
    resetFavorite(){
      this.favorite = []
    },
    popFavorite(favorite){
      this.favorite = this.favorite.splice(this.favorite.indexOf(item => item.title == favorite.title),1) 
    },
  }
})
