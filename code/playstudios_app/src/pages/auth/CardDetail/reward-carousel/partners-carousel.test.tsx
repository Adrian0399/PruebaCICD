//Test componente PartnerCarousel with store mock partnersSlice

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getPartnersMock, parnertsSlice } from 'slices/partnersSlice';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import PartnersCarousel from '.';
import * as router from 'react-router'

const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})
describe('Test --> PartnersCarousel component', () => {
    beforeEach(async () => {
        const store = configureStore({
            reducer: {
                partners: parnertsSlice.reducer
            }
        });
        const result = await store.dispatch(getPartnersMock())
        render(<Provider store={store}><PartnersCarousel /></Provider>);
    });

    test('PartnersCarousel general component to be true', () => {
        expect(screen.getByText('Partners')).toBeDefined();
    });
});
