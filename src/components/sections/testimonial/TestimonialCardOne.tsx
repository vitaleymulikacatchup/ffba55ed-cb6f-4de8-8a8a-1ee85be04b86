"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import { cls } from "@/lib/utils";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, GridVariant } from "@/components/cardStack/types";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    imageSrc: string;
    imageAlt?: string;
};

interface TestimonialCardOneProps {
    testimonials: Testimonial[];
    carouselMode?: "auto" | "buttons";
    uniformGridCustomHeightClasses?: string;
    gridVariant: GridVariant;
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
    imageClassName?: string;
    overlayClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    cardClassName?: string;
    imageClassName?: string;
    overlayClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
}

const TestimonialCard = memo(({
    testimonial,
    cardClassName = "",
    imageClassName = "",
    overlayClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
}: TestimonialCardProps) => {
    return (
        <div className={cls("relative h-full rounded-theme-capped overflow-hidden group", cardClassName)}>
            <Image
                src={testimonial.imageSrc}
                alt={testimonial.imageAlt || testimonial.name}
                width={800}
                height={800}
                className={cls("w-full h-full object-cover  ", imageClassName)}
                unoptimized={testimonial.imageSrc.startsWith('http') || testimonial.imageSrc.startsWith('//')}
                aria-hidden={testimonial.imageAlt === ""}
            />

            <div className={cls("!absolute bottom-6 left-6 right-6 card p-6 flex flex-col gap-3 rounded-theme-capped", overlayClassName)}>
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
        </div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

const TestimonialCardOne = ({
    testimonials,
    carouselMode = "buttons",
    uniformGridCustomHeightClasses = "min-h-95 2xl:min-h-105",
    gridVariant,
    animationType,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    ariaLabel = "Testimonials section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    imageClassName = "",
    overlayClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TestimonialCardOneProps) => {
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
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    cardClassName={cardClassName}
                    imageClassName={imageClassName}
                    overlayClassName={overlayClassName}
                    ratingClassName={ratingClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                    companyClassName={companyClassName}
                />
            ))}
        </CardStack>
    );
};

TestimonialCardOne.displayName = "TestimonialCardOne";

export default memo(TestimonialCardOne);
