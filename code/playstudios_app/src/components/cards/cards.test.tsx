//Create test for component PlayCard with vitest

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { userSlice } from 'src/store/slices/userSlice';
import { describe, expect, test } from 'vitest';
import PlayCard from '.';
import { CardVariant } from './variants';

describe('Test --> PlayCard component', () => {

    beforeEach(() => {
        const store = configureStore({
            reducer: {
                user: userSlice.reducer,
            }
        });


        //define props for component PlayCard
        const props = {
            variant: CardVariant.category,
            key: 1,
            title: "Play Card",
            description: "Play Card",
            image: "Play Card",
        }

        render(<Provider store={store}><PlayCard  {...props}></PlayCard> </Provider>);
    });

    test('PlayCard component to be true', () => {
        expect(screen).toBeDefined();
    });
});