# Device APIs & Media

## Summary

How I request access to device features and display a selected photo.

## Permissions

I request camera or foreground location access when the user presses its button. I check the result before continuing and show a message if access is denied. Permissions can be changed in device settings.

## Camera and library

ImagePicker opens the system camera or photo picker. The system photo picker lets the user choose an image without requesting broad library access. I handle cancellation before reading the selected URI. Camera behavior depends on the device; test it on a phone.

## Location, clipboard and links

Location reads coordinates after permission is granted. Clipboard copies a fixed message. Linking opens a website in the browser. None of these actions run automatically when the page opens.

## Images

expo-image displays the selected URI. contentFit controls cropping and cachePolicy controls memory and disk caching. A local photo is already on the device; caching is especially useful for remote images.

## Try it

Choose a photo, copy the sample text and paste it elsewhere. Try denying a permission, then enabling it in settings. Web support varies by browser; camera and location may require HTTPS or localhost.

[ImagePicker reference](https://docs.expo.dev/versions/v57.0.0/sdk/imagepicker/)
