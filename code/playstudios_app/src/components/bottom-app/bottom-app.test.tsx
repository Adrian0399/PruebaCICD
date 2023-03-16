//create test rest for componente bottom-app

import { render, screen } from '@testing-library/react';
import * as router from 'react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import BottomApp from '.';

const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('Test --> BottomApp component', () => {

    beforeEach(() => {
        render(<BottomApp />);
    });

    test('BottomApp component to be true', () => {
        expect(screen.findByRole('img')).toBeDefined();
    });
});

