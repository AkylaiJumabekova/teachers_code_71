import type { ApiPost, ApiPosts, Post } from '@/types';
let baseUrl =
  'https://nopescript-default-rtdb.europe-west1.firebasedatabase.app/posts';

export async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export async function fetchPosts(): Promise<Post[]> {
  const apiPosts = await request<ApiPosts | null>(baseUrl + '.json', {
    cache: 'no-store',
  });

  if (apiPosts === null) {
    return [];
  }

  return Object.keys(apiPosts).map((id) => ({
    id,
    ...apiPosts[id],
  }));
}

export async function fetchPost(id: string): Promise<Post> {
  const response = await request<ApiPost | null>(baseUrl + `/${id}.json`, {
    cache: 'no-store',
  });

  if (response === null) {
    throw new Error('Failed to fetch');
  }

  return {
    id,
    ...response,
  };
}
