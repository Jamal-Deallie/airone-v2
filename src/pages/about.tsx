import About from '@/containers/About';
import Team from '@/containers/Team';
import Awards from '@/containers/Awards';

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <>
      <About />
      <Team />
      <Awards />
    </>
  );
}
