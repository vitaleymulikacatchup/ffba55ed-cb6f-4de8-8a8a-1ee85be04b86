"use client";

import React, { memo } from "react";
import TimelineHorizontalCardStack from "@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/components/cardStack/types";

type Metric = {
    id: string;
    icon: LucideIcon;
    title: string;
    value: string;
    imageAlt?: string;
    videoAriaLabel?: string;
} & (
    | { imageSrc: string; videoSrc?: never }
    | { videoSrc: string; imageSrc?: never }
);

interface MetricCardFourProps {
    metrics: Metric[];
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
    iconContainerClassName?: string;
    iconClassName?: string;
    metricTitleClassName?: string;
    valueClassName?: string;
    mediaContainerClassName?: string;
    mediaClassName?: string;
}

const MetricCardFour = ({
    metrics,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    ariaLabel = "Metrics section",
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
    iconContainerClassName = "",
    iconClassName = "",
    metricTitleClassName = "",
    valueClassName = "",
    mediaContainerClassName = "",
    mediaClassName = "",
}: MetricCardFourProps) => {
    const mediaItems = metrics.map((metric) => ({
        imageSrc: metric.imageSrc,
        videoSrc: metric.videoSrc,
        imageAlt: metric.imageAlt || metric.title,
        videoAriaLabel: metric.videoAriaLabel || metric.title,
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
            {metrics.map((metric, index) => (
                <div
                    key={`${metric.id}-${index}`}
                    className={cls("w-full min-h-0 h-fit flex flex-col items-center justify-center gap-3 py-10", cardContentClassName)}
                >
                    <div className="w-full flex items-center justify-center gap-2">
                        <div className={cls("h-8 primary-button aspect-square rounded-theme flex items-center justify-center", iconContainerClassName)}>
                            <metric.icon className={cls("h-4/10 text-background", iconClassName)} strokeWidth={1.5} />
                        </div>
                        <h3 className={cls("text-xl truncate", metricTitleClassName)}>
                            {metric.title}
                        </h3>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <h4 className={cls("text-7xl font-medium truncate", valueClassName)}>
                            {metric.value}
                        </h4>
                    </div>
                </div>
            ))}
        </TimelineHorizontalCardStack>
    );
};

MetricCardFour.displayName = "MetricCardFour";

export default memo(MetricCardFour);
