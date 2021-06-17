import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Breadcrumbs, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  breadcrumbs: {
    padding: '5px'
  },
}));

const AppBreadcrumbs = () => {
  const classes = useStyles()
  const history = useHistory();
  const location = useLocation();
  
  let paths = location.pathname.split('/')
  paths[0] = 'Home'
  paths = paths.filter(path => path.length > 0)
  
  const crumbs = []
  let url = ''
  paths.forEach((path, index) => {
    url = `${url}/${index > 1 ? path : ''}`
    crumbs.push({
      label: path.replace(/\b\w/g, l => l.toUpperCase()),
      url
    })
  })

  if (crumbs.length <= 1) {
    // Don't show the breadcrumbs on the home page
    return <></>
  }

  return (
    <Breadcrumbs className={classes.breadcrumbs}>
      {crumbs.map(crumb => (
        <Link key={crumb.url} href="#" onClick={() => history.push(crumb.url)}>{crumb.label}</Link>
      ))}
    </Breadcrumbs>
  )
}

export default AppBreadcrumbs
