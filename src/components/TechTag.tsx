import React from 'react';

interface TechTagProps {
  tag: string;
}

const TechTag: React.FC<TechTagProps> = ({ tag }) => (
  <span className="inline-block bg-slate-700/50 text-slate-300 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
    {tag}
  </span>
);

export default TechTag;
