import React from 'react'

interface ToggleProps {
    checked: boolean;
    onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({checked, onToggle}) => {
    return (
        <div className="flex flex-col items-center justify-center ml-auto mt-3 md:mt-auto md:mr-0 md:ml-1 md:w-full">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" onClick={onToggle} defaultChecked={checked} />
              <div className="block bg-gray-500 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
          <style jsx>{`
          input:checked ~ .dot {
            transform: translateX(100%);
            background-color: #34D399;
          }
      `}</style>
        </div>
    )
}
