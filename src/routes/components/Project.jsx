import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Typography, Link, makeStyles } from '@material-ui/core';
import useProjectMarkdown from './useProjectMarkdown';

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

const useStyles = makeStyles(() => ({
  markdown: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '2rem',
  },
}));

function Project() {
  const classes = useStyles();
  const { projectName } = useParams();
  const markdown = useProjectMarkdown(projectName);

  // Map the markdown components to material-ui components
  // https://github.com/remarkjs/react-markdown#appendix-b-components
  const components = {
    h1: ({ node, children, ...props }) => <Typography variant="h1" {...props}>{children}</Typography>,
    h2: ({ node, children, ...props }) => <Typography variant="h2" {...props}>{children}</Typography>,
    h3: ({ node, children, ...props }) => <Typography variant="h3" {...props}>{children}</Typography>,
    h4: ({ node, children, ...props }) => <Typography variant="h4" {...props}>{children}</Typography>,
    h5: ({ node, children, ...props }) => <Typography variant="h5" {...props}>{children}</Typography>,
    h6: ({ node, children, ...props }) => <Typography variant="h6" {...props}>{children}</Typography>,
    p: ({ node, children, ...props }) => <Typography variant="body1" {...props}>{children}</Typography>,
    em: ({ node, children, ...props }) => <Typography variant="body1" {...props}>{children}</Typography>,
    a: ({ node, children, ...props }) => <Link {...props}>{children}</Link>,
  };

  return (
    <ReactMarkdown
      className={classes.markdown}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default Project;
