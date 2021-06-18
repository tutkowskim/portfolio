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
  
  const crumbs = location.pathname.split('/')
    .map((path, index) => index === 0 ? 'Home': path)
    .filter(path => path.length > 0)
    .map((path, index, paths) => ({
      label: path.replace(/\b\w/g, l => l.toUpperCase()),
      url: '/' + paths.slice(1, index + 1).join('/')
    }))

  if (crumbs.length <= 1) {
    // Don't show the breadcrumbs on the home page
    return <></>
  }

  return (
    <Breadcrumbs className={classes.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        (crumbs.length-1 !== index)
          ? <Link key={crumb.label} onClick={() => history.push(crumb.url)}>{crumb.label}</Link>
          : <Typography>{crumb.label}</Typography>
      ))}
    </Breadcrumbs>
  )
}

export default AppBreadcrumbs
