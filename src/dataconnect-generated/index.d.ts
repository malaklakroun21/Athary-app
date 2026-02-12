import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CompleteMosaicArtData {
  mosaicArt_update?: MosaicArt_Key | null;
}

export interface CompleteMosaicArtVariables {
  mosaicArtId: UUIDString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetMosaicArtsForCurrentUserData {
  mosaicArts: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    imageUrl?: string | null;
    isCompleted: boolean;
    completionDate: DateString;
  } & MosaicArt_Key)[];
}

export interface Habit_Key {
  id: UUIDString;
  __typename?: 'Habit_Key';
}

export interface ListHabitsData {
  habits: ({
    id: UUIDString;
    name: string;
    description: string;
    frequency: string;
    reminderTime?: TimestampString | null;
  } & Habit_Key)[];
}

export interface MosaicArt_Key {
  id: UUIDString;
  __typename?: 'MosaicArt_Key';
}

export interface MosaicPiece_Key {
  id: UUIDString;
  __typename?: 'MosaicPiece_Key';
}

export interface TaskCompletion_Key {
  id: UUIDString;
  __typename?: 'TaskCompletion_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface GetMosaicArtsForCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMosaicArtsForCurrentUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMosaicArtsForCurrentUserData, undefined>;
  operationName: string;
}
export const getMosaicArtsForCurrentUserRef: GetMosaicArtsForCurrentUserRef;

export function getMosaicArtsForCurrentUser(): QueryPromise<GetMosaicArtsForCurrentUserData, undefined>;
export function getMosaicArtsForCurrentUser(dc: DataConnect): QueryPromise<GetMosaicArtsForCurrentUserData, undefined>;

interface CompleteMosaicArtRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CompleteMosaicArtVariables): MutationRef<CompleteMosaicArtData, CompleteMosaicArtVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CompleteMosaicArtVariables): MutationRef<CompleteMosaicArtData, CompleteMosaicArtVariables>;
  operationName: string;
}
export const completeMosaicArtRef: CompleteMosaicArtRef;

export function completeMosaicArt(vars: CompleteMosaicArtVariables): MutationPromise<CompleteMosaicArtData, CompleteMosaicArtVariables>;
export function completeMosaicArt(dc: DataConnect, vars: CompleteMosaicArtVariables): MutationPromise<CompleteMosaicArtData, CompleteMosaicArtVariables>;

interface ListHabitsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHabitsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHabitsData, undefined>;
  operationName: string;
}
export const listHabitsRef: ListHabitsRef;

export function listHabits(): QueryPromise<ListHabitsData, undefined>;
export function listHabits(dc: DataConnect): QueryPromise<ListHabitsData, undefined>;

