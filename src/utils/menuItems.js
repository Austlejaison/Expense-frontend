import {dashboard, expenses, trend,profile} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Profile',
        icon: profile,
        link: '/dashboard'
    },

    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
]