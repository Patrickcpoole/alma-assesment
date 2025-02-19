import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  ({ options, value, onChange, placeholder = "Select...", className }, ref) => {
    return (
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          ref={ref}
          className={cn(
            "relative flex items-center w-28 py-2 pl-3 pr-9",
            "rounded-lg border border-gray-200 bg-white",
            "focus:ring-2 focus:ring-primary/20 focus:border-primary/20",
            placeholder === "Select..." ? "text-gray-400" : "text-gray-700",
            className
          )}
        >
          <Select.Value placeholder={placeholder} />
          <ChevronDown className="absolute right-3 h-4 w-4 text-gray-400" />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="bg-white rounded-lg border border-gray-200 shadow-lg">
            <Select.Viewport>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="py-2 px-3 text-gray-700 hover:bg-gray-50 focus:bg-gray-50 outline-none data-[state=checked]:bg-primary/10"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
