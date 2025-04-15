export default function ReviewCard({ review }) {
    return (
      <div className="flex items-start space-x-2">
        <div>
          <p className="font-bold">{review.name}</p>
          <div className="flex">
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
          </div>
          <p>{review.review}</p>
        </div>
      </div>
    );
  }