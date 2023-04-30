import Slider from '@/components/Slider';
import styles from '@/styles/containers/Team.module.scss';
type Props = {};

export default function Team({}: Props) {
  return (
    <div className='br-t bg-primary padx'>
      <div className='grid-inner'>
        <div className='title-center'>
          <h1 className='title-quaternary'>The</h1>
          <h1 className='title-quaternary'>Team</h1>
        </div>

      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}
