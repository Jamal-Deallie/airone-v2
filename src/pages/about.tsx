import About from '@/containers/About';
import Team from '@/containers/Team';
import Awards from '@/containers/Awards';
import SEO from '@/components/SEO';
import { SEOResults as Results } from '../../types/typings';

type PageProps = { seo?: Results };

export default function AboutPage({ seo }: PageProps) {
  return (
    <>
      <SEO {...seo} />
      <About />
      <Team />
      <Awards />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'about',
    },
  };
}
