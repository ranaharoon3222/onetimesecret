// 'use client';

export const revalidate = 0;

import { client } from '@/lib/directus';
import { notFound } from 'next/navigation';
import { readItem, readItems } from '@directus/sdk';

async function getPage(slug) {
  try {
    const page = await client.request(readItem('secrets', slug));
    return page;
  } catch (error) {
    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);

  console.log(page, params);

  return (
    <>
      <div>test</div>

      <div>{page.secret}</div>
      <div>{page.lifetime}</div>
      <div>{page.password}</div>
    </>
  );
}
