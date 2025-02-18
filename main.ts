import { Leafer, Rect } from 'leafer-ui'

import { Spine, loadAsset } from './src' // 引入插件代码

;(async () => {
  renderHeader()
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
  div.setAttribute('style', 'position:fixed;top:60px;left:0;')
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


function renderHeader(){
  const fragment = document.createDocumentFragment()

  const left = document.createElement("div")
  left.setAttribute("style","font-size:24px;font-weight:bold;flex:1")
  left.textContent = "leafer-x-spine(骨骼动画)"

  const right = document.createElement("div")
  right.setAttribute("style","display:flex;align-items:center;")


  const npmLink = document.createElement("a")
  npmLink.href = "https://www.npmjs.com/package/leafer-x-spine"
  npmLink.setAttribute("target","_blank")
  npmLink.setAttribute("style","padding-right:12px;")
  npmLink.innerHTML = `
  <img src="https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" style="width:32px;height:32px;" />
  `

  const githubLink = document.createElement("a")
  githubLink.setAttribute("target","_blank")
  githubLink.href = "https://github.com/sulgweb/leafer-x-spine"
  githubLink.innerHTML = `<svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>`

  right.appendChild(npmLink)
  right.appendChild(githubLink)
  
  
  const div = document.createElement("div")
  div.setAttribute("style","z-index:1000;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ccc;position: fixed;top:0;left:0;width:100%;height:60px;background:#fff;padding:0 12px;box-sizing:border-box;")
  div.appendChild(left)
  div.appendChild(right)
  fragment.appendChild(div)
  document.body.appendChild(fragment)
} 


