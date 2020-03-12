import React from 'react';

// function based react jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const Pagination = ({currentPageNumber,totalPage,previousDisabled,nextDisabled,handlePrevious,handleNext,hendleJump}) => {

	const generatePagination = () => {
		const pages = []
		for (let i = 1; i <= totalPage; i++) { // need solve pppppppppppppppppppppppppppppp
			const li = (
				<li key={i} className={`page-item ${currentPageNumber === i ? 'active' : ''}`} >
					<button 
						className="page-link" 
						// style={{backgroundColor: currentPageNumber === i ? '#343a40' : '#ffffff' }} // inline vabe className er css ke over write korte ge jodi logic use kori ei way // normaly ba logic jekunu vabei kora jay 
						onClick={() => hendleJump(i)} 
					>{i}</button>
				</li>
			);
			pages.push(li);
		}
		return pages;
	};

	return(
		<div  className='d-flex justify-content-between' >
			<div>
				<button 
					className='btn btn-dark'
					disabled={previousDisabled}
					onClick={handlePrevious} 
				> Previous </button>

			</div>

			<div className='align-items-center'>
				<nav aria-label="Page navigation example">
  					<ul className="pagination">
  						{generatePagination()}
  					</ul>
				</nav>
			</div>
			<div>
				<button 
					className='btn btn-dark' 
					disabled={nextDisabled}
					onClick={handleNext} 
				> Next </button>
			</div>
		</div>
	);
};
export default Pagination;