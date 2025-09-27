"use client";

import * as React from "react";
import { useState } from "react";
import Combobox from "@/components/combobox";
import { ComboboxMultiSelect } from "@/components/combobox-multiselect";
import ComboboxDemo from "@/components/combobox-demo";
import { ComboboxMultiSelectDemo } from "@/components/combobox-multiselect-demo";
import { ApiDocumentation } from "@/components/api-documentation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor } from "lucide-react";

const countries = [
  { label: "United States", value: "us", suffix: "🇺🇸" },
  { label: "Canada", value: "ca", suffix: "🇨🇦" },
  { label: "United Kingdom", value: "uk", suffix: "🇬🇧" },
  { label: "Germany", value: "de", suffix: "🇩🇪" },
  { label: "France", value: "fr", suffix: "🇫🇷" },
  { label: "Japan", value: "jp", suffix: "🇯🇵" },
  { label: "Australia", value: "au", suffix: "🇦🇺" },
  { label: "Brazil", value: "br", suffix: "🇧🇷" },
];

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxt" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Remix", value: "remix" },
];

const skills = [
  { label: "TypeScript", value: "typescript" },
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "Java", value: "java" },
  { label: "C#", value: "csharp" },
  { label: "PHP", value: "php" },
  { label: "Ruby", value: "ruby" },
  { label: "Swift", value: "swift" },
];

const priorities = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Critical", value: "critical" },
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [forceMobile, setForceMobile] = useState<boolean>(true);

  return (
    <div className="flex flex-col min-h-svh px-4 py-8 gap-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="flex flex-col flex-1 gap-8 max-w-4xl mx-auto">
        <header className="flex flex-col gap-1 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Responsive Combobox Components
          </h1>
          <p className="text-muted-foreground">
            Easy to use and customizable combobox components with mobile drawer
            and multi-select functionality.
          </p>
        </header>

        <main className="flex flex-col flex-1 gap-8">
          {/* Basic Combobox Example */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Basic Examples</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="max-w-md space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Single Select</h3>
                  <Combobox
                    items={countries}
                    onChange={setSelectedCountry}
                    placeholder="Select a country"
                    noItemsLabel="No countries found"
                    onSearch={setSearchTerm}
                  />
                </div>
                {selectedCountry && (
                  <div className="text-sm text-muted-foreground">
                    Selected:{" "}
                    <Badge variant="secondary">{selectedCountry}</Badge>
                  </div>
                )}
                {searchTerm && (
                  <div className="text-sm text-muted-foreground">
                    Searching for: <Badge variant="outline">{searchTerm}</Badge>
                  </div>
                )}
              </div>
              <div className="max-w-md space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Multi-Select</h3>
                  <ComboboxMultiSelect
                    items={frameworks}
                    onChange={setSelectedFrameworks}
                    placeholder="Select frameworks"
                    noItemsLabel="No frameworks found"
                    searchPlaceholder="Search frameworks..."
                    initialValue={selectedFrameworks}
                  />
                </div>
                {selectedFrameworks.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Selected ({selectedFrameworks.length}):
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {selectedFrameworks.map((framework) => (
                        <Badge key={framework} variant="secondary">
                          {frameworks.find((f) => f.value === framework)?.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Responsive Demo Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Responsive Design</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant={!forceMobile ? "default" : "outline"}
                    size="sm"
                    onClick={() => setForceMobile(false)}
                    className="flex items-center gap-2"
                  >
                    <Monitor className="h-4 w-4" />
                    Desktop
                  </Button>
                  <Button
                    variant={forceMobile ? "default" : "outline"}
                    size="sm"
                    onClick={() => setForceMobile(true)}
                    className="flex items-center gap-2"
                  >
                    <Smartphone className="h-4 w-4" />
                    Mobile
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Toggle between desktop (Popover) and mobile (Drawer) views to
                see the responsive behavior.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-sm font-medium">
                        Single Select -{" "}
                        {forceMobile ? "Mobile Drawer" : "Desktop Popover"}
                      </h3>
                    </div>
                    <div className={forceMobile ? "max-w-xs" : "max-w-md"}>
                      <ComboboxDemo
                        items={countries}
                        onChange={setSelectedCountry}
                        placeholder="Select a country"
                        noItemsLabel="No countries found"
                        onSearch={setSearchTerm}
                        forceMobile={forceMobile}
                      />
                    </div>
                  </div>
                  {selectedCountry && (
                    <div className="text-sm text-muted-foreground">
                      Selected:{" "}
                      <Badge variant="secondary">{selectedCountry}</Badge>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-sm font-medium">
                        Multi-Select -{" "}
                        {forceMobile ? "Mobile Drawer" : "Desktop Popover"}
                      </h3>
                    </div>
                    <div className={forceMobile ? "max-w-xs" : "max-w-md"}>
                      <ComboboxMultiSelectDemo
                        items={frameworks}
                        onChange={setSelectedFrameworks}
                        placeholder="Select frameworks"
                        noItemsLabel="No frameworks found"
                        searchPlaceholder="Search frameworks..."
                        initialValue={selectedFrameworks}
                        forceMobile={forceMobile}
                      />
                    </div>
                  </div>
                  {selectedFrameworks.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        Selected ({selectedFrameworks.length}):
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {selectedFrameworks.map((framework) => (
                          <Badge key={framework} variant="secondary">
                            {
                              frameworks.find((f) => f.value === framework)
                                ?.label
                            }
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading State Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Loading State</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="max-w-md space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Single Select with Loading
                  </h3>
                  <Combobox
                    items={priorities}
                    onChange={setSelectedPriority}
                    placeholder="Select priority"
                    noItemsLabel="No priorities found"
                    isLoading={true}
                  />
                </div>
                {selectedPriority && (
                  <div className="text-sm text-muted-foreground">
                    Priority:{" "}
                    <Badge variant="destructive">{selectedPriority}</Badge>
                  </div>
                )}
              </div>
              <div className="max-w-md space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Multi-Select with Loading
                  </h3>
                  <ComboboxMultiSelect
                    items={skills}
                    onChange={setSelectedSkills}
                    placeholder="Select skills"
                    noItemsLabel="No skills found"
                    searchPlaceholder="Search skills..."
                    isLoading={true}
                  />
                </div>
                {selectedSkills.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Skills ({selectedSkills.length}):
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {selectedSkills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skills.find((s) => s.value === skill)?.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Readonly State Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Readonly State</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="max-w-md space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Readonly Single Select
                  </h3>
                  <Combobox
                    items={countries}
                    onChange={setSelectedCountry}
                    placeholder="Select a country"
                    noItemsLabel="No countries found"
                    readonly={true}
                    initialValue="us"
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  This combobox is disabled and shows a pre-selected value
                </div>
              </div>
              <div className="max-w-md space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Readonly Multi-Select
                  </h3>
                  <ComboboxMultiSelect
                    items={frameworks}
                    onChange={setSelectedFrameworks}
                    placeholder="Select frameworks"
                    noItemsLabel="No frameworks found"
                    readonly={true}
                    initialValue={["react", "nextjs"]}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  This multi-select is disabled and shows pre-selected values
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Documentation */}
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <ApiDocumentation />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
