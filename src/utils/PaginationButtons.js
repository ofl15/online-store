import React from 'react'

const PaginationButtons = () => {
  return (
    <nav className=' pagination is-centered' role='navigation' aria-label='pagination'>
        <button 
            className={`pagination-previous button
            ${page - 1 <= 0 ? 'is-warning' : 'is-success'}`}
            onClick={()=> setPage(page - 1)}
            disabled={page - 1 <= 0}
            style={{textDecoration: 'none'}}>
            <ion-icon name="arrow-back-outline" size="large" />
        </button>
        <button 
            className={`pagination-previous button
            ${page >= pageCount ? 'is-warning' : 'is-success'}`}
            onClick={()=> setPage(page + 1)}
            disabled={page >= pageCount}
            style={{textDecoration: 'none'}}>
            <ion-icon name="arrow-back-outline" size="large" />
        </button>
    </nav>
  )
}

export default PaginationButtons