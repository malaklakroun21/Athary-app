import { CreateUserData, GetMosaicArtsForCurrentUserData, CompleteMosaicArtData, CompleteMosaicArtVariables, ListHabitsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useGetMosaicArtsForCurrentUser(options?: useDataConnectQueryOptions<GetMosaicArtsForCurrentUserData>): UseDataConnectQueryResult<GetMosaicArtsForCurrentUserData, undefined>;
export function useGetMosaicArtsForCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetMosaicArtsForCurrentUserData>): UseDataConnectQueryResult<GetMosaicArtsForCurrentUserData, undefined>;

export function useCompleteMosaicArt(options?: useDataConnectMutationOptions<CompleteMosaicArtData, FirebaseError, CompleteMosaicArtVariables>): UseDataConnectMutationResult<CompleteMosaicArtData, CompleteMosaicArtVariables>;
export function useCompleteMosaicArt(dc: DataConnect, options?: useDataConnectMutationOptions<CompleteMosaicArtData, FirebaseError, CompleteMosaicArtVariables>): UseDataConnectMutationResult<CompleteMosaicArtData, CompleteMosaicArtVariables>;

export function useListHabits(options?: useDataConnectQueryOptions<ListHabitsData>): UseDataConnectQueryResult<ListHabitsData, undefined>;
export function useListHabits(dc: DataConnect, options?: useDataConnectQueryOptions<ListHabitsData>): UseDataConnectQueryResult<ListHabitsData, undefined>;
