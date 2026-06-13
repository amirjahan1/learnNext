'use server'

import { revalidatePath } from 'next/cache';
// import { cookies } from 'next/headers'
import { post } from '@/app/api';

export async function createPost(formData: FormData) {
  const title = formData.get("title")
  const body =  formData.get("body")

  await fetch(post,{
    method: "POST",
    body:  JSON.stringify({title, body}),
    headers: { 
      'Content-Type': 'application/json',
      // 'Authorization':  cookies.get("token").value
    }
  })


  revalidatePath('/posts')
}