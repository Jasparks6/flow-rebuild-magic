const reviews = [
  {
    name: "Sarah Johnson",
    time: "2 days ago",
    text: "Albie was fantastic! He fixed our water heater quickly and explained everything clearly. Very professional and fair pricing.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Mike Rodriguez", 
    time: "4 days ago",
    text: "Outstanding service! Called for a drain cleaning emergency and they came out the same day. Quality work and they really care about the community.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Lisa Chen",
    time: "1 week ago", 
    text: "Professional, reliable, and honest. Fixed our kitchen sink leak and gave us great advice on maintenance.",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
  },
];

const ReviewsGoogle = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">What Our Customers Say</h2>
          <div className="mt-3 inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft">
            <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.3 0 6.3 1.1 8.6 3.2l6.4-6.4C35.5 2.3 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.2l7.8 6.1C12.5 13.6 17.8 9.5 24 9.5z"/>
              <path fill="#34A853" d="M24 48c6.1 0 11.3-2 15-5.3l-7.2-5.7c-2 1.3-4.6 2.1-7.8 2.1-6 0-11.1-4-12.9-9.5H3.2l-7.9 6.1C-1 44.6 10.6 48 24 48z"/>
              <path fill="#4A90E2" d="M45.7 24.5c0-1.5-.1-2.6-.4-3.8H24v7.3h12.4c-.5 3-2.1 5.5-4.6 7.2l7.2 5.7c4.2-3.9 6.7-9.7 6.7-16.4z"/>
              <path fill="#FBBC05" d="M10.9 29.6c-.5-1.4-.9-2.9-.9-4.6s.3-3.2.9-4.6l-7.8-6.1C1.1 17.5 0 20.6 0 25s1.1 7.5 3.1 10.7l7.8-6.1z"/>
            </svg>
            <span className="font-semibold">Google Reviews</span>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-muted-foreground text-sm">(4.9/5)</span>
          </div>
          <p className="mt-3 text-muted-foreground">Real reviews from real customers in your area.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <figure key={review.name} className="card p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    className="h-10 w-10 rounded-full object-cover" 
                    src={review.avatar} 
                    alt="Avatar"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.time}</div>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.3 0 6.3 1.1 8.6 3.2l6.4-6.4C35.5 2.3 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.2l7.8 6.1C12.5 13.6 17.8 9.5 24 9.5z"/>
                  <path fill="#34A853" d="M24 48c6.1 0 11.3-2 15-5.3l-7.2-5.7c-2 1.3-4.6 2.1-7.8 2.1-6 0-11.1-4-12.9-9.5H3.2l-7.9 6.1C-1 44.6 10.6 48 24 48z"/>
                  <path fill="#4A90E2" d="M45.7 24.5c0-1.5-.1-2.6-.4-3.8H24v7.3h12.4c-.5 3-2.1 5.5-4.6 7.2l7.2 5.7c4.2-3.9 6.7-9.7 6.7-16.4z"/>
                  <path fill="#FBBC05" d="M10.9 29.6c-.5-1.4-.9-2.9-.9-4.6s.3-3.2.9-4.6l-7.8-6.1C1.1 17.5 0 20.6 0 25s1.1 7.5 3.1 10.7l7.8-6.1z"/>
                </svg>
              </div>
              <div className="mt-3 text-yellow-500">★★★★★</div>
              <blockquote className="mt-3 text-sm text-muted-foreground">{review.text}</blockquote>
              <a href="#" className="mt-4 inline-block text-primary text-sm font-semibold">Read more</a>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <img 
            src="https://www.gstatic.com/images/branding/product/2x/google_g_48dp.png" 
            alt="Google" 
            className="h-5 w-5"
          />
          <a href="#" className="text-teal-600 font-semibold hover:underline">
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsGoogle;
