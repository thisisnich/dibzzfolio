const project = {
    // Basic Project Info
    title: "Project Title",
    description: "A brief description of your project that explains its purpose and value to users.",
    
    // Project Links
    website: "https://your-project-website.com/",
    repo: "https://github.com/yourusername/your-repo",
    
    // Carousel Configuration (optional)
    hasCarousel: true,
    carouselCategories: [
      {
        label: 'Category 1',
        screenshots: [
          '/images/category1/screenshot1.png',
          '/images/category1/screenshot2.png',
          '/images/category1/screenshot3.png',
          '/images/category1/screenshot4.png',
        ]
      },
      {
        label: 'Category 2',
        screenshots: [
          '/images/category2/screenshot1.png',
          '/images/category2/screenshot2.png',
          '/images/category2/screenshot3.png',
          '/images/category2/screenshot4.png',
        ]
      },
    ],
    
    // Feature Highlight (always present)
    featureHighlight: {
      title: "Main Feature Title",
      description: "Detailed description of your project's standout feature and why it matters to users.",
      image: "/public/images/misc/featureHighlight.png"
    },
    
    // Technologies Used (always present)
    technologies: ["React", "Next.js", "TypeScript", "CSS", "Firebase"], // Replace with your tech stack
    
    // Key Features (always present)
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description",
      "Feature 4 description"
    ],
    
    // About This Project (always present but content differs)
    aboutProject: {
      isForked: false, // Change to true if this is a fork of another project
      
      // Even if is forked is true, leave this section but vales can be empty
      mainProject: {
        title: "Original Project Title",
        description: "Description of the original project this is forked from.",
        website: "https://original-project-website.com/",
        repo: "https://github.com/originalauthor/original-repo"
      },
      
      // Additional information about your project
      additionalInfo: "Any additional context about your project that would be helpful for viewers to understand."
    },
    
    // My Improvements & Code Changes (always present)
    codeChanges: [
      {
        title: "Code Change 1 Title",
        description: "Description of what this code change accomplishes and why it's important.",
        code: `// Example code block
  function exampleFunction() {
    const data = fetchData();
    return data.map(item => {
      return {
        ...item,
        processed: true
      };
    });
  }`
      },
      {
        title: "Code Change 2 Title",
        description: "Description of what this code change accomplishes and why it's important.",
        code: `// Another example code block
  import { useState, useEffect } from 'react';
  
  export function CustomComponent() {
    const [state, setState] = useState(null);
    
    useEffect(() => {
      // Fetch data or perform some initialization
      const data = fetchInitialData();
      setState(data);
    }, []);
    
    return (
      <div className="container">
        {state ? (
          <div className="content">{state.content}</div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    );
  }`
      },
      {         
        title: "Code Change 3 Title",
        description: "Description of what this code change accomplishes and why it's important.",
        code: `// Example of a component or feature implementation
  import { useContext } from 'react';
  import { DataContext } from '@/contexts/DataContext';
  
  export function FeatureComponent({ id, title }) {
    const { data, updateData } = useContext(DataContext);
    
    const handleAction = () => {
      updateData(id, { 
        title,
        lastUpdated: new Date()
      });
    };
    
    return (
      <section className="feature-section">
        <h2>{title}</h2>
        <p>Current status: {data[id]?.status || 'Not started'}</p>
        <button 
          onClick={handleAction}
          className="action-button"
        >
          Update Status
        </button>
      </section>
    );
  }`
      },
      {
        title: "Code Change 4 Title",
        description: "Description of what this code change accomplishes and why it's important.",
        code: `// Example of an API or data handling implementation
  import { api } from '@/lib/api';
  
  // Function to process and transform data
  export async function processData(rawData) {
    const categorized = rawData.reduce((acc, item) => {
      const category = item.category || 'uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({
        id: item.id,
        name: item.name,
        value: item.value,
        processed: true
      });
      return acc;
    }, {});
    
    return {
      categories: Object.keys(categorized),
      data: categorized,
      summary: {
        total: rawData.length,
        processedAt: new Date().toISOString()
      }
    };
  }`
      }
    ],
    
    // Implementation Details (always present)
    implementationDetails: [
      {
        title: "Implementation Detail 1",
        description: `Detailed explanation of an important implementation aspect of your project. This should provide context about your approach, challenges faced, and how you solved them.
        
  This can include architectural decisions, optimization techniques, or unique solutions to difficult problems.`
      },
      {
        title: "Implementation Detail 2",
        description: `Detailed explanation of another important implementation aspect of your project. This should highlight your technical skills and problem-solving abilities.
  
  You can describe how you implemented a particular feature, what libraries or technologies you used, and why you made certain technical decisions.`
      },
      {
        title: "Implementation Detail 3",
        description: `Explanation of a third implementation detail that showcases your technical expertise. This could focus on performance optimizations, accessibility improvements, or other technical aspects of your project.
  
  For example, you might discuss how you improved load times, implemented responsive design, or ensured cross-browser compatibility.`
      },
      {
        title: "Implementation Detail 4",
        description: `Description of a fourth implementation detail that demonstrates your attention to detail and comprehensive approach to development.
  
  This section can highlight less visible but important aspects of your project, such as error handling, testing strategies, or deployment configurations.`
      }
    ],
    
    // GitHub Stats (Optional - can be fetched dynamically)
    githubUsername: "yourusername",
    repoOwner: "yourusername",
    repoName: "your-repo"
  };
  
  export default project;