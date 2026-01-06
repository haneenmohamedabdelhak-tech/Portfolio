import config from "@config/config.json";
import social from "@config/social.json";
import Social from "@layouts/components/Social";
const { about } = config.widgets;

const Sidebar = ({ posts, categories, className }) => {
  return (
    <aside className={`${className} px-0 lg:px-6 lg:col-4`}>
      {about.enable && (
        <div className="relative rounded border border-border p-6 text-center dark:border-darkmode-border">
          <h3 style={{ color: '#2ba283' }}>Hi!</h3>
          <p className="text-lg leading-relaxed">
            I'm currently open to new career opportunities in web development. If you're looking for a motivated, detail-oriented developer to join your team, I'd be happy to connect.
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-sm">
              <span className="font-semibold">Phone:</span> <a href="tel:+201120841843">+20 11 2084 1843</a>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span> <a href="mailto:haneen.mohamed.abdelhak@gmail.com">haneen.mohamed.abdelhak@gmail.com</a>
            </p>
          </div>
          <Social
            className="socials sidebar-socials mt-6 justify-center"
            source={social}
          />
          <a
            href="/Haneen-Abdelhak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            View CV
          </a>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
