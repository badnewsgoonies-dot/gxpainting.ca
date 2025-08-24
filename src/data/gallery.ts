// FIXED gallery.ts with proper leading slashes in paths
export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  title?: string;
  subtitle?: string;
  alt?: string;
};

export const items: GalleryItem[] = [
  {
    "src": "/photos/gx-1.webp",
    "width": 1152,
    "height": 768,
    "title": "Office Windows"
  },
  {
    "src": "/photos/gx-2.webp",
    "width": 1024,
    "height": 768,
    "title": "Warehouse Floor"
  },
  {
    "src": "/photos/gx-3.webp",
    "width": 1064,
    "height": 768,
    "title": "Smile Design Reception"
  },
  {
    "src": "/photos/gx-4.webp",
    "width": 1365,
    "height": 768,
    "title": "Office Corridor"
  },
  {
    "src": "/photos/gx-5.webp",
    "width": 1151,
    "height": 768,
    "title": "Salvaggio Dentistry"
  },
  {
    "src": "/photos/gx-6.webp",
    "width": 1000,
    "height": 667,
    "title": "Residential Staircase"
  }
];
