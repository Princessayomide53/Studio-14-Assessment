import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResourcesProvider, useResources } from '../context/ResourcesCtx';
import userEvent from '@testing-library/user-event';


const TestComponent = () => {
  const { filteredResources, toggleFilter, searchTerm, setSearchTerm } = useResources();

  return (
    <div>
      <button onClick={() => toggleFilter('Secure Base')}>Toggle Secure Base</button>
      <button onClick={() => setSearchTerm('mental')}>Set Search Term</button>
      <ul>
        {filteredResources.map((r) => (
          <li key={r.id}>{r.title}</li>
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
    // Only 1 resource title contains 'mental'
    expect(items.length).toBe(1);
    expect(items[0]).toHaveTextContent('Taking stock of mental health in your workplace');
  });
});
