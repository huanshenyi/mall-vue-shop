export default {
  saveUserName(state, userName){
      state.username = userName.userName;
  },
  saveCartCount(state, count){
      state.cartCount = count;
  }
}
