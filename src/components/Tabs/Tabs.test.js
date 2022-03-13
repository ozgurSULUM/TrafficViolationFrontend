import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import Tabs from './Tabs';
test('If user clicks violation1 tab then violation1 tab should be mounted other tabs will be umnounted',()=>{
    render(<Tabs violations1={[]} violations2={[]} violations3={[]}/>);
    const violation1Tab = screen.getByTestId('violation1');
    expect(violation1Tab).toHaveClass('Mui-selected');
    expect(screen.getByTestId('simple-tabpanel-0')).toBeInTheDocument();
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