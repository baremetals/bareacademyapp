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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
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

export type ComponentCourseVideoVideos = {
  __typename?: 'ComponentCourseVideoVideos';
  course?: Maybe<CourseEntityResponse>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSeoSeoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  SEO?: Maybe<ComponentSeoSeo>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duration: Scalars['String'];
  endDate: Scalars['DateTime'];
  githubLink?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  introduction?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  startDate: Scalars['DateTime'];
  students?: Maybe<StudentRelationResponseCollection>;
  teacher?: Maybe<TeacherEntityResponse>;
  title: Scalars['String'];
  totalLessons: Scalars['Int'];
  totalStudents?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  videos?: Maybe<CourseVideoRelationResponseCollection>;
};


export type CourseCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseVideosArgs = {
  filters?: InputMaybe<CourseVideoFiltersInput>;
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
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  duration?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateTimeFilterInput>;
  githubLink?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  introduction?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  notes?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateTimeFilterInput>;
  students?: InputMaybe<StudentFiltersInput>;
  teacher?: InputMaybe<TeacherFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  totalLessons?: InputMaybe<IntFilterInput>;
  totalStudents?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  videos?: InputMaybe<CourseVideoFiltersInput>;
};

export type CourseInput = {
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  githubLink?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  teacher?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  totalLessons?: InputMaybe<Scalars['Int']>;
  totalStudents?: InputMaybe<Scalars['Int']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type CourseVideo = {
  __typename?: 'CourseVideo';
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDisabled?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type CourseVideoEntity = {
  __typename?: 'CourseVideoEntity';
  attributes?: Maybe<CourseVideo>;
  id?: Maybe<Scalars['ID']>;
};

export type CourseVideoEntityResponse = {
  __typename?: 'CourseVideoEntityResponse';
  data?: Maybe<CourseVideoEntity>;
};

export type CourseVideoEntityResponseCollection = {
  __typename?: 'CourseVideoEntityResponseCollection';
  data: Array<CourseVideoEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseVideoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CourseVideoFiltersInput>>>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isDisabled?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CourseVideoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseVideoFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type CourseVideoInput = {
  course?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CourseVideoRelationResponseCollection = {
  __typename?: 'CourseVideoRelationResponseCollection';
  data: Array<CourseVideoEntity>;
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

export type GenericMorph = Article | Author | Book | Category | Chat | ChatMsg | Comment | ComponentCourseVideoVideos | ComponentSeoSeo | Course | CourseVideo | I18NLocale | Notification | Post | PostPoint | Privacy | Search | Student | SupportMessage | Teacher | Term | UploadFile | UsersChat | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

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
  createCourseVideo?: Maybe<CourseVideoEntityResponse>;
  createNotification?: Maybe<NotificationEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createPostPoint?: Maybe<PostPointEntityResponse>;
  createStudent?: Maybe<StudentEntityResponse>;
  createSupportMessage?: Maybe<SupportMessageEntityResponse>;
  createTeacher?: Maybe<TeacherEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUsersChat?: Maybe<UsersChatEntityResponse>;
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
  deleteCourseVideo?: Maybe<CourseVideoEntityResponse>;
  deleteNotification?: Maybe<NotificationEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deletePostPoint?: Maybe<PostPointEntityResponse>;
  deletePrivacy?: Maybe<PrivacyEntityResponse>;
  deleteSearch?: Maybe<SearchEntityResponse>;
  deleteStudent?: Maybe<StudentEntityResponse>;
  deleteSupportMessage?: Maybe<SupportMessageEntityResponse>;
  deleteTeacher?: Maybe<TeacherEntityResponse>;
  deleteTerm?: Maybe<TermEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUsersChat?: Maybe<UsersChatEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
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
  updateCourseVideo?: Maybe<CourseVideoEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateNotification?: Maybe<NotificationEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updatePostPoint?: Maybe<PostPointEntityResponse>;
  updatePrivacy?: Maybe<PrivacyEntityResponse>;
  updateSearch?: Maybe<SearchEntityResponse>;
  updateStudent?: Maybe<StudentEntityResponse>;
  updateSupportMessage?: Maybe<SupportMessageEntityResponse>;
  updateTeacher?: Maybe<TeacherEntityResponse>;
  updateTerm?: Maybe<TermEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUsersChat?: Maybe<UsersChatEntityResponse>;
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


export type MutationCreateCourseVideoArgs = {
  data: CourseVideoInput;
};


export type MutationCreateNotificationArgs = {
  data: NotificationInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreatePostPointArgs = {
  data: PostPointInput;
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


export type MutationCreateUsersChatArgs = {
  data: UsersChatInput;
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


export type MutationDeleteCourseVideoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostPointArgs = {
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


export type MutationDeleteUsersChatArgs = {
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


export type MutationUpdateCourseVideoArgs = {
  data: CourseVideoInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationInput;
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


export type MutationUpdateUsersChatArgs = {
  data: UsersChatInput;
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
  courseVideo?: Maybe<CourseVideoEntityResponse>;
  courseVideos?: Maybe<CourseVideoEntityResponseCollection>;
  courses?: Maybe<CourseEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  notification?: Maybe<NotificationEntityResponse>;
  notifications?: Maybe<NotificationEntityResponseCollection>;
  post?: Maybe<PostEntityResponse>;
  postPoint?: Maybe<PostPointEntityResponse>;
  postPoints?: Maybe<PostPointEntityResponseCollection>;
  posts?: Maybe<PostEntityResponseCollection>;
  privacy?: Maybe<PrivacyEntityResponse>;
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
  usersChat?: Maybe<UsersChatEntityResponse>;
  usersChats?: Maybe<UsersChatEntityResponseCollection>;
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


export type QueryCourseVideoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCourseVideosArgs = {
  filters?: InputMaybe<CourseVideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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


export type QueryUsersChatArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersChatsArgs = {
  filters?: InputMaybe<UsersChatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
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

export type StudentRelationResponseCollection = {
  __typename?: 'StudentRelationResponseCollection';
  data: Array<StudentEntity>;
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
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tutor?: Maybe<UsersPermissionsUserEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TeacherFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeacherFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tutor?: InputMaybe<UsersPermissionsUserFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeacherInput = {
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  tutor?: InputMaybe<Scalars['ID']>;
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

export type UsersChat = {
  __typename?: 'UsersChat';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  room?: Maybe<Scalars['String']>;
  socketid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UsersChatEntity = {
  __typename?: 'UsersChatEntity';
  attributes?: Maybe<UsersChat>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersChatEntityResponse = {
  __typename?: 'UsersChatEntityResponse';
  data?: Maybe<UsersChatEntity>;
};

export type UsersChatEntityResponseCollection = {
  __typename?: 'UsersChatEntityResponseCollection';
  data: Array<UsersChatEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersChatFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersChatFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersChatFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersChatFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  room?: InputMaybe<StringFilterInput>;
  socketid?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersChatInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  room?: InputMaybe<Scalars['String']>;
  socketid?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
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
  img?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationRelationResponseCollection>;
  online?: Maybe<Scalars['Boolean']>;
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


export type UsersPermissionsUserNotificationsArgs = {
  filters?: InputMaybe<NotificationFiltersInput>;
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
  id?: InputMaybe<IdFilterInput>;
  img?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  notifications?: InputMaybe<NotificationFiltersInput>;
  online?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
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
  img?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  online?: InputMaybe<Scalars['Boolean']>;
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


export type ArticleQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null | undefined, attributes?: { __typename?: 'Article', title?: string | null | undefined, body: string, slug?: string | null | undefined, updatedAt?: any | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined, image?: string | null | undefined, type?: string | null | undefined, locale?: string | null | undefined } | null | undefined, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null | undefined, attributes?: { __typename?: 'Author', jobTitle?: string | null | undefined, bio?: string | null | undefined, fullName?: string | null | undefined, updatedAt?: any | null | undefined, slug?: string | null | undefined, firstName?: string | null | undefined, lastName: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

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
  filters?: InputMaybe<BookFiltersInput>;
}>;


export type GetBooksQuery = { __typename?: 'Query', books?: { __typename?: 'BookEntityResponseCollection', data: Array<{ __typename?: 'BookEntity', id?: string | null | undefined, attributes?: { __typename?: 'Book', title?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined, link?: string | null | undefined, author?: string | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

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

export type CourseQueryVariables = Exact<{
  filters?: InputMaybe<CourseFiltersInput>;
}>;


export type CourseQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, duration: string, description?: string | null | undefined, notes?: string | null | undefined, githubLink?: string | null | undefined, startDate: any, endDate: any, totalStudents?: number | null | undefined, totalLessons: number, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, publishedAt?: any | null | undefined, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null | undefined, attributes?: { __typename?: 'Teacher', tutor?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', fullName?: string | null | undefined, username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined, videos?: { __typename?: 'CourseVideoRelationResponseCollection', data: Array<{ __typename?: 'CourseVideoEntity', id?: string | null | undefined, attributes?: { __typename?: 'CourseVideo', title: string, description: string, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, publishedAt?: any | null | undefined, url: string } | null | undefined }> } | null | undefined, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Student', joined?: boolean | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined, image?: string | null | undefined, locale?: string | null | undefined, type?: string | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type CoursesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type CoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, duration: string, introduction?: string | null | undefined, description?: string | null | undefined, startDate: any, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type GetCoursesByUserIdQueryVariables = Exact<{
  filters?: InputMaybe<CourseFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetCoursesByUserIdQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, startDate: any, duration: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type RecentCoursesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type RecentCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, duration: string, updatedAt?: any | null | undefined, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

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

export type PostQueryVariables = Exact<{
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type PostQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, total_comments?: number | null | undefined, points?: number | null | undefined, body?: string | null | undefined, createdAt?: any | null | undefined, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Comment', body: string, createdAt?: any | null | undefined, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', slug: string, username: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined, post_points?: { __typename?: 'PostPointRelationResponseCollection', data: Array<{ __typename?: 'PostPointEntity', id?: string | null | undefined, attributes?: { __typename?: 'PostPoint', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, total_comments?: number | null | undefined, points?: number | null | undefined, body?: string | null | undefined, createdAt?: any | null | undefined, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null | undefined, attributes?: { __typename?: 'Category', name?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, slug: string, img?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type GetUserQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
  coursesSort2?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  coursesPagination2?: InputMaybe<PaginationArg>;
}>;


export type GetUserQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null | undefined, slug: string, description?: string | null | undefined, location?: string | null | undefined, createdAt?: any | null | undefined, backgroundImg?: string | null | undefined, img?: string | null | undefined, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, points?: number | null | undefined, total_comments?: number | null | undefined, body?: string | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Student', courseCount?: number | null | undefined, courses?: { __typename?: 'CourseRelationResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null | undefined, confirmed?: boolean | null | undefined } | null | undefined };

export type GetUserByIdQueryVariables = Exact<{
  usersPermissionsUserId?: InputMaybe<Scalars['ID']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  coursesSort2?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  coursesPagination2?: InputMaybe<PaginationArg>;
}>;


export type GetUserByIdQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null | undefined, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, createdAt?: any | null | undefined, location?: string | null | undefined, description?: string | null | undefined, slug: string, fullName?: string | null | undefined, img?: string | null | undefined, backgroundImg?: string | null | undefined, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null | undefined, attributes?: { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, points?: number | null | undefined, body?: string | null | undefined, total_comments?: number | null | undefined, updatedAt?: any | null | undefined } | null | undefined }> } | null | undefined, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null | undefined, attributes?: { __typename?: 'Student', courseCount?: number | null | undefined, courses?: { __typename?: 'CourseRelationResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null | undefined, attributes?: { __typename?: 'Course', slug: string, title: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null | undefined, attributes?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined }> } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

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
    query GetBooks($filters: BookFiltersInput) {
  books(filters: $filters) {
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
 *      filters: // value for 'filters'
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
export const CourseDocument = gql`
    query Course($filters: CourseFiltersInput) {
  courses(filters: $filters) {
    data {
      id
      attributes {
        slug
        title
        duration
        description
        notes
        githubLink
        image {
          data {
            id
            attributes {
              url
            }
          }
        }
        startDate
        endDate
        totalStudents
        totalLessons
        teacher {
          data {
            id
            attributes {
              tutor {
                data {
                  id
                  attributes {
                    fullName
                    username
                    slug
                    img
                  }
                }
              }
            }
          }
        }
        videos {
          data {
            id
            attributes {
              title
              description
              createdAt
              updatedAt
              publishedAt
              url
            }
          }
        }
        students {
          data {
            id
            attributes {
              joined
              user {
                data {
                  id
                  attributes {
                    username
                    fullName
                  }
                }
              }
            }
          }
        }
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
    query Courses($pagination: PaginationArg, $sort: [String]) {
  courses(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        slug
        title
        duration
        introduction
        description
        startDate
        image {
          data {
            id
            attributes {
              url
            }
          }
        }
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
export const GetCoursesByUserIdDocument = gql`
    query GetCoursesByUserId($filters: CourseFiltersInput, $sort: [String], $pagination: PaginationArg) {
  courses(filters: $filters, sort: $sort, pagination: $pagination) {
    data {
      id
      attributes {
        slug
        title
        startDate
        duration
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCoursesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetCoursesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesByUserIdQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetCoursesByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCoursesByUserIdQuery, GetCoursesByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoursesByUserIdQuery, GetCoursesByUserIdQueryVariables>(GetCoursesByUserIdDocument, options);
      }
export function useGetCoursesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesByUserIdQuery, GetCoursesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoursesByUserIdQuery, GetCoursesByUserIdQueryVariables>(GetCoursesByUserIdDocument, options);
        }
export type GetCoursesByUserIdQueryHookResult = ReturnType<typeof useGetCoursesByUserIdQuery>;
export type GetCoursesByUserIdLazyQueryHookResult = ReturnType<typeof useGetCoursesByUserIdLazyQuery>;
export type GetCoursesByUserIdQueryResult = Apollo.QueryResult<GetCoursesByUserIdQuery, GetCoursesByUserIdQueryVariables>;
export const RecentCoursesDocument = gql`
    query RecentCourses($pagination: PaginationArg, $sort: [String]) {
  courses(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        slug
        title
        duration
        image {
          data {
            id
            attributes {
              url
            }
          }
        }
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
    query Posts {
  posts {
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
                    image {
                      data {
                        id
                        attributes {
                          url
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
    query Me {
  me {
    id
    username
    email
    confirmed
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
export const GetUserByIdDocument = gql`
    query GetUserById($usersPermissionsUserId: ID, $pagination: PaginationArg, $sort: [String], $coursesSort2: [String], $coursesPagination2: PaginationArg) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      id
      attributes {
        username
        email
        createdAt
        location
        description
        slug
        fullName
        img
        backgroundImg
        posts(pagination: $pagination, sort: $sort) {
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
                    image {
                      data {
                        id
                        attributes {
                          url
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
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      usersPermissionsUserId: // value for 'usersPermissionsUserId'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      coursesSort2: // value for 'coursesSort2'
 *      coursesPagination2: // value for 'coursesPagination2'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
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