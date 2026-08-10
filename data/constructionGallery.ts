import { withSiteBase } from '~/utils/withSiteBase';

export interface ConstructionGalleryItem {
  src: string;
  alt: string;
}

const PHOTO_COUNT = 127;

export const constructionGallery: ConstructionGalleryItem[] = Array.from(
  { length: PHOTO_COUNT },
  (_, index) => ({
    src: withSiteBase(`/image/gallery/photo-${String(index + 1).padStart(3, '0')}.webp`),
    alt: `Фото строительства ${index + 1}`,
  }),
);
