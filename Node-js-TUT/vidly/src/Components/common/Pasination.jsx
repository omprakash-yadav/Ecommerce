
import lodash from 'lodash'
const Pasination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentpage } = props



    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null;
    const pages = lodash.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentpage ? "page-item active" : "page-item"}>
                    <a className="page-link"
                        style={{ color: "blue" }} onClick={() => onPageChange(page)}>
                        {page}
                    </a>
                </li>
            ))}

        </ul>
    </nav>;
}

export default Pasination;