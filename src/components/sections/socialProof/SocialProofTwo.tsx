"use client";

import { memo } from "react";
import Image from "next/image";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/components/cardStack/types";

interface SocialProofTwoProps {
    logos: string[];
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
    contentClassName?: string;
    logoRowClassName?: string;
    logoItemClassName?: string;
    logoCardClassName?: string;
    logoImageClassName?: string;
}

const SocialProofTwo = ({
    logos,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    ariaLabel = "Social proof section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    contentClassName = "",
    logoRowClassName = "",
    logoItemClassName = "",
    logoCardClassName = "",
    logoImageClassName = "",
}: SocialProofTwoProps) => {
    // Calculate flex basis based on number of logos
    const getFlexBasis = () => {
        const count = logos.length;
        if (count === 2) return "md:basis-1/2";
        if (count === 3) return "md:basis-1/3";
        if (count === 4) return "md:basis-1/4";
        if (count === 5) return "md:basis-1/5";
        return "md:flex-1";
    };
    return (
        <section aria-label={ariaLabel} className={cls("w-full py-20", className)}>
            <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
                {(title || description) && (
                    <CardStackTextBox
                        title={title}
                        description={description}
                        tag={tag}
                        tagIcon={tagIcon}
                        buttons={buttons}
                        textboxLayout={textboxLayout}
                        textBoxClassName={textBoxClassName}
                        titleClassName={textBoxTitleClassName}
                        descriptionClassName={textBoxDescriptionClassName}
                        tagClassName={textBoxTagClassName}
                        buttonContainerClassName={textBoxButtonContainerClassName}
                        buttonClassName={textBoxButtonClassName}
                        buttonTextClassName={textBoxButtonTextClassName}
                    />
                )}

                <div className={cls("", contentClassName)}>
                    <div className={cls("flex flex-col md:flex-row items-stretch gap-4", logoRowClassName)}>
                        {logos.map((src, i) => (
                            <div
                                key={i}
                                className={cls(
                                    "flex items-center justify-center w-full",
                                    getFlexBasis(),
                                    logoItemClassName
                                )}
                            >
                                <div className={cls("card p-6 rounded-theme w-full h-full flex items-center justify-center", logoCardClassName)}>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={src}
                                        alt={`Partner ${i + 1}`}
                                        className={cls("w-1/2 md:w-auto md:h-8 2xl:h-10 h-auto object-contain", logoImageClassName)}
                                        unoptimized={src.startsWith('http') || src.startsWith('//')}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

SocialProofTwo.displayName = "SocialProofTwo";

export default memo(SocialProofTwo);
