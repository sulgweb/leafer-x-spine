import { Leafer, Rect } from 'leafer-ui'

import { Spine, loadAsset } from './src' // 引入插件代码

;(async () => {
  const skeletonData = await loadAsset({
    baseUrl: `models/spineboy/`,
    skelName: 'spineboy.skel',
    atlasName: 'spineboy.atlas',
  })

  console.log('Leafer',Leafer)
  const leafer = new Leafer({ view: window })
  const spine = new Spine({
    x: 200,
    y: 200,
    scale: 0.3,
    skeletonData: skeletonData,
  })
  const rect = new Rect({
    x: 200,
    y: 200,
    width: 400,
    height: 400,
    fill: '#32cd79',
    draggable: true,
  })

  leafer.add(rect)
  leafer.add(spine)


  const div = document.createElement('div')
  div.setAttribute('style', 'position:fixed;top:0;left:0;')
  skeletonData.animations.forEach(item=>{
    const btn = document.createElement('button')
    btn.textContent = item.name
    btn.onclick = ()=>{
        spine.animationState.setAnimation(0, item.name,true)
    }
    div.appendChild(btn)
  })
  document.body.appendChild(div)
})()

