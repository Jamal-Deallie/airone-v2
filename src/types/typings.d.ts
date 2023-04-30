export interface SEOResults {
  title?: string;
  description?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  keywords?: string | undefined;
}

export interface ClientList {
  id: number;
  client: string;
}

export interface PageData {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface AdData {
  id: number;
  title: string;
  desc: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  industry?: string;
  brand: string;
  image: string;
  image_width: string;
  image_height: string;
}
