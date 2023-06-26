import React, { useState, useEffect } from 'react'
import ReactStars from "react-rating-stars-component";

type Review = {
  name: string;
  content: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    if (savedReviews.length > 0) {
      setReviews(savedReviews);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReviews = [{name, content, rating}, ...reviews];
    setReviews(newReviews);
    localStorage.setItem('reviews', JSON.stringify(newReviews));
    setName('');
    setContent('');
    setRating(0);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 pt-20 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 bg-white p-6 rounded shadow-md w-full lg:w-1/2">
        <h2 className="text-2xl mb-4">Leave us a review:</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.currentTarget.value)} className="w-full p-2 border border-gray-300 rounded"/>
        <textarea placeholder="Your Review" value={content} onChange={e => setContent(e.currentTarget.value)} className="w-full p-2 border border-gray-300 rounded h-20"/>
        <ReactStars
          count={5}
          onChange={setRating}
          size={24}
          activeColor="#ffd700"
        />
        <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded"/>
      </form>
      <div className="bg-white p-6 rounded shadow-md w-full lg:w-1/2 overflow-auto">
        <div>
          <h2 className="text-2xl mb-4">Most Recent Review</h2>
          {reviews[0] && 
            <>
              <h3 className="text-lg font-semibold">{reviews[0].name} - {Array(reviews[0].rating).fill('⭐').join('')}</h3>
              <p>{reviews[0].content}</p>
            </>
          }
        </div>
        <div>
          <h2 className="text-2xl mt-10 mb-4">All Reviews</h2>
          {reviews.map((review, index) => 
            index !== 0 && (
              <div key={index} className="mt-4 border-t pt-4">
                <h3 className="text-lg font-semibold">{review.name} - {Array(review.rating).fill('⭐').join('')}</h3>
                <p>{review.content}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Reviews;

