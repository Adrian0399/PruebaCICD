//Test componente FeaturedCarousel with store mock FeaturedSlice

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { featuredSlice, getFeaturedMock } from 'slices/featuredSlice';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import FeaturedCarousel from '.';
import * as router from 'react-router'




const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('Test --> FeaturedCarousel component', () => {
    beforeEach(async () => {
        const store = configureStore({
            reducer: {
                featured: featuredSlice.reducer
            }
        });
        const result = await store.dispatch(getFeaturedMock())
        render(<Provider store={store}><FeaturedCarousel /></Provider>);
    });

    test('FeaturedCarousel component to be true', () => {
        expect(screen.getByText('Hydrating Foot Paraffin')).toBeDefined();
    });

    test('FeaturedCarousel component to be true', () => {
        expect(screen.getByText('Featured 2')).toBeDefined();
    });
});


