// utils/getImageUrl.ts
const horseImages = import.meta.glob("../../horseImg/*.jpg", {
  eager: true,
}) as Record<string, { default: string | { src: string } }>;
const teamImages = import.meta.glob("../../teamImg/*.jpg", {
  eager: true,
}) as Record<string, { default: string | { src: string } }>;

const resolveImageSrc = (image: string | { src: string }): string => {
  return typeof image === "string" ? image : image.src;
};

export const getImageUrl = (
  folder: "horseImg" | "teamImg",
  fileName: string,
): string => {
  let images: Record<string, { default: string | { src: string } }>;

  if (folder === "horseImg") {
    images = horseImages;
  } else {
    images = teamImages;
  }

  const imageKey = Object.keys(images).find((key) => key.endsWith(fileName));
  return imageKey ? resolveImageSrc(images[imageKey].default) : "";
};
