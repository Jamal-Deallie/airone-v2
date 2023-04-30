import { useRouter } from 'next/router';
import usePagination from '../hooks/usePagination';
import styles from '@/styles/components/Pagination.module.scss';

export type PaginationProps = {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  renderPageLink: (page: number) => string;
  itemsPerPage?: number;
};

export const dotts = '...';

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage,
  renderPageLink,
  totalPages,
}: PaginationProps) => {
  const pages = usePagination(currentPage, totalPages);
  const router = useRouter();

  function paginationFunc(num: any) {
    if (num === 1 && router.asPath === '/work') return;

    if (num === 1) {
      router.push(`/work`);
    } else {
      router.push(`/work?page=${num}`);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        {pages.map((pageNumber, i) =>
          pageNumber === dotts ? (
            <span key={i}>{pageNumber}</span>
          ) : (
            <button
              key={i}
              className='btn-secondary'
              onClick={() => paginationFunc(pageNumber)}>
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
