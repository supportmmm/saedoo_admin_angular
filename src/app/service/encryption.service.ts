import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {
    key: string = "U2F";
    conversionEncryptOutput: string;
    conversionDecryptOutput:string;
    constructor() { }
    encryptData(plainData: string) {
        this.conversionEncryptOutput = CryptoJS.AES.encrypt(plainData, this.key).toString();
        return this.conversionEncryptOutput;
    }
    decryptData(decryptedData: string) {
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(decryptedData, this.key, {}).toString(CryptoJS.enc.Utf8);
        return this.conversionDecryptOutput;
    }
}
