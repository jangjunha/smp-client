import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Home.scss'
import Leftbar from '../Leftbar'
import MainPanel from '../MainPanel'
import Masthead from '../Masthead/Masthead'

class Home extends React.Component {

  render () {
    var x = this.props.location
    var y = this.props.params
    console.log(1, this.props.params)

    return (
      <div className={styles.wrapper}>
        <Masthead/>
        <div className={styles.body}>
          <Leftbar className={styles.leftbar}/>
          <MainPanel className={styles.mainPanel}/>
        </div>
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
