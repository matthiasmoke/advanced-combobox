import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Search, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/lib/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

export type ComboboxItem = {
  label: string;
  value: string;
  suffix?: string;
};

export type ComboboxDemoProps = {
  noItemsLabel: string;
  placeholder: string;
  items: ComboboxItem[];
  initialValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  shouldFilter?: boolean;
  onSearch?: (search: string) => void;
  isLoading?: boolean;
  className?: string;
  forceMobile?: boolean;
};

export default function ComboboxDemo({
  items,
  onChange,
  noItemsLabel,
  placeholder,
  initialValue,
  readonly = false,
  shouldFilter = true,
  onSearch,
  isLoading = false,
  className,
  forceMobile = false,
}: ComboboxDemoProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [value, setValue] = useState<string>(initialValue || "");
  let lastSelectedValueLabel: string =
    items.find((i) => i.value === initialValue)?.label || "";

  // Use forceMobile prop to override the actual mobile detection
  const shouldUseMobile = forceMobile || isMobile;

  const onSelect = (newValueLabel: string) => {
    const selectedValue =
      items.find((i) => i.label.trim() === newValueLabel) || undefined;
    if (!selectedValue) return;
    setValue(selectedValue.value);
    setOpen(false);
    onChange(selectedValue.value);
    lastSelectedValueLabel = selectedValue.label;
  };

  const getTriggerContent = (itemValue: string): string => {
    const newValue = items.find((i) => i.value === itemValue)?.label;
    if (!newValue && !lastSelectedValueLabel) {
      return placeholder;
    }
    return !newValue ? lastSelectedValueLabel : newValue;
  };

  const onInput = (search: string) => {
    setValue(search);
    if (onSearch) {
      onSearch(search);
    }
  };

  if (shouldUseMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="justify-between w-full"
            disabled={readonly}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span className="truncate">{getTriggerContent(value)}</span>
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </DrawerTrigger>
        <DrawerContent role="dialog" aria-modal="true">
          <DrawerTitle></DrawerTitle>
          <div className="mt-4 border-t z-20">
            <ComboboxContent
              items={items}
              setValue={onInput}
              setOpen={setOpen}
              onSelect={onSelect}
              placeholder={placeholder}
              noItemsLabel={noItemsLabel}
              shouldFilter={shouldFilter}
              loading={isLoading}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  } else {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            disabled={readonly}
            aria-expanded={open}
            className={cn("justify-between w-full", className)}
          >
            <span className="truncate">{getTriggerContent(value)}</span>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ChevronsUpDown className="opacity-50" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0">
          <ComboboxContent
            items={items}
            setValue={onInput}
            setOpen={setOpen}
            onSelect={onSelect}
            placeholder={placeholder}
            noItemsLabel={noItemsLabel}
            shouldFilter={shouldFilter}
            loading={isLoading}
          />
        </PopoverContent>
      </Popover>
    );
  }
}

type ComboboxContentProps = {
  items: ComboboxItem[];
  setValue: (value: string) => void;
  setOpen: (open: boolean) => void;
  onSelect: (value: string) => void;
  placeholder: string;
  noItemsLabel: string;
  shouldFilter: boolean;
  loading?: boolean;
};

function ComboboxContent({
  items,
  setValue,
  placeholder,
  noItemsLabel,
  setOpen,
  onSelect,
  shouldFilter = true,
  loading = false,
}: ComboboxContentProps) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (shouldFilter && searchValue) {
      const filtered = items.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [searchValue, items, shouldFilter]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setValue(value);
  };

  const handleItemClick = (label: string) => {
    setTimeout(() => {
      onSelect(label);
      setOpen(false);
    }, 50);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex items-center border-b px-3">
        <Search className="mr-2 size-4 shrink-0 opacity-50" />
        <input
          value={searchValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="z-20 text-lg flex h-9 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          role="searchbox"
        />
        {loading && (
          <Loader2 className="ml-2 h-4 w-4 animate-spin text-primary" />
        )}
      </div>
      <div className="overflow-y-auto max-h-[300px]">
        {filteredItems.length === 0 ? (
          <div className="py-6 text-center text-sm text-muted-foreground">
            {noItemsLabel}
          </div>
        ) : (
          <ul className="py-1">
            {filteredItems.map((item, index) => (
              <li
                key={`${item.value}-${index}`}
                className="text-lg relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 md:text-sm webkit-tap-highlight"
                style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                onClick={() => handleItemClick(item.label)}
                role="option button"
                aria-selected="false"
              >
                <span>{item.label}</span>
                {item.suffix && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.suffix}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
