import PlainBackground from "@/components/background/PlainBackground";
import GridBackround from "@/components/background/GridBackround";
import DotGridBackground from "@/components/background/DotGridBackground";
import CircleGradientBackground from "@/components/background/CircleGradientBackground";
import AuroraBackground from "@/components/background/AuroraBackground";
import FloatingGradientBackground from "@/components/background/floatingGradientBackground/FloatingGradientBackground";
import AnimatedGridBackground from "@/components/background/AnimatedGridBackground";
import AnimatedAuroraBackground from "@/components/background/AnimatedAuroraBackground";
import FluidBackground from "@/components/background/FluidBackground";
import RadialGradientBackground from "@/components/background/RadialGradientBackground";
import GradientBarsBackground from "@/components/background/GradientBarsBackground";
import type { BorderRadiusPreset, ContentWidthPreset, SizingPreset, BackgroundType } from "./types";

export const borderRadiusMap: Record<BorderRadiusPreset, string> = {
  sharp: "0",
  rounded: "var(--radius)",
  soft: "var(--radius-lg)",
  pill: "var(--radius-full)",
};

export const borderRadiusCappedMap: Record<BorderRadiusPreset, string> = {
  sharp: "0",
  rounded: "var(--radius)",
  soft: "var(--radius-lg)",
  pill: "var(--radius-xl)", // Capped at xl instead of full
};

export const contentWidthMap: Record<ContentWidthPreset, { desktop: string; mobile: string }> = {
  small: {
    desktop: "clamp(40rem, 70vw, 100rem)",
    mobile: "70vw",
  },
  medium: {
    desktop: "clamp(40rem, 80vw, 100rem)",
    mobile: "80vw",
  },
  large: {
    desktop: "clamp(40rem, 90vw, 100rem)",
    mobile: "90vw",
  },
};

export const baseVwMap: Record<SizingPreset, { desktop: string; mobile: string }> = {
  small: {
    desktop: "clamp(0.5rem, 0.68vw, 1rem)",
    mobile: "2.55vw",
  },
  medium: {
    desktop: "clamp(0.5rem, 0.8vw, 1rem)",
    mobile: "3vw",
  },
  large: {
    desktop: "clamp(0.5rem, 0.92vw, 1rem)",
    mobile: "3.45vw",
  },
};

interface TextSizingValues {
  text2xs: string;
  textXs: string;
  textSm: string;
  textBase: string;
  textLg: string;
  textXl: string;
  text2xl: string;
  text3xl: string;
  text4xl: string;
  text5xl: string;
  text6xl: string;
  text7xl: string;
  text8xl: string;
  text9xl: string;
}

export const textSizingMap: Record<SizingPreset, { desktop: TextSizingValues; mobile: TextSizingValues }> = {
  small: {
    desktop: {
      text2xs: "clamp(0.465rem, 0.527vw, 0.62rem)",
      textXs: "clamp(0.54rem, 0.612vw, 0.72rem)",
      textSm: "clamp(0.615rem, 0.697vw, 0.82rem)",
      textBase: "clamp(0.69rem, 0.782vw, 0.92rem)",
      textLg: "clamp(0.75rem, 0.85vw, 1rem)",
      textXl: "clamp(0.825rem, 0.935vw, 1.1rem)",
      text2xl: "clamp(0.975rem, 1.105vw, 1.3rem)",
      text3xl: "clamp(1.2rem, 1.36vw, 1.6rem)",
      text4xl: "clamp(1.5rem, 1.7vw, 2rem)",
      text5xl: "clamp(2.025rem, 2.3375vw, 2.75rem)",
      text6xl: "clamp(2.475rem, 2.805vw, 3.3rem)",
      text7xl: "clamp(3rem, 3.4vw, 4rem)",
      text8xl: "clamp(3.5rem, 3.825vw, 4.5rem)",
      text9xl: "clamp(5.25rem, 5.95vw, 7rem)",
    },
    mobile: {
      text2xs: "2.125vw",
      textXs: "2.3375vw",
      textSm: "2.55vw",
      textBase: "2.7625vw",
      textLg: "2.975vw",
      textXl: "3.6125vw",
      text2xl: "4.25vw",
      text3xl: "5.1vw",
      text4xl: "5.95vw",
      text5xl: "6.375vw",
      text6xl: "7.225vw",
      text7xl: "8.5vw",
      text8xl: "10.2vw",
      text9xl: "11.9vw",
    },
  },
  medium: {
    desktop: {
      text2xs: "clamp(0.465rem, 0.62vw, 0.62rem)",
      textXs: "clamp(0.54rem, 0.72vw, 0.72rem)",
      textSm: "clamp(0.615rem, 0.82vw, 0.82rem)",
      textBase: "clamp(0.69rem, 0.92vw, 0.92rem)",
      textLg: "clamp(0.75rem, 1vw, 1rem)",
      textXl: "clamp(0.825rem, 1.1vw, 1.1rem)",
      text2xl: "clamp(0.975rem, 1.3vw, 1.3rem)",
      text3xl: "clamp(1.2rem, 1.6vw, 1.6rem)",
      text4xl: "clamp(1.5rem, 2vw, 2rem)",
      text5xl: "clamp(2.025rem, 2.75vw, 2.75rem)",
      text6xl: "clamp(2.475rem, 3.3vw, 3.3rem)",
      text7xl: "clamp(3rem, 4vw, 4rem)",
      text8xl: "clamp(3.5rem, 4.5vw, 4.5rem)",
      text9xl: "clamp(5.25rem, 7vw, 7rem)",
    },
    mobile: {
      text2xs: "2.5vw",
      textXs: "2.75vw",
      textSm: "3vw",
      textBase: "3.25vw",
      textLg: "3.5vw",
      textXl: "4.25vw",
      text2xl: "5vw",
      text3xl: "6vw",
      text4xl: "7vw",
      text5xl: "7.5vw",
      text6xl: "8.5vw",
      text7xl: "10vw",
      text8xl: "12vw",
      text9xl: "14vw",
    },
  },
  large: {
    desktop: {
      text2xs: "clamp(0.465rem, 0.713vw, 0.62rem)",
      textXs: "clamp(0.54rem, 0.828vw, 0.72rem)",
      textSm: "clamp(0.615rem, 0.943vw, 0.82rem)",
      textBase: "clamp(0.69rem, 1.058vw, 0.92rem)",
      textLg: "clamp(0.75rem, 1.15vw, 1rem)",
      textXl: "clamp(0.825rem, 1.265vw, 1.1rem)",
      text2xl: "clamp(0.975rem, 1.495vw, 1.3rem)",
      text3xl: "clamp(1.2rem, 1.84vw, 1.6rem)",
      text4xl: "clamp(1.5rem, 2.3vw, 2rem)",
      text5xl: "clamp(2.025rem, 3.1625vw, 2.75rem)",
      text6xl: "clamp(2.475rem, 3.795vw, 3.3rem)",
      text7xl: "clamp(3rem, 4.6vw, 4rem)",
      text8xl: "clamp(3.5rem, 5.175vw, 4.5rem)",
      text9xl: "clamp(5.25rem, 8.05vw, 7rem)",
    },
    mobile: {
      text2xs: "2.875vw",
      textXs: "3.1625vw",
      textSm: "3.45vw",
      textBase: "3.7375vw",
      textLg: "4.025vw",
      textXl: "4.8875vw",
      text2xl: "5.75vw",
      text3xl: "6.9vw",
      text4xl: "8.05vw",
      text5xl: "8.625vw",
      text6xl: "9.775vw",
      text7xl: "11.5vw",
      text8xl: "13.8vw",
      text9xl: "16.1vw",
    },
  },
};

interface BackgroundComponentProps {
  className?: string;
  invertColors?: boolean; // For AnimatedAuroraBackground
}

export const backgroundComponents: Record<BackgroundType, React.ComponentType<BackgroundComponentProps> | null> = {
  none: null,
  plain: PlainBackground,
  grid: GridBackround,
  dotGrid: DotGridBackground,
  circleGradient: CircleGradientBackground,
  aurora: AuroraBackground,
  floatingGradient: FloatingGradientBackground,
  animatedGrid: AnimatedGridBackground,
  animatedAurora: AnimatedAuroraBackground,
  fluid: FluidBackground,
  radialGradient: RadialGradientBackground,
  gradientBars: GradientBarsBackground,
};
