import gql from 'graphql-tag';

const comboQueries = (queries: any) => {
  let inner = '';
  let name = '';
  let vars = '';
  queries.map((q: any) => {
    // extract variables in one string
    q.definitions[0].variableDefinitions.map((v: any) => {
      vars += vars ? ',' : '';
      vars +=
        '$' +
        v.variable.name.value +
        ':' +
        v.type.type.name.value +
        (v.type.kind === 'NonNullType' ? '!' : '');
    });
    // combine name
    name += q.definitions[0].name.value;
    // extract inner body without external query()
    const body = q.loc.source.body.replace(/query(.)+?{/, '').trim();
    inner += inner ? ',' : '';
    inner += body.slice(0, body.length - 1);
  });

  name += 'Combined';

  return gql('query ' + name + '(' + vars + ') {' + inner + '}');
};

export default comboQueries;
