import { post } from '@/app/api';
export async function getPosts() {
  const res = await fetch(post, {
    cache: 'no-store',
  });

  return res.json();
}




