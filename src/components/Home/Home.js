import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Home.scss'
import LeftBar from '../LeftBar'
import MainPanel from '../MainPanel'

class Home extends React.Component {

  componentWillMount() {
    console.log('home')
  }
  
  render () {

    return (
      <div className={styles.wrapper}>
        <LeftBar className={styles.leftBar}/>
        <MainPanel className={styles.mainPanel}/>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome

