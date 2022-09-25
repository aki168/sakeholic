import { useState, useEffect } from 'react'
import axios from 'axios'
import { Pagination, CircularProgress } from '@mui/material'
import ControlledAccordions from './ControlledAccordions'

const SakeTable = ({currentPost, totalItems, perPage, pageHandler, loading, currentpage}) => {

  // const PaginationWrap = ({currentPage}) => {
  //   return(
  //     <Pagination
  //       size="small"
  //       className='d-flex justify-content-end'
  //       count={Math.floor(totalItems / perPage) + 1}
  //       shape="rounded"
  //       onChange={pageHandler}
  //       // currentPage={currentPage}
  //       // setCurrentPage={setCurrentPage}
  //       showLastButton />
  //   )
  // }

  return (
    <main className='mb-5'>
      <div className='mb-4'>
        {/* {
          loading ?
            <div className='vh-100'>
              <CircularProgress
                size="64px"
                color="error"
                className='d-block mx-auto'
              />
            </div>
            : ( */}
              <>
                <div className='row fw-bold mt-3 my-1 bg-light text-dark py-1'>
                  <p className='col-4 text-center my-2'>酒款名稱</p>
                  <p className='col-4 text-center my-2'>酒藏名稱</p>
                  <p className='col-4 text-center my-2'>地區</p>
                </div>
                <ControlledAccordions currentPost={currentPost} />
              </>
            {/* ) */}
        {/* } */}
      </div>
        <Pagination
        size="small"
        className='d-flex justify-content-end'
        count={Math.floor(totalItems / perPage)}
        shape="rounded"
        onChange={pageHandler}
        currentpage={currentpage}
        showLastButton />

      {/* <PaginationWrap currentPage={currentPage}/> */}
    </main>
  )
}

export default SakeTable