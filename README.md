#视频弹窗组件

>功能：动态加载弹窗并播放video
兼容性： pc、ipad、iphone、大部分安卓（目前未检测到不适配问题）
安卓性能：部分手机直接调取内置浏览器横屏播放视频

| 方法 |详细解释|备注|
| - | - | - |
| videoPlay| 视频播放触发函数 | 通过事件触发 |


| 参数 |详细解释|备注|
| - | - | - |
| src | 视频路径 | 可以为空（会提示未添加路径） |

```
//使用样例
<button onclick="videoPlay('video/src/znbc.mp4')">视频播放</button>

```
---
[GitHub 地址](https://github.com/zhaobinhong/mask_video)
---

[Demo 地址](http://hovace.me/mask_video/demo.html)
---