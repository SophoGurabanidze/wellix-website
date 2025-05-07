
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you’re looking for doesn’t exist.</p>
    </div>
  );
};

export default ErrorPage;
