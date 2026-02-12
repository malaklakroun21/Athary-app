import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'athary-app',
  location: 'us-east4'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const getMosaicArtsForCurrentUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMosaicArtsForCurrentUser');
}
getMosaicArtsForCurrentUserRef.operationName = 'GetMosaicArtsForCurrentUser';

export function getMosaicArtsForCurrentUser(dc) {
  return executeQuery(getMosaicArtsForCurrentUserRef(dc));
}

export const completeMosaicArtRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteMosaicArt', inputVars);
}
completeMosaicArtRef.operationName = 'CompleteMosaicArt';

export function completeMosaicArt(dcOrVars, vars) {
  return executeMutation(completeMosaicArtRef(dcOrVars, vars));
}

export const listHabitsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHabits');
}
listHabitsRef.operationName = 'ListHabits';

export function listHabits(dc) {
  return executeQuery(listHabitsRef(dc));
}

