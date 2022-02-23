import { Switch } from '@headlessui/react'

export default function Toggle(props) {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={props.isOn}
          onChange={props.handleToggle}
          className={`${props.isOn ? 'bg-blue-600' : 'bg-slate-600'}
            relative inline-flex flex-shrink-0 h-[34px] w-[62px] md:h-[24px] md:w-[42px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${props.isOn ? 'translate-x-7 md:translate-x-[1.15rem]' : 'translate-x-0'}
              pointer-events-none inline-block h-[30px] w-[30px] md:h-[20px] md:w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
        <Switch.Label passive className="ml-3">
          {props.label}
        </Switch.Label>
      </div>
    </Switch.Group>
  )
}