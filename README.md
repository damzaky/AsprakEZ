# AsprakEZ
Makes it easier for asprak to download and score, **please read carefully!**

## How to use
Basically, you are only required to choose one script to use out of three, use `batchDownload.js` to download all uploaded files, use `removeRedDots.js` to remove all red dots/circle, use `batchAssign.js` to assign determined values to tesawal, jurnal, tesakhir, skill form once and for all.

1. Change the `Dmz` on the first line inside the file you want to use with your SHORT NAME that you've set on http://10.30.40.123/iflab/asprak/formProfile, in this case, my SHORT NAME is `Dmz`

![nick](https://user-images.githubusercontent.com/4760947/32130756-8522fa4a-bbc8-11e7-8e2d-b85e2885d485.png)

2. Login to the "nilai" page of impulse
3. Press CTRL+SHIFT+J for Chrome users, press CTRL+SHIFT+K for Firefox users
4. Paste the whole script to the console then press enter

### batchAssign.js
```
var micin = [0/*tes awal*/,0/*jurnal*/,0/*tes akhir*/,0/*skill*/];
var val = [0/*tes awal*/,0/*jurnal*/,0/*tes akhir*/,0/*skill*/];
```

On micin array, the array represents 0=off, 1=on, example: if tes awal is 0, then nothing in tes awal field will be changed

On val array, example: if tes awal is 30, then all test awal fields will be assigned 30

**Example**
```
var micin = [1/*tes awal*/,0/*jurnal*/,1/*tes akhir*/,1/*skill*/];
var val = [30/*tes awal*/,0/*jurnal*/,0/*tes akhir*/,0/*skill*/];
```
The code above will assign all tes awal with 30 and assign all tes akhir and skill with 0 and it will not assign anything to jurnal just like below:
**before**
![before](https://user-images.githubusercontent.com/4760947/35846140-e8355f3c-0b47-11e8-83aa-66d221a02ac1.png)
**after**
![after](https://user-images.githubusercontent.com/4760947/35846136-e80085f0-0b47-11e8-8625-a0f9970db851.png)

### batchDownload.js
These messages may show up since it's trying to open multiple links at once, browsers detect it as popups, you must allow it first.

![firefoxpopup](https://user-images.githubusercontent.com/4760947/32130562-d0365a08-bbc4-11e7-9af5-ce767afcd1de.png)

![popup](https://user-images.githubusercontent.com/4760947/32130563-d06864d0-bbc4-11e7-8897-b26c4bc77262.png)

do the followings

![chromepopup2](https://user-images.githubusercontent.com/4760947/32130560-cfcded1a-bbc4-11e7-86b9-bab41e9073e6.png)

![ffirefoxpopup2](https://user-images.githubusercontent.com/4760947/32130561-d0042f6a-bbc4-11e7-9442-ba8e4dafaa3f.png)

Redo step 1 (after you allow the popup)

**PLEASE NOTE**, this sometimes doesn't work, so if your downloaded file names are the same, you should try to restart it, this happens because the time AJAX take to send the data to your device may vary

## Security
Don't worry, I didn't inject any code that will steal your account information to this script

## Compatibility
Tested on Chrome Version 61.0.3163.100 and Firefox 56.0.2
