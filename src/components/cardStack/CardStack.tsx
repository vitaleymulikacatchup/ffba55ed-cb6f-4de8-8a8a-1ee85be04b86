"use client";

import { memo, Children } from "react";
import { CardStackProps } from "./types";
import GridLayout from "./layouts/grid/GridLayout";
import AutoCarousel from "./layouts/carousels/AutoCarousel";
import ButtonCarousel from "./layouts/carousels/ButtonCarousel";
import TimelineBase from "./layouts/timelines/TimelineBase";

const CardStack = ({
    children,
    mode = "buttons",
    gridVariant = "uniform-all-items-equal",
    uniformGridCustomHeightClasses,
    animationType,
    title,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout = "default",
    className = "",
    containerClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    ariaLabel = "Card stack",
}: CardStackProps) => {
    const childrenArray = Children.toArray(children);
    const itemCount = childrenArray.length;

    // Timeline layout for zigzag pattern (works best with 3-6 items)
    if (gridVariant === "timeline" && itemCount >= 3 && itemCount <= 6) {
        return (
            <TimelineBase
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
                textBoxClassName={textBoxClassName}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                tagClassName={tagClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
                ariaLabel={ariaLabel}
            >
                {childrenArray}
            </TimelineBase>
        );
    }

    // Use grid for 1-4 items, carousel for 5+ items
    // Timeline with 7+ items will also use carousel
    const useCarousel = itemCount >= 5 || (gridVariant === "timeline" && itemCount > 6);

    // Grid layout for 1-4 items
    if (!useCarousel) {
        return (
            <GridLayout
                itemCount={itemCount}
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
                textBoxClassName={textBoxClassName}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                tagClassName={tagClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
                ariaLabel={ariaLabel}
            >
                {childrenArray}
            </GridLayout>
        );
    }

    // Auto-scroll carousel for 5+ items
    if (mode === "auto") {
        return (
            <AutoCarousel
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
                carouselClassName={carouselClassName}
                textBoxClassName={textBoxClassName}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                tagClassName={tagClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
                ariaLabel={ariaLabel}
            >
                {childrenArray}
            </AutoCarousel>
        );
    }

    // Button-controlled carousel for 5+ items
    return (
        <ButtonCarousel
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
            carouselClassName={carouselClassName}
            controlsClassName={controlsClassName}
            textBoxClassName={textBoxClassName}
            titleClassName={titleClassName}
            descriptionClassName={descriptionClassName}
            tagClassName={tagClassName}
            buttonContainerClassName={buttonContainerClassName}
            buttonClassName={buttonClassName}
            buttonTextClassName={buttonTextClassName}
            ariaLabel={ariaLabel}
        >
            {childrenArray}
        </ButtonCarousel>
    );
};

CardStack.displayName = "CardStack";

export default memo(CardStack);
