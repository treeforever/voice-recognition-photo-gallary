import React from 'react'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import { GridList, GridTile } from 'material-ui/GridList'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

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

const tilesData = [
  {
    img: 'http://www.demilked.com/magazine/wp-content/uploads/2015/05/adorable-bird-animal-owl-photography-sasi-smith-fb.jpg',
    title: 'owl babies',
    author: 'jill111'
  },
  {
    img: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/best-iphone-photography-awards-winners-2016-fb__700-png.jpg',
    title: 'Smiling foxes',
    author: 'pashminu'
  },
  {
    img: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/12/rain-street-photography-glass-raindrops-oil-paintings-eduard-gordeev-17.jpg',
    title: 'Blurred city',
    author: 'Danson67'
  },
  {
    img: 'https://static1.squarespace.com/static/5620463ee4b0d17f9945b588/t/57b39cbb8419c221bca284a7/1471388913639/Moments-by-lauren-Photographer-Hamilton-Ontario-Wedding-Lifestyle-Photography',
    title: 'Cameras are ready',
    author: 'fancycrave1'
  }
]

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Grid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>photo gallery</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

export default Grid
