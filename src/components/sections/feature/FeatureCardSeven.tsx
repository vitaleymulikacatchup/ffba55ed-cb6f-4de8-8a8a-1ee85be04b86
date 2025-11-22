"use client";

import React, { memo } from "react";
import CardList from "@/components/cardStack/CardList";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType } from "@/components/cardStack/types";

type FeatureCard = {
    id: number;
    title: string;
    description: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface FeatureCardSevenProps {
    features: FeatureCard[];
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
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    cardContentClassName?: string;
    stepNumberClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    imageContainerClassName?: string;
    imageClassName?: string;
}

const FeatureCardSeven = ({
    features,
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
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    cardContentClassName = "",
    stepNumberClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    imageContainerClassName = "",
    imageClassName = "",
}: FeatureCardSevenProps) => {

    return (
        <CardList
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            animationType={animationType}
            className={className}
            containerClassName={containerClassName}
            cardClassName={cardClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            textBoxClassName={textBoxClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            ariaLabel={ariaLabel}
        >
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={cls("w-full min-h-0 h-full flex flex-col justify-between items-center p-6 gap-6 md:p-15 md:gap-15", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", cardContentClassName)}
                >
                    <div className="w-full md:w-1/2 min-w-0 h-fit md:h-full flex flex-col justify-center">
                        <div className="w-full min-w-0 flex flex-col gap-3 md:gap-5">
                            <div
                                className={cls(
                                    "h-8 w-[var(--height-8)] primary-button text-background rounded-full flex items-center justify-center",
                                    stepNumberClassName
                                )}
                            >
                                <p className="text-sm truncate">
                                    {feature.id}
                                </p>
                            </div>
                            <h2 className={cls("mt-1 text-4xl md:text-5xl font-medium leading-[1.15] text-balance", cardTitleClassName)}>
                                {feature.title}
                            </h2>
                            <p className={cls("text-base leading-[1.15] text-foreground text-balance", cardDescriptionClassName)}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                    <div
                        className={cls(
                            "relative w-full md:w-1/2 aspect-square overflow-hidden rounded-theme-capped",
                            imageContainerClassName
                        )}
                    >
                        <MediaContent
                            imageSrc={feature.imageSrc}
                            videoSrc={feature.videoSrc}
                            imageAlt={feature.imageAlt || feature.title}
                            videoAriaLabel={feature.videoAriaLabel || feature.title}
                            imageClassName={cls("w-full h-full object-cover", imageClassName)}
                        />
                    </div>
                </div>
            ))}
        </CardList>
    );
};

FeatureCardSeven.displayName = "FeatureCardSeven";

export default memo(FeatureCardSeven);
