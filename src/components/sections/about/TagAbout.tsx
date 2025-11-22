"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import { cls } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

interface TagAboutProps {
  tag: string;
  description: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  tagClassName?: string;
  descriptionClassName?: string;
}

const TagAbout = ({
  tag,
  description,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  tagClassName = "",
  descriptionClassName = "",
}: TagAboutProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full py-20", className)}
    >
      <div className={cls("w-content-width mx-auto relative overflow-hidden", containerClassName)}>
        <p className={cls("inline-block mr-15 text-base md:text-xl text-accent/75", tagClassName)}>
          {tag}
        </p>
        <TextAnimation
          type={theme.defaultTextAnimation}
          text={description}
          variant="words-trigger"
          as="span"
          className={cls(" !inline text-2xl md:text-5xl font-medium leading-[1.15]", descriptionClassName)}
        />
      </div>
    </section>
  );
};

TagAbout.displayName = "TagAbout";

export default memo(TagAbout);
