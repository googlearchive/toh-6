define(['dart_sdk', 'packages/http/src/byte_stream', 'packages/http/src/base_client'], function(dart_sdk, byte_stream, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__byte_stream = byte_stream.src__byte_stream;
  const src__streamed_response = base_client.src__streamed_response;
  const src__response = base_client.src__response;
  const src__request = base_client.src__request;
  const src__base_request = base_client.src__base_request;
  const src__base_client = base_client.src__base_client;
  const _root = Object.create(null);
  const src__mock_client = Object.create(_root);
  const $addAll = dartx.addAll;
  let ResponseToStreamedResponse = () => (ResponseToStreamedResponse = dart.constFn(dart.fnType(src__streamed_response.StreamedResponse, [src__response.Response])))();
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(src__response.Response)))();
  let Uint8ListToFutureOfResponse = () => (Uint8ListToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [typed_data.Uint8List])))();
  let FutureOfStreamedResponse = () => (FutureOfStreamedResponse = dart.constFn(async.Future$(src__streamed_response.StreamedResponse)))();
  let BaseRequestAndByteStreamToFutureOfStreamedResponse = () => (BaseRequestAndByteStreamToFutureOfStreamedResponse = dart.constFn(dart.fnType(FutureOfStreamedResponse(), [src__base_request.BaseRequest, src__byte_stream.ByteStream])))();
  let StreamedResponseToStreamedResponse = () => (StreamedResponseToStreamedResponse = dart.constFn(dart.fnType(src__streamed_response.StreamedResponse, [src__streamed_response.StreamedResponse])))();
  const _handler = Symbol('_handler');
  src__mock_client.MockClient = class MockClient extends src__base_client.BaseClient {
    send(request) {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let bodyStream = request.finalize();
        return yield this[_handler](request, bodyStream);
      }).bind(this));
    }
  };
  (src__mock_client.MockClient.__ = function(handler) {
    this[_handler] = handler;
  }).prototype = src__mock_client.MockClient.prototype;
  (src__mock_client.MockClient.new = function(fn) {
    src__mock_client.MockClient.__.call(this, dart.fn((baseRequest, bodyStream) => bodyStream.toBytes().then(src__response.Response, dart.fn(bodyBytes => {
      let request = new src__request.Request.new(baseRequest.method, baseRequest.url);
      request.persistentConnection = baseRequest.persistentConnection;
      request.followRedirects = baseRequest.followRedirects;
      request.maxRedirects = baseRequest.maxRedirects;
      request.headers[$addAll](baseRequest.headers);
      request.bodyBytes = bodyBytes;
      request.finalize();
      return fn(request);
    }, Uint8ListToFutureOfResponse())).then(src__streamed_response.StreamedResponse, dart.fn(response => new src__streamed_response.StreamedResponse.new(src__byte_stream.ByteStream.fromBytes(response.bodyBytes), response.statusCode, {contentLength: response.contentLength, request: baseRequest, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase}), ResponseToStreamedResponse())), BaseRequestAndByteStreamToFutureOfStreamedResponse()));
  }).prototype = src__mock_client.MockClient.prototype;
  (src__mock_client.MockClient.streaming = function(fn) {
    src__mock_client.MockClient.__.call(this, dart.fn((request, bodyStream) => fn(request, bodyStream).then(src__streamed_response.StreamedResponse, dart.fn(response => new src__streamed_response.StreamedResponse.new(response.stream, response.statusCode, {contentLength: response.contentLength, request: request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase}), StreamedResponseToStreamedResponse())), BaseRequestAndByteStreamToFutureOfStreamedResponse()));
  }).prototype = src__mock_client.MockClient.prototype;
  dart.addTypeTests(src__mock_client.MockClient);
  dart.setMethodSignature(src__mock_client.MockClient, () => ({
    __proto__: dart.getMethods(src__mock_client.MockClient.__proto__),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), [src__base_request.BaseRequest])
  }));
  dart.setFieldSignature(src__mock_client.MockClient, () => ({
    __proto__: dart.getFields(src__mock_client.MockClient.__proto__),
    [_handler]: dart.finalFieldType(BaseRequestAndByteStreamToFutureOfStreamedResponse())
  }));
  src__mock_client.MockClientStreamHandler = dart.typedef('MockClientStreamHandler', () => dart.fnType(async.Future$(src__streamed_response.StreamedResponse), [src__base_request.BaseRequest, src__byte_stream.ByteStream]));
  src__mock_client.MockClientHandler = dart.typedef('MockClientHandler', () => dart.fnType(async.Future$(src__response.Response), [src__request.Request]));
  dart.trackLibraries("packages/http/src/mock_client.ddc", {
    "package:http/src/mock_client.dart": src__mock_client
  }, '{"version":3,"sourceRoot":"","sources":["mock_client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;SAwEgC,OAAmB;AAAE;AACjD,YAAI,aAAa,OAAO,SAAS;AACjC,cAAO,OAAM,cAAQ,CAAC,OAAO,EAAE,UAAU;MAC3C;;;6CAlDkB,OAAQ;IAAR,cAAQ,GAAR,OAAQ;EAAC;8CAIhB,EAAoB;8CACpB,SAAC,WAAW,EAAE,UAAU,KACxB,UAAU,QAAQ,OAAO,yBAAC,QAAC,SAAS;AACzC,UAAI,UAAU,IAAI,wBAAO,CAAC,WAAW,OAAO,EAAE,WAAW,IAAI;MAAzD,+BACyB,WAAW,qBAAqB;MADzD,0BAEoB,WAAW,gBAAgB;MAF/C,uBAGiB,WAAW,aAAa;MAHzC,yBAIiB,WAAW,QAAQ;MAJpC,oBAKc,SAAS;MALvB;AAQJ,YAAO,GAAE,CAAC,OAAO;2CACZ,0CAAC,QAAC,QAAQ,IACR,IAAI,2CAAgB,CACvB,AAAI,qCAAoB,CAAC,QAAQ,UAAU,GAC3C,QAAQ,WAAW,kBACJ,QAAQ,cAAc,WAC5B,WAAW,WACX,QAAQ,QAAQ,cACb,QAAQ,WAAW,wBACT,QAAQ,qBAAqB,gBACrC,QAAQ,aAAa;EAEzC;oDAIiB,EAA0B;8CACpC,SAAC,OAAO,EAAE,UAAU,KACpB,EAAE,CAAC,OAAO,EAAE,UAAU,MAAM,0CAAC,QAAC,QAAQ,IACpC,IAAI,2CAAgB,CACvB,QAAQ,OAAO,EACf,QAAQ,WAAW,kBACJ,QAAQ,cAAc,WAC5B,OAAO,WACP,QAAQ,QAAQ,cACb,QAAQ,WAAW,wBACT,QAAQ,qBAAqB,gBACrC,QAAQ,aAAa;EAEzC","file":"mock_client.ddc.js"}');
  // Exports:
  return {
    src__mock_client: src__mock_client
  };
});

//# sourceMappingURL=mock_client.ddc.js.map
