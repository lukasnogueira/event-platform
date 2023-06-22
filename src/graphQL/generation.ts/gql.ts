/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateSubscriber($name: String!, $email: String!) {\n  createSubscriber(data: {name: $name, email: $email}) {\n    id\n  }\n}": types.CreateSubscriberDocument,
    "query GetLessonsQuery {\n  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {\n    id\n    slug\n    title\n    lessonType\n    availableAt\n  }\n}": types.GetLessonsQueryDocument,
    "query GetLessonBySlug($slug: String) {\n  lesson(where: {slug: $slug}) {\n    title\n    videoId\n    description\n    teacher {\n      name\n      bio\n      avatarURL\n    }\n  }\n}": types.GetLessonBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateSubscriber($name: String!, $email: String!) {\n  createSubscriber(data: {name: $name, email: $email}) {\n    id\n  }\n}"): (typeof documents)["mutation CreateSubscriber($name: String!, $email: String!) {\n  createSubscriber(data: {name: $name, email: $email}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLessonsQuery {\n  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {\n    id\n    slug\n    title\n    lessonType\n    availableAt\n  }\n}"): (typeof documents)["query GetLessonsQuery {\n  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {\n    id\n    slug\n    title\n    lessonType\n    availableAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLessonBySlug($slug: String) {\n  lesson(where: {slug: $slug}) {\n    title\n    videoId\n    description\n    teacher {\n      name\n      bio\n      avatarURL\n    }\n  }\n}"): (typeof documents)["query GetLessonBySlug($slug: String) {\n  lesson(where: {slug: $slug}) {\n    title\n    videoId\n    description\n    teacher {\n      name\n      bio\n      avatarURL\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;