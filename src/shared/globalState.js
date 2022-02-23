import {atom} from 'recoil';

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

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
  effects_UNSTABLE: [localPersist]
});

export const removeState = atom({
  key: 'removeState',
  default: false,
  effects_UNSTABLE: [localPersist]
});

export const settingsBtnState = atom({
  key: 'settingsBtnState',
  default: false,
  effects_UNSTABLE: [localPersist]
});

export const settingsSideBarState = atom({
  key: 'settingsModalState',
  default: false,
  effects_UNSTABLE: [localPersist]
});

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