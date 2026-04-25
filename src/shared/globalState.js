import { atomWithStorage } from 'jotai/utils';

export const darkModeState = atomWithStorage('darkModeState', false);

export const removeState = atomWithStorage('removeState', false);

export const settingsSideBarState = atomWithStorage('settingsModalState', false);

export const namesListState = atomWithStorage('namesListState', []);

export const winnerMessageState = atomWithStorage('winnerMessageState', []);

export const spinModeState = atomWithStorage('spinModeState', false);
