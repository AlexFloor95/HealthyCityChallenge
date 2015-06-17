# HealthyCityChallenge
Wijchen gezond app

Testing goes as follows:

- Install ionic on your computer: http://ionicframework.com/getting-started/

- Install android SDK 

(windows example --> platform = android)

- Add ANDROID_HOME to your path so ionic can call it (replace CL\\android-sdk-windows with your own save location)
    set ANDROID_HOME=C:\\android-sdk-windows
    set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
    
- Open command promt and navigate to the HealthCityChallenge map

- Use the following command: ionic build android

- In the platforms\android\build\outputs\apk you will find the debug apk, move this file on your phone and install the application with it.

----------------------

Work in progress
