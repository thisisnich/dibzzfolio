import { useState, useEffect, useRef } from 'react';

type CodeChangeCardProps = {
  code: string;
  maxLines?: number;
  language?: string;
  title?: string;
  description?: string;
};

const CodeChangeCard = ({
  code,
  maxLines = 10,
  language = '',
  title = '',
  description = ''
}: CodeChangeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldCollapse, setShouldCollapse] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);
  
  useEffect(() => {
    // Check if the code block has more lines than the maxLines threshold
    if (codeRef.current) {
      const lineHeight = parseInt(getComputedStyle(codeRef.current).lineHeight);
      const codeHeight = codeRef.current.scrollHeight;
      const approxLines = Math.ceil(codeHeight / (lineHeight || 20)); // Fallback to 20px if lineHeight is not set
      
      setShouldCollapse(approxLines > maxLines);
    }
  }, [code, maxLines]);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
      {(title || description) && (
        <div className="bg-gray-700 p-4">
          {title && <h3 className="text-xl font-medium">{title}</h3>}
          {description && <p className="text-gray-300">{description}</p>}
        </div>
      )}
      
      {/* The key change is here - adding overflow-x-auto to enable horizontal scrolling */}
      <div className="p-4">
        <div className="overflow-x-auto" style={{ width: '100%' }}>
          <pre
            ref={codeRef}
            className={`bg-gray-900 p-4 rounded text-sm font-mono whitespace-pre${
              !isExpanded && shouldCollapse ? ' max-h-code-collapsed' : ''
            }`}
            style={{
              ...((!isExpanded && shouldCollapse) ? { maxHeight: `${maxLines * 1.5}em` } : {}),
              overflowY: !isExpanded && shouldCollapse ? 'hidden' : 'auto'
            }}
          >
            <code>{code}</code>
          </pre>
        </div>
        
        {shouldCollapse && (
          <button
            onClick={toggleExpand}
            className="mt-2 px-4 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CodeChangeCard;  