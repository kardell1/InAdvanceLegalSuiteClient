import { defineStore } from "pinia";
export type TypeStoreUser = {
  username: string;
  token: string;
  isAuthenticated: boolean;
};

function initialState() {
  return {
    username: "",
    token: "",
    isAuthenticated: false,
  };
}
export const useUserStore = defineStore("user", {
  state: (): TypeStoreUser => initialState(),
  actions: {
    logout() {
      Object.assign(this, initialState());
      localStorage.removeItem("token");
    },
    setInformation({ isAuthenticated, token, username }: TypeStoreUser) {
      this.username = username;
      this.token = token;
      this.isAuthenticated = isAuthenticated;
    },
  },
});
