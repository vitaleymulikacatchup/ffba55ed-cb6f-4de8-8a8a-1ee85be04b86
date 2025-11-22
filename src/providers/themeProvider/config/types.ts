import type { CTAButtonVariant } from "@/components/button/types";
import type { AnimationType } from "@/components/text/types";

export type BorderRadiusPreset = "sharp" | "rounded" | "soft" | "pill";
export type ContentWidthPreset = "small" | "medium" | "large";
export type SizingPreset = "small" | "medium" | "large";
export type BackgroundType =
  | "none"
  | "plain"
  | "grid"
  | "dotGrid"
  | "circleGradient"
  | "aurora"
  | "floatingGradient"
  | "animatedGrid"
  | "animatedAurora"
  | "fluid"
  | "radialGradient"
  | "gradientBars";

export type CardStyleVariant = "solid" | "solid-accent" | "solid-accent-light" | "outline" | "outline-light" | "glass-outline" | "glass-outline-light" | "elevated" | "elevated-accent" | "elevated-accent-light" | "floating" | "gradient-subtle" | "gradient-mesh" | "gradient-radial" | "frosted-heavy" | "neon-glow" | "accent-corner-border" | "inset" | "spotlight" | "shadow-colored" | "glass-elevated" | "glass-flat" | "glass-depth" | "gradient-bordered" | "solid-bordered" | "layered-gradient";
export type PrimaryButtonStyleVariant = "gradient" | "shadow" | "flat" | "layered-depth" | "radial-glow" | "diagonal-gradient" | "neon-glow-border" | "outline";
export type SecondaryButtonStyleVariant = "glass" | "outline" | "solid" | "minimal" | "layered" | "radial-glow";

export interface ThemeConfig {
  defaultButtonVariant: CTAButtonVariant;
  defaultTextAnimation: AnimationType;
  borderRadius: BorderRadiusPreset;
  contentWidth: ContentWidthPreset;
  sizing: SizingPreset;
  background: BackgroundType;
  cardStyle: CardStyleVariant;
  primaryButtonStyle: PrimaryButtonStyleVariant;
  secondaryButtonStyle: SecondaryButtonStyleVariant;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultButtonVariant: CTAButtonVariant;
  defaultTextAnimation: AnimationType;
  borderRadius: BorderRadiusPreset;
  contentWidth: ContentWidthPreset;
  sizing: SizingPreset;
  background: BackgroundType;
  cardStyle: CardStyleVariant;
  primaryButtonStyle: PrimaryButtonStyleVariant;
  secondaryButtonStyle: SecondaryButtonStyleVariant;
  showBlurBottom?: boolean;
}
