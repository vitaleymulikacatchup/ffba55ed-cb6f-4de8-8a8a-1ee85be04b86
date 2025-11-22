"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

export interface MediaItem {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface HeroBillboardCornersProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  mediaItems: MediaItem[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  imageClassName?: string;
}

const HeroBillboardCorners = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  mediaItems,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  imageClassName = "",
}: HeroBillboardCornersProps) => {
  const cornerImages = mediaItems?.slice(0, 4) || [];

  const cornerPositions = [
    { position: "top-5 left-0 md:top-0 md:left-10", rotation: "-rotate-12" },
    { position: "top-5 right-0 md:top-0 md:right-10", rotation: "rotate-12" },
    { position: "bottom-5 left-0 md:bottom-0 md:left-10", rotation: "rotate-12" },
    { position: "bottom-5 right-0 md:bottom-0 md:right-10", rotation: "-rotate-12" },
  ];

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative w-full h-svh overflow-hidden", className)}
    >
      <div className={cls("relative w-content-width mx-auto h-full flex items-center justify-center", containerClassName)}>
        <TextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          buttons={buttons}
          className={cls("flex flex-col gap-3 md:gap-1 z-10", textBoxClassName)}
          titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
          descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
          tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
          buttonContainerClassName={cls("flex gap-4 mt-3", buttonContainerClassName)}
          buttonClassName={buttonClassName}
          buttonTextClassName={buttonTextClassName}
          center={true}
        />

        <div className="absolute inset-0 py-hero-page-padding">
          <div className="relative w-full h-full" >
            {cornerImages.map((item, index) => (
              <div
                key={index}
                className={cls(
                  "!absolute w-35 md:w-15 scale-90 aspect-square overflow-hidden rounded-theme-capped card p-2 shadow-lg transition-transform duration-500 ease-out hover:scale-110 hover:z-20",
                  cornerPositions[index]?.position,
                  cornerPositions[index]?.rotation
                )}
              >
                <MediaContent
                  imageSrc={item.imageSrc}
                  videoSrc={item.videoSrc}
                  imageAlt={item.imageAlt || ""}
                  videoAriaLabel={item.videoAriaLabel || "Corner media"}
                  imageClassName={cls("h-full object-cover", imageClassName)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroBillboardCorners.displayName = "HeroBillboardCorners";

export default memo(HeroBillboardCorners);
