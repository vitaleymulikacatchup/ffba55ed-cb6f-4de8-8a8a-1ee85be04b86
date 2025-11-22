import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

export type { ButtonConfig };

export interface TimelineCardStackItem {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
}

export type GridVariant =
    | "uniform-all-items-equal"
    | "two-columns-alternating-heights"
    | "asymmetric-60-wide-40-narrow"
    | "three-columns-all-equal-width"
    | "four-items-2x2-equal-grid"
    | "one-large-right-three-stacked-left"
    | "items-top-row-full-width-bottom"
    | "full-width-top-items-bottom-row"
    | "one-large-left-three-stacked-right"
    | "timeline";

export type CardAnimationType =
    | "none"
    | "opacity"
    | "slide-up"
    | "scale-rotate"
    | "blur-reveal";

export interface TextBoxProps {
    title?: string;
    description?: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: "default" | "split" | "split-actions" | "split-description";
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

export interface CardStackProps extends TextBoxProps {
    children: React.ReactNode;
    mode?: "auto" | "buttons";
    gridVariant?: GridVariant;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    ariaLabel?: string;
}

export interface GridLayoutProps extends TextBoxProps {
    children: React.ReactNode;
    itemCount: number;
    gridVariant?: GridVariant;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    ariaLabel: string;
}

export interface AutoCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    speed?: number;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    itemClassName?: string;
    ariaLabel: string;
    showTextBox?: boolean;
}

export interface ButtonCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    ariaLabel: string;
}
