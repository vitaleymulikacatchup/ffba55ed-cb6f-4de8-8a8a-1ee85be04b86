"use client";

import React, { useEffect, useRef, memo, Children } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardStackTextBox from "../../CardStackTextBox";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "../../types";

gsap.registerPlugin(ScrollTrigger);

interface TimelineCardStackProps {
    children: React.ReactNode;
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: "default" | "split" | "split-actions" | "split-description";
    className?: string;
    containerClassName?: string;
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    ariaLabel?: string;
}

const TimelineCardStack = ({
    children,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    className = "",
    containerClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    ariaLabel = "Timeline section",
}: TimelineCardStackProps) => {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const childrenArray = Children.toArray(children);

    useEffect(() => {
        const ctx = gsap.context(() => {
            itemRefs.current.forEach((ref, position) => {
                if (!ref) return;

                const isLast = position === itemRefs.current.length - 1;

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ref,
                        start: "center center",
                        end: "+=100%",
                        scrub: true,
                    },
                });

                timeline.set(ref, { willChange: "opacity" }).to(ref, {
                    ease: "none",
                    opacity: isLast ? 1 : 0,
                });
            });
        });

        return () => {
            ctx.revert();
        };
    }, [childrenArray.length]);

    return (
        <section
            className={cls("relative overflow-visible h-fit w-full py-20", className)}
            aria-label={ariaLabel}
        >
            <div className={cls("w-content-width mx-auto flex flex-col gap-6", containerClassName)}>
                <CardStackTextBox
                    title={title}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    buttons={buttons}
                    textboxLayout={textboxLayout}
                    textBoxClassName={textBoxClassName}
                    titleClassName={titleClassName}
                    descriptionClassName={descriptionClassName}
                    tagClassName={tagClassName}
                    buttonContainerClassName={buttonContainerClassName}
                    buttonClassName={buttonClassName}
                    buttonTextClassName={buttonTextClassName}
                />
                <div className="w-full flex flex-col gap-[var(--width-25)] md:gap-[6.25vh]">
                    {Children.map(childrenArray, (child, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            className="!sticky w-full card rounded-theme-capped h-[140vw] md:h-[75vh] top-[25vw] md:top-[12.5vh]"
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

TimelineCardStack.displayName = "TimelineCardStack";

export default memo(TimelineCardStack);
