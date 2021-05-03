# Offline News Reader

This repository contains the source code for the Offline News Reader PWA, first shown at the second installment of our [clickbar. Fullstack Talks](https://www.meetup.com/de-DE/clickbar-fullstack-talks/) meetup.
The accompanying slides can be found [here](https://clickbar-fullstack-talks-2.netlify.app). 

> ⚠ Warning: this app uses an undocumented API to fetch its news from [tagesschau.de](tagesschau.de). Use at your own risk. 

## Features

- View news from [tagesschau.de](tagesschau.de), both online and offline
- Save news for reading later
- Works 100% offline and can be installed as a PWA
- Toggleable dark theme

## Installation

Use the yarn package manager to install all required dependencies.

```bash
yarn install
```

## Local Development

Run this command to start the dev serve:

```bash
yarn dev
```

If you plan to make changes to the service worker (`sw.js`), consider running these commands instead, 
which will launch a local server using https: 

```
yarn build
yarn https-preview
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
