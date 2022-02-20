// TODO remove recoil-persist dependency

import { useState, useEffect } from "react";
import {atom, useRecoilState} from 'recoil';
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const darkModeState = atom({
    key: 'darkModeState',
    default: false,
    effects_UNSTABLE: [persistAtom]
});

export function useDarkMode() {
  const [isInitial, setIsInitial] = useState(true);
  const [darkModeStored, setDarkModeStored] = useRecoilState(darkModeState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [
    isInitial === true ? false : darkModeStored,
    setDarkModeStored
  ];
}

export const removeState = atom({
    key: 'removeState',
    default: false,
    effects_UNSTABLE: [persistAtom]
});

export function useRemoveState() {
    const [isInitial, setIsInitial] = useState(true);
    const [removeNameStored, setRemoveNameStored] = useRecoilState(removeState);

    useEffect(() => {
        setIsInitial(false);
    }, []);

    return [
        isInitial === true ? false : removeNameStored,
        setRemoveNameStored
    ];
}

export const settingsSideBarState = atom({
  key: 'settingsModalState',
  default: false,
  effects_UNSTABLE: [persistAtom]
});

export function useSettingsModalState() {
  const [isInitial, setIsInitial] = useState(true);
  const [settingsSideBarStored, setSettingsSideBarStored] = useRecoilState(settingsSideBarState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [
    isInitial === true ? false : settingsSideBarStored,
    setSettingsSideBarStored
  ];
}

const localPersist = ({onSet, setSelf, node}) => {
  const storedData = localStorage.getItem(node.key)
  if (storedData != null){
    setSelf(JSON.parse(storedData))
  }
  onSet((newData, __, isReset) => {
    isReset
      ? localStorage.removeItem(node.key)
      : localStorage.setItem(node.key, JSON.stringify(newData));
  })
}

export const namesListState = atom({
  key: 'namesListState',
  default: [],
  effects_UNSTABLE: [localPersist]
})

export const winnerMessageState = atom({
  key: 'winnerMessageState',
  default: [],
  effects_UNSTABLE: [localPersist]
})