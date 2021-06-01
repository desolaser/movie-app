import React from 'react'

const BottomToolbar = ({ page, setPage, totalPages }) => {
  return (
    <div className="bg-dark row justify-content-center">
      {page !== 1 && (
        <>
          <button 
            className="btn btn-primary m-2" 
            onClick={() => setPage(1)}
          >
            {'<<'}
          </button>
          <button
            className="btn btn-primary m-2" 
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        </>
      )}
      {page !== totalPages && (
        <>
          <button 
            className="btn btn-primary m-2" 
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
          <button 
            className="btn btn-primary m-2" 
            onClick={() => setPage(totalPages)}
          >
            {'>>'}
          </button>
        </>
      )}
    </div>
  )
}

export default BottomToolbar
