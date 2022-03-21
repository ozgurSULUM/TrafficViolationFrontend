import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Tabs from './Tabs';

describe("Tab tests", ()=>{
    test('When Tabs component violation1 tab panel will be visible as default and other tab panels will be hidden.', async()=>{
        const tabsElement = render(<Tabs violations1={[]} violations2={[]} violations3={[]}/>);
        expect(screen.queryByTestId('simple-tabpanel-0')).toBeInTheDocument();
        expect(screen.queryByTestId('simple-tabpanel-1')).not.toBeVisible();
        expect(screen.queryByTestId('simple-tabpanel-2')).not.toBeVisible();
    });
});

/*
test('If user clicks violation2 tab then violation2 tab should be mounted other tabs will be umnounted',()=>{
    render(<Tabs violations1={[]} violations2={[]} violations3={[]}/>);
    expect(screen.getByTestId('violation2')).toHaveClass('Mui-selected');
    expect(screen.getByTestId('simple-tabpanel-0')).toBeInTheDocument();
});

test('If user clicks violation3 tab then violation3 tab should be mounted other tabs will be umnounted',()=>{
    render(<Tabs violations1={[]} violations2={[]} violations3={[]}/>);
    expect(screen.getByTestId('violation3')).toHaveClass('Mui-selected');
    expect(screen.getByTestId('simple-tabpanel-0')).toBeInTheDocument();
});
*/