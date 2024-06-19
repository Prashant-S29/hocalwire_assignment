import { create } from 'zustand';

type ToogleCartProps = {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
}

export const toogleCart = create<ToogleCartProps>()((set) => ({
  showCart: true,
  setShowCart: (showCart: boolean) =>
    set({ showCart }),
}));