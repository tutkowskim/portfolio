import { useState, useEffect } from 'react';
import useProjectData from './useProjectData';

export default function useProjectMarkdown(projectName) {
  const projectData = useProjectData();
  const [markdown, setMarkdown] = useState(undefined);

  useEffect(() => {
    const fetchData = async (markdownUrl) => {
      const res = await fetch(markdownUrl);
      const text = await res.text();
      setMarkdown(text);
    }

    const project = projectData?.find(p => p.name === projectName)
    const markdownUrl = project?.markdownUrl
    if (markdownUrl) {
      fetchData(markdownUrl);
    }
  }, [projectName, projectData]);

  return markdown;
}
