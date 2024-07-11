export interface Categories {
    id:             number;
    title:          string;
    slug:           string;
    is_active:      number;
    created_at:     Date;
    updated_at:     Date;
    subcategories?: Categories[];
    category_id?:   number;
    image?:         string;
    static_image_url?: string;
    content_url?:   string;
    category?:      Categories;
    subcategory?:   Categories;
}


export interface BannerData {
    id:         number;
    title:      string;
    image:      string;
    is_active:  number;
    link:       string;
    created_at: Date;
    updated_at: Date;
}
