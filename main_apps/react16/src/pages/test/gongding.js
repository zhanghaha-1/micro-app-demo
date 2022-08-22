/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

import config from '../../config'
const GongDing = () => {
    return (
      <div>
        <micro-app
          name='appname-gongding' // name(必传)：应用名称
          url={`${config.gongding}`} // url(必传)：应用地址，会被自动补全为http://web.jd.com:8000
          baseroute='/main-react16/app-gongding' 
          // baseroute这里配置不影响，保证router.js中Router path的值与sidebar中的配置一样
        ></micro-app>
      </div>
    )
}
export default GongDing