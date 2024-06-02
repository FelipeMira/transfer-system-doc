"use strict";(self.webpackChunktransfer_doc=self.webpackChunktransfer_doc||[]).push([[175],{66799:e=>{e.exports=JSON.parse('{"url":"redocusaurus\\\\plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.1","info":{"title":"Transfer System Api","description":"API simples para transferencias."},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Contas","description":"Recuperar Contas"},{"name":"Transferencias","description":"Realizar Transferencias"}],"paths":{"/transferencias/{idDebit}/contas/{idCredit}":{"post":{"tags":["Transferencias"],"summary":"Efetiva a transferencia","description":"Transmite o valor da conta de debito para a conta de credito","operationId":"transfer","parameters":[{"name":"idDebit","in":"path","description":"Id da conta de debito","required":true,"schema":{"type":"integer","format":"int32"}},{"name":"idCredit","in":"path","description":"Id da conta de credito","required":true,"schema":{"type":"integer","format":"int32"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountTransferRequest"}}},"required":true},"responses":{"200":{"description":"Transferencia concluida com sucesso","content":{"application/json":{"schema":{"type":"string"}}}},"400":{"description":"Requisicao invalida","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BadRequestError"}}}},"404":{"description":"Recurso nao encontrado","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}},"422":{"description":"Entidade nao processavel","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UnprocessableEntityError"}}}},"500":{"description":"Erro interno do sistema","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InternalServerError"}}}}}}},"/contas":{"get":{"tags":["Contas"],"summary":"Consulta todas as contas","description":"Retorna todas as contas paginadas","operationId":"fetchAccounts","parameters":[{"name":"page","in":"query","description":"Page number","required":true,"schema":{"minimum":0,"type":"integer","format":"int32"},"example":0},{"name":"size","in":"query","description":"Page size","required":true,"schema":{"minimum":1,"type":"integer","format":"int32"},"example":3}],"responses":{"200":{"description":"Conta encontrada","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountResponse"}}}},"400":{"description":"Requisicao invalida","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BadRequestError"}}}},"404":{"description":"Recurso nao encontrado","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}},"500":{"description":"Erro interno do sistema","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InternalServerError"}}}}}}},"/contas/{id}":{"get":{"tags":["Contas"],"summary":"Consulta uma conta","description":"Retorna a conta consultada pelo numero","operationId":"findAccount","parameters":[{"name":"id","in":"path","description":"id da conta","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"Conta encontrada","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountResponse"}}}},"400":{"description":"Requisicao invalida","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BadRequestError"}}}},"404":{"description":"Recurso nao encontrado","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}},"422":{"description":"Entidade nao processavel","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UnprocessableEntityError"}}}},"500":{"description":"Erro interno do sistema","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InternalServerError"}}}}}}}},"components":{"schemas":{"AccountTransferRequest":{"required":["transferValue"],"type":"object","properties":{"transferValue":{"minimum":0.01,"exclusiveMinimum":false,"type":"number","description":"Valor da transferencia","example":10}},"description":"Valor da transferencia"},"ErrorMessage":{"type":"object","properties":{"object":{"type":"string","description":"Nome do objeto que causou o erro","example":"Transfer"},"field":{"type":"string","description":"Nome do campo que causou o erro","example":"value"},"message":{"type":"string","description":"Mensagem de erro","example":"deve ser maior que zero"}},"description":"List of error messages","example":[{"object":"Transfer","field":"value","message":"deve ser maior que zero"}]},"NotFoundError":{"type":"object","properties":{"timestamp":{"type":"string","description":"Error Datetime","format":"date-time"},"messages":{"type":"array","description":"List of error messages","example":[{"object":"Transfer","field":"value","message":"deve ser maior que zero"}],"items":{"$ref":"#/components/schemas/ErrorMessage"}},"path":{"type":"string","description":"Path of the call that caused the error","example":"\\\\path"},"statusCode":{"type":"integer","description":"Status code","format":"int32","example":404},"statusDescription":{"type":"string","description":"Status Description","example":"Resource not found"},"exception":{"type":"string","description":"Thrown exception","example":"NotFoundException"}},"description":"Not found error response"},"UnprocessableEntityError":{"type":"object","properties":{"timestamp":{"type":"string","description":"Error Datetime","format":"date-time"},"messages":{"type":"array","description":"List of error messages","example":[{"object":"Transfer","field":"value","message":"deve ser maior que zero"}],"items":{"$ref":"#/components/schemas/ErrorMessage"}},"path":{"type":"string","description":"Path of the call that caused the error","example":"\\\\path"},"statusCode":{"type":"integer","description":"Status code","format":"int32","example":422},"statusDescription":{"type":"string","description":"Status Description","example":"Unprocessable entity"},"exception":{"type":"string","description":"Thrown exception","example":"UnprocessableEntityException"}},"description":"UI Unprocessable entity error response"},"BadRequestError":{"type":"object","properties":{"timestamp":{"type":"string","description":"Error Datetime","format":"date-time"},"messages":{"type":"array","description":"List of error messages","example":[{"object":"Transfer","field":"value","message":"deve ser maior que zero"}],"items":{"$ref":"#/components/schemas/ErrorMessage"}},"path":{"type":"string","description":"Path of the call that caused the error","example":"\\\\path"},"statusCode":{"type":"integer","description":"Status code","format":"int32","example":400},"statusDescription":{"type":"string","description":"Status Description","example":"Invalid request"},"exception":{"type":"string","description":"Thrown exception","example":"BadRequestException"}},"description":"Bad request error response"},"InternalServerError":{"type":"object","properties":{"timestamp":{"type":"string","description":"Error Datetime","format":"date-time"},"messages":{"type":"array","description":"List of error messages","example":[{"object":"Transfer","field":"value","message":"deve ser maior que zero"}],"items":{"$ref":"#/components/schemas/ErrorMessage"}},"path":{"type":"string","description":"Path of the call that caused the error","example":"\\\\path"},"statusCode":{"type":"integer","description":"Status code","format":"int32","example":500},"statusDescription":{"type":"string","description":"Status Description","example":"Internal server error"},"exception":{"type":"string","description":"Thrown exception","example":"internalServerErrorException"}},"description":"Internal server error response"},"AccountHolderResponse":{"type":"object","properties":{"nomeCorrentista":{"type":"string","description":"Nome Correntista"},"idCorrentista":{"type":"integer","description":"Id Correntista","format":"int64"}},"description":"Correntista"},"AccountResponse":{"type":"object","properties":{"id":{"type":"integer","description":"Numero da Conta","format":"int32","example":1},"saldo":{"type":"number","description":"Saldo"},"correntista":{"$ref":"#/components/schemas/AccountHolderResponse"}}}}}}}')}}]);