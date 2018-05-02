var extensionsID = "cbeloejgifgacgdbmgecdkeohjleabhh";
var nativeHostName = "com.cfca.cryptokit.ultimate";
var clsid = "4C588282-7792-4E16-93CB-9744402E4E98";

var extensionErr = "Extension doesn't exist.";
var hostErr = "Host doesn't exist.";

function nmCryptokit() {
};


nmCryptokit.prototype.init = function () {		
	try
	{	
		var paramArr = new Array();

		var param1 = new Object();
		param1.param = clsid;
		paramArr.push(param1);

		var msgJSON = new Object();
		msgJSON.function = "CreateCOMObj";
		msgJSON.params = paramArr;

		var requestJSON = new Object();
		requestJSON.type = "connect";
		requestJSON.host = nativeHostName;
		requestJSON.message = msgJSON;
		chrome.runtime.sendMessage(extensionsID, requestJSON,
			function (response) { 
				if("undefined" != chrome.runtime.lastError){
                    console.error(chrome.runtime.lastError.message);
                    alert(extensionErr);
                }
			});
	}
	catch(e)
	{
		alert(e);
		throw e;
	}
}


nmCryptokit.prototype.uninit = function () {

        var requestJSON = new Object();
        var msgJSON = new Object();
        var paramArr = new Array();
        var param1 = new Object();

        param1.param = clsid;
        paramArr.push(param1);
                        
        msgJSON.function = "ReleaseCOMObj";
        msgJSON.params = paramArr;
                        
        requestJSON.type = "disconnect";
        requestJSON.host = nativeHostName;
        requestJSON.message = msgJSON;

        chrome.runtime.sendMessage(extensionsID, requestJSON,
        function (response) { 
        });
}

nmCryptokit.prototype.setSM2CSPList = function (bstrCSPList, callback) {
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var csplist = new Object();
       csplist.param = bstrCSPList;
       paramArr.push(csplist);
       
       msgJSON.function = "SetSM2CSPList";
       msgJSON.params = paramArr;
       
       requestJSON.type = "SetSM2CSPList";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}

nmCryptokit.prototype.selectCertificate = function (bstrSubjectDNFilter, bstrIssuerDNFilter, serialNo, callback) {
          
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();
       
       var dnFilter = new Object();
       dnFilter.param = bstrSubjectDNFilter;
       paramArr.push(dnFilter);
       
       var issuerDNFilter = new Object();
       issuerDNFilter.param = bstrIssuerDNFilter;
       paramArr.push(issuerDNFilter);
                                
       var snFilter = new Object();
       snFilter.param = serialNo;
       paramArr.push(snFilter);
       
       msgJSON.function = "SelectCertificate";
       msgJSON.params = paramArr;
       
       requestJSON.type = "SelectCertificate";
       requestJSON.message = msgJSON;           
       
       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = true;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        });    
}


nmCryptokit.prototype.getSignCertInfo = function (bstrInfoType, callback) {

       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var InfoType = new Object();
       InfoType.param = bstrInfoType;
       paramArr.push(InfoType);
       
       msgJSON.function = "getSignCertInfo";
       msgJSON.params = paramArr;
       
       requestJSON.type = "getSignCertInfo";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.signMsgPKCS7 = function (bstrsource, bstrselectedAlg, bAttached, callback) {
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var source = new Object();
       source.param = bstrsource;
       paramArr.push(source);

       var selectedAlg = new Object();
       selectedAlg.param = bstrselectedAlg;
       paramArr.push(selectedAlg);

       var IsWithSource = new Object();
       IsWithSource.param = bAttached;
       paramArr.push(IsWithSource);
       
       msgJSON.function = "SignMsgPKCS7";
       msgJSON.params = paramArr;
       
       requestJSON.type = "SignMsgPKCS7";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.verifyMsgSignaturePKCS7Attached = function (bstrsignature, bstrsignaturetype, callback) {
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var signature = new Object();
       signature.param = bstrsignature;
       paramArr.push(signature);

       var signaturetype = new Object();
       signaturetype.param = bstrsignaturetype;
       paramArr.push(signaturetype);
       
       msgJSON.function = "VerifyMsgSignaturePKCS7Attached";
       msgJSON.params = paramArr;
       
       requestJSON.type = "VerifyMsgSignaturePKCS7Attached";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.verifyMsgSignaturePKCS7Detached = function (bstrsignature, bstrsignaturetype, bstrsource, callback) {
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var signature = new Object();
       signature.param = bstrsignature;
       paramArr.push(signature);

       var signaturetype = new Object();
       signaturetype.param = bstrsignaturetype;
       paramArr.push(signaturetype);

       var source = new Object();
       source.param = bstrsource;
       paramArr.push(source);
       
       msgJSON.function = "VerifyMsgSignaturePKCS7Detached";
       msgJSON.params = paramArr;
       
       requestJSON.type = "VerifyMsgSignaturePKCS7Detached";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.selectEncryptCertificate = function (subjectDNFilter, issuerDNFilter, serialNumFilter, callback) {
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();
       
       var dnFilter = new Object();
       dnFilter.param = subjectDNFilter;
       paramArr.push(dnFilter);
       
       var issuer = new Object();
       issuer.param = issuerDNFilter;
       paramArr.push(issuer);
                                
       var snFilter = new Object();
       snFilter.param = serialNumFilter;
       paramArr.push(snFilter);
       
       msgJSON.function = "SelectEncryptCertificate";
       msgJSON.params = paramArr;
       
       requestJSON.type = "SelectEncryptCertificate";
       requestJSON.message = msgJSON;           
       
       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        });    
}


nmCryptokit.prototype.getEncryptCertInfo = function (InfoTypeID, callback) {

       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Info = new Object();
       Info.param = InfoTypeID;
       paramArr.push(Info);
       
       msgJSON.function = "GetEncryptCertInfo";
       msgJSON.params = paramArr;
       
       requestJSON.type = "GetEncryptCertInfo";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.encryptMsgCMSEnvelope = function (encryptmassage, encryptalg, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Encmassage = new Object();
       Encmassage.param = encryptmassage;
       paramArr.push(Encmassage);

       var EncAlg = new Object();
       EncAlg.param = encryptalg;
       paramArr.push(EncAlg);
       
       msgJSON.function = "EncryptMsgCMSEnvelope";
       msgJSON.params = paramArr;
       
       requestJSON.type = "EncryptMsgCMSEnvelope";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.encryptMsgCMSEnvelope_ByCert = function (base64certdata, certtype, encryptmassage, encryptalg, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Enccert = new Object();
       Enccert.param = base64certdata;
       paramArr.push(Enccert);

       var Enccertype = new Object();
       Enccertype.param = certtype;
       paramArr.push(Enccertype);

       var Encmassage = new Object();
       Encmassage.param = encryptmassage;
       paramArr.push(Encmassage);

       var EncAlg = new Object();
       EncAlg.param = encryptalg;
       paramArr.push(EncAlg);
       
       msgJSON.function = "EncryptMsgCMSEnvelope_ByCert";
       msgJSON.params = paramArr;
       
       requestJSON.type = "EncryptMsgCMSEnvelope_ByCert";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.encryptMsgCMSEnvelopeEx = function (encryptmassage, encryptalg, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Encmassage = new Object();
       Encmassage.param = encryptmassage;
       paramArr.push(Encmassage);

       var EncAlg = new Object();
       EncAlg.param = encryptalg;
       paramArr.push(EncAlg);
       
       msgJSON.function = "encryptMsgCMSEnvelopeEx";
       msgJSON.params = paramArr;
       
       requestJSON.type = "encryptMsgCMSEnvelopeEx";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.encryptMsgCMSEnvelopeEx_ByCert = function (base64certdata, certtype, encryptmassage, encryptalg, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Enccert = new Object();
       Enccert.param = base64certdata;
       paramArr.push(Enccert);

       var Enccertype = new Object();
       Enccertype.param = certtype;
       paramArr.push(Enccertype);

       var Encmassage = new Object();
       Encmassage.param = encryptmassage;
       paramArr.push(Encmassage);

       var EncAlg = new Object();
       EncAlg.param = encryptalg;
       paramArr.push(EncAlg);
       
       msgJSON.function = "EncryptMsgCMSEnvelopeEx_ByCert";
       msgJSON.params = paramArr;
       
       requestJSON.type = "EncryptMsgCMSEnvelopeEx_ByCert";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.decryptMsgCMSEnvelope = function (envelope, decrypttype, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Envelope = new Object();
       Envelope.param = envelope;
       paramArr.push(Envelope);

       var Dectype = new Object();
       Dectype.param = decrypttype;
       paramArr.push(Dectype);
       
       msgJSON.function = "DecryptMsgCMSEnvelope";
       msgJSON.params = paramArr;
       
       requestJSON.type = "DecryptMsgCMSEnvelope";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.decryptMsgCMSEnvelope_BySoftCert = function (filename, filepassword, envelope, decrypttype, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var file = new Object();
       file.param = filename;
       paramArr.push(file);

       var filepwd = new Object();
       filepwd.param = filepassword;
       paramArr.push(filepwd);

       var Envelope = new Object();
       Envelope.param = envelope;
       paramArr.push(Envelope);

       var DecAlg = new Object();
       DecAlg.param = decrypttype;
       paramArr.push(DecAlg);
       
       msgJSON.function = "DecryptMsgCMSEnvelope_BySoftCert";
       msgJSON.params = paramArr;
       
       requestJSON.type = "DecryptMsgCMSEnvelope_BySoftCert";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.decryptMsgCMSEnvelopeEx = function (envelope, decrypttype, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var Envelope = new Object();
       Envelope.param = envelope;
       paramArr.push(Envelope);

       var Dectype = new Object();
       Dectype.param = decrypttype;
       paramArr.push(Dectype);
       
       msgJSON.function = "DecryptMsgCMSEnvelopeEx";
       msgJSON.params = paramArr;
       
       requestJSON.type = "DecryptMsgCMSEnvelopeEx";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.decryptMsgCMSEnvelopeEx_BySoftCert = function (filename, filepassword, envelope, decrypttype, callback){
       var requestJSON = new Object();
       var msgJSON = new Object();
       var paramArr = new Array();

       var file = new Object();
       file.param = filename;
       paramArr.push(file);

       var filepwd = new Object();
       filepwd.param = filepassword;
       paramArr.push(filepwd);

       var Envelope = new Object();
       Envelope.param = envelope;
       paramArr.push(Envelope);

       var DecAlg = new Object();
       DecAlg.param = decrypttype;
       paramArr.push(DecAlg);
       
       msgJSON.function = "DecryptMsgCMSEnvelopeEx_BySoftCert";
       msgJSON.params = paramArr;
       
       requestJSON.type = "DecryptMsgCMSEnvelopeEx_BySoftCert";
       requestJSON.message = msgJSON; 

       chrome.runtime.sendMessage(extensionsID, requestJSON,
            function (response) { 
                var result = new Object();                
                if(0 == response.errorcode){ 
                    result.error = 0;                     
                    result.value = response.result;                                     
                }
                else if(1 == response.errorcode){
                    result.error = response.errorcode;  
                    result.value = hostErr;
                }
                else{
                    result.error = response.errorcode;  
                    result.value = "sendMessage response error!";
                }
                callback(result);
	        }); 
}


nmCryptokit.prototype.GetLastErrorDesc = function (callback) {
    var requestJSON = new Object();
    var msgJSON = new Object();
    var paramArr = new Array();

    msgJSON.function = "GetLastErrorDesc";
    msgJSON.params = paramArr;

    requestJSON.type = "GetLastErrorDesc";
    requestJSON.message = msgJSON;           

    chrome.runtime.sendMessage(extensionsID, requestJSON,
        function (response) {
            var result = new Object(); 
            if(1 != response.errorcode){ 
                result.error = response.errorcode; 
                result.value = response.result;                                     
            }
            else{
                result.error = response.errorcode;                  
                result.value = hostErr;
            }
            callback(result);
	});
}