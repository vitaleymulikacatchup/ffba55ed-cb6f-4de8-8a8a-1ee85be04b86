"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType } from "@/components/cardStack/types";

type FeatureCard = {
    title: string;
    description: string;
    icon: LucideIcon;
};

interface FeatureCardFourProps {
    features: FeatureCard[];
    carouselMode?: "auto" | "buttons";
    animationType: CardAnimationType;
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: "default" | "split" | "split-actions" | "split-description";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    cardClassName?: string;
    iconClassName?: string;
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

const FeatureCardFour = ({
    features,
    carouselMode = "buttons",
    animationType,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    iconClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: FeatureCardFourProps) => {

    return (
        <CardStack
            mode={carouselMode}
            gridVariant="uniform-all-items-equal"
            uniformGridCustomHeightClasses="min-h-0"
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
                        className={cls("relative h-full min-h-0 card flex flex-col justify-between gap-10 p-6 rounded-theme-capped", cardClassName)}
                    >
                        <p className={cls("text-xl text-foreground leading-[1.1]", cardDescriptionClassName)}>
                            {feature.description}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className={cls("primary-button h-10 aspect-square w-auto flex items-center justify-center rounded-theme flex-shrink-0", iconClassName)} aria-hidden="true">
                                <Icon className="h-1/2 w-auto text-background" strokeWidth={1.5} />
                            </div>
                            <h3 className={cls("text-xl font-medium leading-[1.1]", cardTitleClassName)}>
                                {feature.title}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </CardStack>
    );
};

FeatureCardFour.displayName = "FeatureCardFour";

export default memo(FeatureCardFour);
