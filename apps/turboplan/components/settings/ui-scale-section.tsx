"use client";

import { Button, cn, Label } from "@wildfires-org/turboplan-utils";

import {
  DEFAULT_UI_SCALE,
  MAX_UI_SCALE,
  MIN_UI_SCALE,
  UI_SCALE_STEP,
  useUiScale,
} from "@/components/providers/ui-scale-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UI_SCALE_INPUT_ID = "interface-scale";

const formatScale = (scale: number) => `${Number(scale.toFixed(2))}%`;

export const UiScaleSection = () => {
  const { scale, setScale, resetScale } = useUiScale();

  const isDefault = scale === DEFAULT_UI_SCALE;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScale(Number(event.target.value));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor={UI_SCALE_INPUT_ID} className="text-sm font-medium">
              Interface scale
            </Label>
            <span
              className={cn(
                "tabular-nums text-sm font-medium",
                isDefault ? "text-muted-foreground" : "text-foreground",
              )}
            >
              {formatScale(scale)}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            Makes text, spacing and controls across the app larger or smaller.
            Saved on this device only.
          </p>

          <div className="space-y-2">
            <input
              id={UI_SCALE_INPUT_ID}
              type="range"
              min={MIN_UI_SCALE}
              max={MAX_UI_SCALE}
              step={UI_SCALE_STEP}
              value={scale}
              onChange={handleChange}
              aria-valuetext={formatScale(scale)}
              className={cn(
                "h-2 w-full cursor-pointer accent-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatScale(MIN_UI_SCALE)}</span>
              <span>{formatScale(MAX_UI_SCALE)}</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={resetScale}
            disabled={isDefault}
          >
            Reset to default
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
