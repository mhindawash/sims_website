import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";

type Review = {
    id: string;
    name: string;
    content: string;
    rating: number;
}

const Reviews: React.FC = () => {
  const [review, setReview] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    if (savedReviews) {
      setReviews(savedReviews);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && review) {
      const newReview = { id: `${Date.now()}-${reviews.length}`, name, content: review, rating };
      const newReviews = [newReview, ...reviews];
      setReviews(newReviews);
      localStorage.setItem('reviews', JSON.stringify(newReviews));
      setReview('');
      setName('');
      setRating(0);
    } else {
      alert("Please fill in all fields before submitting");
    }
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-transparent p-4 lg:p-10 overflow-hidden my-5">
      <div className="lg:w-1/2 p-4 lg:pr-10 mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name:</label>
            <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block">Review:</label>
            <textarea rows={5} value={review} onChange={e => setReview(e.currentTarget.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block">Rating:</label>
            <ReactStars
              count={5}
              value={rating}
              onChange={(newRating: number) => setRating(newRating)}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>
      <div className="lg:w-1/2 p-4 lg:pl-10 flex flex-col">
        <h2 className="text-2xl mb-4">Reviews</h2>
        <div className="overflow-auto flex-grow space-y-4 h-64">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded space-y-2 mb-4 bg-white">
              <div>
                <strong>{review.name}</strong>
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
              <div>{review.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews;

