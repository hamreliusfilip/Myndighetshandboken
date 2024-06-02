import React, { useEffect, useState } from 'react';

interface CheckboxFilterProps {
    options: string[];
    onChange: (filters: Record<string, boolean>) => void;
    reset: boolean;
    storageKey: 'myndighetFilters' | 'compFilters';
}

const CheckFilter: React.FC<CheckboxFilterProps> = ({ options, onChange, reset, storageKey }) => {
    const [filters, setFilters] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const storedFilters = localStorage.getItem(storageKey);

        if (storedFilters) {
            const parsedFilters = JSON.parse(storedFilters);
            const combinedFilters = storageKey === 'myndighetFilters'
                ? {
                    ...parsedFilters.ruleFilters,
                    ...parsedFilters.relationFilters
                }
                : {
                    ...parsedFilters.ruleFilters
                };
            setFilters(combinedFilters);
        } else {
            setFilters(options.reduce((acc, option) => {
                acc[option] = false;
                return acc;
            }, {} as Record<string, boolean>));
        }
    }, [options, storageKey]);

    useEffect(() => {
        if (reset) {
            setFilters(options.reduce((acc, option) => {
                acc[option] = false;
                return acc;
            }, {} as Record<string, boolean>));
        }
    }, [reset, options]);

    const handleCheckboxChange = (option: string) => {
        const newFilters = { ...filters, [option]: !filters[option] };
        setFilters(newFilters);
        onChange(newFilters);
    };

    return (
        <div>
            {options.map((option) => (
                <div className='mt-2' key={option}>
                    <label className="ms-2 text-sm font-regular ">
                        <input
                            type="checkbox"
                            checked={filters[option] || false} 
                            onChange={() => handleCheckboxChange(option)}
                            className="mr-2"
                        />
                        {option}
                        <br />
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CheckFilter;
