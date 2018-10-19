# NativeScript JavaScript Template

This project uses nativescript-camera plugin with Vue.

In order to use the sample, install the required nativescript-vue cli tools. After installing nativescript-vue cli use the below commands to build the sample.

tns build android --bundle

To debug the sample , run the below command to get the chrome debugger tools url.

tns debug android --bundle

To run with out debugging, run the below command

tns run android --bundle

I have tested the sample using  Android Emulator which is of version 7.1 (Nougat) - API 25 and emulator version - 27.3.10-4969155

The sample uses http module and axios module to post json request with Image as Base64String to an API. I have created an Azure Function API which accepts the JSON request and returns the same content.

When using axios, we need to always pass the data in the form of string.
data: { ImageContent: this.pictureBase64String.toString() }

Axios will not post request if the content is not sent as string.

You can also test the sample using IOS, if you have IOS Device.


