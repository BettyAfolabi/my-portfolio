import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const response = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devduchess"
            );
            const data = await response.json();
            setBlogs(data.items);
        } catch (error) {
            console.error("Error fetching Medium RSS feed:", error);
        }
    };

    fetchBlogs();
  }, []); 

  const extractImage = (content) => {
    const imgRegex = /<img.*?src=["'](.*?)["']/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
  };

  const extractSnippet = (content) => {
    let textOnly = content.replace(/<[^>]*>?/gm, "");
    textOnly = textOnly.replace(/\n+/g, " ").trim();
    const sentences = textOnly.split(". ");
    return sentences.length > 1 ? sentences.slice(1).join(". ").substring(0, 100) + "..." : textOnly.substring(0, 100) + "...";
  };


  
  return (
    <div className="pt-32 lg:pt-40 bg-[#0f1616] min-h-screen">
      <div className="w-5/6 max-w-6xl mx-auto pb-10">
        <h2 className="text-3xl text-center lg:text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
          What I'm writing about
        </h2>

        <p className="text-lg text-gray-200 my-3 text-center lg:mt-10">
          Documenting my tech journey, one blog at a time 🚀
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => {
              const imageUrl =
                blog.thumbnail ||
                extractImage(blog.content) ||
                "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*fWmtnvsF2HV6AQSMQNirqg.jpeg"; 

              return (
                <div
                  key={index}
                  className="bg-green/10 rounded-3xl shadow-3xl overflow-hidden flex flex-col justify-between h-[450px] md:h-[500px]"
                >
                  {/* Uniform Image Height */}
                  <img
                    src={imageUrl}
                    alt={blog.title}
                    className="w-full h-[220px] md:h-[260px] object-cover"
                  />
                  
                  <div className="px-6 lg:px-10 lg:pb-10 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold py-5">
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-xl md:text-3xl md:leading-9 font-semibold hover:underline"
                        >
                          {blog.title}
                        </a>
                      </h3>
                      <p className="text-lightgray text-sm">{blog.pubDate}</p>
                      <p className="text-lightgray mt-3 line-clamp-3">
                        {extractSnippet(blog.content)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-lightgray text-base lg:text-2xl font-medium">
              Loading blogs...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;