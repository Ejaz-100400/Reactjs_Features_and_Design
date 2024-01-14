import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function InfiniteScrollView() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${page}`);
        const datai = response.data;
        setData((prev) => [...prev, ...datai]);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <h1 className='text-center p-5'>Infinite Scroll</h1>
      <ul className='d-flex flex-wrap gap-3 list-unstyled justify-content-center'>
        {data.map((post) => (
          <li key={post.id}>
            <Card style={{ width: '340px',height:'100px' }} className='d-flex align-items-center justify-content-center'>
              <Card.Body>
                <Card.Title className='text-center'>{post.title}</Card.Title>
                {/* Assuming "post" object has a "title" property */}
                {/* Add your image logic here */}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      {loading && (
          <div className='d-flex align-items-center justify-content-center' style={{height:'200px'}}>
            <span class="loader"></span>
          </div>
        )}
    </div>
  );
}
