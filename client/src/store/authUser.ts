import { create } from 'zustand'

type AuthState = {
    user: null
    signup: () => Promise<void>
    login: () => Promise<void>
    logout: () => Promise<void>
    authCheck: () => Promise<void>
}

export const useAuthStore = create<AuthState>(() => ({
    user: null,
    signup: async () => {

    },

    login: async () => {

    },

    logout: async () => {

    },

    authCheck: async () => {

    }
}))
