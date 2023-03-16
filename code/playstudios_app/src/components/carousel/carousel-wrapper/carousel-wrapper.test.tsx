//Compare this snippet from componenet code\playstudios_app\src\components\carousel\carousel-wrapper\carousel-wrapper.test.tsx

import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import CarouselWrapper from '.';
import * as router from 'react-router'
//define props CarouselWrapperProps
const props = {
    title: 'Featured'
};


const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('Test --> CarouselWrapper component', () => {

    beforeEach(() => {
        render(<CarouselWrapper {...props} ><div> inner </div>)</CarouselWrapper>);
    });

    test('CarouselWrapper component to be true', () => {
        expect(screen.getByText('Featured')).toBeDefined();
    });

    test('CarouselWrapper component inner to be true', () => {
        expect(screen.getByText('inner')).toBeDefined();
    });
});
