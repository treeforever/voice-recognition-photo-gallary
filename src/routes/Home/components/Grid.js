import React from 'react'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import { GridList, GridTile } from 'material-ui/GridList'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
const C = require('clausejs')

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowX: 'auto'
  }
}

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Grid = C.fclause({
  args: C.cat(C.shape({
    // req: {
    //   tilesData: C('say/grid')
    // }
  }), C.zeroOrMore(C.any),
),
  ret: () => true

}).instrument(({ tilesData }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>photo gallery</Subheader>
      {tilesData.map((tile, index) => (
        <GridTile
          key={index}
          >
          <img src={tile} />
        </GridTile>
      ))}
    </GridList>
  </div>
))

export default Grid
