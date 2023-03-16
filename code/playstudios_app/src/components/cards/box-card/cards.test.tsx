//Create typescript test for component BoxCard
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test, vi } from 'vitest';
import BoxCard from '.';

//Vitest for componenet BoxCard
describe('Test --> BoxCard component', () => {


    beforeEach(() => {

        const store = configureStore({
            //create reducer
            reducer: {
                //create pulse with pulseSlice.reducer
                pulse: () => ({}),
            }

        });

        //create const { container } with render(<BoxCard />)
        render(
            //render in provider redux
            <Provider store={store}>
                <BoxCard >HoLA</BoxCard>
            </Provider>
        );
    });

    //Test BoxCard component to be true
    test('BoxCard component to be true', () => {
        //create const store with configureStore    
    
        expect(screen.getByText('HoLA')).toBeDefined();
    });

    //test case  click event vi
    test('BoxCard component click event', async () => {
        //create const onClick with jest.fn()
        const onClick = vi.fn();

        //create const store with configureStore    
        const store = configureStore({
            //create reducer
            reducer: {
                //create pulse with pulseSlice.reducer
                pulse: () => ({})
            }

        });

        //create const { container } with render(<BoxCard onClick={onClick} />)
        const { container } = render(
            //render in provider redux
            <Provider store={store}>

                <BoxCard onClick={onClick} >HoLA</BoxCard>
            </Provider>


        );
        //create const box with container.querySelector('.box')
        const box = container.querySelector('.box');
        //if box
        if (box) {
            //fireEvent.click(box)
            fireEvent.click(box);
            //expect onClick to be called
            expect(onClick).toBeCalled();
        }
    });


});

