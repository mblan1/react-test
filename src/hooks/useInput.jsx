import { useState } from 'react';

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onClear = () => {
        setValue('');
    };
    return { value, onChange, onClear };
};

export default useInput;
