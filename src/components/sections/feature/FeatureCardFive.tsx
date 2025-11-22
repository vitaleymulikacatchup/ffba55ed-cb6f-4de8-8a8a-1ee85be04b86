"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType } from "@/components/cardStack/types";

type FeatureCard = {
    title: string;
    icon: LucideIcon;
};

interface FeatureCardFiveProps {
    features: FeatureCard[];
    carouselMode?: "auto" | "buttons";
    gridVariant: GridVariant;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: "default" | "split" | "split-actions" | "split-description";
    showIconBoxBackground?: boolean;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    cardClassName?: string;
    iconClassName?: string;
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    cardTitleClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

const FeatureCardFive = ({
    features,
    carouselMode = "buttons",
    gridVariant,
    uniformGridCustomHeightClasses,
    animationType,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    showIconBoxBackground = true,
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    iconClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    cardTitleClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: FeatureCardFiveProps) => {

    return (
        <CardStack
            mode={carouselMode}
            gridVariant={gridVariant}
            uniformGridCustomHeightClasses={uniformGridCustomHeightClasses}
            animationType={animationType}
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            className={className}
            containerClassName={containerClassName}
            gridClassName={gridClassName}
            carouselClassName={carouselClassName}
            controlsClassName={controlsClassName}
            textBoxClassName={textBoxClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            ariaLabel={ariaLabel}
        >
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div
                        key={`${feature.title}-${index}`}
                        className={cls("relative card flex flex-col justify-between items-center p-6 rounded-theme-capped h-full min-h-0", cardClassName)}
                    >
                        <div className={cls("flex-1 flex items-center justify-center", iconClassName)} aria-hidden="true">
                            <div className={cls("h-20 w-auto aspect-square flex items-center justify-center rounded-theme", showIconBoxBackground && "primary-button")}>
                                <Icon className={cls(showIconBoxBackground ? "h-1/2 w-1/2 text-background" : "h-full w-full text-foreground")} strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className={cls("text-xl font-medium self-start", cardTitleClassName)}>
                            {feature.title}
                        </h3>
                    </div>
                );
            })}
        </CardStack>
    );
};

FeatureCardFive.displayName = "FeatureCardFive";

export default memo(FeatureCardFive);
