export interface ApiPost {
  author: string;
  content: string;
  title: string;
}

export interface ApiPosts {
  [id: string]: ApiPost;
}

export interface Post extends ApiPost {
  id: string;
}
