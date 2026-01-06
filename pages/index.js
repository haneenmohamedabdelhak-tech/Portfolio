import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const portfolioWebsites = [
  { name: "Muscle Build Qatar", url: "https://musclebuildqatar.com/", image: "/website-images/MUSCLE-BUILD.png" },
  { name: "Powerhouse Qatar", url: "https://powerhouse.qa/", image: "/website-images/Power-House-Gym-Qatar.png" },
  { name: "Arts and Crafts Qatar", url: "https://artsandcrafts.qa/", image: "/website-images/Arts-and-Crafts.png" },
  { name: "Il Fiore Rosso", url: "https://ilfiore-rosso.com.qa/", image: "/website-images/The-best-Outdoor-Furniture.png" },
  { name: "Healthy Life Qatar", url: "https://healthylife.com.qa/", image: "/website-images/Healthy-Life-Trading.png" },
  { name: "La Forma Furniture", url: "https://laformafurniture.com/", image: "/website-images/Home-La-Forma-Furniture.png" },
  { name: "Al Imran", url: "https://aalimran.pages.dev", image: "/website-images/Aal-Imran-Housing.png" },
  { name: "NPF Qatar", url: "https://npfqatar.com/", image: "/website-images/Home-National-Paints-Factories.png" },
  { name: "Al Khalifa Legal", url: "https://alkhalifalegal.com/", image: "/website-images/Al-Khalifa-Legal-Consultant.png" },
  { name: "Al Marwani Qatar", url: "https://al-marwani-qa.com/", image: "/website-images/al-marwani-qa.png" },
  { name: "Al Sahar Contracting", url: "https://al-sahar-general-contracting-w-l-l.pages.dev/", image: "/website-images/Al-Sahar-General-Contracting.png" },
  { name: "Al Shajarah Carpentry", url: "https://alshajarah-carpentry-decoration.pages.dev/", image: "/website-images/shajara.png" },
  { name: "Digital Energy KSA", url: "https://digitalenergy.sa/", image: "/website-images/Digital-Energy-Arabia-Contracting.png" },
  { name: "Doha Hollywood", url: "https://dohahollywood-qa.pages.dev/", image: "/website-images/Home-Doha-Hollywood-Clinic.png" },
  { name: "Fresh Look Salons", url: "https://freshlooksalons.com/", image: "/website-images/Home-Freshlook-Salon.png" },
  { name: "Horoscope Cafe", url: "https://horoscope-cafe.com/", image: "/website-images/Horoscope-Cafe.png" },
  { name: "Julia Beauty Salon", url: "https://julia-beauty-salon-new.pages.dev/", image: "/website-images/Julia.png" },
  { name: "Pioneer Metal", url: "https://pioneermetal.org/", image: "/website-images/Pioneer-Metal.png" },
  { name: "PCC Qatar", url: "https://pccqa.com/", image: "/website-images/Professional-Chefs-Consultancy.png" },
  { name: "PSC Qatar", url: "https://psc.qa/", image: "/website-images/Plastic-Surgicentre.png" },
  { name: "Qatar Squash", url: "https://qatar-squash2.pages.dev/", image: "/website-images/qatar-squash.png" },
  { name: "Sawaket", url: "https://sawaket.pages.dev/", image: "/website-images/sawaket.png" },
  { name: "UHY Qatar", url: "https://uhy-qa.com/", image: "/website-images/Uhy-Ammo-And-co.png" },
  { name: "Value Medical", url: "https://value-medical-new-website.pages.dev/", image: "/website-images/value-medical.png" },
  { name: "Yhaikal", url: "https://yhaikal-3w4.pages.dev/", image: "/website-images/Yasser-Haikal.png" },
  { name: "Jersey Decoration", url: "https://jersey-decoration.pages.dev/", image: "/website-images/JERSEY-DECORATION.png" },
];

const showPosts = posts.length; // Show all posts in scrollable container

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative py-[100px] min-h-[400px]" style={{ 
        backgroundImage: 'url(/types-of-web-development-services.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80"></div>
        <div className="container relative z-10">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-6"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
              )}
            </div>
            {banner.image_enable && (
                <div className="col-9 lg:col-6">
                  <ImageFallback
                    className="mx-auto object-contain"
                    src={banner.image}
                    width={548}
                    height={443}
                    priority={true}
                    alt="Banner Image"
                  />
                </div>
            )}
          </div>
        </div>
      </section>

      {/* Home main */}
      <section className="section">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:mb-0 lg:col-8">
              {/* Featured posts */}
              {featured_posts.enable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">
                        {featuredPosts
                          .slice(1, featuredPosts.length)
                          .map((post, i, arr) => (
                            <div
                              className={`mb-6 flex items-center pb-6 ${
                                i !== arr.length - 1 &&
                                "border-b border-border dark:border-darkmode-border"
                              }`}
                              key={`key-${i}`}
                            >
                              {post.frontmatter.image && (
                                <ImageFallback
                                  className="mr-3 h-[85px] rounded object-cover"
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={105}
                                  height={85}
                                />
                              )}
                              <div>
                                <h3 className="h5 mb-2">
                                  <Link
                                    href={`/${blog_folder}/${post.slug}`}
                                    className="block hover:text-primary"
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                </h3>
                                <p className="inline-flex items-center font-bold">
                                  <FaRegCalendar className="mr-1.5" />
                                  {dateFormat(post.frontmatter.date)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Promotion */}
              {promotion.enable && (
                <Link href={promotion.link} className="section block pt-0">
                  <ImageFallback
                    className="h-full w-full"
                    height="115"
                    width="800"
                    src={promotion.image}
                    alt="promotion"
                  />
                </Link>
              )}

              {/* Recent Posts */}
              {recent_posts.enable && (
                <div className="section pt-0">
                  {markdownify(recent_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                    <div className="row max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark">
                      {portfolioWebsites.map((website) => (
                        <div className="mb-8 md:col-6" key={website.name}>
                          <div className="relative">
                            <ImageFallback
                              className="rounded"
                              src={website.image}
                              alt={website.name}
                              width={405}
                              height={208}
                            />
                            <div className="mt-4">
                              <h3 className="h5 mb-2">
                                <a href={website.url} target="_blank" rel="noopener noreferrer" className="block hover:text-primary">
                                  {website.name}
                                </a>
                              </h3>
                              <a 
                                href={website.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300"
                              >
                                Visit Website
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
            {/* sidebar */}
            <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
