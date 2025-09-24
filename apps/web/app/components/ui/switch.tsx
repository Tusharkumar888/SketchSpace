"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // mark mounted to avoid hydration mismatch from next-themes
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    // Log whenever theme changes (useful for debugging/analytics)
    console.log(`Theme changed → ${theme}`);
  }, [theme, mounted]);

  // handler for when the radix switch changes
  const onCheckedChange = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    // local logging for dev/analytics
    console.log(`Switch toggled: checked=${checked} → setting theme='${newTheme}'`);
  };

  // While not mounted, render a simple placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex gap-2">
        <Sun className="h-4 w-4" />
        <div className={cn("inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all", className)} />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex gap-2">
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}

      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        checked={isDark}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitive.Root>
    </div>
  );
}

export { Switch };
