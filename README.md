# pemedia-wordpress-admin-notifications

Ein Modul für die Anzeige von Notifications im Wordpress Backend.

## Installation

```
$ npm install git+https://git@github.com/pemedia/pemedia-wordpress-admin-notifications
```

Oder mit `yarn`

```
$ yarn add git+https://git@github.com/pemedia/pemedia-wordpress-admin-notifications
```

## Usage

```js
import PemediaNotification from 'pemedia-wordpress-admin-notifications';

let notification = new PemediaNotification();

notification.show('Hello World', 'success', 5000);
```

## API

`new PemediaNotification()`

Creates an instance of PemediaNotification

`show([message='', [mode='success', [duration=5000]]])`

Display a notification.
