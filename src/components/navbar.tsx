import { GithubIcon } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 h-16 bg-transparent transition-colors duration-200 px-safe pt-safe">
      <div
        className="container-main relative z-10 flex h-full items-center"
        aria-label="Global"
      >
        <Logo />
        <nav className="ml-[77px]">
          <ul className="flex">
            <li>
              <a
                className="inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                href="/pricing"
              >
                Pricing
              </a>
            </li>

            <li className="group relative">
              <button
                className="inline-flex items-center gap-x-1.5 whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                type="button"
              >
                Resources
                <img
                  alt=""
                  width={8}
                  height={14}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCA2Ij48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS40IiBkPSJtMSAxIDQgNCA0LTQiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+"
                />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 w-40 bg-black text-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li>
                    <a
                      href="/blog"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      Blog 
                      <p className="text-xs text-gray-500">Read our latest insights</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/docs"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      Docs
                      <p className="text-xs text-gray-500">Explore our tutorials</p>

                    </a>
                  </li>
                  <li>
                    <a
                      href="/changelog"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      Changelog
                      <p className="text-xs text-gray-500">See what&#39;s new</p>

                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative">
              <button
                className="inline-flex items-center gap-x-1.5 whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                type="button"
              >
                Community
                <img
                  alt=""
                  width={8}
                  height={14}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCA2Ij48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS40IiBkPSJtMSAxIDQgNCA0LTQiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+"
                />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 w-40 bg-black text-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li>
                    <a
                      href="/forums"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      X.com
                      <p className="text-xs text-gray-500">Follow our latest news</p>

                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      Linkedin
                      <p className="text-xs text-gray-500">Get updates</p>

                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      Youtube
                      <p className="text-xs text-gray-500">Subscribe to the channel</p>

                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className="block px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      Github
                      <p className="text-xs text-gray-500">Star us</p>

                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                className="inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                href="https://huly.blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex gap-x-3.5">
          <Button size={"sm"}>
            <GithubIcon className="mr-1" size={16} />
            STAR US
          </Button>
          <Button size={"sm"} variant={"outline"}>
            Sign In
          </Button>
          <Button size={"sm"} variant={"outline"}>
            GET STARTED
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
