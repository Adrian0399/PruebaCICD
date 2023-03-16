//Create test for component PriceTag
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import PriceTag from '.';


describe('Test --> PriceTag component', () => {

    beforeEach(() => {
        render(<PriceTag value={1244} />);
    });

    test('PriceTag component to be true', () => {
        expect(screen.getByText('1,244')).toBeDefined();
    });

});