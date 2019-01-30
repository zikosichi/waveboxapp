import React from 'react'
import PropTypes from 'prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import { withStyles } from '@material-ui/core/styles'
import { RouterDialog } from 'wbui/RouterDialog'
import LinuxSetupSceneContent from './LinuxSetupSceneContent'

const styles = {
  root: {
    maxWidth: 600,
    width: 600,
    minWidth: 600
  }
}

@withStyles(styles)
class LinuxSetupScene extends React.Component {
  /* **************************************************************************/
  // Class
  /* **************************************************************************/

  static propTypes = {
    routeName: PropTypes.string.isRequired
  }

  /* **************************************************************************/
  // User Interaction
  /* **************************************************************************/

  handleClose = () => {
    window.location.hash = '/'
  }

  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    const { classes, routeName } = this.props

    return (
      <RouterDialog
        routeName={routeName}
        disableEnforceFocus
        onClose={this.handleClose}
        classes={{ paper: classes.root }}>
        <LinuxSetupSceneContent />
      </RouterDialog>
    )
  }
}

export default LinuxSetupScene
