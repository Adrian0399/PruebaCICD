//Test componente CategoriesCarousel with store mock CategoriesSlice

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { categoriesSlice, getCategoriesMock } from 'slices/categoriesSlice';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import CategoriesCarousel from '.';
import * as router from 'react-router'


const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('Test --> CategoriesCarousel component', () => {
    beforeEach(async () => {
        const store = configureStore({
            reducer: {
                categories: categoriesSlice.reducer
            }
        });
        const result = await store.dispatch(getCategoriesMock())
        render(<Provider store={store}><CategoriesCarousel /></Provider>);
    });

    test('CategoriesCarousel general component to be true', () => {
        expect(screen.getByText('Category 1')).toBeDefined();
    });

    test('CategoriesCarousel general component to be true', () => {
        expect(screen.getByText('Category 2')).toBeDefined();
    });
    //Test not exist element
    test('CategoriesCarousel general component to be true', () => {
        expect(screen.queryByText('category 3')).toBeNull();
    });
});

