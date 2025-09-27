"use client";

import * as React from "react";
import { Check, ChevronDown, Loader2, X } from "lucide-react";
import { ComboboxItem } from "@/components/combobox";
import {
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandInput,
  Command,
} from "@/components/ui/command";
import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Drawer,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useCallback, useMemo, useState } from "react";
import { useIsMobile } from "@/lib/use-mobile";
import { cn } from "@/lib/utils";

export type ComboboxMultiSelectProps = {
  noItemsLabel: string;
  placeholder: string;
  items: ComboboxItem[];
  initialValue?: string[];
  onChange: (value: string[]) => void;
  readonly?: boolean;
  shouldFilter?: boolean;
  onSearch?: (search: string) => void;
  searchPlaceholder?: string;
  initialSearch?: string;
  isLoading?: boolean;
  className?: string;
};

export function ComboboxMultiSelect({
  items,
  onChange,
  noItemsLabel,
  placeholder,
  initialValue,
  onSearch,
  initialSearch,
  isLoading,
  shouldFilter,
  readonly,
  searchPlaceholder = "Search options",
  className,
}: ComboboxMultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    initialValue || []
  );
  const [searchValue, setSearchValue] = useState<string>(initialSearch || "");

  const isMobile = useIsMobile();

  const toggleSelection = useCallback(
    (itemValue: string) => {
      const currentSelection = selectedValues || [];
      const newSelection = currentSelection.includes(itemValue)
        ? currentSelection.filter((v) => v !== itemValue)
        : [...currentSelection, itemValue];
      setSelectedValues(newSelection);
      onChange(newSelection);
    },
    [onChange, selectedValues]
  );

  const clearSelection = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValues([]);
      onChange([]);
    },
    [onChange]
  );

  const onOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);
      if (isOpen && onSearch) {
        onSearch("");
      }
    },
    [onSearch]
  );

  const onInput = useCallback(
    (search: string) => {
      setSearchValue(search);
      if (onSearch) {
        onSearch(search);
      }
    },
    [onSearch]
  );

  const ComboboxContent = useCallback(
    () => (
      <Command shouldFilter={shouldFilter}>
        <div className="w-full relative">
          <CommandInput
            placeholder={searchPlaceholder}
            onValueChange={onInput}
            className="h-9 md:text-sm text-lg"
          />
          {isLoading && (
            <Loader2 className="size-4 absolute right-2 bottom-2.5 animate-spin" />
          )}
        </div>

        <CommandList>
          <CommandEmpty>{noItemsLabel}</CommandEmpty>
          <CommandGroup>
            {items.map((i) => (
              <CommandItem
                key={i.value}
                onSelect={() => toggleSelection(i.value)}
                value={i.label}
              >
                <div
                  className={cn(
                    "w-full",
                    i.suffix ? "flex justify-between" : ""
                  )}
                >
                  <div className="flex gap-2 items-center">
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues && selectedValues.includes(i.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {i.label}
                  </div>
                  {i.suffix && <div>{i.suffix}</div>}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    ),
    [
      selectedValues,
      toggleSelection,
      items,
      shouldFilter,
      searchPlaceholder,
      onInput,
      isLoading,
      noItemsLabel,
    ]
  );

  const triggerTextContent = useMemo(() => {
    if (selectedValues.length === 0) {
      return placeholder;
    }

    const selectedItems = items.filter((i) => selectedValues.includes(i.value));
    return selectedItems.map((i) => i.label).join(", ");
  }, [selectedValues, items, placeholder]);

  const triggerContent = (
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={open}
      disabled={readonly}
      className={cn("w-full justify-between font-normal", className)}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {triggerTextContent}
      </span>
      <div className="flex items-center gap-1">
        {selectedValues.length > 0 && (
          <div
            className="h-6 w-6 p-0 hover:bg-muted rounded-sm flex items-center justify-center cursor-pointer"
            onClick={clearSelection}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                clearSelection(e as any);
              }
            }}
          >
            <X className="h-3 w-3" />
          </div>
        )}
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        )}
      </div>
    </Button>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild>{triggerContent}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{placeholder}</DrawerTitle>
          </DrawerHeader>
          <div className="px-4">
            <ComboboxContent />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{triggerContent}</PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <ComboboxContent />
      </PopoverContent>
    </Popover>
  );
}
