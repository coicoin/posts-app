import type { TPost } from "@/entities/post/model/types";

function filterByLength(posts: TPost[], minLength: number) {
  return posts.filter((post) => post.title.length >= minLength);
}

export default filterByLength;
