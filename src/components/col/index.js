import { Col } from '../grid'

/* istanbul ignore next */
Col.install = (Vue) => {
    Vue.component(Col.name, Col)
}

export default Col
