const Home = () => {
  return (
    <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <div className="flex flex-row space-x-0 pr-10">
              <a
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                href="/"
              >
                home
              </a>
              <a
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                href="/blog"
              >
                blog
              </a>
              <a
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                href="/projects"
              >
                projects
              </a>
            </div>
          </nav>
        </div>
      </aside>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          hi, I&apos;m Shuhayb👋
        </h1>
        <p className="mb-4">
          I&apos;m a software engineer who loves to code and has a passion for
          not building things for the web, but writing quality code. I also love
          designing new products which changes peoples lives for the better.
        </p>
        <div className="my-8">
          <div>
            <p className="underline font-black mb-4">Projects</p>
            <a className="flex flex-row space-y-1 mb-4" href="/blog/something">
              <div className="w-full flex flex-col space-x-0">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  project 1 - Building a e-commerce site
                </p>
                <p className="text-neutral-600 text-xs dark:text-neutral-400 tabular-nums">
                  typeScript, graphql, css, node.js
                </p>
              </div>
            </a>
            <a className="flex flex-row space-y-1 mb-4" href="/blog/something">
              <div className="w-full flex flex-col space-x-0">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  project 2 - Building a e-commerce site
                </p>
                <p className="text-neutral-600 text-xs dark:text-neutral-400 tabular-nums">
                  typeScript, graphql, css, node.js
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <footer className="mb-16">
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <li>
            <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
          <li>
            <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
          <li>
            <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="ml-2 h-7">email</p>
            </a>
          </li>
        </ul>
        <p className="mt-8 text-neutral-600 dark:text-neutral-300">
          © 2024 Shuhayb Miah
        </p>
      </footer>
    </div>
    // <div>hello</div>
  );
};

export default Home;
