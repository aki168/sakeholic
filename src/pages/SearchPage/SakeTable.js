import { Pagination } from '@mui/material'
import ControlledAccordions from '@COM/ControlledAccordions'

const SakeTable = ({ currentPost, totalItems, perPage, pageHandler, currentPage }) => {

  return (
    <main className='mb-5'>
      <div className='mb-4'>
        <div className='row fw-bold mt-3 my-1 bg-light text-dark py-1'>
          <p className='col-4 text-center my-2'>酒款名稱</p>
          <p className='col-4 text-center my-2'>酒藏名稱</p>
          <p className='col-4 text-center my-2'>地區</p>
        </div>
        <ControlledAccordions currentPost={currentPost} />
      </div>
      <Pagination
        size="small"
        className='d-flex justify-content-end'
        count={Math.floor(totalItems / perPage) === 0 ? 1 : Math.floor(totalItems / perPage)}
        shape="rounded"
        onChange={pageHandler}
        currentPage={currentPage}
        showLastButton />
    </main>
  )
}

export default SakeTable