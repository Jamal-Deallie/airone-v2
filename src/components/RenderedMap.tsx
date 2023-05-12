import { useRef, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import cn from 'classnames';
import styles from '@/styles/components/Map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

type MapProps = { latitude: number; longitude: number };

export default function RenderedMap({ latitude, longitude }: MapProps) {
  const root = useRef<any>(null);

  return (
    <Map
      scrollZoom={false}
      //@ts-ignore
      initialViewState={{
        latitude: 32.776370,
        longitude: -96.824010,
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}>
      <Marker longitude={longitude} latitude={latitude}>
        <div className={styles['logo']}>
          <Image
            src={'/favicon-32x32.png'}
            alt='logo'
            fill
            sizes={'100vw'}
            priority
          />
        </div>
      </Marker>
    </Map>
  );
}
