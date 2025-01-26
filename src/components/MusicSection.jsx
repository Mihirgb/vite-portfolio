import React from 'react'

const MusicSection = () => {
  return (
    <div>
        <section className="p-8">
          <div className="flex space-x-10">
            {/* <div className="w-full md:w-1/3 p-2">
            <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/4k2l4vgXBSKtEIKQUK2tU1?utm_source=generator" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            
            </div> */}
            <div className="w-full md:w-1/2 ">
            <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/2BeA2VD9rVqpyGfwljMchK?utm_source=generator" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="w-full md:w-1/2  ">
            <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/4kCgcPmopMtsG63xdj83VL?utm_source=generator" width="100%" height="452" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MusicSection