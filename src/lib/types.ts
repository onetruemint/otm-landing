export interface Project {
  id: string;
  name: string;
  description: string | null;
  link: string | null;
  image_url: string | null;
  pinned: boolean;
  display_order: number;
  created_at: string;
}
