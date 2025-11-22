"use client";

import { memo, useMemo } from "react";
import TextAnimation from "./text/TextAnimation";
import Button from "./button/Button";
import Tag from "./shared/Tag";
import AvatarGroup from "./shared/AvatarGroup";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { LucideIcon } from "lucide-react";
import type { AnimationType } from "./text/types";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";
import type { Avatar } from "./shared/AvatarGroup";

interface TextBoxProps {
  title: string;
  description: string;
  type?: AnimationType;
  textboxLayout?: "default" | "split" | "split-actions" | "split-description";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  duration?: number;
  start?: string;
  end?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
  children?: React.ReactNode;
  center?: boolean;
  tag?: string;
  tagIcon?: LucideIcon;
  tagClassName?: string;
  buttons?: ButtonConfig[];
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  avatars?: Avatar[];
  avatarText?: string;
  avatarGroupClassName?: string;
}

const TextBox = ({
  title,
  description,
  type,
  textboxLayout = "default",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  duration = 1,
  start = "top 80%",
  end = "top 20%",
  gradientColors,
  children,
  center = false,
  tag,
  tagIcon: TagIcon,
  tagClassName = "",
  buttons,
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  avatars,
  avatarText,
  avatarGroupClassName = "",
}: TextBoxProps) => {
  const theme = useTheme();

  // Shared tag component
  const tagElement = useMemo(() => tag && (
    <Tag
      text={tag}
      icon={TagIcon}
      className={cls(textboxLayout === "default" && "mb-3", tagClassName)}
    />
  ), [tag, TagIcon, textboxLayout, tagClassName]);

  // Shared title component
  const titleElement = useMemo(() => (
    <TextAnimation
      type={type || theme.defaultTextAnimation}
      text={title}
      variant="trigger"
      as="h2"
      className={cls(
        textboxLayout === "split" || textboxLayout === "split-actions" || textboxLayout === "split-description" ? "text-7xl font-medium text-balance" : "text-6xl font-medium",
        center && textboxLayout === "default" && "text-center",
        titleClassName
      )}
      duration={duration}
      start={start}
      end={end}
      gradientColors={gradientColors}
    />
  ), [type, theme.defaultTextAnimation, title, textboxLayout, center, titleClassName, duration, start, end, gradientColors]);

  // Shared description component
  const descriptionElement = useMemo(() => (
    <TextAnimation
      type={type || theme.defaultTextAnimation}
      text={description}
      variant="words-trigger"
      as="p"
      className={cls(
        "text-lg leading-[1.2]",
        center && textboxLayout === "default" && "text-center",
        (textboxLayout === "split" || textboxLayout === "split-description") && "text-balance",
        descriptionClassName
      )}
      duration={duration}
      start={start}
      end={end}
      gradientColors={gradientColors}
    />
  ), [type, theme.defaultTextAnimation, description, center, textboxLayout, descriptionClassName, duration, start, end, gradientColors]);

  // Shared avatars component
  const avatarsElement = useMemo(() => avatars && avatars.length > 0 ? (
    <AvatarGroup
      avatars={avatars}
      text={avatarText}
      className={cls(
        textboxLayout === "default" && "mt-3",
        center && textboxLayout === "default" && "justify-center",
        avatarGroupClassName
      )}
    />
  ) : null, [avatars, avatarText, textboxLayout, center, avatarGroupClassName]);

  // Shared buttons/children component
  const actionsElement = useMemo(() => buttons && buttons.length > 0 ? (
    <div className={cls(
      "flex gap-4",
      textboxLayout === "default" && "w-full mt-3",
      (textboxLayout === "split" || textboxLayout === "split-actions") && "w-fit",
      center && textboxLayout === "default" && "justify-center",
      buttonContainerClassName
    )}>
      {/* Limit to 2 buttons for optimal layout */}
      {buttons.slice(0, 2).map((button, index) => (
        <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
      ))}
    </div>
  ) : (
    children
  ), [buttons, textboxLayout, center, buttonContainerClassName, theme.defaultButtonVariant, buttonClassName, buttonTextClassName, children]);

  // Split layout
  if (textboxLayout === "split") {
    return (
      <div className={cls("flex flex-col md:flex-row gap-3 md:gap-15 md:items-end", className)}>
        <div className="w-full md:w-6/10 flex flex-col gap-3">
          {tagElement}
          {titleElement}
          {descriptionElement}
        </div>
        <div className="w-full md:w-4/10 flex flex-col gap-3 md:items-end">
          {actionsElement}
        </div>
      </div>
    );
  }

  // Split actions layout - tag and buttons required, no description
  if (textboxLayout === "split-actions") {
    return (
      <div className={cls("flex flex-col md:flex-row gap-3 md:gap-15 md:items-end", className)}>
        <div className="w-full md:w-6/10 flex flex-col gap-3">
          {tagElement}
          {titleElement}
        </div>
        <div className="w-full md:w-4/10 flex flex-col gap-3 md:items-end">
          {actionsElement}
        </div>
      </div>
    );
  }

  // Split description layout - tag + title left, description only right (no buttons)
  if (textboxLayout === "split-description") {
    return (
      <div className={cls("flex flex-col md:flex-row gap-3 md:gap-15 md:items-end", className)}>
        <div className="w-full md:w-6/10 flex flex-col gap-3">
          {tagElement}
          {titleElement}
        </div>
        <div className="w-full md:w-4/10 flex flex-col gap-3 md:items-end">
          {descriptionElement}
        </div>
      </div>
    );
  }

  // Default layout
  return (
    <div className={cls("flex flex-col gap-3 md:gap-1", center && "items-center text-center", className)}>
      {tagElement}
      {titleElement}
      {descriptionElement}
      {actionsElement}
      {avatarsElement}
    </div>
  );
};

TextBox.displayName = "TextBox";

export default memo(TextBox);