//create test rest for componente bottom-icon

import React from 'react';
import {beforeEach, describe, expect, test} from 'vitest';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import BottomIcon from '.';
import mainIcon from 'assets/main-icon.svg'

describe('Test --> BottomIcon component', () => {
    
        beforeEach(() => {
            render(<BottomIcon src={mainIcon} alt="Back" height="20px" width="20px"/>);
        });
    
        test('BottomIcon component to be true', () => {
            expect(screen.getByRole('img')).toBeDefined();
        });
    }
);
