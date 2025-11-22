"use client";

import { memo, Children } from "react";
import CardStackTextBox from "../../CardStackTextBox";
import { cls } from "@/lib/utils";
import { GridLayoutProps } from "../../types";
import { gridConfigs } from "./gridConfigs";
import { useCardAnimation } from "../../hooks/useCardAnimation";

const GridLayout = ({
    children,
    itemCount,
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
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    ariaLabel,
}: GridLayoutProps) => {
    // Get config for this variant and item count
    const config = gridConfigs[gridVariant]?.[itemCount];

    // Fallback to default uniform grid if no config
    const gridColsMap = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
    };
    const defaultGridCols = gridColsMap[itemCount as keyof typeof gridColsMap] || "md:grid-cols-4";

    // Use config grid or fallback
    const gridCols = config?.grid || defaultGridCols;
    const itemClasses = config?.itemClasses || [];
    const heightClasses = uniformGridCustomHeightClasses || config?.heightClasses || "";

    const childrenArray = Children.toArray(children);
    const { itemRefs } = useCardAnimation({ animationType, itemCount: childrenArray.length });

    return (
        <section
            className={cls("w-full py-20", className)}
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
                <div
                    className={cls(
                        "grid grid-cols-1 gap-6",
                        gridCols,
                        gridClassName
                    )}
                >
                    {childrenArray.map((child, index) => {
                        const itemClass = itemClasses[index] || "";
                        const combinedClass = cls(itemClass, heightClasses);
                        return combinedClass ? (
                            <div
                                key={index}
                                className={combinedClass}
                                ref={(el) => { itemRefs.current[index] = el; }}
                            >
                                {child}
                            </div>
                        ) : (
                            <div
                                key={index}
                                ref={(el) => { itemRefs.current[index] = el; }}
                            >
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

GridLayout.displayName = "GridLayout";

export default memo(GridLayout);
