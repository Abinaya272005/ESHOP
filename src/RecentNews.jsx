import React from "react";
import swatch from './assets/swatch.jpg';
import vr from './assets/vr.jpg';
import laptop from './assets/laptop.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function RecentNews() {
  const blogPosts = [
    {
      id: 1,
      title: "How to choose perfect Smart Watch",
      author: "Dilshad",
      date: "Jan 20, 2024",
      image: swatch,
      desc: "Discover the top-rated smartwatches of the year and what features matter most to you.",
    },
    {
      id: 2,
      title: "Best Budget Laptop for Creators",
      author: "Sathya",
      date: "Jan 20, 2024",
      image: laptop,
      desc: "From performance to design, we breakdown the best value laptops for creators in 2024.",
    },
    {
      id: 3,
      title: "The future of VR: What's Coming Next?",
      author: "Sabir",
      date: "Jan 20, 2024",
      image: vr,
      desc: "Virtual Reality is changing the way we game, learn, and connect. Here's what’s next.",
    },
  ];

  return (
    <section  data-aos="fade-up"className="py-12 px-4 bg-white">
      <div className="text-center .">
        <h2 className="text-2xl font-bold text-gray-800">Recent News</h2>
        <h4 className="text-xl font-bold text-gray-500 mb-5">
          Explore our Blog Posts
        </h4>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={post.image}

              alt={post.title}
              className="h-50 w-100  object-cover rounded-t-lg"
            />
            <div className="p-4 text-left">
              <p className="text-sm text-gray-400 mb-1">
                {post.date} by {post.author}
              </p>
              <h3 className="text-md font-bold text-gray-800 mb-1">
                {post.title}
              </h3>
              <p className="text-md text-gray-600">{post.desc}</p>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentNews;