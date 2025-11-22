"use client";

import { memo, Children } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType } from "@/components/cardStack/types";

interface CardListProps {
  children: React.ReactNode;
  animationType: CardAnimationType;
  title?: string;
  description?: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout: "default" | "split" | "split-actions" | "split-description";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const CardList = ({
  children,
  animationType,
  title,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout,
  ariaLabel = "Card list",
  className = "",
  containerClassName = "",
  cardClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: CardListProps) => {
  const childrenArray = Children.toArray(children);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: childrenArray.length });

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full py-20", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
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

        <div className="flex flex-col gap-6">
          {childrenArray.map((child, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={cls("card rounded-theme-capped", cardClassName)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CardList.displayName = "CardList";

export default memo(CardList);
