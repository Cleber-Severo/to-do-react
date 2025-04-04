import { Check } from '@phosphor-icons/react'
import clsx from 'clsx'

interface CheckboxProps {
  selected: boolean
  onClick: () => void
}

const CheckboxItem = ({ selected, onClick }:CheckboxProps) => {
  return (
    <div
      className={clsx(
        "rounded-full flex items-center justify-center cursor-pointer",
        { "bg-todo-purple-dark hover:bg-todo-purple": selected },
        {
          "border border-todo-blue hover:border-todo-blue-dark hover:bg-todo-blue-dark-opacity":
            !selected,
        }
      )}
      style={{ width: "14.8px", height: "14.8px" }}
      onClick={onClick}
    >
      {selected && <Check size={10} weight="bold" />}
    </div>
  );
}

export default CheckboxItem
