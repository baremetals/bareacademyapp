/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null,
  createdAt: string,
  name: string,
  startDate: string,
  endDate: string,
  contents: string,
  image: string,
};

export type ModelCourseConditionInput = {
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  createdAt: string,
  name: string,
  startDate: string,
  endDate: string,
  contents: string,
  image: string,
  updatedAt: string,
  admin?: string | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  createdAt: string,
  courseID: string,
  content: string,
  updatedAt: string,
  course?: Course | null,
  owner?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  createdAt: string,
  like: string,
  courseID: string,
  updatedAt: string,
  course?: Course | null,
  owner?: string | null,
};

export type UpdateCourseInput = {
  id: string,
  createdAt?: string | null,
  name?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  contents?: string | null,
  image?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  createdAt: string,
  courseID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  createdAt?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  createdAt?: string | null,
  courseID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  createdAt: string,
  like: string,
  courseID: string,
};

export type ModelLikeConditionInput = {
  createdAt?: ModelStringInput | null,
  like?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  createdAt?: string | null,
  like?: string | null,
  courseID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateBookInput = {
  id?: string | null,
  createdAt: string,
  name: string,
  author: string,
  image: string,
  url: string,
};

export type ModelBookConditionInput = {
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  createdAt: string,
  name: string,
  author: string,
  image: string,
  url: string,
  updatedAt: string,
  owner?: string | null,
  booklikes?: ModelBookLikeConnection | null,
};

export type ModelBookLikeConnection = {
  __typename: "ModelBookLikeConnection",
  items?:  Array<BookLike | null > | null,
  nextToken?: string | null,
};

export type BookLike = {
  __typename: "BookLike",
  id: string,
  createdAt: string,
  like: string,
  bookID: string,
  updatedAt: string,
  book?: Book | null,
  owner?: string | null,
};

export type UpdateBookInput = {
  id: string,
  createdAt?: string | null,
  name?: string | null,
  author?: string | null,
  image?: string | null,
  url?: string | null,
};

export type DeleteBookInput = {
  id: string,
};

export type CreateBookLikeInput = {
  id?: string | null,
  createdAt: string,
  like: string,
  bookID: string,
};

export type ModelBookLikeConditionInput = {
  createdAt?: ModelStringInput | null,
  like?: ModelStringInput | null,
  bookID?: ModelIDInput | null,
  and?: Array< ModelBookLikeConditionInput | null > | null,
  or?: Array< ModelBookLikeConditionInput | null > | null,
  not?: ModelBookLikeConditionInput | null,
};

export type UpdateBookLikeInput = {
  id: string,
  createdAt?: string | null,
  like?: string | null,
  bookID?: string | null,
};

export type DeleteBookLikeInput = {
  id: string,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items?:  Array<Course | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  like?: ModelStringInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items?:  Array<Book | null > | null,
  nextToken?: string | null,
};

export type ModelBookLikeFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  like?: ModelStringInput | null,
  bookID?: ModelIDInput | null,
  and?: Array< ModelBookLikeFilterInput | null > | null,
  or?: Array< ModelBookLikeFilterInput | null > | null,
  not?: ModelBookLikeFilterInput | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateBookLikeMutationVariables = {
  input: CreateBookLikeInput,
  condition?: ModelBookLikeConditionInput | null,
};

export type CreateBookLikeMutation = {
  createBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateBookLikeMutationVariables = {
  input: UpdateBookLikeInput,
  condition?: ModelBookLikeConditionInput | null,
};

export type UpdateBookLikeMutation = {
  updateBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteBookLikeMutationVariables = {
  input: DeleteBookLikeInput,
  condition?: ModelBookLikeConditionInput | null,
};

export type DeleteBookLikeMutation = {
  deleteBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items?:  Array< {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
      courseID: string,
      content: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        createdAt: string,
        name: string,
        startDate: string,
        endDate: string,
        contents: string,
        image: string,
        updatedAt: string,
        admin?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items?:  Array< {
      __typename: "Like",
      id: string,
      createdAt: string,
      like: string,
      courseID: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        createdAt: string,
        name: string,
        startDate: string,
        endDate: string,
        contents: string,
        image: string,
        updatedAt: string,
        admin?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items?:  Array< {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBookLikeQueryVariables = {
  id: string,
};

export type GetBookLikeQuery = {
  getBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListBookLikesQueryVariables = {
  filter?: ModelBookLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookLikesQuery = {
  listBookLikes?:  {
    __typename: "ModelBookLikeConnection",
    items?:  Array< {
      __typename: "BookLike",
      id: string,
      createdAt: string,
      like: string,
      bookID: string,
      updatedAt: string,
      book?:  {
        __typename: "Book",
        id: string,
        createdAt: string,
        name: string,
        author: string,
        image: string,
        url: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    createdAt: string,
    name: string,
    startDate: string,
    endDate: string,
    contents: string,
    image: string,
    updatedAt: string,
    admin?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        courseID: string,
        content: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        like: string,
        courseID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    courseID: string,
    content: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    createdAt: string,
    like: string,
    courseID: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      createdAt: string,
      name: string,
      startDate: string,
      endDate: string,
      contents: string,
      image: string,
      updatedAt: string,
      admin?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    createdAt: string,
    name: string,
    author: string,
    image: string,
    url: string,
    updatedAt: string,
    owner?: string | null,
    booklikes?:  {
      __typename: "ModelBookLikeConnection",
      items?:  Array< {
        __typename: "BookLike",
        id: string,
        createdAt: string,
        like: string,
        bookID: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateBookLikeSubscription = {
  onCreateBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBookLikeSubscription = {
  onUpdateBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBookLikeSubscription = {
  onDeleteBookLike?:  {
    __typename: "BookLike",
    id: string,
    createdAt: string,
    like: string,
    bookID: string,
    updatedAt: string,
    book?:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      name: string,
      author: string,
      image: string,
      url: string,
      updatedAt: string,
      owner?: string | null,
      booklikes?:  {
        __typename: "ModelBookLikeConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
