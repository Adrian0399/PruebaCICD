//Create react test for component loading
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import Loading from '.';

describe('Test --> Loading component', () => {

    beforeEach(() => {
        render(<Loading titles={['Loading...', 'Loading...']} />);
    });
    
    //Test not exist element
    test('Loading component to be true', () => {
        expect(screen.queryByText('Loading')).toBeNull();
    });

});