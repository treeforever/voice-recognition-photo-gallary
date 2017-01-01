const C = require('clausejs')
import React from 'react'

class ClauseComponent extends React.Component {
  constructor () {
    super()
    const { propSpecs } = this.constructor
    if (propSpecs) {
      const nullablePropSpecs = C.or(propSpecs, C.isUndefined, C.isNull)

      const currWillUpdateFn = this.componentWillUpdate
      this.componentWillUpdate = (nextProps) => {
        C.enforce(nullablePropSpecs, nextProps)
        if (currWillUpdateFn) {
          return currWillUpdateFn.apply(this, arguments)
        }
        return undefined
      }

      const currWillMountFn = this.componentWillMount
      this.componentWillMount = () => {
        C.enforce(nullablePropSpecs, this.props)
        if (currWillMountFn) {
          return currWillMountFn.apply(this, arguments)
        }
        return undefined
      }
    }
  }
}

export default ClauseComponent
