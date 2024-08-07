export interface Subcategory {
  id:          number;
  category_id: number;
  title:       string;
  slug:        string;
  is_active:   number;
  created_at:  Date;
  updated_at:  Date;
  image:       string;
}
