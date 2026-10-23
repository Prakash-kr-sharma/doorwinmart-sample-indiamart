export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  iconName: string;
  subCategories: SubCategory[];
  featured?: boolean;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  subCategory: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  materials: string[];
  openingStyle?: string;
  applications: string[];
  dimensionsSample?: string;
  finishOptions: {
    name: string;
    colorCode: string;
  }[];
  specifications: ProductSpecification[];
  images: string[];
  isFeatured?: boolean;
  tags?: string[];
  samplePriceRange?: string; // Formatted as "Request Price"
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  projectType: 'residential' | 'commercial' | 'renovation' | 'other';
  categorySlug: string;
  productSlug?: string;
  quantity?: string;
  dimensions?: string;
  materialPreference?: string;
  message?: string;
}
