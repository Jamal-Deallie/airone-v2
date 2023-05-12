import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import PaginatedPage from '@/containers/PaginatedPage';
import { useRouter } from 'next/router';
import { AdData, PageData } from '../../types/typings';

interface Props {
  data: AdData[];
  meta: PageData;
}

export default function Work({ data, meta }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.page === '1') {
      router.replace('/work');
      router.push({ pathname: '/work' });
    }
  }, [router]);

  if (data.length) {
  }
  return (
    <>
      {data.length ? (
        <PaginatedPage data={data} meta={meta} />
      ) : (
        <div>
          <p>Error</p>
        </div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const page = Number(context?.query?.page) || 1;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&pagination[page]=${page}&pagination[pageSize]=12`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  if (!response.data.length) {
    return { notFound: true };
  }

  return {
    props: {
      data: response.data,
      meta: response.meta,
    },
  };
};
