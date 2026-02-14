export type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
