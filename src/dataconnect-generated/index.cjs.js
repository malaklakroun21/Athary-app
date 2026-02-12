const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'athary-app',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const getMosaicArtsForCurrentUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMosaicArtsForCurrentUser');
}
getMosaicArtsForCurrentUserRef.operationName = 'GetMosaicArtsForCurrentUser';
exports.getMosaicArtsForCurrentUserRef = getMosaicArtsForCurrentUserRef;

exports.getMosaicArtsForCurrentUser = function getMosaicArtsForCurrentUser(dc) {
  return executeQuery(getMosaicArtsForCurrentUserRef(dc));
};

const completeMosaicArtRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteMosaicArt', inputVars);
}
completeMosaicArtRef.operationName = 'CompleteMosaicArt';
exports.completeMosaicArtRef = completeMosaicArtRef;

exports.completeMosaicArt = function completeMosaicArt(dcOrVars, vars) {
  return executeMutation(completeMosaicArtRef(dcOrVars, vars));
};

const listHabitsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHabits');
}
listHabitsRef.operationName = 'ListHabits';
exports.listHabitsRef = listHabitsRef;

exports.listHabits = function listHabits(dc) {
  return executeQuery(listHabitsRef(dc));
};
