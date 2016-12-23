import React from 'react'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import { GridList, GridTile } from 'material-ui/GridList'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
const S = require('specky')

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
const Grid = S.fspec({
  args: S.cat(S.props({
    req: {
      // tilesData: S('ssi.grid')
    }
  }), S.zeroOrMore(S.any),
),
  ret: () => true

}).instrument(({ tilesData }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>photo gallery</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          subtitle={<span>by <b>{tile.owner}</b></span>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
))

export default Grid
