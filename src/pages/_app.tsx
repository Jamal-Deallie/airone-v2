import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import ViewPortHeight from '@/components/ViewPortHeight';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { useStore } from '@/lib/store';
import 'blaze-slider/dist/blaze.css';
import '@/styles/base/globals.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
//@ts-ignore
import { raf } from '@studio-freight/tempus';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' });
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  raf.add((time: number) => {
    gsap.updateRoot(time / 1000);
  }, 0);
}

export default function App({ Component, pageProps }: AppProps) {
  const lenis = useLenis((lenis: any) => lenis);
  const navIsOpened = useStore(({ navIsOpened }) => navIsOpened);

  function ScrollListener() {
    useLenis((lenis: { scroll: number }) => {
      console.log('Current scroll position', scroll);
    });

    return null;
  }

  useEffect(() => {
    if (navIsOpened) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, navIsOpened]);

  useIsomorphicLayoutEffect(() => {
    if (lenis) ScrollTrigger.refresh();
  }, [lenis]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  ScrollListener();
  return (
    <ReactLenis root>
      <Layout>
        <ViewPortHeight />
        <Component {...pageProps} />
      </Layout>
    </ReactLenis>
  );
}
