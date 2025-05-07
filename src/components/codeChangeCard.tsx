import { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
// Import language support as needed
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/themes/prism-tomorrow.css'; // Choose a theme that works with dark mode

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
  
  // Map common language shorthands to Prism language identifiers
  const languageMap: Record<string, string> = {
    'js': 'javascript',
    'jsx': 'jsx',
    'ts': 'typescript', 
    'tsx': 'tsx',
    'html': 'markup',
    'css': 'css',
  };
  
  // Get the correct Prism language class
  const prismLanguage = languageMap[language.toLowerCase()] || language.toLowerCase() || 'javascript';

  useEffect(() => {
    // Check if the code block has more lines than the maxLines threshold
    if (codeRef.current) {
      const lineHeight = Number.parseInt(getComputedStyle(codeRef.current).lineHeight);
      const codeHeight = codeRef.current.scrollHeight;
      const approxLines = Math.ceil(codeHeight / (lineHeight || 20)); // Fallback to 20px if lineHeight is not set
      
      setShouldCollapse(approxLines > maxLines);
    }
  }, [maxLines]);
  
  useEffect(() => {
    // Apply syntax highlighting when component mounts or code/language changes
    if (codeRef.current) {
      const codeElement = codeRef.current.querySelector('code');
      if (codeElement) {
        Prism.highlightElement(codeElement);
      }
    }
  },);
  
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
      
      <div className="p-4">
        <div className="overflow-x-auto w-full">
          <pre
            ref={codeRef}
            className="bg-gray-900 p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto"
            style={{
              maxHeight: !isExpanded && shouldCollapse ? `${maxLines * 1.5}rem` : 'none',
              overflowY: !isExpanded && shouldCollapse ? 'hidden' : 'auto'
            }}
          >
            <code className={`language-${prismLanguage}`}>
              {code}
            </code>
          </pre>
        </div>
        
        {shouldCollapse && (
          <button
            type="button"
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