# Advanced Combobox Components

A collection of advanced combobox components built with React, TypeScript, and shadcn/ui. Features responsive design with mobile drawer support, search functionality, and multi-select capabilities.

## Components

- **Combobox**: A searchable select component with mobile drawer support
- **ComboboxMultiSelect**: A searchable multi-select component with mobile drawer support

Both components are fully responsive and automatically switch between popover (desktop) and drawer (mobile) interfaces.

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

### Building for Production

Build the static site:

```bash
pnpm run export
# or
npm run export
```

This generates a static site in the `out/` directory that can be deployed to any static hosting service.

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings:

   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch** - The GitHub Action will automatically:

   - Build the static site
   - Deploy to GitHub Pages
   - Make it available at `https://yourusername.github.io/advanced-combobox`

3. **Manual deployment** (if needed):
   ```bash
   pnpm run export
   # Then upload the contents of the 'out' directory to GitHub Pages
   ```

### Other Static Hosting

The built site in the `out/` directory can be deployed to any static hosting service:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Any CDN or static hosting provider

### Building the Registry

To build the component registry for distribution:

```bash
pnpm build
# or
npm run build
```

This will generate the registry files under `public/r/` that can be consumed by the shadcn CLI.

### Using with shadcn CLI

To use these components in your project:

1. Add this registry to your shadcn configuration:

```bash
npx shadcn@latest add --registry https://your-domain.com/r/registry.json
```

2. Add individual components:

```bash
npx shadcn@latest add combobox
npx shadcn@latest add combobox-multiselect
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

## Features

- **Responsive Design**: Automatically switches between popover (desktop) and drawer (mobile)
- **Search Functionality**: Built-in search with customizable filtering
- **Loading States**: Support for loading indicators
- **Accessibility**: Full ARIA support and keyboard navigation
- **TypeScript**: Fully typed with comprehensive interfaces
- **Customizable**: Extensive styling and behavior customization options

## Dependencies

- React 18+
- Next.js 14+
- shadcn/ui components (button, popover, drawer, command)
- Lucide React (icons)
- Tailwind CSS

## License

MIT
