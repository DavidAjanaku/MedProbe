import { Link } from 'react-router-dom';
// import pageNotFound from '/public/assets/illustrations/404.jpeg'

function ErrorPage() {
  return (
    <div className=''>
      <h1 className='text-5xl'>Oops! Something went wrong.</h1>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
      <p>Click <Link to="/">here</Link> to go back to the homepage.</p>
    </div>
  );
}

export default ErrorPage;
