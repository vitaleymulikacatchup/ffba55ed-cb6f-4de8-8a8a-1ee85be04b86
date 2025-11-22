"use client";

import React, { memo } from "react";
import TimelineHorizontalCardStack from "@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack";
import { cls } from "@/lib/utils";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/components/cardStack/types";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    imageAlt?: string;
    videoAriaLabel?: string;
} & (
    | { imageSrc: string; videoSrc?: never }
    | { videoSrc: string; imageSrc?: never }
);

interface TestimonialCardFourProps {
    testimonials: Testimonial[];
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
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
    mediaContainerClassName?: string;
    mediaClassName?: string;
}

const TestimonialCardFour = ({
    testimonials,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    ariaLabel = "Testimonials section",
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
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
    mediaContainerClassName = "",
    mediaClassName = "",
}: TestimonialCardFourProps) => {
    const mediaItems = testimonials.map((testimonial) => ({
        imageSrc: testimonial.imageSrc,
        videoSrc: testimonial.videoSrc,
        imageAlt: testimonial.imageAlt || testimonial.name,
        videoAriaLabel: testimonial.videoAriaLabel || testimonial.name,
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
            {testimonials.map((testimonial, index) => (
                <div
                    key={`${testimonial.id}-${index}`}
                    className={cls("w-full min-h-0 h-fit flex flex-col gap-3", cardContentClassName)}
                >
                    <div className={cls("flex gap-1", ratingClassName)}>
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                            <Star key={index} className="h-5 w-auto fill-accent text-accent" strokeWidth={1.5} />
                        ))}
                    </div>

                    <h3 className={cls("text-2xl font-medium text-foreground leading-[1.1] mt-1", nameClassName)}>
                        {testimonial.name}
                    </h3>

                    <div className="flex flex-col gap-1">
                        <p className={cls("text-base text-foreground leading-[1.1]", roleClassName)}>
                            {testimonial.role}
                        </p>
                        <p className={cls("text-base text-foreground leading-[1.1]", companyClassName)}>
                            {testimonial.company}
                        </p>
                    </div>
                </div>
            ))}
        </TimelineHorizontalCardStack>
    );
};

TestimonialCardFour.displayName = "TestimonialCardFour";

export default memo(TestimonialCardFour);
