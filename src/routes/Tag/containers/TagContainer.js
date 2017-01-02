import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../../actions/tagActions'

const mapDispatchToProps = {
  helloWorld
}

const mapStateToProps = (state) => ({
  helloWorld : state.helloWorld
})

export default connect(mapStateToProps, mapDispatchToProps)(TagView)