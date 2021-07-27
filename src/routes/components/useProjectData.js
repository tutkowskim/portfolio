import { useState, useEffect } from 'react';

export default function useProjectData() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/projects/projectData.json');
      const json = await res.json();
      setProjectData(json);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { projectData, loading };
}
