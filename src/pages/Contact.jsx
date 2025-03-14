import useSWR from "swr";
import { RevealOnScroll } from "../components/RevealOnScroll";

// Fetcher function for SWR with CORS proxy
const fetcher = async (url) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Cookie': 'cf_clearance=1g0CQpjVIQ0frTFZ3uPcq...'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Fetched data:", data); // Log the fetched data
  return data;
};

export const Contact = () => {
  // Fetch data from an API using a CORS proxy
  const { data, error } = useSWR(
    'https://cors-anywhere.herokuapp.com/https://mosesngeth.com/wp-json/wp/v2/posts',
    fetcher
  );

  if (error) {
    console.error("Error fetching data:", error);
    return <p className="text-red-500">Failed to load data</p>;
  }

  if (!data) {
    console.log("Loading data...");
    return <p className="text-gray-500">Loading...</p>;
  }

  console.log("Rendering component with data...");

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Fetch Data
          </h2>

          {/* Displaying fetched data */}
          <ul className="space-y-4">
            {data.slice(0, 5).map((post) => (
              <li key={post.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg">{post.title.rendered}</h3>
                <p className="text-gray-600">{post.date}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
};