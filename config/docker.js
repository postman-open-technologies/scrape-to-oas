var RESPONSE_SELECTOR = 'p > strong:contains(response) + pre > code.hljs'

var config = module.exports = {
  url: 'https://docs.docker.com/engine/api/v1.21/',
  depth: 0,
  host: 'localhost',
  basePath: '/',
  title: 'Docker Remote API',
  operations: {selector: 'h3', split: true},
  operationSummary: {selector: 'h3 + p + p'},
  operationDescription: {selector: '' },
  path: {selector: 'h3 + p > code', regex: /\w+ (.*)/},
  method: {selector: 'h3 + p > code', regex: /(\w+) .*/},
  parameters: {selector: 'p:contains(Query Parameters:) + ul'},
  parameter: {selector: 'li'},
  parameterName: {selector: 'strong'},
  parameterDescription: {selector: ''},
  requestBody: {selector: 'p > strong:contains(request) + pre > code.hljd > span.json', isExample: true},
  responseStatus: {selector: RESPONSE_SELECTOR, regex: /HTTP\/1.1 (\d+) .*/},
  responseDescription: {selector: RESPONSE_SELECTOR, regex: /HTTP\/1.1 \d+ (.*)/},
  responseSchema: {selector: RESPONSE_SELECTOR, regex: /\{.*\}/},
  
  fixPathParameters: function(path) {
    var pieces = path.split('/');
    var params = [];
    pieces = pieces.map(function(piece) {
      return piece.replace(/\((.*)\)/, '{$1}');
    });
    return pieces.join('/');
  },
}
