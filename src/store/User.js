import { register, login, profile, updateProfile } from '../services/getUsers';
import router from "../router";

const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'))
const theme = localStorage.getItem('theme')

const initialState = {
    token: token || "",
    user: null || user,
    isLoading: false,
    LoggedIn: Boolean(token),
    errorMessage: null,
    theme: theme || 'light',
};
export const User = {
    state: initialState,
    actions: {
        async login({ commit }, user) {
            commit('login')
            try {
                const res = await login(user)

                const { token } = res.data

                localStorage.setItem("token", token)

                if (token) {
                    const user = await profile()
                    localStorage.setItem('user', JSON.stringify(user.data))

                    commit('loginSuccess', { token, user: user.data });

                    return user.data
                }

            } catch (error) {
                if (error.response.data) {
                    commit('loginFailure', { payload: error.response.data.message })
                }
            }

        },
        logout({ commit }) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/ingresa')
            commit('resetState');
        },
        async update({ commit }, userData) {
            commit('update')
            try {
                await updateProfile(userData, user._id, token)
                const userUpdate = await profile(token)
                localStorage.setItem('user', JSON.stringify(userUpdate.data))
                commit('updateUserSuccess', { user: userUpdate.data });

                return userUpdate.data

            } catch (error) {
                console.log(error)
                /* if (error) {
                    commit('updateUserFailure', { payload: error.response.data.message })
                } */
            }
        },
        async register({ commit }, user) {
            commit('register')
            try {
                const userRegister = await register(user)
                if (userRegister) {
                    commit('registerSuccess')
                }
                return userRegister.data
            } catch (error) {
                if (error.response.data) {
                    commit('registerFailure', { payload: error.response.data.message })
                }
            }
        },
        initTheme({ commit }) {
            const cachedTheme = localStorage.theme ? localStorage.theme : false;
            //  `true` if the user has set theme to `dark` on browser/OS
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (cachedTheme)
                commit('updateTheme', cachedTheme)
            else if (userPrefersDark)
                commit('updateTheme', 'dark')
            else
                commit('updateTheme', 'light')

        },
        toggleTheme({ commit }) {
            switch (localStorage.theme) {
                case 'light':
                    commit('updateTheme', 'dark')
                    break;

                default:
                    commit('updateTheme', 'light')
                    break;
            }
        }

    },
    mutations: {
        login(state) {
            state.isLoading = true
        },
        loginSuccess(state, payload) {
            state.LoggedIn = true;
            state.token = payload.token;
            state.user = payload.user;
            state.errorMessage = null
            state.isLoading = false
        },
        loginFailure(state, payload) {
            state.LoggedIn = false;
            state.errorMessage = payload
            state.isLoading = false
        },
        resetState(state) {
            state.LoggedIn = false;
            state.token = null;
            state.user = null;
            state.errorMessage = null
            state.isLoading = false
        },
        update(state) {
            state.isLoading = true
        },
        updateUserSuccess(state, payload) {
            state.isLoading = false,
                state.user = payload
        },
        updateUserFailure(state, payload) {
            state.errorMessage = payload
            state.isLoading = false
        },
        register(state) {
            state.isLoading = true
        },
        registerSuccess(state) {
            state.isLoading = false
        },
        registerFailure(state, payload) {
            state.errorMessage = payload
            state.isLoading = false
        },
        updateTheme(state, payload) {
            state.theme = payload
            localStorage.theme = payload
        }
    },
    getters: {
        getTheme: (state) => {
            return state.theme;
        }
    }
}

