## 基础环境

- MacOS: 10.13.6
- Node: v8.11.3
- NPM: 5.6.0
- Brew: 1.7.1
- Java: 10.0.2


## 安装步骤

### 安装Node&NPM

- 下载地址：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- 本次使用版本为`LTSv8.11.3`
- 下载成功后，验证
```
➜  ~ node -v
v8.11.3
➜  ~ npm -v
5.6.0
```

### 安装Appium&Appium-doctor

- 命令行安装`appium`

```
npm install -g appium
```

- 命令行安装`appium-doctor`

```
npm install -g appium-doctor
```

- 验证安装成功

```
➜  bin appium-doctor
info AppiumDoctor Appium Doctor v.1.4.3
info AppiumDoctor ### Diagnostic starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 8.11.3
info AppiumDoctor  ✔ Xcode is installed at: /Library/Developer/CommandLineTools
info AppiumDoctor  ✔ Xcode Command Line Tools are installed.
info AppiumDoctor  ✔ DevToolsSecurity is enabled.
info AppiumDoctor  ✔ The Authorization DB is set up properly.
WARN AppiumDoctor  ✖ Carthage was NOT found!
info AppiumDoctor  ✔ HOME is set to: /Users/yjshi
WARN AppiumDoctor  ✖ ANDROID_HOME is NOT set!
WARN AppiumDoctor  ✖ JAVA_HOME is NOT set!
WARN AppiumDoctor  ✖ adb could not be found because ANDROID_HOME is NOT set!
WARN AppiumDoctor  ✖ android could not be found because ANDROID_HOME is NOT set!
WARN AppiumDoctor  ✖ emulator could not be found because ANDROID_HOME is NOT set!
WARN AppiumDoctor  ✖ Bin directory for $JAVA_HOME is not set
info AppiumDoctor ### Diagnostic completed, 7 fixes needed. ###
info AppiumDoctor 
info AppiumDoctor ### Manual Fixes Needed ###
info AppiumDoctor The configuration cannot be automatically fixed, please do the following first:
WARN AppiumDoctor - Please install Carthage. Visit https://github.com/Carthage/Carthage#installing-carthage for more information.
WARN AppiumDoctor - Manually configure ANDROID_HOME.
WARN AppiumDoctor - Manually configure JAVA_HOME.
WARN AppiumDoctor - Manually configure ANDROID_HOME and run appium-doctor again.
WARN AppiumDoctor - Add '$JAVA_HOME/bin' to your PATH environment
info AppiumDoctor ###
info AppiumDoctor 
info AppiumDoctor Bye! Run appium-doctor again when all manual fixes have been applied!
info AppiumDoctor 

```

## 配制android环境

- 安装`Java`

直接下载最新版本安装

- 配制`ANDROID_HOME`
    1.找到sdk的安装路径，我是通过`Android Studio`安装的，路径在`/Users/**/Library/Android/sdk`,**是当前mac电脑的用户名
    2.添加至环境变量中，`export ANDROID_HOME=/Users/**/Library/Android/sdk`
    3.验证：**重新**打开terminal工具，输入`echo $ANDROID_HOME`查看返回结果是否为设计路径地址

- 配制`JAVA_HOME`
```
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$PATH:$JAVA_HOME/bin
```

验证：**重新**打开terminal工具，输入`echo $ANDROID_HOME`查看返回结果是否为设计路径地址


## 验证`appium`环境的安装

```
➜  ~ appium-doctor --android
info AppiumDoctor Appium Doctor v.1.4.3
info AppiumDoctor ### Diagnostic starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 8.11.3
info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/yjshi/Library/Android/sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/jdk-10.0.2.jdk/Contents/Home
info AppiumDoctor  ✔ adb exists at: /Users/yjshi/Library/Android/sdk/platform-tools/adb
info AppiumDoctor  ✔ android exists at: /Users/yjshi/Library/Android/sdk/tools/android
info AppiumDoctor  ✔ emulator exists at: /Users/yjshi/Library/Android/sdk/tools/emulator
info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
info AppiumDoctor ### Diagnostic completed, no fix needed. ###
info AppiumDoctor
info AppiumDoctor Everything looks good, bye!
info AppiumDoctor
```

## 参考

- [COMMAND NOT FOUND WITH A NODE MODULE (NPM) SOLUTION](http://blog.webbb.be/command-not-found-node-npm/)
- [Error: EACCES, permission denied '/usr/local/lib/node_modules/___coffee-script.npm'](https://github.com/npm/npm/issues/2049)
- [Appium Doctor - unable to set JAVA_HOME/bin](https://discuss.appium.io/t/appium-doctor-unable-to-set-java-home-bin/12902/8)
- [Setting ANDROID_HOME enviromental variable on Mac OS X](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)