import { menuService } from '@/services/menuService';
import { create } from 'zustand';

interface MenuState {
    response: [];
}

const UseMenuStore = create<MenuState>(set => ({
    response: [],
    getMenu: async () => {
        setTimeout(async () => {
            set({
                response: await menuService.getMenu(),
            });
        }, 500);
    },
}));

export default UseMenuStore;
