"use client";

import React, { memo } from "react";
import TimelineHorizontalCardStack from "@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/components/cardStack/types";

type FeatureCard = {
    id: number;
    title: string;
    description: string;
    imageAlt?: string;
    videoAriaLabel?: string;
} & (
    | { imageSrc: string; videoSrc?: never }
    | { videoSrc: string; imageSrc?: never }
);

interface FeatureCardEightProps {
    features: FeatureCard[];
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: "default" | "split" | "split-actions" | "split-description";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    cardClassName?: string;
    progressBarClassName?: string;
    cardContentClassName?: string;
    stepNumberClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    mediaContainerClassName?: string;
    mediaClassName?: string;
}

const FeatureCardEight = ({
    features,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    cardClassName = "",
    progressBarClassName = "",
    cardContentClassName = "",
    stepNumberClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    mediaContainerClassName = "",
    mediaClassName = "",
}: FeatureCardEightProps) => {
    const mediaItems = features.map((feature) => ({
        imageSrc: feature.imageSrc,
        videoSrc: feature.videoSrc,
        imageAlt: feature.imageAlt || feature.title,
        videoAriaLabel: feature.videoAriaLabel || feature.title,
    }));

    return (
        <TimelineHorizontalCardStack
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            mediaItems={mediaItems}
            className={className}
            containerClassName={containerClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            textBoxClassName={textBoxClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            cardClassName={cardClassName}
            progressBarClassName={progressBarClassName}
            mediaContainerClassName={mediaContainerClassName}
            mediaClassName={mediaClassName}
            ariaLabel={ariaLabel}
        >
            {features.map((feature) => (
                <div
                    key={feature.id}
                    className={cls("w-full min-h-0 h-fit flex flex-col gap-3", cardContentClassName)}
                >
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
                    <h2 className={cls("mt-1 text-3xl font-medium leading-[1.15] text-balance", cardTitleClassName)}>
                        {feature.title}
                    </h2>
                    <p className={cls("text-base leading-[1.15] text-foreground text-balance", cardDescriptionClassName)}>
                        {feature.description}
                    </p>
                </div>
            ))}
        </TimelineHorizontalCardStack>
    );
};

FeatureCardEight.displayName = "FeatureCardEight";

export default memo(FeatureCardEight);
