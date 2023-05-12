import Faqs from '@/containers/Faqs';
import CTA from '@/containers/CTA';
import Clients from '@/containers/Clients';
import Services from '@/containers/Services';
import Founder from '@/containers/Founder';
import Description from '@/containers/Description';
import NotableWork from '@/containers/NotableWork';
import Hero from '@/containers/Hero';
import SEO from '@/components/SEO';
import { SEOResults as Results } from '../../types/typings';

type PageProps = { seo?: Results };

export default function home({ seo }: PageProps) {
  return (
    <>
      <SEO {...seo} />
      <Hero />
      <Description />
      <Clients />
      <Services />
      <Founder />
      <NotableWork />
      <Faqs />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    },
  };
}
