import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResourcesProvider, useResources } from '../context/ResourcesCtx';
import userEvent from '@testing-library/user-event';


const TestComponent = () => {
  const { filteredResources, toggleFilter, searchTerm, setSearchTerm } = useResources();

  return (
    <div>
      <button onClick={() => toggleFilter('Secure Base')}>Toggle Secure Base</button>
      <button onClick={() => toggleFilter('sample')}>Toggle Sample</button>
      <button onClick={() => setSearchTerm('mental')}>Set Search Term</button>
      <button onClick={() => setSearchTerm('pdf')}>Search PDF</button>
      <button onClick={() => setSearchTerm('video')}>Search Video</button>
      <button onClick={() => setSearchTerm('link')}>Search Link</button>
      <ul>
        {filteredResources.map((r) => (
          <li key={r.id}>{r.title} - {r.type}</li>
        ))}
      </ul>
    </div>
  );
};

describe('ResourcesProvider', () => {
  test('renders all resources by default', () => {
    render(
      <ResourcesProvider>
        <TestComponent />
      </ResourcesProvider>
    );

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(6); 
  });

  test('filters resources by description using toggleFilter', async () => {
    render(
      <ResourcesProvider>
        <TestComponent />
      </ResourcesProvider>
    );

    const button = screen.getByText('Toggle Secure Base');
    await userEvent.click(button);

    const items = screen.getAllByRole('listitem');

    // This for the 5 resources with description 'Secure Base'
    expect(items.length).toBe(5);
  });

  test('filters resources by search term', async () => {
    render(
      <ResourcesProvider>
        <TestComponent />
      </ResourcesProvider>
    );

    const button = screen.getByText('Set Search Term');
    await userEvent.click(button);

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(1);
    expect(items[0]).toHaveTextContent('Taking stock of mental health in your workplace');
  });

  test('treats any "sample" filter as show-all (search still applies)', async () => {
    render(
      <ResourcesProvider>
        <TestComponent />
      </ResourcesProvider>
    );

    await userEvent.click(screen.getByText('Toggle Sample'));
    expect(screen.getAllByRole('listitem')).toHaveLength(6);

    await userEvent.click(screen.getByText('Set Search Term'));
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(1);
    expect(items[0]).toHaveTextContent('Taking stock of mental health in your workplace');
  });

  
  test('filters resources by type: PDF', async () => {
    render(
      <ResourcesProvider>
        <TestComponent />
      </ResourcesProvider>
    );

    await userEvent.click(screen.getByText('Search PDF'));
    const pdfItems = screen.getAllByRole('listitem');
    expect(pdfItems.length).toBe(2);

    pdfItems.forEach((item) => {
      expect((item.textContent ?? '').toLowerCase()).toContain('pdf');
    });
  });

  test('filters resources by type: Video', async () => {
    render(
      <ResourcesProvider>
        <TestComponent />
      </ResourcesProvider>
    );

    await userEvent.click(screen.getByText('Search Video'));
    const videoItems = screen.getAllByRole('listitem');
    expect(videoItems.length).toBe(2);

    videoItems.forEach((item) => {
      expect((item.textContent ?? '').toLowerCase()).toContain('video');
    });
  });
});