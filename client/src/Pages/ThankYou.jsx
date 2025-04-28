const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      <div className="bg-white p-8 rounded shadow text-center max-w-md">
        <h1 className="text-2xl font-semibold text-sky-700 mb-4">მადლობა!</h1>
        <p className="text-gray-700 mb-4">
          თქვენი მოთხოვნა მიღებულია <br /> დაგიკავშირდებით 1-2 სამუშაო დღეში.
        </p>
        <a href="/" className="text-sky-700 underline">მთავარ გვერდზე დაბრუნება</a>
      </div>
    </div>
  );
};

export default ThankYou;
