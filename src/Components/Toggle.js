import { Switch } from '@headlessui/react'

export default function Toggle(props) {
  return (
    <Switch.Group>
      <div className="flex flex-col">
        <Switch.Label passive className="mb-2">Remove after chosen?</Switch.Label>
        <Switch
          checked={props.isOn}
          onChange={props.handleToggle}
          className={`${props.isOn ? 'bg-blue-600' : 'bg-slate-600'}
            relative inline-flex flex-shrink-0 h-[24px] w-[52px] border-2 border-transparent rounded cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${props.isOn ? 'translate-x-7' : 'translate-x-0'}
              pointer-events-none inline-block h-[20px] w-[20px] rounded bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}