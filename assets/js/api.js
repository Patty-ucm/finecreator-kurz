
function GenericAPIAdaptor() {
    this.LMSInitialize = LMSInitialize;
    this.Initialize = LMSInitialize;
    this.LMSGetValue = LMSGetValue;
    this.GetValue = LMSGetValue;
    this.LMSSetValue = LMSSetValue;
    this.SetValue = LMSSetValue;
    this.LMSCommit = LMSCommit;
    this.Commit = LMSCommit;
    this.LMSFinish = LMSFinish; // Scorm 1.2
    this.Finish = LMSFinish; // Scorm 1.2
    this.LMSGetLastError = LMSGetLastError;
    this.GetLastError = LMSGetLastError;
    this.LMSGetErrorString = LMSGetErrorString;
    this.GetErrorString = LMSGetErrorString;
    this.LMSGetDiagnostic = LMSGetDiagnostic;
    this.GetDiagnostic = LMSGetDiagnostic;
    this.Terminate = LMSTerminate;
    this.LMSTerminate = LMSTerminate;
}

API = new GenericAPIAdaptor;
api = API;
API_1484_11 = new GenericAPIAdaptor();
api_1484_11 = API_1484_11;

//Error codes
var E_NoError 					= 0;
var E_GeneralException 			= 101;
var E_ServerBusy 				= 102;
var E_InvalidArgumentError 		= 201;
var E_ElementCannotHaveChildren = 202;
var E_ElementIsNotAnArray 		= 203;
var E_NotInitialized 			= 301;
var E_GeneralSetFailure 		= 351;
var E_NotImplementedError 		= 401;
var E_UnimplementedElement		= 402;
var E_ElementValueNotInit 		= 403;
var E_ElementIsReadOnly 		= 404;
var E_ElementIsWriteOnly 		= 405;
var E_DataTypeMismatch 			= 406;
var E_ValueOutOfRange 			= 407;

// Error messages
var E_NoErrorMessage 					= "";
var E_GeneralExceptionMessage 			= "General Exception";
var E_ServerBusyMessage 				= "Server busy";
var E_InvalidArgumentErrorMessage 		= "Invalid argument error";
var E_ElementCannotHaveChildrenMessage 	= "Element cannot have children";
var E_ElementIsNotAnArrayMessage 		= "Element not an array.  Cannot have count";
var E_NotInitializedMessage 			= "Not initialized";
var E_GeneralSetFailureMessage 			= "General set failure";
var E_NotImplementedErrorMessage 		= "Not implemented error";
var E_UnimplementedElementMessage		= "Unimplemented data model element";
var E_ElementValueNotInitMessage		= "Element value is not initialized";
var E_ElementIsReadOnlyMessage 			= "Element is read only";
var E_ElementIsWriteOnlyMessage 		= "Element is write only";
var E_DataTypeMismatchMessage 			= "Element Type Mismatch - Incorrect Data Type";
var E_ValueOutOfRangeMessage 			= "Value of Element is out of range";

var E_LastError = E_NoError;
var E_LastErrorMessage = "No error";
var E_LastErrorString = "No error";

function LMSInitialize(parameter) {
    console.log('LMSInitialize ' + parameter);
    return "true";
}
function Initialize(parameter) {
    return LMSInitialize(parameter);
}


function LMSGetValue(element) {
    console.log('LMSGetValue ' + element);
    return "";
}
function GetValue(element) {
    return LMSGetValue(element);
}


function LMSSetValue(element, value) {
    console.log('LMSSetValue ' + element + ' / ' + value);
    return "true";
}
function SetValue(element, value) {
    return LMSSetValue(element, value);
}


function LMSCommit(parameter) {
    console.log('LMSCommit ' + parameter);
    return "true";
}
function Commit(parameter) {
    return LMSCommit(parameter);
}


function LMSFinish(parameter) {
    console.log('LMSFinish ' + parameter);
    return "true";
}
function Finish(parameter) {
    return LMSFinish(parameter);
}


function LMSGetLastError() {
    console.log('LMSGetLastError');
    return E_LastError.toString();
}
function GetLastError() {
    return LMSGetLastError();
}


function LMSGetErrorString(errorCode) {
    console.log('LMSGetLastError');
    return E_LastErrorString;
}
function GetErrorString(errorCode) {
    return LMSGetErrorString(errorCode);
}


function LMSGetDiagnostic(errorCode) {
    console.log('LMSGetDiagnostic');
    return(API.LMSGetLastError(errorCode));
}
function GetDiagnostic(errorCode) {
    return LMSGetDiagnostic(errorCode);
}


function LMSTerminate(parameter) {
    console.log('LMSInitialize ' + parameter);
}
function Terminate(parameter) {
    return LMSTerminate(parameter);
}

