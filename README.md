

# loop-youtube

[loop-youtube] could repeat Youtube Video for a specific time you want to loop.

## Features

- repeat and loop Youtube video infinitely
- Support on mobile browsers(safari etc.)


## How to Use

access [loop-youtube]

↓

paste url you want to loop Youtube Video and click `Search` button

↓

specifiy the time with slider

↓

Click `Copy Link` Button and Let's share to someone this link.

![0161aee2c0d70e9c53fd00f3dec6a51e](https://user-images.githubusercontent.com/4640346/103184979-bbd29d00-48fd-11eb-92de-4dcde731766e.gif)


## params

[loop-youtube] works based on "query string"
You could also run it by specifying "query string" without adjusting with the slider

The following are the parameters you can use.

|name|Description|example|
|:---|:---|:---|
|watch(required)|youtube videoID to play|watch=xxxx|
|s|Time to start repeating |s=00:20|
|e|Time to end repeating|e=00:25|
|w|Words that can be expressed in one word|w=amazing|

## example

https://l-youtube.com/?v=lLaRC7GkVR8&s=01:51&e=01:52&w=kawaii

---


## How to Install

[loop-youtube] is OSS. 
You could run it on localhost by following the steps below.

```
git clone https://github.com/negabaro/loop-youtube
cd loop-youtube
yarn install
yarn serve
```

[loop-youtube]: https://l-youtube.com
