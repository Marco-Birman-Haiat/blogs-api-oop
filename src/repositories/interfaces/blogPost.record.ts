import UserRecord from "./user.record";

export type BlogPostRecord = {
  id: number;
  title: string;
  content: string;
  published: Date;
  updated: Date;
  user?: UserRecord;
}

export type BlogPostInput = {
  title: string;
  content: string;
  published: Date;
  updated: Date;
}
