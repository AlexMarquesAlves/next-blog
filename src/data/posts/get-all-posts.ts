import { POSTS_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/types";
import { fetchJson } from "../../utils/fectch-json";

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
};
