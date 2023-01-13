import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Time: any;
  Upload: any;
};

export type Article = {
  __typename?: 'Article';
  SEO?: Maybe<ComponentSeoSeo>;
  author?: Maybe<AuthorEntityResponse>;
  body: Scalars['String'];
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  body?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  author?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  avatar?: Maybe<UploadFileEntityResponse>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']>;
};

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  data: Array<AuthorEntity>;
  meta: ResponseCollectionMeta;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  jobTitle?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookEntity = {
  __typename?: 'BookEntity';
  attributes?: Maybe<Book>;
  id?: Maybe<Scalars['ID']>;
};

export type BookEntityResponse = {
  __typename?: 'BookEntityResponse';
  data?: Maybe<BookEntity>;
};

export type BookEntityResponseCollection = {
  __typename?: 'BookEntityResponseCollection';
  data: Array<BookEntity>;
  meta: ResponseCollectionMeta;
};

export type BookFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BookFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BookFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BookFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BookInput = {
  author?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt?: Maybe<Scalars['DateTime']>;
  msgs?: Maybe<ChatMsgRelationResponseCollection>;
  owner?: Maybe<UsersPermissionsUserEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  recipient?: Maybe<UsersPermissionsUserEntityResponse>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ChatMsgsArgs = {
  filters?: InputMaybe<ChatMsgFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ChatEntity = {
  __typename?: 'ChatEntity';
  attributes?: Maybe<Chat>;
  id?: Maybe<Scalars['ID']>;
};

export type ChatEntityResponse = {
  __typename?: 'ChatEntityResponse';
  data?: Maybe<ChatEntity>;
};

export type ChatEntityResponseCollection = {
  __typename?: 'ChatEntityResponseCollection';
  data: Array<ChatEntity>;
  meta: ResponseCollectionMeta;
};

export type ChatFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChatFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  msgs?: InputMaybe<ChatMsgFiltersInput>;
  not?: InputMaybe<ChatFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChatFiltersInput>>>;
  owner?: InputMaybe<UsersPermissionsUserFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  recipient?: InputMaybe<UsersPermissionsUserFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChatInput = {
  msgs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  owner?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  recipient?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ChatMsg = {
  __typename?: 'ChatMsg';
  body?: Maybe<Scalars['String']>;
  chat?: Maybe<ChatEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isRead?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  receiver?: Maybe<UsersPermissionsUserEntityResponse>;
  sender?: Maybe<UsersPermissionsUserEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChatMsgEntity = {
  __typename?: 'ChatMsgEntity';
  attributes?: Maybe<ChatMsg>;
  id?: Maybe<Scalars['ID']>;
};

export type ChatMsgEntityResponse = {
  __typename?: 'ChatMsgEntityResponse';
  data?: Maybe<ChatMsgEntity>;
};

export type ChatMsgEntityResponseCollection = {
  __typename?: 'ChatMsgEntityResponseCollection';
  data: Array<ChatMsgEntity>;
  meta: ResponseCollectionMeta;
};

export type ChatMsgFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChatMsgFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  chat?: InputMaybe<ChatFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isRead?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ChatMsgFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChatMsgFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  receiver?: InputMaybe<UsersPermissionsUserFiltersInput>;
  sender?: InputMaybe<UsersPermissionsUserFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChatMsgInput = {
  body?: InputMaybe<Scalars['String']>;
  chat?: InputMaybe<Scalars['ID']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  receiver?: InputMaybe<Scalars['ID']>;
  sender?: InputMaybe<Scalars['ID']>;
};

export type ChatMsgRelationResponseCollection = {
  __typename?: 'ChatMsgRelationResponseCollection';
  data: Array<ChatMsgEntity>;
};

export type ChatRelationResponseCollection = {
  __typename?: 'ChatRelationResponseCollection';
  data: Array<ChatEntity>;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  post?: Maybe<PostEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']>;
};

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse';
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isDisabled?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  post?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CommentInput = {
  body?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  post?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type CommentRelationResponseCollection = {
  __typename?: 'CommentRelationResponseCollection';
  data: Array<CommentEntity>;
};

export type ComponentLecturesLectures = {
  __typename?: 'ComponentLecturesLectures';
  date?: Maybe<Scalars['Date']>;
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

export type ComponentLecturesLecturesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLecturesLecturesFiltersInput>>>;
  date?: InputMaybe<DateFilterInput>;
  duration?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ComponentLecturesLecturesFiltersInput>;
  notes?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLecturesLecturesFiltersInput>>>;
  progress?: InputMaybe<FloatFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  video?: InputMaybe<StringFilterInput>;
};

export type ComponentLecturesLecturesInput = {
  date?: InputMaybe<Scalars['Date']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  notes?: InputMaybe<Scalars['String']>;
  progress?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSeoSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSeoSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSeoSeoInput = {
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  SEO?: Maybe<ComponentSeoSeo>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  courseType: Enum_Course_Coursetype;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  groups?: Maybe<GroupRelationResponseCollection>;
  hasPrivateVersion?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  isFree: Scalars['Boolean'];
  level?: Maybe<Enum_Course_Level>;
  notes?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderRelationResponseCollection>;
  price: Scalars['Float'];
  private?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reviews?: Maybe<ReviewRelationResponseCollection>;
  slug: Scalars['String'];
  soloPrice?: Maybe<Scalars['Float']>;
  teacher?: Maybe<TeacherEntityResponse>;
  title: Scalars['String'];
  totalLessons: Scalars['Int'];
  totalStudents?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CourseCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseGroupsArgs = {
  filters?: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['ID']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  courseType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  duration?: InputMaybe<IntFilterInput>;
  groups?: InputMaybe<GroupFiltersInput>;
  hasPrivateVersion?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  introduction?: InputMaybe<StringFilterInput>;
  isFree?: InputMaybe<BooleanFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  notes?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  private?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  soloPrice?: InputMaybe<FloatFilterInput>;
  teacher?: InputMaybe<TeacherFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  totalLessons?: InputMaybe<IntFilterInput>;
  totalStudents?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  courseType?: InputMaybe<Enum_Course_Coursetype>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  hasPrivateVersion?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Enum_Course_Level>;
  notes?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Float']>;
  private?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  soloPrice?: InputMaybe<Scalars['Float']>;
  teacher?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  totalLessons?: InputMaybe<Scalars['Int']>;
  totalStudents?: InputMaybe<Scalars['Int']>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type CoursesPage = {
  __typename?: 'CoursesPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaUrl?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoursesPageEntity = {
  __typename?: 'CoursesPageEntity';
  attributes?: Maybe<CoursesPage>;
  id?: Maybe<Scalars['ID']>;
};

export type CoursesPageEntityResponse = {
  __typename?: 'CoursesPageEntityResponse';
  data?: Maybe<CoursesPageEntity>;
};

export type CoursesPageInput = {
  description?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaUrl?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Course_Coursetype {
  Group = 'group',
  Single = 'single'
}

export enum Enum_Course_Level {
  Advance = 'Advance',
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Primer = 'Primer'
}

export enum Enum_Groupmessage_Type {
  File = 'file',
  Text = 'text'
}

export enum Enum_Order_Status {
  Free = 'free',
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Article | Author | Book | Category | Chat | ChatMsg | Comment | ComponentLecturesLectures | ComponentSeoSeo | Course | CoursesPage | Group | GroupComment | GroupMessage | Home | I18NLocale | Notification | Order | Post | PostPoint | Privacy | QuestionAndAnswer | Review | Search | Student | SupportMessage | Teacher | Term | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Group = {
  __typename?: 'Group';
  active?: Maybe<Scalars['Boolean']>;
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['Date']>;
  endTime?: Maybe<Scalars['Time']>;
  lectures?: Maybe<Array<Maybe<ComponentLecturesLectures>>>;
  messages?: Maybe<GroupMessageRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  qna?: Maybe<QuestionAndAnswerRelationResponseCollection>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  startTime?: Maybe<Scalars['Time']>;
  students?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GroupLecturesArgs = {
  filters?: InputMaybe<ComponentLecturesLecturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GroupMessagesArgs = {
  filters?: InputMaybe<GroupMessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GroupQnaArgs = {
  filters?: InputMaybe<QuestionAndAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GroupStudentsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GroupComment = {
  __typename?: 'GroupComment';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  qna?: Maybe<QuestionAndAnswerEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type GroupCommentEntity = {
  __typename?: 'GroupCommentEntity';
  attributes?: Maybe<GroupComment>;
  id?: Maybe<Scalars['ID']>;
};

export type GroupCommentEntityResponse = {
  __typename?: 'GroupCommentEntityResponse';
  data?: Maybe<GroupCommentEntity>;
};

export type GroupCommentEntityResponseCollection = {
  __typename?: 'GroupCommentEntityResponseCollection';
  data: Array<GroupCommentEntity>;
  meta: ResponseCollectionMeta;
};

export type GroupCommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GroupCommentFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GroupCommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GroupCommentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  qna?: InputMaybe<QuestionAndAnswerFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type GroupCommentInput = {
  body?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  qna?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type GroupCommentRelationResponseCollection = {
  __typename?: 'GroupCommentRelationResponseCollection';
  data: Array<GroupCommentEntity>;
};

export type GroupEntity = {
  __typename?: 'GroupEntity';
  attributes?: Maybe<Group>;
  id?: Maybe<Scalars['ID']>;
};

export type GroupEntityResponse = {
  __typename?: 'GroupEntityResponse';
  data?: Maybe<GroupEntity>;
};

export type GroupEntityResponseCollection = {
  __typename?: 'GroupEntityResponseCollection';
  data: Array<GroupEntity>;
  meta: ResponseCollectionMeta;
};

export type GroupFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GroupFiltersInput>>>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  endTime?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lectures?: InputMaybe<ComponentLecturesLecturesFiltersInput>;
  messages?: InputMaybe<GroupMessageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GroupFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  qna?: InputMaybe<QuestionAndAnswerFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  startTime?: InputMaybe<TimeFilterInput>;
  students?: InputMaybe<UsersPermissionsUserFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GroupInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  course?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['Date']>;
  endTime?: InputMaybe<Scalars['Time']>;
  lectures?: InputMaybe<Array<InputMaybe<ComponentLecturesLecturesInput>>>;
  messages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  qna?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  startTime?: InputMaybe<Scalars['Time']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GroupMessage = {
  __typename?: 'GroupMessage';
  allRead?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<UploadFileEntityResponse>;
  group?: Maybe<GroupEntityResponse>;
  hasRead?: Maybe<Scalars['JSON']>;
  message?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  student?: Maybe<UsersPermissionsUserEntityResponse>;
  type?: Maybe<Enum_Groupmessage_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMessageEntity = {
  __typename?: 'GroupMessageEntity';
  attributes?: Maybe<GroupMessage>;
  id?: Maybe<Scalars['ID']>;
};

export type GroupMessageEntityResponse = {
  __typename?: 'GroupMessageEntityResponse';
  data?: Maybe<GroupMessageEntity>;
};

export type GroupMessageEntityResponseCollection = {
  __typename?: 'GroupMessageEntityResponseCollection';
  data: Array<GroupMessageEntity>;
  meta: ResponseCollectionMeta;
};

export type GroupMessageFiltersInput = {
  allRead?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GroupMessageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  group?: InputMaybe<GroupFiltersInput>;
  hasRead?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GroupMessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GroupMessageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  student?: InputMaybe<UsersPermissionsUserFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GroupMessageInput = {
  allRead?: InputMaybe<Scalars['Boolean']>;
  file?: InputMaybe<Scalars['ID']>;
  group?: InputMaybe<Scalars['ID']>;
  hasRead?: InputMaybe<Scalars['JSON']>;
  message?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  student?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Groupmessage_Type>;
};

export type GroupMessageRelationResponseCollection = {
  __typename?: 'GroupMessageRelationResponseCollection';
  data: Array<GroupMessageEntity>;
};

export type GroupRelationResponseCollection = {
  __typename?: 'GroupRelationResponseCollection';
  data: Array<GroupEntity>;
};

export type Home = {
  __typename?: 'Home';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaUrl?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  description?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaUrl?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<ArticleEntityResponse>;
  createAuthor?: Maybe<AuthorEntityResponse>;
  createBook?: Maybe<BookEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createChat?: Maybe<ChatEntityResponse>;
  createChatMsg?: Maybe<ChatMsgEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createGroup?: Maybe<GroupEntityResponse>;
  createGroupComment?: Maybe<GroupCommentEntityResponse>;
  createGroupMessage?: Maybe<GroupMessageEntityResponse>;
  createNotification?: Maybe<NotificationEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createPostPoint?: Maybe<PostPointEntityResponse>;
  createQuestionAndAnswer?: Maybe<QuestionAndAnswerEntityResponse>;
  createReview?: Maybe<ReviewEntityResponse>;
  createStudent?: Maybe<StudentEntityResponse>;
  createSupportMessage?: Maybe<SupportMessageEntityResponse>;
  createTeacher?: Maybe<TeacherEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteAuthor?: Maybe<AuthorEntityResponse>;
  deleteBook?: Maybe<BookEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteChat?: Maybe<ChatEntityResponse>;
  deleteChatMsg?: Maybe<ChatMsgEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteCoursesPage?: Maybe<CoursesPageEntityResponse>;
  deleteGroup?: Maybe<GroupEntityResponse>;
  deleteGroupComment?: Maybe<GroupCommentEntityResponse>;
  deleteGroupMessage?: Maybe<GroupMessageEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteNotification?: Maybe<NotificationEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deletePostPoint?: Maybe<PostPointEntityResponse>;
  deletePrivacy?: Maybe<PrivacyEntityResponse>;
  deleteQuestionAndAnswer?: Maybe<QuestionAndAnswerEntityResponse>;
  deleteReview?: Maybe<ReviewEntityResponse>;
  deleteSearch?: Maybe<SearchEntityResponse>;
  deleteStudent?: Maybe<StudentEntityResponse>;
  deleteSupportMessage?: Maybe<SupportMessageEntityResponse>;
  deleteTeacher?: Maybe<TeacherEntityResponse>;
  deleteTerm?: Maybe<TermEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateAuthor?: Maybe<AuthorEntityResponse>;
  updateBook?: Maybe<BookEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateChat?: Maybe<ChatEntityResponse>;
  updateChatMsg?: Maybe<ChatMsgEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateCoursesPage?: Maybe<CoursesPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGroup?: Maybe<GroupEntityResponse>;
  updateGroupComment?: Maybe<GroupCommentEntityResponse>;
  updateGroupMessage?: Maybe<GroupMessageEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateNotification?: Maybe<NotificationEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updatePostPoint?: Maybe<PostPointEntityResponse>;
  updatePrivacy?: Maybe<PrivacyEntityResponse>;
  updateQuestionAndAnswer?: Maybe<QuestionAndAnswerEntityResponse>;
  updateReview?: Maybe<ReviewEntityResponse>;
  updateSearch?: Maybe<SearchEntityResponse>;
  updateStudent?: Maybe<StudentEntityResponse>;
  updateSupportMessage?: Maybe<SupportMessageEntityResponse>;
  updateTeacher?: Maybe<TeacherEntityResponse>;
  updateTerm?: Maybe<TermEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
};


export type MutationCreateBookArgs = {
  data: BookInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateChatArgs = {
  data: ChatInput;
};


export type MutationCreateChatMsgArgs = {
  data: ChatMsgInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateGroupArgs = {
  data: GroupInput;
};


export type MutationCreateGroupCommentArgs = {
  data: GroupCommentInput;
};


export type MutationCreateGroupMessageArgs = {
  data: GroupMessageInput;
};


export type MutationCreateNotificationArgs = {
  data: NotificationInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreatePostPointArgs = {
  data: PostPointInput;
};


export type MutationCreateQuestionAndAnswerArgs = {
  data: QuestionAndAnswerInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateSupportMessageArgs = {
  data: SupportMessageInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteChatArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteChatMsgArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupMessageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostPointArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteQuestionAndAnswerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSupportMessageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  id: Scalars['ID'];
};


export type MutationUpdateBookArgs = {
  data: BookInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateChatArgs = {
  data: ChatInput;
  id: Scalars['ID'];
};


export type MutationUpdateChatMsgArgs = {
  data: ChatMsgInput;
  id: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID'];
};


export type MutationUpdateCoursesPageArgs = {
  data: CoursesPageInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGroupArgs = {
  data: GroupInput;
  id: Scalars['ID'];
};


export type MutationUpdateGroupCommentArgs = {
  data: GroupCommentInput;
  id: Scalars['ID'];
};


export type MutationUpdateGroupMessageArgs = {
  data: GroupMessageInput;
  id: Scalars['ID'];
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationInput;
  id: Scalars['ID'];
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID'];
};


export type MutationUpdatePostPointArgs = {
  data: PostPointInput;
  id: Scalars['ID'];
};


export type MutationUpdatePrivacyArgs = {
  data: PrivacyInput;
};


export type MutationUpdateQuestionAndAnswerArgs = {
  data: QuestionAndAnswerInput;
  id: Scalars['ID'];
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['ID'];
};


export type MutationUpdateSearchArgs = {
  data: SearchInput;
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID'];
};


export type MutationUpdateSupportMessageArgs = {
  data: SupportMessageInput;
  id: Scalars['ID'];
};


export type MutationUpdateTeacherArgs = {
  data: TeacherInput;
  id: Scalars['ID'];
};


export type MutationUpdateTermArgs = {
  data: TermInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Notification = {
  __typename?: 'Notification';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isRead?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type NotificationEntity = {
  __typename?: 'NotificationEntity';
  attributes?: Maybe<Notification>;
  id?: Maybe<Scalars['ID']>;
};

export type NotificationEntityResponse = {
  __typename?: 'NotificationEntityResponse';
  data?: Maybe<NotificationEntity>;
};

export type NotificationEntityResponseCollection = {
  __typename?: 'NotificationEntityResponseCollection';
  data: Array<NotificationEntity>;
  meta: ResponseCollectionMeta;
};

export type NotificationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NotificationFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  from?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  isRead?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<NotificationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NotificationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type NotificationInput = {
  body?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type NotificationRelationResponseCollection = {
  __typename?: 'NotificationRelationResponseCollection';
  data: Array<NotificationEntity>;
};

export type Order = {
  __typename?: 'Order';
  checkout_session?: Maybe<Scalars['String']>;
  course?: Maybe<CourseEntityResponse>;
  courseId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  imageUrl: Scalars['String'];
  orderType: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  quantity: Scalars['Int'];
  status: Enum_Order_Status;
  total: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  checkout_session?: InputMaybe<StringFilterInput>;
  course?: InputMaybe<CourseFiltersInput>;
  courseId?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  imageUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  orderType?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  checkout_session?: InputMaybe<Scalars['String']>;
  course?: InputMaybe<Scalars['ID']>;
  courseId?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  orderType?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Enum_Order_Status>;
  total?: InputMaybe<Scalars['Float']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryEntityResponse>;
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UsersPermissionsUserEntityResponse>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  points?: Maybe<Scalars['Int']>;
  post_points?: Maybe<PostPointRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_comments?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PostCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostPost_PointsArgs = {
  filters?: InputMaybe<PostPointFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creator?: InputMaybe<UsersPermissionsUserFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  isDisabled?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  points?: InputMaybe<IntFilterInput>;
  post_points?: InputMaybe<PostPointFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  total_comments?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  creator?: InputMaybe<Scalars['ID']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  points?: InputMaybe<Scalars['Int']>;
  post_points?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_comments?: InputMaybe<Scalars['Int']>;
};

export type PostPoint = {
  __typename?: 'PostPoint';
  createdAt?: Maybe<Scalars['DateTime']>;
  isDecrement?: Maybe<Scalars['Boolean']>;
  post?: Maybe<PostEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type PostPointEntity = {
  __typename?: 'PostPointEntity';
  attributes?: Maybe<PostPoint>;
  id?: Maybe<Scalars['ID']>;
};

export type PostPointEntityResponse = {
  __typename?: 'PostPointEntityResponse';
  data?: Maybe<PostPointEntity>;
};

export type PostPointEntityResponseCollection = {
  __typename?: 'PostPointEntityResponseCollection';
  data: Array<PostPointEntity>;
  meta: ResponseCollectionMeta;
};

export type PostPointFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostPointFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isDecrement?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<PostPointFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostPointFiltersInput>>>;
  post?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PostPointInput = {
  isDecrement?: InputMaybe<Scalars['Boolean']>;
  post?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type PostPointRelationResponseCollection = {
  __typename?: 'PostPointRelationResponseCollection';
  data: Array<PostPointEntity>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type Privacy = {
  __typename?: 'Privacy';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PrivacyEntity = {
  __typename?: 'PrivacyEntity';
  attributes?: Maybe<Privacy>;
  id?: Maybe<Scalars['ID']>;
};

export type PrivacyEntityResponse = {
  __typename?: 'PrivacyEntityResponse';
  data?: Maybe<PrivacyEntity>;
};

export type PrivacyInput = {
  body?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  author?: Maybe<AuthorEntityResponse>;
  authors?: Maybe<AuthorEntityResponseCollection>;
  book?: Maybe<BookEntityResponse>;
  books?: Maybe<BookEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  chat?: Maybe<ChatEntityResponse>;
  chatMsg?: Maybe<ChatMsgEntityResponse>;
  chatMsgs?: Maybe<ChatMsgEntityResponseCollection>;
  chats?: Maybe<ChatEntityResponseCollection>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  coursesPage?: Maybe<CoursesPageEntityResponse>;
  group?: Maybe<GroupEntityResponse>;
  groupComment?: Maybe<GroupCommentEntityResponse>;
  groupComments?: Maybe<GroupCommentEntityResponseCollection>;
  groupMessage?: Maybe<GroupMessageEntityResponse>;
  groupMessages?: Maybe<GroupMessageEntityResponseCollection>;
  groups?: Maybe<GroupEntityResponseCollection>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  notification?: Maybe<NotificationEntityResponse>;
  notifications?: Maybe<NotificationEntityResponseCollection>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  post?: Maybe<PostEntityResponse>;
  postPoint?: Maybe<PostPointEntityResponse>;
  postPoints?: Maybe<PostPointEntityResponseCollection>;
  posts?: Maybe<PostEntityResponseCollection>;
  privacy?: Maybe<PrivacyEntityResponse>;
  questionAndAnswer?: Maybe<QuestionAndAnswerEntityResponse>;
  questionAndAnswers?: Maybe<QuestionAndAnswerEntityResponseCollection>;
  review?: Maybe<ReviewEntityResponse>;
  reviews?: Maybe<ReviewEntityResponseCollection>;
  search?: Maybe<SearchEntityResponse>;
  student?: Maybe<StudentEntityResponse>;
  students?: Maybe<StudentEntityResponseCollection>;
  supportMessage?: Maybe<SupportMessageEntityResponse>;
  supportMessages?: Maybe<SupportMessageEntityResponseCollection>;
  teacher?: Maybe<TeacherEntityResponse>;
  teachers?: Maybe<TeacherEntityResponseCollection>;
  term?: Maybe<TermEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBookArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBooksArgs = {
  filters?: InputMaybe<BookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChatArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChatMsgArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChatMsgsArgs = {
  filters?: InputMaybe<ChatMsgFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryChatsArgs = {
  filters?: InputMaybe<ChatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCoursesPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroupCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroupCommentsArgs = {
  filters?: InputMaybe<GroupCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroupMessageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroupMessagesArgs = {
  filters?: InputMaybe<GroupMessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGroupsArgs = {
  filters?: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNotificationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNotificationsArgs = {
  filters?: InputMaybe<NotificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPostPointArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPostPointsArgs = {
  filters?: InputMaybe<PostPointFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPrivacyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryQuestionAndAnswerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryQuestionAndAnswersArgs = {
  filters?: InputMaybe<QuestionAndAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySearchArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryStudentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySupportMessageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySupportMessagesArgs = {
  filters?: InputMaybe<SupportMessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTeacherArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTeachersArgs = {
  filters?: InputMaybe<TeacherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTermArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuestionAndAnswer = {
  __typename?: 'QuestionAndAnswer';
  createdAt?: Maybe<Scalars['DateTime']>;
  group?: Maybe<GroupEntityResponse>;
  groupComments?: Maybe<GroupCommentRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type QuestionAndAnswerGroupCommentsArgs = {
  filters?: InputMaybe<GroupCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuestionAndAnswerEntity = {
  __typename?: 'QuestionAndAnswerEntity';
  attributes?: Maybe<QuestionAndAnswer>;
  id?: Maybe<Scalars['ID']>;
};

export type QuestionAndAnswerEntityResponse = {
  __typename?: 'QuestionAndAnswerEntityResponse';
  data?: Maybe<QuestionAndAnswerEntity>;
};

export type QuestionAndAnswerEntityResponseCollection = {
  __typename?: 'QuestionAndAnswerEntityResponseCollection';
  data: Array<QuestionAndAnswerEntity>;
  meta: ResponseCollectionMeta;
};

export type QuestionAndAnswerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuestionAndAnswerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  group?: InputMaybe<GroupFiltersInput>;
  groupComments?: InputMaybe<GroupCommentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuestionAndAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuestionAndAnswerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type QuestionAndAnswerInput = {
  group?: InputMaybe<Scalars['ID']>;
  groupComments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  question?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type QuestionAndAnswerRelationResponseCollection = {
  __typename?: 'QuestionAndAnswerRelationResponseCollection';
  data: Array<QuestionAndAnswerEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Review = {
  __typename?: 'Review';
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type ReviewEntity = {
  __typename?: 'ReviewEntity';
  attributes?: Maybe<Review>;
  id?: Maybe<Scalars['ID']>;
};

export type ReviewEntityResponse = {
  __typename?: 'ReviewEntityResponse';
  data?: Maybe<ReviewEntity>;
};

export type ReviewEntityResponseCollection = {
  __typename?: 'ReviewEntityResponseCollection';
  data: Array<ReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ReviewInput = {
  course?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Float']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type ReviewRelationResponseCollection = {
  __typename?: 'ReviewRelationResponseCollection';
  data: Array<ReviewEntity>;
};

export type Search = {
  __typename?: 'Search';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  term?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SearchEntity = {
  __typename?: 'SearchEntity';
  attributes?: Maybe<Search>;
  id?: Maybe<Scalars['ID']>;
};

export type SearchEntityResponse = {
  __typename?: 'SearchEntityResponse';
  data?: Maybe<SearchEntity>;
};

export type SearchInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  term?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  courseCount?: Maybe<Scalars['Int']>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  joined?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type StudentCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
  attributes?: Maybe<Student>;
  id?: Maybe<Scalars['ID']>;
};

export type StudentEntityResponse = {
  __typename?: 'StudentEntityResponse';
  data?: Maybe<StudentEntity>;
};

export type StudentEntityResponseCollection = {
  __typename?: 'StudentEntityResponseCollection';
  data: Array<StudentEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  courseCount?: InputMaybe<IntFilterInput>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  joined?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<StudentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type StudentInput = {
  courseCount?: InputMaybe<Scalars['Int']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  joined?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type SupportMessage = {
  __typename?: 'SupportMessage';
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type SupportMessageEntity = {
  __typename?: 'SupportMessageEntity';
  attributes?: Maybe<SupportMessage>;
  id?: Maybe<Scalars['ID']>;
};

export type SupportMessageEntityResponse = {
  __typename?: 'SupportMessageEntityResponse';
  data?: Maybe<SupportMessageEntity>;
};

export type SupportMessageEntityResponseCollection = {
  __typename?: 'SupportMessageEntityResponseCollection';
  data: Array<SupportMessageEntity>;
  meta: ResponseCollectionMeta;
};

export type SupportMessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SupportMessageFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SupportMessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SupportMessageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subject?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type SupportMessageInput = {
  body?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  bio?: Maybe<Scalars['String']>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};


export type TeacherCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeacherEntity = {
  __typename?: 'TeacherEntity';
  attributes?: Maybe<Teacher>;
  id?: Maybe<Scalars['ID']>;
};

export type TeacherEntityResponse = {
  __typename?: 'TeacherEntityResponse';
  data?: Maybe<TeacherEntity>;
};

export type TeacherEntityResponseCollection = {
  __typename?: 'TeacherEntityResponseCollection';
  data: Array<TeacherEntity>;
  meta: ResponseCollectionMeta;
};

export type TeacherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeacherFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeacherFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeacherFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type TeacherInput = {
  bio?: InputMaybe<Scalars['String']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fullName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Term = {
  __typename?: 'Term';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TermEntity = {
  __typename?: 'TermEntity';
  attributes?: Maybe<Term>;
  id?: Maybe<Scalars['ID']>;
};

export type TermEntityResponse = {
  __typename?: 'TermEntityResponse';
  data?: Maybe<TermEntity>;
};

export type TermInput = {
  body?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  backgroundImg?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<CommentRelationResponseCollection>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  groups?: Maybe<GroupRelationResponseCollection>;
  img?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationRelationResponseCollection>;
  online?: Maybe<Scalars['Boolean']>;
  orders?: Maybe<OrderRelationResponseCollection>;
  ownerChats?: Maybe<ChatRelationResponseCollection>;
  posts?: Maybe<PostRelationResponseCollection>;
  provider?: Maybe<Scalars['String']>;
  recipientChats?: Maybe<ChatRelationResponseCollection>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  slug: Scalars['String'];
  student?: Maybe<StudentEntityResponse>;
  teacher?: Maybe<TeacherEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};


export type UsersPermissionsUserCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserGroupsArgs = {
  filters?: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserNotificationsArgs = {
  filters?: InputMaybe<NotificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserOwnerChatsArgs = {
  filters?: InputMaybe<ChatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserRecipientChatsArgs = {
  filters?: InputMaybe<ChatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  backgroundImg?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  groups?: InputMaybe<GroupFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  img?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  notifications?: InputMaybe<NotificationFiltersInput>;
  online?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  ownerChats?: InputMaybe<ChatFiltersInput>;
  password?: InputMaybe<StringFilterInput>;
  posts?: InputMaybe<PostFiltersInput>;
  provider?: InputMaybe<StringFilterInput>;
  recipientChats?: InputMaybe<ChatFiltersInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  student?: InputMaybe<StudentFiltersInput>;
  teacher?: InputMaybe<TeacherFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  backgroundImg?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  img?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  online?: InputMaybe<Scalars['Boolean']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ownerChats?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  provider?: InputMaybe<Scalars['String']>;
  recipientChats?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<Scalars['ID']>;
  teacher?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CreateCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Comment', body: string, createdAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DeleteCommentMutationVariables = Exact<{
  deleteCommentId: Scalars['ID'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdateCommentMutationVariables = Exact<{
  updateCommentId: Scalars['ID'];
  data: CommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Comment', body: string } | null | undefined } | null | undefined } | null | undefined };

export type DeleteNotificationMutationVariables = Exact<{
  deleteNotificationId: Scalars['ID'];
}>;


export type DeleteNotificationMutation = { __typename?: 'Mutation', deleteNotification?: { __typename?: 'NotificationEntityResponse', data?: { __typename?: 'NotificationEntity', id?: string | null | undefined } | null | undefined } | null | undefined };

export type CreateSupportMessageMutationVariables = Exact<{
  data: SupportMessageInput;
}>;


export type CreateSupportMessageMutation = { __typename?: 'Mutation', createSupportMessage?: { __typename?: 'SupportMessageEntityResponse', data?: { __typename?: 'SupportMessageEntity', id?: string | null | undefined } | null | undefined } | null | undefined };

export type CreatePostMutationVariables = Exact<{
  data: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DeletePostMutationVariables = Exact<{
  deletePostId: Scalars['ID'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdatePostMutationVariables = Exact<{
  updatePostId: Scalars['ID'];
  data: PostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type ChangePasswordMutationVariables = Exact<{
  updateUsersPermissionsUserId: Scalars['ID'];
  data: UsersPermissionsUserInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined } | null | undefined } };

export type EditBackGroundImageMutationVariables = Exact<{
  updateUsersPermissionsUserId: Scalars['ID'];
  data: UsersPermissionsUserInput;
}>;


export type EditBackGroundImageMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', backgroundImg?: string | null | undefined } | null | undefined } | null | undefined } };

export type EditProfileImageMutationVariables = Exact<{
  updateUsersPermissionsUserId: Scalars['ID'];
  data: UsersPermissionsUserInput;
}>;


export type EditProfileImageMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', img?: string | null | undefined } | null | undefined } | null | undefined } };

export type UpdateMeMutationVariables = Exact<{
  updateUsersPermissionsUserId: Scalars['ID'];
  data: UsersPermissionsUserInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, fullName?: string | null | undefined, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined } };

export type UpdateUserStatusMutationVariables = Exact<{
  id: Scalars['ID'];
  data: UsersPermissionsUserInput;
}>;


export type UpdateUserStatusMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined } | null | undefined } };

export type ArticleQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
}>;


export type ArticleQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null | undefined, attributes?: { __typename?: 'Article', title?: string | null | undefined, body: string, createdAt?: any | null | undefined, slug?: string | null | undefined, updatedAt?: any | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined, image?: string | null | undefined, type?: string | null | undefined, locale?: string | null | undefined, author?: string | null | undefined, keywords?: string | null | undefined } | null | undefined, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null | undefined, attributes?: { __typename?: 'Author', jobTitle?: string | null | undefined, bio?: string | null | undefined, fullName?: string | null | undefined, updatedAt?: any | null | undefined, slug?: string | null | undefined, firstName?: string | null | undefined, lastName: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type ArticlesQueryVariables = Exact<{
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type ArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null | undefined, attributes?: { __typename?: 'Article', title?: string | null | undefined, description?: string | null | undefined, slug?: string | null | undefined, updatedAt?: any | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type RecentArticlesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type RecentArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null | undefined, attributes?: { __typename?: 'Article', title?: string | null | undefined, slug?: string | null | undefined, updatedAt?: any | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type GetBooksQueryVariables = Exact<{
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetBooksQuery = { __typename?: 'Query', books?: { __typename?: 'BookEntityResponseCollection', data: Array<{ __typename?: 'BookEntity', id?: string | null | undefined, attributes?: { __typename?: 'Book', title?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined, link?: string | null | undefined, author?: string | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, total: number, pageSize: number, pageCount: number } } } | null | undefined };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined, description?: string | null | undefined, slug?: string | null | undefined } | null | undefined }> } | null | undefined };

export type ChatMsgsQueryVariables = Exact<{
  filters?: InputMaybe<ChatMsgFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ChatMsgsQuery = { __typename?: 'Query', chatMsgs?: { __typename?: 'ChatMsgEntityResponseCollection', data: Array<{ __typename?: 'ChatMsgEntity', id?: string | null | undefined, attributes?: { __typename?: 'ChatMsg', isRead?: boolean | null | undefined, body?: string | null | undefined, updatedAt?: any | null | undefined, sender?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, chat?: { __typename?: 'ChatEntityResponse', data?: { __typename?: 'ChatEntity', id?: string | null | undefined, attributes?: { __typename?: 'Chat', slug: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type ChatsQueryVariables = Exact<{
  filters?: InputMaybe<ChatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  msgsPagination2?: InputMaybe<PaginationArg>;
  msgsSort2?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ChatsQuery = { __typename?: 'Query', chats?: { __typename?: 'ChatEntityResponseCollection', data: Array<{ __typename?: 'ChatEntity', id?: string | null | undefined, attributes?: { __typename?: 'Chat', owner?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, recipient?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, msgs?: { __typename?: 'ChatMsgRelationResponseCollection', data: Array<{ __typename?: 'ChatMsgEntity', id?: string | null | undefined, attributes?: { __typename?: 'ChatMsg', isRead?: boolean | null | undefined, body?: string | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined } | null | undefined }> } | null | undefined };

export type SearchUsersQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
}>;


export type SearchUsersQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined }> } | null | undefined };

export type CommentsQueryVariables = Exact<{
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments?: { __typename?: 'CommentEntityResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Comment', body: string, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', slug: string, username: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type GroupCommentsQueryVariables = Exact<{
  filters?: InputMaybe<GroupCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GroupCommentsQuery = { __typename?: 'Query', groupComments?: { __typename?: 'GroupCommentEntityResponseCollection', data: Array<{ __typename?: 'GroupCommentEntity', id?: string | null | undefined, attributes?: { __typename?: 'GroupComment', body?: string | null | undefined, updatedAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type CourseQueryVariables = Exact<{
  filters?: InputMaybe<CourseFiltersInput>;
  groupsFilters2?: InputMaybe<GroupFiltersInput>;
}>;


export type CourseQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, duration?: number | null | undefined, introduction?: string | null | undefined, description?: string | null | undefined, notes?: string | null | undefined, level?: Enum_Course_Level | null | undefined, price: number, hasPrivateVersion?: boolean | null | undefined, soloPrice?: number | null | undefined, isFree: boolean, image?: string | null | undefined, totalStudents?: number | null | undefined, totalLessons: number, courseType: Enum_Course_Coursetype, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, publishedAt?: any | null | undefined, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined, image?: string | null | undefined, locale?: string | null | undefined, type?: string | null | undefined, author?: string | null | undefined, keywords?: string | null | undefined } | null | undefined, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null | undefined, attributes?: { __typename?: 'Teacher', fullName?: string | null | undefined, image?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, groups?: { __typename?: 'GroupRelationResponseCollection', data: Array<{ __typename?: 'GroupEntity', id?: string | null | undefined, attributes?: { __typename?: 'Group', slug?: string | null | undefined } | null | undefined }> } | null | undefined, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', description?: string | null | undefined, name?: string | null | undefined, slug?: string | null | undefined } | null | undefined }> } | null | undefined } | null | undefined }> } | null | undefined };

export type CoursesQueryVariables = Exact<{
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type CoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, duration?: number | null | undefined, introduction?: string | null | undefined, description?: string | null | undefined, level?: Enum_Course_Level | null | undefined, price: number, soloPrice?: number | null | undefined, isFree: boolean, hasPrivateVersion?: boolean | null | undefined, image?: string | null | undefined, totalStudents?: number | null | undefined, reviews?: { __typename?: 'ReviewRelationResponseCollection', data: Array<{ __typename?: 'ReviewEntity', id?: string | null | undefined, attributes?: { __typename?: 'Review', rating?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null | undefined };

export type GroupQueryVariables = Exact<{
  filters?: InputMaybe<GroupFiltersInput>;
}>;


export type GroupQuery = { __typename?: 'Query', groups?: { __typename?: 'GroupEntityResponseCollection', data: Array<{ __typename?: 'GroupEntity', id?: string | null | undefined, attributes?: { __typename?: 'Group', name?: string | null | undefined, slug?: string | null | undefined, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, introduction?: string | null | undefined, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null | undefined, attributes?: { __typename?: 'Teacher', url?: string | null | undefined, fullName?: string | null | undefined, title?: string | null | undefined, image?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined, lectures?: Array<{ __typename?: 'ComponentLecturesLectures', id: string, title?: string | null | undefined, date?: any | null | undefined, video?: string | null | undefined, notes?: string | null | undefined, progress?: number | null | undefined, duration?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined }> } | null | undefined };

export type QuestionAndAnswersQueryVariables = Exact<{
  filters?: InputMaybe<QuestionAndAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type QuestionAndAnswersQuery = { __typename?: 'Query', questionAndAnswers?: { __typename?: 'QuestionAndAnswerEntityResponseCollection', data: Array<{ __typename?: 'QuestionAndAnswerEntity', id?: string | null | undefined, attributes?: { __typename?: 'QuestionAndAnswer', title?: string | null | undefined, question?: string | null | undefined, updatedAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type RecentCoursesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type RecentCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, price: number, duration?: number | null | undefined, image?: string | null | undefined, hasPrivateVersion?: boolean | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined };

export type RelatedCoursesQueryVariables = Exact<{
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type RelatedCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, duration?: number | null | undefined, level?: Enum_Course_Level | null | undefined, price: number, soloPrice?: number | null | undefined, hasPrivateVersion?: boolean | null | undefined, isFree: boolean, image?: string | null | undefined, totalStudents?: number | null | undefined, reviews?: { __typename?: 'ReviewRelationResponseCollection', data: Array<{ __typename?: 'ReviewEntity', id?: string | null | undefined, attributes?: { __typename?: 'Review', rating?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined }> } | null | undefined };

export type ReviewsQueryVariables = Exact<{
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews?: { __typename?: 'ReviewEntityResponseCollection', data: Array<{ __typename?: 'ReviewEntity', id?: string | null | undefined, attributes?: { __typename?: 'Review', message?: string | null | undefined, rating?: number | null | undefined, createdAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', title: string, slug: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type UserGroupsQueryVariables = Exact<{
  usersPermissionsUserId?: InputMaybe<Scalars['ID']>;
}>;


export type UserGroupsQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', groups?: { __typename?: 'GroupRelationResponseCollection', data: Array<{ __typename?: 'GroupEntity', id?: string | null | undefined, attributes?: { __typename?: 'Group', slug?: string | null | undefined, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', title: string, level?: Enum_Course_Level | null | undefined, image?: string | null | undefined, duration?: number | null | undefined, reviews?: { __typename?: 'ReviewRelationResponseCollection', data: Array<{ __typename?: 'ReviewEntity', id?: string | null | undefined, attributes?: { __typename?: 'Review', rating?: number | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type NotificationsQueryVariables = Exact<{
  filters?: InputMaybe<NotificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type NotificationsQuery = { __typename?: 'Query', notifications?: { __typename?: 'NotificationEntityResponseCollection', data: Array<{ __typename?: 'NotificationEntity', id?: string | null | undefined, attributes?: { __typename?: 'Notification', from?: string | null | undefined, title?: string | null | undefined, body?: string | null | undefined, type?: string | null | undefined, image?: string | null | undefined, isRead?: boolean | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined };

export type GetUnReadNotificationsQueryVariables = Exact<{
  filters?: InputMaybe<NotificationFiltersInput>;
}>;


export type GetUnReadNotificationsQuery = { __typename?: 'Query', notifications?: { __typename?: 'NotificationEntityResponseCollection', data: Array<{ __typename?: 'NotificationEntity', id?: string | null | undefined }> } | null | undefined };

export type MyOrdersQueryVariables = Exact<{
  filters?: InputMaybe<OrderFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type MyOrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrderEntityResponseCollection', data: Array<{ __typename?: 'OrderEntity', id?: string | null | undefined, attributes?: { __typename?: 'Order', checkout_session?: string | null | undefined, status: Enum_Order_Status, total: number, updatedAt?: any | null | undefined, quantity: number, imageUrl: string, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, price: number, isFree: boolean, level?: Enum_Course_Level | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type PostQueryVariables = Exact<{
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type PostQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, total_comments?: number | null | undefined, points?: number | null | undefined, body?: string | null | undefined, createdAt?: any | null | undefined, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Comment', body: string, createdAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', slug: string, username: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined, post_points?: { __typename?: 'PostPointRelationResponseCollection', data: Array<{ __typename?: 'PostPointEntity', id?: string | null | undefined, attributes?: { __typename?: 'PostPoint', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type PostsQueryVariables = Exact<{
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type PostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, total_comments?: number | null | undefined, points?: number | null | undefined, body?: string | null | undefined, createdAt?: any | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type GetUserQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
  coursesSort2?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  coursesPagination2?: InputMaybe<PaginationArg>;
}>;


export type GetUserQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined, slug: string, description?: string | null | undefined, location?: string | null | undefined, createdAt?: any | null | undefined, backgroundImg?: string | null | undefined, img?: string | null | undefined, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, points?: number | null | undefined, total_comments?: number | null | undefined, body?: string | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Student', courseCount?: number | null | undefined, courses?: { __typename?: 'CourseRelationResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, image?: string | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type MeQueryVariables = Exact<{
  usersPermissionsUserId?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<PostFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type MeQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, location?: string | null | undefined, slug: string, fullName?: string | null | undefined, img?: string | null | undefined, backgroundImg?: string | null | undefined, createdAt?: any | null | undefined, description?: string | null | undefined, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, points?: number | null | undefined, body?: string | null | undefined, total_comments?: number | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type GetMyGroupsQueryVariables = Exact<{
  filters?: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetMyGroupsQuery = { __typename?: 'Query', groups?: { __typename?: 'GroupEntityResponseCollection', data: Array<{ __typename?: 'GroupEntity', id?: string | null | undefined, attributes?: { __typename?: 'Group', slug?: string | null | undefined, name?: string | null | undefined, active?: boolean | null | undefined, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, image?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type UserQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
  postsFilters2?: InputMaybe<PostFiltersInput>;
}>;


export type UserQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined, slug: string, description?: string | null | undefined, location?: string | null | undefined, img?: string | null | undefined, backgroundImg?: string | null | undefined, createdAt?: any | null | undefined, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, total_comments?: number | null | undefined, points?: number | null | undefined, body?: string | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined } | null | undefined }> } | null | undefined };

export type UploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadMutation = { __typename?: 'Mutation', upload: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } };


export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentInput!) {
  createComment(data: $data) {
    data {
      id
      attributes {
        body
        createdAt
        user {
          data {
            id
            attributes {
              username
              slug
              img
            }
          }
        }
      }
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($deleteCommentId: ID!) {
  deleteComment(id: $deleteCommentId) {
    data {
      id
    }
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      deleteCommentId: // value for 'deleteCommentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation UpdateComment($updateCommentId: ID!, $data: CommentInput!) {
  updateComment(id: $updateCommentId, data: $data) {
    data {
      id
      attributes {
        body
      }
    }
  }
}
    `;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      updateCommentId: // value for 'updateCommentId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteNotificationDocument = gql`
    mutation DeleteNotification($deleteNotificationId: ID!) {
  deleteNotification(id: $deleteNotificationId) {
    data {
      id
    }
  }
}
    `;
export type DeleteNotificationMutationFn = Apollo.MutationFunction<DeleteNotificationMutation, DeleteNotificationMutationVariables>;

/**
 * __useDeleteNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNotificationMutation, { data, loading, error }] = useDeleteNotificationMutation({
 *   variables: {
 *      deleteNotificationId: // value for 'deleteNotificationId'
 *   },
 * });
 */
export function useDeleteNotificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNotificationMutation, DeleteNotificationMutationVariables>(DeleteNotificationDocument, options);
      }
export type DeleteNotificationMutationHookResult = ReturnType<typeof useDeleteNotificationMutation>;
export type DeleteNotificationMutationResult = Apollo.MutationResult<DeleteNotificationMutation>;
export type DeleteNotificationMutationOptions = Apollo.BaseMutationOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>;
export const CreateSupportMessageDocument = gql`
    mutation CreateSupportMessage($data: SupportMessageInput!) {
  createSupportMessage(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateSupportMessageMutationFn = Apollo.MutationFunction<CreateSupportMessageMutation, CreateSupportMessageMutationVariables>;

/**
 * __useCreateSupportMessageMutation__
 *
 * To run a mutation, you first call `useCreateSupportMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSupportMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSupportMessageMutation, { data, loading, error }] = useCreateSupportMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSupportMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateSupportMessageMutation, CreateSupportMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSupportMessageMutation, CreateSupportMessageMutationVariables>(CreateSupportMessageDocument, options);
      }
export type CreateSupportMessageMutationHookResult = ReturnType<typeof useCreateSupportMessageMutation>;
export type CreateSupportMessageMutationResult = Apollo.MutationResult<CreateSupportMessageMutation>;
export type CreateSupportMessageMutationOptions = Apollo.BaseMutationOptions<CreateSupportMessageMutation, CreateSupportMessageMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($data: PostInput!) {
  createPost(data: $data) {
    data {
      id
      attributes {
        title
        slug
      }
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($deletePostId: ID!) {
  deletePost(id: $deletePostId) {
    data {
      id
    }
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      deletePostId: // value for 'deletePostId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($updatePostId: ID!, $data: PostInput!) {
  updatePost(id: $updatePostId, data: $data) {
    data {
      id
      attributes {
        title
        slug
      }
    }
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      updatePostId: // value for 'updatePostId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      id
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      updateUsersPermissionsUserId: // value for 'updateUsersPermissionsUserId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const EditBackGroundImageDocument = gql`
    mutation EditBackGroundImage($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      id
      attributes {
        backgroundImg
      }
    }
  }
}
    `;
export type EditBackGroundImageMutationFn = Apollo.MutationFunction<EditBackGroundImageMutation, EditBackGroundImageMutationVariables>;

/**
 * __useEditBackGroundImageMutation__
 *
 * To run a mutation, you first call `useEditBackGroundImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBackGroundImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBackGroundImageMutation, { data, loading, error }] = useEditBackGroundImageMutation({
 *   variables: {
 *      updateUsersPermissionsUserId: // value for 'updateUsersPermissionsUserId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditBackGroundImageMutation(baseOptions?: Apollo.MutationHookOptions<EditBackGroundImageMutation, EditBackGroundImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditBackGroundImageMutation, EditBackGroundImageMutationVariables>(EditBackGroundImageDocument, options);
      }
export type EditBackGroundImageMutationHookResult = ReturnType<typeof useEditBackGroundImageMutation>;
export type EditBackGroundImageMutationResult = Apollo.MutationResult<EditBackGroundImageMutation>;
export type EditBackGroundImageMutationOptions = Apollo.BaseMutationOptions<EditBackGroundImageMutation, EditBackGroundImageMutationVariables>;
export const EditProfileImageDocument = gql`
    mutation EditProfileImage($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      id
      attributes {
        img
      }
    }
  }
}
    `;
export type EditProfileImageMutationFn = Apollo.MutationFunction<EditProfileImageMutation, EditProfileImageMutationVariables>;

/**
 * __useEditProfileImageMutation__
 *
 * To run a mutation, you first call `useEditProfileImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileImageMutation, { data, loading, error }] = useEditProfileImageMutation({
 *   variables: {
 *      updateUsersPermissionsUserId: // value for 'updateUsersPermissionsUserId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditProfileImageMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileImageMutation, EditProfileImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProfileImageMutation, EditProfileImageMutationVariables>(EditProfileImageDocument, options);
      }
export type EditProfileImageMutationHookResult = ReturnType<typeof useEditProfileImageMutation>;
export type EditProfileImageMutationResult = Apollo.MutationResult<EditProfileImageMutation>;
export type EditProfileImageMutationOptions = Apollo.BaseMutationOptions<EditProfileImageMutation, EditProfileImageMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      id
      attributes {
        email
        username
        fullName
        description
        location
      }
    }
  }
}
    `;
export type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      updateUsersPermissionsUserId: // value for 'updateUsersPermissionsUserId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const UpdateUserStatusDocument = gql`
    mutation UpdateUserStatus($id: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateUserStatusMutationFn = Apollo.MutationFunction<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>;

/**
 * __useUpdateUserStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserStatusMutation, { data, loading, error }] = useUpdateUserStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>(UpdateUserStatusDocument, options);
      }
export type UpdateUserStatusMutationHookResult = ReturnType<typeof useUpdateUserStatusMutation>;
export type UpdateUserStatusMutationResult = Apollo.MutationResult<UpdateUserStatusMutation>;
export type UpdateUserStatusMutationOptions = Apollo.BaseMutationOptions<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>;
export const ArticleDocument = gql`
    query Article($filters: ArticleFiltersInput) {
  articles(filters: $filters) {
    data {
      id
      attributes {
        title
        body
        createdAt
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        heroImage {
          data {
            id
            attributes {
              url
            }
          }
        }
        slug
        updatedAt
        SEO {
          id
          title
          description
          url
          image
          type
          locale
          author
          keywords
        }
        author {
          data {
            id
            attributes {
              jobTitle
              bio
              fullName
              updatedAt
              avatar {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              slug
              firstName
              lastName
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = gql`
    query Articles($sort: [String], $pagination: PaginationArg) {
  articles(sort: $sort, pagination: $pagination) {
    data {
      id
      attributes {
        title
        description
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        heroImage {
          data {
            id
            attributes {
              url
            }
          }
        }
        slug
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const RecentArticlesDocument = gql`
    query RecentArticles($pagination: PaginationArg, $sort: [String]) {
  articles(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        heroImage {
          data {
            id
            attributes {
              url
            }
          }
        }
        slug
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useRecentArticlesQuery__
 *
 * To run a query within a React component, call `useRecentArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentArticlesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useRecentArticlesQuery(baseOptions?: Apollo.QueryHookOptions<RecentArticlesQuery, RecentArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentArticlesQuery, RecentArticlesQueryVariables>(RecentArticlesDocument, options);
      }
export function useRecentArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentArticlesQuery, RecentArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentArticlesQuery, RecentArticlesQueryVariables>(RecentArticlesDocument, options);
        }
export type RecentArticlesQueryHookResult = ReturnType<typeof useRecentArticlesQuery>;
export type RecentArticlesLazyQueryHookResult = ReturnType<typeof useRecentArticlesLazyQuery>;
export type RecentArticlesQueryResult = Apollo.QueryResult<RecentArticlesQuery, RecentArticlesQueryVariables>;
export const GetBooksDocument = gql`
    query GetBooks($sort: [String], $pagination: PaginationArg) {
  books(sort: $sort, pagination: $pagination) {
    data {
      id
      attributes {
        title
        description
        image
        link
        author
        category {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        total
        pageSize
        pageCount
      }
    }
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    data {
      id
      attributes {
        name
        description
        slug
      }
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ChatMsgsDocument = gql`
    query ChatMsgs($filters: ChatMsgFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  chatMsgs(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        isRead
        body
        updatedAt
        sender {
          data {
            id
            attributes {
              username
              slug
              img
            }
          }
        }
        chat {
          data {
            id
            attributes {
              slug
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useChatMsgsQuery__
 *
 * To run a query within a React component, call `useChatMsgsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMsgsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMsgsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useChatMsgsQuery(baseOptions?: Apollo.QueryHookOptions<ChatMsgsQuery, ChatMsgsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatMsgsQuery, ChatMsgsQueryVariables>(ChatMsgsDocument, options);
      }
export function useChatMsgsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatMsgsQuery, ChatMsgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatMsgsQuery, ChatMsgsQueryVariables>(ChatMsgsDocument, options);
        }
export type ChatMsgsQueryHookResult = ReturnType<typeof useChatMsgsQuery>;
export type ChatMsgsLazyQueryHookResult = ReturnType<typeof useChatMsgsLazyQuery>;
export type ChatMsgsQueryResult = Apollo.QueryResult<ChatMsgsQuery, ChatMsgsQueryVariables>;
export const ChatsDocument = gql`
    query Chats($filters: ChatFiltersInput, $pagination: PaginationArg, $sort: [String], $msgsPagination2: PaginationArg, $msgsSort2: [String]) {
  chats(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        owner {
          data {
            id
            attributes {
              username
              slug
              img
            }
          }
        }
        recipient {
          data {
            id
            attributes {
              username
              slug
              img
            }
          }
        }
        msgs(pagination: $msgsPagination2, sort: $msgsSort2) {
          data {
            id
            attributes {
              isRead
              body
              updatedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useChatsQuery__
 *
 * To run a query within a React component, call `useChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      msgsPagination2: // value for 'msgsPagination2'
 *      msgsSort2: // value for 'msgsSort2'
 *   },
 * });
 */
export function useChatsQuery(baseOptions?: Apollo.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
      }
export function useChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
        }
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsLazyQueryHookResult = ReturnType<typeof useChatsLazyQuery>;
export type ChatsQueryResult = Apollo.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const SearchUsersDocument = gql`
    query SearchUsers($filters: UsersPermissionsUserFiltersInput) {
  usersPermissionsUsers(filters: $filters) {
    data {
      id
      attributes {
        username
        slug
        img
      }
    }
  }
}
    `;

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSearchUsersQuery(baseOptions?: Apollo.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
      }
export function useSearchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersQueryResult = Apollo.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;
export const CommentsDocument = gql`
    query Comments($filters: CommentFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  comments(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        body
        createdAt
        updatedAt
        user {
          data {
            id
            attributes {
              slug
              username
              img
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const GroupCommentsDocument = gql`
    query GroupComments($filters: GroupCommentFiltersInput, $pagination: PaginationArg) {
  groupComments(filters: $filters, pagination: $pagination) {
    data {
      id
      attributes {
        body
        updatedAt
        user {
          data {
            id
            attributes {
              username
              fullName
              slug
              img
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGroupCommentsQuery__
 *
 * To run a query within a React component, call `useGroupCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupCommentsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGroupCommentsQuery(baseOptions?: Apollo.QueryHookOptions<GroupCommentsQuery, GroupCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupCommentsQuery, GroupCommentsQueryVariables>(GroupCommentsDocument, options);
      }
export function useGroupCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupCommentsQuery, GroupCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupCommentsQuery, GroupCommentsQueryVariables>(GroupCommentsDocument, options);
        }
export type GroupCommentsQueryHookResult = ReturnType<typeof useGroupCommentsQuery>;
export type GroupCommentsLazyQueryHookResult = ReturnType<typeof useGroupCommentsLazyQuery>;
export type GroupCommentsQueryResult = Apollo.QueryResult<GroupCommentsQuery, GroupCommentsQueryVariables>;
export const CourseDocument = gql`
    query Course($filters: CourseFiltersInput, $groupsFilters2: GroupFiltersInput) {
  courses(filters: $filters) {
    data {
      id
      attributes {
        slug
        title
        duration
        introduction
        description
        notes
        level
        price
        hasPrivateVersion
        soloPrice
        isFree
        image
        totalStudents
        totalLessons
        courseType
        createdAt
        updatedAt
        publishedAt
        SEO {
          id
          title
          description
          url
          image
          locale
          type
          author
          keywords
        }
        teacher {
          data {
            id
            attributes {
              fullName
              image
              title
            }
          }
        }
        groups(filters: $groupsFilters2) {
          data {
            id
            attributes {
              slug
            }
          }
        }
        categories {
          data {
            id
            attributes {
              description
              name
              slug
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      groupsFilters2: // value for 'groupsFilters2'
 *   },
 * });
 */
export function useCourseQuery(baseOptions?: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export const CoursesDocument = gql`
    query Courses($filters: CourseFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  courses(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        slug
        title
        duration
        introduction
        description
        level
        price
        soloPrice
        isFree
        hasPrivateVersion
        image
        totalStudents
        reviews {
          data {
            id
            attributes {
              rating
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesQueryResult = Apollo.QueryResult<CoursesQuery, CoursesQueryVariables>;
export const GroupDocument = gql`
    query Group($filters: GroupFiltersInput) {
  groups(filters: $filters) {
    data {
      id
      attributes {
        name
        slug
        course {
          data {
            id
            attributes {
              slug
              title
              introduction
              teacher {
                data {
                  id
                  attributes {
                    url
                    fullName
                    title
                    image
                  }
                }
              }
            }
          }
        }
        lectures {
          id
          title
          date
          video
          notes
          progress
          duration
        }
      }
    }
  }
}
    `;

/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGroupQuery(baseOptions?: Apollo.QueryHookOptions<GroupQuery, GroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options);
      }
export function useGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupQuery, GroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options);
        }
export type GroupQueryHookResult = ReturnType<typeof useGroupQuery>;
export type GroupLazyQueryHookResult = ReturnType<typeof useGroupLazyQuery>;
export type GroupQueryResult = Apollo.QueryResult<GroupQuery, GroupQueryVariables>;
export const QuestionAndAnswersDocument = gql`
    query QuestionAndAnswers($filters: QuestionAndAnswerFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  questionAndAnswers(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        question
        updatedAt
        user {
          data {
            id
            attributes {
              username
              fullName
              slug
              img
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useQuestionAndAnswersQuery__
 *
 * To run a query within a React component, call `useQuestionAndAnswersQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionAndAnswersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionAndAnswersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useQuestionAndAnswersQuery(baseOptions?: Apollo.QueryHookOptions<QuestionAndAnswersQuery, QuestionAndAnswersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestionAndAnswersQuery, QuestionAndAnswersQueryVariables>(QuestionAndAnswersDocument, options);
      }
export function useQuestionAndAnswersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionAndAnswersQuery, QuestionAndAnswersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestionAndAnswersQuery, QuestionAndAnswersQueryVariables>(QuestionAndAnswersDocument, options);
        }
export type QuestionAndAnswersQueryHookResult = ReturnType<typeof useQuestionAndAnswersQuery>;
export type QuestionAndAnswersLazyQueryHookResult = ReturnType<typeof useQuestionAndAnswersLazyQuery>;
export type QuestionAndAnswersQueryResult = Apollo.QueryResult<QuestionAndAnswersQuery, QuestionAndAnswersQueryVariables>;
export const RecentCoursesDocument = gql`
    query RecentCourses($pagination: PaginationArg, $sort: [String]) {
  courses(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        slug
        title
        price
        duration
        image
        hasPrivateVersion
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useRecentCoursesQuery__
 *
 * To run a query within a React component, call `useRecentCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentCoursesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useRecentCoursesQuery(baseOptions?: Apollo.QueryHookOptions<RecentCoursesQuery, RecentCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentCoursesQuery, RecentCoursesQueryVariables>(RecentCoursesDocument, options);
      }
export function useRecentCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentCoursesQuery, RecentCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentCoursesQuery, RecentCoursesQueryVariables>(RecentCoursesDocument, options);
        }
export type RecentCoursesQueryHookResult = ReturnType<typeof useRecentCoursesQuery>;
export type RecentCoursesLazyQueryHookResult = ReturnType<typeof useRecentCoursesLazyQuery>;
export type RecentCoursesQueryResult = Apollo.QueryResult<RecentCoursesQuery, RecentCoursesQueryVariables>;
export const RelatedCoursesDocument = gql`
    query RelatedCourses($filters: CourseFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  courses(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        slug
        title
        duration
        level
        price
        soloPrice
        hasPrivateVersion
        isFree
        image
        totalStudents
        reviews {
          data {
            id
            attributes {
              rating
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRelatedCoursesQuery__
 *
 * To run a query within a React component, call `useRelatedCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelatedCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelatedCoursesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useRelatedCoursesQuery(baseOptions?: Apollo.QueryHookOptions<RelatedCoursesQuery, RelatedCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelatedCoursesQuery, RelatedCoursesQueryVariables>(RelatedCoursesDocument, options);
      }
export function useRelatedCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelatedCoursesQuery, RelatedCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelatedCoursesQuery, RelatedCoursesQueryVariables>(RelatedCoursesDocument, options);
        }
export type RelatedCoursesQueryHookResult = ReturnType<typeof useRelatedCoursesQuery>;
export type RelatedCoursesLazyQueryHookResult = ReturnType<typeof useRelatedCoursesLazyQuery>;
export type RelatedCoursesQueryResult = Apollo.QueryResult<RelatedCoursesQuery, RelatedCoursesQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews($filters: ReviewFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  reviews(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        message
        rating
        user {
          data {
            id
            attributes {
              username
              fullName
              slug
              img
            }
          }
        }
        createdAt
        course {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const UserGroupsDocument = gql`
    query UserGroups($usersPermissionsUserId: ID) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      attributes {
        groups {
          data {
            id
            attributes {
              slug
              course {
                data {
                  id
                  attributes {
                    title
                    level
                    image
                    duration
                    reviews {
                      data {
                        id
                        attributes {
                          rating
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserGroupsQuery__
 *
 * To run a query within a React component, call `useUserGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGroupsQuery({
 *   variables: {
 *      usersPermissionsUserId: // value for 'usersPermissionsUserId'
 *   },
 * });
 */
export function useUserGroupsQuery(baseOptions?: Apollo.QueryHookOptions<UserGroupsQuery, UserGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserGroupsQuery, UserGroupsQueryVariables>(UserGroupsDocument, options);
      }
export function useUserGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGroupsQuery, UserGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserGroupsQuery, UserGroupsQueryVariables>(UserGroupsDocument, options);
        }
export type UserGroupsQueryHookResult = ReturnType<typeof useUserGroupsQuery>;
export type UserGroupsLazyQueryHookResult = ReturnType<typeof useUserGroupsLazyQuery>;
export type UserGroupsQueryResult = Apollo.QueryResult<UserGroupsQuery, UserGroupsQueryVariables>;
export const NotificationsDocument = gql`
    query Notifications($filters: NotificationFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  notifications(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        from
        title
        body
        type
        image
        isRead
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<NotificationsQuery, NotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, options);
      }
export function useNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotificationsQuery, NotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, options);
        }
export type NotificationsQueryHookResult = ReturnType<typeof useNotificationsQuery>;
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>;
export type NotificationsQueryResult = Apollo.QueryResult<NotificationsQuery, NotificationsQueryVariables>;
export const GetUnReadNotificationsDocument = gql`
    query GetUnReadNotifications($filters: NotificationFiltersInput) {
  notifications(filters: $filters) {
    data {
      id
    }
  }
}
    `;

/**
 * __useGetUnReadNotificationsQuery__
 *
 * To run a query within a React component, call `useGetUnReadNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnReadNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnReadNotificationsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetUnReadNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<GetUnReadNotificationsQuery, GetUnReadNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnReadNotificationsQuery, GetUnReadNotificationsQueryVariables>(GetUnReadNotificationsDocument, options);
      }
export function useGetUnReadNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnReadNotificationsQuery, GetUnReadNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnReadNotificationsQuery, GetUnReadNotificationsQueryVariables>(GetUnReadNotificationsDocument, options);
        }
export type GetUnReadNotificationsQueryHookResult = ReturnType<typeof useGetUnReadNotificationsQuery>;
export type GetUnReadNotificationsLazyQueryHookResult = ReturnType<typeof useGetUnReadNotificationsLazyQuery>;
export type GetUnReadNotificationsQueryResult = Apollo.QueryResult<GetUnReadNotificationsQuery, GetUnReadNotificationsQueryVariables>;
export const MyOrdersDocument = gql`
    query MyOrders($filters: OrderFiltersInput, $sort: [String], $pagination: PaginationArg) {
  orders(filters: $filters, sort: $sort, pagination: $pagination) {
    data {
      id
      attributes {
        checkout_session
        status
        total
        updatedAt
        quantity
        imageUrl
        course {
          data {
            id
            attributes {
              slug
              title
              price
              isFree
              level
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMyOrdersQuery__
 *
 * To run a query within a React component, call `useMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrdersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMyOrdersQuery(baseOptions?: Apollo.QueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options);
      }
export function useMyOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options);
        }
export type MyOrdersQueryHookResult = ReturnType<typeof useMyOrdersQuery>;
export type MyOrdersLazyQueryHookResult = ReturnType<typeof useMyOrdersLazyQuery>;
export type MyOrdersQueryResult = Apollo.QueryResult<MyOrdersQuery, MyOrdersQueryVariables>;
export const PostDocument = gql`
    query Post($filters: PostFiltersInput, $pagination: PaginationArg) {
  posts(filters: $filters) {
    data {
      id
      attributes {
        title
        slug
        total_comments
        points
        body
        createdAt
        creator {
          data {
            id
            attributes {
              username
              slug
              img
            }
          }
        }
        comments(pagination: $pagination) {
          data {
            id
            attributes {
              body
              createdAt
              user {
                data {
                  id
                  attributes {
                    slug
                    username
                    img
                  }
                }
              }
            }
          }
        }
        post_points {
          data {
            id
            attributes {
              user {
                data {
                  id
                }
              }
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts($sort: [String], $pagination: PaginationArg) {
  posts(sort: $sort, pagination: $pagination) {
    data {
      id
      attributes {
        title
        slug
        total_comments
        points
        body
        createdAt
        category {
          data {
            attributes {
              name
              slug
            }
            id
          }
        }
        creator {
          data {
            id
            attributes {
              username
              slug
              img
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($filters: UsersPermissionsUserFiltersInput, $sort: [String], $pagination: PaginationArg, $coursesSort2: [String], $coursesPagination2: PaginationArg) {
  usersPermissionsUsers(filters: $filters) {
    data {
      id
      attributes {
        username
        fullName
        slug
        description
        location
        createdAt
        backgroundImg
        img
        posts(sort: $sort, pagination: $pagination) {
          data {
            id
            attributes {
              title
              slug
              points
              total_comments
              body
              updatedAt
            }
          }
        }
        student {
          data {
            id
            attributes {
              courseCount
              courses(sort: $coursesSort2, pagination: $coursesPagination2) {
                data {
                  id
                  attributes {
                    slug
                    title
                    image
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      coursesSort2: // value for 'coursesSort2'
 *      coursesPagination2: // value for 'coursesPagination2'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const MeDocument = gql`
    query Me($usersPermissionsUserId: ID, $filters: PostFiltersInput, $sort: [String], $pagination: PaginationArg) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      id
      attributes {
        username
        email
        location
        slug
        fullName
        img
        backgroundImg
        createdAt
        description
        posts(filters: $filters, sort: $sort, pagination: $pagination) {
          data {
            id
            attributes {
              title
              slug
              points
              body
              total_comments
              updatedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      usersPermissionsUserId: // value for 'usersPermissionsUserId'
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetMyGroupsDocument = gql`
    query GetMyGroups($filters: GroupFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  groups(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        slug
        name
        active
        course {
          data {
            id
            attributes {
              slug
              title
              image
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetMyGroupsQuery__
 *
 * To run a query within a React component, call `useGetMyGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyGroupsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetMyGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyGroupsQuery, GetMyGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyGroupsQuery, GetMyGroupsQueryVariables>(GetMyGroupsDocument, options);
      }
export function useGetMyGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyGroupsQuery, GetMyGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyGroupsQuery, GetMyGroupsQueryVariables>(GetMyGroupsDocument, options);
        }
export type GetMyGroupsQueryHookResult = ReturnType<typeof useGetMyGroupsQuery>;
export type GetMyGroupsLazyQueryHookResult = ReturnType<typeof useGetMyGroupsLazyQuery>;
export type GetMyGroupsQueryResult = Apollo.QueryResult<GetMyGroupsQuery, GetMyGroupsQueryVariables>;
export const UserDocument = gql`
    query User($filters: UsersPermissionsUserFiltersInput, $sort: [String], $pagination: PaginationArg, $postsFilters2: PostFiltersInput) {
  usersPermissionsUsers(filters: $filters) {
    data {
      id
      attributes {
        username
        fullName
        slug
        description
        location
        img
        backgroundImg
        createdAt
        posts(sort: $sort, pagination: $pagination, filters: $postsFilters2) {
          data {
            id
            attributes {
              title
              slug
              total_comments
              points
              body
              updatedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      postsFilters2: // value for 'postsFilters2'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UploadDocument = gql`
    mutation Upload($file: Upload!) {
  upload(file: $file) {
    data {
      id
      attributes {
        url
      }
    }
  }
}
    `;
export type UploadMutationFn = Apollo.MutationFunction<UploadMutation, UploadMutationVariables>;

/**
 * __useUploadMutation__
 *
 * To run a mutation, you first call `useUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMutation, { data, loading, error }] = useUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadMutation(baseOptions?: Apollo.MutationHookOptions<UploadMutation, UploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMutation, UploadMutationVariables>(UploadDocument, options);
      }
export type UploadMutationHookResult = ReturnType<typeof useUploadMutation>;
export type UploadMutationResult = Apollo.MutationResult<UploadMutation>;
export type UploadMutationOptions = Apollo.BaseMutationOptions<UploadMutation, UploadMutationVariables>;