const LatestArticles = () => {
    const articles = [
      {
        title: "Oxygen-modulated photoresponse in nickel oxide thin films for wide band gap photodetector application",
        authors: "Swati Suman, Anupama Behra, Parasuraman Swaminathan",
        date: "15 January 2025",
        articleId: 84,
        imageUrl: "https://placehold.co/600x400/png", // Placeholder for the article image
      },
      {
        title: "Research on the confinement mechanism and calculation method of axial load-bearing capacity of steel-reinforced concrete-filled square steel tubular columns",
        authors: "Cong Peng, Deprizon Syamsunur, Zhiming Zhang",
        date: "15 January 2025",
        articleId: 82,
        imageUrl: "https://placehold.co/600x400/png", // Placeholder for the article image
      },
      {
        title: "Adapting to climate change and multi-risk governance: toward sustainable adaptation and enhancing urban resilience—Indonesia",
        authors: "Abdillah Abdillah, Ida Widianingsih, Heru Nurasa",
        date: "15 January 2025",
        articleId: 81,
        imageUrl: "https://placehold.co/600x400/png", // Placeholder for the article image
      },
      {
        title: "Finite element modelling and indirect tensile strength of SBS and CR modified asphalt mixtures",
        authors: "Mohammad Fahad, Richard Nagy",
        date: "15 January 2025",
        articleId: 80,
        imageUrl: "https://placehold.co/600x400/png", // Placeholder for the article image
      },
      {
        title: "Spectral efficiency and secrecy enhancing scheme for IRS-aided SWIPT systems",
        authors: "Jianfeng Xu, Pingping Shang",
        date: "15 January 2025",
        articleId: 79,
        imageUrl: "https://placehold.co/600x400/png", // Placeholder for the article image
      },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Latest Articles</h3>
        <ul className="space-y-6">
          {articles.map((article, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <div className="flex space-x-4">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{article.title}</h4>
                  <p className="text-sm text-gray-600">{article.authors}</p>
                  <p className="text-sm text-gray-600">{article.date}</p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline flex justify-between items-center mt-2"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center">
  <a
    href="#"
    className="inline-flex items-center justify-center px-6 py-3 bg-white border border-emerald-700 rounded-full text-gray-700 font-semibold shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300"
  >
    View All Articles
    <svg
      className="ml-2 w-4 h-4 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </a>
</div>

      </div>
    );
  };
  
  export default LatestArticles;
  