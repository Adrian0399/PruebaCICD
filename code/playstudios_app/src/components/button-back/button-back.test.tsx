//Vitest for componente ButtonBack
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

//user slice redux


import { userSlice } from 'slices/userSlice';
import { describe, expect, test } from 'vitest';

import ButtonBack from '.';

describe('Test --> ButtonBack component', () => {

    beforeEach(() => {
        const store = configureStore({
            reducer: {
                user: userSlice.reducer,
            }
        });
        render(<Provider store={store}><ButtonBack /></Provider>);
    });

    test('ButtonBack component to be true', () => {
        expect(screen).toBeDefined();
    });

});

