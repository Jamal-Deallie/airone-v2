import Faqs from '@/containers/Faqs';
import CTA from '@/containers/CTA';
import Clients from '@/containers/Clients';
import Services from '@/containers/Services';
import Founder from '@/containers/Founder';
import Description from '@/containers/Description';
import NotableWork from '@/containers/NotableWork';
import Hero from '@/containers/Hero';

type Props = {};

export default function home({}: Props) {
  return (
    <>
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
