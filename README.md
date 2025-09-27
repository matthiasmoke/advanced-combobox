# Advanced Combobox Components

A collection of advanced combobox components built with React, TypeScript, and shadcn/ui. Features responsive design with mobile drawer support, search functionality, and multi-select capabilities.

## Components

- **Combobox**: A searchable select component with mobile drawer support
- **ComboboxMultiSelect**: A searchable multi-select component with mobile drawer support

Both components are fully responsive and automatically switch between popover (desktop) and drawer (mobile) interfaces.

[Check out the Demo here](https://matthiasmoke.github.io/advanced-combobox/)

## Installation using the shadcn CLI

```bash
npx shadcn@latest add https://matthiasmoke.github.io/advanced-combobox/r/combobox.json
```

```bash
npx shadcn@latest add https://matthiasmoke.github.io/advanced-combobox/r/combobox-multiselect.json
```

## API Documentation

### Combobox

A searchable select component with mobile drawer support.

#### Props

| Prop           | Type                       | Default | Description                               |
| -------------- | -------------------------- | ------- | ----------------------------------------- |
| `items`        | `ComboboxItem[]`           | -       | Array of items to display in the combobox |
| `onChange`     | `(value: string) => void`  | -       | Callback when selection changes           |
| `noItemsLabel` | `string`                   | -       | Text to show when no items are available  |
| `placeholder`  | `string`                   | -       | Placeholder text for the input            |
| `initialValue` | `string`                   | -       | Initial selected value                    |
| `readonly`     | `boolean`                  | `false` | Whether the combobox is readonly          |
| `shouldFilter` | `boolean`                  | `true`  | Whether to filter items based on search   |
| `onSearch`     | `(search: string) => void` | -       | Callback when search input changes        |
| `loading`      | `boolean`                  | `false` | Whether to show loading state             |
| `className`    | `string`                   | -       | Additional CSS classes                    |

#### ComboboxItem Type

```typescript
type ComboboxItem = {
  label: string; // Display text
  value: string; // Unique value
  suffix?: string; // Optional suffix text
};
```

#### Example

```tsx
import Combobox from "@/components/combobox";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <Combobox
      items={items}
      onChange={setValue}
      placeholder="Select a fruit"
      noItemsLabel="No fruits found"
      onSearch={(search) => console.log("Searching:", search)}
    />
  );
}
```

### ComboboxMultiSelect

A searchable multi-select component with mobile drawer support.

#### Props

| Prop                | Type                        | Default            | Description                               |
| ------------------- | --------------------------- | ------------------ | ----------------------------------------- |
| `items`             | `ComboboxItem[]`            | -                  | Array of items to display in the combobox |
| `onChange`          | `(value: string[]) => void` | -                  | Callback when selection changes           |
| `noItemsLabel`      | `string`                    | -                  | Text to show when no items are available  |
| `placeholder`       | `string`                    | -                  | Placeholder text for the input            |
| `initialValue`      | `string[]`                  | -                  | Initial selected values                   |
| `readonly`          | `boolean`                   | -                  | Whether the combobox is readonly          |
| `shouldFilter`      | `boolean`                   | -                  | Whether to filter items based on search   |
| `onSearch`          | `(search: string) => void`  | -                  | Callback when search input changes        |
| `searchPlaceholder` | `string`                    | `"Search options"` | Placeholder for search input              |
| `initialSearch`     | `string`                    | -                  | Initial search value                      |
| `isLoading`         | `boolean`                   | -                  | Whether to show loading state             |
| `className`         | `string`                    | -                  | Additional CSS classes                    |

#### Example

```tsx
import { ComboboxMultiSelect } from "@/components/combobox-multiselect";

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

function MyComponent() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <ComboboxMultiSelect
      items={items}
      onChange={setValues}
      placeholder="Select frameworks"
      noItemsLabel="No frameworks found"
      searchPlaceholder="Search frameworks..."
      onSearch={(search) => console.log("Searching:", search)}
    />
  );
}
```

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
# or
npm install
```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building the Sample Page and Registry

To build the component registry for distribution:

```bash
pnpm build
# or
npm run build
```

## License

MIT
