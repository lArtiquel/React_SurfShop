import React from 'react'
import ShopItem from '../ShopItem'
import '../../res/styles/surf-theme.min.css'

export default () => {
  return (
    <article className="bg container w-container" id="shop">
      <div className="heading-box">
        <div className="small-blue-heading">SHOP</div>
        <h2 className="sub-heading">Surfboards</h2>
      </div>

      <div
        className="slider w-slider"
        data-animation="slide"
        data-duration="500"
        data-infinite="1"
      >
        <div className="mask w-slider-mask">
          <ShopItem
            boardName="Chilli Rare Bird"
            scrollFloatingType="float-in-on-scroll"
            floatingType="floating"
            src={`${process.env.PUBLIC_URL}/img/chili-board.png`}
            price="$890"
          />

          <ShopItem
            boardName="Emery NEM XF"
            scrollFloatingType="float-in-on-scroll-2"
            floatingType="floating-2"
            src={`${process.env.PUBLIC_URL}/img/board-2.png`}
            price="$900"
          />

          <ShopItem
            boardName="Agency GROM"
            scrollFloatingType="float-in-on-scroll-3"
            floatingType="floating"
            src={`${process.env.PUBLIC_URL}/img/surfboard-grom.png`}
            price="$750"
          />
        </div>
        <div className="arrow w-slider-arrow-left">
          <div className="w-icon-slider-left" />
        </div>
        <div className="arrow w-slider-arrow-right">
          <div className="w-icon-slider-right" />
        </div>
        <div className="w-round w-slider-nav">
          <div className="w-slider-dot w-active" data-wf-ignore="" />
        </div>
      </div>
    </article>
  )
}
