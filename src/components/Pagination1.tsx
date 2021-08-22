import {Container} from 'reactstrap';

interface Props{
    postPerPage:any;
    totalPosts:any;
    paginate:any;
}

const Pagination = ({postPerPage, totalPosts, paginate}:Props) => {
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <Container>
            <nav className="flexEnd" >
                <ul className="pagination">
                    {pageNumbers.map(number=>(
                        <li key={number} className="page-item">
                            <a onClick={()=>paginate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </Container>
        
    )
}

export default Pagination