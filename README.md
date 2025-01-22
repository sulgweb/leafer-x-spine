# leferjs 骨骼动画插件

## 演示地址

[https://sulgweb.github.io/leafer-x-spine/](https://sulgweb.github.io/leafer-x-spine/)

## 使用

```javascript
import { Leafer, Rect } from 'leafer-ui'

import { Spine, loadAsset } from './src' // 引入插件代码

// 加载骨骼模型
const skeletonData = await loadAsset({
  baseUrl: `models/spineboy/`, // 骨骼模型地址
  skelName: 'spineboy.skel', // 骨骼模型文件
  atlasName: 'spineboy.atlas', // 贴图文件
})

// 实例化leafer
const leafer = new Leafer({ view: window })

// 实例化骨骼动画
const spine = new Spine({
  x: 200,
  y: 200,
  scale: 0.3,
  skeletonData: skeletonData,
})

// 添加到leafer
leafer.add(spine)
```
