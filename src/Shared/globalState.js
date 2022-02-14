import { useState, useEffect } from "react";
import { atom, useRecoilState } from 'recoil';
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
