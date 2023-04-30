import styles from '@/styles/containers/PaginationPage.module.scss';
import Pagination from '@/components/Pagination';
import Card from '@/components/AdCard';
import { PageData, AdData } from '@/types/typings';
import cn from 'classnames';

interface Props {
  data: AdData[];
  meta: PageData;
}
const PaginatedPage = ({ data, meta }: Props) => {
  return (
    <div className={cn(styles['paginated-page'])}>
      <div className='grid-inner'>
        <div>
          <h1 className='title-quaternary'>Our</h1>
          <h1 className='title-quaternary'>Work</h1>
        </div>

        <div className='desc-left'>
          <p id='lines'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labori nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={cn('main-cont', styles['ads'])}>
        <div className={styles.grid}>
          {data.map(
            ({ title, image, id, brand, slug, image_width, image_height }) => {
              return (
                <Card
                  key={id}
                  title={title}
                  image={image}
                  brand={brand}
                  slug={slug}
                  image_width={image_width}
                  image_height={image_height}
                />
              );
            }
          )}
        </div>
        <Pagination
          totalItems={meta.pagination.total}
          currentPage={meta.pagination.page}
          itemsPerPage={meta.pagination.pageSize}
          totalPages={meta.pagination.pageCount}
          renderPageLink={page => `/work?=${page}`}
        />
      </div>
    </div>
  );
};

export default PaginatedPage;
