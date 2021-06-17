import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  breadcrumbs: {
    padding: '5px'
  },
}));

const AppBreadcrumbs = () => {
  const classes = useStyles()
  const history = useHistory();
  const location = useLocation();
  
  const paths = location.pathname.split('/')
  paths[0] = 'Home'

  const crumbs =  paths.filter(path => path.length > 0)
    .map(path => path.replace(/\b\w/g, l => l.toUpperCase()))

  if (crumbs.length <= 1) {
    // Don't show the breadcrumbs on the home page
    return <></>
  }

  return (
    <Breadcrumbs className={classes.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        (crumbs.length-1 !== index)
          ? <Link key={crumb} onClick={() => history.push('../'.repeat(crumbs.length - index - 1))}>{crumb}</Link>
          : <Typography>{crumb}</Typography>
      ))}
    </Breadcrumbs>
  )
}

export default AppBreadcrumbs
