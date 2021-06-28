import { useState, useEffect } from 'react';
import useProjectData from './useProjectData';

export default function useProjectMarkdown(projectName) {
  const projectData = useProjectData();
  const [markdown, setMarkdown] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async (markdownUrl) => {
      const res = await fetch(markdownUrl);
      const text = await res.text();
      setMarkdown(text);
      setLoading(false);
    }

    const project = projectData?.find(p => p.name === projectName)
    const markdownUrl = project?.markdownUrl
    if (markdownUrl) {
      setNotFound(false);
      setLoading(true);
      fetchData(markdownUrl);
    } else {
      setNotFound(true);
      setLoading(false);
      setMarkdown(undefined);
    }
  }, [projectName, projectData]);

  return [loading, notFound, markdown];
}
