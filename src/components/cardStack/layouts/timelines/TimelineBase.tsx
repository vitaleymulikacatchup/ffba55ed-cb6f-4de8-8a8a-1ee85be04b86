"use client";

import React, { Children, useCallback } from "react";
import { cls } from "@/lib/utils";
import CardStackTextBox from "../../CardStackTextBox";
import { useCardAnimation } from "../../hooks/useCardAnimation";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType } from "../../types";

interface TimelineBaseProps {
  children: React.ReactNode;
  uniformGridCustomHeightClasses?: string;
  animationType: CardAnimationType;
  title?: string;
  description?: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout?: "default" | "split" | "split-actions" | "split-description";
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

const TimelineBase = ({
  children,
  uniformGridCustomHeightClasses = "min-h-80 2xl:min-h-90",
  animationType,
  title,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout = "default",
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
}: TimelineBaseProps) => {
  const childrenArray = Children.toArray(children);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: childrenArray.length });

  const getItemClasses = useCallback((index: number) => {
    const alignmentClass =
      index % 2 === 0 ? "self-start ml-0" : "self-end mr-0";

    const marginClasses = cls(
      index % 4 === 0 && "md:ml-0",
      index % 4 === 1 && "md:mr-20",
      index % 4 === 2 && "md:ml-15",
      index % 4 === 3 && "md:mr-30"
    );

    return cls(alignmentClass, marginClasses);
  }, []);

  return (
    <section
      className={cls("w-full py-20", className)}
      aria-label={ariaLabel}
    >
      <div
        className={cls("w-content-width mx-auto flex flex-col gap-6", containerClassName)}
      >
        {(title || description) && (
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
        )}
        <div className="relative z-10 flex flex-col gap-6 md:gap-15">
          {Children.map(childrenArray, (child, index) => (
            <div
              key={index}
              className={cls("w-65 md:w-25", uniformGridCustomHeightClasses, getItemClasses(index))}
              ref={(el) => { itemRefs.current[index] = el; }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TimelineBase.displayName = "TimelineBase";

export default React.memo(TimelineBase);
