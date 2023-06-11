import { CategoryRecord } from "./category.record";
import UserRecord from "./user.record";

export type BlogPostRecord = {
  id: number;
  title: string;
  content: string;
  published: Date;
  updated: Date;
  user?: UserRecord;
  categories?: CategoryRecord[];
}

export type BlogPostInput = {
  title: string;
  userId: number;
  content: string;
  published: Date;
  updated: Date;
}

export type BlogPostUserInput = {
  title: string;
  userId: number;
  content: string;
}

export type BlogPostUserInputEdit = {
  title: string;
  content: string;
}