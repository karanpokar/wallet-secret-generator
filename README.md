
# Wallet-Secret Generator

This module helps to generate seedphrase and secret shares using Ethers and Shamir Secret Sharing.


## Installation

Install my-project with npm

```bash
  npm i wallet-secret-generator
```
    
## Usage/Examples

**Generate Seed Phrase**

```javascript
import {generateSeedPhrase} from 'wallet-secret-generator'

const seedPhrase= await generateSeedPhrase();
```

**Generate Wallet with Secret Shares Phrase**

```javascript
import {generateWalletWithShares} from 'wallet-secret-generator'

const seedPhrase= await generateWalletWithShares(noOfShares,shareThreshold,walletPath);
1. noOfShares: Maximun number of share to be generated from secret
2. shareThreshold: Minimum Shares required to regenerate the secret
3. path: Wallet Path, example:"m/44'/60'/0'/0/0", will create first wallet from seedphrase
```

**Generate SSS Shares**

```javascript
import {generateShares} from 'wallet-secret-generator'

const seedPhrase= generateShares(secret:String,noOfShares:Number,shareThreshold:Number);

 1. noOfShares: Maximun number of share to be generated from secret
 2. shareThreshold: Minimum Shares required to regenerate the secret
```

**Recover Secret**

```javascript
import {recoverShares} from 'wallet-secret-generator'

const seedPhrase= recoverShares(shares:Array<String|Buffer>);

 1. shares: Value generated from generateShares

```

**Generate EOA Wallet**

```javascript
import {generateEOA} from 'wallet-secret-generator'

const seedPhrase= generateEOA(seed:String,path:String);

 1. seed: Seed Phrase from generateSeedPhrase;
 2. path: Wallet Path, example:"m/44'/60'/0'/0/0", will create first wallet from seedphrase. 

```
Wallet Derivation Paths: https://help.myetherwallet.com/en/articles/5867305-hd-wallets-and-derivation-paths

Shamir Secret Sharing: https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing

EOA: https://ethereum.org/en/developers/docs/accounts/
