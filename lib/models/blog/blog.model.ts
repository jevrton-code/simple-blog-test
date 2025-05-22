import { CategoryModel } from "../category/category.model";

export interface BlogModel {
  id: number;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  category: CategoryModel;
}
