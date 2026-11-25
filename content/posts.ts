// 블로그에서 가져온 글을 읽어오는 도우미입니다.
import data from "./posts.json";

export type Block =
  | { type: "text"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string }
  | { type: "hr" };

export type Post = {
  id: string;
  title: string;
  tags: string[];
  excerpt: string;
  cover: string | null;
  blocks: Block[];
};

export const posts = data as Post[];

export function getPost(id: string) {
  return posts.find((p) => p.id === id);
}
