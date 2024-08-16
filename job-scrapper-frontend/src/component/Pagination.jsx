

export default function Pagination({ pagee, cityy}) {

  
    return (
      <nav
        aria-label="Pagination"
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{1 + (50*pagee.number)}</span> to <span className="font-medium">{ (50*(pagee.number+1)) > pagee.totalElements ? pagee.totalElements : 50*(pagee.number+1)}</span> of{' '}
            <span className="font-medium">{pagee.totalElements}</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
        <p className="text-sm text-gray-700 mt-2 mr-2">
            Page <span className="font-medium">{pagee.number+1}</span> from <span className="font-medium">{pagee.totalPages}</span>
            <span className="font-medium"></span> Pages
          </p>
          <a
          
            href={`/page/${pagee.number > 0 ? pagee.number:pagee.number+1}${cityy?`/filter/${cityy}`:``}`}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </a>
          <a
            href={`/page/${pagee.number < pagee.totalPages-1 ? pagee.number+2:pagee.number+1}${cityy?`/filter/${cityy}`:``}`}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </a>
        </div>
      </nav>
    )
  }