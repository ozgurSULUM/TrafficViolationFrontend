import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import ViolationTab from './Violationtab';

describe("Empty list button check", ()=>{

    test('When list is empty there should be a disabled empty button in the list', async() => {
        render(<ViolationTab violations={[]} />);
        const emptyButton = screen.getByTestId('empty-list-button');
        expect(emptyButton).toBeInTheDocument();
        expect(emptyButton).toHaveClass("Mui-disabled");
    });
    
    test('When list is not empty there should not be a disabled empty button in the list', async () => {
        render(<ViolationTab violations={[{_id:"12341", violation_video_url:'mock-url'}]} />);
        expect(screen.queryByTestId('empty-list-button')).toBeNull();
    });
    
});

