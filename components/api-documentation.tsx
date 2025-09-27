import { Badge } from "@/components/ui/badge";

export function ApiDocumentation() {
  return (
    <div className="space-y-8">
      {/* Combobox API Documentation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Combobox API</h2>
        <div>
          <h3 className="text-lg font-semibold mb-3">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Prop</th>
                  <th className="text-left p-2 font-medium">Type</th>
                  <th className="text-left p-2 font-medium">Default</th>
                  <th className="text-left p-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-2 font-mono">items</td>
                  <td className="p-2 font-mono">ComboboxItem[]</td>
                  <td className="p-2">-</td>
                  <td className="p-2">
                    Array of items to display in the combobox
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onChange</td>
                  <td className="p-2 font-mono">(value: string) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback when selection changes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">noItemsLabel</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">
                    Text to show when no items are available
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">placeholder</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Placeholder text for the input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">initialValue</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Initial selected value</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">readonly</td>
                  <td className="p-2 font-mono">boolean</td>
                  <td className="p-2">
                    <Badge variant="outline">false</Badge>
                  </td>
                  <td className="p-2">Whether the combobox is readonly</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">shouldFilter</td>
                  <td className="p-2 font-mono">boolean</td>
                  <td className="p-2">
                    <Badge variant="outline">true</Badge>
                  </td>
                  <td className="p-2">
                    Whether to filter items based on search
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onSearch</td>
                  <td className="p-2 font-mono">(search: string) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback when search input changes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">loading</td>
                  <td className="p-2 font-mono">boolean</td>
                  <td className="p-2">
                    <Badge variant="outline">false</Badge>
                  </td>
                  <td className="p-2">Whether to show loading state</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">ComboboxItem Type</h3>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">
              {`type ComboboxItem = {
  label: string;      // Display text
  value: string;      // Unique value
  suffix?: string;    // Optional suffix text
};`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Example Usage</h3>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono overflow-x-auto">
              {`import Combobox from "@/components/combobox";

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
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* ComboboxMultiSelect API Documentation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">ComboboxMultiSelect API</h2>
        <div>
          <h3 className="text-lg font-semibold mb-3">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Prop</th>
                  <th className="text-left p-2 font-medium">Type</th>
                  <th className="text-left p-2 font-medium">Default</th>
                  <th className="text-left p-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-2 font-mono">items</td>
                  <td className="p-2 font-mono">ComboboxItem[]</td>
                  <td className="p-2">-</td>
                  <td className="p-2">
                    Array of items to display in the combobox
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onChange</td>
                  <td className="p-2 font-mono">
                    (value: string[]) =&gt; void
                  </td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback when selection changes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">noItemsLabel</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">
                    Text to show when no items are available
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">placeholder</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Placeholder text for the input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">initialValue</td>
                  <td className="p-2 font-mono">string[]</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Initial selected values</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">readonly</td>
                  <td className="p-2 font-mono">boolean</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Whether the combobox is readonly</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">shouldFilter</td>
                  <td className="p-2 font-mono">boolean</td>
                  <td className="p-2">-</td>
                  <td className="p-2">
                    Whether to filter items based on search
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onSearch</td>
                  <td className="p-2 font-mono">(search: string) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback when search input changes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">searchPlaceholder</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">
                    <Badge variant="outline">"Search options"</Badge>
                  </td>
                  <td className="p-2">Placeholder for search input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">initialSearch</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Initial search value</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">isLoading</td>
                  <td className="p-2 font-mono">boolean</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Whether to show loading state</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2 font-mono">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Example Usage</h3>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono overflow-x-auto">
              {`import { ComboboxMultiSelect } from "@/components/combobox-multiselect";

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
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
