const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    Object.prototype.hasOwnProperty.call(body, 'operationName') &&
    body.operationName === operationName
  );
};

const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  };
};

const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  };
};

export { hasOperationName, aliasQuery, aliasMutation }