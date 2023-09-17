const bip39 = require("bip39");
const crypto = require('crypto');
const {Buffer}=require('node:buffer');
const sss = require('shamirs-secret-sharing');
const HDNode=require('@ethersproject/hdnode');


const generateSeedPhrase = async () => {
    const randomBytes = crypto.randomBytes(16);
    const mnemonic = await bip39.entropyToMnemonic(randomBytes.toString("hex"));
    return mnemonic;
      };

const recoverShares=(shares)=>{
        const recovered=sss.combine(shares);
        return recovered?.toString();
    }

const generateShares=(secret,noOfShares,shareThreshold)=>{
    const data=Buffer.from(secret);
    const shares=sss.split(data,{shares:noOfShares,threshold:shareThreshold})
    return shares;
}

const generateEOA=(seed,path)=>{
    const hdNode = HDNode.HDNode.fromMnemonic(seed)
    const account = hdNode?.derivePath(path || "m/44'/60'/0'/0/0");
    return JSON.parse(JSON.stringify(account));
}

const generateWalletWithShares=async(noOfShares,shareThreshold,walletPath)=>{
    const seed= await generateSeedPhrase();
    const shares=generateShares(seed,noOfShares,shareThreshold);
    const account=generateEOA(seed,walletPath||"m/44'/60'/0'/0/0");
    const wallet={
        seedPhrase:seed,
        shares:shares,
        noOfShares:noOfShares,
        minimumShareRequired:shareThreshold,
        walletAccount:account
    }
    return {
        wallet
    }

}

 module.exports={
    generateEOA,
    recoverShares,
    generateShares,
    generateSeedPhrase,
    generateWalletWithShares,
}

