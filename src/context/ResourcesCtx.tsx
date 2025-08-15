import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactNode,
  ReactElement,
} from 'react';
import red from '../assets/Svgs/red.svg';
import yellow from '../assets/Svgs/yellow.svg';
import green from '../assets/Svgs/green.svg';
import orange from '../assets/Svgs/orange.svg';
import blue from '../assets/Svgs/blue.svg';
import { PiFilePdfDuotone, PiVideo, PiLinkBold } from 'react-icons/pi';
import { IconType } from 'react-icons';

interface Resource {
  id: number;
  icon: IconType;
  img: string;
  title: string;
  text: string;
  description: string;
  type: string;
  category: string;
}

interface ResourcesContextType {
  resources: Resource[];
  filteredResources: Resource[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
  role: 'employer' | 'employee';
  setRole: (role: 'employer' | 'employee') => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

const ResourcesContext = createContext<ResourcesContextType | undefined>(
  undefined
);

interface ResourcesProviderProps {
  children: ReactNode;
}

export const ResourcesProvider = ({ children }: ResourcesProviderProps) => {
  const initialResources: Resource[] = [
    {
      id: 1,
      icon: PiLinkBold,
      img: red,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
      type: 'Link',
      category: 'sample-1',
    },
    {
      id: 2,
      icon: PiVideo,
      img: green,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
      type: 'Video',
      category: 'sample-2',
    },
    {
      id: 3,
      icon: PiLinkBold,
      img: red,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
      type: 'Link',
      category: 'sample-3',
    },
    {
      id: 4,
      img: orange,
      icon: PiVideo,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Wellbeing',
      type: 'Video',
      category: 'sample-4',
    },
    {
      id: 5,
      img: yellow,
      icon: PiFilePdfDuotone,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
      type: 'PDF',
      category: 'sample-5',
    },
    {
      id: 6,
      img: blue,
      icon: PiFilePdfDuotone,
      title: 'Taking stock of mental health in your workplace',
      text: 'Sample Topic',
      description: 'Secure Base',
      type: 'PDF',
      category: 'sample-6',
    },
  ];

  const [resources] = useState<Resource[]>(initialResources);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [role, setRole] = useState<'employer' | 'employee'>('employer');
  const [activePage, setActivePage] = useState<string>('dashboard');

  const filteredResources = useMemo(() => {
    const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);

    return resources.filter((item) => {
      const matchesSearch = searchWords.every(
        (word) =>
          item.title.toLowerCase().includes(word) ||
          item.text.toLowerCase().includes(word) ||
          item.description.toLowerCase().includes(word) ||
          item.type.toLowerCase().includes(word)
      );

       if (selectedFilters.some((f) => f.startsWith('sample'))) {
      return matchesSearch;
    }
      const matchesFilter =
        selectedFilters.length === 0 ||
        
        selectedFilters.includes(item.description) ||
        selectedFilters.includes(item.type) ||
        selectedFilters.some(
        (filter) =>
          item.description.includes(filter) ||
          item.type.includes(filter) ||
          item.text.includes(filter) 
      );

      return matchesSearch && matchesFilter;
    });
  }, [resources, searchTerm, selectedFilters]);

  
const toggleFilter = (filterLabel: string) => {
  setSelectedFilters((prev) => {
    const isSample = filterLabel.startsWith('sample-');

    if (isSample) {
      return [filterLabel];
    }

    return prev.includes(filterLabel)
      ? prev.filter((f) => f !== filterLabel)
      : [...prev, filterLabel];
  });
};


  return (
    <ResourcesContext.Provider
      value={{
        resources,
        filteredResources,
        searchTerm,
        setSearchTerm,
        selectedFilters,
        toggleFilter,
        role,
        setRole,
        activePage,
        setActivePage,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResources = () => {
  const context = useContext(ResourcesContext);
  if (!context) {
    throw new Error('useResources must be used within a ResourcesProvider');
  }
  return context;
};
