export interface Portfolio {
  id:            number;
  photo?:        string;
  title:         string;
  skill:         string[];
  description?:  string;
  date_project:  string;
  observation?:  string;
  link_github?:  string;
  link_website?: string;
  is_active:     boolean;
}


