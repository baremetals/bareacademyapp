import { uploadProps } from 'types';
import { toBase64 } from "./base64";

export function cutTextToLength(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function composeArticleSlug(id: string, title: string): string {
  return `${slugify(title)}-${id}`;
}

export function extractArticleIdFromSlug(slug: string) {
  return slug.split("-").pop();
}

export const upperCase = (word: string = "talentkids") => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const handleImgChange = async ({
  event,
  setUploadImg,
  setDisplayImg,
}: uploadProps) => {
  if (!event.target.files) return;
  const image = event?.target?.files![0];
  if (image.size > 209715200) {
    return {
      error: "File size cannot exceed more than 256MB",
    };
  }
  const base64 = await toBase64(event.target.files[0]);
  setUploadImg(image);
  setDisplayImg(base64);
  return;
};
