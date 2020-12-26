import home from "./home.controller";
import post from "./post.controller";
import notFound from "./404.controller";
const pages = {
  home: home,
  posts: post,
  notFound: notFound,
};

export { pages };
