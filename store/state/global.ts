import { GlobalState } from 'models';
import { create } from 'zustand';
import { exploreDealsAndSpecials } from '../data';

const initialState: GlobalState = {
  explore: exploreDealsAndSpecials,
};

export const useGlobalStore = create<GlobalState>(() => initialState);
