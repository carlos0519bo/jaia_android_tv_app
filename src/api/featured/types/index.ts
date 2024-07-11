import { Categories } from "../../../layouts/types";


export interface FeaturedContent {
    id:               number;
    category_id:      number;
    subcategory_id:   number;
    title:            string;
    slug:             string;
    static_image_url: string;
    content_url:      string;
    content_type:     string;
    nft_link:         string;
    featured:         number;
    created_at:       Date;
    updated_at:       Date;
    image?:           string;
    category:         Categories;
    subcategory:      Categories;
}
